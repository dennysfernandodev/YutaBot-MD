#!/usr/bin/env node

import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';
import { exec } from 'child_process';
import os from 'os';
import { promisify } from 'util';

const execAsync = promisify(exec);

const REPO_URL = process.env.YUTA_UPDATE_REPO_URL || 'https://github.com/dennysfernandodev/YutaBot-MD.git';
const BACKUP_DIR = path.join(process.cwd(), `backup_${new Date().toISOString().replace(/[:.]/g, '_').replace(/T/, '_')}`);
const TEMP_DIR = path.join(process.cwd(), 'temp_update_repo');
const isWindows = os.platform() === 'win32';

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[1;32m',
  red: '\x1b[1;31m',
  blue: '\x1b[1;34m',
  cyan: '\x1b[1;36m',
  dim: '\x1b[2m',
  bold: '\x1b[1m',
};

const p = {
  msg: (t) => console.log(`${colors.green}${t}${colors.reset}`),
  warn: (t) => console.log(`${colors.red}${t}${colors.reset}`),
  info: (t) => console.log(`${colors.cyan}${t}${colors.reset}`),
  detail: (t) => console.log(`${colors.dim}${t}${colors.reset}`),
  sep: () => console.log(`${colors.blue}============================================${colors.reset}`),
};

function getRepoOwnerAndName(url) {
  const clean = String(url || '').trim().replace(/\.git$/i, '');
  const m = clean.match(/github\.com[/:]([^/]+)\/([^/]+)$/i);
  if (!m) return null;
  return { owner: m[1], repo: m[2] };
}

function getUpdatesStoreDir() {
  const botDir = path.join(process.cwd(), 'dados', 'database');
  if (fsSync.existsSync(path.join(process.cwd(), 'dados'))) return botDir;
  return path.join(process.cwd(), 'lib', 'secret');
}

function formatUpdatesMessage(summary) {
  const lines = [];
  lines.push('═══════════════════════');
  lines.push('');
  lines.push(`📊 Total de Atualizações: ${summary.totalUpdates || 0}`);
  lines.push('');
  lines.push('═══════════════════════');
  lines.push('');
  lines.push('📝 Descrições das Atualizações:');

  if (!summary.descriptions?.length) {
    lines.push('  1. Sem descrição disponível');
  } else {
    summary.descriptions.forEach((desc, idx) => {
      lines.push(`  ${idx + 1}. ${desc}`);
    });
  }

  lines.push('');
  lines.push('═══════════════════════');
  lines.push('');
  lines.push('📂 Arquivos Editados:');

  if (!summary.files?.length) {
    lines.push('  Nenhum arquivo alterado identificado.');
  } else {
    summary.files.forEach((f) => {
      lines.push(`  📄 ${f.path} (${f.status})`);
      lines.push(`     ➕ Adicionadas: ${f.added} linhas`);
      lines.push(`     ➖ Removidas: ${f.removed} linhas`);
    });
  }

  lines.push('');
  lines.push('═══════════════════════');
  return lines.join('\n');
}

