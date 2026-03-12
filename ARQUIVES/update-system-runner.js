const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const crypto = require('crypto');

const ROOT = process.cwd();
const INFO_PATH = path.resolve(ROOT, 'DADOS DO YUTA/INFO_YUTA/media/INFO_YUTA.json');
const STATE_PATH = path.resolve(ROOT, 'DADOS DO YUTA/INFO_YUTA/media/update_job_state.json');
const REQUEST_PATH = path.resolve(ROOT, 'DADOS DO YUTA/INFO_YUTA/media/update_request.json');
const DATA_DIR = path.resolve(ROOT, 'DADOS DO YUTA');
const LICENSE_FILE = path.resolve(ROOT, 'license.json');
const TMP_DIR = path.resolve(ROOT, '.update-backup');
const BACKUP_DATA = path.resolve(TMP_DIR, 'DADOS DO YUTA');
const BACKUP_LICENSE = path.resolve(TMP_DIR, 'license.json');
const IGNORE_PREFIXES = [
  'node_modules/',
  '.git/',
  '.update-backup/',
];

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return fallback;
  }
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2));
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function rmSafe(target) {
  try {
    fs.rmSync(target, { recursive: true, force: true });
  } catch {}
}

function copyPath(src, dst) {
  if (!fs.existsSync(src)) return;
  fs.cpSync(src, dst, { recursive: true, force: true });
}

function toRel(absolutePath) {
  return path.relative(ROOT, absolutePath).split(path.sep).join('/');
}

function shouldIgnore(relPath) {
  if (!relPath) return true;
  if (relPath === 'node_modules') return true;
  if (relPath === '.git') return true;
  if (relPath === '.update-backup') return true;
  return IGNORE_PREFIXES.some((prefix) => relPath.startsWith(prefix));
}

function listFiles(dirPath, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dirPath, entry.name);
    const rel = toRel(full);
    if (shouldIgnore(rel)) continue;
    if (entry.isDirectory()) {
      listFiles(full, out);
      continue;
    }
    if (entry.isFile()) out.push(rel);
  }
  return out;
}

function hashFileByRel(relPath) {
  const abs = path.join(ROOT, relPath);
  const data = fs.readFileSync(abs);
  return crypto.createHash('sha256').update(data).digest('hex');
}

function takeSnapshot() {
  const map = new Map();
  const files = listFiles(ROOT, []).sort();
  for (const rel of files) {
    map.set(rel, hashFileByRel(rel));
  }
  return map;
}

function diffSnapshots(before, after) {
  const changed = [];
  const keys = new Set([...before.keys(), ...after.keys()]);
  for (const rel of [...keys].sort()) {
    const a = before.get(rel);
    const b = after.get(rel);
    if (!a && b) changed.push(`[added] ${rel}`);
    else if (a && !b) changed.push(`[removed] ${rel}`);
    else if (a !== b) changed.push(`[modified] ${rel}`);
  }
  return changed;
}

