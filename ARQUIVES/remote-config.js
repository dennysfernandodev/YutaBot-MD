const path = require('path');
const { fs, fetch } = require('./funcoes/exports.js');
const { setRemoteCommandsConfig } = require('./remote-commands');

const INFO_PATH = path.resolve(process.cwd(), 'DADOS DO YUTA/INFO_YUTA/media/INFO_YUTA.json');
const NECESSARIO_PATH = path.resolve(process.cwd(), 'DADOS DO YUTA/INFO_YUTA/media/nescessario.json');
const REMOTE_COMMANDS_PATH = path.resolve(process.cwd(), 'DADOS DO YUTA/INFO_YUTA/media/remote_commands.json');
const UPDATE_STATE_PATH = path.resolve(process.cwd(), 'DADOS DO YUTA/INFO_YUTA/media/update_state.json');

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

function normalizeNumber(value) {
  return String(value || '').replace(/\D/g, '');
}

function deepMerge(target, patch) {
  if (!patch || typeof patch !== 'object') return target;
  Object.keys(patch).forEach((key) => {
    const value = patch[key];
    if (Array.isArray(value)) {
      target[key] = value.slice();
      return;
    }
    if (value && typeof value === 'object') {
      if (!target[key] || typeof target[key] !== 'object' || Array.isArray(target[key])) {
        target[key] = {};
      }
      deepMerge(target[key], value);
      return;
    }
    target[key] = value;
  });
  return target;
}

function boolFromEnv(name, fallback) {
  const value = process.env[name];
  if (value == null) return fallback;
  return ['1', 'true', 'yes', 'on'].includes(String(value).toLowerCase());
}

function resolveRuntimeClient(setting) {
  const credentials = setting?.CREDENTIALS_USER || {};
  const apiBase = String(
    process.env.YUTA_REMOTE_API_BASE ||
    credentials.REMOTE_API_BASE ||
    setting?.SITE ||
    'https://yuta-apis.xyz'
  ).replace(/\/$/, '');

  const clientId = String(process.env.YUTA_REMOTE_CLIENT_ID || credentials.REMOTE_CLIENT_ID || '').trim();
  const clientKey = String(process.env.YUTA_REMOTE_CLIENT_KEY || credentials.REMOTE_CLIENT_KEY || '').trim();

  return { apiBase, clientId, clientKey };
}

function resolveOwnerInfo(setting) {
  const info = readJson(INFO_PATH, {});
  const ownerName = String(setting?.ownerName || info?.ownerName || '').trim();
  const ownerNumber = normalizeNumber(
    setting?.ownerNumber ||
    info?.ownerNumber ||
    info?.CREDENTIALS_USER?.NUMERO_DONO ||
    ''
  );
  const botName = String(
    info?.NomeDoBot ||
    setting?.NomeDoBot ||
    setting?.botName ||
    'YutaBot-MD'
  ).trim() || 'YutaBot-MD';

  return {
    ownerName: ownerName || null,
    ownerNumber: ownerNumber || null,
    botName,
  };
}

function applyPatchToRuntime(runtime, nextValue) {
  if (!runtime || typeof runtime !== 'object') return;
  Object.keys(runtime).forEach((k) => delete runtime[k]);
  Object.keys(nextValue || {}).forEach((k) => {
    runtime[k] = nextValue[k];
  });
}

async function fetchRemoteConfig({ setting, nescessario, packageVersion }) {
  const enabled = boolFromEnv('YUTA_REMOTE_CONFIG_ENABLED', true);
  if (!enabled) {
    return { ok: false, skipped: true, reason: 'disabled' };
  }

  const runtime = resolveRuntimeClient(setting);
  if (!runtime.clientId || !runtime.clientKey) {
    return { ok: false, skipped: true, reason: 'missing_client_credentials' };
  }

  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timeout = controller ? setTimeout(() => controller.abort(), 12000) : null;

  try {
    const url = `${runtime.apiBase}/api/bot/config`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-client-id': runtime.clientId,
        'x-client-key': runtime.clientKey,
        'x-bot-version': packageVersion || 'unknown',
      },
      signal: controller ? controller.signal : undefined,
    });

    if (!response.ok) {
      return { ok: false, status: response.status, reason: 'http_error' };
    }

    const payload = await response.json();
    if (!payload?.ok || typeof payload?.config !== 'object' || !payload.config) {
      return { ok: false, reason: 'invalid_payload' };
    }

    const currentInfo = readJson(INFO_PATH, {});
    const currentNec = readJson(NECESSARIO_PATH, {});

    const nextInfo = deepMerge({ ...currentInfo }, payload.config.infoYuta || {});
    const nextNec = deepMerge({ ...currentNec }, payload.config.nescessario || {});
    const nextRemoteCommands = payload.config.remoteCommands;

    writeJson(INFO_PATH, nextInfo);
    writeJson(NECESSARIO_PATH, nextNec);
    if (nextRemoteCommands && typeof nextRemoteCommands === 'object') {
      const normalizedCommands = setRemoteCommandsConfig(nextRemoteCommands);
      writeJson(REMOTE_COMMANDS_PATH, normalizedCommands);
    }

    applyPatchToRuntime(setting, nextInfo);
    applyPatchToRuntime(nescessario, nextNec);

    return {
      ok: true,
      configVersion: payload.configVersion || 1,
      latestRelease: payload.latestRelease || null,
      apiBase: runtime.apiBase,
      clientId: runtime.clientId,
    };
  } catch (error) {
    return { ok: false, reason: error.name === 'AbortError' ? 'timeout' : error.message };
  } finally {
    if (timeout) clearTimeout(timeout);
  }
}