async function fetchCommitSummary(repoUrl, limit = 5) {
  const parsed = getRepoOwnerAndName(repoUrl);
  if (!parsed) {
    return {
      totalUpdates: 0,
      descriptions: [],
      files: [],
      commits: [],
      source: 'invalid_repo_url',
    };
  }

  const { owner, repo } = parsed;
  const headers = { Accept: 'application/vnd.github+json' };

  const commitsRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=${limit}`, { headers });
  if (!commitsRes.ok) throw new Error(`GitHub commits API: ${commitsRes.status}`);
  const commits = await commitsRes.json();

  const descriptions = [];
  const fileAgg = new Map();
  const commitItems = [];

  for (const c of commits) {
    const sha = c?.sha;
    const message = String(c?.commit?.message || 'Sem mensagem').split('\n')[0].trim() || 'Sem mensagem';
    descriptions.push(message);

    const detailRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits/${sha}`, { headers });
    if (!detailRes.ok) continue;
    const detail = await detailRes.json();
    const files = Array.isArray(detail?.files) ? detail.files : [];

    const commitFiles = [];
    for (const f of files) {
      const filename = String(f?.filename || 'arquivo_desconhecido');
      const status = String(f?.status || 'modified');
      const additions = Number(f?.additions || 0);
      const deletions = Number(f?.deletions || 0);

      const cur = fileAgg.get(filename) || { path: filename, status: 'Modificado', added: 0, removed: 0 };
      cur.status = status === 'added' ? 'Adicionado' : status === 'removed' ? 'Removido' : 'Modificado';
      cur.added += additions;
      cur.removed += deletions;
      fileAgg.set(filename, cur);

      commitFiles.push({ path: filename, status: cur.status, added: additions, removed: deletions });
    }

    commitItems.push({ sha, message, files: commitFiles });
  }

  return {
    totalUpdates: descriptions.length,
    descriptions,
    files: [...fileAgg.values()].slice(0, 100),
    commits: commitItems,
    source: `github:${owner}/${repo}`,
  };
}

async function saveUpdateArtifacts(repoUrl) {
  const outDir = getUpdatesStoreDir();
  await fs.mkdir(outDir, { recursive: true });

  const summary = await fetchCommitSummary(repoUrl, 5);
  const formatted = formatUpdatesMessage(summary);
  const now = new Date().toISOString();

  const saveJson = {
    total: Number(summary.totalUpdates || 0),
    updatedAt: now,
    source: summary.source,
  };

  const detailsJson = {
    generatedAt: now,
    repoUrl,
    ...summary,
    message: formatted,
  };

  await fs.writeFile(path.join(outDir, 'updateSave.json'), JSON.stringify(saveJson, null, 2));
  await fs.writeFile(path.join(outDir, 'updateDetails.json'), JSON.stringify(detailsJson, null, 2));
  await fs.writeFile(path.join(outDir, 'updateMessage.txt'), formatted);

  p.sep();
  console.log(formatted);
  p.sep();
}

function setupGracefulShutdown() {
  const shutdown = () => {
    console.log('\n');
    p.warn('🛑 Atualização cancelada pelo usuário.');
    process.exit(0);
  };
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
}

async function displayHeader() {
  p.sep();
  console.log(`${colors.bold}🚀 Yuta - Atualizador${colors.reset}`);
  console.log(`${colors.bold}👨‍💻 Script aplicado e ajustado${colors.reset}`);
  p.sep();
  console.log();
  p.info(`🔗 Repositório: ${REPO_URL}`);
}

async function checkRequirements() {
  p.info('🔍 Verificando requisitos do sistema...');
  await execAsync('git --version');
  await execAsync('npm --version');
  p.detail('✅ Git e NPM encontrados.');
}

async function confirmUpdate() {
  p.warn('⚠️ A atualização sobrescreverá arquivos, preservando dados e config principais.');
  p.info('📂 Um backup será criado automaticamente.');
  p.warn('🛑 Pressione Ctrl+C para cancelar.');
  return new Promise((resolve) => {
    let countdown = 5;
    const timer = setInterval(() => {
      process.stdout.write(`\r⏳ Iniciando em ${countdown} segundos...${' '.repeat(20)}`);
      countdown--;
      if (countdown < 0) {
        clearInterval(timer);
        process.stdout.write('\r                                  \n');
        p.msg('🚀 Prosseguindo com a atualização...');
        resolve();
      }
    }, 1000);
  });
}