function shellEscape(value) {
  return `'${String(value ?? '').replace(/'/g, `'\\''`)}'`;
}

function runCmd(command) {
  return new Promise((resolve) => {
    exec(command, { cwd: ROOT, timeout: 1000 * 60 * 25 }, (error, stdout, stderr) => {
      resolve({
        ok: !error,
        code: error?.code || 0,
        stdout: String(stdout || ''),
        stderr: String(stderr || error?.message || ''),
      });
    });
  });
}

function getBotVersion() {
  const info = readJson(INFO_PATH, {});
  const local = String(info?.BOT_VERSION || 'v0.0.0.0').trim();
  return local.startsWith('v') ? local : `v${local}`;
}

function bumpPatch(version) {
  const normalized = String(version || 'v0.0.0.0').replace(/^v/, '');
  const parts = normalized.split('.').map((n) => Number(n));
  while (parts.length < 4) parts.push(0);
  parts[3] += 1;
  return `v${parts.slice(0, 4).join('.')}`;
}

async function main() {
  ensureDir(path.dirname(STATE_PATH));
  ensureDir(path.dirname(REQUEST_PATH));
  const state = readJson(STATE_PATH, {});
  const request = readJson(REQUEST_PATH, {
    pending: false,
    requestedAt: null,
    requestedBy: null,
    targetVersion: null,
  });

  if (!request.pending) {
    writeJson(STATE_PATH, {
      ...state,
      running: false,
      lastStatus: 'idle',
      lastMessage: 'Sem update pendente.',
      pid: null,
      updatedAt: new Date().toISOString(),
    });
    return;
  }

  const beforeVersion = getBotVersion();
  const by = String(process.env.YUTA_UPDATE_BY || request.requestedBy || 'console');

  writeJson(STATE_PATH, {
    ...state,
    running: true,
    lastStatus: 'running',
    lastMessage: 'Executando update seguro...',
    lastFromVersion: beforeVersion,
    lastBy: by,
    pid: process.pid,
    updatedAt: new Date().toISOString(),
  });

  rmSafe(TMP_DIR);
  ensureDir(TMP_DIR);
  copyPath(DATA_DIR, BACKUP_DATA);
  copyPath(LICENSE_FILE, BACKUP_LICENSE);
  const beforeSnapshot = takeSnapshot();

  // Blindagem: update remoto nao altera node_modules para evitar quebra de conexao.
  const updateCommand = 'npm run update:source';
  const result = await runCmd(updateCommand);
  copyPath(BACKUP_DATA, DATA_DIR);
  copyPath(BACKUP_LICENSE, LICENSE_FILE);
  rmSafe(TMP_DIR);

  const info = readJson(INFO_PATH, {});
  let afterVersion = beforeVersion;
  if (result.ok) {
    afterVersion = bumpPatch(beforeVersion);
    info.BOT_VERSION = afterVersion;
    writeJson(INFO_PATH, info);
  }
  const afterSnapshot = takeSnapshot();
  const changedFiles = diffSnapshots(beforeSnapshot, afterSnapshot);
  const stdoutTrim = String(result.stdout || '').slice(0, 10000);
  const stderrTrim = String(result.stderr || '').slice(0, 10000);
  const filesB64 = Buffer.from(JSON.stringify(changedFiles), 'utf8').toString('base64');
  const cmdB64 = Buffer.from(updateCommand, 'utf8').toString('base64');
  const stdoutB64 = Buffer.from(stdoutTrim, 'utf8').toString('base64');
  const stderrB64 = Buffer.from(stderrTrim, 'utf8').toString('base64');

  await runCmd(
    `node ./ARQUIVES/report-update.js ` +
    `--sender=${shellEscape(by)} ` +
    `--connect=${shellEscape(by === 'console' ? 'console' : by)} ` +
    `--from=${shellEscape(beforeVersion)} ` +
    `--to=${shellEscape(afterVersion)} ` +
    `--connected=${shellEscape('Disconnected')} ` +
    `--files-b64=${shellEscape(filesB64)} ` +
    `--cmd-b64=${shellEscape(cmdB64)} ` +
    `--stdout-b64=${shellEscape(stdoutB64)} ` +
    `--stderr-b64=${shellEscape(stderrB64)}`
  );

  writeJson(STATE_PATH, {
    ...readJson(STATE_PATH, {}),
    running: false,
    lastStatus: result.ok ? 'ok' : 'error',
    lastMessage: result.ok ? 'Update finalizado com sucesso.' : `Falha no update: ${result.stderr.slice(0, 400)}`,
    lastFromVersion: beforeVersion,
    lastToVersion: afterVersion,
    lastBy: by,
    changedFiles,
    changedFilesCount: changedFiles.length,
    updateCommand,
    updateStdout: stdoutTrim,
    updateStderr: stderrTrim,
    pid: null,
    lastRunAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  writeJson(REQUEST_PATH, {
    ...request,
    pending: false,
    appliedAt: new Date().toISOString(),
    lastStatus: result.ok ? 'ok' : 'error',
    lastMessage: result.ok ? 'Update aplicado no boot.' : `Falha no update: ${result.stderr.slice(0, 400)}`,
    lastFromVersion: beforeVersion,
    lastToVersion: afterVersion,
    changedFilesCount: changedFiles.length,
  });
}

main().catch((error) => {
  writeJson(STATE_PATH, {
    ...readJson(STATE_PATH, {}),
    running: false,
    lastStatus: 'error',
    lastMessage: `Erro fatal: ${error.message || error}`,
    pid: null,
    lastRunAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  process.exit(1);
});
