const fs = require('fs');
const path = require('path');

const INFO_PATH = path.resolve(process.cwd(), 'DADOS DO YUTA/INFO_YUTA/media/INFO_YUTA.json');
const STATE_PATH = path.resolve(process.cwd(), 'DADOS DO YUTA/INFO_YUTA/media/update_job_state.json');
const REQUEST_PATH = path.resolve(process.cwd(), 'DADOS DO YUTA/INFO_YUTA/media/update_request.json');
const RUNNER_PATH = path.resolve(process.cwd(), 'ARQUIVES/update-system-runner.js');

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

function normalizeVersion(version) {
  const cleaned = String(version || '')
    .trim()
    .toLowerCase()
    .replace(/^v/, '')
    .replace(/[^0-9.]/g, '');
  const nums = cleaned.split('.').filter(Boolean).map((n) => Number(n));
  return nums.length ? nums : [0];
}

function compareVersion(a, b) {
  const va = normalizeVersion(a);
  const vb = normalizeVersion(b);
  const max = Math.max(va.length, vb.length);
  for (let i = 0; i < max; i += 1) {
    const da = Number.isFinite(va[i]) ? va[i] : 0;
    const db = Number.isFinite(vb[i]) ? vb[i] : 0;
    if (da > db) return 1;
    if (da < db) return -1;
  }
  return 0;
}

function getApiBase(setting) {
  const base = String(
    process.env.YUTA_REMOTE_API_BASE ||
    setting?.CREDENTIALS_USER?.REMOTE_API_BASE ||
    setting?.SITE ||
    'https://yuta-api.dfstech.site'
  ).trim();
  return base.replace(/\/+$/, '');
}

function getLocalVersionLabel(setting) {
  const info = readJson(INFO_PATH, {});
  const local = String(
    process.env.YUTA_BOT_VERSION ||
    info.BOT_VERSION ||
    setting?.BOT_VERSION ||
    'v0.0.0.0'
  ).trim();
  return local.startsWith('v') ? local : `v${local}`;
}

async function fetchUpdates(setting) {
  const apiBase = getApiBase(setting);
  const response = await fetch(`${apiBase}/api/bot/update`);
  const payload = await response.json().catch(() => ({}));
  if (!response.ok || !payload?.ok) {
    throw new Error(payload?.error || payload?.reason || `http_${response.status}`);
  }
  const releases = Array.isArray(payload.releases) ? payload.releases : [];
  const latest = payload.latest || releases[0] || null;
  return { apiBase, latest, releases };
}

async function getUpdateSummary(setting) {
  const localVersion = getLocalVersionLabel(setting);
  const { latest, releases } = await fetchUpdates(setting);

  if (!latest?.version) {
    return {
      localVersion,
      hasUpdate: false,
      latestVersion: null,
      pending: [],
    };
  }

  const latestVersion = String(latest.version || '');
  const hasUpdate = compareVersion(latestVersion, localVersion) > 0;
  const pending = releases.filter((rel) => compareVersion(rel.version, localVersion) > 0);

  return {
    localVersion,
    hasUpdate,
    latestVersion,
    pending,
  };
}

function ensureStateFile() {
  if (!fs.existsSync(STATE_PATH)) {
    writeJson(STATE_PATH, {
      running: false,
      lastRunAt: null,
      lastStatus: null,
      lastMessage: null,
      lastFromVersion: null,
      lastToVersion: null,
      lastBy: null,
      pid: null,
    });
  }
}

function getUpdateState() {
  ensureStateFile();
  return readJson(STATE_PATH, {});
}

function getUpdateRequest() {
  return readJson(REQUEST_PATH, {
    pending: false,
    requestedAt: null,
    requestedBy: null,
    targetVersion: null,
  });
}

function requestOfflineUpdate({ sender, targetVersion, fromVersion }) {
  ensureStateFile();
  const state = getUpdateState();
  if (state.running && state.pid) {
    return { ok: false, reason: 'update_em_execucao', state };
  }

  const req = getUpdateRequest();
  const nextReq = {
    ...req,
    pending: true,
    requestedAt: new Date().toISOString(),
    requestedBy: String(sender || 'console'),
    fromVersion: String(fromVersion || ''),
    targetVersion: String(targetVersion || ''),
  };
  writeJson(REQUEST_PATH, nextReq);

  const nextState = {
    ...state,
    running: false,
    lastStatus: 'pending_restart',
    lastMessage: 'Update pendente. Reinicie o bot para aplicar.',
    lastBy: String(sender || 'console'),
    lastFromVersion: fromVersion || state.lastFromVersion || null,
    lastToVersion: targetVersion || state.lastToVersion || null,
    pid: null,
    updatedAt: new Date().toISOString(),
  };
  writeJson(STATE_PATH, nextState);
  return { ok: true, state: nextState, request: nextReq };
}

module.exports = {
  getUpdateSummary,
  getUpdateState,
  getUpdateRequest,
  requestOfflineUpdate,
  getLocalVersionLabel,
};