async function createBackup() {
  p.msg('📁 Criando backup dos arquivos...');
  await fs.mkdir(path.join(BACKUP_DIR, 'dados', 'database'), { recursive: true });
  await fs.mkdir(path.join(BACKUP_DIR, 'dados', 'src'), { recursive: true });
  await fs.mkdir(path.join(BACKUP_DIR, 'dados', 'midias'), { recursive: true });

  const databaseDir = path.join(process.cwd(), 'dados', 'database');
  if (fsSync.existsSync(databaseDir)) {
    p.detail('📂 Copiando diretório de banco de dados...');
    await fs.cp(databaseDir, path.join(BACKUP_DIR, 'dados', 'database'), { recursive: true });
  }

  const configFile = path.join(process.cwd(), 'dados', 'src', 'config.json');
  if (fsSync.existsSync(configFile)) {
    p.detail('📝 Copiando arquivo de configuração...');
    await fs.copyFile(configFile, path.join(BACKUP_DIR, 'dados', 'src', 'config.json'));
  }

  const midiasDir = path.join(process.cwd(), 'dados', 'midias');
  if (fsSync.existsSync(midiasDir)) {
    p.detail('🖼️ Copiando diretório de mídias...');
    await fs.cp(midiasDir, path.join(BACKUP_DIR, 'dados', 'midias'), { recursive: true });
  }

  p.msg(`✅ Backup salvo em: ${BACKUP_DIR}`);
}

async function downloadUpdate() {
  p.msg('📥 Baixando a versão mais recente...');
  if (fsSync.existsSync(TEMP_DIR)) await fs.rm(TEMP_DIR, { recursive: true, force: true });

  const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  let i = 0;
  const interval = setInterval(() => {
    process.stdout.write(`\r${spinner[i]} Baixando...`);
    i = (i + 1) % spinner.length;
  }, 100);

  try {
    await execAsync(`git clone --depth 1 ${REPO_URL} "${TEMP_DIR}"`);
  } finally {
    clearInterval(interval);
    process.stdout.write('\r                 \r');
  }

  const readmePath = path.join(TEMP_DIR, 'README.md');
  if (fsSync.existsSync(readmePath)) await fs.unlink(readmePath);
  p.msg('✅ Download concluído com sucesso.');
}

async function checkDependencyChanges() {
  p.info('🔍 Verificando mudanças nas dependências...');
  try {
    const currentPackageJsonPath = path.join(process.cwd(), 'package.json');
    const newPackageJsonPath = path.join(TEMP_DIR, 'package.json');
    if (!fsSync.existsSync(currentPackageJsonPath) || !fsSync.existsSync(newPackageJsonPath)) return 'MISSING_PACKAGE_JSON';

    const currentPackage = JSON.parse(await fs.readFile(currentPackageJsonPath, 'utf8'));
    const newPackage = JSON.parse(await fs.readFile(newPackageJsonPath, 'utf8'));

    const keys = ['dependencies', 'devDependencies', 'optionalDependencies', 'scripts'];
    for (const key of keys) {
      if (JSON.stringify(currentPackage[key] || {}) !== JSON.stringify(newPackage[key] || {})) return 'DEPENDENCIES_CHANGED';
    }

    const nodeModulesPath = path.join(process.cwd(), 'node_modules');
    if (!fsSync.existsSync(nodeModulesPath)) return 'MISSING_NODE_MODULES';

    return 'NO_CHANGES';
  } catch {
    return 'ERROR';
  }
}

async function cleanOldFiles({ removeNodeModules = true, removePackageLock = true } = {}) {
  p.msg('🧹 Limpando arquivos antigos...');

  const items = [
    { p: path.join(process.cwd(), '.git'), d: true },
    { p: path.join(process.cwd(), '.github'), d: true },
    { p: path.join(process.cwd(), '.npm'), d: true },
    { p: path.join(process.cwd(), 'README.md'), d: false },
  ];
  if (removeNodeModules) items.push({ p: path.join(process.cwd(), 'node_modules'), d: true });
  if (removePackageLock) items.push({ p: path.join(process.cwd(), 'package-lock.json'), d: false });

  for (const item of items) {
    if (!fsSync.existsSync(item.p)) continue;
    if (item.d) await fs.rm(item.p, { recursive: true, force: true });
    else await fs.unlink(item.p);
  }

  const dadosDir = path.join(process.cwd(), 'dados');
  if (fsSync.existsSync(dadosDir)) {
    const cleanTargets = ['src/config.json', 'src/.scripts'];
    for (const rel of cleanTargets) {
      const full = path.join(dadosDir, rel);
      if (!fsSync.existsSync(full)) continue;
      if (fsSync.statSync(full).isDirectory()) await fs.rm(full, { recursive: true, force: true });
      else await fs.unlink(full);
    }
  }

  p.msg('✅ Limpeza concluída.');
}