async function sendHeartbeat({ setting, packageVersion }) {
  const runtime = resolveRuntimeClient(setting);
  if (!runtime.clientId || !runtime.clientKey) return;
  const ownerInfo = resolveOwnerInfo(setting);

  const uptimeSec = Math.floor(process.uptime());
  const memoryMb = Math.round(process.memoryUsage().rss / 1024 / 1024);

  try {
    await fetch(`${runtime.apiBase}/api/bot/heartbeat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-client-id': runtime.clientId,
        'x-client-key': runtime.clientKey,
        'x-bot-version': packageVersion || 'unknown',
      },
      body: JSON.stringify({
        uptimeSec,
        memoryMb,
        version: packageVersion || 'unknown',
        ownerName: ownerInfo.ownerName,
        ownerNumber: ownerInfo.ownerNumber,
        botName: ownerInfo.botName,
      }),
    });
  } catch {}
}

async function sendUpdateReport({
  setting,
  packageVersion,
  sender = 'console',
  connect = 'console',
  versionFrom = 'NULL',
  versionTo = packageVersion || 'unknown',
  connected = 'Disconnected',
  versionNumber,
  changedFiles = [],
  updateCommand = '',
  updateStdout = '',
  updateStderr = '',
}) {
  const runtime = resolveRuntimeClient(setting);
  if (!runtime.clientId || !runtime.clientKey) return { ok: false, reason: 'missing_client_credentials' };

  const ownerInfo = resolveOwnerInfo(setting);
  const senderNorm = sender === 'console' ? 'console' : normalizeNumber(sender);
  const userField = senderNorm === 'console'
    ? (ownerInfo.ownerNumber || 'console')
    : (senderNorm || 'console');

  try {
    const response = await fetch(`${runtime.apiBase}/api/bot/update-report`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-client-id': runtime.clientId,
        'x-client-key': runtime.clientKey,
        'x-bot-version': packageVersion || 'unknown',
      },
      body: JSON.stringify({
        user: userField,
        sender: senderNorm || 'console',
        connect: connect || (senderNorm === 'console' ? 'console' : senderNorm),
        ownerName: ownerInfo.ownerName,
        ownerNumber: ownerInfo.ownerNumber,
        botName: ownerInfo.botName,
        versionFrom: String(versionFrom || 'NULL'),
        versionTo: String(versionTo || packageVersion || 'unknown'),
        connected: connected || 'Disconnected',
        Version: Number.isFinite(Number(versionNumber)) ? Number(versionNumber) : undefined,
        updates: `${String(versionFrom || 'NULL')} > ${String(versionTo || packageVersion || 'unknown')}`,
        changedFiles: Array.isArray(changedFiles) ? changedFiles : [],
        changedFilesCount: Array.isArray(changedFiles) ? changedFiles.length : 0,
        updateCommand: String(updateCommand || ''),
        updateStdout: String(updateStdout || ''),
        updateStderr: String(updateStderr || ''),
      }),
    });

    const data = await response.json().catch(() => ({}));
    return { ok: response.ok && data?.ok === true, data };
  } catch (error) {
    return { ok: false, reason: error.message || 'send_update_report_failed' };
  }
}

async function syncStartupUpdateReport({ setting, packageVersion, logger }) {
  const log = logger || console;
  const currentVersion = String(packageVersion || 'unknown').trim() || 'unknown';
  const state = readJson(UPDATE_STATE_PATH, { lastVersion: null, updateCounter: 0 });
  const lastVersion = state?.lastVersion ? String(state.lastVersion) : null;
  const changed = lastVersion !== currentVersion;

  if (!changed) return;

  const nextCounter = Number(state?.updateCounter || 0) + 1;
  const from = lastVersion || 'NULL';
  const report = await sendUpdateReport({
    setting,
    packageVersion: currentVersion,
    sender: 'console',
    connect: 'console',
    versionFrom: from,
    versionTo: currentVersion,
    connected: 'Disconnected',
    versionNumber: nextCounter,
  });

  if (!report.ok) {
    log.log(`[UPDATE-REPORT] Falha ao enviar log de update: ${report.reason || 'erro desconhecido'}`);
  } else {
    log.log(`[UPDATE-REPORT] Update registrado: ${from} > ${currentVersion}`);
  }

  writeJson(UPDATE_STATE_PATH, {
    lastVersion: currentVersion,
    updateCounter: nextCounter,
    updatedAt: new Date().toISOString(),
  });
}

function startRemotePolling({ setting, nescessario, packageVersion, logger }) {
  const everySec = Math.max(15, Number(process.env.YUTA_REMOTE_POLL_SEC || 60));
  const log = logger || console;

  let lastConfigVersion = null;

  const run = async () => {
    const result = await fetchRemoteConfig({ setting, nescessario, packageVersion });
    if (!result.ok) {
      if (!result.skipped) {
        log.log(`[REMOTE-CONFIG] Falha ao sincronizar: ${result.reason || 'erro desconhecido'}`);
      }
      return;
    }

    if (result.configVersion !== lastConfigVersion) {
      lastConfigVersion = result.configVersion;
      log.log(`[REMOTE-CONFIG] Configuração sincronizada. versão=${result.configVersion}`);
    }

    if (result.latestRelease?.version) {
      log.log(`[UPDATE] Última versão disponível: ${result.latestRelease.version} | pacote: ${result.latestRelease.npmPackage || 'yutabot-md'}`);
    }

    sendHeartbeat({ setting, packageVersion }).catch(() => {});
  };

  syncStartupUpdateReport({ setting, packageVersion, logger: log }).catch(() => {});
  run().catch(() => {});
  return setInterval(() => run().catch(() => {}), everySec * 1000);
}

module.exports = {
  fetchRemoteConfig,
  startRemotePolling,
  sendUpdateReport,
};
