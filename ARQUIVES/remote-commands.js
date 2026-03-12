const path = require('path');
const { fs } = require('./funcoes/exports.js');

const STORE_PATH = path.resolve(process.cwd(), 'DADOS DO YUTA/INFO_YUTA/media/remote_commands.json');

const state = {
  enabled: true,
  runBeforeCore: true,
  commands: [],
  updatedAt: null,
};

function ensureStoreFile() {
  const dir = path.dirname(STORE_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(STORE_PATH)) {
    fs.writeFileSync(STORE_PATH, JSON.stringify(state, null, 2));
  }
}

function normalizeCommand(raw = {}) {
  return {
    id: String(raw.id || '').trim() || null,
    name: String(raw.name || raw.trigger || '').trim(),
    trigger: String(raw.trigger || '').trim(),
    response: String(raw.response || '').trim(),
    enabled: raw.enabled !== false,
    matchType: ['exact', 'startsWith', 'includes', 'regex'].includes(raw.matchType) ? raw.matchType : 'exact',
    usePrefix: raw.usePrefix !== false,
    onlyGroup: raw.onlyGroup === true,
    onlyPrivate: raw.onlyPrivate === true,
    caseSensitive: raw.caseSensitive === true,
  };
}

function normalizeConfig(input = {}) {
  if (Array.isArray(input)) {
    return {
      enabled: true,
      runBeforeCore: true,
      commands: input.map(normalizeCommand).filter((c) => c.trigger && c.response),
      updatedAt: new Date().toISOString(),
    };
  }

  const commands = Array.isArray(input.commands) ? input.commands : [];
  return {
    enabled: input.enabled !== false,
    runBeforeCore: input.runBeforeCore !== false,
    commands: commands.map(normalizeCommand).filter((c) => c.trigger && c.response),
    updatedAt: String(input.updatedAt || new Date().toISOString()),
  };
}

function saveState() {
  ensureStoreFile();
  fs.writeFileSync(STORE_PATH, JSON.stringify(state, null, 2));
}

function loadState() {
  ensureStoreFile();
  try {
    const parsed = JSON.parse(fs.readFileSync(STORE_PATH, 'utf8'));
    const normalized = normalizeConfig(parsed);
    Object.assign(state, normalized);
  } catch {
    saveState();
  }
}

function setRemoteCommandsConfig(input) {
  const normalized = normalizeConfig(input || {});
  Object.assign(state, normalized);
  saveState();
  return state;
}

function getTextFromMessage(msg = {}) {
  if (!msg) return '';
  if (msg.conversation) return msg.conversation;
  if (msg.extendedTextMessage?.text) return msg.extendedTextMessage.text;
  if (msg.imageMessage?.caption) return msg.imageMessage.caption;
  if (msg.videoMessage?.caption) return msg.videoMessage.caption;
  if (msg.documentMessage?.caption) return msg.documentMessage.caption;
  if (msg.buttonsResponseMessage?.selectedButtonId) return msg.buttonsResponseMessage.selectedButtonId;
  if (msg.listResponseMessage?.singleSelectReply?.selectedRowId) return msg.listResponseMessage.singleSelectReply.selectedRowId;
  if (msg.templateButtonReplyMessage?.selectedId) return msg.templateButtonReplyMessage.selectedId;
  return '';
}

function applyCase(text, useCaseSensitive) {
  return useCaseSensitive ? text : text.toLowerCase();
}

function isCommandMatch({ body, commandBody, matchType }) {
  if (matchType === 'startsWith') return body.startsWith(commandBody);
  if (matchType === 'includes') return body.includes(commandBody);
  if (matchType === 'regex') {
    try {
      return new RegExp(commandBody).test(body);
    } catch {
      return false;
    }
  }
  return body === commandBody;
}

async function handleRemoteCommands({ upsert, yuta, setting }) {
  if (!state.enabled) return [];
  if (!Array.isArray(upsert?.messages) || upsert.messages.length === 0) return [];

  const handledMessageIds = [];
  const prefix = String(setting?.prefix || '/');

  for (const info of upsert.messages) {
    const from = info?.key?.remoteJid;
    if (!from) continue;
    if (info?.key?.fromMe) continue;

    const raw = String(getTextFromMessage(info.message) || '').trim();
    if (!raw) continue;

    const isGroup = from.endsWith('@g.us');

    for (const command of state.commands) {
      if (!command.enabled) continue;
      if (!command.trigger || !command.response) continue;
      if (command.onlyGroup && !isGroup) continue;
      if (command.onlyPrivate && isGroup) continue;

      const incomingBody = applyCase(raw, command.caseSensitive);
      const commandKeyRaw = command.usePrefix ? `${prefix}${command.trigger}` : command.trigger;
      const commandBody = applyCase(commandKeyRaw.trim(), command.caseSensitive);
      if (!commandBody) continue;

      const matched = isCommandMatch({
        body: incomingBody,
        commandBody,
        matchType: command.matchType,
      });
      if (!matched) continue;

      await yuta.sendMessage(from, { text: command.response }, { quoted: info });
      if (info?.key?.id) handledMessageIds.push(info.key.id);
      break;
    }
  }

  return handledMessageIds;
}

function shouldRunBeforeCore() {
  return state.runBeforeCore !== false;
}

loadState();

module.exports = {
  handleRemoteCommands,
  setRemoteCommandsConfig,
  shouldRunBeforeCore,
};