async function applyUpdate() {
  p.msg('🚀 Aplicando atualização...');
  await fs.cp(TEMP_DIR, process.cwd(), { recursive: true });
  await fs.rm(TEMP_DIR, { recursive: true, force: true });
  p.msg('✅ Atualização aplicada com sucesso.');
}

async function restoreBackup() {
  p.msg('📂 Restaurando backup...');
  await fs.mkdir(path.join(process.cwd(), 'dados', 'database'), { recursive: true });
  await fs.mkdir(path.join(process.cwd(), 'dados', 'src'), { recursive: true });
  await fs.mkdir(path.join(process.cwd(), 'dados', 'midias'), { recursive: true });

  const bdb = path.join(BACKUP_DIR, 'dados', 'database');
  if (fsSync.existsSync(bdb)) await fs.cp(bdb, path.join(process.cwd(), 'dados', 'database'), { recursive: true });
  const bcfg = path.join(BACKUP_DIR, 'dados', 'src', 'config.json');
  if (fsSync.existsSync(bcfg)) await fs.copyFile(bcfg, path.join(process.cwd(), 'dados', 'src', 'config.json'));
  const bmid = path.join(BACKUP_DIR, 'dados', 'midias');
  if (fsSync.existsSync(bmid)) await fs.cp(bmid, path.join(process.cwd(), 'dados', 'midias'), { recursive: true });

  p.msg('✅ Backup restaurado com sucesso.');
}

async function installDependencies(precomputedResult) {
  const checkResult = precomputedResult ?? await checkDependencyChanges();
  if (checkResult === 'NO_CHANGES') {
    p.msg('⚡ Dependências já estão atualizadas, pulando instalação');
    return;
  }

  p.msg('📦 Instalando dependências...');

  const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
  let i = 0;
  const interval = setInterval(() => {
    process.stdout.write(`\r${spinner[i]} Instalando dependências...`);
    i = (i + 1) % spinner.length;
  }, 100);

  try {
    await execAsync('npm run config:install', { shell: isWindows });
  } finally {
    clearInterval(interval);
    process.stdout.write('\r                                \r');
  }

  p.msg('✅ Dependências instaladas com sucesso.');
}

async function cleanup() {
  p.msg('🧹 Limpando arquivos temporários...');
  if (fsSync.existsSync(BACKUP_DIR)) await fs.rm(BACKUP_DIR, { recursive: true, force: true });
}

async function main() {
  let backupCreated = false;
  let updateApplied = false;
  try {
    setupGracefulShutdown();
    await displayHeader();
    await checkRequirements();
    await confirmUpdate();
    await createBackup();
    backupCreated = true;
    await downloadUpdate();
    const depState = await checkDependencyChanges();
    const removeDeps = depState !== 'NO_CHANGES';
    await cleanOldFiles({ removeNodeModules: removeDeps, removePackageLock: removeDeps });
    await applyUpdate();
    updateApplied = true;
    await restoreBackup();
    await installDependencies(depState);
    await saveUpdateArtifacts(REPO_URL);
    await cleanup();

    p.sep();
    p.msg('🎉 Atualização concluída com sucesso!');
    p.msg('🚀 Inicie com: npm start');
    p.sep();
  } catch (error) {
    p.sep();
    p.warn(`❌ Erro durante a atualização: ${error.message || error}`);
    if (backupCreated && !updateApplied) {
      try {
        await restoreBackup();
        p.info('📂 Backup restaurado automaticamente.');
      } catch (restoreError) {
        p.warn(`❌ Falha ao restaurar backup: ${restoreError.message}`);
      }
    }
    p.warn(`📂 Backup disponível em: ${BACKUP_DIR}`);
    process.exit(1);
  }
}

main();
