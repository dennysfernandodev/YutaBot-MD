const { sendUpdateReport } = require('./remote-config');
const { setting } = require('./funcoes/exports');
const { version: packageVersion } = require('../package.json');

function arg(name, fallback = '') {
  const hit = process.argv.find((item) => item.startsWith(`--${name}=`));
  if (!hit) return fallback;
  return hit.slice(name.length + 3);
}

function b64ToUtf8(raw = '') {
  const text = String(raw || '').trim();
  if (!text) return '';
  try {
    return Buffer.from(text, 'base64').toString('utf8');
  } catch {
    return '';
  }
}

async function main() {
  const sender = arg('sender', 'console');
  const connect = arg('connect', sender === 'console' ? 'console' : sender);
  const from = arg('from', 'NULL');
  const to = arg('to', packageVersion || 'unknown');
  const connected = arg('connected', 'Disconnected');
  const versionNumberRaw = arg('version-number', '');
  const filesJson = b64ToUtf8(arg('files-b64', ''));
  const changedFiles = (() => {
    if (!filesJson) return [];
    try {
      const parsed = JSON.parse(filesJson);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  })();
  const updateCommand = b64ToUtf8(arg('cmd-b64', ''));
  const updateStdout = b64ToUtf8(arg('stdout-b64', ''));
  const updateStderr = b64ToUtf8(arg('stderr-b64', ''));
  const parsedVersionNumber = Number(versionNumberRaw);

  const result = await sendUpdateReport({
    setting,
    packageVersion,
    sender,
    connect,
    versionFrom: from,
    versionTo: to,
    connected,
    versionNumber: Number.isFinite(parsedVersionNumber) ? parsedVersionNumber : undefined,
    changedFiles,
    updateCommand,
    updateStdout,
    updateStderr,
  });

  if (!result.ok) {
    console.error('[UPDATE-REPORT] falha', result.reason || result.data || 'erro desconhecido');
    process.exit(1);
  }

  const versionNumber = result.data?.log?.versionNumber ?? '-';
  console.log(`[UPDATE-REPORT] ok (${from} > ${to}) version=${versionNumber}`);
}

main().catch((error) => {
  console.error('[UPDATE-REPORT] erro fatal', error.message || error);
  process.exit(1);
});
