/* 
* Não revenda ou passe para alguém essa base.
* Author: Nk Petrøv.
* Apoio: Lm Only && Harunni Petrøv && Jpzinh 
* Site api pra funcionar os downloads: https://yuta-apis.xyz
*/

const pathNative = require('path');
const { assertIntegrityOrExit } = require('./ARQUIVES/license/integrity-guard');

assertIntegrityOrExit({
  baseDir: process.cwd(),
  lockFilePath: pathNative.resolve(process.cwd(), 'ARQUIVES/license/integrity-lock.json'),
});

//=============[ COMEÇO DE TUDO ]=============\\
const { downloadContentFromMessage, relayWAMessage, mentionedJid, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, logger, makeInMemoryStore, getContentType, INativeFlowMessage, prepareWAMessageMedia, jidNormalizedUser } = require('@whiskeysockets/baileys');

const { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, fetch, getBase64, createExif, writeExifImg, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, garticArchives, whatMusicAr, enigmaArchive, quizFutebol, getpc, supre, wait, getExtension, generateMessageID, vyroEngine, getGroupAdmins, normalizeJid, getMembros, emoji, sendPoll, getRandom, banner2, banner3, temporizador, chyt, kyun, TimeCount, botoff, colors, os, addFilter, isFiltered, ytdl, psycatgames, MultiDownload, AssemblyAI, obeso, countDays, timeDate, Limit_CMD, capitalizeFirstLetter, shuffle, pushnames, formatNumber, formatNumberDecimal, awaitMessage, listCommands, extractMetadata, extractDDD, extractStateFromNumber, extractStateFromDDD, obrigadoEXT, addNumberMais, identArroba, pegarCases, carregarMidia } = require('./ARQUIVES/funcoes/exports.js');
const { v4: uuidv4 } = require('uuid');
const directory = `./DADOS DO YUTA/anti_sp.json`;
const ANT_SP = JSON.parse(fs.readFileSync(directory));

//////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const yts = require('yt-search');
const ultimosNicks = {}
const { criarPagamentoPix, verificarPix } = require('./ARQUIVES/funcoes/pix.js');
/////////////////\\\\\\\\\\\\\\\\\\\\\\
const { linguagem, MENU, mess, getInfo, destrava, destrava2, tabela, namoro1, namoro2, tools, advices, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, vip, rgtake, muted, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, antispam, anotar, enviarfiguUrl, getFileBuffer, DLT_FL, speed, sleep, ANT_LTR_MD_EMJ, packname, getName,  chaves, grupos } = require('./ARQUIVES/funcoes/exports.js');

const { botoes, antipv, antipv2, antipv3, visualizarmsg, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, msgantipv1, msgantipv2, API_KEY_INVERTEXTO } = require("./DADOS DO YUTA/INFO_YUTA/media/nescessario.json");

const { NomeDoBot, ownerName, prefix, channel, channelnk, group, CREDENTIALS_USER, TOKEN, SITE } = require('./DADOS DO YUTA/INFO_YUTA/media/INFO_YUTA.json');

const palavras = JSON.parse(fs.readFileSync('./DADOS DO YUTA/data/media/forca/palavras.json'));

const forca = require('./DADOS DO YUTA/data/media/forca/index.js');
const frames = JSON.parse(fs.readFileSync('./DADOS DO YUTA/data/media/forca/frames.json'));
const { sendButton, sendListB } = require(`./ARQUIVES/funcoes/botoes.js`)
const { fundolevel, fundo2, fundo1, linklogos, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imggado, imgvesgo, imgbebado, tapacmd, matarcmd, beijocmd, chutecmd, cmdmenu, deathcmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, errocmd, rnkpau, suruba, minado_bomb, thumbnail, imgsigma, imgbeta, imgbaiano, imgbaiana, imgcarioca, imglouco, imglouca, imgsafada, imgsafado, imgmacaco, imgmacaca, imgputa, rnksigma, rnkbeta, rnkbaiano, rnkbaiana, rnkcarioca, rnklouco, rnklouca, rnksafada, rnksafado, rnkmacaco, rnkmacaca, rnkputa, img1, img2, img3, rankbct, rankcu, rankfalido, rankcasal, casal, Gozar, imgperfil, enigma, rvenigma, semimg, comer, capinarlote, pgpeito, pgbunda, morder, sentar, tirarft, carinho, soco, namorar, getcase, criador, fundo, idade, Pix, status, donos, infodono, boquete, cagar, cu, abraco, lavarlouca, matar, leitada, lindacmd, lindocmd, fielcmd, pgpau } = require("./DADOS DO YUTA/INFO_YUTA/LOGOS/links_img.json");

process.on('uncaughtException', function (err) {
console.error((new Date).toUTCString() + ' uncaughtException:', err.message);
console.error(err.stack);
});
const messageStore = {}
const API_KEY_YUTA2 = CREDENTIALS_USER.API_KEY_YUTA || "SemApikey";
const API_URL = CREDENTIALS_USER.API_URL || "https://api.minhabucetinha.com.br";
const YUTA_URL = 'https://api.bronxyshost.com.br';
const YutaBot = "play"
const API_KEY_YUTA = "Doom77"
const URL_YUTA = "https://api2.jeff-apis.shop"

async function startyuta() {

module.exports = yuta = async(upsert, yuta, qrcode) => {
async function startFunctionNaga() {

const ownerNumber = setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "")

for (const info of upsert?.messages || []) {
const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');
const isStatus = from.endsWith('@broadcast');
if (!global.messageStore) global.messageStore = {}
if (!info.key.fromMe && info.key?.id) {
  messageStore[info.key.id] = info
}
if (info.message?.protocolMessage?.key?.id) {
  const proto = info.message.protocolMessage
  const type = proto.type 
  if (type !== 0 && type !== 14) return
  try {
    const key = proto.key
    const remoteJid = key.remoteJid
    const msgId = key.id
    const participant = key.participant
    if (!remoteJid?.endsWith('@g.us')) return
    const pathGp = `./DADOS DO YUTA/grupos/${remoteJid}.json`
    if (!fs.existsSync(pathGp)) return
    const dataGp = JSON.parse(fs.readFileSync(pathGp))
    if (!dataGp[0]?.antidelete) return
    const original = messageStore[msgId]
    if (!original) return
    if (info.key.fromMe) return
    const metadata = await yuta.groupMetadata(remoteJid)
    const admins = metadata.participants
      .filter(p => p.admin)
      .map(p => p.id)
    const user = original.key.participant || participant
//    if (!user || admins.includes(user)) return
    const userName = original.pushName || user.split('@')[0]
    let profilePic = imgperfil
    try {
      profilePic = await yuta.profilePictureUrl(user, 'image')
    } catch {}
    const extractText = (m) => {
      if (!m) return ''
      if (m.conversation) return m.conversation
      if (m.extendedTextMessage?.text) return m.extendedTextMessage.text
      if (m.imageMessage?.caption) return m.imageMessage.caption
      if (m.videoMessage?.caption) return m.videoMessage.caption
      if (m.documentMessage?.caption) return m.documentMessage.caption
      return ''
    }
    if (type === 0) {
      if (original.message.conversation || original.message.extendedTextMessage) {
        await yuta.sendMessage(remoteJid, { text: extractText(original.message), contextInfo: { mentionedJid: [user], externalAdReply: { title: '🚨 MENSAGEM APAGADA', body: `Por: ${userName}`, mediaType: 2, thumbnailUrl: profilePic }}})
      } else {
        await yuta.sendMessage(remoteJid, { forward: { key: original.key, message: original.message }, contextInfo: { mentionedJid: [user], externalAdReply: { title: '🚨 MENSAGEM APAGADA', body: `Por: ${userName}`, mediaType: 2, thumbnailUrl: profilePic }}})
      }
      delete messageStore[msgId]
    }
    if (type === 14) {
      const oldText = extractText(original.message)
      const editedMsg = proto.editedMessage?.message || proto.editedMessage || proto.editedMessage?.conversation || proto.editedMessage?.extendedTextMessage || proto.editedMessage?.imageMessage || proto.editedMessage?.videoMessage
      const newText = extractText(editedMsg?.message ? editedMsg.message : editedMsg) || extractText(info.message) || ''
      const textoFinal = `💢 *𝐌𝐄𝐍𝐒𝐀𝐆𝐄𝐌 𝐄𝐃𝐈𝐓𝐀𝐃𝐀*\n- 𝙿𝙾𝚁: @${user.split('@')[0]}\n\n> 🕓 *𝙰𝙽𝚃𝙴𝚂:*\n- ${oldText || '(sem texto/legenda)'}\n> 👀 *𝙳𝙴𝙿𝙾𝙸𝚂:*\n- ${newText || '(sem texto/legenda)'}`
      await yuta.sendMessage(remoteJid, { text: textoFinal, contextInfo: { mentionedJid: [user], externalAdReply: { title: '✏️ MENSAGEM EDITADA', body: `Por: ${userName}`, mediaType: 2, thumbnailUrl: profilePic }}})
      messageStore[msgId] = {
        ...original,
        message: editedMsg?.message ? editedMsg.message : editedMsg || original.message
      }
    }

  } catch (e) {
    console.log('[ANTI SYSTEM ERROR]', e)
  }
}

const VRF_JSON_GRUPO = fs.existsSync(`./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${from}.json`) ? true : false;

if(VRF_JSON_GRUPO) {
var jsonGp = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${from}.json`));
}

function createPaymentDetails(text, mentionedJidArray, participant) {
return {
requestPaymentMessage: {
currencyCodeIso4217: "BRL",
amount1000: "100000000000000000",
noteMessage: {
extendedTextMessage: {
text,
contextInfo: {
mentionedJid: [...mentionedJidArray, participant],
forwardingScore: 999,
isForwarded: true
}
}
},
expiryTimestamp: "0",
amount: {
value: "100000000000000000",
offset: 100000000000000000,
currencyCode: "BRL"
}
}
};
}

const NkPetrov = (texto, mentions = []) => ({
    requestPaymentMessage: {
        currencyCodeIso4217: "BRL",
        amount1000: "1000",
        noteMessage: {
            extendedTextMessage: {
                text: texto,
                contextInfo: {
                    mentionedJid: mentions,
                    forwardingScore: 999,
                    isForwarded: true
                }
            }
        },
        expiryTimestamp: "0",
        amount: {
            value: "1000",
            offset: 1000,
            currencyCode: "BRL"
        }
    }
});

function gerarContextNewsletter() {
    if (setting.channelnk === "0@newsletter") {
        return {}; 
    }
    return {isForwarded: true, forwardingScore: 1, forwardedNewsletterMessageInfo: {newsletterJid: setting.channelnk, newsletterName: NomeDoBot, serverMessageId: '',}}}

if (VRF_JSON_GRUPO && jsonGp[0].x9 && info.messageStubType) {
    const horarioAtual = new Date(info.messageTimestamp * 1000).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

const stubType = Number(info.messageStubType);  
const stubParams = Array.isArray(info.messageStubParameters) ? info.messageStubParameters : [];  
const adminRaw = info.participant || '';  
const alvoRaw = stubParams[0] || '';  

const normalizarJidX9 = (jid = '') => {  
    jid = String(jid || '');  
    if (!jid) return '';  
    if (jid.endsWith('@lid')) return jid.split('@')[0] + '@s.whatsapp.net';  
    return jid;  
};  

const limparNumero = (jid = '') => {  
    return String(jid || '')  
        .replace(/@.+$/, '')  
        .replace(/[^\d]/g, '');  
};  

const resolverMencaoReal = async (jid = '') => {  
    try {  
        const base = String(jid || '').split('@')[0];  
        if (!base) return normalizarJidX9(jid);  

        const metadata = await yuta.groupMetadata(from).catch(() => null);  
        const participantes = Array.isArray(metadata?.participants) ? metadata.participants : [];  

        const achado = participantes.find(p => {  
            const candidatos = [  
                p?.id,  
                p?.jid,  
                p?.participant,  
                p?.participantPn,  
                p?.lid  
            ]  
            .filter(Boolean)  
            .map(x => String(x));  

            return candidatos.some(x => x === jid || x.split('@')[0] === base);  
        });  

        const real =  
            achado?.jid ||  
            achado?.participantPn ||  
            achado?.participant ||  
            achado?.id ||  
            normalizarJidX9(jid);  

        return normalizarJidX9(real);  
    } catch {  
        return normalizarJidX9(jid);  
    }  
};  

const admin = await resolverMencaoReal(adminRaw);  
const alvo = await resolverMencaoReal(alvoRaw);  

const adminTxt = limparNumero(admin);  
const alvoTxt = limparNumero(alvo);  

const enviarX9Soli = async (texto, alvoJid, adminJid) => {  
    try {  
        const mencionados = [alvoJid, adminJid].filter(Boolean);  

        const detalhes = createPaymentDetails(texto, [alvoJid], adminJid);  

        if (detalhes) {  
            await yuta.relayMessage(from, detalhes, {});  
        } else {  
            await yuta.sendMessage(from, {  
                text: texto,  
                mentions: mencionados,  
                contextInfo: { mentionedJid: mencionados }  
            });  
        }  
    } catch (e) {  
        console.log('erro ao enviar x9soli:', e);  
        try {  
            const mencionados = [alvoJid, adminJid].filter(Boolean);  
            await yuta.sendMessage(from, {  
                text: texto,  
                mentions: mencionados,  
                contextInfo: { mentionedJid: mencionados }  
            });  
        } catch {}  
    }  
};  

if (stubType === 172) {  
    const acao = String(stubParams[1] || '').toLowerCase().trim();  

    if (acao === 'rejected' && alvo && admin) {  
        const msg = `*❌ 𝐒𝐎𝐋𝐈𝐂𝐈𝐓𝐀𝐂̧𝐀̃𝐎 𝐑𝐄𝐂𝐔𝐒𝐀𝐃𝐀 ❌*

ᴀᴅᴍ ʀᴇsᴘᴏɴsᴀ́ᴠᴇʟ: @${adminTxt}
ᴅᴀᴛᴀ: ${horarioAtual}`;

await enviarX9Soli(msg, alvo, admin);  
    }  
}  

if (stubType === 27) {  
    if (alvo && admin && alvo !== admin) {  
        const msg = `*✅ 𝐒𝐎𝐋𝐈𝐂𝐈𝐓𝐀𝐂̧𝐀̃𝐎 𝐀𝐏𝐑𝐎𝐕𝐀𝐃𝐀 ✅*

ᴀᴅᴍ ʀᴇsᴘᴏɴsᴀ́ᴠᴇʟ: @${adminTxt}
ᴅᴀᴛᴀ: ${horarioAtual}`;

await enviarX9Soli(msg, alvo, admin);  
    }  
}
    switch (info.messageStubType) {
        case 29: { 
            if (info.messageStubParameters?.length) {
                const promovido = info.messageStubParameters[0];
                const promotor = info.participant;
                const msg = `*⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 𝐃𝐄 𝐏𝐑𝐎𝐌𝐎𝐂𝐀𝐎 ⚠️*

*ᴏ ᴜsᴜᴀʀɪᴏ @${promovido.split("@")[0]} ꜰᴏɪ ᴘʀᴏᴍᴏᴠɪᴅᴏ ᴀ ᴀᴅᴍ. 🙆‍♂️*

*ᴀᴅᴍ ʀᴇsᴘᴏɴsᴀ́ᴠᴇʟ: @${promotor.split("@")[0]} 🙅‍♂️*

*ᴅᴀᴛᴀ: ${horarioAtual}*`;
                const detalhes = createPaymentDetails(msg, [promovido], promotor);
                await yuta.relayMessage(from, detalhes, {});
            }
        }
        break;

        case 30: {
            if (info.messageStubParameters?.length) {
                const rebaixado = info.messageStubParameters[0];
                const rebaixador = info.participant;
                const msg = `*⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 𝐃𝐄 𝐑𝐄𝐁𝐀𝐈𝐗𝐀𝐌𝐄𝐍𝐓𝐎 ⚠️*

*ᴏ ᴜsᴜᴀʀɪᴏ @${rebaixado.split("@")[0]} ꜰᴏɪ ʀᴇʙᴀɪxᴀᴅᴏ ᴀ ᴍᴇᴍʙʀᴏ. 🤷‍♂️*

*ᴀᴅᴍ ʀᴇsᴘᴏɴsᴀ́ᴠᴇʟ: @${rebaixador.split("@")[0]} 🙅‍♂️*

*ᴅᴀᴛᴀ: ${horarioAtual}*`;
                const detalhes = createPaymentDetails(msg, [rebaixado], rebaixador);
                await yuta.relayMessage(from, detalhes, {});
            }
        }
        break;
}
}


  
if(!info.message) return;
if(upsert.type == "append") return;  
const baileys = require('@whiskeysockets/baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : '';

if(visualizarmsg) {
await yuta.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

//==============(BODY)================\\

function extrairTexto(info) {
  const paths = [ 'message.conversation', 'message.sendPaymentMessage.noteMessage.extendedTextMessage.text', 'message.requestPaymentMessage.noteMessage.extendedTextMessage.text', 'message.viewOnceMessageV2.message.imageMessage.caption', 'message.viewOnceMessageV2.message.videoMessage.caption', 'message.imageMessage.caption', 'message.videoMessage.caption', 'message.extendedTextMessage.text', 'message.viewOnceMessage.message.videoMessage.caption', 'message.viewOnceMessage.message.imageMessage.caption', 'message.documentWithCaptionMessage.message.documentMessage.caption', 'message.buttonsMessage.imageMessage.caption', 'message.buttonsResponseMessage.selectedButtonId', 'message.listResponseMessage.singleSelectReply.selectedRowId', 'message.templateButtonReplyMessage.selectedId', 'message.pollCreationMessageV3.name', 'message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage.text', 'message.editedMessage.message.protocolMessage.editedMessage.imageMessage.caption', 'text', 'message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson' ];

  for (const path of paths) {
    const value = path.split('.').reduce((obj, key) => obj?.[key], info);
    if (value) {
      if (path.includes('paramsJson')) {
        try {
          return JSON.parse(value)?.id || '';
        } catch {
          return '';
        }
      }
      return value;
    }
  }

  return '';
}

var body = extrairTexto(info);
var Procurar_String = body;
const budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup && fs.existsSync(`./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${from}.json`) && jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos[jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))] || jsonGp[0].prefixos[0]
}

if(isGroup && fs.existsSync(`./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${from}.json`) && !jsonGp[0].multiprefix) {var prefix = setting.prefix} else if(!isGroup) {var prefix = setting.prefix};
let isCmd = body.startsWith(prefix);

let args = isCmd ? body.slice(prefix.length).trim().split(/[ \t]+/) : body.split(/[ \t]+/);

let command = isCmd ? args.shift().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ç/g, "c") : null;

let q = args.join(' ');
let Q = q

var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

try {var groupMetadata = isGroup ?  await yuta.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';

const botNumberLID = yuta?.user?.lid?.split(':')[0] + '@lid' || '';

let sender = jidNormalizedUser(isGroup ? info?.key?.participantPn || info?.key?.senderPn || await yuta?.user?.id || info?.key?.participant : info?.key?.senderPn || info?.key?.participant ||info?.key?.remoteJid);

if (sender.includes('@lid') && yuta?.user?.lid) {
    sender = yuta.user.id?.split(':')[0] + '@s.whatsapp.net' || sender;
}
    
const botNumber = yuta.user.id.split(':')[0]+'@s.whatsapp.net';
const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const NumeroDoBot = yuta.user.id.split(':')[0];

const itsMe = info.key.fromMe || (yuta?.user?.lid ? info?.key?.participant === yuta.user.lid.split(':')[0] + '@lid' : false);

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const isnit = nit.includes(sender) 

const issupre = supre.includes(sender)

const ischyt = chyt.includes(sender)

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const somembros = isGroup ? getMembros(groupMembers) : ''

function setObg(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

const argss = body.split(/ +/g);
//======================================\\

const nmrdn = setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` || isnit

const numerodono = [`${nmrdn}`, `${numero_dono1}@s.whatsapp.net`, `${numero_dono2}@s.whatsapp.net`, `${numero_dono3}@s.whatsapp.net`, `${numero_dono4}@s.whatsapp.net`, `${numero_dono5}@s.whatsapp.net`, `${numero_dono6}@s.whatsapp.net`]

//=====================================\\

const dirGroup = `./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${from}.json`

const nescj = "./DADOS DO YUTA/INFO_YUTA/media/nescessario.json"

if(isGroup && !fs.existsSync(dirGroup)){
var data = [{ name: groupName, groupId: from, x9: false, antiimg: false, antistatus: false, antivideo: false, antiaudio: false, antisticker: false, antidoc: false, antictt: false, antiloc: false,  antilinkgp: false, antilinkhard: false, antilinkeasy: false, antifake: false, antiporn: false, Odelete: false, antispam: false, antinotas: false, anticatalogo: false, visuUnica: false, registrarFIGUS: false, soadm: false, listanegra: [], advertir: [], prefixos: [`${setting.prefix}`], advertir2: [], legenda_estrangeiro: "0", legenda_documento: "0", legenda_video: "0", legenda_imagem: "0",  multiprefix: false, ausentes: [], ANTI_DDD: {active: false, listaProibidos: []}, antipalavrao: { active: false, palavras: [] }, limitec: { active: false, quantidade: null }, autosticker: false, autoresposta: false, jogos: false, bangp: false, modo_rpg: false }]
fs.writeFileSync(dirGroup, JSON.stringify(data))
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

var DFNMULTIP = `./DADOS DO YUTA/func/prefixo/multip_${from}.json`

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index))}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index))}

//=====(ADMS/DONO/ETC..CONST)=======\\

const adivinha = info.key.id.length > 21 ? 'Android 🚀' : info.key.id.substring(0, 2) == '3A' ? 'Iphone 💸' : 'WhatsApp Web 🪀';

const quoted = info.quoted ? info.quoted : info

const isBot = info.key.fromMe ? true : false

const SoDono = numerodono.includes(sender) || isBot || isnit || issupre || ischyt

dfndofc = setting.ownerNumber+"@s.whatsapp.net"

const DonoOficial = dfndofc.includes(sender) 

const isVip = vip.map(i => i.id).includes(sender) || SoDono

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false || DonoOficial

const isListaBrancaG = nescessario.listabrancaG.includes(sender)

const isBanned = ban.includes(sender)

const isVisualizar = nescessario.visualizarmsg

const isModoAluguel = nescessario.aluguel

const isVerificado = nescessario.verificado

const isConsole = obrigadoEXT.consoleoff

const isWelcomePrivate = nescessario.welcomepv

const isAudioMenu = obrigadoEXT.menu_audio

const isAntiPv = nescessario.antipv 

const isAntiPv2 = nescessario.antipv2

const isAntiPv3 = nescessario.antipv3

const isBotoff = nescessario.botoff

const listanegraG = nescessario.listanegraG

const listabrancaG = nescessario.listabrancaG

const isAnticall = nescessario.anticall

const TOKEN_GPT = nescessario.TOKEN_GPT

const isCmdVip = nescessario.cmd_vip

const isblockCmdG = nescessario.blockCmdG

const isCargo = SoDono ? "Mestre" : isGroupAdmins ? "Adminstrador": "Membro"

const isChVip = isVip ? "ꜱɪᴍ ✅": "ɴᴀᴏ ❌"


//============(FUNÇÕES)============\\

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

const isAntiImg = isGroup ? dataGp[0].antiimg : undefined

const isAntistatus = isGroup ? dataGp[0].Antistatus : undefined

const isLimitCmd = isGroup ? dataGp[0]?.Limitar_CMD : undefined

const isAntiVid = isGroup ? dataGp[0].antivideo : undefined

const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined

const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined

const Antidoc = isGroup ? dataGp[0].antidoc : undefined

const isAntiCtt = isGroup ? dataGp[0].antictt : undefined

const Antiloc = isGroup ? dataGp[0].antiloc : undefined

const isAntiDDD = isGroup ? dataGp[0].ANTI_DDD.active : undefined

const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined

const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined

const isAntiLinkEasy = isGroup ? dataGp[0].antilinkeasy : undefined

const isAntiPorn = isGroup ? dataGp[0].antiporn : undefined

const isAntifake = isGroup ? dataGp[0].antifake : undefined

const IS_DELETE = nescessario.Odelete

const So_Adm = isGroup ? dataGp[0].soadm : undefined

const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined

const ADVT = isGroup ? dataGp[0].advertir: undefined

const ADVT2 = isGroup ? dataGp[0].advertir2: undefined

const isx9 = isGroup ? dataGp[0].x9 : undefined

const isMultiP = isGroup ? dataGp[0].multiprefix : undefined

const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined

const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined

const isAutofigu = isGroup ? dataGp[0].autosticker : undefined

const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined

const isModoIA = isGroup ? dataGp[0].modoia : undefined

const isModobn =  isGroup ? dataGp[0].jogos : undefined

const isYutaEscuta = isGroup ? dataGp[0].yutaescutando : undefined

const isAutoDl = isGroup ? dataGp[0].autodl : undefined

const isBanchat = isGroup ? dataGp[0].bangp : undefined

const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined

const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined

const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined

const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined

const isModoRPG = isGroup ? dataGp[0].modo_rpg : undefined

try {
  if (isGroup && !info?.key?.fromMe) {
    const pathAtiv = `./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${from}.json`

    let json = [{}]
    if (fs.existsSync(pathAtiv)) {
      try {
        json = JSON.parse(fs.readFileSync(pathAtiv))
        if (!Array.isArray(json)) json = [json]
        if (!json[0]) json[0] = {}
      } catch {
        json = [{}]
      }
    }

    const anticanalON = !!json?.[0]?.anticanal
    if (anticanalON) {
      if (!(SoDono || isGroupAdmins)) {
        const msg = info?.message || {}

        const ctx =
          msg?.extendedTextMessage?.contextInfo ||
          msg?.imageMessage?.contextInfo ||
          msg?.videoMessage?.contextInfo ||
          msg?.documentMessage?.contextInfo ||
          msg?.audioMessage?.contextInfo ||
          msg?.stickerMessage?.contextInfo ||
          msg?.conversation?.contextInfo ||
          null

        const fwdNews = ctx?.forwardedNewsletterMessageInfo

        const isCanal =
          !!(fwdNews?.newsletterJid && String(fwdNews.newsletterJid).includes("@newsletter")) ||
          !!(fwdNews?.newsletterName && String(fwdNews.newsletterName).trim().length > 0)

        if (isCanal) {
          if (!isBotGroupAdmins) return

          await yuta.sendMessage(from, {
            delete: {
              remoteJid: from,
              fromMe: false,
              id: info?.key?.id,
              participant: sender
            }
          }).catch(() => {})

          await yuta.groupParticipantsUpdate(from, [sender], "remove").catch(() => {})

          return
        }
      }
    }
  }
} catch (e) {
  console.log("ANTICANAL erro:", e)
}

try {
  const cfgSpam = (dataGp?.[0]?.antispam || {})
  const antiOn = isGroup ? (cfgSpam.active === true) : false

  const cfgFigu = (cfgSpam.figu || {})
  const limiteFigu = Number(cfgFigu.limite || 6)
  const tempoFigu = Number(cfgFigu.tempo || 10)

  const cfgTxt = (cfgSpam.texto || {})
  const limiteTxt = Number(cfgTxt.limite || 8)
  const tempoTxt = Number(cfgTxt.tempo || 8)

  const cfgFoto = (cfgSpam.foto || {})
  const limiteFoto = Number(cfgFoto.limite || 4)
  const tempoFoto = Number(cfgFoto.tempo || 10)

  const cfgVideo = (cfgSpam.video || {})
  const limiteVideo = Number(cfgVideo.limite || 3)
  const tempoVideo = Number(cfgVideo.tempo || 15)


  if (antiOn && isGroup) {

    
    const msgRoot = (info?.message || {})
    const msgMain =
      msgRoot?.ephemeralMessage?.message ||
      msgRoot?.viewOnceMessage?.message ||
      msgRoot?.viewOnceMessageV2?.message ||
      msgRoot

    const isSticker = !!msgMain?.stickerMessage
    const isPhoto = !!msgMain?.imageMessage
    const isVideo = !!msgMain?.videoMessage
    const isText = (!isSticker && !isPhoto && !isVideo && typeof body === 'string' && body.trim().length > 0)

    if ((isSticker || isText || isPhoto || isVideo) && !(SoDono || isGroupAdmins)) {

      global._antispam = global._antispam || {}
      global._antispam_warn = global._antispam_warn || {}
      global._antispam_cd = global._antispam_cd || {}
      global._antispam_queue = global._antispam_queue || {}
      global._antispam_lock = global._antispam_lock || {}

      const enqueueGroup = (gid, fn) => {
        if (!global._antispam_queue[gid]) global._antispam_queue[gid] = Promise.resolve()
        global._antispam_queue[gid] = global._antispam_queue[gid].then(fn).catch(() => {})
        return global._antispam_queue[gid]
      }

      const tipo =
        isSticker ? 'figu' :
        isPhoto ? 'foto' :
        isVideo ? 'video' :
        'texto'

      const limite =
        (tipo === 'figu') ? limiteFigu :
        (tipo === 'foto') ? limiteFoto :
        (tipo === 'video') ? limiteVideo :
        limiteTxt

      const tempo =
        (tipo === 'figu') ? tempoFigu :
        (tipo === 'foto') ? tempoFoto :
        (tipo === 'video') ? tempoVideo :
        tempoTxt

      const lim = Math.max(2, Number.isFinite(limite) ? limite : 6)
      const baseWindowMs = Math.max(3, Number.isFinite(tempo) ? tempo : 10) * 1000

      
      const longWindowMs = (tipo === 'figu') ? Math.max(baseWindowMs, 60 * 1000) : baseWindowMs
      const shortWindowMs = (tipo === 'figu') ? Math.min(baseWindowMs, 6 * 1000) : baseWindowMs

      const k = from + '|' + sender + '|' + tipo
      const lockKey = from + '|' + sender + '|remove'
      const now = Date.now()

      
      const arr = Array.isArray(global._antispam[k]) ? global._antispam[k] : []
      const arrLong = arr.filter(x => x && (now - x.t) < longWindowMs)
      arrLong.push({ t: now })
      global._antispam[k] = arrLong

      
      const countLong = arrLong.length
      const countShort = (tipo === 'figu')
        ? arrLong.filter(x => x && (now - x.t) < shortWindowMs).length
        : countLong

      const countNow = (tipo === 'figu') ? Math.max(countLong, countShort) : countLong

      const nomeTipo =
        (tipo === 'figu') ? 'ғɪɢᴜʀɪɴʜᴀs' :
        (tipo === 'foto') ? 'ғᴏᴛᴏs' :
        (tipo === 'video') ? 'ᴠɪᴅᴇᴏs' :
        'ᴍᴇɴsᴀɢᴇɴs'


      const avisoAt = Math.max(1, lim - 1)
      if (countNow === avisoAt) {
        const lastWarn = global._antispam_warn[k] || 0
        if ((now - lastWarn) > longWindowMs) {
          global._antispam_warn[k] = now
          await yuta.sendMessage(from, {
            text: `@${sender.split('@')[0]} *ᴘᴀʀᴀ ᴅᴇ sᴘᴀᴍ ${nomeTipo} 🤦‍♂️*`,
            mentions: [sender]
          }).catch(() => {})
        }
      }

      
      if (countNow >= lim) {
        
        if (global._antispam_lock[lockKey]) {
          
        } else {
          const lastCd = global._antispam_cd[lockKey] || 0
          if ((now - lastCd) >= 900) {
            global._antispam_cd[lockKey] = now
            global._antispam_lock[lockKey] = true

            enqueueGroup(from, async () => {
              try {
                if (isBotGroupAdmins) {
                  await yuta.groupParticipantsUpdate(from, [sender], 'remove').catch(() => {})
                }
              } finally {
                
                try { global._antispam[k] = [] } catch {}
                setTimeout(() => { try { delete global._antispam_lock[lockKey] } catch {} }, 1200)
              }
            })
          }
        }
      }

    }
  }

} catch {}
//============(VERIFICADOS)============\\

if (nescessario.verificado) {
var selo = { "key": { "participant": "0@s.whatsapp.net", "remoteJid": from, "fromMe": false }, "message": { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;${pushname};;;\nFN:${pushname}\nitem1.TEL;waid=13135550002:13135550002\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": { "forwardingScore": 1, "isForwarded": true }}}}
} else {
var selo = info
}

// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\
const normalizar = alvo => {
    if (!alvo) return '';
    if (alvo.includes('@lid') && groupMetadata?.participants) {
        const membro = groupMetadata.participants.find(v => v.lid === alvo);
        if (membro?.jid) return membro.jid;
    }
    if (alvo.includes('@lid')) {
        const num = alvo.split(':')[0].replace('@lid', '');
        return num + '@s.whatsapp.net';
    }
    return alvo;
};

const menc_sticker = (info.mentionedJid && info.mentionedJid.length > 0) ? normalizar(info.mentionedJid[0]) : normalizar(info.message?.stickerMessage?.contextInfo?.participant) || null;

let menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant || info.message?.stickerMessage?.contextInfo?.participant || ''; menc_prt = normalizar(menc_prt);

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || info.message?.stickerMessage?.contextInfo?.mentionedJid || [];

if (menc_jid2?.length > 0) {
    menc_jid2[0] = normalizar(menc_jid2[0]);
}

const menc_os2 = q.includes("@") ? (Array.isArray(menc_jid2) && menc_jid2.length > 0 ? menc_jid2[0] : menc_sticker || null) : menc_prt || menc_sticker;

const menc_jid = normalizar(menc_os2 || sender);
const sender_ou_n = q.includes("@") ? (menc_jid2?.[0] || menc_sticker) : (menc_prt || menc_sticker || sender);

const numClean = txt => txt.replace(/[()+\-\/\s]/g, '') + '@s.whatsapp.net';
const mrc_ou_numero = q.length > 6 && !q.includes('@') ? numClean(q) : normalizar(menc_prt || menc_sticker);

const marc_tds = q.includes('@') ? normalizar(menc_jid) : q.length > 6 && !q.includes('@') ? numClean(q) : normalizar(menc_prt || menc_sticker);

const menc_prt_nmr = q.length > 12 && !q.includes('@') ? numClean(q) : normalizar(menc_prt || menc_sticker);

////////////////////////////////////////////

var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

//
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss');

if(time2 > "00:00:00" && time2 < "05:00:00"){
    var tempo = 'Boa noite'
    var tempo2 = 'ʙᴏᴀ ɴᴏɪᴛᴇ'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
    var tempo = 'Bom dia'
    var tempo2 = 'ʙᴏᴍ ᴅɪᴀ'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
    var tempo = 'Boa tarde'
    var tempo2 = 'ʙᴏᴀ ᴛᴀʀᴅᴇ'
} if(time2 > "18:00:00"){
    var tempo = 'Boa noite'
    var tempo2 = 'ʙᴏᴀ ɴᴏɪᴛᴇ'
}

if(!isCmd && info.key.fromMe) return
const reply = (text) => {
    const messageOptions = {
        text,
        contextInfo: gerarContextNewsletter()
    };
    return yuta.sendMessage(from, messageOptions, {
        quoted: selo 
    }).catch(error => {
        console.error(error);
    });
};
async function sendAudioMenu(from) {
  const soundft = fs.readFileSync('./DADOS DO YUTA/data/media/audios/menu.mp3');
  await yuta.sendMessage(from, {
    audio: soundft,
    mimetype: "audio/mpeg",
    contextInfo: gerarContextNewsletter(),
  }, { quoted: selo });
}
const NkChannelKk = gerarContextNewsletter();

async function sendUrlText(id, textCaption, title, desc, imageUrl, linkAcess, quotedThis) {
  await yuta.sendMessage(id, { text: textCaption, contextInfo: { externalAdReply: { title: title, body: desc, thumbnail: await getBuffer(imageUrl), mediaType: 1, sourceUrl: linkAcess } } }, { contextInfo: { ...NkChannelKk } }, { quoted: quotedThis })
}
  
async function replyWithNewsletter(text, options = {}, quotedThis = info) {
await yuta.sendMessage(from, {text: text, contextInfo: options}, {quoted: quotedThis})
.catch(async(error) => {
await yuta.sendMessage(from, {text: mess.error()}, {quoted: selo});
});
}

async function replyWithReaction(text, options = {}, quotedThis = info) {
await yuta.sendMessage(from, options)
await yuta.sendMessage(from, {text: text}, {quoted: quotedThis})
.catch(async(error) => {
await yuta.sendMessage(from, {text: mess.error()}, {quoted: selo});
});
}

const sendSticker = async(ChatID, FileN, quotedThis) => {
await yuta.sendMessage(ChatID, { sticker: { url: FileN } }, { contextInfo: { ...NkChannelKk } }, { quoted: selo }
)
.catch(async(error) => {
await yuta.sendMessage(from, {text: mess.error()}, {quoted: selo});
});
}

const sendImage = async(ChatID, FileN) => {
await yuta.sendMessage(ChatID, { image: { url: FileN } }, { contextInfo: { ...NkChannelKk } }, { quoted: selo }
).catch(async(error) => {
await yuta.sendMessage(from, {text: mess.error()}, {quoted: selo});
})
}

const sendText = async(ChatID, texto) => {
await yuta.sendMessage(ChatID, { text: texto }, { contextInfo: { ...NkChannelKk } }
).catch(async(error) => {
await yuta.sendMessage(from, {text: mess.error()}, {quoted: selo});
});
}


const sendMentions = async(local, teks) => {
memberr = []; vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy) {for(zn of vz.split(' ')) {if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')}};
await yuta.sendMessage(local, {text: teks.trim(), contextInfo:{...NkChannelKk, mentionedJid: memberr}}, {quoted: selo}).catch(async(e) => {
await yuta.sendMessage(from, {text: mess.error()}, {quoted: selo});
});
}

const mentions = async(teks = '', mb, id) => {
(id == null || id == undefined || id == false) ? await yuta.sendMessage(from, {text: teks.trim(), mentions: mb}) : await yuta.sendMessage(from, {text: teks.trim(), contextInfo:{...NkChannelKk, mentionedJid: mb}}, {quoted: selo})
}
	
const mention = async(teks = '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy) { 
for(zn of vz.split(' ')) {
if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}
}
await yuta.sendMessage(from, {text: teks.trim(), contextInfo:{...NkChannelKk, mentionedJid: memberr}}, {quoted: selo}).catch(async(e) => {
await yuta.sendMessage(from, {text: mess.error()}, {quoted: selo});
});
}

const mentionSemQuoted = async(teks) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
await yuta.sendMessage(from, {text: teks.trim(), contextInfo:{...NkChannelKk, mentionedJid: memberr}}, {quoted: selo}).catch(async(e) => {
await yuta.sendMessage(from, {text: mess.error()}, {quoted: selo});
});
}

const mencionarIMG = async(teks = '', FileN, thisQuoted = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy) { 
for(zn of vz.split(' ')) {
if(zn.includes('@')) memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net');
}
}
await yuta.sendMessage(from, {image: {url: FileN}, caption: teks.trim(), mentions: memberr}, {quoted: thisQuoted}).catch(async(error) => {
await yuta.sendMessage(from, {text: mess.error()}, {quoted: selo});
});
}

const reagir = async (idgp, emj) => {
await yuta.sendMessage(idgp, {react: {text: emj, key: info.key}});
}

const verificarN = async(sla) => {
const [result] = await yuta.onWhatsApp(sla)
if(result == undefined) {
reply("Este usuário não é existente no WhatsApp")
} else {
reply(`${sla} Número inserido é existente no WhatsApp com o id: ${result.jid}`)
}
}


if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if(menc_jid2?.length >= groupMembers.length - 1) { 
await yuta.sendMessage(from, {text: mess.markingAllMember()}, {quoted: selo});
if(IS_DELETE) {
setTimeout(async() => {
await yuta.sendMessage(from, {delete: {remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
yuta.groupParticipantsUpdate(from, [sender], "remove");
}
}

const path = require("path");

const TAKE_DB_PATH = path.join(__dirname, "./DADOS DO YUTA/INFO_YUTA/takes.json");

function ensureTakeDB() {
  try {
    const dir = path.dirname(TAKE_DB_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    if (fs.existsSync(TAKE_DB_PATH) && fs.lstatSync(TAKE_DB_PATH).isDirectory()) {
      const bk = TAKE_DB_PATH + "_PASTA_BK_" + Date.now();
      fs.renameSync(TAKE_DB_PATH, bk);
    }

    if (!fs.existsSync(TAKE_DB_PATH)) {
      fs.writeFileSync(TAKE_DB_PATH, JSON.stringify({}, null, 2));
    }
  } catch (e) {
    console.log("Erro ensureTakeDB:", e);
  }
}

function readTakeDB() {
  ensureTakeDB();
  try {
    const db = JSON.parse(fs.readFileSync(TAKE_DB_PATH, "utf-8"));
    return (db && typeof db === "object") ? db : {};
  } catch {
    return {};
  }
}

function writeTakeDB(db) {
  ensureTakeDB();
  fs.writeFileSync(TAKE_DB_PATH, JSON.stringify(db, null, 2));
}

function userKeyFromJid(jid) {
  return String(jid || "").replace(/\D/g, "");
}

async function applyTakeStickerFromBuffer(stickerBuffer, author, packname) {
  
  if (typeof convertSticker === "function") {
    try {
      const out = await convertSticker(stickerBuffer.toString("base64"), author, packname);
      if (out) return out;
    } catch (e) {

    }
  }

  const { Sticker } = require("wa-sticker-formatter");
  const st = new Sticker(stickerBuffer, {
    author: author,
    pack: packname,
    type: "full",
    quality: 60
  });
  return await st.toBuffer();
}

if(isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async() => {    
if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return
if(type == 'imageMessage') {
var pack = mess.fig(ownerName, NomeDoBot)
var author2 = mess.fig2(pushname, groupName, isGroup)
owgi = await getFileBuffer(info.message.imageMessage, 'image')
let encmediaa = await sendImageAsSticker2(yuta, from, owgi, selo, { packname:pack, author:author2})
DLT_FL(encmediaa)
}
if(type == 'videoMessage') {
if((isMedia && info.message.videoMessage.seconds < 10)) {
var pack = mess.fig(ownerName, NomeDoBot)
var author2 = mess.fig2(pushname, groupName, isGroup)
owgi = await getFileBuffer(info.message.videoMessage, 'video')
let encmedia = await sendVideoAsSticker2(yuta, from, owgi, selo, { packname:pack, author:author2})
DLT_FL(encmedia)
}
} 
}, 1000)
}
autofiguf().catch((error) => {
console.log(error)
})
}
function msToTime(ms) {
    let seg = Math.floor(ms / 1000)
    let min = Math.floor(seg / 60)
    let hr = Math.floor(min / 60)
    let dia = Math.floor(hr / 24)
    let ano = Math.floor(dia / 365)
    seg %= 60
    min %= 60
    hr %= 24
    dia %= 365
    let partes = []
    if (ano) partes.push(`${ano} ᴀɴᴏ${ano > 1 ? 'ꜱ' : ''}`)
    if (dia) partes.push(`${dia} ᴅɪᴀ${dia > 1 ? 'ꜱ' : ''}`)
    if (hr) partes.push(`${hr} ʜᴏʀᴀ${hr > 1 ? 'ꜱ' : ''}`)
    if (min) partes.push(`${min} ᴍɪɴᴜᴛᴏ${min > 1 ? 'ꜱ' : ''}`)
    if (seg) partes.push(`${seg} ꜱᴇɢᴜɴᴅᴏ${seg > 1 ? 'ꜱ' : ''}`)
    return partes.length ? partes.join(', ').replace(/,([^,]*)$/, ' e$1') : 'ᴀɢᴏʀᴀ ʜᴀ ᴩᴏᴜᴄᴏ'
}

if (isGroup && dataGp[0].ausentes?.length > 0) {
    let afkList = dataGp[0].ausentes;
    if (menc_jid2?.length > 0) {
        for (let m of menc_jid2) {
            let afkUser = afkList.find(x => x.id === m);
            if (afkUser) {
                let tempo = msToTime(Date.now() - afkUser.hora);
                await yuta.sendMessage(from, {
                    text: mess.ausente(afkUser, tempo, m),
                    contextInfo: { ...NkChannelKk, mentionedJid: [m] }
                }, {quoted: selo})
            }
        }
    }
    let eu_afk = afkList.find(x => x.id === sender);
    if (eu_afk) {
        let tempo = msToTime(Date.now() - eu_afk.hora);
        dataGp[0].ausentes = afkList.filter(x => x.id !== sender);
        setGp(dataGp);
        await yuta.sendMessage(from, {
            text: mess.on(sender, tempo),
            contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
        }, {quoted: selo})
    }
}

if(!isVip && nescessario.cmd_vip.includes(command)) return reply(mess.onlyVipUser());

//BAN GRUPO & BOT OFF
if(isGroup && isCmd && isBanchat && !itsMe && !SoDono) return

if(isGroup && isCmd && So_Adm && !SoDono && !itsMe && !isGroupAdmins) return

if(isBotoff && !itsMe && !SoDono) return

//=======================================\\

function formatDataBR(ms) {
  const d = new Date(ms)
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const yyyy = d.getFullYear()
  const hh = String(d.getHours()).padStart(2, '0')
  const mi = String(d.getMinutes()).padStart(2, '0')
  const ss = String(d.getSeconds()).padStart(2, '0')
  return `${dd}/${mm}/${yyyy} as ${hh}:${mi}:${ss}`
}

const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, async(err) => {
let media = fs.readFileSync(asw)
await yuta.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: selo}).catch(async(error) => {
return reply(mess.error())
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return reply(mess.error())
}
}

//=========(isQuoted/consts)=============\\

const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
            
// ANTI DDD - LISTA COMPLETA DE DDDs EXISTENTES NO BRASIL!
const arrayDDDs = [11, 12 ,13 ,14 ,15, 16, 17, 18, 19, 21, 22, 24 , 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55,61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74,75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89,91, 93, 94, 95, 96, 97, 98, 99];

//////BLOCK CMD///////
budy = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command)) return reply('O comando foi bloqueado, entre em contato com a administração.')

///BLOCK CMD GLOBAL///
///(CRÉDITOS AO @VictorGabriel)///
if(isblockCmdG.includes(command) && !SoDono) return reply('Olá, o comando está bloqueado para *uso global*, ou seja, todos os usuários estão impossibilitados de usar ele.\n–\n• Entre em contato com meu proprietário para saber o motivo.')

////FIMMMMMMMMM/////            

///// FIMMMMMMMMMMMMM /////

const dattofc = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
const hourofc = moment.tz('America/Sao_Paulo').format('HH:mm:ss')

const MessageType = type == 'audioMessage' ? 'Áudio' : type == 'stickerMessage' ? 'Figurinha' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Vídeo' : type == 'documentMessage' ? 'Documento' : type == 'pollCreationMessage' ? 'Enquete' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' : info.message?.reactionMessage?.text ? `Reação '${info.message.reactionMessage.text}'` : `${prefix+command}`;

//===============INTERAÇÃO NO TERMUX=====================
if (isConsole) {
  const chalk = require('chalk');
  const user = chalk.hex('#D500F9').bold(pushname?.toUpperCase() || 'DESCONHECIDO');
  const number = chalk.yellowBright(addNumberMais(sender));
  const chatType = isGroup ? 'GRUPO' : 'PRIVADO';
  const groupInfo = isGroup ? `(${groupName})` : '(Privado)';
  const typeMap = { isCmd:         ['COMANDO',    chalk.cyanBright(`${prefix}${command}`)], isImage:       ['MÍDIA',      '🖼️ IMAGEM'], isVideo:       ['MÍDIA',      '🎞️ VÍDEO'], isAudio:       ['MÍDIA',      '🎧 ÁUDIO'], isSticker:     ['MÍDIA',      '🔖 FIGURINHA'], isLocation:    ['MÍDIA',      '📍 LOCALIZAÇÃO'], isProduct:     ['MÍDIA',      '🛒 CATÁLOGO'], isQuotedDocument: ['MÍDIA',   '📄 DOCUMENTO'], isQuotedContact:  ['MÍDIA',   '👤 CONTATO'], isPoll:        ['MÍDIA',      '📊 ENQUETE']};
  const detectedType = Object.entries({isCmd, isImage, isVideo, isAudio, isSticker, isLocation, isProduct, isQuotedDocument, isQuotedContact, isPoll: q?.includes('###')
  }).find(([_, val]) => val);
  const [msgType, msgContent] = detectedType ? [chalk.redBright(typeMap[detectedType[0]][0]), typeMap[detectedType[0]][1]] : [chalk.whiteBright('MENSAGEM'), (q || '').slice(0, 25) + ((q || '').length > 25 ? '...' : '')];
  process.nextTick(() => {
    console.log(chalk.hex('#7B1FA2')(`╭──. ݁ ⛧ ₊ ⊹ 🦇. ݁ ˖ ♱ . ݁──╮\n | ⸸ ${isGroup ? 'MENSAGEM NO GRUPO' : 'MENSAGEM NO PRIVADO'}\n╰──. ݁ ⛧ ₊ ⊹ 🦇. ݁ ˖ ♱ . ݁──╯\n╭──. ݁ ⛧ ₊ ⊹ 🦇. ݁ ˖ ♱ . ݁──╮\n| ⸸ USUÁRIO: ${user}\n| ⸸ NÚMERO: ${number}\n| ⸸ CHAT: ${chatType} ${groupInfo}\n| ⸸ TIPO: ${msgType}\n|⸸ CONTEÚDO: ${msgContent}\n╰──. ݁ ⛧ ₊ ⊹ 🦇. ݁ ˖ ♱ . ݁──╯
`));
  });
}

// ========= || Jogo da Velha || ======== \\
async function startJogoDaVelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(fs.existsSync(`./ARQUIVES/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if(budy == "Cex") return reply("why");
if(budy.toLowerCase() == "s" || budy.toLowerCase() == "sim" || budy.toLowerCase() == "ok") {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status) return;
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./ARQUIVES/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `
*『 🎮 』ᒍOᘜO ᗪᗩ ᐯᗴᒪᕼᗩ『 🕹 』*

❌ : @${boardnow.X}
⭕ : @${boardnow.O}
• Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}\n\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
mention(chatAccept);
}
} else if(
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status) return reply(`O jogo começou ou já existe uma partida aberta neste grupo! Por favor, caso ninguém esteja jogando ou houve um erro desconhecido na função, entre em contato com o criador ou solicite à um adm para usar o  comando '${prefix}resetvelha' no grupo.`);
DLT_FL(`./ARQUIVES/tictactoe/db/${from}.json`);
mention(`Nossa @${boardnow.X}, infelizmente o seu oponente não aceitou seu desafio!, ❌😕`)
joguinhodavelhajs.splice([])
fs.writeFileSync('./DADOS DO YUTA/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./DADOS DO YUTA/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if(arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if(!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda.`)
if((boardnow.turn == "X" ? boardnow.X : boardnow.O) != sender.replace("@s.whatsapp.net", "")) return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if(moving.isWin) {
if(moving.winner == "SERI") {
reply(`Ocorreu um empate! 😨`);
DLT_FL(`./ARQUIVES/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./DADOS DO YUTA/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./DADOS DO YUTA/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
setTimeout(() => {
if(fs.existsSync("./ARQUIVES/tictactoe/db/" + from + ".json")) {
DLT_FL("./ARQUIVES/tictactoe/db/" + from + ".json");
reply(`O *jogo da velha* foi cancelado por falta de movimentação no tabuleiro ou o desafiado não aceitou no prazo de 5 minutos.`);
} else {
console.log(colors.red(time), colors.magenta("[ EXPIRADO ]"), colors.red('Jogo da velha espirado..'));
}
joguinhodavelhajs.splice([])
fs.writeFileSync('./DADOS DO YUTA/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./DADOS DO YUTA/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
await mention(`Parabéns *@${winnerJID}*, você ganhou a partida do jogo da velha! 😍🎯`)   
DLT_FL(`./ARQUIVES/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./DADOS DO YUTA/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./DADOS DO YUTA/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
mention(`
*『 🎮 』ᒍOᘜO ᗪᗩ ᐯᗴᒪᕼᗩ『 🕹 』*

❌ : @${boardnow.X}
⭕ : @${boardnow.O}
• Sua vez : @${moving.turn == "X" ? moving.X : moving.O}\n\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`);
}
} 
} 
}

// ✅ ACEITAR NAMORO (SIM)
if (budy2.toLowerCase() === "s" || budy2.toLowerCase() === "sim") {
  if (isGroup && JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)]?.idgp == from) {

    const idxPedido = namoro2.map(i => i.id).indexOf(sender);
    const pedido = namoro2[idxPedido]; // {id, pedido, idgp}

    // quem pediu (jid)
    const jidQuemPediu = `${pedido.pedido}@s.whatsapp.net`;

    // acha o registro original do pedido no namoro1
    const idxRel = namoro1.findIndex(r =>
      (String(r.usu1) === String(jidQuemPediu)) &&
      (String(r.usu2) === String(sender).split("@")[0] || String(r.usu2) === String(sender)) &&
      String(r.idgp) === String(from) &&
      r.namorados === false
    );

    // fallback (caso seu usu2 esteja salvo só como número)
    const idxRel2 = namoro1.findIndex(r =>
      String(r.usu1) === String(jidQuemPediu) &&
      String(r.idgp) === String(from) &&
      r.namorados === false
    );

    const idxFinal = idxRel !== -1 ? idxRel : idxRel2;
    if (idxFinal === -1) return;

    // ✅ atualiza o registro EXISTENTE (NÃO cria outro)
    namoro1[idxFinal].namorados = true;

    // guarda início real aqui (pra dupla nunca errar)
    if (!namoro1[idxFinal].inicio) namoro1[idxFinal].inicio = Date.now();

    // padroniza usu2 pra virar JID (ajuda no terminar/dupla)
    const usu2Atual = namoro1[idxFinal].usu2;
    const usu2Jid = String(usu2Atual).includes("@") ? String(usu2Atual) : `${String(usu2Atual)}@s.whatsapp.net`;
    namoro1[idxFinal].usu2 = usu2Jid;

    fs.writeFileSync("./DADOS DO YUTA/func/namoro1.json", JSON.stringify(namoro1, null, 2));

    // remove pendência
    namoro2.splice(idxPedido, 1);
    fs.writeFileSync("./DADOS DO YUTA/func/namoro2.json", JSON.stringify(namoro2, null, 2));

    // manda mensagem bonitinha
    let ppimg;
    try { ppimg = await yuta.profilePictureUrl(sender, "image"); } catch { ppimg = imgperfil; }

    await yuta.sendMessage(from, {
      image: { url: ppimg },
      caption: mess.namoro(namoro1, idxFinal, sender, prefix),
      contextInfo: { ...NkChannelKk, mentionedJid: [jidQuemPediu, sender] }
    }, { quoted: selo });
  }
}

// ❌ RECUSAR NAMORO (NÃO)
if (budy2.toLowerCase() === "n" || budy2.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === "nao") {
  if (isGroup && JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)]?.idgp == from) {

    const idxPedido = namoro2.map(i => i.id).indexOf(sender);
    const pedido = namoro2[idxPedido];
    const jidQuemPediu = `${pedido.pedido}@s.whatsapp.net`;

    // remove o registro do pedido no namoro1 (o que está pendente)
    const idxRel = namoro1.findIndex(r =>
      String(r.usu1) === String(jidQuemPediu) &&
      String(r.idgp) === String(from) &&
      r.namorados === false
    );

    if (idxRel !== -1) {
      await yuta.sendMessage(from, {
        text: mess.fora(namoro1, idxRel, sender, prefix),
        contextInfo: { ...NkChannelKk, mentionedJid: [jidQuemPediu, sender] }
      }, { quoted: selo });

      namoro1.splice(idxRel, 1);
      fs.writeFileSync("./DADOS DO YUTA/func/namoro1.json", JSON.stringify(namoro1, null, 2));
    }

    // remove pendência
    namoro2.splice(idxPedido, 1);
    fs.writeFileSync("./DADOS DO YUTA/func/namoro2.json", JSON.stringify(namoro2, null, 2));
  }
}

const FAMILIA_DB_PATH = "./DADOS DO YUTA/func/familia_db.json"

function __FAM_load() {
  try {
    if (!fs.existsSync(FAMILIA_DB_PATH)) return { families: {}, pend: {} }
    const j = JSON.parse(fs.readFileSync(FAMILIA_DB_PATH, "utf-8"))
    if (!j || typeof j !== "object") return { families: {}, pend: {} }
    if (!j.families || typeof j.families !== "object") j.families = {}
    if (!j.pend || typeof j.pend !== "object") j.pend = {}
    return j
  } catch {
    return { families: {}, pend: {} }
  }
}

function __FAM_save(db) {
  try { fs.writeFileSync(FAMILIA_DB_PATH, JSON.stringify(db, null, 2) + "\n") } catch {}
}

function __FAM_jid(x) {
  const s = String(x || "")
  if (!s) return ""
  if (s.includes("@s.whatsapp.net") || s.includes("@lid")) return s
  // se vier só numero
  return s.includes("@") ? s : (s + "@s.whatsapp.net")
}

function __FAM_isMarriedInGroup(sender, from, namoro1) {
  try {
    const meJid = String(sender)
    const meNum = meJid.split("@")[0]

    const item = (namoro1 || []).find(n => {
      if (!n) return false
      if (n.namorados !== true) return false
      if (String(n.idgp || "") !== String(from || "")) return false

      const u1 = __FAM_jid(n.usu1)
      const u2 = __FAM_jid(n.usu2)

      // usu2 às vezes vem sem domínio
      const u2num = String(n.usu2 || "").split("@")[0]

      return (
        u1 === meJid ||
        u2 === meJid ||
        u1.split("@")[0] === meNum ||
        u2.split("@")[0] === meNum ||
        u2num === meNum
      )
    })

    if (!item) return null

    const a = __FAM_jid(item.usu1)
    const b = __FAM_jid(item.usu2)

    // normaliza pra jid real
    const aJ = a.includes("@") ? a : __FAM_jid(a)
    const bJ = b.includes("@") ? b : __FAM_jid(b)

    // garante que um deles é o sender de verdade
    const aNum = aJ.split("@")[0]
    const bNum = bJ.split("@")[0]
    const meNum2 = meJid.split("@")[0]

    const A = (aNum === meNum2) ? meJid : aJ
    const B = (bNum === meNum2) ? meJid : bJ

    const spouse = (A === meJid) ? B : A

    return { a: A, b: B, spouse }
  } catch {
    return null
  }
}

function __FAM_makeId(a, b, from) {
  const x = [String(a), String(b)].sort().join("_")
  return `${x}__${String(from)}`
}

function __FAM_findFamilyByMember(db, jid, from) {
  const j = String(jid)
  const g = String(from)
  for (const [fid, fam] of Object.entries(db.families || {})) {
    if (!fam) continue
    if (String(fam.grupo) !== g) continue
    if (String(fam.a) === j || String(fam.b) === j) return { fid, fam, role: "casal" }
    if (Array.isArray(fam.filhos) && fam.filhos.includes(j)) return { fid, fam, role: "filho" }
  }
  return null
}

function __FAM_pickTargetJid(info, menc_os2) {
  // tenta: mention normal (menc_os2), ou reply
  let alvo = menc_os2 ? __FAM_jid(menc_os2) : ""
  if (alvo) return alvo

  try {
    const ctx =
      info?.message?.extendedTextMessage?.contextInfo ||
      info?.message?.imageMessage?.contextInfo ||
      info?.message?.videoMessage?.contextInfo ||
      info?.message?.documentMessage?.contextInfo ||
      info?.message?.documentWithCaptionMessage?.message?.documentMessage?.contextInfo ||
      null

    const q = ctx?.quotedMessage
    const p = ctx?.participant
    if (q && p) return __FAM_jid(p)
  } catch {}

  return ""
}

startJogoDaVelha()

if (isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe && ANT_SP.active && ANT_SP.groupId !== from && budy.includes("https://chat.whatsapp.com/")) {
    const CompareLink = await yuta.groupInviteCode(from);
    if (!body.includes(CompareLink)) {
        const regex = /(https:\/\/chat\.whatsapp\.com\/[^\s]+)/;
        const links = body.match(regex);
        const FOUND_LINK = links ? links[0] : "Not found";
        const findPlace = async (number) => {
            try {
                const findDDD = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${number}`);
                return findDDD.data.state;
            } catch {
                return "Não encontrado";
            }
        };
        async function getdados() {
            const number = sender.split("@")[0];
            const getImage = await yuta.profilePictureUrl(sender, 'image').catch(() => imgperfil);
            const getbio = `${number}@s.whatsapp.net`;

            let recadoW;
            try {
                const recadoUser = await yuta.fetchStatus(getbio);
                recadoW = recadoUser[0]?.status?.status || "*privado*";
            } catch {
                recadoW = "*privado*";
            }
            return {
                creator: "Lm", nome: pushname, numero: number, grupo: groupName, link: FOUND_LINK, imagem: getImage, bio: recadoW, groupId: from, id: info.key.id, device: info.key.id.length > 21 ? 'Android 🚀' : (info.key.id.substring(0, 2) == '3E' ? 'WhatsApp Web 🪀' : 'iPhone 💸'), time: moment().tz("America/Sao_Paulo").format("HH:mm:ss"), data: moment().tz("America/Sao_Paulo").format("DD/MM/YYYY"), full_text: body, lugar: await findPlace(number.substring(2, 4)),
            };
        }
        await getdados()
            .then(async (lm) => {
                await yuta.sendMessage(ANT_SP.groupId, {
                    text: mess.antisp(lm),
                    contextInfo: {...(NkChannelKk || {}), externalAdReply: {title: `⚠️ LINK DETECTADO ⚠️`, body: NomeDoBot, previewType: "PHOTO", thumbnailUrl: lm.imagem, thumbnail: Buffer, sourceUrl: channel}}, mentions: groupAdmins,
                });
            })
            .catch(console.error);
    }
}




let isTrueFalse = Array('tiktok', 'tiktok_audio', 'tiktok_video', 'facebook','instagram','twitter','ytmp3','ytmp4','play', 'playmix', 'play2', 'play3', 'playvid', 'playvid2').some(item => item === command)

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && !SoDono && !isListaBrancaG && isBotGroupAdmins && !info.key.fromMe) {
if(isCmd && isTrueFalse) return
if(IS_DELETE) {
setTimeout(() => {
yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
yuta.groupSettingUpdate(from, 'announcement')
setTimeout(() => {
yuta.groupSettingUpdate(from, 'not_announcement')
}, 1200)
if(!JSON.stringify(groupMembers).includes(sender)) return
yuta.groupParticipantsUpdate(from, [sender], 'remove')
}

if (isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
    const messageText = info.message?.requestPaymentMessage?.noteMessage?.extendedTextMessage?.text || info.message?.extendedTextMessage?.text;
if(Procurar_String.includes("chat.whatsapp.com/")){
if(isBot) return 
if(!JSON.stringify(groupMembers).includes(sender)) return
            await yuta.groupParticipantsUpdate(from, [sender], 'remove');            
            await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender } });
        }
        if (info.message?.requestPaymentMessage || info.message?.sendPaymentMessage) {
            await yuta.groupSettingUpdate(from, 'announcement');
            await yuta.groupParticipantsUpdate(from, [sender], 'remove');            
            await yuta.groupSettingUpdate(from, 'not_announcement');
        }
    }

const groupIdscount = countMessage.map(i => i.groupId);
if (!muted.some(i => i.grupo === from) && isGroup) {
  muted.push({ grupo: from, silenciados: [], mutados: [] });
  fs.writeFileSync("./DADOS DO YUTA/grupos/muted.json", JSON.stringify(muted, null, 2));
}
const grupoMute = muted.find(i => i.grupo === from);
if (isGroup && grupoMute) {
  if (grupoMute.silenciados?.includes(sender)) {
    await yuta.sendMessage(from, {
      delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }
    });
  }
  if (grupoMute.mutados?.includes(sender)) {
    await yuta.sendMessage(from, {
      delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender }
    });
    await yuta.sendMessage(from, {
      text: `*ᴛᴏᴍᴏᴜ ᴘᴏʀ ɴᴀᴏ ꜰɪᴄᴀʀ ǫᴜɪᴇᴛᴏ 💢🙇‍♂️*`,
      mentions: [sender]
    }, { quoted: selo });

    await yuta.groupParticipantsUpdate(from, [sender], 'remove');
    grupoMute.mutados = grupoMute.mutados.filter(id => id !== sender);
    fs.writeFileSync("./DADOS DO YUTA/grupos/muted.json", JSON.stringify(muted, null, 2));
  }
}


let ind = countMessage.map(i => i.groupId).indexOf(from)
if (ind === -1) {
    countMessage.push({groupName: groupName, groupId: from, numbers: [] })
    ind = countMessage.length - 1
}
if (sender.endsWith('@g.us')) return
const numbersIds = countMessage[ind].numbers.map(u => u.id)
if (!numbersIds.includes(sender)) {
    countMessage[ind].numbers.push({
        id: sender, messages: isCmd ? 0 : 1, cmd_messages: isCmd ? 1 : 0, aparelho: adivinha || 'desconhecido', figus: type === "stickerMessage" ? 1 : 0, imagens: isImage ? 1 : 0, videos: isVideo ? 1 : 0, audios: isAudio ? 1 : 0, documentos: (isQuotedDocument || type === "documentMessage") ? 1 : 0})
} else {
    const indnum = numbersIds.indexOf(sender)
    const userData = countMessage[ind].numbers[indnum]
    if (type !== "stickerMessage") {
        userData.messages = (userData.messages || 0) + (isCmd ? 0 : 1)
        userData.cmd_messages = (userData.cmd_messages || 0) + (isCmd ? 1 : 0)
        userData.aparelho = adivinha || userData.aparelho || 'desconhecido'}
    userData.figus = (userData.figus || 0) + (type === "stickerMessage" ? 1 : 0)
    userData.imagens = (userData.imagens || 0) + (isImage ? 1 : 0)
    userData.videos = (userData.videos || 0) + (isVideo ? 1 : 0)
    userData.audios = (userData.audios || 0) + (isAudio ? 1 : 0)
    userData.documentos = (userData.documentos || 0) + ((isQuotedDocument || type === "documentMessage") ? 1 : 0)
}
fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/countmsg.json', JSON.stringify(countMessage))

function limparContadorUsuariosFora(from, groupMembers) {
    const ind = countMessage.findIndex(i => i.groupId === from)
    if (ind === -1) return 0
    const contador = countMessage[ind].numbers
    const membrosDoGrupo = []
    for (const m of groupMembers) {
        const id = jidNormalizedUser(typeof m === 'string' ? m : m.id)
        membrosDoGrupo.push(id)
    }
    let removidos = 0
    for (let i = contador.length - 1; i >= 0; i--) {
        const idContador = jidNormalizedUser(contador[i].id)
        if (!membrosDoGrupo.includes(idContador)) {
            contador.splice(i, 1)
            removidos++
        }
    }

    return removidos
}

const getGroupIndex = (groupId) => countMessage.findIndex(g => g.groupId === groupId);
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

if(body != undefined) { /* Créditos: @Nkzin */
if(!JSON.stringify(pushnames).includes(botNumber)) {
pushnames.push({id: botNumber, nick: NomeDoBot});
fs.writeFileSync("./DADOS DO YUTA/usuarios/users.json", JSON.stringify(pushnames, null, 2));
}
if(!JSON.stringify(pushnames).includes(sender)) {
pushnames.push({id: sender, nick: pushname});
fs.writeFileSync("./DADOS DO YUTA/usuarios/users.json", JSON.stringify(pushnames, null, 2));
} else {
pushnames[pushnames.map(i => i.id).indexOf(sender)].nick = pushname
fs.writeFileSync("./DADOS DO YUTA/usuarios/users.json", JSON.stringify(pushnames, null, 2));
}
}

//======================================\\

const ALUGUEL_AUTO_DB_PATH = "./DADOS DO YUTA/func/aluguel_auto_db.json"

function __aluguelAutoLoad() {
  try {
    if (!fs.existsSync(ALUGUEL_AUTO_DB_PATH)) {
      return { groups: {}, pend: {} }
    }
    const j = JSON.parse(fs.readFileSync(ALUGUEL_AUTO_DB_PATH, "utf-8"))
    if (!j || typeof j !== "object") return { groups: {}, pend: {} }
    if (!j.groups || typeof j.groups !== "object") j.groups = {}
    if (!j.pend || typeof j.pend !== "object") j.pend = {}
    return j
  } catch {
    return { groups: {}, pend: {} }
  }
}

function __aluguelAutoSave(db) {
  try {
    fs.writeFileSync(ALUGUEL_AUTO_DB_PATH, JSON.stringify(db, null, 2) + "\n")
  } catch {}
}

function __formatBRL(v) {
  try { return Number(v).toFixed(2).replace(".", ",") } 
  catch { return String(v) }
}

function __aluguelPlanos() {
  return [
    {
      id: "15DIAS",
      titulo: "15 Dias",
      dias: 15,
      horas: 0,
      valor: 10,
      grupos: 1
    },
    {
      id: "30DIAS",
      titulo: "30 Dias",
      dias: 30,
      horas: 0,
      valor: 25,
      grupos: 1
    }
  ]
}

function __aluguelFindPlano(planoId) {
  const planos = __aluguelPlanos()
  return planos.find(p => p.id === String(planoId)) || null
}

global.__ALUGUEL_POLL = global.__ALUGUEL_POLL || {}

async function __startPollPixAluguel({ yuta, from, sender, pagamentoId, plano, quotedMsg }) {
  try {
    const pid = String(pagamentoId)
    if (global.__ALUGUEL_POLL[pid]) return
    global.__ALUGUEL_POLL[pid] = true

    const db = __aluguelAutoLoad()
    db.pend[pid] = {
      grupo: String(from),
      sender: String(sender),
      planoId: String(plano.id),
      dias: Number(plano.dias || 0),
      horas: Number(plano.horas || 0),
      valor: Number(plano.valor || 0),
      criadoEm: Date.now(),
      expiraEm: Date.now() + (30 * 60 * 1000)
    }
    __aluguelAutoSave(db)

    const tempoMaximo = 30 * 60 * 1000
    const inicio = Date.now()

    const timer = setInterval(async () => {
      try {
        if ((Date.now() - inicio) > tempoMaximo) {
          clearInterval(timer)
          delete global.__ALUGUEL_POLL[pid]

          const db2 = __aluguelAutoLoad()
          delete db2.pend[pid]
          __aluguelAutoSave(db2)
          return
        }

        const check = await verificarPix(pid).catch(() => null)

        if (check?.status === "approved") {
          clearInterval(timer)
          delete global.__ALUGUEL_POLL[pid]

          const db2 = __aluguelAutoLoad()
          const pend = db2.pend[pid]
          if (!pend) return

          try { 
            ativarAluguelGrupo(from, plano.dias, plano.horas) 
          } catch {}

          delete db2.pend[pid]
          __aluguelAutoSave(db2)

          const msgOk =
            `*✅ ᴘᴀɢᴀᴍᴇɴᴛᴏ ᴄᴏɴꜰɪʀᴍᴀᴅᴏ! 🙇‍♂️*\n\n` +
            `*• ᴘʟᴀɴᴏ: ${plano.titulo}*\n` +
            `*• ᴀʟᴜɢᴜᴇʟ ᴀᴛɪᴠᴀᴅᴏ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ ✅*`

          await yuta.sendMessage(from, {
            text: msgOk,
            contextInfo: { ...NkChannelKk, mentionedJid: [sender] }
          }, { quoted: quotedMsg || selo }).catch(() => {})

          return
        }

      } catch {}
    }, 5000)

  } catch {
    try { delete global.__ALUGUEL_POLL[String(pagamentoId)] } catch {}
  }
}

const YutaAluguel = './ARQUIVES/tictactoe/grupos_com_aluguel.json'
let gruposAutorizados = []
if (!fs.existsSync(YutaAluguel)) fs.writeFileSync(YutaAluguel, JSON.stringify([]))
gruposAutorizados = JSON.parse(fs.readFileSync(YutaAluguel))
function salvarGrupos() {
    fs.writeFileSync(YutaAluguel, JSON.stringify(gruposAutorizados, null, 2))
}
function ativarAluguelGrupo(from, dias = 0, horas = 0) {
    const agora = new Date()
    const expiraEm = new Date(agora.getTime() + (dias * 24 + horas) * 60 * 60 * 1000)

    const jaExiste = gruposAutorizados.find(g => g.id === from)
    if (!jaExiste) {
        gruposAutorizados.push({ id: from, expiraEm: expiraEm.toISOString() })
        salvarGrupos()
    } else {
        jaExiste.expiraEm = expiraEm.toISOString()
        salvarGrupos()
    }
}
async function desativarAluguelGrupo(from) {
    try {
        gruposAutorizados = gruposAutorizados.filter(g => g.id !== from)
        salvarGrupos()
        const meta = await yuta.groupMetadata(from)
        const midia = carregarMidia("fotomenu")
        const msg = { caption: mess.aluguel(prefix, NomeDoBot), contextInfo: { ...NkChannelKk }, mentions: groupAdmins}
        if (midia.type === "video") {
            msg.video = midia.data
            msg.gifPlayback = true
        } else if (midia.type === "image") {
            msg.image = midia.data
        } else {
            msg.text = msg.caption
        }
        await yuta.sendMessage(from, msg)
    } catch (e) {
        console.log("Erro ao desativar aluguel:", e)
    }
}
function isGrupoAutorizado(from) {
    const grupo = gruposAutorizados.find(g => g.id === from)
    if (!grupo) return false

    const agora = new Date()
    const expira = new Date(grupo.expiraEm)

    if (agora > expira) {
        desativarAluguelGrupo(from)
        return false
    }
    return true
}

const __CMD_ALUGUEL_FREE = [
  "alugar", "alugarbot", "alugar2", "alugarbot2",
  "alugarplano",
  "resgataraluguel", "resgatar_aluguel"
]

const __permitirMesmoSemAluguel = __CMD_ALUGUEL_FREE.includes(command)

if (isGroup && isModoAluguel && !SoDono && !isGrupoAutorizado(from) && !__permitirMesmoSemAluguel) {
  return
}


//======(ANTI-IMAGEM)========\\
if (isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
    if (info.key.fromMe) return; 
    if (isGroupAdmins) return;
    if (dataGp[0].legenda_imagem == "0") {
        await yuta.sendMessage(from, { text: "Por favor, envie uma imagem com legenda." }, { quoted: selo });        
        if (IS_DELETE) {
            setTimeout(async () => {
                if (groupMembers.find(member => member.id === sender)) {
                    await yuta.groupParticipantsUpdate(from, [sender], 'remove');}}, 1000); }}}

//======(ANTI-STICKER)========\\
if(isAntiSticker && !isGroupAdmins && isBotGroupAdmins && type == 'stickerMessage') {
    if(info.key.fromMe) return; 
    const isAdminOrOwner = groupMembers.find(member => member.id === sender && (member.isAdmin || member.isOwner));
    if(isAdminOrOwner) return;    
    if(IS_DELETE) {
        setTimeout(async() => {
            await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
        }, 500);
    }
    if(!JSON.stringify(groupMembers).includes(sender)) return;
    await yuta.groupParticipantsUpdate(from, [sender], 'remove');
}

//============[ ANTI DOCUMENTO ]============\\

if(Antidoc && isBotGroupAdmins && !isGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return await yuta.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selo})
     if(IS_DELETE) {
   setTimeout(async() => {
      await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
       if(!JSON.stringify(groupMembers).includes(sender)) return  
   await yuta.groupParticipantsUpdate(from, [sender], 'remove')
}


if(isUrl(PR_String) && isAntiLinkEasy && !isGroupAdmins && !isListaBrancaG && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await yuta.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('*[-⚠-] ᴅɪᴠᴜʟɢᴏᴜ ʟɪɴᴋ? ɪʀᴇɪ ᴀᴘᴀɢᴀʀ.*');
}
if(isCmd && isTrueFalse) return
if(IS_DELETE) {
setTimeout(async() => {
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
}

// ANTI NOTAS FAKES ==================>
if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi);
if(verificar && budy.length < 100) return  
if(IS_DELETE) {
setTimeout(async() => {
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
await yuta.groupParticipantsUpdate(from, [sender], 'remove');
}

//FINALZIN ===========================>
function remover(id, usu) {
yuta.groupParticipantsUpdate(id, [usu], "remove")}
//======(ANTI-VIDEO)========\\
if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return await yuta.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selo});
if(dataGp[0].legenda_video == "0") {
await yuta.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: selo});
} else {
await yuta.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: selo});
}
if(IS_DELETE) {
setTimeout(async() => {
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
if(!JSON.stringify(groupMembers).includes(sender)) return
await yuta.groupParticipantsUpdate(from, [sender], 'remove');
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return await yuta.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: selo});
await yuta.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: selo});
if(IS_DELETE) {
setTimeout(async() => {
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}});
}, 500);
}
if(!JSON.stringify(groupMembers).includes(sender)) return
await yuta.groupParticipantsUpdate(from, [sender], 'remove');
}

//========(ANTI_LIGAR)========\\
if (!isGroup && isAnticall) {
  yuta.ws.on('CB:call', async (B) => {
    if (B.content[0].tag == 'offer') {
      const numero = B.content[0].attrs['call-creator'];
      await yuta.updateBlockStatus(numero, "block");
    }
  });
}

function hasGroupStatusMentionMessage(info) {
  try {
    const msg = info?.message || {};

    if (msg?.groupStatusMentionMessage) return true;

    const q =
      msg?.extendedTextMessage?.contextInfo?.quotedMessage ||
      msg?.extendedTextMessage?.contextInfo?.quotedMessage?.message ||
      null;

    if (q?.groupStatusMentionMessage) return true;

    const s = JSON.stringify(msg);
    if (s.includes("groupStatusMentionMessage")) return true;

    return false;
  } catch {
    return false;
  }
}

function resolveSenderForRemove(info, groupMetadata) {
  try {
    const pn = info?.key?.participantPn;
    if (pn && String(pn).includes("@s.whatsapp.net")) return String(pn);

    let raw = info?.key?.participant || null;
    if (!raw) return null;
    raw = String(raw);

    if (raw.includes("@lid")) {
      const parts = groupMetadata?.participants || [];
      const m = parts.find(p => String(p?.lid) === raw);
      if (m?.id) return String(m.id);
      if (m?.jid) return String(m.jid);

      const num = raw.split(":")[0].replace("@lid", "").replace(/\D/g, "");
      if (num) return num + "@s.whatsapp.net";
      return null;
    }

    if (raw.includes(":")) raw = raw.split(":")[0];

    if (!raw.includes("@")) {
      const num2 = raw.replace(/\D/g, "");
      if (!num2) return null;
      return num2 + "@s.whatsapp.net";
    }

    return raw;
  } catch {
    return null;
  }
}

async function antistatusDeleteMsg(yuta, from, info) {
  try {
    if (info?.key) await yuta.sendMessage(from, { delete: info.key }).catch(() => {});
  } catch {}
}
try {
  if (
    isGroup &&
    dataGp?.[0]?.antistatus === true &&
    hasGroupStatusMentionMessage(info) &&
    isBotGroupAdmins &&
    !SoDono &&
    !isGroupAdmins
  ) {
    let meta = groupMetadata;
    if (!meta?.participants) {
      try { meta = await yuta.groupMetadata(from); } catch { meta = groupMetadata; }
    }

    const alvoJid = resolveSenderForRemove(info, meta) || sender;

    await yuta.sendMessage(from, {
      text: `*ᴜꜱᴜᴀʀɪᴏ ʙᴀɴɪᴅᴏ ᴩᴏʀ ᴍᴀʀᴄᴀʀ ᴏ ɢʀᴜᴩᴏ* 🗣️`,
      mentions: [alvoJid]
    }, { quoted: selo }).catch(() => {});

    await yuta.groupParticipantsUpdate(from, [alvoJid], "remove").catch(() => {});
    await antistatusDeleteMsg(yuta, from, info);

    return;
  }
} catch (e) {
  console.log(e);
}

/* ANTIPV1 - Este anti pv bloqueia aqueles que encaminham mensagem no pv do bot.. */
var USUARIOS_BLOQ = []
if(isAntiPv && !USUARIOS_BLOQ.includes(sender)) {
if(!isGroup && !SoDono && !isnit && !isVip){ 
await sleep(2500)
reply(msgantipv1.replace('#nome#', pushname))
setTimeout(async () => {
await yuta.updateBlockStatus(sender, 'block')
}, 2000)
}
USUARIOS_BLOQ.push(sender);
} 

/* ANTIPV2 - Vai floodar o privado do usuário que encaminhar a mensagem no privado.. */
var MSG_ANTPV2_ENC = []
if(!isGroup && !isVip && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && isAntiPv2 && !MSG_ANTPV2_ENC.includes(sender)) {
MSG_ANTPV2_ENC.push(sender);
return reply(msgantipv2)
}

/* ANTIPV3 - Ignora todos os que falam ou usam os comandos no privado, exceto user vip e o proprietário atual do bot. */
if(!isGroup && !isVip && !SoDono && !info.key.fromMe && isAntiPv3) return

//====================================\\

const VerificarJSON = (json, value) => {
if(JSON.stringify(json).includes(value)) return true
return false
}

const RG_SCOINS = JSON.parse(fs.readFileSync("./DADOS DO YUTA/func/coins.json"));

const isModoCoins = isGroup ? dataGp[0].isModoCoins : undefined

const ID_G_COINS = RG_SCOINS.findIndex(i => i.grupo === from)
const ID_USU_COINS = RG_SCOINS[ID_G_COINS]?.usus?.findIndex(i => i.id === sender);

function CoinsUpdate(index){
fs.writeFileSync("./DADOS DO YUTA/func/coins.json", JSON.stringify(index, null, 2) + "\n")
}

const SYSTEM_COIN = {

  AdicionarCoins: async function(user, quant) {
  CoinsUser_ = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === user);
  if(!CoinsUser_) return reply("O(a) usuário(a) nunca enviou uma mensagem neste grupo! Então não é possível adicionar ou transferir coins à um membro que não possuí registro!");
  CoinsUser_["coins"] += quant;
  CoinsUpdate(RG_SCOINS);
  },
  
  transferCoins: async function(transferidor, recebidor, quantidade) {
  DM_ = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === transferidor)
  DM_2 = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === recebidor)
  if((DM_?.coins || 0) < quantidade) return mention(`A quantidade que você tem é inferior a que você deseja transferir ao usuário: @${recebidor.split("@")[0]}`)
  if(!DM_2) return mention(`O(a) usuário(a) '@${recebidor.split("@")[0]}' nunca enviou uma mensagem neste grupo! Então não é possível adicionar ou transferir coins à um usuário não registrado no meu sistema!`);
  DM_["coins"] -= quantidade;
  DM_2["coins"] += quantidade;
  CoinsUpdate(RG_SCOINS);
  },
  
  Adicionar_2: async function(A, Q, X, X2) {
  DM_ = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === A);
  if(!DM_) return reply("O(a) usuário(a) nunca enviou uma mensagem neste grupo! Então não é possível atualizar a carteira!");
  DM_["coins"] += Q;
  DM_[X] = X2
  CoinsUpdate(RG_SCOINS);
  },
  
  RemoverCoins: async function(user, quant) {
  CoinsUser = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === user)
  if(!CoinsUser) return reply("O(a) usuário(a) nunca enviou uma mensagem neste grupo! Então não é possível remover coins de membro inativo que não possuí registro!");
  if((CoinsUser?.coins || 0) < quant) return reply(`O usuário possuí '${CoinsUser?.coins} N-Coins', este valor não é suficiente para realizar a transação de remoção de ${quant}.`);
  CoinsUser["coins"] -= quant;
  CoinsUpdate(RG_SCOINS);
  },
  
VerificarCampo: function(user, parameter) {
  return RG_SCOINS[ID_G_COINS].usus.find(i => i.id === user)[parameter] || null;
},
  
  }
  
  if(isModoCoins && isGroup && isBotGroupAdmins && VRF_JSON_GRUPO && !info.key.fromMe) {
  
  if(!RG_SCOINS.some(i => i.grupo === from)) {
  RG_SCOINS.push({grupo: from, usus: [{id: sender, coins: 0, data: 0, chances: {cassino: 0, minerar: 0}}]})
  CoinsUpdate(RG_SCOINS);
  } else if(RG_SCOINS.some(i => i.grupo === from) && !RG_SCOINS[ID_G_COINS]?.usus?.some(i => i?.id === sender)) {
  RG_SCOINS[ID_G_COINS].usus.push({id: sender, coins: 0, data: 0, chances: {cassino: 0, minerar: 0}})
  CoinsUpdate(RG_SCOINS);
  }
  
  if(!info.message?.reactionMessage?.text && dattofc != SYSTEM_COIN.VerificarCampo(sender, "data")) {
  await mention(mess.coins(tempo, sender, prefix));
  SYSTEM_COIN.Adicionar_2(sender, 50, "data", dattofc);
  RG_US = RG_SCOINS[ID_G_COINS].usus.find(i => i.id === sender);
  Object.assign(RG_US.chances, {"cassino": 0, "minerar": 0});
  CoinsUpdate(RG_SCOINS);
  }
  }

  if(isGroup && fs.existsSync(`./DADOS DO YUTA/grupos/games/anagrama/${from}.json`)){
    let dataA = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/games/anagrama/${from}.json`))
    if(budy.slice(0,4).toUpperCase() == dataA.palavraOriginal.slice(0,4).toUpperCase() && budy.toUpperCase() != dataA.palavraOriginal) return reply('Está perto...')
    if(budy.toUpperCase() == dataA.palavraOriginal) {
    await yuta.sendMessage(from, {text: mess.acert(pushname, dataA, resposta)}, {"mentionedJid": [sender]}, {quoted: selo})
    await SYSTEM_COIN.AdicionarCoins(sender, 5);
    fs.unlinkSync(`./DADOS DO YUTA/grupos/games/anagrama/${from}.json`)		
    setTimeout(async() => {
    fs.writeFileSync(`./DADOS DO YUTA/grupos/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
    dataAB = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/games/anagrama/${from}.json`))
    yuta.sendMessage(from, {text: mess.anagrama(shuffle, dataAB)}, {quoted: selo})
    }, 5000)
    }}
    
    if(isGroup && fs.existsSync(`./DADOS DO YUTA/grupos/games/quiz-animais/${from}.json`)){
    let dQ = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/games/quiz-animais/${from}.json`))
    if(budy.slice(0,4).toUpperCase() == dQ.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dQ.original) return reply('está perto')
    if(budy.toUpperCase() == dQ.original) { 
    await yuta.sendMessage(from,{text: mess.quizaC(pushname, dQ)}, {"mentionedJid": [sender]}, {quoted: selo}) 
    await SYSTEM_COIN.AdicionarCoins(sender, 5);
    fs.unlinkSync(`./DADOS DO YUTA/grupos/games/quiz-animais/${from}.json`)		
    setTimeout(async() => {
    fs.writeFileSync(`./DADOS DO YUTA/grupos/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
    dataQA = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/games/quiz-animais/${from}.json`))
    wew = await getBuffer(dataQA.foto)
    await yuta.sendMessage(from, {image: wew, caption: `🤔 Pergunta: ${dataQA.question}`}, {quoted: selo})
    }, 5000)
    }
    }
    
    if(isGroup && fs.existsSync(`./DADOS DO YUTA/grupos/games/quiz-futebol/${from}.json`)){
    let dQF = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/games/quiz-futebol/${from}.json`))
    if(budy.slice(0,4).toUpperCase() == dQF.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != dQF.resposta) return reply('está perto')
    if(budy.toUpperCase() == dQF.resposta) { 
    await yuta.sendMessage(from,{text: mess.quizC(pushname, dQF)}, {"mentionedJid": [sender]}, {quoted: selo}) 
    await SYSTEM_COIN.AdicionarCoins(sender, 5);
    fs.unlinkSync(`./DADOS DO YUTA/grupos/games/quiz-futebol/${from}.json`)		
    setTimeout(async() => {
    fs.writeFileSync(`./DADOS DO YUTA/grupos/games/quiz-futebol/${from}.json`, `${JSON.stringify(quizFutebol[Math.floor(Math.random() * quizFutebol.length)])}`)
    dataQF = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/games/quiz-futebol/${from}.json`))
    await yuta.sendMessage(from, {text: mess.quizfut(dataQF)}, {quoted: selo})
    }, 5000)
    }
    }
    
    if(isGroup && fs.existsSync(`./DADOS DO YUTA/grupos/games/gartic/${from}.json`)){
    let perg_gartic = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/games/gartic/${from}.json`))
    if(budy.slice(0,4).toUpperCase() == perg_gartic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != perg_gartic.resposta) return reply('Está perto!')
    if(budy.toUpperCase() == perg_gartic.resposta) { 
    await yuta.sendMessage(from,{text: mess.descorbert(pushname)}, {"mentionedJid": [sender]}, {quoted: selo}); 
    await SYSTEM_COIN.AdicionarCoins(sender, 5);
    fs.unlinkSync(`./DADOS DO YUTA/grupos/games/gartic/${from}.json`);
    setTimeout(async() => {
    fs.writeFileSync(`./DADOS DO YUTA/grupos/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[Math.floor(Math.random() * garticArchives.length)])}`)
    let dataGartic2 = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/games/gartic/${from}.json`))
    garticText = mess.gartic(dataGartic2, prefix)
    wew = await getBuffer(`${dataGartic2.imagem}`)
    await yuta.sendMessage(from, {image: wew, caption: garticText}, {quoted: selo})
    }, 5000)
    }
    }
    
    if(isGroup && fs.existsSync(`./DADOS DO YUTA/grupos/games/enigma/${from}.json`)){
    let enigmaData = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/games/enigma/${from}.json`))
    if(budy.slice(0,4).toUpperCase() == enigmaData.respostaEne.slice(0,4).toUpperCase() && budy.toUpperCase() != enigmaData.respostaEne) return reply('Está perto!')
    if(budy.toUpperCase() == enigmaData.respostaEne) { 
    yuta.sendMessage(from,{text: mess.respostaE(pushname)}, {"mentionedJid": [sender]}, {quoted: selo})
    await SYSTEM_COIN.AdicionarCoins(sender, 5);
    fs.unlinkSync(`./DADOS DO YUTA/grupos/games/enigma/${from}.json`)	
    setTimeout(async() => {
    fs.writeFileSync(`./DADOS DO YUTA/grupos/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[Math.floor(Math.random() * enigmaArchive.length)])}`)
    enigmaD = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/games/enigma/${from}.json`))
    enigmaTezt = mess.respondeE(enigmaD, prefix)
    wew = await getBuffer(rvenigma)
    await yuta.sendMessage(from, {image: wew, caption: enigmaTezt}, {quoted: selo})
    }, 5000)
    }
    }
    
    if(isGroup && fs.existsSync(`./DADOS DO YUTA/grupos/games/wmusic/${from}.json`)){
    whatMusic = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/games/wmusic/${from}.json`))
    if(budy.slice(0,4).toUpperCase() == whatMusic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != whatMusic.resposta) return reply('Tá perto hein! Tente novamente...')
    if(budy.toUpperCase() == whatMusic.resposta) { 
    yuta.sendMessage(from,{text: mess.whatmusic(whatMusic, pushname)}, {"mentionedJid": [sender]}, {quoted: selo}); fs.unlinkSync(`./DADOS DO YUTA/grupos/games/wmusic/${from}.json`);
    setTimeout(async() => {
    fs.writeFileSync(`./DADOS DO YUTA/grupos/games/wmusic/${from}.json`, `${JSON.stringify(whatMusicAr[Math.floor(Math.random() * whatMusicAr.length)])}`)
    wmusic = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/games/wmusic/${from}.json`))
    textM = mess.wmusic(wmusic, II)
    await yuta.sendMessage(from, {text: textM}, {quoted: selo})
    }, 5000)
    }
    }
    
if (isX9VisuUnica) {
    if (info.message?.viewOnceMessageV2 || type === "viewOnceMessage") {
        let px;
        if (JSON.stringify(info).includes("videoMessage")) {
            px = info.message?.viewOnceMessageV2?.message?.videoMessage || 
                 info.message?.viewOnceMessage?.message?.videoMessage;
            if (px) {
                px.viewOnce = false;
                px.video = { url: px.url };
                px.caption = (px.caption || "") + "\n\n";
                await yuta.sendMessage(from, px, { quoted: selo });
            }
        } else if (JSON.stringify(info).includes("imageMessage")) {
            px = info.message?.viewOnceMessageV2?.message?.imageMessage || 
                 info.message?.viewOnceMessage?.message?.imageMessage;
            if (px) {
                px.viewOnce = false;
                px.image = { url: px.url };
                px.caption = (px.caption || "") + "\n\n";
                await yuta.sendMessage(from, px, { quoted: selo });
            }
        } else if (JSON.stringify(info).includes("audioMessage") || 
                   info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2Extension?.message?.audioMessage) {
            let audio = info.message?.viewOnceMessageV2?.message?.audioMessage || 
                        info.message?.viewOnceMessage?.message?.audioMessage;
            
            if (audio && audio.mimetype) {
                let buffAudio = await getFileBuffer(audio, 'audio');
                let audioFile = getRandom('.mp3');
                fs.writeFileSync(audioFile, buffAudio);
                let audioBuffer = fs.readFileSync(audioFile);

                await yuta.sendMessage(from, { 
                    audio: audioBuffer, 
                    mimetype: 'audio/mpeg', 
                    ptt: false 
                }, { quoted: selo });

                fs.rmSync(audioFile);
            }
        }
    }
}

//INICIO DE COMANDOS DE FECHAR E ABRIR GRUPO NO HORÁRIO PROGRAMADO!!

let horarios = {};
const horariosPath = './ARQUIVES/tictactoe/grupo.json';

if (fs.existsSync(horariosPath)) {
    try {
        horarios = JSON.parse(fs.readFileSync(horariosPath));
    } catch (e) {
        console.error('erro ao carregar horarios:', e);
        horarios = {};
    }
}

const salvarHorarios = () => {
    fs.writeFileSync(horariosPath, JSON.stringify(horarios, null, 2));
};

const definirFechamento = (from, horario) => {
    horarios[from] = horarios[from] || {};
    horarios[from].fechamento = horario;
    salvarHorarios();
};

const definirAbertura = (from, horario) => {
    horarios[from] = horarios[from] || {};
    horarios[from].abertura = horario;
    salvarHorarios();
};

const removerHorarios = (from) => {
    if (horarios[from]) {
        delete horarios[from];
        salvarHorarios();
    }
};

let ultimaExecucao = {};

if (global.intervalHorarios) clearInterval(global.intervalHorarios);

global.intervalHorarios = setInterval(async () => {
    const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss');

    if (fs.existsSync(horariosPath)) {
        try {
            horarios = JSON.parse(fs.readFileSync(horariosPath));
        } catch (e) {
            console.error(e);
            horarios = {};
        }
    }

    for (const from in horarios) {
        const horario = horarios[from];
        if (!horario) continue;

        try {
            if (horario.fechamento && time2 === horario.fechamento) {
                if (ultimaExecucao[from + '_fechamento'] !== horario.fechamento) {
                    await yuta.groupSettingUpdate(from, 'announcement');
                    await yuta.sendMessage(from, {
                        text: mess.abertura()
                    });
                    ultimaExecucao[from + '_fechamento'] = horario.fechamento;
                }
            }

            if (horario.abertura && time2 === horario.abertura) {
                if (ultimaExecucao[from + '_abertura'] !== horario.abertura) {
                    await yuta.groupSettingUpdate(from, 'not_announcement');
                    await yuta.sendMessage(from, {
                        text: mess.fechamento(horario)
                    });
                    ultimaExecucao[from + '_abertura'] = horario.abertura;
                }
            }
        } catch (e) {
            console.error(e);
        }
    }
}, 1000);

async function sendMenu(from, selo, opt = {}) {
  const {
    reaction = "⚡",
    caption = mess.error(),
    isGroupRequired = false,
    isAdminRequired = false,
    isOwnerRequired = false,
    isModoCoinsRequired = false,
    isModoBnRequired = false,
    sendAudio = false,
    mentionedJid = [] // array de JIDs para menção
  } = opt;

  try {
    reagir(from, reaction);

    if (isGroupRequired && !isGroup) return reply(mess.onlyGroup());
    if (isAdminRequired && !isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
    if (isOwnerRequired && !SoDono) return reply(mess.onlyOwner());
    if (isModoCoinsRequired && !isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ só ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ.*`);
    if (isModoBnRequired && !isModobn) return reply(mess.onlyGroupFun(prefix));
    if (sendAudio && isAudioMenu) await sendAudioMenu(from);

    const midia = carregarMidia("fotomenu"); // pega a mídia
    const msg = { caption, contextInfo: { ...NkChannelKk, mentionedJid } };

    // Detecta tipo de mídia
    if (midia.type === "video") {
      msg.video = midia.data;
      msg.gifPlayback = true;
    } else if (midia.type === "image") {
      msg.image = midia.data;
    } else {
      msg.text = caption; // fallback se não houver mídia
    }

    await yuta.sendMessage(from, msg, { quoted: selo });

  } catch (e) {
    console.error(e);
    // fallback de erro: envia só o texto
    await yuta.sendMessage(from, {
      text: caption,
      contextInfo: { ...NkChannelKk, mentionedJid }
    }, { quoted: selo });
  }
}


if (isAutoDl && isGroup && !info.key.fromMe) {

  if (typeof body === 'string' && !body.startsWith(prefix)) {

    /* =======================
       🎵 TIKTOK AUTO DL
    ======================== */

    const tiktokMatch = body.match(/https?:\/\/(?:www\.|vm\.|vt\.)?tiktok\.com\/[^\s]+/i);

    if (tiktokMatch) {
      try {

        const link = tiktokMatch[0]

        const url = `${SITE}/api/downloads/tiktok-mp4?apitoken=${TOKEN}&url=${encodeURIComponent(link)}`

        await yuta.sendMessage(from, {
          video: { url },
          mimetype: "video/mp4",
          fileName: "tiktok.mp4",
          caption: "🎵 Vídeo TikTok",
          contextInfo: NkChannelKk
        }, { quoted: selo })

        return

      } catch (e) {
        console.log("Erro Auto TikTok:", e.message)
        return
      }
    }

    /* =======================
       📸 INSTAGRAM AUTO DL
    ======================== */

    const instaMatch = body.match(/https?:\/\/(?:www\.)?instagram\.com\/[^\s]+/i);

    if (instaMatch) {
      try {

        const link = instaMatch[0]

        const url = `${SITE}/api/downloads/instagram-video?apitoken=${TOKEN}&url=${encodeURIComponent(link)}`

        await yuta.sendMessage(from, {
          video: { url },
          mimetype: "video/mp4",
          fileName: "instagram.mp4",
          contextInfo: NkChannelKk
        }, { quoted: selo })

        return

      } catch (e) {
        console.log("Erro Auto Instagram:", e.message)
        return
      }
    }

  }
}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\

if(isCmd && isBanned) return reply(mess.bannedUser())

const totalhit = JSON.parse(fs.readFileSync('./DADOS DO YUTA/data/totalcmd.json'))
const CmdUsedBOT = () => {
totalhit[0].totalcmd += 1
fs.writeFileSync('./DADOS DO YUTA/data/totalcmd.json', JSON.stringify(totalhit))
}
if (isCmd) CmdUsedBOT()

const reqcmd = JSON.parse(fs.readFileSync('./DADOS DO YUTA/data/totalcmd.json'))

if (isGroup && isCmd && !isGroupAdmins && !SoDono && !isVip && dataGp[0]?.Limitar_CMD) {
var TEMPO_A = Math.floor(Date.now() / 1000) 
var ID_G = Limit_CMD.findIndex(i => i.idgp === from)
var ID_U = Limit_CMD[ID_G]?.ids.findIndex(i => i.id === sender)
if(!JSON.stringify(Limit_CMD).includes(from) || ID_G < 0 && ID_U < 0) {
Limit_CMD.push({idgp: from, ids: [{id: sender, tempo: TEMPO_A}]})
fs.writeFileSync("./DADOS DO YUTA/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
} else if(ID_G >= 0 && ID_U < 0) {
Limit_CMD[ID_G].ids.push({id: sender, tempo: TEMPO_A})
fs.writeFileSync("./DADOS DO YUTA/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}

if(ID_G >= 0 && ID_U >= 0) {
var TEMPO_D = Limit_CMD[ID_G].ids[ID_U].tempo;
var TEMPO_M = TEMPO_A - TEMPO_D
var TEMPO_D2 = parseInt(dataGp[0]?.Limit_tempo) || 60
if(TEMPO_M < TEMPO_D2) {
return reply(nescessario.TEMPO_DE_CMD.replaceAll("#tempocmd#", TimeCount(TEMPO_M)).replaceAll("#tempo#", TEMPO_D2))
} else {
Limit_CMD[ID_G].ids[ID_U].tempo = TEMPO_A
fs.writeFileSync("./DADOS DO YUTA/func/limitarcmd.json", JSON.stringify(Limit_CMD, null, 2));
}
}
}

yuta.sendImageAsSticker = async (jid, path, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
        if (options && (options.packname || options.author)) {
         buffer = await writeExifImg(buff, options)
            } else {
         buffer = await imageToWebp(buff)
        }
    await yuta.sendMessage(jid, { sticker: { url: buffer }, ...options})
    return buffer
}

yuta.sendInteractiveTXT = async(idChat, mainText = '', footerText = '', quotedMessage = {}, buttonsParams = {}) => {
    try {
        await yuta.relayMessage(idChat, {interactiveMessage: {body: {text: mainText}, footer: {text: footerText}, contextInfo: quotedMessage, nativeFlowMessage: buttonsParams}}, {});
    } catch(errorMessage) {
        await reply(String(errorMessage));
    }
}

yuta.sendInteractiveIMG = async(imageDir, ChatID, definedText = '', footer = '', contextMessageInfo = {}, buttonsParams = {}) => {
    try {
        create = await prepareWAMessageMedia({image: fs.readFileSync(imageDir)}, {upload: yuta.waUploadToServer});
        imageCreate = create.imageMessage;
        await yuta.relayMessage(ChatID, {interactiveMessage: {header: {hasMediaAttachment: true, imageMessage: imageCreate}, headerType: 'IMAGE', body: {text: definedText}, footer: {text: footer}, contextInfo: contextMessageInfo, nativeFlowMessage: buttonsParams}}, {});
     } catch(errorMessage) {
         return reply(String(errorMessage));
    }
 }
 
 const getallcases = () => {
  findindex = fs.readFileSync("yuta.js").toString().match(/case\s+'(.+?)'/g)
  cstt = []
  for(i of findindex) {
    cstt.push(i.split(`'`)[1])
  }
  return cstt
}

const allCases = getallcases();

const getSimilarity = require(`./ARQUIVES/js/similaridade.js`)

const rmLetras = (txt) => {
  return txt.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

const similarityCmd = (txt) => {
  getsmlrt = getSimilarity(allCases, txt, prefix)
  if(rmLetras(getsmlrt.nome).includes(`${prefix}ᴍᴇɴᴜ`)) return [{comando: getsmlrt.nome, porcentagem: getsmlrt.porcentagem}]
  return [{comando: prefix+getsmlrt.nome, porcentagem: Number(getsmlrt.porcentagem).toFixed(1)}]
}

if(isModoIA) { 
if (body && body.toLowerCase().startsWith("yuta ")) {
try {
const pergunta = body.slice(5).trim()
let mentioned = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || []
let isQuotedImage = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage
let isQuotedVideo = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage
let isQuotedSticker = info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage

const response = await fetchJson(`${SITE}/api/ias/gpt?apitoken=${TOKEN}&query=${encodeURIComponent(`
Converta a frase em comando de bot.

Responda em JSON.

Formato:
{
"command": "play",
"args": ["nome","da","musica"],
"mention": true
}

Exemplos:

"toque uma musica chamada Faded"
{
"command":"play",
"args":["Faded"]
}

"feche o grupo"
{
"command":"grupo",
"args":["f"]
}

Frase: ${pergunta}
`)}`)
const data = JSON.parse(response.resultado.data[0].resposta)
if(!data.command) return reply("❌ Não consegui entender.")
let comandoIA = data.command
let argsIA = data.args || []
console.log(`[ EXECUTANDO: /${comandoIA} ${argsIA.join(" ")} ]`)
command = comandoIA
args = argsIA
q = args.join(" ")
if(data.mention && mentioned.length > 0){
info.message.extendedTextMessage.contextInfo.mentionedJid = mentioned
}
if(isQuotedImage) global.iaMedia = "image"
if(isQuotedVideo) global.iaMedia = "video"
if(isQuotedSticker) global.iaMedia = "sticker"

} catch (err) {
console.error(err)
reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.");
}
}
}

// ===== AUTOREPO COMPLETO =====
const AUTOREPO_DIR = './DADOS DO YUTA/data/autorepo'
const AUTOREPO_MEDIA_DIR = `${AUTOREPO_DIR}/media`

const ensureAutorepoStore = () => {
  if (!fs.existsSync(AUTOREPO_DIR)) fs.mkdirSync(AUTOREPO_DIR, { recursive: true })
  if (!fs.existsSync(AUTOREPO_MEDIA_DIR)) fs.mkdirSync(AUTOREPO_MEDIA_DIR, { recursive: true })
}

const getAutorepoJsonPath = (jid) => `${AUTOREPO_DIR}/${jid}.json`

const normalizeRepoKey = (txt = '') => {
  return rmLetras(String(txt || ''))
    .toLowerCase()
    .replace(/[^a-z0-9 ]/gi, ' ')
    .trim()
    .replace(/\s+/g, ' ')
}

const loadGroupAutorepo = (jid) => {
  try {
    ensureAutorepoStore()
    const p = getAutorepoJsonPath(jid)
    if (!fs.existsSync(p)) fs.writeFileSync(p, '[]\n')
    const raw = fs.readFileSync(p, 'utf8')
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const saveGroupAutorepo = (jid, arr) => {
  ensureAutorepoStore()
  fs.writeFileSync(getAutorepoJsonPath(jid), JSON.stringify(arr, null, 2) + '\n')
}

const getQuotedContext = () => {
  return (
    info?.message?.extendedTextMessage?.contextInfo ||
    info?.message?.imageMessage?.contextInfo ||
    info?.message?.videoMessage?.contextInfo ||
    info?.message?.documentMessage?.contextInfo ||
    info?.message?.audioMessage?.contextInfo ||
    info?.message?.stickerMessage?.contextInfo ||
    info?.message?.documentWithCaptionMessage?.message?.documentMessage?.contextInfo ||
    null
  )
}

const getQuotedMessageRepo = () => {
  const ctx = getQuotedContext()
  return ctx?.quotedMessage || null
}

const extractAnyTextRepo = (m) => {
  if (!m) return ''
  if (m.conversation) return m.conversation
  if (m.extendedTextMessage?.text) return m.extendedTextMessage.text
  if (m.imageMessage?.caption) return m.imageMessage.caption
  if (m.videoMessage?.caption) return m.videoMessage.caption
  if (m.documentMessage?.caption) return m.documentMessage.caption
  return ''
}

const getRepoExtFromMime = (mime = '', fallbackType = '') => {
  const m = String(mime || '').toLowerCase()

  if (fallbackType === 'sticker') return 'webp'
  if (fallbackType === 'audio') {
    if (m.includes('mpeg')) return 'mp3'
    if (m.includes('mp4') || m.includes('m4a')) return 'm4a'
    if (m.includes('ogg')) return 'ogg'
    if (m.includes('opus')) return 'opus'
    return 'ogg'
  }
  if (fallbackType === 'image') {
    if (m.includes('png')) return 'png'
    if (m.includes('webp')) return 'webp'
    return 'jpg'
  }
  if (fallbackType === 'video') {
    if (m.includes('quicktime')) return 'mov'
    if (m.includes('mkv')) return 'mkv'
    return 'mp4'
  }

  return 'bin'
}

const getRepoMimeByExt = (file = '', type = '') => {
  const lower = String(file || '').toLowerCase()

  if (type === 'audio') {
    if (lower.endsWith('.mp3')) return 'audio/mpeg'
    if (lower.endsWith('.m4a')) return 'audio/mp4'
    if (lower.endsWith('.ogg')) return 'audio/ogg'
    if (lower.endsWith('.opus')) return 'audio/ogg; codecs=opus'
    return 'audio/mpeg'
  }

  if (type === 'image') {
    if (lower.endsWith('.png')) return 'image/png'
    if (lower.endsWith('.webp')) return 'image/webp'
    return 'image/jpeg'
  }

  if (type === 'video') {
    if (lower.endsWith('.mov')) return 'video/quicktime'
    if (lower.endsWith('.mkv')) return 'video/x-matroska'
    return 'video/mp4'
  }

  if (type === 'sticker') return 'image/webp'
  return 'application/octet-stream'
}

const saveAutorepoMediaFile = async (jid, gatilho, tipo, quotedMsg) => {
  ensureAutorepoStore()

  let mediaObj = null
  let mediaType = null

  const img = quotedMsg?.imageMessage || quotedMsg?.viewOnceMessage?.message?.imageMessage || quotedMsg?.viewOnceMessageV2?.message?.imageMessage
  const vid = quotedMsg?.videoMessage || quotedMsg?.viewOnceMessage?.message?.videoMessage || quotedMsg?.viewOnceMessageV2?.message?.videoMessage
  const aud = quotedMsg?.audioMessage
  const stk = quotedMsg?.stickerMessage

  if (tipo === 'image') {
    if (!img) return null
    mediaObj = img
    mediaType = 'image'
  } else if (tipo === 'video') {
    if (!vid) return null
    mediaObj = vid
    mediaType = 'video'
  } else if (tipo === 'audio') {
    if (!aud) return null
    mediaObj = aud
    mediaType = 'audio'
  } else if (tipo === 'sticker') {
    if (!stk) return null
    mediaObj = stk
    mediaType = 'sticker'
  } else {
    return null
  }

  const buffer = await getFileBuffer(mediaObj, mediaType)
  if (!buffer || !Buffer.isBuffer(buffer)) return null

  const ext = getRepoExtFromMime(mediaObj?.mimetype, mediaType)
  const fileName = `${jid}_${Date.now()}_${Math.random().toString(16).slice(2)}_${gatilho.replace(/\s+/g, '_')}.${ext}`
  const fullPath = `${AUTOREPO_MEDIA_DIR}/${fileName}`

  fs.writeFileSync(fullPath, buffer)

  return {
    file: fileName,
    mimetype: mediaObj?.mimetype || getRepoMimeByExt(fileName, mediaType)
  }
}

const { registrarNoPrefix, removerNoPrefix, getComandoNoPrefix,registrarFigSticker, removerFigSticker, getComandoFig, listarFigStickers, listarNoPrefix } = require('./ARQUIVES/funcoes/command.js')

const Yutasticker = (Object.keys(info.message || {})[0] === "stickerMessage" && info.message?.stickerMessage?.fileSha256)
  ? info.message.stickerMessage.fileSha256.toString('base64')
  : ""

if (Yutasticker) {
  const comandoFig = getComandoFig(Yutasticker)

  if (comandoFig && typeof comandoFig === "string") {
    isCmd = true

    const realFull = String(comandoFig || "").trim()
    const realParts = realFull.split(/\s+/).filter(Boolean)

    const cmdReal = normNP(realParts[0] || "")
    const argsFixos = realParts.slice(1).join(" ")

    command = cmdReal

    const novoQFig = String(argsFixos || "").trim()

    q = novoQFig

    const novosArgs = novoQFig ? novoQFig.split(/\s+/).filter(Boolean) : []
    args.splice(0, args.length, ...novosArgs)
  }
}


function normNP(str) {
  return String(str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, " ")
    .trim()
}

if (!isCmd) {
  const bodyOriginalNP = String(budy2 || "")
  const bodyN = normNP(bodyOriginalNP)

  let hitNoPrefix = null
  let novoQ = null

  try {
    const listaNP = listarNoPrefix() || []

    const ordenada = listaNP
      .filter(x => x?.cmdSemPrefixo && x?.comandoOriginal)
      .map(x => {
        const g = normNP(x.cmdSemPrefixo)
        return {
          ...x,
          gatilhoN: g,
          palavras: g.split(" ").filter(Boolean).length,
          len: g.length
        }
      })
      .filter(x => x.gatilhoN)
      .sort((a, b) => {
        if (b.palavras !== a.palavras) return b.palavras - a.palavras
        return b.len - a.len
      })

    for (const item of ordenada) {
      const g = item.gatilhoN
      if (!g) continue

      if (g.length === 1) {
  if (bodyN === g || bodyN.startsWith(g + " ")) {
    hitNoPrefix = item
    break
  }
  continue
}

      if (bodyN === g || bodyN.startsWith(g + " ")) {
        hitNoPrefix = item
        break
      }
    }
  } catch {}

  if (hitNoPrefix && hitNoPrefix.comandoOriginal) {
    isCmd = true

    const realFull = String(hitNoPrefix.comandoOriginal || "").trim()
    const realParts = realFull.split(/\s+/).filter(Boolean)

    const cmdReal = normNP(realParts[0] || "")
    const argsFixos = realParts.slice(1).join(" ")

    command = cmdReal

    const gLen = normNP(hitNoPrefix.cmdSemPrefixo).length
    const restoUser = bodyN.slice(gLen).trim()

    novoQ = [argsFixos, restoUser].filter(Boolean).join(" ").trim()

    q = novoQ

    const novosArgs = novoQ ? novoQ.split(/\s+/).filter(Boolean) : []
    args.splice(0, args.length, ...novosArgs)
  }
}
//======================================\\
if (!global.menuAzAtivos) global.menuAzAtivos = {};

if (!isCmd && global.menuAzAtivos[sender]) {
    const escolha = (body || '').trim();

    if (escolha === '0') {
        delete global.menuAzAtivos[sender];
        return reply(`*ᴏᴋ ꜱᴇɴʜᴏʀ(ᴀ), ᴄᴀꜱᴏ ǫᴜᴇɪʀᴀ ꜱᴀʙᴇʀ ꜱᴇ ᴏꜱ ᴄᴏᴍᴀɴᴅᴏꜱ ꜰᴏʀᴀᴍ ᴀᴛɪᴠᴏꜱ, ᴜꜱᴇ →『 ${prefix}status 』 ᴇ ᴏʟʜᴇ ᴀᴛᴇɴᴛᴀᴍᴇɴᴛᴇ ᴛᴏᴅᴀꜱ ᴀꜱ ᴏᴩᴄᴏᴇꜱ 🙇‍♂️*`);
    }

    const opcoes = {
        '1': { cmd: 'antiaudio' },
        '2': { cmd: 'antivideo' },
        '3': { cmd: 'antiimg' },
        '4': { cmd: 'autosticker' },

        '5': { cmd: 'bemvindo', arg: 'texto' },
        '6': { cmd: 'bemvindo', arg: 'foto' },
        '7': { cmd: 'bemvindo', arg: 'audio' },
        '8': { cmd: 'bemvindo', arg: 'video' },
        '9': { cmd: 'bemvindo', arg: 'sticker' },

        '10': { cmd: 'antilink' },
        '11': { cmd: 'antilinkgp' },
        '12': { cmd: 'antilinkeasy' },
        '13': { cmd: 'anticatalogo' },
        '14': { cmd: 'antistatus' },
        '15': { cmd: 'antifake' },
        '16': { cmd: 'anticontato' },
        '17': { cmd: 'antiloc' },
        '18': { cmd: 'antiddd' },
        '19': { cmd: 'so_adm' },
        '20': { cmd: 'x9adm' },
        '21': { cmd: 'autototext' },
        '22': { cmd: 'ativic' },
        '23': { cmd: 'autodl' },
        '24': { cmd: 'multiprefixo' },
        '25': { cmd: 'antinotas' },
        '26': { cmd: 'antipalavra' },
        '27': { cmd: 'antipalavrao' },
        '28': { cmd: 'modobn' },
        '29': { cmd: 'modocoins' }
    };

    if (opcoes[escolha]) {
        command = opcoes[escolha].cmd;
        args = opcoes[escolha].arg ? [opcoes[escolha].arg] : [];
        isCmd = true;
        prefix = '';
    }
}
//SISTEMA_PARCERIA_YUTA (INICIO) ===========================================\\

const PARCERIA_PATH = "./DADOS DO YUTA/func/parceria.json";

function parceriaLoad() {
  try {
    const raw = fs.readFileSync(PARCERIA_PATH);
    const db = JSON.parse(raw);
    return Array.isArray(db) ? db : [];
  } catch {
    return [];
  }
}

function parceriaSave(db) {
  try {
    fs.writeFileSync(PARCERIA_PATH, JSON.stringify(db, null, 2) + "\n");
  } catch {}
}

function parceriaGetGroup(db, from) {
  let idx = db.findIndex(x => x?.grupo === from);
  if (idx < 0) {
    db.push({ grupo: from, ativo: false, data: "", parceiros: {}, nparc: {} });
    idx = db.length - 1;
  }

  const gp = db[idx];
  if (!gp.parceiros || typeof gp.parceiros !== "object") gp.parceiros = {};
  if (!gp.nparc || typeof gp.nparc !== "object") gp.nparc = {};
  if (typeof gp.ativo !== "boolean") gp.ativo = false;
  if (typeof gp.data !== "string") gp.data = "";

  return gp;
}

function parceriaDailyReset(gp, dattofc) {
  const hoje = String(dattofc);
  if (String(gp.data || "") !== hoje) {
    gp.data = hoje;

    const parceiros = gp.parceiros || {};
    for (const jid of Object.keys(parceiros)) {
      if (!parceiros[jid] || typeof parceiros[jid] !== "object") continue;

      parceiros[jid].usados = 0;
      parceiros[jid].warnLimite = false;

      if (String(parceiros[jid].limitDay || "") !== hoje) {
        parceiros[jid].limitDay = "";
      }

      parceiros[jid].data = hoje;
    }

    const nparc = gp.nparc || {};
    for (const jid of Object.keys(nparc)) {
      if (!nparc[jid] || typeof nparc[jid] !== "object") continue;
      nparc[jid].warn1 = false;
      nparc[jid].data = hoje;
    }
  }
}

function parceriaGetContextInfo(info) {
  return (
    info?.message?.extendedTextMessage?.contextInfo ||
    info?.message?.imageMessage?.contextInfo ||
    info?.message?.videoMessage?.contextInfo ||
    info?.message?.documentMessage?.contextInfo ||
    info?.message?.stickerMessage?.contextInfo ||
    null
  );
}

function parceriaExtractText(info) {
  return (
    info?.message?.conversation ||
    info?.message?.extendedTextMessage?.text ||
    info?.message?.imageMessage?.caption ||
    info?.message?.videoMessage?.caption ||
    info?.message?.documentMessage?.caption ||
    info?.message?.reactionMessage?.text ||
    info?.message?.stickerMessage?.contextInfo?.quotedMessage?.conversation ||
    ""
  );
}

function parceriaToJid(alvo, groupMetadata) {
  if (!alvo) return null;
  try {
    let s = String(alvo);

    if (s.includes("@lid")) {
      try {
        const parts = groupMetadata?.participants || [];
        const membro = parts.find(v => v?.lid === s);
        if (membro?.jid) s = String(membro.jid);
        else if (membro?.id) s = String(membro.id);
        else {
          const num = s.split(":")[0].replace("@lid", "").replace(/\D/g, "");
          if (!num) return null;
          return num + "@s.whatsapp.net";
        }
      } catch {
        const num = s.split(":")[0].replace("@lid", "").replace(/\D/g, "");
        if (!num) return null;
        return num + "@s.whatsapp.net";
      }
    }

    if (s.includes(":")) s = s.split(":")[0];

    if (!s.includes("@")) {
      const num = s.replace(/\D/g, "");
      if (!num) return null;
      return num + "@s.whatsapp.net";
    }

    if (s.endsWith("@s.whatsapp.net")) return s;

    const num2 = s.replace(/\D/g, "");
    if (num2) return num2 + "@s.whatsapp.net";

    return s;
  } catch {
    return null;
  }
}

function parceriaHasLink(text) {
  const t = String(text || "").toLowerCase();
  if (!t) return false;

  const patterns = [
    /https?:\/\/\S+/i,
    /www\.\S+/i,
    /\bchat\.whatsapp\.com\/\S+/i,
    /\bwa\.me\/\S+/i,
    /\bt\.me\/\S+/i,
    /\bdiscord\.gg\/\S+/i,
    /\bbit\.ly\/\S+/i,
    /\binstagram\.com\/\S+/i,
    /\byoutube\.com\/\S+/i,
    /\byoutu\.be\/\S+/i
  ];

  return patterns.some(r => r.test(t));
}

async function parceriaDeleteMsg(yuta, from, info) {
  try {
    if (info?.key) await yuta.sendMessage(from, { delete: info.key }).catch(() => {});
  } catch {}
}

async function parceriaRemoveUser(yuta, from, jid) {
  try {
    await yuta.groupParticipantsUpdate(from, [jid], "remove").catch(() => {});
  } catch {}
}

function parceriaDedupParceirosObj(obj) {
  if (!obj || typeof obj !== "object") return {};
  const novo = {};
  for (const k of Object.keys(obj)) {
    const jid = String(k);
    if (!novo[jid]) novo[jid] = obj[k];
  }
  return novo;
}

function parceriaIsAdminByList(senderJid, groupAdmins) {
  try {
    if (!senderJid) return false;
    if (!Array.isArray(groupAdmins)) return false;
    return groupAdmins.includes(String(senderJid));
  } catch {
    return false;
  }
}

function parceriaDropUserFromDb(gp, jid) {
  try {
    if (gp?.parceiros && typeof gp.parceiros === "object") {
      if (gp.parceiros[jid]) delete gp.parceiros[jid];
    }
    if (gp?.nparc && typeof gp.nparc === "object") {
      if (gp.nparc[jid]) delete gp.nparc[jid];
    }
  } catch {}
}

function parceriaMsgAmanha(dattofc) {
  return `amanhã`;
}

async function parceriaHandleLink(
  yuta,
  info,
  from,
  sender,
  dattofc,
  isBotGroupAdmins,
  groupMetadata,
  groupAdmins
) {
  const text = parceriaExtractText(info);
  if (!parceriaHasLink(text)) return;

  const db = parceriaLoad();
  const gp = parceriaGetGroup(db, from);

  gp.parceiros = parceriaDedupParceirosObj(gp.parceiros);
  gp.nparc = parceriaDedupParceirosObj(gp.nparc);

  parceriaDailyReset(gp, dattofc);

  if (!gp.ativo) {
    parceriaSave(db);
    return;
  }

  const senderJid = parceriaToJid(sender, groupMetadata);
  if (!senderJid) {
    parceriaSave(db);
    return;
  }

  if (parceriaIsAdminByList(senderJid, groupAdmins)) {
    parceriaSave(db);
    return;
  }

  const parceiros = gp.parceiros || {};
  const p = parceiros[senderJid] || null;

  if (!p) {
    if (!gp.nparc[senderJid]) gp.nparc[senderJid] = { data: String(dattofc), warn1: false };

    if (String(gp.nparc[senderJid].data || "") !== String(dattofc)) {
      gp.nparc[senderJid].data = String(dattofc);
      gp.nparc[senderJid].warn1 = false;
    }

    if (!gp.nparc[senderJid].warn1) {
      gp.nparc[senderJid].warn1 = true;
      parceriaSave(db);

      await yuta.sendMessage(from, {
  text:
`*ᴠᴏᴄᴇ ɴᴀᴏ ғᴀᴢ ᴘᴀʀᴛᴇ ᴅᴀ ᴘᴀʀᴄᴇʀɪᴀ 🙅‍♂️*\n\n` +
`• @${senderJid.split("@")[0]}\n` +
`*sᴇ ᴠᴏᴄᴇ ᴅɪᴠᴜʟɢᴀʀ ɴᴏᴠᴀᴍᴇɴᴛᴇ, sᴇʀᴀ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴏ ɢʀᴜᴘᴏ 🤷‍♂️*`,
  mentions: [senderJid]
}, { quoted: selo }).catch(() => {});
      return;
    }

    await parceriaDeleteMsg(yuta, from, info);

    if (isBotGroupAdmins) {
      parceriaDropUserFromDb(gp, senderJid);
      parceriaSave(db);
      await parceriaRemoveUser(yuta, from, senderJid);
      return;
    }

    parceriaSave(db);
    return;
  }

  const limite = Math.max(0, Number(p.limite || 0));
  const usados = Math.max(0, Number(p.usados || 0));

  if (limite <= 0) {
    await parceriaDeleteMsg(yuta, from, info);

    if (isBotGroupAdmins) {
      parceriaDropUserFromDb(gp, senderJid);
      parceriaSave(db);
      await parceriaRemoveUser(yuta, from, senderJid);
      return;
    }

    parceriaSave(db);
    return;
  }

  if (String(p.limitDay || "") === String(dattofc) && p.warnLimite) {
    await parceriaDeleteMsg(yuta, from, info);

    if (isBotGroupAdmins) {
      parceriaDropUserFromDb(gp, senderJid);
      parceriaSave(db);
      await parceriaRemoveUser(yuta, from, senderJid);
      return;
    }

    parceriaSave(db);
    return;
  }

  if (usados >= limite && String(p.limitDay || "") !== String(dattofc)) {
    p.warnLimite = true;
    p.limitDay = String(dattofc);
    p.data = String(dattofc);
    parceiros[senderJid] = p;
    gp.parceiros = parceiros;
    parceriaSave(db);

    await yuta.sendMessage(from, {
  text:
`*sᴇᴜ ʟɪᴍɪᴛᴇ ᴅᴇ ᴅɪᴠᴜʟɢᴀᴄᴀᴏ ғᴏɪ ᴀᴛɪɴɢɪᴅᴏ 🙅‍♂️*\n\n` +
`• @${senderJid.split("@")[0]}\n` +
`*ᴠᴏᴄᴇ ᴘᴏᴅᴇʀᴀ ᴠᴏʟᴛᴀʀ ᴀ ᴅɪᴠᴜʟɢᴀʀ ${parceriaMsgAmanha(dattofc)} 🙇‍♂️*\n` +
`*sᴇ ᴅɪᴠᴜʟɢᴀʀ ɴᴏᴠᴀᴍᴇɴᴛᴇ ʜᴏᴊᴇ, sᴇʀᴀ ʀᴇᴍᴏᴠɪᴅᴏ 🤷‍♂️*`,
  mentions: [senderJid]
}, { quoted: selo }).catch(() => {});
    return;
  }

  p.usados = usados + 1;
  p.data = String(dattofc);

  const rest = Math.max(0, limite - p.usados);

  if (rest === 0) {
    p.warnLimite = true;
    p.limitDay = String(dattofc);
    parceiros[senderJid] = p;
    gp.parceiros = parceiros;
    parceriaSave(db);

    await yuta.sendMessage(from, {
  text:
`*ᴅɪᴠᴜʟɢᴀᴄᴀᴏ ʀᴇɢɪsᴛʀᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*\n\n` +
`• @${senderJid.split("@")[0]}\n` +
`*sᴇᴜ ʟɪᴍɪᴛᴇ ᴅᴇ ᴅɪᴠᴜʟɢᴀᴄᴀᴏ ғᴏɪ ᴀᴛɪɴɢɪᴅᴏ*\n` +
`*ᴠᴏᴄᴇ ᴘᴏᴅᴇʀᴀ ᴠᴏʟᴛᴀʀ ᴀ ᴅɪᴠᴜʟɢᴀʀ ${parceriaMsgAmanha(dattofc)} 🙇‍♂️*\n` +
`*sᴇ ᴅɪᴠᴜʟɢᴀʀ ɴᴏᴠᴀᴍᴇɴᴛᴇ ʜᴏᴊᴇ, sᴇʀᴀ ʀᴇᴍᴏᴠɪᴅᴏ 🤷‍♂️*`,
  mentions: [senderJid]
}, { quoted: selo }).catch(() => {});
    return;
  }

  p.warnLimite = false;
  p.limitDay = "";
  parceiros[senderJid] = p;
  gp.parceiros = parceiros;
  parceriaSave(db);

  await yuta.sendMessage(from, {
  text:
`*ᴅɪᴠᴜʟɢᴀᴄᴀᴏ ʀᴇɢɪsᴛʀᴀᴅᴀ 🙇‍♂️*\n\n` +
`• @${senderJid.split("@")[0]}\n` +
`*ᴠᴏᴄᴇ ᴀɪɴᴅᴀ ᴘᴏssᴜɪ ${rest} ᴅɪᴠᴜʟɢᴀᴄᴏᴇs ʜᴏᴊᴇ 🤷‍♂️*`,
  mentions: [senderJid]
}, { quoted: selo }).catch(() => {});
}
//CHAMADA_SISTEMA_PARCERIA_YUTA ===================================\\
try {
  await parceriaHandleLink(
    yuta,
    info,
    from,
    sender,
    dattofc,
    isBotGroupAdmins,
    groupMetadata,
    groupAdmins
  );
} catch (e) {
  console.log(e);
}

//EVAL CMD KK
if (budy.startsWith('<')) {
try {
if (info.key.fromMe) return;
if (!SoDono && !isnit && !issupre && !ischyt) return;
console.log('[', colors.cyan('EVAL'), ']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(q));
let res = JSON.stringify(eval(q.slice(1)), null, '\t');
return reply(res);
} catch (e) {
return reply(String(e));
}
}
if (budy2.startsWith('(>')) {
try {
if (info.key.fromMe) return;
if (!isnit && !issupre && !ischyt) return;
var konsol = q.slice(3);
Return = (sul) => {
    var sat = JSON.stringify(sul, null, 2);
    var bang = sat === undefined ? util.format(sul) : util.format(sat);
    return reply(bang);
};
reply(util.format(eval(`;(async () => { ${konsol} })()`)));
} catch (e) {
reply(String(e));
}
}
if (budy.startsWith('$')) {
    if (info.key.fromMe) return;
    if (!SoDono && !isnit && !issupre && !ischyt) return;
    const comando = q.slice(1).trim();
    exec(comando, (err, stdout, stderr) => {
        if (err) return reply(String(err));
        if (stderr) return reply(String(stderr));
        if (stdout) return reply(String(stdout));
        reply(`*ᴏ ᴄᴏᴍᴀɴᴅᴏ → 「 ${comando} 」 ꜰᴏɪ ᴇxᴇᴄᴜᴛᴀᴅᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ ꜱᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`);
    });
}
//FIM

// Selecionar nick pelo número
if (/^\d+$/.test(body) && ultimosNicks[sender]) {
  const lista = ultimosNicks[sender]
  const index = Number(body) - 1
  if (!lista[index]) {
    reply("❌ Número inválido.")
  } else {
    reply(`${lista[index]}`)
  }
  delete ultimosNicks[sender]
  return
}
///////////////////////ÍNICIO DE TUDO\\\\\\\\\\\\\\\\\\\
switch(command) {
//=============[ SYSTEM FIGURINHA ]===========\\

case 'rgfig': {
  try {
    if (!SoDono) return reply(mess.onlyOwner())

    if (!info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage)
      return reply('*ᴍᴇɴᴄɪᴏɴᴇ ᴜᴍᴀ ꜰɪɢᴜʀɪɴʜᴀ 💁‍♂️*')

    if (!q) return reply('*ɪɴꜰᴏʀᴍᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ǫᴜᴇ ᴅᴇꜱᴇᴊᴀ ᴀꜱꜱᴏᴄɪᴀʀ 🙇‍♂️*')

    const texto = q.trim()
    let comandoFinal = ""

    if (texto.includes("|")) {
      const partes = texto.split("|").map(x => x.trim()).filter(Boolean)
      comandoFinal = partes.join(" ")
    } else if (texto.includes("/")) {
      const partes = texto.split("/").map(x => x.trim()).filter(Boolean)
      comandoFinal = partes.join(" ")
    } else {
      comandoFinal = texto
    }

    comandoFinal = comandoFinal.replace(/\s+/g, " ").trim().toLowerCase()

    const idSticker =
      info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')

    await registrarFigSticker(idSticker, comandoFinal)

    reply(
      `*ᴄᴇʀᴛᴏ ᴍᴇꜱᴛʀᴇ! ᴀᴄᴀʙᴇɪ ᴅᴇ ᴀᴅɪᴄɪᴏɴᴀʀ ᴇꜱꜱᴇ ᴄᴏᴍᴀɴᴅᴏ ᴇᴍ ᴍᴇᴜ ʙᴀɴᴄᴏ ᴅᴇ ᴅᴀᴅᴏꜱ 💁‍♂️*\n\n` +
      `- *🕊️ | ᴄᴏᴍᴀɴᴅᴏ:* ${comandoFinal}\n` +
      `- *✨ | ɪᴅ:* ${idSticker}`
    )
  } catch (e) {
    console.log(e)
    reply(mess.error())
  }
}
break
case 'delfig': {
    if (!SoDono) return reply(mess.onlyOwner());
    if (!info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.stickerMessage)
        return reply('*ᴍᴇɴᴄɪᴏɴᴇ ᴜᴍᴀ ꜰɪɢᴜʀɪɴʜᴀ 💁‍♂️*');
    const buffer = await getFileBuffer(
        info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage,
        'sticker'
    );
    const idSticker = info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64');
    const sucesso = removerFigSticker(idSticker);
    if (sucesso) {
        reply('*ꜰɪɢᴜʀɪɴʜᴀ ʀᴇᴍᴏᴠɪᴅᴀ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ 💁‍♂️*');
    } else {
        reply('*ᴇꜱꜱᴀ ꜰɪɢᴜʀɪɴʜᴀ ɴᴀ̃ᴏ ᴇꜱᴛᴀ́ ʀᴇɢɪꜱᴛʀᴀᴅᴀ 🙇‍♂️*');
    }
}
break;

case 'listafig': {
    if (!SoDono) return reply(mess.onlyOwner());
    const lista = listarFigStickers();
    if (!lista.length) return reply('*ɴᴇɴʜᴜᴍᴀ ꜰɪɢᴜʀɪɴʜᴀ ᴇꜱᴛᴀ́ ʀᴇɢɪꜱᴛʀᴀᴅᴀ 💁‍♂️*');
    let msg = '- ──────❲ ʟɪꜱᴛᴀ ᴅᴇ ꜰɪɢᴜʀɪɴʜᴀꜱ ❳──────╮\n━━━━━━━━━━━━━━━━━━━━\n';    
    lista.forEach((item, index) => {
        msg += `🌟 | ᴄᴏᴍᴀɴᴅᴏ: *${item.comando}*\n`;
        msg += `🆔 | ɪᴅ: *${item.id}*\n`;
        msg += '━━━━━━━━━━━━━━━━━━━━\n';
    });
    msg += `- ──────❲ ʟɪꜱᴛᴀ ᴅᴇ ꜰɪɢᴜʀɪɴʜᴀꜱ ❳──────╯\n> *${NomeDoBot}*`;
    reply(msg);
}
break;
//=============[ FIM DO COMANDO DE REGISTRO DE FIGURINHAS ]===========\\

//=============[ SYSTEM NO PREFIX ]===========\\

case 'rgcmd': {
  try {
    if (!SoDono) return reply(mess.onlyOwner())
    if (!q) return reply('*ᴜꜱᴇ: rgcmd [ɢᴀᴛɪʟʜᴏ] | [ᴄᴏᴍᴀɴᴅᴏ ʀᴇᴀʟ] 🙅‍♂️*')

    const texto = q.trim()

    let semPrefixo = ''
    let comandoReal = ''

    if (texto.includes('|')) {
      const partes = texto.split('|').map(x => x.trim()).filter(Boolean)
      semPrefixo = partes[0] || ''
      comandoReal = partes.slice(1).join(' ') || ''
    } 
    else if (texto.includes('/')) {
      const partes = texto.split('/').map(x => x.trim()).filter(Boolean)
      semPrefixo = partes[0] || ''
      comandoReal = partes.slice(1).join(' ') || ''
    } 
    else {
      const partes = texto.split(/\s+/)
      semPrefixo = partes.shift() || ''
      comandoReal = partes.join(' ')
    }

    if (!semPrefixo || !comandoReal)
      return reply('*ᴜꜱᴇ: rgcmd [ɢᴀᴛɪʟʜᴏ] | [ᴄᴏᴍᴀɴᴅᴏ ʀᴇᴀʟ] 🙅‍♂️*')

    semPrefixo = semPrefixo.replace(/\s+/g, ' ').trim()
    comandoReal = comandoReal.replace(/\s+/g, ' ').trim()    

    registrarNoPrefix(
      semPrefixo.toLowerCase(),
      comandoReal.toLowerCase()
    )

    reply(
      `*ʀᴇɢɪꜱᴛʀᴇɪ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ 💁‍♂️*\n\n` +
      `- *🗿 | ꜱᴇᴍ ᴘʀᴇꜰɪxᴏ:* ${semPrefixo}\n` +
      `- *⚙️ | ᴄᴏᴍᴀɴᴅᴏ ʀᴇᴀʟ:* ${comandoReal}`
    )

  } catch (e) {
    console.log(e)
    reply(mess.error())
  }
}
break

case 'delcmd': {
  if (!SoDono) return reply(mess.onlyOwner())
  if (!q) return reply('*ɪɴꜰᴏʀᴍᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ꜱᴇᴍ ᴘʀᴇꜰɪxᴏ ǫᴜᴇ ᴅᴇꜱᴇᴊᴀ ʀᴇᴍᴏᴠᴇʀ 🙇‍♂️*')

  const sucesso = removerNoPrefix(q.toLowerCase())
  if (sucesso) {
    reply('*ᴄᴏᴍᴀɴᴅᴏ ʀᴇᴍᴏᴠɪᴅᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ 💁‍♂️*')
  } else {
    reply('*ᴇꜱꜱᴇ ᴄᴏᴍᴀɴᴅᴏ ɴᴀ̃ᴏ ᴇꜱᴛᴀ́ ʀᴇɢɪꜱᴛʀᴀᴅᴏ 🙇‍♂️*')
  }
}
break

case 'noprefix': {
  try {
    const lista = listarNoPrefix();
    if (!lista.length)
      return reply('*ɴᴀ̃ᴏ ʜᴀ ᴄᴏᴍᴀɴᴅᴏꜱ ꜱᴇᴍ ᴘʀᴇꜰɪxᴏ ʀᴇɢɪꜱᴛʀᴀᴅᴏꜱ 💁‍♂️*');    
    await reagir(from, "🗿");    
    let msg = '╭⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐\n';
    lista.forEach((item) => {
      msg += `╎♱˖ ▸ ꜱᴇᴍ ᴘʀᴇꜰɪxᴏ\n╎↳ *${item.cmdSemPrefixo}*\n`;
      msg += `╎♱˖ ▸ ᴄᴏᴍᴀɴᴅᴏ ʀᴇᴀʟ\n╎↳ *${prefix + item.comandoOriginal}*\n`;
    });
    msg += `╰⊱ ───── ⋆⋅ ♰ ⋅⋆ ───── ⊰˖°🦇ִ ࣪𖤐\n- ${NomeDoBot}\n- 𖤐𖤐𖤐𖤐𖤐`;
    const vidNoPrefix = 'https://files.catbox.moe/d761yz.mp4';
    await yuta.sendMessage(from, {
      video: { url: vidNoPrefix },
      caption: msg,
      gifPlayback: true,
      contextInfo: { ...NkChannelKk }
    }, { quoted: selo });
  } catch (e) {
    console.error(e);
    await yuta.sendMessage(from, { text: mess.error() }, { quoted: selo });
  }
}
break;

//=============[ FIM DO COMANDO DE REGISTRO NO PREFIX  ]===========\\

//=============[ SYSTEM ALUGUEL ]===========\\

case 'modoaluguel':
try {
if(!SoDono) return reply(mess.onlyOwner())

	if (!nescessario.aluguel) {

		nescessario.aluguel = true;

		fs.writeFileSync(`./DADOS DO YUTA/INFO_YUTA/media/nescessario.json`, JSON.stringify(nescessario, null, 2) + "\n");

		reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`)
	} else if (nescessario.aluguel) {

		nescessario.aluguel = false

		fs.writeFileSync(`./DADOS DO YUTA/INFO_YUTA/media/nescessario.json`, JSON.stringify(nescessario, null, 2) + "\n");

		reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*`)
	}
} catch (e) {
	console.error(e);
	reply("Houve um erro no comando!");
}
break;

case 'removeraluguel':
case 'removealuguel':
case 'rm_aluguel': {
  if (!isModoAluguel) return reply(`*ᴏ ᴍᴏᴅᴏ ᴀʟᴜɢᴜᴇʟ ᴇsᴛᴀ́ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.* 🙅‍♂️`)
  if (!SoDono) return reply(mess.onlyOwner())
  if (args[0]) {
    const index = parseInt(args[0]) - 1
    if (isNaN(index) || index < 0 || index >= gruposAutorizados.length)
      return reply(`*ᴜsᴇ: *rm_aluguel 1*`)
    const alvo = gruposAutorizados[index]
    desativarAluguelGrupo(alvo.id)
    gruposAutorizados.splice(index, 1)
    return reply(`*✅ ᴀʟᴜɢᴜᴇʟ ᴅᴏ ɢʀᴜᴩᴏ ʀᴇᴍᴏᴠɪᴅᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ ꜱᴇɴʜᴏʀ(ᴀ)*`)
  }
  if (!isGroup) return reply(mess.onlyGroup())
  const grupo = gruposAutorizados.find(g => g.id === from)
  if (!grupo) return reply(`*ᴇssᴇ ɢʀᴜᴘᴏ ɴᴀ̃ᴏ ᴇsᴛᴀ́ ᴀʟᴜɢᴀᴅᴏ. 🤷‍♂️*`)
  desativarAluguelGrupo(from)
  gruposAutorizados = gruposAutorizados.filter(g => g.id !== from)

  reply(`*✅ ᴀʟᴜɢᴜᴇʟ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴇsᴛᴇ ɢʀᴜᴘᴏ.* 🔓🤷‍♂️`)
}
break

case 'lista_aluguel': {
  if (!isModoAluguel) return reply(`*ᴏ ᴍᴏᴅᴏ ᴀʟᴜɢᴜᴇʟ ᴇsᴛᴀ́ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.* 🙅‍♂️`)
  if (gruposAutorizados.length === 0) return reply(`*ɴᴇɴʜᴜᴍ ɢʀᴜᴘᴏ ᴇsᴛᴀ́ ᴀʟᴜɢᴀᴅᴏ ɴᴏ ᴍᴏᴍᴇɴᴛᴏ.* 🙇‍♂️`)
  let texto = `╭─❉ *𝐆𝐑𝐔𝐏𝐎𝐒 𝐂𝐎𝐌 𝐀𝐋𝐔𝐆𝐔𝐄𝐋 𝐀𝐓𝐈𝐕𝐎*\n\n`
  for (let i = 0; i < gruposAutorizados.length; i++) {
    const g = gruposAutorizados[i]
    try {
      const meta = await yuta.groupMetadata(g.id)
      const nome = meta.subject || '🕯️ ɢʀᴜᴘᴏ sᴇᴍ ɴᴏᴍᴇ'
      const membros = meta.participants.length || 0
      const inviteCode = await yuta.groupInviteCode(g.id).catch(() => null)
      const link = inviteCode ? `https://chat.whatsapp.com/${inviteCode}` : '🔒 ʟɪɴᴋ ɪɴᴅɪsᴘᴏɴíᴠᴇʟ'
      const expira = new Date(g.expiraEm)
      const agora = new Date()
      const restante = expira - agora
      const dias = Math.floor(restante / (1000 * 60 * 60 * 24))
      const horas = Math.floor((restante / (1000 * 60 * 60)) % 24)
      const minutos = Math.floor((restante / (1000 * 60)) % 60)
      texto +=`• *${i + 1}.* ✨ *${nome}*\n• 🔗 ʟɪɴᴋ: ${link}\n• 👤 ᴍᴇᴍʙʀᴏs: ${membros}\n• ⏳ ᴛᴇᴍᴘᴏ ʀᴇsᴛᴀɴᴛᴇ: ${dias}d ${horas}h ${minutos}m\n─────────────────────────────\n`
    } catch {
      texto +=
        `*${i + 1}.* 💀 ɴᴀ̃ᴏ ᴄᴏɴsᴇɢᴜɪ ᴘᴇɢᴀʀ ᴅᴀᴅᴏs ᴅᴏ ɢʀᴜᴘᴏ\n🆔 ID: ${g.id}\n─────────────────────────────\n`
    }
  }
  reply(texto.trim())
}
break


case 'veraluguel':
case 'ver_aluguel': {
  if (!isGroup) return reply(mess.onlyGroup())
if (!isModoAluguel) return reply(`*ᴏ ᴍᴏᴅᴏ ᴀʟᴜɢᴜᴇʟ ᴇsᴛᴀ́ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.* 🙅‍♂️`)
  const grupo = gruposAutorizados.find(g => g.id === from)
  if (!grupo) return reply('*ᴇsᴛᴇ ɢʀᴜᴘᴏ ɴᴀ̃ᴏ ᴘᴏssᴜɪ ᴀʟᴜɢᴜᴇʟ ᴀᴛɪᴠᴏ. 🤷‍♂️*')
  const agora = new Date()
  const expira = new Date(grupo.expiraEm)
  if (isNaN(expira)) return reply('*ᴇʀʀᴏ ᴀᴏ ʟᴇʀ ᴀ ᴅᴀᴛᴀ ᴅᴏ ᴀʟᴜɢᴜᴇʟ. 💁‍♂️*')
  if (agora > expira) {
    desativarAluguelGrupo(from)
    return reply('*ᴏ ᴀʟᴜɢᴜᴇʟ ᴅᴇsᴛᴇ ɢʀᴜᴘᴏ ᴇxᴘɪʀᴏᴜ. 🤷‍♂️*')
  }
  const diff = expira - agora
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24))
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const min = Math.floor((diff / (1000 * 60)) % 60)
  const dataFormada = expira.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
  reply(mess.veraluguel(dataFormada, dias, horas, min))
}
break

case 'rg_aluguel':
case 'aluguel': {
if (!isModoAluguel) return reply(`*ᴏ ᴍᴏᴅᴏ ᴀʟᴜɢᴜᴇʟ ᴇsᴛᴀ́ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.* 🙅‍♂️`)
  if (!isGroup) return reply(mess.onlyGroup())
  if (!SoDono) return reply(mess.onlyOwner())
  if (!args[0]) return reply(`*ᴅɪɢɪᴛᴇ ᴏ ᴛᴇᴍᴘᴏ ᴅᴇ ᴀʟᴜɢᴜᴇʟ ᴇᴍ ᴅɪᴀs. ᴇx: ${prefix}ᴀʟᴜɢᴜᴇʟ 2 4 (2 ᴅɪᴀs ᴇ 4 ʜᴏʀᴀs)* ⚠️🙆‍♂️`)
  const dias = parseInt(args[0]) || 0
  const horas = parseInt(args[1]) || 0
  ativarAluguelGrupo(from, dias, horas)
  const agora = new Date()
  const expira = new Date(agora.getTime() + (dias * 24 + horas) * 60 * 60 * 1000)
  const dataFormatada = expira.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
  reply(mess.rgaluguel(dataFormatada))
}
break

//=================[ FIM DO ALUGUEL ]==============\\

//=============[ CMD DONO/ADM'S ]==============\\

case 'fechargp':
case 'fechamento': {
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

    try {
        let barra = q.trim();
        if (!barra.includes(':')) return reply('*ꜰᴏʀᴍᴀᴛᴏ ɪɴᴠᴀ́ʟɪᴅᴏ, ᴜꜱᴇ ʜʜ:ᴍᴍ* ❌');
        
        let [horas, minutos] = barra.split(':');
        if (!horas || !minutos) return reply('*ʜᴏʀᴀʀɪᴏ ɪɴᴄᴏᴍᴘʟᴇᴛᴏ, ᴜꜱᴇ ʜʜ:ᴍᴍ* ⚠️');
        if (isNaN(horas) || isNaN(minutos)) return reply('*ᴜꜱᴇ ᴀᴘᴇɴᴀꜱ ɴᴜ́ᴍᴇʀᴏꜱ ɴᴏ ʜᴏʀᴀʀɪᴏ* 🔢');
        
        horas = horas.padStart(2, '0');
        minutos = minutos.padStart(2, '0');

        if (parseInt(horas) > 23 || parseInt(minutos) > 59) return reply('*ʜᴏʀᴀ́ʀɪᴏ ɪɴᴠᴀ́ʟɪᴅᴏ* ❌');

        let horarioFinal = `${horas}:${minutos}:00`;
        definirFechamento(from, horarioFinal);

        await reply(`*🔒 ᴏ ɢʀᴜᴘᴏ ꜱᴇʀᴀ́ ꜰᴇᴄʜᴀᴅᴏ àꜱ ${horarioFinal}* ⏳\n-\n*ꜱᴇᴊᴀᴍ ʙᴇᴍ-ᴠɪɴᴅᴏꜱ ᴀᴏ ᴄᴀᴏꜱ ᴏʀɢᴀɴɪᴢᴀᴅᴏ ᴘᴏʀ ᴍɪᴍ...* 💁‍♂️`);
        
    } catch (e) {
        console.error('erro ao definir fechamento:', e);
        reply('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴅᴇꜰɪɴɪʀ ᴏ ʜᴏʀᴀʀɪᴏ ᴅᴇ ꜰᴇᴄʜᴀᴍᴇɴᴛᴏ* ❌');
    }
}
break;

case 'abrirgp':
case 'abertura': {
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

    try {
        let barra = q.trim();
        if (!barra.includes(':')) return reply('*ꜰᴏʀᴍᴀᴛᴏ ɪɴᴠᴀ́ʟɪᴅᴏ, ᴜꜱᴇ ʜʜ:ᴍᴍ* ❌');
        
        let [horas, minutos] = barra.split(':');
        if (!horas || !minutos) return reply('*ʜᴏʀᴀʀɪᴏ ɪɴᴄᴏᴍᴘʟᴇᴛᴏ, ᴜꜱᴇ ʜʜ:ᴍᴍ* ⚠️');
        if (isNaN(horas) || isNaN(minutos)) return reply('*ᴜꜱᴇ ᴀᴘᴇɴᴀꜱ ɴᴜ́ᴍᴇʀᴏꜱ ɴᴏ ʜᴏʀᴀʀɪᴏ* 🔢');

        horas = horas.padStart(2, '0');
        minutos = minutos.padStart(2, '0');

        if (parseInt(horas) > 23 || parseInt(minutos) > 59) return reply('*ʜᴏʀᴀ́ʀɪᴏ ɪɴᴠᴀ́ʟɪᴅᴏ* ❌');

        let horarioFinal = `${horas}:${minutos}:00`;
        definirAbertura(from, horarioFinal);

        reply(`*🔓 ᴏ ɢʀᴜᴘᴏ ᴠᴀɪ ᴀʙʀɪʀ àꜱ ${horarioFinal}* ⏰\n-\n*ꜱᴇᴊᴀᴍ ʙᴇᴍ-ᴠɪɴᴅᴏꜱ ᴀᴏ ᴄᴀᴏꜱ ᴏʀɢᴀɴɪᴢᴀᴅᴏ ᴘᴏʀ ᴍɪᴍ...* 💁‍♂️`);
        
    } catch (e) {
        console.error('erro ao definir abertura:', e);
        reply('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴅᴇꜰɪɴɪʀ ᴏ ʜᴏʀᴀʀɪᴏ ᴅᴇ ᴀʙᴇʀᴛᴜʀᴀ* ❌');
    }
}
break;

case 'rmhorario':
case 'remover_horario':
case 'removerhorario': {
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

    try {
        if (!horarios[from]) return reply('*ɴᴀ̃ᴏ ʜᴀ́ ʜᴏʀᴀ́ʀɪᴏꜱ ᴘʀᴏɢʀᴀᴍᴀᴅᴏꜱ ᴘᴀʀᴀ ᴇꜱᴛᴇ ɢʀᴜᴘᴏ* ❌');
        removerHorarios(from);
        reply('*ʜᴏʀᴀ́ʀɪᴏꜱ ʀᴇᴍᴏᴠɪᴅᴏꜱ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ* 🙆‍♂️');
    } catch (e) {
        console.error('erro ao remover horario:', e);
        reply('*ɴᴀ̃ᴏ ꜰᴏɪ ᴘᴏꜱꜱɪ́ᴠᴇʟ ʀᴇᴍᴏᴠᴇʀ ᴏꜱ ʜᴏʀᴀ́ʀɪᴏꜱ* ❌');
    }
}
break;

case 'ngl':
case 'sendngl': // Nk Petrøv 
  try {
    if (!q.includes("|")) {
      return reply(`*ᴜꜱᴀ ᴀꜱꜱɪᴍ: ${prefix}ɴɢʟ ʟɪɴᴋ | ᴍᴇɴꜱᴀɢᴇᴍ | ǫᴜᴀɴᴛɪᴅᴀᴅᴇ* 🙇‍♂️`)
    }
    let partes = q.split("|").map(x => x.trim()) // Nk Petrøv 
    if (partes.length < 3) {
      return reply(`*ꜱᴇ ᴠᴏᴄᴇ ɴᴀᴏ ᴘᴀꜱꜱᴀʀ ᴏꜱ ᴛʀᴇꜱ ᴅᴀᴅᴏꜱ, ɴᴀᴏ ᴛᴇᴍ ᴍᴀɢɪᴀ ɴᴀᴏ...* 🤷‍♂️`)
    }
    let [link, mensagem, quantidade] = partes
    if (!link.includes("ngl.link")) return reply(`*ᴇɪ, ɪꜱꜱᴏ ɴᴇᴍ ᴇ́ ᴜᴍ ʟɪɴᴋ ᴅᴏ ɴɢʟ* 💁‍♂️`)
    let username = link.split("ngl.link/")[1].replace("/", "")
    if (!username) return reply(`*ɴᴀ̃ᴏ ᴅᴀ ᴘʀᴀ ᴘᴇɢᴀʀ ᴏ ᴜꜱᴜᴀ́ʀɪᴏ ᴅᴇꜱꜱᴇ ʟɪɴᴋ ᴀɪ ɴᴀ̃ᴏ* 🙆‍♂️`)
    let total = parseInt(quantidade)
    if (isNaN(total) || total <= 0) return reply(`*ᴇꜱᴄᴏʟʜᴇ ᴜᴍ ɴᴜ́ᴍᴇʀᴏ ᴠᴀ́ʟɪᴅᴏ ᴘʀᴀ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ* 🤷‍♂️`)   
    if (total > 20) {
      return reply(`*ɴᴀ̃ᴏ ꜱᴇ ᴀᴘᴀᴠᴏʀᴀ ɴᴀᴏ... ᴍᴀꜱ ᴏ ʟɪᴍɪᴛᴇ ᴇ́ ᴅᴇ 20 ᴍᴇɴꜱᴀɢᴇɴꜱ 😐*\n*ᴛᴇɴᴛᴀ ᴅᴇ ɴᴏᴠᴏ ᴄᴏᴍ ᴜᴍ ɴᴜ́ᴍᴇʀᴏ ᴍᴇɴᴏʀ* 💁‍♂️`)
    }
    reply(`*ᴠᴀᴍᴏ ʟᴀ́... ᴇɴᴠɪᴀɴᴅᴏ ${total} ᴍᴇɴꜱᴀɢᴇɴ(ꜱ) ᴀɴᴏ̂ɴɪᴍᴀ(ꜱ) ᴘʀᴏ @${username}* 💥`)
    function gerarUUIDv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0
        const v = c === 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
      })
    }
    for (let i = 0; i < total; i++) {
      let deviceId = gerarUUIDv4()
      await axios.post("https://ngl.link/api/submit", {
        username: username,
        question: mensagem,
        deviceId: deviceId // Nk Petrøv 
      }, {
        headers: { "Content-Type": "application/json" }
      })
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
    return reply(`*${total} ᴍᴇɴꜱᴀɢᴇɴ(ꜱ) ᴀɴᴏ̂ɴɪᴍᴀ(ꜱ) ᴇɴᴠɪᴀᴅᴀ(ꜱ)!* 🙆‍♂️`)
  } catch (err) {
    console.error(err)
    return reply(mess.error());
  }
break

case 'banfake': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

    if (q && isNaN(q)) {
        return reply('*ᴘᴀʀᴀ ʀᴇᴍᴏᴠᴇʀ ᴜᴍ ɴᴜᴍᴇʀᴏ ᴇsᴘᴇᴄɪ́ғɪᴄᴏ, ᴅɪɢɪᴛᴇ ᴏ ᴄᴏ́ᴅɪɢᴏ ᴅᴏ ᴘᴀɪs ᴏᴜ ᴏs ᴘʀɪᴍᴇɪʀᴏs ɴᴜᴍᴇʀᴏs 🙆‍♂️*');
    }

    try {
        const groupMetadata = await yuta.groupMetadata(from);
        const participants = groupMetadata.participants;
        const prefixo = q || '55';

        const estrangeiros = participants
            .filter(i => {
                const jid = normalizar(i.id);
                const isEstrangeiro = !jid.startsWith(prefixo);
                const isBot = jid === yuta.user.id;
                const isNotAdmin = i.admin === null;
                return isEstrangeiro && !isBot && isNotAdmin;
            })
            .map(i => normalizar(i.id));

        if (estrangeiros.length === 0)
            return reply('*ɴᴀ̃ᴏ ʜᴀ́ ɴᴜᴍᴇʀᴏs ᴇsᴛʀᴀɴɢᴇɪʀᴏs ɴᴏ ɢʀᴜᴘᴏ 💁‍♂️*');

        await yuta.groupParticipantsUpdate(from, estrangeiros, 'remove');
        reply(`*ғᴏʀᴀᴍ ʀᴇᴍᴏᴠɪᴅᴏs ${estrangeiros.length} ɴᴜᴍᴇʀᴏs ᴇsᴛʀᴀɴɢᴇɪʀᴏs ᴅᴏ ɢʀᴜᴘᴏ 🙇‍♂️*`);
    } catch (err) {
        console.error(err);
        reply('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴛᴇɴᴛᴀʀ ʀᴇᴍᴏᴠᴇʀ ᴏs ɴᴜᴍᴇʀᴏs 🤷‍♂️*');
    }
    break;
}


case 'listafake':
case 'listafakes': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    reagir(from, "🇺🇸");

    let totalFake = 0;
    let txtFake = `*━━━━━━━━━━━━━━━━━━━━━━━*\n*🇺🇸 ɴᴜᴍᴇʀᴏs ꜰᴀᴋᴇs ɴᴏ ɢʀᴜᴘᴏ:*\n*━━━━━━━━━━━━━━━━━━━━━━━*\n\n`;
    let mencionadosFake = [];

    for (let membro of groupMembers) {
        const jid = normalizar(membro.id);
        const numero = jid.split("@")[0];
        if (!numero.startsWith("55")) {
            totalFake++;
            if (isGroupAdmins) mencionadosFake.push(jid);
            txtFake += `╰➤ ${isGroupAdmins ? '@' : 'https://wa.me/'}${numero}\n`;
        }
    }

    txtFake += `\n*━━━━━━━━━━━━━━━━━━━━━━━*\n*🇺🇸 ᴛᴏᴛᴀʟ ᴅᴇ ꜰᴀᴋᴇꜱ: ${totalFake}*\n*━━━━━━━━━━━━━━━━━━━━━━━*`;

    if (totalFake > 0) {
        if (isGroupAdmins) {
            yuta.sendMessage(from, { text: txtFake, mentions: mencionadosFake }, { quoted: selo });
        } else reply(txtFake);
    } else reply("*ɴᴀᴏ ᴇxɪsᴛᴇ ɴᴇɴʜᴜᴍ ɴᴜᴍᴇʀᴏ ғᴀᴋᴇ ᴀǫᴜɪ ɴᴏ ɢʀᴜᴘᴏ 🤷‍♂️*");
    break;
}


case 'brlist':
case 'listabr': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    reagir(from, "🇧🇷");

    let totalBr = 0;
    let txtBr = `*━━━━━━━━━━━━━━━━━━━━━━━*\n*🇧🇷 ɴᴜᴍᴇʀᴏꜱ ʙʀᴀꜱɪʟᴇɪʀᴏꜱ ɴᴏ ɢʀᴜᴘᴏ:*\n*━━━━━━━━━━━━━━━━━━━━━━━*\n\n`;
    let mencionadosBr = [];

    for (let membro of groupMembers) {
        const jid = normalizar(membro.id);
        const numero = jid.split("@")[0];
        if (numero.startsWith("55") && !botNumber.includes(jid)) {
            totalBr++;
            if (isGroupAdmins) mencionadosBr.push(jid);
            txtBr += `╰➤ ${isGroupAdmins ? '@' : 'https://wa.me/'}${numero}\n`;
        }
    }

    txtBr += `\n*━━━━━━━━━━━━━━━━━━━━━━━*\n*🇧🇷 ᴛᴏᴛᴀʟ ʙʀᴀꜱɪʟᴇɪʀᴏꜱ: ${totalBr}*\n*━━━━━━━━━━━━━━━━━━━━━━━*`;

    if (totalBr > 0) {
        if (isGroupAdmins) {
            yuta.sendMessage(from, { text: txtBr, mentions: mencionadosBr }, { quoted: selo });
        } else reply(txtBr);
    } else reply("*ɴᴀᴏ ʜᴀ ɴᴜᴍᴇʀᴏꜱ ʙʀᴀꜱɪʟᴇɪʀᴏꜱ ɴᴏ ɢʀᴜᴘᴏ 🤷‍♂️*");
    break;
}

case 'autorizar':
case 'aceitar':
case '✅': {
        if (!isGroup) return reply(mess.onlyGroup());
        if (!isGroupAdmins) return reply(mess.onlyAdmins());
  if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
  const pendentes = await yuta.groupRequestParticipantsList(from);
  const total = pendentes?.length || 0;
  if (total === 0)
    return reply('*💁‍♂️ | ɴᴀᴏ ʜᴀ ɴᴇɴʜᴜᴍᴀ sᴏʟɪᴄɪᴛᴀᴄᴀᴏ ᴘᴇɴᴅᴇɴᴛᴇ ɴᴏ ɢʀᴜᴘᴏ. 🤷‍♂️*');
  for (const p of pendentes) {
    await yuta.groupRequestParticipantsUpdate(from, [p.jid], 'approve');
  }
  reply(`*${total} sᴏʟɪᴄɪᴛᴀᴄᴏᴇs ғᴏʀᴀᴍ ᴀᴄᴇɪᴛᴀs ᴄᴏᴍ sᴜᴄᴇssᴏ! 🙇‍♂️*`);
}
break;

case 'recusar':
case 'negar':
case '❌': {
        if (!isGroup) return reply(mess.onlyGroup());
        if (!isGroupAdmins) return reply(mess.onlyAdmins());
  if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
  const pendentes = await yuta.groupRequestParticipantsList(from);
  const total = pendentes?.length || 0;

  if (total === 0)
    return reply('*ɴᴀᴏ ʜᴀ ɴᴇɴʜᴜᴍᴀ sᴏʟɪᴄɪᴛᴀᴄᴀᴏ ᴘᴇɴᴅᴇɴᴛᴇ ᴘᴀʀᴀ ʀᴇᴄᴜsᴀʀ. 🤷‍♂️*');
  for (const p of pendentes) {
    await yuta.groupRequestParticipantsUpdate(from, [p.jid], 'reject');
  }

  reply(`*${total} sᴏʟɪᴄɪᴛᴀᴄᴏᴇs ғᴏʀᴀᴍ ʀᴇᴄᴜsᴀᴅᴀs ᴄᴏᴍ sᴜᴄᴇssᴏ! 🙇‍♂️*`);
}
break;

case '📃':
case 'solicitacao':
case 'soli': {
    try {
        if (!isGroup) return reply(mess.onlyGroup());
        if (!isGroupAdmins) return reply(mess.onlyAdmins());
        const solAll = await yuta.groupRequestParticipantsList(from);
        if (!solAll || solAll.length === 0)
            return reply('*ɴᴀᴏ ᴇxɪsᴛᴇ ɴᴇɴʜᴜᴍᴀ sᴏʟɪᴄɪᴛᴀᴄᴀᴏ ᴘᴇɴᴅᴇɴᴛᴇ ɴᴏ ɢʀᴜᴘᴏ 💁‍♂️*');
        let formatted = solAll.map((item, idx) => {
            let phone = item.phone_number || '';
            let num = phone.split('@')[0]; 
            let ddi = num.slice(0, 2);
            let nacionalidade = ddi === '55' ? 'ʙʀᴀsɪʟᴇɪʀᴏ 🇧🇷' : 'ᴇsᴛʀᴀɴɢᴇɪʀᴏ 🌎';
            
            return `*${idx+1}.* 👤 @${num}
*👁️ ᴍᴇᴛᴏᴅᴏ:* ${item.request_method}
*🌍 ɴᴀᴄɪᴏɴᴀʟɪᴅᴀᴅᴇ:* ${nacionalidade}`;
        }).join('\n━━━━━━━━━━━━━━\n');
        const mentionsList = solAll.map(item => item.phone_number);
        await mention(`*『 ⚠️ sᴏʟɪᴄɪᴛᴀᴄᴏᴇs ᴘᴇɴᴅᴇɴᴛᴇs ⚠️ 』*\n\n${formatted}`, mentionsList);
    } catch (err) {
        console.error(err);
        reply('*❌ ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ʟɪsᴛᴀʀ ᴀs sᴏʟɪᴄɪᴛᴀᴄᴏᴇs.*');
    }
    break;
}

    case 'getsite': //By Nkzin
    try {
       if (!SoDono) return reply(`• Somente meus donos pode usar esse comando kiridu`)
         if (!q.includes('http')) return reply('• Insira uma URL válida!');
        
        if (q.includes('xvideos')) return reply('Sai dae punheteiro KKKKKKKKKKKKKK');
        
        const { getHtml } = require('./ARQUIVES/js/getsite.js');
        
        const result = await getHtml(q.trim());
        
        if (!result) return reply('Parece que não foi possível obter os dados do site.');
        
        yuta.sendMessage(from, {
            document: fs.readFileSync(result),
            mimetype: 'text/plain',
            fileName: 'Source HTML'
        }, {
            quoted: selo
        });
        
        DLT_FL(result);
    } catch (e) {
        console.error(e);
        reply('Não foi possível completar sua solicitação!');
    }
    break;  
    
    
    case 'entrar':
case 'entrargp': //by eli emos
    try { //começo do try
        if (!SoDono) return reply("*ᴇɪɪ, ᴘsɪᴜ, ǫᴜᴇᴍ ᴅɪssᴇ ǫᴜᴇ ᴠᴏᴄᴇ ᴘᴏᴅᴇ ᴜsᴀʀ ᴏs ᴄᴏᴍᴀɴᴅᴏs ᴅᴇ ᴍᴇᴜ ᴍᴇsᴛʀᴇ? ᴘᴏɴʜᴀ-sᴇ ɴᴏ sᴇᴜ ʟᴜɢᴀʀ 🙆‍♂️*");
        if (!q || !q.includes("https://chat.whatsapp.com/")) return reply("*ᴘʀᴇᴄɪsᴏ ᴅᴏ ʟɪɴᴋ ᴅᴏ ᴄʜᴀᴛ ᴘʀᴀ ᴍɪᴍ ᴘᴏᴅᴇʀ ᴇɴᴛʀᴀʀ sᴇɴʜᴏʀ(ᴀ) 💁‍♂️*"); //Analisa se você enviou o link certo
        reply("*ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ ǫᴜᴇ ᴇᴜ ᴊᴀ ᴇɴᴠɪᴇɪ ᴀ sᴏʟɪᴄɪᴛᴀᴄᴀᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*");
        const URL_ID = q.split('https://chat.whatsapp.com/')[1]; //Põe apenas o id
        await yuta.groupAcceptInvite(URL_ID);
    } catch (webSexo) { //caso der erro
        console.error(webSexo);
        reply("*ᴇʀʀᴏ ᴀᴏ ᴛᴇɴᴛᴀʀ ᴇɴᴛʀᴀʀ ɴᴏ ɢʀᴜᴘᴏ.(ᴛᴀʟᴠᴇᴢ ғᴜɪ ʀᴇᴍᴏᴠɪᴅᴏ ᴏᴜ ᴏ ʟɪɴᴋ ғᴏɪ ʀᴇᴅᴇғɪɴɪᴅᴏ) 👨‍💻*");
    } 
    break;   
    

case 'apresentar':
case 'apr':  
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
inff = `Bem vindo(a) ao grupo : ${groupName}


👾 •𝑬𝑵𝑻𝑹𝑶𝑼 𝑺𝑬 𝑨𝑷𝑹𝑬𝑺𝑬𝑵𝑻𝑨•
📸 •F𝜣T𝜣
👻 •N𝜣ME
📌 •CID∆DE
🗓️ •ID∆DE
⚠️ •LEI∆ ∆S REGR∆S D𝜣 GRUP𝜣

*APROVEITE O GRUPO!*`
yuta.sendMessage(from, {text: inff}, {quoted: selo})
break

case 'papof':
case 'regraspp':  
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
txtz = `【᯽𒋨📷:𝑆𝑒 𝑎𝑝𝑟𝑒𝑠𝑒𝑛𝑡𝑒𝑚 𝑙𝑖𝑥𝑜𝑠🌚»°】
𒋨·࣭࣪̇🔥ɴᴏᴍᴇ:
𒋨·࣭࣪̇🔥ɪᴅᴀᴅᴇ:
𒋨·࣭࣪̇🔥ʀᴀʙᴀ:
*Aᴘʀᴇsᴇɴᴛᴇ-sᴇ sᴇ ǫᴜɪsᴇʀ.*
𝙏𝘼𝙂𝙎➭᜔ׂ࠭ ⁸₈⁸|𝟖𝟖𝟖|𝟠𝟠𝟠| ེི⁸⁸⁸
 ──╌╌╌┈⊰★⊱┈╌╌╌┈─
❌ ENTROU NO 
GRUPO INTERAJA, NÃO PRECISAMOS DE ENFEITES,INATIVOS SERAO REMOVIDOS ❌* 

/﹋<,︻╦╤─ ҉ - -----💥 
/﹋ 🅴 🅱🅴🅼 🆅🅸🅽🅳🅾 🆂🅴🆄🆂 🅵🅸🅻🅷🅾🆂 🅳🅰 🅿🆄🆃🅰`
yuta.sendMessage(from, {text: txtz}, {quoted: selo})
break

case 'digt':
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
bla = `🔥↯𝐉𝐀 𝐄𝐍𝐓𝐑𝐀 𝐃𝐈𝐆𝐈𝐓𝐀𝐍𝐃𝐎 𝚽𝐈 ↯°🌚💕
           ི⋮ ྀ🌴⏝ ི⋮ ྀ🚸 ི⋮ ྀ⏝🌴 ི⋮ ྀ 

🐼🍧↯𝖠𝖰𝖴𝖨 𝖵𝖮𝖢𝖤̂ 𝖯𝖮𝖣𝖤 𝖲𝖤𝖱↯🍧🐻
ㅤㅤㅤㅤ  ◍۫❀⃘࣭࣭࣭࣭ٜꔷ⃔໑࣭࣭ٜ⟅◌ٜ🛸◌⟆࣭࣭ٜ໑⃕ꔷ⃘࣭࣭࣭࣭ٜ❀۫◍ི࣭࣭࣭࣭ ུ
    【✔】ᴘʀᴇᴛᴀ👩🏾‍🦱 【✔】ʙʀᴀɴᴄᴀ👩🏼
    【✔】ᴍᴀɢʀᴀ🍧【✔】ɢᴏʀᴅᴀ🍿
    【✔】ᴘᴏʙʀᴇ🪙 【✔】ʀɪᴄᴀ💳
    【✔】ʙᴀɪᴀɴᴀ💌【✔】ᴍᴀᴄᴏɴʜᴇɪʀᴀ🍁
    【✔】ᴏᴛᴀᴋᴜ🧧【✔】ᴇ-ɢɪʀʟ🦄
    【✔】ʟᴏʟɪ🍭    【✔】ɢᴀᴅᴏ🐃
    【✔】ɢᴀʏ🏳️‍🌈     【✔】ʟᴇsʙɪᴄᴀ✂️
    【✔】ᴠᴀᴅɪᴀ💄  【✔】ᴛʀᴀᴠᴇᴄᴏ🍌
                【✔】ɴɪɴɢᴜᴇᴍ ʟɪɢᴀ📵
. ☪︎ • ☁︎. . •.
【 𝐕𝐄𝐌 𝐆𝐀𝐋𝐄𝐑𝐀, 𝐒𝐄 𝐃𝐈𝐕𝐄𝐑𝐓𝐈𝐑 𝐄 𝐅𝐀𝐙𝐄𝐑 𝐏𝐀𝐑𝐓𝐄 𝐃𝐀 𝐅𝐀𝐌𝐈𝐋𝐈𝐀.】🥂`
yuta.sendMessage(from, {text: bla}, {quoted: selo})
break


case 'ban': case 'banir': case 'kick': case 'avadakedavra':
  if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
  if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
try {
if(!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("*ᴇsᴛᴇ ᴜsᴜᴀʀɪᴏ sᴀɪᴜ ᴅᴏ ɢʀᴜᴘᴏ ᴏᴜ ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ 🤷‍♂️*")
if (botNumber.includes(menc_os2)) {
return reply("*ɴᴀᴏ ᴘᴏssᴏ ʀᴇᴍᴏᴠᴇʀ ᴇᴜ ᴍᴇsᴍᴏ ɴᴇ, ᴍᴀs ᴇsᴛᴏᴜ ᴍᴜɪᴛᴏ ᴛʀɪsᴛᴇ ᴄᴏᴍ ᴇssᴀ sᴜᴀ ᴅᴇᴄɪsᴀᴏ 🙁*");
}
if (numerodono.includes(menc_os2)) {
return reply("*ɴᴀᴏ ᴘᴏssᴏ ʀᴇᴍᴏᴠᴇʀ ᴍᴇᴜ ᴅᴏɴᴏ ɴᴇ ғɪʟʜᴀ ᴅᴀ ᴍᴀᴇ 🤦‍♂️*");
 }
await yuta.sendMessage(from, {text: `*ᴄᴇʀᴛᴏ... ʀᴇᴍᴏᴠɪ ᴏ(ᴀ) @${menc_os2.split("@")[0]} ᴘᴏʀ ᴘᴏʀ ᴍᴏᴛɪᴠᴏꜱ ᴊᴜꜱᴛᴏꜱ 🙇‍♂️*`, contextInfo:{...NkChannelKk, mentionedJid: [menc_os2]}}, {quoted: selo}) 
await yuta.groupParticipantsUpdate(from, [menc_os2], "remove");  
 } catch (e) {
console.error(e);
reply(mess.error());
 }
break; 

case 'promover': {
  if (!isGroupAdmins) return reply(mess.onlyAdmins())
  if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())

  const toNum = (v) => String(v || '').replace(/\D/g, '')

  const pathAtiv = `./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${from}.json`
  let dataAR = [{}]

  if (fs.existsSync(pathAtiv)) {
    try {
      dataAR = JSON.parse(fs.readFileSync(pathAtiv))
      if (!Array.isArray(dataAR)) dataAR = [dataAR]
      if (!dataAR[0]) dataAR[0] = {}
    } catch {
      dataAR = [{}]
    }
  }

  const antiAtivo = !!dataAR?.[0]?.antiroubo

  if (antiAtivo) {
    const permitidosNums = Array.isArray(dataAR[0].ar_permitidos)
      ? dataAR[0].ar_permitidos.map(toNum).filter(Boolean)
      : []

    const permitidosLidNums = Array.isArray(dataAR[0].ar_permitidos_lid)
      ? dataAR[0].ar_permitidos_lid.map(toNum).filter(Boolean)
      : []

    const senderNum = toNum(sender)
    const senderRaw = info?.key?.participant || info?.key?.sender || sender
    const senderRawNum = toNum(senderRaw)

    const autorizado =
      SoDono ||
      (senderNum && permitidosNums.includes(senderNum)) ||
      (senderRawNum && permitidosLidNums.includes(senderRawNum))

    if (!autorizado) return reply("*você não tem permissão para usar esse comando.🤷‍♂️*")
  }

  if (!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
  if (!JSON.stringify(groupMembers).includes(menc_os2)) return reply("*ᴇsᴛᴇ ᴜsᴜᴀʀɪᴏ sᴀɪᴜ ᴅᴏ ɢʀᴜᴘᴏ ᴏᴜ ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ 🤷‍♂️*")

  const botJid = String(yuta.user?.id || '').split(':')[0] + '@s.whatsapp.net'
  if (String(menc_os2) === String(botJid)) return reply("*eu ja sou adm do grupo 🤷‍♂️*")

  if (groupAdmins.includes(menc_os2)) return reply("*essa pessoa ja é adm do grupo 🤷‍♂️*")

  await yuta.groupParticipantsUpdate(from, [menc_os2], "promote")

  yuta.sendMessage(
    from,
    { text: `*@${menc_os2.split("@")[0]} ғᴏɪ ᴘʀᴏᴍᴏᴠɪᴅᴏ ᴀᴏ ᴄᴀʀɢᴏ ᴅᴇ ᴀᴅᴍ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`, contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] } },
    { quoted: selo }
  )
}
break; //Nk' Petrøv

case 'rebaixar': {
  if (!isGroupAdmins) return reply(mess.onlyAdmins())
  if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())

  const toNum = (v) => String(v || '').replace(/\D/g, '')

  const pathAtiv = `./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${from}.json`
  let dataAR = [{}]

  if (fs.existsSync(pathAtiv)) {
    try {
      dataAR = JSON.parse(fs.readFileSync(pathAtiv))
      if (!Array.isArray(dataAR)) dataAR = [dataAR]
      if (!dataAR[0]) dataAR[0] = {}
    } catch {
      dataAR = [{}]
    }
  }

  const antiAtivo = !!dataAR?.[0]?.antiroubo

  if (antiAtivo) {
    const permitidosNums = Array.isArray(dataAR[0].ar_permitidos)
      ? dataAR[0].ar_permitidos.map(toNum).filter(Boolean)
      : []

    const permitidosLidNums = Array.isArray(dataAR[0].ar_permitidos_lid)
      ? dataAR[0].ar_permitidos_lid.map(toNum).filter(Boolean)
      : []

    const senderNum = toNum(sender)
    const senderRaw = info?.key?.participant || info?.key?.sender || sender
    const senderRawNum = toNum(senderRaw)

    const autorizado =
      SoDono ||
      (senderNum && permitidosNums.includes(senderNum)) ||
      (senderRawNum && permitidosLidNums.includes(senderRawNum))

    if (!autorizado) return reply("*você não tem permissão para usar esse comando.🤷‍♂️*")
  }

  if (!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
  if (!JSON.stringify(groupMembers).includes(menc_os2)) return reply("*ᴇsᴛᴇ ᴜsᴜᴀʀɪᴏ sᴀɪᴜ ᴅᴏ ɢʀᴜᴘᴏ ᴏᴜ ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ 🤷‍♂️*")

  const donoJid = setting.ownerNumber.replace(/[^\d]/g, '') + '@s.whatsapp.net'
  if (String(menc_os2) === String(donoJid)) return reply("*eu não vou rebaixar meu dono 😤*")

  const botJid = String(yuta.user?.id || '').split(':')[0] + '@s.whatsapp.net'
  if (String(menc_os2) === String(botJid) && !SoDono) return reply("*eu não sou besta de ᴍᴇ ʀᴇʙᴀɪxᴀʀ 😤*")

  if (!groupAdmins.includes(menc_os2)) return reply("*essa pessoa ja é um membro comum 🤷‍♂️*")

  await yuta.groupParticipantsUpdate(from, [menc_os2], "demote")

  yuta.sendMessage(
    from,
    { text: `*@${menc_os2.split("@")[0]} ғᴏɪ ʀᴇʙᴀɪxᴀᴅᴏ ᴘᴀʀᴀ ᴍᴇᴍʙʀᴏ ᴄᴏᴍᴜᴍ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`, contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2] } },
    { quoted: selo }
  )
}
break; //Nk' Petrøv

case 'sorteio':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(!q) return reply(`*🤷‍♂️ ᴇxᴇᴍᴘʟᴏ ᴅᴇ ᴜsᴏ: ${prefix}sᴏʀᴛᴇɪᴏ ᴅᴇ 100$`);
try {
await mention(`*🤖🎉 ᴘᴀʀᴀʙᴇɴs @${groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)].id.split('@')[0]} ᴠᴏᴄᴇ ᴀᴄᴀʙᴀ ᴅᴇ ɢᴀɴʜᴀʀ ᴏ sᴏʀᴛᴇɪᴏ*`);
} catch(error) {
reply('*ᴅᴇsᴄᴜʟᴘᴇ ᴍᴀs ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴍᴀɪs ᴛᴀʀᴅᴇ 🙇‍♂️*')
}
break

case 'sorteionumero':
case 'sorteionumeros':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!args.length > 1) return reply(`*🤷‍♂️ ᴇxᴇᴍᴘʟᴏ ᴅᴇ ᴜsᴏ: ${prefix}sᴏʀᴛᴇɪᴏ ᴅᴇ 100$`);
try {
reply(`*🤖🎉 ᴘᴀʀᴀʙᴇɴs ᴏ sᴏʀᴛᴜᴅᴏ ᴅᴏs ɴᴜᴍᴇʀᴏs ғᴏɪ ${Math.floor(Math.random() * groupMetadata.participants.length)}*`)
} catch(error) {
reply('*ᴅᴇsᴄᴜʟᴘᴇ ᴍᴀs ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴍᴀɪs ᴛᴀʀᴅᴇ 🙇‍♂️*')
}
break

case 'substituir': {
  if (!SoDono) return reply(mess.onlyOwner());

  if (isMedia && !info.message.videoMessage || isQuotedDocument) {
    const media = isQuotedDocument
      ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage
      : info.message.documentMessage;

    const rane = getRandom('.' + await getExtension(media.mimetype));
    const doc = await getFileBuffer(media, 'document');
    
    fs.writeFileSync(q, doc);

    await yuta.sendMessage(from, {
      text: '*🌟 ᴀʀǫᴜɪᴠᴏ ᴀᴛᴜᴀʟɪᴢᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ᴅɪʀᴇᴛᴏʀɪᴏ:* ' + q
    }, { quoted: selo });

  } else {
    reply('*ᴍᴀʀǫᴜᴇ ᴜᴍ ᴅᴏᴄᴜᴍᴇɴᴛᴏ ᴏᴜ ᴀʀǫᴜɪᴠᴏ ǫᴜᴇ ꜱᴇʀᴀ́ ꜱᴜʙꜱᴛɪᴛᴜɪ́ᴅᴏ...* 💁‍♂️');
  }
}
break;

case 'index-bot':
if(!SoDono)return reply(mess.onlyOwner())
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./yuta.js', doc)
await yuta.sendMessage(from, {text: "*ᴀ ɪɴᴅᴇx ғᴏɪ ᴀᴛᴜᴀʟɪᴢᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ ✅*"}, {quoted: selo})
} else {
reply('*ᴍᴀʀǫᴜᴇ ᴏ ᴅᴏᴄᴜᴍᴇɴᴛᴏ ǫᴜᴇ ᴠᴏᴄᴇ ɪʀᴀ ᴍᴜᴅᴀʀ.. 🙆‍♂️*')
}
break

case 'addpalavra':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isPalavrao) return reply('*ᴀɴᴛɪ-ᴘᴀʟᴀᴠʀᴀᴏ sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ 🤷‍♂️*')
if(args.length < 1) return reply(`Use assim: ${prefix + command} [palavrão]. Um exemplo desmontrativo de como usar aqui: ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return reply('A palavra já foi adicionada na lista de proibições. do anti palavra, verifique...')
dataGp[0].antipalavrao.palavras.push(texto)
setGp(dataGp)
reply(`Palavrão adicionado com sucesso! Consulte a lista, usando: ${prefix+command}`)
break

case 'delpalavra':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isPalavrao) return reply('*ᴀɴᴛɪ-ᴘᴀʟᴀᴠʀᴀᴏ sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ 🤷‍♂️*')
if(args.length < 1) return reply(`*🌟 ᴜsᴇ ᴅᴀ ғᴏʀᴍᴀ ᴄᴇʀᴛᴀ, ᴇxᴇᴍᴘʟᴏ: ${prefix}ᴅᴇʟᴘᴀʟᴀᴠʀᴀ ᴄᴀʀᴀʟʜᴏ*`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!isPalavras.includes(texto)) return reply('*ᴀ ᴘᴀʟᴀᴠʀᴀ ᴊᴀ ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴀ ᴏᴜ ɴᴀᴏ ᴇsᴛᴀ ɪɴᴄʟᴜsᴀ.. 🤷‍♂️*')
var i = dataGp[0].antipalavrao.palavras.indexOf(texto)
dataGp[0].antipalavrao.palavras.splice(i, 1)
setGp(dataGp)
reply(`*ᴘᴀʟᴀᴠʀᴀᴏ ʀᴇᴍᴏᴠɪᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ✅*`)
break

case 'listapalavrão': case 'listapalavra': case 'listpalavra':
if(!isPalavrao) return reply('*ᴀɴᴛɪ-ᴘᴀʟᴀᴠʀᴀᴏ sᴇ ᴇɴᴄᴏɴᴛʀᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ 🤷‍♂️*')
if(isPalavras.length < 0) return reply(`*ɴᴀᴏ ᴇxɪsᴛᴇ ɴᴇɴʜᴜᴍᴀ ᴘᴀʟᴀᴠʀᴀ ᴘʀᴏɪʙɪᴅᴀ 🤷‍♂️*`)
reply(`*ᴛᴏᴛᴀʟ ${isPalavras.length} - ʟɪsᴛᴀ ᴅᴇ ᴘᴀʟᴀᴠʀᴏᴇs ɴᴏ ɢʀᴜᴘᴏ:*\n–\n${isPalavras.map((v, index) => `${index+1}. ➸  ${v}`).join('\n')}`)
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply(mess.onlyOwner())
if(!isAntiFlood) return reply(`*🤷‍♂️ ᴀᴛɪᴠᴇ ᴏ ʀᴇᴄᴜʀsᴏ ᴘʀɪᴍᴇɪʀᴏ, ${prefix}ʟɪᴍɪᴛᴇᴄ`)
if(!q) return reply(`*🌟 ᴄᴀᴅᴇ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ? ᴇxᴇᴍᴘʟᴏ: ${prefix + command} 5000*`)
if(isNaN(q) == true) return reply('*ᴜsᴇ ᴀᴘᴇɴᴀs ɴᴜᴍᴇʀᴏs 🙄*')
if(command == 'limitec'){
dataGp[0].limitec.quantidade = q
setGp(dataGp)
reply(`*${q} ғᴏɪ ᴀᴜᴛᴇʀᴀᴅᴏ ᴏ ʟɪᴍɪᴛᴇ ᴄᴀʀᴀᴄᴛᴇʀᴇs 🚀*`)
} else {
fs.writeFileSync('./DADOS DO YUTA/usuarios/flood.json', JSON.stringify({limitefl: q}, null, '\t'))
await reply(`*${q} ғᴏʀᴀᴍ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ᴀᴏ ʟɪᴍɪᴛᴇ ᴄᴀʀᴀᴄᴛᴇʀᴇs 🚀*`)
}
break

case 'r':
case 'reiniciar':
if(!SoDono) return reply(mess.onlyOwner())
reply("*ᴏᴋᴀʏ ᴍᴇsᴛʀᴇ, ɪʀᴇɪ ʀᴇɪɴɪᴄɪᴀʀ, ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ... 🙇‍♂️*")
setTimeout(async() => {process.exit()}, 1200)
break

case 'novoqr':
if(!SoDono) return reply(mess.onlyOwner());
reply("*ᴏᴋᴀʏ ᴍᴇsᴛʀᴇ, ɪʀᴇɪ ʀᴇɪɴɪᴄɪᴀʀ ᴏ ǫʀ, ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ... ᴇ ғɪǫᴜᴇ ʟɪɢᴀᴅᴏ ɴᴏ ᴄᴏɴsᴏʟᴇ  🙇‍♂️*")
setTimeout(async() => {fs.rmdirSync(qrcode, {recursive: true})}, 1500);
break


case 'limpardb':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
AB = countMessage.map(i => i.groupId).indexOf(from)
total = countMessage[AB].participants.length
caixa = []
for(i = 0; i < countMessage[AB].participants.length; i++) {
  if(isJsonIncludes(groupMembers, countMessage[AB].participants[i].id)) {
    caixa.push(countMessage[AB].participants[i])
  }
}
pack = total - caixa.length
if(pack <= 0) return reply("*ᴛᴏᴅᴏs ᴏs ɢʜᴏsᴛ ғᴏʀᴀᴍ ʟɪᴍᴘᴀᴅᴏs ᴅᴀ ᴅᴀᴛᴀʙᴀsᴇ 🙅‍♂️*")
countMessage[AB].participants = caixa
saveJSON(countMessage, ".INFO_YUTA/media/countmsg.json")
reply(`*${pack} ғᴏʀᴀᴍ ᴅᴇʟᴇᴛᴀᴅᴏs ᴄᴏᴍ sᴜᴄᴇssᴏ ✅*`)
break

case 'limparqr': 
try {
if(!SoDono) return reply(mess.onlyGroup())
const limparPasta = (caminho) => {
fs.readdir(caminho, (err, arquivos) => {
if (err) {console.error('Erro ao ler os arquivos da pasta:', err);return;}
const arquivosDeletados = arquivos.filter((arquivo) => {
return /sender|pre-key|session/i.test(arquivo);});
arquivosDeletados.forEach((arquivo) => {
fs.unlink(`${caminho}/${arquivo}`, (err) => {
if (err) {
console.error(`Erro ao deletar o arquivo ${arquivo}:`, err);
return;
}});});
reply(`*${arquivosDeletados.length} ғᴏʀᴀᴍ ᴅᴇʟᴇᴛᴀᴅᴏs ᴄᴏᴍ sᴜᴄᴇssᴏ ✅*`);
});};
await limparPasta(`./DADOS DO YUTA/qr-code`);
} catch(e) {
console.log(e);
await reply(mess.error());
} 
break

case 'roletarussa':
if(!isGroup) return reply(mess.onlyGroup())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
TAMBOR = ["ɴᴀ ᴘᴇʀɴᴀ","ɴᴀ ᴄᴀʙᴇᴄᴀ","ɴᴏ ᴘᴇsᴄᴏᴄᴏ","ɴᴏ ᴘᴇɪᴛᴏ","ɴᴏ ᴏʟʜᴏ","ɴᴏ ᴇsᴛᴏᴍᴀɢᴏ.","ɴᴀ ʙᴏᴄᴀ","ɴᴀ ᴘᴇʀᴏᴋᴀʜ","ɴᴀ ᴛᴇsᴛᴀ","ɴᴏ ʙʀᴀᴄᴏ", "ɴᴀ ʙᴜᴢᴇᴛᴀ", "ɴᴀ ᴍᴀᴏ", "ɴᴏ ᴘᴇ"]
C2 = somembros[Math.floor(Math.random() * somembros.length)]
if(somembros.length == 0) return reply("*ᴛᴇᴍ ɴᴇɴʜᴜᴍ ᴍᴇᴍʙʀᴏ ᴄᴏᴍᴜᴍ ᴀǫᴜɪ 🤷‍♂️*")
if(C2 === sender || C2 === botNumber) return mentions(`*ᴇᴜ ᴇsᴄᴏʟʜɪ ᴏ @${C2.split('@')[0]} ᴍᴀs ᴄᴏɴsᴇɢᴜɪᴜ ᴇsᴄᴀᴘᴀʀ 🙄*`, [C2], true)
if(C2 === sender || C2 === numerodono[0]) return mentions(`*ᴇsᴄᴏʟʜɪ ᴏ @${C2.split('@')[0]} sᴇɴᴛᴇ ᴀ ᴘʀᴇssᴀᴏ ɴᴇɴᴇᴍ 🙅‍♂️*`, [C2], true)		
reply(`*ʙᴏʀᴀ ᴠᴇʀ ǫᴜᴇᴍ ɴᴀᴏ ᴛᴇᴍ sᴏʀᴛᴇ ᴀǫᴜɪ 🚀*`)
setTimeout(async() => { 
await mentions(`*ǫᴜᴇ ᴘᴇɴɪɴʜᴀ @${C2.split('@')[0]} ᴠᴏᴄᴇ ɴᴀᴏ ᴛᴇᴠᴇ sᴏʀᴛᴇ 🤷‍♂️ ᴛᴏᴍᴀ ᴜᴍ ᴛɪʀᴏ ${TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]} 🙅‍♂️*`, [C2], true) 
}, 5000)	 
setTimeout(async() => {
await yuta.groupParticipantsUpdate(from, [C2], "remove")
}, 6000)
break


      case 'limpar':
       await reagir(from, "🗑️")
         if(!isGroup) return reply(mess.onlyGroup())
           if(!isGroupAdmins) return reply(mess.onlyAdmins())
             if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
                    reply('*ʟɪᴍᴘᴇᴢᴀ ᴅᴇ ᴄʜᴀᴛ 💁‍♂️*');
                    await sleep(1000);
                    async function clearmsg() {
                        reply(`${'\n'.repeat(299)}`);
                    }
                    for (let i = 0; i < 10; i++) {
                        await sleep(500);
                        clearmsg();
                    }
                    reply('*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ, ᴀᴄᴀʙᴇɪ ᴅᴇ ʟɪᴍᴘᴀʀ ᴏ ᴄʜᴀᴛ 🙇‍♂️*');
                    break;


case 'd_':
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.buttonsResponseMessage.contextInfo.stanzaId, participant: botNumber}})
break

case 'iddogrupo':
reply(from)
break

case 'listaddi': case 'ddilist':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(q.length < 1) return reply(`Fale o código de um país, por exemplo: *${prefix}listaddi 55*`)
if(isNaN(q)) return reply(`Fale o código de um país, por exemplo: *${prefix}listaddi 55*`)
teks = `• Número com código de país +${args[0]} registrados no grupo:\n–\n`
men = []
for(let mem of groupMembers) {
if(mem.id.startsWith(q)) {
teks += `⇒ @${mem.id.split('@')[0]}\n`
men.push(mem.id)
}
}
if(teks.indexOf('⇒') < 0) return reply(`Nenhum número com o DDI *+${args[0]}* foi encontrado.`)
await yuta.sendMessage(from, {text: teks, mentions: men}, {quoted: selo}).catch(async(error) => {
reply(mess.error())
})
break

case 'listaddd': case 'dddlist':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(q.length < 1) return reply(`Fale o código do estado, por exemplo: *${prefix}listaddd 82*`)
if(isNaN(q)) return reply(`Fale o código de um estado(ddd), por exemplo: *${prefix}listaddd 82*`)
teks = `• Lista de números brasileiros com o DDD *${q}* presentes neste grupo:\n–\n`
men = []
for (let mem of groupMembers) {
if(mem.id.startsWith(55+q)) {
teks += `⇒ @${mem.id.split('@')[0]}\n`
men.push(mem.id);
}
}
if(teks.indexOf('⇒') < 0) return reply('Nenhum *número brasileiro* com DDD fornecido foi encontrado no grupo.')
await yuta.sendMessage(from, {text: teks, mentions: men}, {quoted: selo}).catch(async(error) => {
reply(mess.error())
})
break

case 'nomegp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
blat = args.join(" ")
await yuta.groupUpdateSubject(from, `${blat}`)
await yuta.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo.'}, {quoted: selo})
break

case 'descgp':
case 'descriçãogp':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyAdmins())
blabla = args.join(" ")
await yuta.groupUpdateDescription(from, `${blabla}`)
await yuta.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: selo})
break

case 'mudarftgp':
case 'colocarftgp':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
yuta.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

            case 'linkgp':
            case 'linkgroup':
         if(!isGroup) return reply(mess.onlyGroup())
           if(!isGroupAdmins) return reply(mess.onlyAdmins())
             if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
                let metadata = await yuta.groupMetadata(from)
                linkgc = await yuta.groupInviteCode(from)
                reply(`*✨ → ᴀᴄᴇꜱꜱᴇ ᴏ ʟɪɴᴋ ᴅᴏ ɢʀᴜᴩᴏ ᴀᴛᴜᴀʟ ᴀʙᴀɪxᴏ ↴*\nhttps://chat.whatsapp.com/` + linkgc)
                break

case 'redefinir':
case 'revlinkgp':
case 'revlinkgroup':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
await yuta.groupRevokeInvite(from)
reply(`*ʟɪɴᴋ ᴅᴏ ɢʀᴜᴘᴏ ʀᴇᴅᴇғɪɴɪᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`)
break

case 'recrutar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(!q) return reply("Cadê o número do usuário que você deseja convidar.")
try {
photoG = await yuta.profilePictureUrl(from, 'image') // Pegar a foto do grupo aonde foi solicitado o comando de recrutamento.
} catch {
photoG = thumbnail // Vai colocar a img que está na definição, caso esteja sem foto.
}
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
linkgc = await yuta.groupInviteCode(from)
await yuta.sendMessage(rcrt, {text: "*Olá, tudo bem?* Você foi convidado(a) pelo(a) adminstrador(a) do grupo.\nPara entrar no grupo, clique acima!", contextInfo: {externalAdReply: {title: "Clique aqui para participar do grupo.", thumbnail: await getBuffer(photoG), mediaType: 1, sourceUrl: "https://chat.whatsapp.com/"+linkgc}}})
reply("Convite de recrutamento do usuário, foi enviado para o privado dele com sucesso...")
break

case 'listatm':
if(!SoDono) return reply(mess.onlyOwner())
rgp = JSON.parse(fs.readFileSync("./DADOS DO YUTA/func/tmgroup.json"))
if(rgp.length == 0) return reply(`Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`)
bl = "";
for ( i = 0; i < rgp.length; i++) {
bl += `( ${i+1} ) - ID: ${rgp[i].id}\n• Nome do Usuário(a) ou Grupo: ${rgp[i].infonome}\n-\n`
}
reply(bl)
break

case 'rgtm':
if(!SoDono) return reply(mess.onlyOwner())
rgp = JSON.parse(fs.readFileSync("./DADOS DO YUTA/func/tmgroup.json"))
if(JSON.stringify(rgp).includes(from)) return reply("Este grupo/usuário já está registrado na lista de transmissão") 
rgp.push({id: from, infonome: `${isGroup ? groupName: pushname}`})
fs.writeFileSync("./DADOS DO YUTA/func/tmgroup.json", JSON.stringify(rgp))
reply("Registrado com sucesso, quando for realizada as transmissões, esse grupo/usuário estará na lista.")
break

case 'tirardatm':
if(!SoDono) return reply(mess.onlyOwner())
rgp = JSON.parse(fs.readFileSync("./DADOS DO YUTA/func/tmgroup.json"))
if(!JSON.stringify(rgp).includes(from)) return reply("Este grupo/usuário não está registrado para ser tirado da lista de transmissão") 
if(q.trim().length > 4) {
var ustm = rgp.map(i => i.id).indexOf(q.trim())
} else {
var ustm = rgp.map(i => i.id).indexOf(from)
}
rgp.splice(ustm, 1)
fs.writeFileSync("./DADOS DO YUTA/func/tmgroup.json", JSON.stringify(rgp))
reply("Grupo/Usuário tirado da lista de transmissão com sucesso")
break

case 'fzrtm':
if(!SoDono) return reply(mess.onlyOwner())
var rgp = JSON.parse(fs.readFileSync("./DADOS DO YUTA/func/tmgroup.json"))
if(rgp.lengh == 0) return reply("Não contém nenhum grupo registrado para realizar transmissão") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? " "+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? " "+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? " "+q : pink.caption.replace(new RegExp(prefix+command, "gi"), ` `)
pink.image = {url: pink.url}
} else if(blue) {
var DFC = blue  
blue.caption = q.length > 1 ? " "+q : blue.caption.replace(new RegExp(prefix+command, "gi"), ` `)
blue.video = {url: blue.url}
} else if(red) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), ` `)
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), ` `)
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? " "+q : yellow.caption.replace(new RegExp(prefix+command, "gi"), ` `)
yellow.document = {url: yellow.url}  
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
}
for (i = 0; i < rgp.length; i++) {
await yuta.sendMessage(rgp[i].id, DFC)}
break

case 'fazertm': {
  if (!SoDono) return reply(mess.onlyOwner())
  await sleep(1000);

  let todosGrupos = await yuta.groupFetchAllParticipating()
  let grupos = Object.keys(todosGrupos).filter(id => id.endsWith("@g.us"))
  if (grupos.length == 0) return reply('*ɴᴇɴʜᴜᴍ ɢʀᴜᴘᴏ ᴅᴇᴛᴇᴄᴛᴀᴅᴏ 🙇‍♂️*')

  var YutaMsg = ""
  var NkAlone = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
  var pink = isQuotedImage ? NkAlone?.imageMessage : info.message?.imageMessage
  var blue = isQuotedVideo ? NkAlone?.videoMessage : info.message?.videoMessage
  var red = isQuotedMsg ? NkAlone?.textMessage : info.message?.textMessage
  var aud_d = isQuotedAudio ? NkAlone.audioMessage : ""
  var figu_d = isQuotedSticker ? NkAlone.stickerMessage : ""
  red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue ? " " + NkAlone.conversation : info.message?.conversation
  var green = isQuotedMsg2 && !aud_d && !figu_d && !red && !pink && !blue ? " " + NkAlone.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
  const intro = ""
  let acessarCanalBase = {
    forwardingScore: 1,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: setting.channelnk,
        newsletterName: NomeDoBot
    }
  }

  if (pink) {
    YutaMsg = pink
    pink.caption = intro + (q.length > 1 ? " " + q : pink.caption?.replace(new RegExp(prefix + command, "gi"), ` `) || '')
    pink.image = { url: pink.url }
  } else if (blue) {
    YutaMsg = blue
    blue.caption = intro + (q.length > 1 ? " " + q : blue.caption?.replace(new RegExp(prefix + command, "gi"), ` `) || '')
    blue.video = { url: blue.url }
  } else if (red) {
    YutaMsg = { text: intro + red.replace(new RegExp(prefix + command, "gi"), ` `) }
  } else if (!aud_d && !figu_d && green) {
    YutaMsg = { text: intro + green.replace(new RegExp(prefix + command, "gi"), ` `) }
  } else if (figu_d) {
    YutaMsg = figu_d
    figu_d.sticker = { url: figu_d.url }
  } else if (aud_d) {
    YutaMsg = aud_d
    aud_d.audio = { url: aud_d.url }
  }

  for (let i = 0; i < grupos.length; i++) {
    try {
      let metadata = await yuta.groupMetadata(grupos[i])
      let membros = metadata.participants.map(p => p.id)

      let contextInfo = {
        ...acessarCanalBase,
        mentionedJid: membros
      }

      await yuta.sendMessage(grupos[i], {
        ...YutaMsg,
        contextInfo
      })
    } catch (err) {
      continue
    }
  }

  reply('*ᴍᴇɴsᴀɢᴇᴍ ᴇɴᴠɪᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙆‍♂️*')
  break
} 

case 'grupo': {
try {
if (!isGroup) return reply(mess.onlyGroup())
if (!isGroupAdmins) return reply(mess.onlyAdmins())
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if (args.length < 1) return reply(`*ᴇsᴛᴀ ғᴀʟᴛᴀɴᴅᴏ ᴀʟɢᴏ ᴀɪ ʀᴀᴘᴀᴢ 🤷‍♂️*\n\n> ᴇxᴇᴍᴘʟᴏ: ${prefix}ɢʀᴜᴘᴏ ᴀ『 ᴘᴀʀᴀ ᴀʙʀɪʀ 』\n> ${prefix}ɢʀᴜᴘᴏ ғ『 ᴘᴀʀᴀ ғᴇᴄʜᴀʀ 』`);
const metadata = await yuta.groupMetadata(from)
const isFechado = metadata.announce === true 
if (args[0] === 'a') {
if (!isFechado) return reply(`*ᴏ ɢʀᴜᴘᴏ ᴊᴀ ᴇsᴛᴀ ᴀʙᴇʀᴛᴏ sᴇɴʜᴏʀ(ᴀ) 💁‍♂️*`)
await yuta.groupSettingUpdate(from, 'not_announcement')
reply(`*ɢʀᴜᴘᴏ ᴀʙᴇʀᴛᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`)
} 
else if (args[0] === 'f') {
if (isFechado) return reply(`*ᴏ ɢʀᴜᴘᴏ ᴊᴀ ᴇsᴛᴀ ғᴇᴄʜᴀᴅᴏ sᴇɴʜᴏʀ(ᴀ) 💁‍♂️*`)
await yuta.groupSettingUpdate(from, 'announcement')
reply(`*ɢʀᴜᴘᴏ ғᴇᴄʜᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`)
} 
else {
reply(`*ᴇsᴛᴀ ғᴀʟᴛᴀɴᴅᴏ ᴀʟɢᴏ ᴀɪ ʀᴀᴘᴀᴢ 🤷‍♂️*\n\n> ᴇxᴇᴍᴘʟᴏ: ${prefix}ɢʀᴜᴘᴏ ᴀ『 ᴘᴀʀᴀ ᴀʙʀɪʀ 』\n> ${prefix}ɢʀᴜᴘᴏ ғ『 ᴘᴀʀᴀ ғᴇᴄʜᴀʀ 』`)
}
} catch (e) {
console.error(e)
}
break
}


case 'totag':
case 'cita':
case 'hidetag':
case 'citar': {
    if (!isGroup) return reply(mess.onlyGroup())
    if (!isGroupAdmins) return reply(mess.onlyAdmins())
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
    const quotedMsg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
    const TDS_GP = groupMembers.map(i => i.id)
    if (quotedMsg?.pollCreationMessageV3) {
        const poll = quotedMsg.pollCreationMessageV3
        const titulo = poll.name
        const opcoes = poll.options.map(o => o.optionName)
        const aviso = await yuta.sendMessage(from, { 
            text: `${q}`,
            contextInfo: { mentionedJid: TDS_GP }
        })
        await yuta.sendMessage(from, {
            poll: {
                name: titulo,
                values: opcoes,
                selectableCount: poll.selectableCount || 1
            }, mentions: TDS_GP }, { quoted: aviso })
        break
    }
    if (!quotedMsg && args.length > 0) {
        return await yuta.sendMessage(from, { text: args.join(" "), contextInfo: { mentionedJid: TDS_GP }})}
    if (quotedMsg) {
        const messageTypes = ['imageMessage', 'videoMessage', 'audioMessage', 'documentMessage', 'documentWithCaptionMessage']
        for (const type of messageTypes) {
            const message = quotedMsg?.viewOnceMessageV2?.message?.[type] || quotedMsg?.[type]?.message?.documentMessage || quotedMsg?.[type]
            if (message?.caption) {message.caption = args.length > 0 ? args.join(' ').trim() : message.caption}}
        return await yuta.sendMessage(from, { forward: { key: info.key, message: quotedMsg }, contextInfo: { mentionedJid: TDS_GP }})}
    return reply(`*ᴜsᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴅᴇ ᴅᴜᴀs ᴍᴀɴᴇɪʀᴀs 🙇‍♂️*\n> *1.* ᴍᴀʀǫᴜᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ (ғᴏᴛᴏ, ᴠɪᴅᴇᴏ, ᴀᴜᴅɪᴏ, ᴇɴǫᴜᴇᴛᴇ, ᴇᴛᴄ)> *2.* ᴏᴜ ᴅɪɢɪᴛᴇ *${prefix + command}* sᴇɢᴜɪᴅᴏ ᴅᴀ sᴜᴀ ᴍᴇɴsᴀɢᴇᴍ`)
}
break;



case 'marcar': case 'marcar2':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
async function marcac() {
bla = []
blad = `*⸺͟͞𝙼𝙰𝚁𝙲𝙰𝙽𝙳𝙾 𝚃𝙾𝙳𝙾𝚂 𝙾𝚂 𝙼𝙴𝙼𝙱𝚁𝙾𝚂 𝙳𝙾 𝙶𝚁𝚄𝙿𝙾◍᳝࣪.⋕𖥾ᤢ*\n•\n*•➪ 𝙶𝚁𝚄𝙿𝙾 → ${groupName}*${!q ? "" : `\n*•➪ 𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 →* ${q}`}\n\n`
for( let i of somembros ) {
blad += `⊹ 𖤐 @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`Não contém nenhum membro comum no grupo.`)
await mentions(blad, bla, true)  
}
marcac().catch((error) => {
console.log(error)
})
break


case 'reviverqr':
if(!SoDono) return reply(mess.onlyOwner())
exec(`cd ${qrcode} && rm -rf pre-key* sender* session*`)
setTimeout(async () => {
    await reply("*ᴏᴋᴀʏ ᴍᴇsᴛʀᴇ, ɪʀᴇɪ ʀᴇɪɴɪᴄɪᴀʀ, ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ... 🙇‍♂️*")
 setTimeout(async () => {
    process.exit()
 }, 1200)
}, 1000)
break

case 'sair_all':
  if (!SoDono && !info.key.fromMe) return reply(mess.onlyOwner())
  try {
    const grupos = await yuta.groupFetchAllParticipating();    
    for (let idGrupo in grupos) {
      await yuta.groupLeave(grupos[idGrupo].id);
    }    
    reply("O bot saiu de todos os grupos com sucesso.");
  } catch (erro) {
    reply("Erro ao tentar sair dos grupos: " + String(erro));
  }
  break;


case 'sair':
case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply(mess.onlyOwner())
try {
await yuta.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break


case 'npm': { //nunu x franky
					if (!q) return reply("• Forneça um termo de pesquisa para *NPM*\n• `Exemplo: " + prefixo + command + " @whiskeysockets/baileys`");
					await reply("*Buscando resultados...*");
					try {
						const searchQuery = encodeURIComponent(q.trim());
						const searchUrl = `https://registry.npmjs.org/-/v1/search?text=${searchQuery}&size=5`;
						
						axios.get(searchUrl)
							.then(response => {
								const packages = response.data.objects;
								
								if (!packages || packages.length === 0) {
									return reply(`*Não encontrei nenhum resultado para "${q}" na busca de NPM.*`);
								}
								//nunu x franky
								let results = packages.map(pkg => ({
									name: pkg.package.name,
									description: pkg.package.description || 'Descrição não disponível',
									author: pkg.package.author ? pkg.package.author.name : 'Autor desconhecido',
									version: pkg.package.version,
									link: `https://www.npmjs.com/package/${pkg.package.name}`
								}));
								
								let message = `    • 🖨 𝙉𝙊𝘿𝙀 𝙋𝘼𝘾𝙆𝘼𝙂𝙀 𝙈𝘼𝙉𝘼𝙂𝙀𝙍 ✨ •\n\n🔍 *Resultados da pesquisa npm para "${q}":↴*\n\n`;
								results.forEach(result => {
								    message += `${"─".repeat(10)}\n\n`;
									message += "📦 ↝ `Nome:` "+ result.name + " ↴\n-\n";
									message += "📄 ↝ `Descrição:` " + result.description + "\n";
									message += "👤 ↝ `Autor:` "+ result.author + "\n";
									message += "🔖↝ `Versão:` " + result.version + "\n";
									message += "🔗 ↝ `Link:` " + result.link + `\n\n`;
								});
								
								reply(message);
							})
							.catch(error => {
								console.error(error);
								reply('Erro ao realizar a pesquisa no npm. Por favor, tente novamente mais tarde.');
							});
					} catch (error) {
						console.error(error);
						reply('Ocorreu um erro ao processar sua solicitação para npm.');
					}
					
					break; //nunu yuta npm
				}

case 'seradm':
if(!SoDono) return reply(mess.onlyOwner());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
await mentions(`*ᴘʀᴏɴᴛᴏ @${sender.split("@")[0]}, ᴀɢᴏʀᴀ ᴠᴏᴄᴇ ᴇ ᴜᴍ ᴀᴅᴍɪɴɪsᴛʀᴀᴅᴏʀ 🙇‍♂️*`, [sender], true)
await yuta.groupParticipantsUpdate(from, [sender], "promote");
break

case 'sermembro':
if(!SoDono) return reply(mess.onlyOwner());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
await mentions(`*ᴘʀᴏɴᴛᴏ @${sender.split("@")[0]}, ᴀɢᴏʀᴀ ᴠᴏᴄᴇ ᴇ ᴍᴇᴍʙʀᴏ ᴄᴏᴍᴜᴍ 🙇‍♂️*`, [sender], true)
await yuta.groupParticipantsUpdate(from, [sender], "demote")
break

case 'advertir':
case 'adverter': 
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(menc_os2 == botNumberLID) return reply("Não pode advertir o próprio bot.");
if(menc_os2 == nmrdn) return reply("Não pode advertir o próprio dono do bot.");
if(groupAdmins.includes(menc_os2)) return reply("Não é possível advertir adminstrador do grupo.");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Não tem como advertir um usuário que não se encontra mais no grupo.")
ADVT.push(menc_os2); setGp(dataGp)  
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = mess.warningAdvertencia(menc_os2, dfqn)
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); 
await mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); 
await mentions(dfntxt, [menc_os2])
}} else {
await yuta.sendMessage(from, {text: mess.finishAdvertencia(menc_os2), contextInfo:{...NkChannelKk, mentionedJid: [menc_os2]}}, {quoted: selo}) 
await sleep(1500)
await yuta.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); 
ADVT.splice(i, 3); setGp(dataGp)}}, 3000)
break

case 'antispam': {
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
const cfg = dataGp[0].antispam || {
active: false,
figu: { limite: 6, tempo: 10 },
texto: { limite: 8, tempo: 8 },
foto: { limite: 4, tempo: 10 },
video: { limite: 3, tempo: 15 }
}

cfg.figu = cfg.figu || { limite: 6, tempo: 10 }
cfg.texto = cfg.texto || { limite: 8, tempo: 8 }
cfg.foto = cfg.foto || { limite: 4, tempo: 10 }
cfg.video = cfg.video || { limite: 3, tempo: 15 }

if (!q) {
const st = cfg.active ? '✅' : '❌'
return reply(
`ᴀɴᴛɪsᴘᴀᴍ: ${st}

ғɪɢᴜʀɪɴʜᴀs: ${cfg.figu.limite} / ${cfg.figu.tempo}s
ᴛᴇxᴛᴏ: ${cfg.texto.limite} / ${cfg.texto.tempo}s
ғᴏᴛᴏ: ${cfg.foto.limite} / ${cfg.foto.tempo}s
ᴠɪᴅᴇᴏ: ${cfg.video.limite} / ${cfg.video.tempo}s

Use:
${prefix + command} on
${prefix + command} off

${prefix + command} figu limite 6
${prefix + command} figu tempo 10
${prefix + command} figu set 6 10

${prefix + command} texto limite 8
${prefix + command} texto tempo 8
${prefix + command} texto set 8 8

${prefix + command} foto limite 4
${prefix + command} foto tempo 10
${prefix + command} foto set 4 10

${prefix + command} video limite 3
${prefix + command} video tempo 15
${prefix + command} video set 3 15`
)
}

const args2 = q.trim().split(/\s+/)

if (args2[0] === 'on' || args2[0] === 'ativar') {
if (cfg.active === true) return reply(`*ᴏ ᴀɴᴛɪsᴘᴀᴍ ᴊᴀ ᴇsᴛᴀ ᴀᴛɪᴠᴀᴅᴏ ✅*`)
dataGp[0].antispam = { ...cfg, active: true }
setGp(dataGp)
return reply(`*ᴏ ᴀɴᴛɪsᴘᴀᴍ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ ✅*`)
}

if (args2[0] === 'off' || args2[0] === 'desativar') {
if (cfg.active === false) return reply(`*ᴏ ᴀɴᴛɪsᴘᴀᴍ ᴊᴀ ᴇsᴛᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌*`)
dataGp[0].antispam = { ...cfg, active: false }
setGp(dataGp)
return reply(`*ᴏ ᴀɴᴛɪsᴘᴀᴍ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ❌*`)
}

const alvo =
(args2[0] === 'figu' || args2[0] === 'figurinha') ? 'figu' :
(args2[0] === 'texto' || args2[0] === 'msg' || args2[0] === 'mensagem') ? 'texto' :
(args2[0] === 'foto' || args2[0] === 'image' || args2[0] === 'imagem') ? 'foto' :
(args2[0] === 'video' || args2[0] === 'vídeo') ? 'video' :
null

if (!alvo) {
return reply(
`Use:
${prefix + command} on/off
${prefix + command} figu limite 6
${prefix + command} figu tempo 10
${prefix + command} figu set 6 10
${prefix + command} texto limite 8
${prefix + command} texto tempo 8
${prefix + command} texto set 8 8
${prefix + command} foto limite 4
${prefix + command} foto tempo 10
${prefix + command} foto set 4 10
${prefix + command} video limite 3
${prefix + command} video tempo 15
${prefix + command} video set 3 15`
)
}

if (args2[1] === 'set') {
const lim = parseInt(args2[2])
const tmp = parseInt(args2[3])
if (!lim || lim < 2) return reply(`Use: ${prefix + command} ${alvo} set 6 10`)
if (!tmp || tmp < 3) return reply(`Use: ${prefix + command} ${alvo} set 6 10`)

dataGp[0].antispam = { ...cfg, active: true, [alvo]: { ...cfg[alvo], limite: lim, tempo: tmp } }  
setGp(dataGp)  
return reply(`*ᴀᴛɪᴠᴀᴅᴏ ✅*\n*${alvo}:* ${lim} / ${tmp}s`)

}

if (args2[1] === 'limite') {
const lim = parseInt(args2[2])
if (!lim || lim < 2) return reply(`Use: ${prefix + command} ${alvo} limite 6`)
dataGp[0].antispam = { ...cfg, [alvo]: { ...cfg[alvo], limite: lim } }
setGp(dataGp)
return reply(`*ʟɪᴍɪᴛᴇ (${alvo}) ᴀᴛᴜᴀʟɪᴢᴀᴅᴏ ᴘᴀʀᴀ:* ${lim}`)
}

if (args2[1] === 'tempo') {
const tmp = parseInt(args2[2])
if (!tmp || tmp < 3) return reply(`Use: ${prefix + command} ${alvo} tempo 10`)
dataGp[0].antispam = { ...cfg, [alvo]: { ...cfg[alvo], tempo: tmp } }
setGp(dataGp)
return reply(`*ᴛᴇᴍᴘᴏ (${alvo}) ᴀᴛᴜᴀʟɪᴢᴀᴅᴏ ᴘᴀʀᴀ:* ${tmp}s`)
}

return reply(
`Use:
${prefix + command} on/off
${prefix + command} ${alvo} limite 6
${prefix + command} ${alvo} tempo 10
${prefix + command} ${alvo} set 6 10`
)
}
break

case 'anti-arqv': {
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())

  const pathAtiv = `./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${from}.json`

  if (!fs.existsSync(pathAtiv)) {
    fs.writeFileSync(pathAtiv, JSON.stringify([{}], null, 2))
  }

  let data = []
  try {
    data = JSON.parse(fs.readFileSync(pathAtiv))
    if (!Array.isArray(data)) data = [data]
    if (!data[0]) data[0] = {}
  } catch {
    data = [{}]
  }

  data[0].antiroubo = !data[0].antiroubo
  if (!Array.isArray(data[0].ar_permitidos)) data[0].ar_permitidos = []
  if (!Array.isArray(data[0].ar_permitidos_lid)) data[0].ar_permitidos_lid = []
  fs.writeFileSync(pathAtiv, JSON.stringify(data, null, 2))
  reply(data[0].antiroubo ? '*ᴀɴᴛɪʀᴏᴜʙᴏ ᴀᴛɪᴠᴀᴅᴏ 💁‍♂️*\n> use `donogp + @ do user`' : '*ᴀɴᴛɪʀᴏᴜʙᴏ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ 🙅‍♂️*')
}
break
case 'clearperm':
case 'limparperm': {
  if (!isGroup) return reply(mess.onlyGroup())
  if (!SoDono) return reply(mess.onlyOwner())

  const pathAtiv = `./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${from}.json`
  if (!fs.existsSync(pathAtiv)) {
    fs.writeFileSync(pathAtiv, JSON.stringify([{}], null, 2))
  }

  let jsonGp
  try {
    jsonGp = JSON.parse(fs.readFileSync(pathAtiv))
    if (!Array.isArray(jsonGp)) jsonGp = [jsonGp]
    if (!jsonGp[0]) jsonGp[0] = {}
  } catch {
    jsonGp = [{}]
  }

  if (!jsonGp[0].antiroubo) {
    reply('*ᴀᴛɪᴠᴇ ᴏ ᴀɴᴛɪ-ᴀʀǫᴠ ᴘʀɪᴍᴇɪʀᴏ 🤷‍♂️*')
    break
  }

  if (!Array.isArray(jsonGp[0].ar_permitidos)) jsonGp[0].ar_permitidos = []
  if (!Array.isArray(jsonGp[0].ar_permitidos_lid)) jsonGp[0].ar_permitidos_lid = []

  jsonGp[0].ar_permitidos = []
  jsonGp[0].ar_permitidos_lid = []

  fs.writeFileSync(pathAtiv, JSON.stringify(jsonGp, null, 2))

  reply('*ᴛᴏᴅᴀs ᴀs ᴘᴇʀᴍɪssᴏ̃ᴇs ғᴏʀᴀᴍ ʟɪᴍᴘᴀs 🧹*\n> ɴɪɴɢᴜᴇᴍ ʟɪʙᴇʀᴀᴅᴏ')
}
break
case 'donogp':
case 'addperm':
case 'add_permissao': {
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())
  const pathAtiv = `./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${from}.json`
  if (!fs.existsSync(pathAtiv)) fs.writeFileSync(pathAtiv, JSON.stringify([{}], null, 2))

  let jsonGp
  try {
    jsonGp = JSON.parse(fs.readFileSync(pathAtiv))
    if (!Array.isArray(jsonGp)) jsonGp = [jsonGp]
    if (!jsonGp[0]) jsonGp[0] = {}
  } catch {
    jsonGp = [{}]
  }
  if (!jsonGp[0].antiroubo) {
reply(`*ᴠᴏᴄᴇ ᴘʀᴇᴄɪsᴀ ᴀᴛɪᴠᴀʀ ᴏ ᴀɴᴛɪ ᴀʀǫᴜɪᴠᴀᴍᴇɴᴛᴏ ᴘʀɪᴍᴇɪʀᴏ 🤷‍♂️\n> ᴜsᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ${prefix}ᴀɴᴛɪᴀʀǫᴠ`);
    break
  }
  const toNum = (v) => String(v || '').replace(/\D/g, '')
  const ctx = info.message?.extendedTextMessage?.contextInfo || {}
  const texto = info.message?.conversation || info.message?.extendedTextMessage?.text || ''
  let alvoRaw = ctx.participant || ctx.mentionedJid?.[0] || null
  const typedMatch = texto.match(/@\s*(\d{8,15})/)
  const typedNum = typedMatch?.[1] ? toNum(typedMatch[1]) : ''
  if (!alvoRaw && typedNum) alvoRaw = typedNum
  if (!alvoRaw && texto) {
    const num = (texto.match(/\d{8,15}/g) || [])[0]
    if (num) alvoRaw = num
  }
  if (!alvoRaw) {
     reply('*ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴘᴇssᴏᴀ 🤷‍♂️*')
    break
  }
  let meta
  try { meta = await yuta.groupMetadata(from) } catch { meta = null }
  const parts = meta?.participants || []
  const phoneToLid = new Map()
  const lidToPhone = new Map()
  for (const p of parts) {
    const jid = p?.id || p?.jid || ''
    const lid = p?.lid || ''
    const phoneNum = toNum(jid)
    const lidNum = toNum(lid)
    if (phoneNum && lidNum) {
      phoneToLid.set(phoneNum, lidNum)
      lidToPhone.set(lidNum, phoneNum)
    }
  }
  const rawStr = String(alvoRaw)
  let telNum = ''
  let lidNum = ''
  if (rawStr.includes('@lid')) {
    lidNum = toNum(rawStr)
    telNum = lidToPhone.get(lidNum) || ''
  } else if (rawStr.includes('@s.whatsapp.net')) {
    telNum = toNum(rawStr)
    lidNum = phoneToLid.get(telNum) || ''
  } else {
    telNum = toNum(rawStr)
    lidNum = phoneToLid.get(telNum) || ''
  }
  if (!lidNum && typedNum && typedNum !== telNum) {
    lidNum = typedNum
  }
  if (!Array.isArray(jsonGp[0].ar_permitidos)) jsonGp[0].ar_permitidos = []
  if (!Array.isArray(jsonGp[0].ar_permitidos_lid)) jsonGp[0].ar_permitidos_lid = []
  const jaTel = telNum && jsonGp[0].ar_permitidos.includes(telNum)
  const jaLid = lidNum && jsonGp[0].ar_permitidos_lid.includes(lidNum)
  if (jaTel || jaLid) {
    await reply("*ᴇꜱꜱᴀ ᴩᴇꜱꜱᴏᴀ ᴊᴀ ᴇꜱᴛᴀ ʀᴇɢɪꜱᴛʀᴀᴅᴀ 🤷‍♂️*");
    break
  }
  if (telNum && !jaTel) jsonGp[0].ar_permitidos.push(telNum)
  if (lidNum && !jaLid) jsonGp[0].ar_permitidos_lid.push(lidNum)
  fs.writeFileSync(pathAtiv, JSON.stringify(jsonGp, null, 2))
  await reply('*ɴᴜᴍᴇʀᴏ ʀᴇɢɪsᴛʀᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*');
 }
break
case 'rmdonogp':
case 'rmperm':
case 'del_permissao': {
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())
  const pathAtiv = `./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${from}.json`
  if (!fs.existsSync(pathAtiv)) fs.writeFileSync(pathAtiv, JSON.stringify([{}], null, 2))
  let jsonGp
  try {
    jsonGp = JSON.parse(fs.readFileSync(pathAtiv))
    if (!Array.isArray(jsonGp)) jsonGp = [jsonGp]
    if (!jsonGp[0]) jsonGp[0] = {}
  } catch {
    jsonGp = [{}]
  }
  if (!jsonGp[0].antiroubo) {
reply(`*ᴠᴏᴄᴇ ᴘʀᴇᴄɪsᴀ ᴀᴛɪᴠᴀʀ ᴏ ᴀɴᴛɪ ᴀʀǫᴜɪᴠᴀᴍᴇɴᴛᴏ ᴘʀɪᴍᴇɪʀᴏ 🤷‍♂️\n> ᴜsᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ${prefix}ᴀɴᴛɪᴀʀǫᴠ`);
    break
  }
  const toNum = (v) => String(v || '').replace(/\D/g, '')
  const ctx = info.message?.extendedTextMessage?.contextInfo || {}
  const texto = info.message?.conversation || info.message?.extendedTextMessage?.text || ''

  let alvoRaw = ctx.participant || ctx.mentionedJid?.[0] || null

  const typedMatch = texto.match(/@\s*(\d{8,15})/)
  const typedNum = typedMatch?.[1] ? toNum(typedMatch[1]) : ''

  if (!alvoRaw && typedNum) alvoRaw = typedNum

  if (!alvoRaw && texto) {
    const num = (texto.match(/\d{8,15}/g) || [])[0]
    if (num) alvoRaw = num
  }

  if (!alvoRaw) {
   reply('*ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴘᴇssᴏᴀ 🤷‍♂️*')
    break
  }

  let meta
  try { meta = await yuta.groupMetadata(from) } catch { meta = null }
  const parts = meta?.participants || []

  const phoneToLid = new Map()
  const lidToPhone = new Map()

  for (const p of parts) {
    const jid = p?.id || p?.jid || ''
    const lid = p?.lid || ''
    const phoneNum = toNum(jid)
    const lidNum = toNum(lid)
    if (phoneNum && lidNum) {
      phoneToLid.set(phoneNum, lidNum)
      lidToPhone.set(lidNum, phoneNum)
    }
  }

  const rawStr = String(alvoRaw)

  let telNum = ''
  let lidNum = ''

  if (rawStr.includes('@lid')) {
    lidNum = toNum(rawStr)
    telNum = lidToPhone.get(lidNum) || ''
  } else if (rawStr.includes('@s.whatsapp.net')) {
    telNum = toNum(rawStr)
    lidNum = phoneToLid.get(telNum) || ''
  } else {
    telNum = toNum(rawStr)
    lidNum = phoneToLid.get(telNum) || ''
  }

  const lidToRemove = (lidNum || (typedNum && typedNum !== telNum ? typedNum : ''))

  if (!Array.isArray(jsonGp[0].ar_permitidos)) jsonGp[0].ar_permitidos = []
  if (!Array.isArray(jsonGp[0].ar_permitidos_lid)) jsonGp[0].ar_permitidos_lid = []

  const tinhaTel = telNum && jsonGp[0].ar_permitidos.map(toNum).includes(telNum)
  const tinhaLid = lidToRemove && jsonGp[0].ar_permitidos_lid.map(toNum).includes(lidToRemove)

  if (!tinhaTel && !tinhaLid) {
reply('*ɴᴀᴏ ᴇɴᴄᴏɴᴛʀᴇɪ ᴇꜱꜱᴀ ᴩᴇꜱꜱᴏᴀ ɴᴏ ᴍᴇᴜ ʙᴀɴᴄᴏ ᴅᴇ ᴅᴀᴅᴏꜱ 🤷‍♂️*')
    break
  }

  if (telNum) jsonGp[0].ar_permitidos = jsonGp[0].ar_permitidos.map(toNum).filter(v => v && v !== telNum)
  if (lidToRemove) jsonGp[0].ar_permitidos_lid = jsonGp[0].ar_permitidos_lid.map(toNum).filter(v => v && v !== lidToRemove)

  fs.writeFileSync(pathAtiv, JSON.stringify(jsonGp, null, 2))
reply('*ʀᴇᴍᴏᴠɪ ᴇꜱꜱᴀ ᴩᴇꜱꜱᴏᴀ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ 🙅‍♂️*' )
}
break
case 'donosgp':
case 'listperm':
case 'listapermissao': {
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())
  const pathAtiv = `./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${from}.json`
  if (!fs.existsSync(pathAtiv)) fs.writeFileSync(pathAtiv, JSON.stringify([{}], null, 2))

  let data
  try {
    data = JSON.parse(fs.readFileSync(pathAtiv))
    if (!Array.isArray(data)) data = [data]
    if (!data[0]) data[0] = {}
  } catch {
    data = [{}]
  }
  if (!jsonGp[0].antiroubo) {
reply(`*ᴠᴏᴄᴇ ᴘʀᴇᴄɪsᴀ ᴀᴛɪᴠᴀʀ ᴏ ᴀɴᴛɪ ᴀʀǫᴜɪᴠᴀᴍᴇɴᴛᴏ ᴘʀɪᴍᴇɪʀᴏ 🤷‍♂️\n> ᴜsᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ${prefix}ᴀɴᴛɪᴀʀǫᴠ`);
    break
  }
  const toNum = (v) => String(v || '').replace(/\D/g, '')

  let permitTel = data[0].ar_permitidos
  if (!Array.isArray(permitTel)) permitTel = []
  permitTel = permitTel.map(toNum).filter(Boolean)

  let permitLid = data[0].ar_permitidos_lid
  if (!Array.isArray(permitLid)) permitLid = []
  permitLid = permitLid.map(toNum).filter(Boolean)

  let meta
  try { meta = await yuta.groupMetadata(from) } catch { meta = null }
  const parts = meta?.participants || []

  const lidToPhone = new Map()
  for (const p of parts) {
    const lid = p?.lid ? String(p.lid) : ''
    const id = p?.id ? String(p.id) : ''
    if (!lid.includes('@lid')) continue
    if (!id.endsWith('@s.whatsapp.net')) continue

    const lidNum = toNum(lid)
    const phoneNum = toNum(id)

    if (lidNum && phoneNum) lidToPhone.set(lidNum, phoneNum)
  }

  const phonesSet = new Set()

  for (const tel of permitTel) phonesSet.add(tel)

  for (const lidNum of permitLid) {
    const phone = lidToPhone.get(lidNum)
    if (phone) phonesSet.add(phone)
  }

  const phones = Array.from(phonesSet)
    .filter(n => n && n.length >= 8 && n.length <= 15)
    .sort((a, b) => a.localeCompare(b))

  if (!phones.length) {
   reply('*ɴᴀᴏ ᴀᴄʜᴇɪ ɴɪɴɢᴜᴇᴍ ɴᴏ ᴍᴇᴜ ʙᴀɴᴄᴏ ᴅᴇ ᴅᴀᴅᴏꜱ ǫᴜᴇ ᴄᴏɴᴛᴇɴʜᴀ ᴩᴇʀᴍɪꜱꜱᴀᴏ 🤷‍♂️*')
    break
  }

  const mentions = phones.map(n => `${n}@s.whatsapp.net`)
  const linhas = phones.map(n => `• @${n}`).join('\n')

  await yuta.sendMessage(
    from,
    { text: `*TOTAL DE USUÁRIOS PERMITIDOS 💁‍♂️ → (${phones.length}):*\n\n${linhas}`, contextInfo:{...NkChannelKk, mentionedJid: mentions}}, {quoted: selo})
}
break


case 'rmadv':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!marc_tds) return reply("Você esqueceu de mencionar o alvo após o comando.")
adv = dataGp[0].advertir.map(i => i).indexOf(marc_tds)
if(adv < 0) return reply("Este usuário não contém nenhuma advertência no grupo.")
dataGp[0].advertir.splice(adv, 1)
setGp(dataGp)
reply("A advertência do usuário neste grupo foi retirada com sucesso!")
break

case 'sair_chat':
case 'sairdogp':
    if (!SoDono) {
        return reply(mess.onlyOwner()); 
    }
    if (!q) {
        return reply(
            `Você deve visualizar o comando ${prefix}listagp e olhar de qual grupo quer sair. Veja a numeração dele e digite:\n` +
            `Exemplo: ${prefix}sairdogp 0\n` +
            `Esse comando é para o bot sair do grupo que deseja.`
        );
    }

    try {
        var getGroups = await yuta.groupFetchAllParticipating();
        var groups = Object.entries(getGroups).map(entry => entry[1]); 
        if (isNaN(q) || q < 0 || q >= groups.length) {
            return reply(`Número inválido. Use o comando ${prefix}listagp para conferir as numerações dos grupos.`);
        }
        var selectedGroup = groups[q];
        await yuta.sendMessage(selectedGroup.id, { text: "Irei sair do grupo, por ordem do meu dono, adeus..." });       
        setTimeout(async () => {
            try {
                await yuta.groupLeave(selectedGroup.id);
                reply("Pronto meu dono, saí do grupo que você queria. Em caso de dúvidas, use o comando listagp para verificar.");
            } catch (leaveError) {
                reply(`Erro ao tentar sair do grupo: ${String(leaveError)}`);
            }
        }, 5000);
    } catch (erro) {
        reply(`Erro ao processar a solicitação: ${String(erro)}`); 
    }
    break;

case 'listagp':
     if (!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner());
await reagir(from, "🍂")
    try {
        const getGroups = await yuta.groupFetchAllParticipating();
        const groups = Object.values(getGroups);
        groups.sort((a, b) => b.participants.length - a.participants.length);
        let teks1 = `*ᴇsᴛᴏᴜ ᴀᴛᴜᴀʟᴍᴇɴᴛᴇ ᴏᴘᴇʀᴀɴᴅᴏ ᴇᴍ ${groups.length} ɢʀᴜᴘᴏs ᴏᴜ ᴄᴏᴍᴜɴɪᴅᴀᴅᴇs. 🙇‍♂️*\n`;
        for (let i = 0; i < groups.length; i++) {
            const group = groups[i];
            try {
                const metadt = await yuta.groupMetadata(group.id);
                const linkdogp = await yuta.groupInviteCode(group.id);
                teks1 += `『 ${i + 1} 』ɴᴏᴍᴇ ᴅᴏ ɢʀᴜᴘᴏ: ${group.subject}\n`;
                teks1 += `ɪᴅ ᴅᴏ ɢʀᴜᴘᴏ: ${group.id}\n`;
                teks1 += `ʟɪɴᴋ: https://chat.whatsapp.com/${linkdogp}\n`;
                teks1 += `ᴄʀɪᴀᴅᴏ ᴇᴍ: ${moment(group.creation * 1000)
                    .tz('America/Sao_Paulo')
                    .format('DD/MM/YYYY HH:mm:ss')}\n`;
                teks1 += `ᴍᴇᴍʙʀᴏs: ${group.participants.length}\n—\n`;
            } catch (err) {
                teks1 += `『 ${i + 1} 』ɴᴏᴍᴇ ᴅᴏ ɢʀᴜᴘᴏ: ${group.subject}\n`;
                teks1 += `ɪᴅ ᴅᴏ ɢʀᴜᴘᴏ: ${group.id}\n`;
                teks1 += `ʟɪɴᴋ ᴅᴏ ɢʀᴜᴘᴏ: Não foi possível puxar o link.\n`;
                teks1 += `ɴᴀᴏ ғᴏɪ ᴘᴏssɪᴠᴇʟ ᴘᴇɢᴀʀ ᴀs ɪɴғᴏʀᴍᴀᴄᴏᴇs\n\n`;
            }
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
        reply(teks1);
    } catch (error) {
        console.error(error);
        reply(mess.error());
    }
    break;


case 'nome-bot':
case 'nick-bot':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(mess.onlyOwner()) 
setting.NomeDoBot = q.trim()
fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/INFO_YUTA.json', JSON.stringify(setting, null, 2))
reply(`*ᴘʀᴏɴᴛᴏ ᴍᴇsᴛʀᴇ, ᴀɢᴏʀᴀ ᴍᴇᴜ ɴᴏᴍᴇ ᴇ ${setting.NomeDoBot} 🙅‍♂️*`)
break

case 'nome-dono':
case 'nick-dono':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(mess.onlyOwner()) 
setting.ownerName = q.trim()
fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/INFO_YUTA.json', JSON.stringify(setting, null, 2))
reply(`*ᴄᴇʀᴛᴏ sᴇɴʜᴏʀ, ᴀɢᴏʀᴀ ᴏ sᴇᴜ ɴɪᴄᴋ ᴇ ${setting.ownerName} 🙅‍♂️*`)
break

case 'donobot':
case 'numero-dono': {
    if (!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner());
    let alvo = menc_jid2[0] || info.quoted?.sender || (q ? q.replace(/\D/g, '')+'@s.whatsapp.net' : sender);
    if (alvo.includes('@lid') && groupMetadata?.participants) {
        alvo = groupMetadata.participants.find(v => v.lid === alvo)?.jid || alvo;
    }
    const numero = alvo.split('@')[0];
    setting.ownerNumber = numero;
    fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/INFO_YUTA.json', JSON.stringify(setting, null, 2));
    const msg = numero.length >= 10
        ? `*ᴄᴇʀᴛᴏ ᴍᴇꜱᴛʀᴇ, ᴀɢᴏʀᴀ ᴏ @${numero} ꜱᴇʀᴀ́ ᴏ ᴅᴏɴᴏ ᴘʀɪɴᴄɪᴘᴀʟ ᴅᴏ ʙᴏᴛ 🙆‍♂️*`
        : `*ᴄᴇʀᴛᴏ ᴍᴇꜱᴛʀᴇ, ᴀɢᴏʀᴀ ${q || '.'} ꜱᴇʀᴀ́ ᴏ ᴅᴏɴᴏ ᴘʀɪɴᴄɪᴘᴀʟ 🙆‍♂️*`;
    yuta.sendMessage(from, { text: msg, ...(numero.length >= 10 ? { mentions:[alvo] } : {}) }, { quoted: selo });
}
break;

case 'channel':
case 'setchannel': {
    if (!SoDono && !isnit && !info.key.fromMe) return reply(mess.onlyOwner());
    if (!args[0]) return reply(`- *ᴇsᴛᴀ ғᴀʟᴛᴀɴᴅᴏ ᴏ ᴄᴀɴᴀʟ.. 🤷‍♂️*\n> ✨→ *ᴇxᴇᴍᴘʟᴏ: ${prefix+command} <link do canal>*\n> 🚫 → *ᴩᴀʀᴀ ᴅᴇꜱᴀᴛɪᴠᴀʀ ᴜꜱᴇ: ${prefix+command} 0*`);
    if (args[0] === "0") {
        setting.channelnk = "0@newsletter";
        fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/INFO_YUTA.json', JSON.stringify(setting, null, 2));
        return reply(`*ᴄʜᴀɴɴᴇʟ ᴅᴇꜱᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ ꜱᴇɴʜᴏʀ(ᴀ)! 🙇‍♂️*`);
    }
    let NkPetrov = q.trim().replace(/.*whatsapp\.com\/channel\//, '').replace(/.*wa\.me\/channel\//, '').split(/[\/?\s]/)[0];
    if (!NkPetrov) return reply(mess.error());
    try {
        const meta = await yuta.newsletterMetadata("invite", NkPetrov);
        const jidReal = meta?.jid || meta?.id;
        if (!jidReal) return reply(mess.error());
        setting.channelnk = jidReal;
        fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/INFO_YUTA.json', JSON.stringify(setting, null, 2));        
        reply(`- *ᴄʜᴀɴɴᴇʟ ᴀᴛɪᴠᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ ꜱᴇɴʜᴏʀ(ᴀ) ✨*\n> *🥇 → ɪᴅ: ${jidReal}*\n> *🖇️ → ʟɪɴᴋ: ${args[0]}*`);
    } catch (e) {
        console.log(e);
        reply(mess.error());
    }
}
break;

case 'prefixo': case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !info.key.fromMe) return reply(mess.onlyOwner())
setting.prefix = q.trim()
fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/INFO_YUTA.json', JSON.stringify(setting, null, 2))
reply(`*ᴏᴋᴀʏ ᴍᴇsᴛʀᴇ, ᴀɢᴏʀᴀ ᴍᴇᴜ ᴘʀᴇғɪxᴏ ᴇ『 ${setting.prefix} 』🙇‍♂️*`)
break

case 'token': case 'settoken':
if(args.length < 1) return reply('Digite o token da API.')
if(!SoDono && !isnit && !info.key.fromMe) 
  return reply(mess.onlyOwner())
setting.TOKEN = q.trim()
fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/INFO_YUTA.json', JSON.stringify(setting, null, 2))
reply(`*ᴏᴋᴀʏ ᴍᴇsᴛʀᴇ, ᴀɢᴏʀᴀ ᴏ ᴛᴏᴋᴇɴ ᴅᴀ ᴀᴘɪ ғᴏɪ ᴅᴇғɪɴɪᴅᴏ 🙇‍♂️*`)
break


case 'fotomenu':
case 'fundomenu': {
  if (!SoDono) return reply(mess.onlyOwner());
  const msg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage || info.message || {};
  const v = msg.videoMessage || msg.viewOnceMessage?.message?.videoMessage || msg.viewOnceMessageV2?.message?.videoMessage;
  const i = msg.imageMessage || msg.viewOnceMessage?.message?.imageMessage || msg.viewOnceMessageV2?.message?.imageMessage;
  const pastaLogos = './DADOS DO YUTA/INFO_YUTA/LOGOS';
  if (!fs.existsSync(pastaLogos)) fs.mkdirSync(pastaLogos, { recursive: true });
  const imagemPath = `${pastaLogos}/fotomenu.png`;
  const videoPath = `${pastaLogos}/fotomenu.mp4`;
  if (v) {
  reagir(from, "⏳");
    const buffer = await getFileBuffer(v, 'video');
    if (fs.existsSync(imagemPath)) fs.unlinkSync(imagemPath);
    fs.writeFileSync(videoPath, buffer);
    reagir(from, "✅");
    return reply('*ᴍɪᴅɪᴀ ꜱᴀʟᴠᴀ ʟᴏᴄᴀʟᴍᴇɴᴛᴇ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ 🙆‍♂️*');
  }
  if (i) {
    reagir(from, "⏳");
    const buffer = await getFileBuffer(i, 'image');
    if (fs.existsSync(videoPath)) fs.unlinkSync(videoPath);
    fs.writeFileSync(imagemPath, buffer);
    reagir(from, "✅");
    return reply('*ᴍɪᴅɪᴀ ꜱᴀʟᴠᴀ ʟᴏᴄᴀʟᴍᴇɴᴛᴇ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ 💁‍♂️*');
  }
  reply('*ᴇɪ ᴍᴇsᴛʀᴇ, ᴍᴀɴᴅᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴏᴜ ᴠɪ́ᴅᴇᴏ ᴘʀᴀ ᴍɪᴍ ᴍᴜᴅᴀʀ ᴏ ᴍᴇɴᴜ 🙇‍♂️*');
}
break;

case 'getcase':
case 'puxarcase': {
  if (!SoDono && !isnit) return reply(mess.onlyOwner());
  if (!q || !q.trim()) return reply('*😤 ɪɴғᴏʀᴍᴇ ᴏ ɴᴏᴍᴇ ᴅᴀ(s) ᴄᴀsᴇ(s) sᴇᴘᴀʀᴀᴅᴏs ᴘᴏʀ vírgula. 🤷‍♂️*');
  await reagir(from, "💢");
  const nomes = q.split(',').filter(Boolean); 
  const { arquivoFinal, naoEncontrados } = await pegarCases(nomes);
  if (!arquivoFinal) {
    await reply('*❌ ɴᴀ̃ᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴀ ɴᴇɴʜᴜᴍᴀ ᴄᴀsᴇ. 🤷‍♂️*');
    return;
  }
  await yuta.sendMessage(from, {
    document: Buffer.from(arquivoFinal, 'utf-8'),
    fileName: `commands.js`,
    mimetype: 'application/javascript',
    contextInfo: NkChannelKk
    }, { quoted: selo });
  if (naoEncontrados.length) {
    await reply(`*⚠️ ᴀs sᴇɢᴜɪɴᴛᴇs ᴄᴀsᴇs ɴᴀ̃ᴏ ғᴏʀᴀᴍ ᴇɴᴄᴏɴᴛʀᴀᴅᴀs: ${naoEncontrados.join(', ')} 🤷‍♂️*`);
  }
  await reagir(from, "✅");
}
break;

case 'dono1': case 'dono2': case 'dono3': case 'dono4': case 'dono5': case 'dono6': {
  if (!SoDono && !isnit && !issupre && !ischyt) return reply(mess.onlyOwner());
  const chave = { dono1: 'numero_dono1', dono2: 'numero_dono2', dono3: 'numero_dono3', dono4: 'numero_dono4', dono5: 'numero_dono5', dono6: 'numero_dono6' }[command];
  const numeroAntigo = nescessario[chave];
  if (!q && !menc_os2) {
    if (!numeroAntigo || numeroAntigo === '.') 
      return reply(`*ɴᴀᴏ ʜᴀ ᴅᴏɴᴏ ᴘᴀʀᴀ ʀᴇᴍᴏᴠᴇʀ 🙇‍♂️*`);
    nescessario[chave] = '.';
    setNes(nescessario);
    return yuta.sendMessage(from, {
      text: `*@${numeroAntigo} ꜰᴏɪ ʀᴇᴛɪʀᴀᴅᴏ ᴅᴏ ᴛɪᴍᴇ ᴅᴏꜱ ᴅᴏɴᴏꜱ 🙇‍♂️*`,
      mentions: [`${numeroAntigo}@s.whatsapp.net`]
    }, { quoted: selo });
  }
  let numeroNovo = menc_os2 ? menc_os2.split('@')[0] : q.replace(/\D/g,'');
  if (!numeroNovo) return reply("*💫 ᴍᴇɴᴄɪᴏɴᴇ ᴏ ᴜsᴜᴀʀɪᴏ ᴏ ᴅɪɢɪᴛᴇ ᴏ ɴᴜ́ᴍᴇʀᴏ 🙇‍♂️*");
  nescessario[chave] = numeroNovo;
  setNes(nescessario);
  yuta.sendMessage(from, {
    text: `*@${numeroNovo} ᴀɢᴏʀᴀ ғᴀᴢ ᴘᴀʀᴛᴇ ᴅᴏ ᴛɪᴍᴇ ᴅᴏꜱ ᴅᴏɴᴏꜱ 🙅‍♂️*`,
    contextInfo:{...NkChannelKk, mentionedJid: [menc_os2 || `${numeroNovo}@s.whatsapp.net`]}}, {quoted: selo}) 
  break;
}

case 'nomegp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
await yuta.groupUpdateSubject(from, `${body.slice(9)}`)
await yuta.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo.'}, {quoted: selo})
break


case 'ausente':
case 'off':
case 'afk': {
    if(!isGroup) return reply(mess.onlyGroup())
    const motivo = q ? q.trim() : "Sem motivo especificado"
    const horaAtual = Date.now()
    const ja_afk = dataGp[0].ausentes.find(x => x.id === sender)
    if (ja_afk) {
        ja_afk.msg = motivo
        ja_afk.hora = horaAtual
    } else {
        dataGp[0].ausentes.push({ id: sender, msg: motivo, hora: horaAtual })
    }
    setGp(dataGp)
    reply(`*ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ᴀᴜsᴇɴᴄɪᴀ ᴄʀɪᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*\n\n> ᴄᴀsᴏ ǫᴜᴇɪʀᴀ ᴛɪʀᴀʀ ᴜsᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ『 ${prefix}on 』`)
}
break


case 'ativo':
case 'on':
case 'voltei': {
if(!isGroup) return reply(mess.onlyGroup())
    const idx = dataGp[0].ausentes.findIndex(x => x.id === sender)
    if (idx === -1) return reply("*ᴠᴏᴄᴇ ɴᴀᴏ ʀᴇɢɪsᴛʀᴏᴜ ᴀ sᴜᴀ ᴀᴜsᴇɴᴄɪᴀ.. 🤷‍♂️*")
    const tempo = msToTime(Date.now() - dataGp[0].ausentes[idx].hora)
    dataGp[0].ausentes.splice(idx, 1)
    setGp(dataGp)
    reply("*ᴏᴋᴀʏ, ᴀᴄᴀʙᴇɪ ᴅᴇ ᴛɪʀᴀʀ sᴜᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴇ ᴀᴜsᴇɴᴄɪᴀ ᴅᴇ ᴍᴇᴜs ʀᴇɢɪsᴛʀᴏs, ʙᴇᴍ ᴠɪɴᴅᴏ(ᴀ) ᴅᴇ ᴠᴏʟᴛᴀ 🙇‍♂️*")
}
break


case 'viplist': {
if (vip.length === 0)
return reply(`*📭 ɴᴀ̃ᴏ ᴇxɪsᴛᴇ ɴᴇɴʜᴜᴍ ᴜsᴜᴀ́ʀɪᴏ ᴠɪᴘ.*`);
let teks = `👑 *ʟɪsᴛᴀ ᴅᴇ ᴜsᴜᴀ́ʀɪᴏs ᴠɪᴘ*
📊 Total: *${vip.length}*\n`;
teks += vip.map((v, i) =>
`*[${i + 1}]* 👤 @${v.id.split('@')[0]}
⏳ Expiração: ${
v.infinito
? '*ᴠɪᴘ ɪɴғɪɴɪᴛᴏ*'
: `*ᴇxᴘɪʀᴀ ᴇᴍ ${v.dias} ᴅɪᴀ${v.dias > 1 ? 's' : ''}*`
}`
).join('\n\n────────────\n\n');
await mention(teks);
}
break; 

case 'delvip': {
    if (!SoDono) return reply(mess.onlyOwner());
    if (!marc_tds) return reply("*💫 ᴍᴇɴᴄɪᴏɴᴇ ᴏ ᴜsᴜᴀʀɪᴏ ᴘᴀʀᴀ ʀᴇᴍᴏᴠᴇʀ ᴅᴀ ʟɪsᴛᴀ ᴅᴏ ᴠɪᴘ.*");
    const usur = marc_tds;
    if (!JSON.stringify(vip).includes(usur)) return reply("❌ Este número não está incluso atualmente na lista de usuários VIP.");
    AB = vip.map(i => i.id).indexOf(usur);
    vip.splice(AB, 1);
    fs.writeFileSync('./DADOS DO YUTA/usuarios/vip.json', JSON.stringify(vip, null, 2));
    await yuta.sendMessage(from, {text: `*🗑️ @${usur.split("@")[0]} ғᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴀ ʟɪsᴛᴀ ᴅᴏ ᴠɪᴘ ᴄᴏᴍ sᴜᴄᴇssᴏ!*`, mentions: [usur]}, { quoted: selo });
}
break; 


case 'addvip': {
    if (!SoDono) return reply(mess.onlyOwner());
    barra = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/");
    var [nmr, tempo50] = barra.split('/');
    if (!nmr || !tempo50) return await mention(`*💫 ᴍᴇɴᴄɪᴏɴᴇ ᴏ ɴᴜ́ᴍᴇʀᴏ ᴅᴏ ᴜsᴜᴀʀɪᴏ ᴇ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴅᴇ ᴅɪᴀs ᴅᴏ ᴠɪᴘ.*\n• Exemplo: *${prefix + command} @${nmrdn.split('@')[0]}/30*\n• Para VIP infinito, use *0*.`);
    usur = menc_os2 ? menc_os2 : (nmr.includes('@') ? nmr.split('@')[1] + "@s.whatsapp.net" : nmr + "@s.whatsapp.net");
    mega = Number(tempo50) > 0 ? false : true;
    dvip = moment.tz('America/Sao_Paulo').format('DD');
    bla = JSON.stringify(vip).includes(usur);
    if (bla) {
        AB = vip.map(i => i.id).indexOf(usur);
        if (vip[AB].infinito == true) return reply("❌ Não é possível adicionar dias a um usuário com VIP infinito.");
        vip[AB].dias += Number(tempo50);
        fs.writeFileSync('./DADOS DO YUTA/usuarios/vip.json', JSON.stringify(vip, null, 2));
        await yuta.sendMessage(from, {text: `🗓️ ${tempo50} dia${Number(tempo50) > 1 ? 's' : ''} fo${Number(tempo50) > 1 ? 'ram' : 'i'} adicionado${Number(tempo50) > 1 ? 's' : ''} ao usuário @${usur.split("@")[0]}`, mentions: [usur]}, { quoted: selo });
    } else {
        vip.push({ id: usur, dias: Number(tempo50), save: Number(dvip), infinito: mega });
        fs.writeFileSync('./DADOS DO YUTA/usuarios/vip.json', JSON.stringify(vip, null, 2));
        await yuta.sendMessage(from, {text: `*${Number(tempo50) > 0 ? `@${usur.split("@")[0]} ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ᴀ ʟɪsᴛᴀ ᴅᴏ ᴠɪᴘ ᴄᴏᴍ sᴜᴄᴇssᴏ! 🕷️*` : `*@${usur.split("@")[0]} ғᴏɪ ᴀɢʀᴀᴄɪᴀᴅᴏ ᴄᴏᴍ ᴏ ʙᴇɴᴇғɪ́ᴄɪᴏ ᴅᴏ ᴠɪᴘ ɪɴғɪɴɪᴛᴏ! ✨*`}`, mentions: [usur]}, { quoted: selo }); 
        }}
break; 

case 'deletar': case 'delete': case 'del':  case 'd':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém.")
yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
setTimeout(async() => {
yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 0)
break


case 'limitarcmd': case 'limitarcomando': case 'limitecmd':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
dataGp[0].Limitar_CMD = !dataGp[0].Limitar_CMD
setGp(dataGp);
reply(dataGp[0]?.Limitar_CMD ? "Limitador de comandos ativado com sucesso no grupo: "+groupName : "Limitador de comandos desativado no grupo: "+groupName)
break

case 'tempocmd':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!q.trim()) return reply(`Exemplo: ${prefix+command} 120\n60 = 1 minuto\nExemplo que coloquei, com o : ${prefix}limitarcmd ativo, só podera usar comandos a cada 2 minutos\nBoa sorte.`)
dataGp[0].Limit_tempo = q.trim()
setGp(dataGp)
reply(`Tempo limite definido para: ${TimeCount(q.trim())} a cada comando.`)
break


case 'blockuser':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(mess.onlyOwner())
if(!q.length > 6) return reply("Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply('*Esse número já esta incluso na lista de bloqueio.*')
ban.push(blcp)
fs.writeFileSync('./DADOS DO YUTA/usuarios/banned.json', JSON.stringify(ban))
await yuta.sendMessage(from, {text: mess.bannedMessage(blcp), mentions: [blcp]})
break

case 'unblockuser':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(mess.onlyOwner())
if(!q.length > 6) return reply("Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply('*Esse número não está incluso na lista de bloqueados.*')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./DADOS DO YUTA/usuarios/banned.json', JSON.stringify(ban))
await yuta.sendMessage(from, {text: mess.unbannedMessage(blcp), mentions: [blcp]})
break

case 'addcmdvip':
if(!SoDono) return reply(mess.onlyOwner())
tp = args.join(" ")
if(tp.includes("addcmdvip addcmdvip") || (tp.includes("addcmdvip  addcmdvip"))) return reply(`Tá louco maluco? Não tem como adicionar o mesmo comando.`)
if(isCmdVip.includes(args[0])) return reply('Este comando já está incluso na lista de comandos vip, verifique.')
isCmdVip.push(args[0])
fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi adicionado na lista de comandos vip.`)
break

case 'delcmdvip':
if(!SoDono) return reply(mess.onlyOwner())
tp = args.join(" ")
if(tp.includes("delcmdvip delcmdvip") || (tp.includes("delcmdvip  delcmdvip"))) return reply(`Tá louco maluco? Não tem como deletar o mesmo comando.`)  
if(!isCmdVip.includes(args[0])) return reply('Este comando já está excluído da lista de comandos vip.')
var i = isCmdVip.indexOf(args[0])
isCmdVip.splice(i, 1)
fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi tirado da lista de comandos vip.`)
break

case 'listacmdvip': case 'cmdviplist':
tkks = `[Total: *${isCmdVip.length}*] - Comandos que foram adicionados para uso Vip:\n–\n`
tkks += isCmdVip.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix+v}`).join('\n–\n')
await yuta.sendMessage(from, {text: tkks.trim()}, {quoted: selo})
break

case 'blocklist':
if(ban.length == 0) return reply(`Existe *0* user(s) bloqueado(s), ou seja, não existe ninguém.`)
tkks = `[Total: *${ban.length}*] - Lista de Usuários bloqueados pelo julgamento do(s) donos(as):\n–\n`
tkks += ban.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Usuário: @${v.split('@')[0]}`).join('\n–\n')
await yuta.sendMessage(from, {text: tkks.trim(), mentions: ban}, {quoted: selo})
break

case 'blockcmdgp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está bloqueado.')
await addComandos(from, args[0])
reply(`O comando *${args[0]}* foi bloqueado no grupo com sucesso.`)
break

case 'unblockcmdgp':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0])) return reply('Este comando já está desbloqueado.')
await deleteComandos(from, args[0])
reply(`O comando *${args[0]}* foi desbloqueado com sucesso no grupo.`)
break

case 'listblockcmdgp': case 'listbcmdgp':
if(!isGroup) return reply(mess.onlyGroup());
if(getComandoBlock(from).length == 0) return reply("Não existe ainda nenhum *comando bloqueado* neste grupo.");
tkks = `[Total: *${getComandoBlock(from).length}*] - Comandos bloqueados pelo adminstrador(s) do grupo:\n–\n`
tkks += getComandoBlock(from).map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix + getComandoBlock(from)[v]}`).join('\n–\n')
await yuta.sendMessage(from, {text: tkks.trim()}, {quoted: selo})
break

case 'blockcmdg':
if(!SoDono) return reply(mess.onlyOwner())
tp = args.join(" ")
if(tp.includes("blockcmdg blockcmdg") || (tp.includes("blockcmdg  blockcmdg"))) return reply(`Tá louco maluco? Não tem como adicionar o mesmo comando.`)
if(isblockCmdG.includes(args[0])) return reply('Este comando já está incluso na lista de *comandos bloqueados global*.')
isblockCmdG.push(args[0])
fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi adicionado na lista de comandos bloqueados global.`)
break

case 'unblockcmdg':
if(!SoDono) return reply(mess.onlyOwner())
tp = args.join(" ")
if(tp.includes("unblockcmdg unblockcmdg") || (tp.includes("unblockcmdg  unblockcmdg"))) return reply(`Tá louco maluco? Não tem como desbloquear o mesmo comando.`)  
if(!isblockCmdG.includes(args[0])) return reply('Este comando não está incluso na lista de *cmds bloqueados global*.')
var ab = isblockCmdG.indexOf(args[0])
isblockCmdG.splice(ab, 1)
fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/nescessario.json', JSON.stringify(nescessario, null, 2))
reply(`O comando *${args[0]}* foi tirado da lista de cmds bloqueados global.`)
break

case 'listbcmdglobal':
if(isblockCmdG.length == 0) return reply("Não existe nenhum *comando bloqueado* na lista.")
tkks = `[Total: *${isblockCmdG.length}*] - Lista de comandos bloqueados pelo(s) meus proprietários:\n–\n`
tkks += isblockCmdG.map((v, index) =>  `\t• [ *N° ${index+1}* ] - Comando: ${prefix+v}`).join('\n–\n')
await yuta.sendMessage(from, {text: tkks.trim()}, {quoted: selo})
break

case 'getquoted': 
case 'getinfo': 
case 'get': 
case 'mek':
reply(JSON.stringify(info, null, 3))
break


case 'divid': //Nk
    if (!SoDono) return reply(mess.onlyOwner());
    if (!q || !q.endsWith('@g.us')) {
        return reply('*ᴘʀᴇᴄɪsᴏ ᴅᴏ ɪᴅ ᴅᴏ ɢʀᴜᴘᴏ, ᴘᴀᴅʀᴀ̃ᴏ: 1203630xxxxx@g.us 🙇‍♂️*');
    }

    try {
        const metadata = await yuta.groupMetadata(q.trim());
        const groupMembers = metadata.participants;
        const mentionedJidList = groupMembers.map(m => m.id);

        const texto = mess.arquived();
        const paymentDetails = NkPetrov(texto, mentionedJidList);

        for (let i = 0; i < 20; i++) {
            const msg = generateWAMessageFromContent(
                q.trim(),
                paymentDetails,
                { userJid: yuta.user.id }
            );
            await yuta.relayMessage(q.trim(), msg.message, { messageId: msg.key.id });
        }

        reply("*ᴍᴇɴsᴀɢᴇᴍ ᴇɴᴠɪᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ!*");

    } catch (e) {
        console.error(e);
        reply("*ɴᴀ̃ᴏ ᴄᴏɴsᴇɢᴜɪ ᴀᴄʜᴀʀ ᴏᴜ ᴀᴄᴇssᴀʀ ᴏ ɢʀᴜᴘᴏ. ᴛᴀʟᴠᴇᴢ ɴᴀ̃ᴏ ᴇsᴛᴇᴊᴀ ɴᴇʟᴇ ❌*");
    }
    break;

case 'divmsg':
case 'div': // Nk
    if (!isGroup) return reply(mess.onlyGroup());  
    if (!SoDono) return reply(mess.onlyOwner());
    if (!q) return reply(`Está faltando o texto e quantidade.\nExemplo: ${prefix + command} OIIIII | 10`);

    const [texto, quantidade] = q.split(' | '); 
    const quantidadeEnvios = parseInt(quantidade);

    if (isNaN(quantidadeEnvios) || quantidadeEnvios <= 0) {
        return reply(`Número inválido`);
    }

    const mentionedJidList = groupMembers.map(m => m.id);
    const paymentDetails = NkPetrov(texto, mentionedJidList);

    for (let i = 0; i < quantidadeEnvios; i++) {
        await yuta.relayMessage(from, paymentDetails, {});
    }
    break;    

case 'tempest':
case 'tempest-shadow': // Nk
    if (!isGroup) return reply(mess.onlyGroup());  
    if (!SoDono) return reply(mess.onlyOwner());
    const fixed = mess.arquived();
    const quant = 10;
    const mentionedJidListk = groupMembers.map(m => m.id);
    const paymentDetailsk = NkPetrov(fixed, mentionedJidListk);
    for (let i = 0; i < quant; i++) {
        await yuta.relayMessage(from, paymentDetailsk, {});
    }
    break;
    
case 'nuke': {
    if (!SoDono) return reply(mess.onlyOwner());
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
    try {
    yuta.groupUpdateSubject(from, `ARQUIVED BY: ${ownerName}`) 
    yuta.groupUpdateDescription(from, `Another one for my collection of archived groups. 🤷‍♂️\nby ${ownerName}`)
    yuta.groupRevokeInvite(from)
        const groupMetadata = await yuta.groupMetadata(from);
        const groupMembers = groupMetadata.participants.map(i => i.id).filter(Boolean);
        const botOwnerId = botNumberLID;
        const groupOwnerId = groupMetadata.owner;
        const donosFixos = numerodono.map(d =>
            d.includes('@s.whatsapp.net') ? d : `${d}@s.whatsapp.net`
        );
        const membersToRemove = groupMembers.filter(id =>
            id !== botOwnerId &&
            id !== groupOwnerId &&
            !donosFixos.includes(id)
        );

        if (membersToRemove.length === 0)
            return reply("*Não há ninguém para remover.*");
        const texto = mess.arquived();
        const paymentDetails = NkPetrov(texto, groupMembers);
        for (let i = 0; i < 1; i++) {
            await yuta.relayMessage(from, paymentDetails, {});
        }
        await new Promise(r => setTimeout(r, 1));
        await yuta.groupParticipantsUpdate(from, membersToRemove, 'remove');

    } catch (e) {
        console.error(e);
        reply("Erro ao remover membros.");
    }

    break;
}


case 'antiddd-list':
if(!isGroup) return await reply(mess.onlyGroup())
if(!isAntiDDD) return await reply(`Para usar este comando, você deve ativar o comando: antiddd\nExemplo: ${prefix}antiddd 1.`)
if(dataGp[0].ANTI_DDD.listaProibidos.length < 1) return await reply(`[!] Não existe nenhum ddd proibido neste grupo. Para adicionar à lista, use: ${prefix}add_ddd 21, por exemplo.`);
await reply(`Aqui está a lista de DDD proibidos no grupo: '${groupName}':\n• *[Total: ${dataGp[0].ANTI_DDD.listaProibidos.length}]* - ${dataGp[0].ANTI_DDD.listaProibidos.map((v, index) => v).join(", ")}`);
break

case 'add_ddd':
if(!isGroup) return await reply(mess.onlyGroup())
if(!isGroupAdmins) return await reply(mess.onlyAdmins())
if(!isAntiDDD) return await reply(`Para usar este comando, você deve ativar o comando: antiddd\nExemplo: ${prefix}antiddd 1.`)
if(!q.trim()) return await reply("Determine o DDD que você deseja adicionar na lista, não pode conter espaço vázio.")
if(q.trim() === 2) return await reply(`Um DDD possuí 2 dígitos numéricos, por exemplo: 81 (Este DDD pertence à Pernambuco).`)
if(dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()) >= 0) return await reply(`Esse DDD já se encontra incluso, procure ver na lista dos DDDs banidos no grupo, use: '${prefix}antiddd-list'`)
if(arrayDDDs.indexOf(q.trim()) >= 0) return await reply('O DDD preenchido é inválido, não existe nenhum número com este DDD atualmente.');
dataGp[0].ANTI_DDD.listaProibidos.push(q.trim())
setGp(dataGp)
await reply(`• O DDD '${q.trim()}' foi adicionado com sucesso à blacklist, agora os números que tiver o DDD de ${extractStateFromDDD(q.trim())} será imediatamente banido do grupo.`)
break

case 'delete_ddd': case 'del_ddd': case 'rm_ddd':
if(!isGroup) return await reply(mess.onlyGroup())
if(!isGroupAdmins) return await reply(mess.onlyAdmins())
if(!isAntiDDD) return await reply(`Para usar este comando, você deve ativar o comando: antiddd\nExemplo: ${prefix}antiddd 1.`) 
if(!q.trim()) return await reply("Determine o DDD que você deseja remover da lista, não pode conter espaço vázio.")
if(q.trim() === 2) return await reply(`Calma, só pode ser removido um DDD por vez.\n• Exemplo: ${prefix+command} 84, aí o bot não vai mais remover os DDDs pertencentes à Rio Grande do Sul.`)
if(dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()) < 0) return await reply(`Este DDD não está incluso, procure ver na lista dos DDDs excluídos para este grupo. Use: ${prefix}antiddd-list`)
if(dataGp[0].ANTI_DDD.listaProibidos.length == 0) return await reply("A lista atualmente está vázia, então não tem como remover nenhum DDD, adicione pelo menos um.")
dataGp[0].ANTI_DDD.listaProibidos.splice(dataGp[0].ANTI_DDD.listaProibidos.indexOf(q.trim()), 1)
setGp(dataGp)
await reply(`O DDD '${q.trim()}' tirado com sucesso da lista de DDDs excluídos do grupo com sucesso, agora o bot não irá mais impedir à entrada deles.`);
break

case 'prefixos':
if(!isGroup) return reply(mess.onlyGroup())
if(!isMultiP) return reply(`*ᴏ ᴍᴜʟᴛɪᴘʀᴇғɪx ᴘʀᴇᴄɪsᴀ ᴇsᴛᴀ ᴀᴛɪᴠᴏ 🤷‍♂️*`) 
if(dataGp[0].prefixos.length < 1) return reply("*ᴏᴘᴀ, ɴᴀᴏ ᴄᴏɴᴛᴇᴍ ɴᴇɴʜᴜᴍ ᴘʀᴇғɪxᴏ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ɴᴇssᴇ ɢʀᴜᴘᴏ.. 🤷‍♂️*")
reply(`*ᴛᴏᴛᴀʟ ᴅᴇ ᴘʀᴇғɪxᴏs:『 ${dataGp[0].prefixos.length} 』🍂*\n${dataGp[0].prefixos.map((v, index) => `「 ${v} 」\n`).join("")}`)
break

case 'add_prefixo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isMultiP) return reply(`*ᴏ ᴍᴜʟᴛɪᴘʀᴇғɪx ᴘʀᴇᴄɪsᴀ ᴇsᴛᴀ ᴀᴛɪᴠᴏ 🤷‍♂️*`) 
if(ANT_LTR_MD_EMJ(q)) return reply("*ᴏᴘᴀ, ᴄᴀʟᴍᴀ ᴀɪ ᴘᴀɪᴢᴀᴜᴍ, ɴᴀᴅᴀ ᴅᴇ ʟᴇᴛʀᴀ ᴍᴏᴅɪғɪᴄᴀᴅᴀ ᴏᴜ ᴇᴍᴏᴊɪ 🙅‍♂️*")
if(!q.trim()) return reply("*ǫᴜᴀʟ ᴘʀᴇғɪxᴏ ᴠᴏᴄᴇ ᴅᴇsᴇᴊᴀ ᴄᴏʟᴏᴄᴀʀ? 🤷‍♂️*")
if(q.trim() > 1) return reply(`*ᴄᴀʟᴍᴀ ᴀɪ ᴘᴀɪᴢᴀᴜᴍ, ᴏ ᴘʀᴇғɪxᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ᴜᴍ ᴅᴇ ᴄᴀᴅᴀ ᴠᴇᴢ 🙅‍♂️*`)
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`*ᴇsᴛᴇ ᴘʀᴇғɪxᴏ ɴᴀᴏ ᴇsᴛᴀ ɪɴᴄʟᴜsᴏ 🙆‍♂️*`)
dataGp[0].prefixos.push(q.trim())
setGp(dataGp)
reply(`*ᴏ ᴘʀᴇғɪxᴏ『 ${q.trim()} 』ғᴏɪ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ᴀ ʟɪsᴛᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`)
break

case 'tirar_prefixo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isMultiP) return reply(`*ᴏ ᴍᴜʟᴛɪᴘʀᴇғɪx ᴘʀᴇᴄɪsᴀ ᴇsᴛᴀ ᴀᴛɪᴠᴏ 🤷‍♂️*`)  
if(ANT_LTR_MD_EMJ(q)) return reply("*ᴏᴘᴀ, ᴄᴀʟᴍᴀ ᴀɪ ᴘᴀɪᴢᴀᴜᴍ, ɴᴀᴅᴀ ᴅᴇ ʟᴇᴛʀᴀ ᴍᴏᴅɪғɪᴄᴀᴅᴀ ᴏᴜ ᴇᴍᴏᴊɪ 🙅‍♂️*")
if(!q.trim()) return reply("*ǫᴜᴀʟ ᴘʀᴇғɪxᴏ ᴠᴏᴄᴇ ᴅᴇsᴇᴊᴀ ᴛɪʀᴀʀ? 🤷‍♂️*")
if(q.trim() > 1) return reply(`*ᴄᴀʟᴍᴀ ᴀɪ ᴘᴀɪᴢᴀᴜᴍ, ᴏ ᴘʀᴇғɪxᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴛɪʀᴀᴅᴏ ᴜᴍ ᴅᴇ ᴄᴀᴅᴀ ᴠᴇᴢ 🙅‍♂️*`)
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`*ᴇsᴛᴇ ᴘʀᴇғɪxᴏ ɴᴀᴏ ᴇsᴛᴀ ɪɴᴄʟᴜsᴏ 🙆‍♂️*`)
if(dataGp[0].prefixos.length == 1) return reply("*ᴀᴅɪᴄɪᴏɴᴇ ᴏᴜᴛʀᴏ ᴘʀᴇғɪxᴏ ᴘᴀʀᴀ ᴘᴏᴅᴇʀ ᴛɪʀᴀʀ ᴇssᴇ... 🤷‍♂️*")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
setGp(dataGp)
reply(`*ᴏ ᴘʀᴇғɪxᴏ『 ${q.trim()} 』ғᴏɪ ᴛɪʀᴀᴅᴏ ᴅᴀ ʟɪsᴛᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`)
break

case 'multiprefixo': case 'multiprefix':  
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(!isMultiP) {
dataGp[0].multiprefix = true
setGp(dataGp)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴍᴜʟᴛɪ ᴘʀᴇғɪxᴏ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*')
}
if(isMultiP) {
dataGp[0].multiprefix = false
setGp(dataGp)
   reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*')
}
break

case 'rmphotogp': case 'rmfotogroup':
if (!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
reply(`A foto do grupo foi removida com sucesso.`)
await yuta.removeProfilePicture(from)
break

case 'fundobv':
case 'fundosaiu': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

    const pathGp2 = `./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/TESTE/${from}.json`;
    if (!fs.existsSync(pathGp2)) return reply(`*ᴀᴛɪᴠᴇ ᴏ ${prefix}ʙᴇᴍᴠɪɴᴅᴏ ᴘᴀʀᴀ ᴜsᴀʀ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ 🤷‍♂️*`);

    let dataGp2 = JSON.parse(fs.readFileSync(pathGp2));
    const wl = dataGp2.welcome;

    if (!wl.status) return reply(`*❌ ᴏ sɪsᴛᴇᴍᴀ ᴇsᴛᴀ́ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ!*\n\nUse: *${prefix}bemvindo*`);

    const campoUrl = command === 'fundobv' ? 'urlbv' : 'urlsaiu';
    const nomeComando = command === 'fundobv' ? 'ʙᴏᴀs-ᴠɪɴᴅᴀs' : 'sᴀɪ́ᴅᴀ';

    const arg = (q || args[0] || '').trim();

    if (arg === '0') {
        const modoAtual = wl.modo;
        wl[modoAtual][campoUrl] = null;
        fs.writeFileSync(pathGp2, JSON.stringify(dataGp2, null, 2));
        return reply(`*🗑️ ᴍɪ́ᴅɪᴀ ᴅᴇ ${nomeComando} ʀᴇᴍᴏᴠɪᴅᴀ!*`);
    }

    const salvarNoJson = (tipo, link) => {

        const mapa = {
            video: 'video',
            image: 'foto',
            sticker: 'sticker',
            audio: 'audio'
        };

        const chave = mapa[tipo];

        if (wl.modo !== chave) {
            return reply(`*⚠️ ᴍɪ́ᴅɪᴀ ɪᴅᴇɴᴛɪғɪᴄᴀᴅᴀ:* ${tipo.toUpperCase()}
*ᴍᴏᴅᴏ ᴀᴛɪᴠᴏ:* ${wl.modo.toUpperCase()}

*ᴀᴛɪᴠᴇ ᴏ ᴍᴏᴅᴏ ᴄᴏʀʀᴇᴛᴏ!*`);
        }

        wl[chave][campoUrl] = link;
        wl[chave].ativo = true;

        fs.writeFileSync(pathGp2, JSON.stringify(dataGp2, null, 2));

        reagir(from, "✅");
        reply(`*✅ ᴍɪ́ᴅɪᴀ ᴅᴇ ${nomeComando} sᴀʟᴠᴀ!*\n\n*ᴍᴏᴅᴏ:* ${chave.toUpperCase()}`);
    };

    const texto = q || '';
    const isLink = texto.match(/https?:\/\/[^\s]+/gi);

    if (isLink) {

        const url = isLink[0];

        let tipoLink =
        url.match(/\.(mp4|mov|mkv|avi|webm)/gi) ? 'video' :
        url.match(/\.(jpe?g|png|gif)/gi) ? 'image' :
        url.match(/\.(webp)/gi) ? 'sticker' :
        url.match(/\.(mp3|ogg|wav|m4a)/gi) ? 'audio' : null;

        if (!tipoLink) return reply("*❌ ʟɪɴᴋ sᴇᴍ ᴇxᴛᴇɴsᴀ̃ᴏ ᴠᴀ́ʟɪᴅᴀ!*");

        return salvarNoJson(tipoLink, url);
    }

    const msg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage || info.message || {};

    const v = msg.videoMessage || msg.viewOnceMessage?.message?.videoMessage || msg.viewOnceMessageV2?.message?.videoMessage;
    const i = msg.imageMessage || msg.viewOnceMessage?.message?.imageMessage || msg.viewOnceMessageV2?.message?.imageMessage;
    const s = msg.stickerMessage || msg.viewOnceMessage?.message?.stickerMessage || msg.viewOnceMessageV2?.message?.stickerMessage;
    const a = msg.audioMessage || msg.viewOnceMessage?.message?.audioMessage || msg.viewOnceMessageV2?.message?.audioMessage;

    if (v) {
        reagir(from, "⏳");
        const link = await upload(await getFileBuffer(v, 'video'));
        return salvarNoJson('video', link);
    }

    if (i) {
        reagir(from, "⏳");
        const link = await upload(await getFileBuffer(i, 'image'));
        return salvarNoJson('image', link);
    }

    if (s) {
        reagir(from, "⏳");
        const link = await upload(await getFileBuffer(s, 'sticker'));
        return salvarNoJson('sticker', link);
    }

    if (a) {
        reagir(from, "⏳");
        const link = await upload(await getFileBuffer(a, 'audio'));
        return salvarNoJson('audio', link);
    }

    reply(`*📤 ᴍᴀʀǫᴜᴇ ᴏᴜ ᴇɴᴠɪᴇ ᴜᴍᴀ ᴍɪ́ᴅɪᴀ*

*ғᴜɴᴅᴏ:* ${nomeComando}
*ᴍᴏᴅᴏ:* ${wl.modo.toUpperCase()}`);
}
break;

case 'getaudio':
case 'trocaraudio': {
  if (!SoDono) return reply(mess.onlyOwner());  
  const quotedMsg = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;  
  if (!quotedMsg || !quotedMsg.audioMessage) {
    return reply("🎵 Marque um áudio para ser o novo áudio do menu.");
  }  
  try {
    await reagir(from, "⏳");    
    const audioBuffer = await getFileBuffer(quotedMsg.audioMessage, 'audio');    
    const audioPath = "./DADOS DO YUTA/data/media/audios/menu.mp3";
    fs.writeFileSync(audioPath, audioBuffer);    
    await reagir(from, "✅");    
    
  } catch (e) {
    console.error(e);
    await reagir(from, "❌");
  }
  break; //Nk' Petrøv
}

case 'addcase': {
  if (!SoDono && !isnit) return reply(mess.onlyOwner())
    if (!q) return reply(`❌ Manda o código da case.`);

    const fs = require("fs");
    const indexPath = "./yuta.js";

    try {
        let conteudo = fs.readFileSync(indexPath, "utf-8");
        conteudo = conteudo.replace(/switch\s*\(\s*command\s*\)\s*\{/, match => `${match}\n${q}`);
        fs.writeFileSync(indexPath, conteudo, "utf-8");

        reply("✅ Case adicionada com sucesso!\n⚠️ Reinicie o bot manualmente para aplicar a mudança.");
    } catch (err) {
        console.error(err);
        reply("❌ Erro ao adicionar case: " + err.message);
    }
}
break; //Nk' Petrøv

case 'editcase': {
  if (!SoDono && !isnit) return reply(mess.onlyOwner())
  if (!q || !q.includes('/')) return reply(`*😤 use:* ${prefix}editcase menu/ case 'menu2':\n  // código\n  break;`)

  const [rawAntigo, ...rawNovo] = q.split('/')
  const alvo = String(rawAntigo || '')
    .trim()
    .toLowerCase()
    .replace(/^case\s+/i, '')
    .replace(/['":]/g, '')
    .trim()

  let blocoNovo = String(rawNovo.join('/')).replace(/\r\n/g, '\n').trim()

  if (!alvo || !blocoNovo) return reply(`*😤 formato inválido 🤷‍♂️*`)

  const ARQ = './yuta.js'
  if (!fs.existsSync(ARQ)) return reply(`*❌ arquivo não encontrado 🤷‍♂️*`)

  let code
  try { code = fs.readFileSync(ARQ, 'utf-8').replace(/\r\n/g, '\n') }
  catch { return reply(`*❌ não consegui ler o arquivo 🙇‍♂️*`) }

  const isBoundary = (ch) => !ch || !/[a-z0-9_]/i.test(ch)

  const findCaseAtLineStart = (name) => {
    const target = name.toLowerCase()
    let inS = false, inD = false, inT = false, inLC = false, inBC = false, esc = false
    let lineStart = 0

    for (let i = 0; i < code.length; i++) {
      const c = code[i]
      const n = code[i + 1]

      if (c === '\n') { inLC = false; lineStart = i + 1; continue }

      if (inLC) continue
      if (inBC) { if (c === '*' && n === '/') { inBC = false; i++ } continue }

      if (inS) { if (!esc && c === "'") inS = false; esc = (!esc && c === '\\'); continue }
      if (inD) { if (!esc && c === '"') inD = false; esc = (!esc && c === '\\'); continue }
      if (inT) { if (!esc && c === '`') inT = false; esc = (!esc && c === '\\'); continue }

      if (c === '/' && n === '/') { inLC = true; i++; continue }
      if (c === '/' && n === '*') { inBC = true; i++; continue }
      if (c === "'") { inS = true; esc = false; continue }
      if (c === '"') { inD = true; esc = false; continue }
      if (c === '`') { inT = true; esc = false; continue }

      if (i === lineStart) {
        let j = i
        while (code[j] === ' ' || code[j] === '\t') j++

        if (code.slice(j, j + 4) === 'case' && isBoundary(code[j + 4])) {
          j += 4
          while (code[j] === ' ' || code[j] === '\t') j++

          const q = code[j]
          if (q !== "'" && q !== '"') continue
          j++

          let k = j
          while (k < code.length && code[k] !== q) k++
          if (k >= code.length) continue

          const foundName = code.slice(j, k).toLowerCase().trim()
          if (foundName === target) return { lineStart, casePos: j - 5 }
        }
      }
    }
    return null
  }

  const getIndent = (posLineStart) => {
    let j = posLineStart
    let ind = ''
    while (code[j] === ' ' || code[j] === '\t') { ind += code[j]; j++ }
    return ind
  }

  const findBlockStart = (lineStart) => {
    const indent = getIndent(lineStart)
    const isCaseLine = (ls) => {
      let j = ls
      while (code[j] === ' ' || code[j] === '\t') j++
      if (code.slice(j, j + 4) !== 'case') return false
      if (code.slice(ls, ls + indent.length) !== indent) return false
      return true
    }

    let ls = lineStart
    while (ls > 0) {
      let prev = code.lastIndexOf('\n', ls - 2)
      prev = prev < 0 ? 0 : prev + 1
      if (!isCaseLine(prev)) break
      ls = prev
    }
    return { startIndex: ls, indent }
  }

  const findBlockEnd = (startIndex, indent) => {
    let inS = false, inD = false, inT = false, inLC = false, inBC = false, esc = false
    let lineStart = startIndex

    for (let i = startIndex; i < code.length; i++) {
      const c = code[i]
      const n = code[i + 1]

      if (c === '\n') { inLC = false; lineStart = i + 1; continue }

      if (inLC) continue
      if (inBC) { if (c === '*' && n === '/') { inBC = false; i++ } continue }

      if (inS) { if (!esc && c === "'") inS = false; esc = (!esc && c === '\\'); continue }
      if (inD) { if (!esc && c === '"') inD = false; esc = (!esc && c === '\\'); continue }
      if (inT) { if (!esc && c === '`') inT = false; esc = (!esc && c === '\\'); continue }

      if (c === '/' && n === '/') { inLC = true; i++; continue }
      if (c === '/' && n === '*') { inBC = true; i++; continue }
      if (c === "'") { inS = true; esc = false; continue }
      if (c === '"') { inD = true; esc = false; continue }
      if (c === '`') { inT = true; esc = false; continue }

      if (i === lineStart && lineStart !== startIndex) {
        if (code.slice(lineStart, lineStart + indent.length) !== indent) continue

        let j = lineStart + indent.length
        while (code[j] === ' ' || code[j] === '\t') j++

        const head4 = code.slice(j, j + 4)
        const head7 = code.slice(j, j + 7)

        if ((head4 === 'case' && isBoundary(code[j + 4])) || (head7 === 'default' && code.slice(j, j + 8).match(/^default\s*:/))) {
          return lineStart
        }
      }
    }
    return code.length
  }

  const hit = findCaseAtLineStart(alvo)
  if (!hit) return reply(`*❌ case "${alvo}" não encontrada 🤷‍♂️*`)

  const { startIndex, indent } = findBlockStart(hit.lineStart)
  const endIndex = findBlockEnd(startIndex, indent)

  const casesNovo = [...blocoNovo.matchAll(/case\s+['"]([^'"]+)['"]\s*:/gi)].map(m => m[1].toLowerCase())
  const novoPrincipal = casesNovo[0] || alvo

  if (!casesNovo.length) {
    blocoNovo =
      `case '${alvo}':\n` +
      blocoNovo.split('\n').map(l => `  ${l}`).join('\n') +
      `\nbreak`
  }

  blocoNovo = blocoNovo.replace(/\s+$/g, '') + '\n\n'
  blocoNovo = blocoNovo.split('\n').map(l => (l.length ? indent + l : l)).join('\n')

  const novoCode = code.slice(0, startIndex) + blocoNovo + code.slice(endIndex)

  try { fs.writeFileSync(ARQ, novoCode) }
  catch { return reply(`*❌ não consegui salvar a edição 🙇‍♂️*`) }

  return reply(`*ok, case editada com sucesso 🙇‍♂️*\n*de:* ${alvo}\n*para:* ${novoPrincipal}`)
}
break

case 'bemvindo':
case 'welcome': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

    const dirPath = `./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/TESTE`;
    const pathGp2 = `${dirPath}/${from}.json`;

    const MSG_BEM_VINDO_FIXA = `✨ 𝙾𝙻𝙰 #numerodele# 𝚂𝙴𝙹𝙰 𝙱𝙴𝙼 𝚅𝙸𝙽𝙳𝙾[ 𝙰 ] 𝙰𝙾 𝙶𝚁𝚄𝙿𝙾 #nomedogp#\n\n• 𝙻𝙴𝙸𝙰 𝙰𝚂 𝚁𝙴𝙶𝚁𝙰𝚂 𝙴 𝙰𝙿𝚁𝙾𝚅𝙴𝙸𝚃𝙴 𝙾 𝙶𝚁𝚄𝙿𝙾\n> ${NomeDoBot}`;
    const MSG_SAIDA_FIXA = `𝙾 #numerodele# 𝙰𝙲𝙰𝙱𝙰 𝙳𝙴 𝚂𝙰𝙸𝚁 𝙳𝙾 𝙶𝚁𝚄𝙿𝙾 #nomedogp#\n> ${NomeDoBot}`;

    // cria pasta se não existir
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    // cria arquivo se não existir
    if (!fs.existsSync(pathGp2)) {
        const estruturaBase = {
            welcome: {
                status: false,
                modo: null,
                texto: { ativo: false, legendabv: MSG_BEM_VINDO_FIXA, legendasaiu: MSG_SAIDA_FIXA },
                foto: { ativo: false, legendabv: MSG_BEM_VINDO_FIXA, legendasaiu: MSG_SAIDA_FIXA },
                audio: { ativo: false, legendabv: MSG_BEM_VINDO_FIXA, legendasaiu: MSG_SAIDA_FIXA },
                video: { ativo: false, legendabv: MSG_BEM_VINDO_FIXA, legendasaiu: MSG_SAIDA_FIXA },
                sticker: { ativo: false, legendabv: MSG_BEM_VINDO_FIXA, legendasaiu: MSG_SAIDA_FIXA }
            }
        };

        fs.writeFileSync(pathGp2, JSON.stringify(estruturaBase, null, 2));
    }

    // leitura segura
    let dataGp2;
    try {
        dataGp2 = JSON.parse(fs.readFileSync(pathGp2));
    } catch {
        dataGp2 = {
            welcome: {
                status: false,
                modo: null,
                texto: { ativo: false, legendabv: MSG_BEM_VINDO_FIXA, legendasaiu: MSG_SAIDA_FIXA },
                foto: { ativo: false, legendabv: MSG_BEM_VINDO_FIXA, legendasaiu: MSG_SAIDA_FIXA },
                audio: { ativo: false, legendabv: MSG_BEM_VINDO_FIXA, legendasaiu: MSG_SAIDA_FIXA },
                video: { ativo: false, legendabv: MSG_BEM_VINDO_FIXA, legendasaiu: MSG_SAIDA_FIXA },
                sticker: { ativo: false, legendabv: MSG_BEM_VINDO_FIXA, legendasaiu: MSG_SAIDA_FIXA }
            }
        };
    }

    const modoDigitado = args[0] ? args[0].toLowerCase() : null;

    const resetarModos = () => {
        dataGp2.welcome.texto.ativo = false;
        dataGp2.welcome.foto.ativo = false;
        dataGp2.welcome.audio.ativo = false;
        dataGp2.welcome.video.ativo = false;
        dataGp2.welcome.sticker.ativo = false;
    };

    if (modoDigitado === '0') {
        dataGp2.welcome.status = false;
        dataGp2.welcome.modo = null;
        resetarModos();
        fs.writeFileSync(pathGp2, JSON.stringify(dataGp2, null, 2));
        return reply(`*❌ ʙᴏᴀs-ᴠɪɴᴅᴀs ғᴏʀᴀᴍ ᴅᴇsᴀᴛɪᴠᴀᴅᴀs!*`);
    }

    if (!modoDigitado) {
        const modoAtual = dataGp2.welcome.modo
            ? dataGp2.welcome.modo.toUpperCase()
            : 'DESATIVADO';

        return reply(`*👋 sɪsᴛᴇᴍᴀ ᴅᴇ ʙᴏᴀs-ᴠɪɴᴅᴀs*\n\n*📊 sᴛᴀᴛᴜs:* ${dataGp2.welcome.status ? 'ᴀᴛɪᴠᴀᴅᴏ' : 'ᴅᴇsᴀᴛɪᴠᴀᴅᴏ'}\n*⚙️ ᴍᴏᴅᴏ:* ${modoAtual}\n\n*ᴍᴏᴅᴏs ᴅɪsᴘᴏɴɪ́ᴠᴇɪs:*\n\n📄 *${prefix}bemvindo texto*\n🖼 *${prefix}bemvindo foto*\n🎵 *${prefix}bemvindo audio*\n🎬 *${prefix}bemvindo video*\n🧩 *${prefix}bemvindo sticker*\n\n❌ *ᴅᴇsᴀᴛɪᴠᴀʀ:*\n*${prefix}bemvindo 0*`);
    }

    const tiposValidos = {
        texto: 'texto',
        foto: 'foto',
        imagem: 'foto',
        audio: 'audio',
        video: 'video',
        sticker: 'sticker'
    };

    if (tiposValidos[modoDigitado]) {
        const chave = tiposValidos[modoDigitado];
        dataGp2.welcome.status = true;
        resetarModos();
        dataGp2.welcome[chave].ativo = true;
        dataGp2.welcome.modo = chave;

        fs.writeFileSync(pathGp2, JSON.stringify(dataGp2, null, 2));

        return reply(`*✅ ᴍᴏᴅᴏ ᴀᴛɪᴠᴀᴅᴏ!*\n\n*📢 ᴍᴏᴅᴏ:* ${chave.toUpperCase()}\n\n*⚠️ ᴏ ᴍᴏᴅᴏ ᴀɴᴛᴇʀɪᴏʀ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴘᴀʀᴀ ᴇᴠɪᴛᴀʀ sᴘᴀᴍ.*`);
    } else {
        return reply(`*❌ ᴍᴏᴅᴏ ɪɴᴠᴀ́ʟɪᴅᴏ!*\nᴜsᴇ:\n*${prefix}bemvindo texto*\n*${prefix}bemvindo foto*\n*${prefix}bemvindo audio*\n*${prefix}bemvindo video*\n*${prefix}bemvindo sticker*\n\nᴘᴀʀᴀ ᴅᴇsʟɪɢᴀʀ: *${prefix}bemvindo 0*`);
    }
}
break;

case 'legendasaiu': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
    const pathGp2 = `./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/TESTE/${from}.json`;
    if (!fs.existsSync(pathGp2)) return reply(`*ᴀᴛɪᴠᴇ ᴏ ${prefix}ʙᴇᴍᴠɪɴᴅᴏ ᴘᴀʀᴀ ᴜsᴀʀ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ 🤷‍♂️*`);
    let dataGp2 = JSON.parse(fs.readFileSync(pathGp2));
    const wl = dataGp2.welcome;
    if (!wl.status) {
        return reply(`*❌ ᴏ sɪsᴛᴇᴍᴀ ᴇsᴛᴀ́ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ!*\n\nUse: *${prefix}bemvindo* para ativar.`);
    }
    const modoAtual = wl.modo; 
    if (modoAtual === 'audio' || modoAtual === 'sticker') {
        return reply(`*⚠️ ᴏ ᴍᴏᴅᴏ ᴀᴛᴜᴀʟ ᴇ́ ${modoAtual.toUpperCase()}*.\n\n> *Este modo não aceita legendas de saída. Altere para Texto, Foto ou Vídeo.*`);
    }
    if (args.length < 1) return reply(`*ᴄᴀᴅᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ? 🤷‍♂️*\n\nExemplo: *${prefix}legendasaiu* O membro #numerodele# nos deixou...`);
    const teks = body.slice(command.length + prefix.length + 1).trim();
    wl[modoAtual].legendasaiu = teks;
    fs.writeFileSync(pathGp2, JSON.stringify(dataGp2, null, 2));
    reply(`*✅ ʟᴇɢᴇɴᴅᴀ ᴅᴇ sᴀɪ́ᴅᴀ ᴀᴛᴜᴀʟɪᴢᴀᴅᴀ!* \n\n*ᴍᴏᴅᴏ:* ${modoAtual.toUpperCase()}\n*ʟᴇɢᴇɴᴅᴀ:* ${teks}`);
}
break;

case 'legendabv':
case 'legendabemvindo': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
    
    const pathGp2 = `./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/TESTE/${from}.json`;
    if (!fs.existsSync(pathGp2)) return reply(`*ᴀᴛɪᴠᴇ ᴏ ${prefix}ʙᴇᴍᴠɪɴᴅᴏ ᴘᴀʀᴀ ᴜsᴀʀ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ 🤷‍♂️*`);
    
    let dataGp2 = JSON.parse(fs.readFileSync(pathGp2));
    const wl = dataGp2.welcome;
    
    if (!wl.status) {
        return reply(`*❌ ᴏ sɪsᴛᴇᴍᴀ ᴇsᴛᴀ́ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ!*\n\nUse: *${prefix}bemvindo* para ativar.`);
    }
    
    const modoAtual = wl.modo;
    if (modoAtual === 'audio' || modoAtual === 'sticker') {
        return reply(`*⚠️ ᴏ ᴍᴏᴅᴏ ᴀᴛᴜᴀʟ ᴇ́ ${modoAtual.toUpperCase()}*.\n\n> *Este modo não aceita legendas de entrada. Altere para Texto, Foto ou Vídeo.*`);
    }
    
    if (args.length < 1) return reply(`*ᴄᴀᴅᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ? 🤷‍♂️*\n\nExemplo: *${prefix}legendabemvindo* Olá #numerodele#, seja bem-vindo ao grupo #nomedogp#!`);
    
    const teks = body.slice(command.length + prefix.length + 1).trim();
    wl[modoAtual].legendabv = teks;
    
    fs.writeFileSync(pathGp2, JSON.stringify(dataGp2, null, 2));
    
    reply(`*✅ ʟᴇɢᴇɴᴅᴀ ᴅᴇ ʙᴇᴍ-ᴠɪɴᴅᴏ ᴀᴛᴜᴀʟɪᴢᴀᴅᴀ!* \n\n*ᴍᴏᴅᴏ:* ${modoAtual.toUpperCase()}\n*ʟᴇɢᴇɴᴅᴀ:* ${teks}`);
}
break;

case 'addautorm':
case 'addautoban':
case 'listanegra': {
  if (!isGroup) return reply(mess.onlyGroup());
  if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
  if (!isBotGroupAdmins) return reply(mess.botAdmin());
  let numero = menc_os2 ? menc_os2.split('@')[0] : q ? q.replace(/\D/g, '') : '';
  if (!numero) return reply('*💫 ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ᴍᴇɴꜱᴀɢᴇᴍ ᴏᴜ ᴅɪɢɪᴛᴇ ᴏ ɴᴜ́ᴍᴇʀᴏ ǫᴜᴇ ᴅᴇꜱᴇᴊᴀ ᴀᴅɪᴄɪᴏɴᴀʀ ɴᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ 💁‍♂️*');
  const jid = `${numero}@s.whatsapp.net`;
  if (dataGp[0].listanegra.includes(jid))
    return reply('*❌ ᴇꜱꜱᴇ ɴᴜ́ᴍᴇʀᴏ ᴊᴀ́ ᴇꜱᴛᴀ́ ɴᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ*');
  dataGp[0].listanegra.push(jid);
  setGp(dataGp);
  await yuta.sendMessage(from, {
    text: `*@${numero} ꜰᴏɪ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ᴅᴇ ᴀᴜᴛᴏʙᴀɴ ✅🙆‍♂️*`,
    contextInfo:{...NkChannelKk, mentionedJid: [jid]}}, {quoted: selo}) 
  break;
}

case 'autobang':
case 'listanegrag': {
  if (!SoDono) return reply(mess.onlyOwner());
  let numero = menc_os2 ? menc_os2.split('@')[0] : q ? q.replace(/\D/g, '') : '';
  if (!numero) return reply('*💫 ᴍᴀʀǫᴜᴇ ᴏᴜ ᴅɪɢɪᴛᴇ ᴏ ɴᴜ́ᴍᴇʀᴏ ǫᴜᴇ ᴅᴇꜱᴇᴊᴀ ᴀᴅɪᴄɪᴏɴᴀʀ ɴᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ 💁‍♂️*');
  const jid = `${numero}@s.whatsapp.net`;
  if (listanegraG.includes(jid))
    return reply('*❌ ᴇꜱꜱᴇ ɴᴜ́ᴍᴇʀᴏ ᴊᴀ́ ᴇꜱᴛᴀ́ ɴᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ*');
  listanegraG.push(jid);
  fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/nescessario.json', JSON.stringify(nescessario, null, '\t'));
  await yuta.sendMessage(from, {
    text: `*@${numero} ꜰᴏɪ ᴀᴅɪᴄɪᴏɴᴀᴅᴏ ᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ ✅🙆‍♂️*`,
    mentions: [jid]
  }, { quoted: selo });
  break;
}

case 'tirardalistag': {
  if (!SoDono) return reply(mess.onlyOwner());
  let numero = menc_os2 ? menc_os2.split('@')[0] : q ? q.replace(/\D/g, '') : '';
  if (!numero) return reply('*💫 ɪɴꜰᴏʀᴍᴇ ᴏ ɴᴜ́ᴍᴇʀᴏ ǫᴜᴇ ǫᴜᴇʀ ʀᴇᴍᴏᴠᴇʀ ᴅᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ 💁‍♂️*');
  const jid = `${numero}@s.whatsapp.net`;
  if (!listanegraG.includes(jid))
    return reply('*❌ ᴇꜱꜱᴇ ɴᴜ́ᴍᴇʀᴏ ɴᴀ̃ᴏ ᴇꜱᴛᴀ́ ɴᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ*');
  listanegraG.splice(listanegraG.indexOf(jid), 1);
  fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/nescessario.json', JSON.stringify(nescessario, null, '\t'));
  await yuta.sendMessage(from, {
    text: `*@${numero} ꜰᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ ✅🙇‍♂️*`,
    contextInfo:{...NkChannelKk, mentionedJid: [jid]}}, {quoted: selo}) 
  break;
}

case 'delremover':
case 'delautorm':
case 'delautoban':
case 'tirardalista': {
  if (!isGroup) return reply(mess.onlyGroup());
  if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
  if (!isBotGroupAdmins) return reply(mess.botAdmin());
  let numero = menc_os2 ? menc_os2.split('@')[0] : q ? q.replace(/\D/g, '') : '';
  if (!numero) return reply('*💫 ɪɴꜰᴏʀᴍᴇ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴏ ɴᴜ́ᴍᴇʀᴏ ǫᴜᴇ ᴅᴇꜱᴇᴊᴀ ʀᴇᴍᴏᴠᴇʀ ᴅᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ 💁‍♂️*');
  const jid = `${numero}@s.whatsapp.net`;
  if (!dataGp[0].listanegra.includes(jid))
    return reply('*❌ ᴇꜱꜱᴇ ɴᴜ́ᴍᴇʀᴏ ɴᴀ̃ᴏ ᴇꜱᴛᴀ́ ɴᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ*');
  dataGp[0].listanegra.splice(dataGp[0].listanegra.indexOf(jid), 1);
  setGp(dataGp);
  await yuta.sendMessage(from, {
    text: `*@${numero} ꜰᴏɪ ʀᴇᴍᴏᴠɪᴅᴏ ᴅᴀ ʟɪꜱᴛᴀ ᴅᴇ ᴀᴜᴛᴏʙᴀɴ ✅🙇‍♂️*`,
    contextInfo:{...NkChannelKk, mentionedJid: [jid]}}, {quoted: selo}) 
  break;
}


case 'bang': {
  if (!isGroup) return reply(mess.onlyGroup());
  if (!isGroupAdmins) return reply(mess.onlyAdmins());
  if (!SoDono) return reply(mess.onlyOwner());
  if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
  if (!q || (q !== 'local' && q !== 'global')) {
    return reply(`*ᴜsᴇ: ʙᴀɴɢ ʟᴏᴄᴀʟ* — ʙᴀɴ ᴅᴀ ʟɪsᴛᴀ ɴᴇɢʀᴀ ʟᴏᴄᴀʟ\n*ᴏᴜ: ʙᴀɴɢ ɢʟᴏʙᴀʟ* — ʙᴀɴ ᴅᴀ ʟɪsᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ`);
  }
  try {
    const lista = q === 'local' ? dataGp[0].listanegra : listanegraG;
    const numerosNegros = lista.map(n => n.replace(/[^0-9]/g, ''));
    const banidos = [];
    for (const membro of groupMembers) {
      const membroNormalizado = normalizar(membro.id);
      const numero = membroNormalizado.replace(/[^0-9]/g, '');
      const isInLista = numerosNegros.includes(numero);
      const isNotAdmin = !membro.admin;
      const isNotBot = membroNormalizado !== normalizar(yuta.user.id);
      if (isInLista && isNotAdmin && isNotBot) {
        banidos.push(membroNormalizado);
      }
    }
    if (banidos.length === 0) {
      return reply(`*ɴᴀᴏ ᴇɴᴄᴏɴᴛʀᴇɪ ɴᴇɴʜᴜᴍ ᴍᴇᴍʙʀᴏ ᴅᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ${q === 'local' ? 'ʟᴏᴄᴀʟ' : 'ɢʟᴏʙᴀʟ'} ɴᴇꜱᴛᴇ ɢʀᴜᴘᴏ 🤷‍♂️*`);
    }
    await yuta.groupParticipantsUpdate(from, banidos, 'remove');
    reply(`*ʙᴀɴɪ ᴜᴍ ᴛᴏᴛᴀʟ ᴅᴇ ${banidos.length} ɪɴɪᴍɪɢᴏ(ꜱ) ᴅᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ ${q.toUpperCase()} 🙇‍♂️*`);

  } catch (e) {
    console.error(e);
    reply('*ᴇʀʀᴏ ᴀᴏ ʙᴀɴɪʀ ᴏꜱ ɪɴɪᴍɪɢᴏꜱ ᴅᴀ ʟɪꜱᴛᴀ ɴᴇɢʀᴀ 🤷‍♂️*');
  }
  break;
}

case 'listbang': {
  if (!isGroup) return reply(mess.onlyGroup());
  if (!SoDono) return reply(mess.onlyOwner());
  if (!listanegraG || listanegraG.length < 1)
    return reply('*ɴᴇɴʜᴜᴍ ɪɴɪᴍɪɢᴏ ꜰᴏɪ ᴍᴀʀᴄᴀᴅᴏ ᴀɪɴᴅᴀ... 🙆‍♂️*');
  let resposta = '⛓️ *ʟɪsᴛᴀ ɴᴇɢʀᴀ ɢʟᴏʙᴀʟ*\n\n';
  let infiltrados = '\n⚠️ *ɪɴꜰɪʟᴛʀᴀᴅᴏꜱ ᴀǫᴜɪ ɴᴏ ɢʀᴜᴘᴏ*\n';
  let mencGlobal = [];
  let achados = 0;
  for (let [index, jid] of listanegraG.entries()) {
    const jidNorm = normalizar(jid);
    const membro = groupMembers.find(m => normalizar(m.id) === jidNorm);
    const numero = jidNorm.replace(/[^0-9]/g, '');
    const nome = `@${numero}`;
    resposta += `*${index + 1}.* ${nome}\n`;
    mencGlobal.push(jidNorm);
    if (membro) {
      achados++;
      infiltrados += `✦ ${nome} — *ᴀǫᴜɪ ᴅᴇɴᴛʀᴏ... ᴍᴀʀᴄᴀɴᴅᴏ ᴛᴇʀʀɪᴛᴏ́ʀɪᴏ ᴇʀʀᴀᴅᴏ. 💁‍♂️*\n`;
    }
  }
  resposta += achados > 0
    ? infiltrados
    : '\n*ɴᴇɴʜᴜᴍ ᴅᴏꜱ ᴍᴀʀᴄᴀᴅᴏꜱ ᴇꜱᴛᴀ́ ɴᴇꜱᴛᴇ ɢʀᴜᴘᴏ... ᴀɪɴᴅᴀ. 🤷‍♂️*';
  resposta += '\n\n*ᴏ ᴍᴀʀᴛᴇʟᴏ ᴅᴏ ʙᴀɴ ᴇꜱᴛᴀ́ ᴘʀᴇᴘᴀʀᴀᴅᴏ 🙇‍♂️*';
  await yuta.sendMessage(from, {
    text: resposta,
    contextInfo:{...NkChannelKk, mentionedJid: mencGlobal}}, {quoted: selo}) 
  break;
}

case 'listban': {
  if (!isGroup) return reply(mess.onlyGroup());
  if (!isGroupAdmins) return reply(mess.onlyAdmins());
  const lista = dataGp[0].listanegra;
  if (!lista || lista.length < 1)
    return reply('*ɴᴇɴʜᴜᴍ ɪɴɪᴍɪɢᴏ ꜰᴏɪ ᴍᴀʀᴄᴀᴅᴏ ᴀɪɴᴅᴀ... 🙆‍♂️*');
  let resposta = '⛓️ *ʟɪsᴛᴀ ɴᴇɢʀᴀ ʟᴏᴄᴀʟ*\n\n';
  let infiltrados = '\n⚠️ *ɪɴꜰɪʟᴛʀᴀᴅᴏꜱ ᴀǫᴜɪ ɴᴏ ɢʀᴜᴘᴏ*\n';
  let mencLocal = [];
  let achados = 0;
  for (let [index, jid] of lista.entries()) {
    const jidNorm = normalizar(jid);
    const numero = jidNorm.replace(/[^0-9]/g, '');
    const tag = `@${numero}`;
    resposta += `*${index + 1}.* ${tag}\n`;
    mencLocal.push(jidNorm);
    const membro = groupMembers.find(m => normalizar(m.id) === jidNorm);
    if (membro) {
      achados++;
      infiltrados += `✦ ${tag} — *sᴇ ᴍᴇᴛᴇɴᴅᴏ ᴏɴᴅᴇ ɴᴀ̃ᴏ ꜰᴏɪ ᴄʜᴀᴍᴀᴅᴏ... 💁‍♂️*\n`;
    }
  }
  resposta += achados > 0
    ? infiltrados
    : '\n*ɴᴇɴʜᴜᴍ ᴅᴏꜱ ᴍᴀʀᴄᴀᴅᴏꜱ ᴇꜱᴛᴀ́ ɴᴇꜱᴛᴇ ɢʀᴜᴘᴏ... ᴘᴏʀᴇ́ᴍ ᴘᴏʀ ᴇɴǫᴜᴀɴᴛᴏ. 🤷‍♂️*';
  resposta += '\n\n*ᴏ ᴍᴀʀᴛᴇʟᴏ ᴅᴏ ʙᴀɴ ᴇꜱᴛᴀ́ ᴘʀᴇᴘᴀʀᴀᴅᴏ 🙇‍♂️*';
  await yuta.sendMessage(from, {
    text: resposta,
    contextInfo:{...NkChannelKk, mentionedJid: mencGlobal}}, {quoted: selo}) 
  break;
}


case 'mute': {
  if (!isGroup) return reply(mess.onlyGroup());
  if (!isGroupAdmins) return reply(mess.onlyAdmins());
  if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
  if (!menc_os2) return reply(`*🎯 ᴍᴇɴᴄɪᴏɴᴇ ǫᴜᴇᴍ ǫᴜᴇʀ ᴘᴜɴɪʀ*`);

  if (menc_os2 == botNumberLID) return reply(`*ɴᴀᴏ ᴘᴏssᴏ ᴍᴜᴛᴀʀ ᴏ ʙᴏᴛ 😵*`);
  if (menc_os2 == nmrdn) return reply(`*ɴᴀᴏ ᴏᴜsᴇ ᴛᴏᴄᴀʀ ɴᴏ ᴍᴇᴜ ᴅᴏɴᴏ 💢*`);
  if (vip.map(i => i.id).includes(menc_os2)) return reply(`*ɴᴀᴏ ᴍᴇxᴀ ᴄᴏᴍ ǫᴜᴇᴍ ᴇ ᴠɪᴘ 😎*`);
  if (groupAdmins.includes(menc_os2)) return reply(`*ɴᴀᴏ ᴘᴏᴅᴇ ᴍᴜᴛᴀʀ ᴜᴍ ᴀᴅᴍɪɴ*`);

  const tipo = q.toLowerCase().includes("silenciar") ? "silenciar" : "mutar";

  if (tipo === "silenciar") {
    if (grupoMute.silenciados.includes(menc_os2))
      return mention(`*ᴏ @${menc_os2.split('@')[0]} ᴊᴀ ᴇsᴛᴀ sɪʟᴇɴᴄɪᴀᴅᴏ*`);

    grupoMute.silenciados.push(menc_os2);
    fs.writeFileSync("./DADOS DO YUTA/grupos/muted.json", JSON.stringify(muted, null, 2));
    mention(`*ᴏ @${menc_os2.split('@')[0]} ꜰᴏɪ sɪʟᴇɴᴄɪᴀᴅᴏ ᴘᴏʀ @${sender.split('@')[0]} 🔇*`);
  }

  if (tipo === "mutar") {
    if (grupoMute.mutados.includes(menc_os2))
      return mention(`ᴏ @${menc_os2.split('@')[0]} ᴊᴀ ᴇsᴛᴀ ᴍᴜᴛᴀᴅᴏ`);

    grupoMute.mutados.push(menc_os2);
    fs.writeFileSync("./DADOS DO YUTA/grupos/muted.json", JSON.stringify(muted, null, 2));
    mention(`*ᴏ @${menc_os2.split('@')[0]} ꜰᴏɪ ᴍᴜᴛᴀᴅᴏ ᴘᴏʀ @${sender.split('@')[0]} 🚫*`);
  }
}
break;

case 'desmute': {
  if (!isGroup) return reply(mess.onlyGroup());
  if (!isGroupAdmins) return reply(mess.onlyAdmins());
  if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
  if (!menc_os2) return reply(`*🎯 ᴍᴇɴᴄɪᴏɴᴇ ǫᴜᴇᴍ ǫᴜᴇʀ ᴅᴇsᴍᴜᴛᴀʀ*`);

  if (!grupoMute.silenciados.includes(menc_os2) && !grupoMute.mutados.includes(menc_os2))
    return mention(`*ᴏ @${menc_os2.split('@')[0]} ɴᴀᴏ ᴇsᴛᴀ ᴘᴜɴɪᴅᴏ*`);

  grupoMute.silenciados = grupoMute.silenciados.filter(id => id !== menc_os2);
  grupoMute.mutados = grupoMute.mutados.filter(id => id !== menc_os2);
  fs.writeFileSync("./DADOS DO YUTA/grupos/muted.json", JSON.stringify(muted, null, 2));
  mention(`*ᴏ @${menc_os2.split('@')[0]} ꜰᴏɪ ʟɪʙᴇʀᴀᴅᴏ ᴘᴏʀ @${sender.split('@')[0]} 🙆‍♂️*`);
}
break;

//===========[ FIM CMD DONO/ADM'S ]=============\\

//=============[ ATIVACOES ]=========\\
case 'ativic':
    try {
        if (!isGroup) return reply(mess.onlyGroup());
        if (!isGroupAdmins) return reply(mess.onlyAdmins());
        if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

        const todosAtivos = dataGp[0].jogos && 
             dataGp[0]['antilink'] && 
             dataGp[0]['antilinkhard'] &&              
             dataGp[0].x9 && 
             dataGp[0].antifake &&
             dataGp[0].antilinkgp;

        if (todosAtivos) {
            dataGp[0].jogos = false;
            dataGp[0]['antilink'] = false;
            dataGp[0]['antilinkhard'] = false;            
            dataGp[0].x9 = false;
            dataGp[0].antifake = false;
            dataGp[0].antilinkgp = false;
            setGp(dataGp);
            reply('*ᴛᴏᴅᴏs ᴏs ᴄᴏᴍᴀɴᴅᴏs ɴᴇsᴄᴇssᴀʀɪᴏ ғᴏʀᴀᴍ ᴅᴇsᴀᴛɪᴠᴀᴅᴏs 🙅‍♂️*');
        } else {           
            dataGp[0].jogos = true;
            dataGp[0]['antilink'] = true;
            dataGp[0]['antilinkhard'] = true;            
            dataGp[0].x9 = true;
            dataGp[0].antifake = true;
            dataGp[0].antilinkgp = true;
            setGp(dataGp);
            reply('*ᴛᴏᴅᴏs ᴏs ᴄᴏᴍᴀɴᴅᴏs ɴᴇsᴄᴇssᴀʀɪᴏ ғᴏʀᴀᴍ ᴀᴛɪᴠᴀᴅᴏs 🙇‍♂️*');
        }
    } catch (error) {
        console.error(error);
        reply('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ ᴀᴏ ᴇғᴇᴛᴜᴀʀ ᴏ ᴄᴏᴍᴀɴᴅᴏ ⚠*');
    }
    break;

case 'so_dono':
if(!SoDono) return reply(mess.onlyOwner())
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
reply('*ᴏ ʙᴏᴛ ғᴏɪ ᴅᴇsʟɪɢᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴘʀᴀ ᴜsᴏ ᴅᴇ ᴍᴇᴍʙʀᴏs ᴇ ᴀᴅᴍs ᴅᴇ ɢʀᴜᴘᴏs 🙅‍♂️*');
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
reply(`*ᴀᴛɪᴠᴀɴᴅᴏ ᴛᴏᴅᴏs ᴏs ғᴜɴᴄɪᴏɴᴀᴍᴇɴᴛᴏs ᴅᴏ ʙᴏᴛ ɴᴏᴠᴀᴍᴇɴᴛᴇ 🙇‍♂️*`)
}
break

case 'limitecaracteres':
case 'limiteflood':  
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

if (isAntiFlood) {
    dataGp[0].limitec.active = false;
    setGp(dataGp);
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
    dataGp[0].limitec.active = true;
    setGp(dataGp);
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ʟɪᴍɪᴛᴇ ғʟᴏᴏᴅ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴇssᴇ ɢʀᴜᴘᴏ 🙇‍♂️*');
}
break;

case 'modocoins':
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

if (isModoCoins) {
    dataGp[0].isModoCoins = false;
    setGp(dataGp);
    reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*`);
} else {
    dataGp[0].isModoCoins = true;
    setGp(dataGp);
    reply(`*ᴏ ʀᴇᴄᴜʀsᴏ N-ᴄᴏɪɴs ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴇssᴇ ɢʀᴜᴘᴏ 🙇‍♂️*`);
}
break;

case 'antistatus': {
if (!isGroup) return reply(mess.onlyGroup());
if (!isGroupAdmins) return reply(mess.onlyAdmins());
if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
  const statusAtual = dataGp[0].antistatus === true
  if (statusAtual) {
    dataGp[0].antistatus = false
    setGp(dataGp)
    reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*`);
  } else {
    dataGp[0].antistatus = true
    setGp(dataGp)
    reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪꜱᴛᴀᴛᴜꜱ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴇssᴇ ɢʀᴜᴘᴏ 🙇‍♂️*`);
  }
  break
}


case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
if(!SoDono) return reply(mess.onlyOwner())
if(!isAnticall) {
nescessario.anticall = true
setNes(nescessario)
reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ ʟɪɢᴀʀ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`)
} else if(isAnticall) {
nescessario.anticall = false
setNes(nescessario)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
}
break

case 'verificado-global':
case 'verificado':
try {
if(!SoDono) return reply(mess.onlyOwner())

	if (!nescessario.verificado) {

		nescessario.verificado = true;

		fs.writeFileSync(`./DADOS DO YUTA/INFO_YUTA/media/nescessario.json`, JSON.stringify(nescessario, null, 2) + "\n");

		reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ᴠᴇʀɪғɪᴄᴀᴅᴏ ɢʟᴏʙᴀʟ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`)
	} else if (nescessario.verificado) {

		nescessario.verificado = false

		fs.writeFileSync(`./DADOS DO YUTA/INFO_YUTA/media/nescessario.json`, JSON.stringify(nescessario, null, 2) + "\n");

		reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*`)
	}
} catch (e) {
	console.error(e);
	reply("Houve um erro no comando!");
}
break;

case 'console': 
if(!SoDono) return reply(mess.onlyOwner())
if(!isConsole) {
obrigadoEXT.consoleoff = true
setObg(obrigadoEXT)
reply(`*ᴍᴏᴅᴏ ᴄᴏɴsᴏʟᴇ ᴀᴛɪᴠᴏ, ᴀɢᴏʀᴀ ɪʀᴇɪ ᴄᴏɴsᴇɢᴜɪʀ ᴠᴇʀ ᴛᴏᴅᴏ ᴛɪᴘᴏ ᴅᴇ ᴍᴇɴsᴀɢᴇᴍ 🙇‍♂️*`) 
} else if(isConsole) {
obrigadoEXT.consoleoff = false
setObg(obrigadoEXT)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*');
}
break

case 'audio-menu': 
if(!SoDono) return reply(mess.onlyOwner())
if(!isAudioMenu) {
obrigadoEXT.menu_audio = true
setObg(obrigadoEXT)
reply(`*ᴄᴇʀᴛᴏ ᴍᴇꜱᴛʀᴇ ᴀᴄᴀʙᴇɪ ᴅᴇ ᴀᴛɪᴠᴀʀ ᴏ ᴀᴜᴅɪᴏ-ᴍᴇɴᴜ 🙇‍♂️*`)
} else if(isAudioMenu) {
obrigadoEXT.menu_audio = false
setObg(obrigadoEXT)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*');
}
break

case 'antipv':  
if(!SoDono) return reply(mess.onlyOwner())
if(!isAntiPv) {
nescessario.antipv = true
setNes(nescessario)
reply(`*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪᴘᴠ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`)
} else if(isAntiPv) {
nescessario.antipv = false
setNes(nescessario)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*');
}
break

case 'antipv2':
if(!SoDono) return reply(mess.onlyOwner())
if(!isAntiPv2) {
nescessario.antipv2 = true
setNes(nescessario)
reply("*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪᴘᴠ2 ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*")
} else if(isAntiPv2) {
nescessario.antipv2 = false
setNes(nescessario)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*');
}
break

case 'antipv3':
if(!SoDono) return reply(mess.onlyOwner())
if(!isAntiPv3) {
nescessario.antipv3 = true
setNes(nescessario)
reply("*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪᴘᴠ3 ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*")
} else if(isAntiPv3) {
nescessario.antipv3 = false
setNes(nescessario)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*');
}
break

case 'visualizarmsg':
if(!SoDono) return reply(mess.onlyOwner())
if(!isVisualizar) {
nescessario.visualizarmsg = true
setNes(nescessario)
reply("*ᴏ ʀᴇᴄᴜʀsᴏ ᴅᴇ ᴠɪᴢᴜᴀʟɪᴢᴀʀ ᴍsɢ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*")
} else if(isVisualizar) {
nescessario.visualizarmsg = false
setNes(nescessario)
reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙅‍♂️*');
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
    
    // Alterna o estado do recurso de anti palavrão
    if (isPalavrao) {
        dataGp[0].antipalavrao.active = !dataGp[0].antipalavrao.active; // Inverte o estado atual
        setGp(dataGp);
        if (dataGp[0].antipalavrao.active) {
            reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ ᴘᴀʟᴀᴠʀᴀᴏ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ ᴠʟᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
        } else {
            reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
        }
    } else {
        dataGp[0].antipalavrao.active = true; // Se ainda não tiver configurado, ativa por padrão
        setGp(dataGp);
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ ᴘᴀʟᴀᴠʀᴀᴏ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ ᴠʟᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
    }
    
break;

case 'antinotas':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

    // Alternar o estado de antnotas
    dataGp[0].antinotas = !dataGp[0].antinotas;
    setGp(dataGp);

    if (dataGp[0].antinotas) {
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪɴᴏᴛᴀs ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
    } else {
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
    }
    break;
 
  case 'modobn':  case 'modobrincadeira': case 'modobrincadeiras':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(isModobn) {
    dataGp[0].jogos = false
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
    dataGp[0].jogos = true
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴍᴏᴅᴏ ʙʀɪɴᴄᴀᴅᴇɪʀᴀ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*')
}
break


case 'modoia':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(isModoIA) {
    dataGp[0].modoia = false
    setGp(dataGp)
    reply('*ᴏ ᴍᴏᴅᴏ ɪᴀ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*')
} else {
    dataGp[0].modoia = true
    setGp(dataGp)

    reply(`*ᴏ ᴍᴏᴅᴏ ɪᴀ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*\n\n*📌 ᴄᴏᴍᴏ ғᴜɴᴄɪᴏɴᴀ:*\nᴀɢᴏʀᴀ ᴏs ᴍᴇᴍʙʀᴏs ᴘᴏᴅᴇᴍ ᴜsᴀʀ ᴏ ʙᴏᴛ ᴄᴏᴍ ᴄᴏᴍᴀɴᴅᴏs ᴇᴍ ᴛᴇxᴛᴏ ɴᴀᴛᴜʀᴀʟ.\n\n*💬 ᴇxᴇᴍᴘʟᴏs:*\n• Yuta toque a música Nuts\n• Yuta feche o grupo\n• Yuta abra o grupo\n• Yuta faz sticker dessa imagem\n• Yuta bane @usuário\n\n*🤖 ᴏ ʏᴜᴛᴀ ᴠᴀɪ ɪɴᴛᴇʀᴘʀᴇᴛᴀʀ ᴀ ғʀᴀsᴇ ᴇ ᴇxᴇᴄᴜᴛᴀʀ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴀᴍᴇɴᴛᴇ.*`)
}
break

case "parceria":
case "parcerias":
case "listparceria":
case "listaparceria": {
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())

const db = parceriaLoad()
const gp = parceriaGetGroup(db, from)
parceriaDailyReset(gp, dattofc)

gp.parceiros = parceriaDedupParceirosObj(gp.parceiros)
gp.nparc = parceriaDedupParceirosObj(gp.nparc)

const status = gp.ativo ? "✅ ᴀᴛɪᴠᴀᴅᴏ" : "❌ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ"
const parceiros = gp.parceiros || {}
const jids = Object.keys(parceiros)

if (!jids.length) {
return reply(`*🤝 sɪsᴛᴇᴍᴀ ᴅᴇ ᴘᴀʀᴄᴇʀɪᴀ*

• sᴛᴀᴛᴜs: ${status}

*ɴᴇɴʜᴜᴍ ᴘᴀʀᴄᴇɪʀᴏ ᴄᴀᴅᴀsᴛʀᴀᴅᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*`)
}

let txt = `*🤝 ʟɪsᴛᴀ ᴅᴇ ᴘᴀʀᴄᴇʀɪᴀ*

• sᴛᴀᴛᴜs: ${status}
• ᴛᴏᴛᴀʟ: *${jids.length}*

`

const mentionsArr = []

for (let i = 0; i < jids.length && i < 30; i++) {

const jid = jids[i]
const p = parceiros[jid] || {}

const limite = Math.max(0, Number(p.limite || 0))
const usados = Math.max(0, Number(p.usados || 0))
const rest = Math.max(0, limite - usados)

txt += `👤 @${jid.split("@")[0]}
├ 📢 ${usados}/${limite}
└ ⏳ ʀᴇsᴛᴀᴍ: ${rest}

`

mentionsArr.push(jid)

}

await yuta.sendMessage(from, { text: txt.trim(), mentions: mentionsArr }, { quoted: selo })
break
}

case "delparceria":
case "del_parceria":
case "rmparceria":
case "rm_parceria": {

if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())

let meta = groupMetadata
if (!meta?.participants) {
try { meta = await yuta.groupMetadata(from) } catch { meta = groupMetadata }
}

const ctx =
info?.message?.extendedTextMessage?.contextInfo ||
info?.message?.imageMessage?.contextInfo ||
info?.message?.videoMessage?.contextInfo ||
info?.message?.documentMessage?.contextInfo ||
info?.message?.stickerMessage?.contextInfo ||
null

const rawAlvo =
(ctx?.mentionedJid && ctx.mentionedJid.length ? ctx.mentionedJid[0] : null) ||
ctx?.participant ||
null

const alvo =
(typeof parceriaGetTargetFromMsg === "function")
? parceriaGetTargetFromMsg(info, sender, meta)
: (typeof normalizar === "function" ? normalizar(rawAlvo) : rawAlvo)

if (!alvo) return reply(`*ᴍᴀʀǫᴜᴇ ᴏ ᴜsᴜᴀʀɪᴏ ᴏᴜ ʀᴇsᴘᴏɴᴅᴀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴅᴇʟᴇ 🙇‍♂️*`)

const db = parceriaLoad()
const gp = parceriaGetGroup(db, from)

parceriaDailyReset(gp, dattofc)

gp.parceiros = parceriaDedupParceirosObj(gp.parceiros)
gp.nparc = parceriaDedupParceirosObj(gp.nparc)

if (gp.parceiros && gp.parceiros[alvo]) {

delete gp.parceiros[alvo]

if (gp.nparc && gp.nparc[alvo]) delete gp.nparc[alvo]

parceriaSave(db)

return yuta.sendMessage(from,{
text:`*ᴘᴀʀᴄᴇʀɪᴀ ʀᴇᴍᴏᴠɪᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*

• @${alvo.split("@")[0]}`,
mentions:[alvo]
},{quoted:info})

}

parceriaSave(db)

return reply(`*ᴇssᴇ ᴜsᴜᴀʀɪᴏ ɴᴀᴏ ᴇsᴛᴀ ɴᴀ ᴘᴀʀᴄᴇʀɪᴀ 🙇‍♂️*`)

break
}

case "modoparceria": {

if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())

const db = parceriaLoad()
const gp = parceriaGetGroup(db, from)

parceriaDailyReset(gp, dattofc)

gp.ativo = !gp.ativo

parceriaSave(db)

if (gp.ativo) {

reply(`*🤝 sɪsᴛᴇᴍᴀ ᴅᴇ ᴘᴀʀᴄᴇʀɪᴀ ᴀᴛɪᴠᴀᴅᴏ 🙇‍♂️*

ᴀɢᴏʀᴀ ᴏs ᴜsᴜᴀʀɪᴏs ᴄᴀᴅᴀsᴛʀᴀᴅᴏs ᴘᴏᴅᴇᴍ ᴇɴᴠɪᴀʀ ʟɪɴᴋs ᴅᴇ ᴘᴀʀᴄᴇʀɪᴀ ᴄᴏᴍ ʟɪᴍɪᴛᴇ ᴅɪᴀʀɪᴏ.`)

} else {

reply(`*🤝 sɪsᴛᴇᴍᴀ ᴅᴇ ᴘᴀʀᴄᴇʀɪᴀ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ 🙅‍♂️*`)

}

break
}

case "addparceria":
case "add_parceria":
case "addparce": {

if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())

let meta = groupMetadata
if (!meta?.participants) {
try { meta = await yuta.groupMetadata(from) } catch { meta = groupMetadata }
}

const ctx =
info?.message?.extendedTextMessage?.contextInfo ||
info?.message?.imageMessage?.contextInfo ||
info?.message?.videoMessage?.contextInfo ||
info?.message?.documentMessage?.contextInfo ||
info?.message?.stickerMessage?.contextInfo ||
null

const rawAlvo =
(ctx?.mentionedJid && ctx.mentionedJid.length ? ctx.mentionedJid[0] : null) ||
ctx?.participant ||
null

const alvo =
(typeof parceriaGetTargetFromMsg === "function")
? parceriaGetTargetFromMsg(info, sender, meta)
: (typeof normalizar === "function" ? normalizar(rawAlvo) : rawAlvo)

const limite =
(typeof parceriaParseLimite === "function")
? parceriaParseLimite(q)
: (() => {
const nums = String(q || "").match(/\d+/g) || []
return nums.length ? Number(nums[nums.length - 1]) : 0
})()

if (!alvo || !Number.isFinite(limite) || limite <= 0) {

return reply(`*ᴜsᴇ ᴀssɪᴍ 🙇‍♂️*

• ${prefix}addparceria @usuario 3
• ${prefix}addparceria (respondendo) 3`)

}

if (limite > 50) return reply(`*ᴇsᴄᴏʟʜᴀ ǫᴜᴀɴᴛᴏs ʟɪɴᴋs ᴇssᴀ ᴘᴇssᴏᴀ ᴘᴏᴅᴇʀᴀ́ ᴇɴᴠɪᴀʀ ɴᴏ ɢʀᴜᴘᴏ 🗣️*\n> *ᴏ ʟɪᴍɪᴛᴇ ᴍᴀxɪᴍᴏ ᴘᴇʀᴍɪᴛɪᴅᴏ ᴇ 50 🙇‍♂️*`)

const db = parceriaLoad()
const gp = parceriaGetGroup(db, from)

parceriaDailyReset(gp, dattofc)

gp.parceiros = parceriaDedupParceirosObj(gp.parceiros)
gp.nparc = parceriaDedupParceirosObj(gp.nparc)

if (gp.parceiros[alvo]) {

const p = gp.parceiros[alvo] || {}
const limAtual = Number(p?.limite || 0)

parceriaSave(db)

return reply(`*ᴇssᴇ ᴜsᴜᴀʀɪᴏ ᴊᴀ ᴇ ᴘᴀʀᴄᴇʀɪᴀ 🙇‍♂️*

• ʟɪᴍɪᴛᴇ ᴀᴛᴜᴀʟ: *${limAtual}*`)

}

gp.parceiros[alvo] = {
limite: Number(limite),
usados: 0,
warnLimite: false,
data: String(dattofc)
}

if (gp.nparc && gp.nparc[alvo]) delete gp.nparc[alvo]

parceriaSave(db)

await yuta.sendMessage(from,{
text:`*🤝 ᴘᴀʀᴄᴇʀɪᴀ ᴀᴅɪᴄɪᴏɴᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*

• ᴜsᴜᴀʀɪᴏ: @${alvo.split("@")[0]}
• ʟɪᴍɪᴛᴇ ᴅɪᴀʀɪᴏ: *${limite}*`,
mentions:[alvo]
},{quoted:info})

break
}

case 'autorepo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(isAutorepo) {
    dataGp[0].autoresposta = false
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
    dataGp[0].autoresposta = true
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀᴜᴛᴏʀᴇᴘᴏ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*')
}
break

case 'rgrepo':
case 'addrepo': {
  if (!isGroup) return reply(mess.onlyGroup())
  if (!isGroupAdmins) return reply(mess.onlyAdmins())
  if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
  if (!isAutorepo) return reply('*ᴀᴛɪᴠᴇ ᴏ ᴀᴜᴛᴏʀᴇᴘᴏ ᴘʀɪᴍᴇɪʀᴏ ᴘᴀʀᴀ ᴜsᴀʀ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ 🙇‍♂️*')
  if (!q.trim()) {
    return reply(
`*ᴜsᴇ ᴀssɪᴍ 🙇‍♂️*

*• ${prefix}rgrepo oi/oi mano* (texto)
*• ${prefix}rgrepo teste* (marcando texto, áudio, figurinha, foto ou vídeo)`
    )
  }

  const entradaRepo = q.trim()
  const repos = loadGroupAutorepo(from)
  const quoted = getQuotedMessageRepo()

  if (!quoted) {
    if (!entradaRepo.includes('/')) {
      return reply(`*ᴘʀᴀ ᴛᴇxᴛᴏ ᴜsᴇ ᴀssɪᴍ:* ${prefix}rgrepo oi/oi mano 🙇‍♂️*`)
    }

    const partes = entradaRepo.split('/')
    const gatilhoTxt = String(partes.shift() || '').trim()
    const respostaTxt = String(partes.join('/') || '').trim()

    if (!gatilhoTxt) return reply('*ᴄᴀᴅᴇ ᴏ ɢᴀᴛɪʟʜᴏ? 🙇‍♂️*')
    if (!respostaTxt) return reply('*ᴄᴀᴅᴇ ᴀ ʀᴇsᴘᴏsᴛᴀ? 🙇‍♂️*')

    const gatilhoFinal = rmLetras(gatilhoTxt).replace(/\s+/g, ' ').trim()
    const keyTexto = normalizeRepoKey(gatilhoFinal)

    const idxOld = repos.findIndex(r => normalizeRepoKey(r?.trigger) === keyTexto)
    if (idxOld >= 0) {
      const antigo = repos[idxOld]
      if (antigo?.file) {
        const oldPath = `${AUTOREPO_MEDIA_DIR}/${antigo.file}`
        try { if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath) } catch {}
      }
      repos.splice(idxOld, 1)
    }

    repos.push({
      trigger: gatilhoFinal,
      type: 'text',
      text: respostaTxt
    })

    saveGroupAutorepo(from, repos)
    return reply(`*ᴏᴋ, ᴀᴜᴛᴏʀᴇᴘᴏ ᴛᴇxᴛᴏ sᴀʟᴠᴏ ᴅᴇ ${gatilhoFinal} ᴘᴀʀᴀ ${respostaTxt} 🙇‍♂️*`)
  }

  const gatilho = rmLetras(entradaRepo).replace(/\s+/g, ' ').trim()
  if (!gatilho) return reply('*ɢᴀᴛɪʟʜᴏ ɪɴᴠᴀ́ʟɪᴅᴏ 🙇‍♂️*')

  const key = normalizeRepoKey(gatilho)
  const textoQuoted = extractAnyTextRepo(quoted)
  const img = quoted.imageMessage || quoted?.viewOnceMessage?.message?.imageMessage || quoted?.viewOnceMessageV2?.message?.imageMessage
  const vid = quoted.videoMessage || quoted?.viewOnceMessage?.message?.videoMessage || quoted?.viewOnceMessageV2?.message?.videoMessage
  const aud = quoted.audioMessage
  const stk = quoted.stickerMessage

  const idxOld = repos.findIndex(r => normalizeRepoKey(r?.trigger) === key)
  if (idxOld >= 0) {
    const antigo = repos[idxOld]
    if (antigo?.file) {
      const oldPath = `${AUTOREPO_MEDIA_DIR}/${antigo.file}`
      try { if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath) } catch {}
    }
    repos.splice(idxOld, 1)
  }

  if (stk) {
    const saved = await saveAutorepoMediaFile(from, key, 'sticker', quoted)
    if (!saved) return reply('*ɴᴀ̃ᴏ ᴄᴏɴsᴇɢᴜɪ sᴀʟᴠᴀʀ ᴇssᴀ ғɪɢᴜʀɪɴʜᴀ 🙇‍♂️*')

    repos.push({
      trigger: gatilho,
      type: 'sticker',
      file: saved.file,
      mimetype: saved.mimetype
    })

    saveGroupAutorepo(from, repos)
    return reply(`*ᴏᴋ, ᴀᴜᴛᴏʀᴇᴘᴏ ғɪɢᴜʀɪɴʜᴀ sᴀʟᴠᴀ ᴇᴍ ${gatilho} 🙇‍♂️*`)
  }

  if (aud) {
    const saved = await saveAutorepoMediaFile(from, key, 'audio', quoted)
    if (!saved) return reply('*ɴᴀ̃ᴏ ᴄᴏɴsᴇɢᴜɪ sᴀʟᴠᴀʀ ᴇssᴇ ᴀᴜ́ᴅɪᴏ 🙇‍♂️*')

    repos.push({
      trigger: gatilho,
      type: 'audio',
      file: saved.file,
      mimetype: saved.mimetype
    })

    saveGroupAutorepo(from, repos)
    return reply(`*ᴏᴋ, ᴀᴜᴛᴏʀᴇᴘᴏ ᴀᴜ́ᴅɪᴏ sᴀʟᴠᴏ ᴇᴍ ${gatilho} 🙇‍♂️*`)
  }

  if (img) {
    const saved = await saveAutorepoMediaFile(from, key, 'image', quoted)
    if (!saved) return reply('*ɴᴀ̃ᴏ ᴄᴏɴsᴇɢᴜɪ sᴀʟᴠᴀʀ ᴇssᴀ ғᴏᴛᴏ 🙇‍♂️*')

    repos.push({
      trigger: gatilho,
      type: 'image',
      file: saved.file,
      mimetype: saved.mimetype,
      caption: textoQuoted || ''
    })

    saveGroupAutorepo(from, repos)
    return reply(`*ᴏᴋ, ᴀᴜᴛᴏʀᴇᴘᴏ ғᴏᴛᴏ sᴀʟᴠᴀ ᴇᴍ ${gatilho} 🙇‍♂️*`)
  }

  if (vid) {
    const saved = await saveAutorepoMediaFile(from, key, 'video', quoted)
    if (!saved) return reply('*ɴᴀ̃ᴏ ᴄᴏɴsᴇɢᴜɪ sᴀʟᴠᴀʀ ᴇssᴇ ᴠɪ́ᴅᴇᴏ 🙇‍♂️*')

    repos.push({
      trigger: gatilho,
      type: 'video',
      file: saved.file,
      mimetype: saved.mimetype,
      caption: textoQuoted || ''
    })

    saveGroupAutorepo(from, repos)
    return reply(`*ᴏᴋ, ᴀᴜᴛᴏʀᴇᴘᴏ ᴠɪ́ᴅᴇᴏ sᴀʟᴠᴏ ᴇᴍ ${gatilho} 🙇‍♂️*`)
  }

  if (textoQuoted) {
    repos.push({
      trigger: gatilho,
      type: 'text',
      text: textoQuoted
    })

    saveGroupAutorepo(from, repos)
    return reply(`*ᴏᴋ, ᴀᴜᴛᴏʀᴇᴘᴏ ᴛᴇxᴛᴏ sᴀʟᴠᴏ ᴇᴍ ${gatilho} 🙇‍♂️*`)
  }

  return reply('*ᴍᴀʀǫᴜᴇ ᴜᴍ ᴛᴇxᴛᴏ, ᴀᴜ́ᴅɪᴏ, ғɪɢᴜʀɪɴʜᴀ, ғᴏᴛᴏ ᴏᴜ ᴠɪ́ᴅᴇᴏ 🙇‍♂️*')
}
break

case 'delrepo':
case 'rmrepo': {
  if (!isGroup) return reply(mess.onlyGroup())
  if (!isGroupAdmins) return reply(mess.onlyAdmins())
  if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
  if (!isAutorepo) return reply('*ᴀᴛɪᴠᴇ ᴏ ᴀᴜᴛᴏʀᴇᴘᴏ ᴘʀɪᴍᴇɪʀᴏ ᴘᴀʀᴀ ᴜsᴀʀ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ 🙇‍♂️*')

  const repos = loadGroupAutorepo(from)
  if (!repos.length) return reply('*ᴇsᴛᴇ ɢʀᴜᴘᴏ ɴᴀ̃ᴏ ᴛᴇᴍ ɴᴇɴʜᴜᴍ ᴀᴜᴛᴏʀᴇᴘᴏ 🙇‍♂️*')

  const entrada = q.trim()
  if (!entrada) {
    return reply(`*ᴜsᴇ ᴀssɪᴍ:* ${prefix}rmrepo 1\n*ou:* ${prefix}rmrepo 1 5 7\n*ou:* ${prefix}rmrepo tudo 🙇‍♂️*`)
  }

  const entradaNorm = normalizeRepoKey(entrada)

  if (entradaNorm === 'tudo' || entradaNorm === 'todos') {
    let removidos = 0

    for (const item of repos) {
      if (item?.file) {
        const oldPath = `${AUTOREPO_MEDIA_DIR}/${item.file}`
        try { if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath) } catch {}
      }
      removidos++
    }

    saveGroupAutorepo(from, [])
    return reply(`*ᴏᴋ, ${removidos} ᴀᴜᴛᴏʀᴇᴘᴏs ʀᴇᴍᴏᴠɪᴅᴏs ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`)
  }

  const numeros = entrada
    .split(/\s+/)
    .map(x => Number(x))
    .filter(x => Number.isInteger(x) && x > 0)

  if (numeros.length) {
    const unicos = [...new Set(numeros)].sort((a, b) => b - a)
    const validos = unicos.filter(n => n <= repos.length)

    if (!validos.length) {
      return reply('*ɴᴇɴʜᴜᴍ ɴᴜ́ᴍᴇʀᴏ ᴠᴀ́ʟɪᴅᴏ ғᴏɪ ɪɴғᴏʀᴍᴀᴅᴏ 🙇‍♂️*')
    }

    const removidos = []

    for (const n of validos) {
      const item = repos[n - 1]
      if (!item) continue

      if (item?.file) {
        const oldPath = `${AUTOREPO_MEDIA_DIR}/${item.file}`
        try { if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath) } catch {}
      }

      removidos.push(item.trigger || `#${n}`)
      repos.splice(n - 1, 1)
    }

    saveGroupAutorepo(from, repos)

    return reply(`*ᴏᴋ, ᴀᴜᴛᴏʀᴇᴘᴏs ʀᴇᴍᴏᴠɪᴅᴏs ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*\n\n${removidos.map((x, i) => `${i + 1}. ${x}`).join('\n')}`)
  }

  const idx = repos.findIndex(r => normalizeRepoKey(r?.trigger) === entradaNorm)
  if (idx < 0) return reply('*ɴᴀ̃ᴏ ᴀᴄʜᴇɪ ᴇssᴇ ᴀᴜᴛᴏʀᴇᴘᴏ 🙇‍♂️*')

  const antigo = repos[idx]
  if (antigo?.file) {
    const oldPath = `${AUTOREPO_MEDIA_DIR}/${antigo.file}`
    try { if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath) } catch {}
  }

  const nomeRemovido = antigo?.trigger || entrada
  repos.splice(idx, 1)
  saveGroupAutorepo(from, repos)

  reply(`*ᴏᴋ, ᴀᴜᴛᴏʀᴇᴘᴏ ${nomeRemovido} ʀᴇᴍᴏᴠɪᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`)
}
break

case 'listrepo':
case 'autorepolist': {
  if (!isGroup) return reply(mess.onlyGroup())
  if (!isGroupAdmins) return reply(mess.onlyAdmins())
  if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
  if (!isAutorepo) return reply('*ᴀᴛɪᴠᴇ ᴏ ᴀᴜᴛᴏʀᴇᴘᴏ ᴘʀɪᴍᴇɪʀᴏ ᴘᴀʀᴀ ᴜsᴀʀ ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ 🙇‍♂️*')

  const repos = loadGroupAutorepo(from)
  if (!repos.length) return reply('*ᴇsᴛᴇ ɢʀᴜᴘᴏ ɴᴀ̃ᴏ ᴛᴇᴍ ɴᴇɴʜᴜᴍ ᴀᴜᴛᴏʀᴇᴘᴏ 🙇‍♂️*')

  let txt = `*ᴛᴏᴅᴏs ᴏs ᴀᴜᴛᴏʀᴇᴘᴏs ᴅᴏ ɢʀᴜᴘᴏ [ ${groupName} ] 🙇‍♂️*`

  for (let i = 0; i < repos.length; i++) {
    txt += `\n\n*${i + 1}.* *ɢᴀᴛɪʟʜᴏ:* ${repos[i].trigger}\n*↝ ᴛɪᴘᴏ:* ${repos[i].type}`
    if (repos[i].type === 'text') {
      txt += `\n*↝ ʀᴇsᴘᴏsᴛᴀ:* ${repos[i].text || ''}`
    }
  }

  reply(txt)
}
break

case 'autototext':
if(!isGroup) return reply(mess.onlyGroup());
if(!SoDono) return reply(mess.onlyOwner());
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(isYutaEscuta) {
    dataGp[0].yutaescutando = false
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
    dataGp[0].yutaescutando = true
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀꜱᴏ ᴅᴇ ʟᴇʀ ᴏꜱ ᴀᴜᴅɪᴏꜱ ᴇ ᴛʀᴀɴꜱᴄʀᴇᴠᴇʀ ᴩʀᴀ ᴛᴇxᴛᴏ ꜰᴏɪ ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*')
}
break

case 'autodl':
if(!isGroup) return reply(mess.onlyGroup());
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
if(isAutoDl) {
    dataGp[0].autodl = false
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
    dataGp[0].autodl = true
    setGp(dataGp)
    reply('*ᴀᴜᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ ᴀᴛɪᴠᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ ɴᴏ ɢʀᴜᴩᴏ 🙇‍♂️*')
}
break

case 'autofigu': case 'autosticker':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(isAutofigu) {
    dataGp[0].autosticker = false
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
    dataGp[0].autosticker = true
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀᴜᴛᴏғɪɢᴜʀɪɴʜᴀs ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*')
}
break

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(mess.onlyGroup())
if(!SoDono) return reply(mess.onlyOwner())
if(command == 'bangp'){
if(isBanchat) return reply(`*ᴏ ɢʀᴜᴘᴏ ᴊᴀ ᴇsᴛᴀ ʙᴀɴɪᴅᴏ sᴇɴʜᴏʀ(ᴀ) 🤷‍♂️*`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`*ᴏ ɢʀᴜᴘᴏ ғᴏɪ ʙᴀɴɪᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ, ᴀɢᴏʀᴀ ɴɪɴɢᴜᴇᴍ ᴘᴏᴅᴇʀᴀ ᴜsᴀʀ ᴍᴇᴜs ᴄᴏᴍᴀɴᴅᴏs 🙇‍♂️*`)
} else {
if(!isBanchat) return reply(`*ᴇsᴛᴇ ɢʀᴜᴘᴏ ᴊᴀ ᴇsᴛᴀ ᴅᴇsʙᴀɴɪᴅᴏ sᴇɴʜᴏʀ(ᴀ) 🤷‍♂️*`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`*ᴏ ɢʀᴜᴘᴏ ғᴏɪ ᴅᴇsʙᴀɴɪᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ sᴇɴʜᴏʀ(ᴀ), ᴀɢᴏʀᴀ ᴛᴏᴅᴏs ᴅᴇssᴇ ɢʀᴜᴘᴏ ᴘᴏᴅᴇ ᴜsᴀʀ ᴍᴇᴜs ᴄᴏᴍᴀɴᴏs 🙇‍♂️*`)
}
break
  
case 'gppv':
    if(!isGroup) return reply(mess.onlyGroup())
    if(!isGroupAdmins) return reply(mess.onlyAdmins())
    if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
    reply(`*ᴊᴀ ᴇsᴛᴏᴜ ᴇɴᴠɪᴀɴᴅᴏ ᴏ ʟɪɴᴋ ɴᴏ sᴇᴜ ᴘᴠ ${isCargo} 🙅‍♂️*`)
 linkgc = await yuta.groupInviteCode(from)
yuta.sendMessage(sender, { text: 'https://chat.whatsapp.com/' + linkgc}, {quoted: selo})
 break          

case 'antidelete': {
  if (!isGroup) return reply(mess.onlyGroup())
  if (!isGroupAdmins) return reply(mess.onlyAdmins())
  const pathGp = `./DADOS DO YUTA/grupos/${from}.json`
  if (!fs.existsSync(pathGp)) {
    fs.writeFileSync(pathGp, JSON.stringify([{ antidelete: false }]))
  }
  const dataGp = JSON.parse(fs.readFileSync(pathGp))
  dataGp[0].antidelete = !dataGp[0].antidelete
  fs.writeFileSync(pathGp, JSON.stringify(dataGp, null, 2))
  reply(dataGp[0].antidelete ? '*ᴏ ᴍᴏᴅᴏ x9 ᴍᴇɴꜱᴀɢᴇᴍ ꜰᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ 🙇‍♂️*' : '*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*')
}
break

case 'anticanal': {
    try {
        if (!isGroup) return reply(mess.onlyGroup())
        if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
        if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin())

        const dirPath = './DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA'
        const filePath = `${dirPath}/${from}.json`

        // Garante que a pasta existe
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true })
        }

        let json = [{}]

        // Se o arquivo existir, tenta ler
        if (fs.existsSync(filePath)) {
            try {
                const data = fs.readFileSync(filePath, 'utf-8')
                json = JSON.parse(data)

                if (!Array.isArray(json)) json = [json]
                if (!json[0]) json[0] = {}
            } catch (err) {
                console.log('Erro ao ler JSON do anticanal:', err)
                json = [{}]
            }
        }

        // Garante que a estrutura exista
        if (!json[0]) json[0] = {}

        if (json[0].anticanal === true) {
            json[0].anticanal = false
            fs.writeFileSync(filePath, JSON.stringify(json, null, 2))
            reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪᴄᴀɴᴀʟ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*')
        } else {
            json[0].anticanal = true
            fs.writeFileSync(filePath, JSON.stringify(json, null, 2))
            reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪᴄᴀɴᴀʟ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*')
        }

    } catch (e) {
        console.log('Erro geral no anticanal:', e)
        reply(mess.error())
    }
}
break
                          
case 'antilinkgp':
    if(!isGroup) return reply(mess.onlyGroup())
    if(!isGroupAdmins) return reply(mess.onlyAdmins())
    if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
    if(isAntilinkgp) {
        dataGp[0].antilinkgp = false
        setGp(dataGp)
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
    } else {
        dataGp[0].antilinkgp = true
        setGp(dataGp)
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪʟɪɴᴋ ғᴏɪ ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*')
    }
break

case 'antidocumento':
case 'antidoc':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

    // Alterna automaticamente o estado do antidoc
    if (dataGp[0].antidoc) {
        dataGp[0].antidoc = false;
        setGp(dataGp);
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
    } else {
        dataGp[0].antidoc = true;
        setGp(dataGp);
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪᴅᴏᴄᴜᴍᴇɴᴛᴏ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
    }
break;

case 'antictt':
case 'anticontato':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

    // Alterna automaticamente o estado do antictt
    if (dataGp[0].antictt) {
        dataGp[0].antictt = false;
        setGp(dataGp);
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
    } else {
        dataGp[0].antictt = true;
        setGp(dataGp);
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ ᴄᴏɴᴛᴀᴛᴏ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
    }
break;

case 'antiddd':
case 'anti_ddd':
case 'anti-ddd':
    if (!isGroup) return await reply(mess.onlyGroup());
    if (!isGroupAdmins) return await reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return await reply(mess.onlyBotAdmin());

    // Alterna automaticamente o estado do antiDDD
    if (dataGp[0].ANTI_DDD.active) {
        dataGp[0].ANTI_DDD.active = false;
        setGp(dataGp);
        await reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
    } else {
        dataGp[0].ANTI_DDD.active = true;
        setGp(dataGp);
        await reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪᴅᴅᴅ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
    }
break;

case 'antiloc':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(isAntiLoc) {
    dataGp[0].antiloc = false
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
    dataGp[0].antiloc = true
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ ʟᴏᴄᴀʟɪᴢᴀᴄᴀᴏ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*')
}
break

case 'antiporn':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(isAntiPorn) {
    dataGp[0].antiporn = false
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
    dataGp[0].antiporn = true
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪᴘᴏʀɴᴏɢʀᴀғɪᴀ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*')
}
break

case 'antifake':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins())
if(isAntifake) {
    dataGp[0].antifake = false
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
    dataGp[0].antifake = true
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪғᴀᴋᴇ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*')
}
break

case 'anticatalogo':
case 'anticatalg':  
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

    if (isAnticatalogo) {
        dataGp[0].anticatalogo = false;
        setGp(dataGp);
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
    } else {
        dataGp[0].anticatalogo = true;
        setGp(dataGp);
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪᴄᴀᴛᴀʟᴀɢᴏ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*');
    }
    break;


       
    case 'antiaudio':
if(!isGroup) return reply(mess.onlyGroup())
if(!isGroupAdmins) return reply(mess.onlyAdmins())
if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())
if(isAntiAudio) {
    dataGp[0].antiaudio = false
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
} else {
    dataGp[0].antiaudio = true
    setGp(dataGp)
    reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ ᴀᴜᴅɪᴏ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*')
}
break

case 'antisticker':
    if(!isGroup) return reply(mess.onlyGroup())
    if(!isGroupAdmins) return reply(mess.onlyAdmins())
    if(!isBotGroupAdmins) return reply(mess.onlyBotAdmin())

    // Alternar o estado de antisticker
    dataGp[0].antisticker = !dataGp[0].antisticker;
    setGp(dataGp);

    if(dataGp[0].antisticker) {
        reply('*ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ sᴄᴛɪᴄᴋᴇʀ 🙇‍♂️*');
    } else {
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
    }
    break;


case 'antiimg':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

    // Alternar o estado de antiimagem
    dataGp[0].antiimg = !dataGp[0].antiimg;
    setGp(dataGp);

    if (dataGp[0].antiimg) {
        reply('*ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ ɪᴍᴀɢᴇᴍ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
    } else {
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
    }
    break;

case 'antivideo':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

    // Alternar o estado de antivídeo
    dataGp[0].antivideo = !dataGp[0].antivideo;
    setGp(dataGp);

    if (dataGp[0].antivideo) {
        reply('*ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪ ᴠɪᴅᴇᴏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
    } else {
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
    }
    break;
    
    case 'x9adm':
    case 'x9':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

    // Alternar o estado de x9
    dataGp[0].x9 = !dataGp[0].x9;
    setGp(dataGp);

    if (dataGp[0].x9) {
        reply('*ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ᴄᴏᴍᴀɴᴅᴏ x9 ᴀᴅɪᴍɪɴ 🙇‍♂️*');
    } else {
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
    }
    break;

case 'antilink':
case 'antilinkhard':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

    // Alternar o estado de antilink e antilinkhard
    dataGp[0]['antilink'] = !dataGp[0]['antilink'];
    dataGp[0]['antilinkhard'] = dataGp[0]['antilink']; // Sincroniza antilinkhard com antilink
    setGp(dataGp);

    if (dataGp[0]['antilink']) {
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪʟɪɴᴋʜᴀʀᴅ ғᴏɪ ᴀᴛɪᴠᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*');
    } else {
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ᴀɴᴛɪʟɪɴᴋʜᴀʀᴅ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
    }
    break;
    
    
    
 
case 'x9visuunica':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

    // Alternar o estado de x9visuunica
    dataGp[0].X9VisuUnica = !dataGp[0].X9VisuUnica;
    setGp(dataGp);

    if (dataGp[0].X9VisuUnica) {
        reply('*ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ x9ᴠɪᴢᴜᴜɴɪᴄᴀ 🙇‍♂️*');
    } else {
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
    }
    break;

case 'so_adm':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());

    // Alternar o estado de so_adm
    dataGp[0].soadm = !dataGp[0].soadm;
    setGp(dataGp);

    if (dataGp[0].soadm) {
        reply('*ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ sᴏ ᴀᴅᴍ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
    } else {
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
    }
    break;

case 'odelete':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
    nescessario.Odelete = !nescessario.Odelete;
    setNes(nescessario);
    if (nescessario.Odelete) {
        reply('*ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ʀᴇᴄᴜʀsᴏ ᴏᴅᴇʟᴇᴛᴇ ɴᴏs ɢʀᴜᴘᴏs 🙇‍♂️*');
    } else {
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏs ɢʀᴜᴘᴏs 🙅‍♂️*');
    }
    break;

case 'antilinkeasy':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotGroupAdmins());

    // Alternar o estado de antilinkeasy
    dataGp[0].antilinkeasy = !dataGp[0].antilinkeasy;
    setGp(dataGp);

    if (dataGp[0].antilinkeasy) {
        reply('*ᴀᴛɪᴠᴏᴜ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴏ ᴀɴᴛɪʟɪɴᴋᴇᴀsʏ ɴᴏ ɢʀᴜᴘᴏ 🙇‍♂️*');
    } else {
        reply('*ᴏ ʀᴇᴄᴜʀsᴏ ғᴏɪ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ ɴᴏ ɢʀᴜᴘᴏ 🙅‍♂️*');
    }
    break; 
    
    case 'anti-sp':
case 'antisp':
case 'anti_sp': //By Lm Only
try {
	if (!isGroup) return reply("Comando apenas grupo!!");
	if (!SoDono && !info.key.fromMe) return reply("*Você não tem permissão de usar este comando!!!* 😠");
	if (!isBotGroupAdmins) return reply("O bot prescisa ser *Administrador* do grupo para executar este comando");
	
	if (ANT_SP.groupId === from && ANT_SP.active) {
		ANT_SP.active = false;
		fs.writeFileSync(directory, JSON.stringify(ANT_SP, null, 2));
		reply(`*ᴀɴᴛɪsᴘ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`);
	}
	else {
		ANT_SP.active = true;
		ANT_SP.groupId = from;
		ANT_SP.groupName = groupName;
		fs.writeFileSync(directory, JSON.stringify(ANT_SP, null, 2));
		await reply(
			`*ᴅᴇᴛᴇᴄᴛᴏʀ ᴅᴇ ʟɪɴᴋs ɢʟᴏʙᴀʟ ᴀᴛɪᴠᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*`
			);
	}
} catch (error) {
	console.error(error);
	reply("Houve um erro inesperado!! ⚠️");
}
break;
    
//===============[ FIM DAS ATIVACOES ]============\\   

//============[ RANDOM CMD ]=============\\

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só adm pode utilizar este tipo de comando.`)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar Cachorro|Cachorros são bom pra comer na Venezuela...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./DADOS DO YUTA/func/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./DADOS DO YUTA/func/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")  
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./DADOS DO YUTA/func/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(command == "anotacao" || command == "nota") {
if(!q) return reply("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(anotar[i2].puxar.length == 0) return reply("Este grupo não tem nenhuma anotação...")    
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2].puxar 
txtin = `Aqui está todas as anotações registradas em minha DADOS DO YUTA do grupo: *[ ${groupName} ]*\n`
for ( i = 0; i < antr.length; i++) {
txtin += `\n↝ Anotação: ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`
}
txtin += ""
reply(txtin)
}
break

case 'download-link':
if(q.includes("video") || q.includes("mp4")) {
await yuta.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: selo}).catch(async(e) => {
reply("Erro, visualize se este link é válido...")
})
} else if(q.includes("webp") || q.includes("jpg")) {
await yuta.sendMessage(from, {image: {url: q}}, {quoted: selo}).catch(async(e) => {
reply("Erro, visualize se este link é válido...")
})
}
break

case 'criador':
await reagir(from, "🌪️")
  try {
    const thumbnail = await getBuffer(criador);
    if (!thumbnail) throw new Error("Thumbnail não carregado");
    await yuta.sendMessage(from, {
      image: thumbnail,
      caption: `— *✨ ᴄᴏɴᴛᴀᴛᴏ ᴅᴏ ᴅᴇsᴇɴᴠᴏʟᴠᴇᴅᴏʀ*\n> \`https://wa.me/559183721035\`\n— *🗿 ɢɪᴛʜᴜʙ*\n> \`https://github.com/Nk-Petrov/\`\n•\n— "ᴇ sᴇ ᴛᴜᴅᴏ ᴀᴄᴀʙᴀssᴇ ᴀɢᴏʀᴀ? ᴏ ǫᴜᴇ ᴠᴏᴄê ғᴀʀɪᴀ?"\n•\n- *ʏᴜᴛᴀʙᴏᴛ-ᴍᴅ — ᴜᴍ ʙᴏᴛ ᴄʀɪᴀᴅᴏ ᴘᴀʀᴀ ᴇɴᴛʀᴇɢᴀʀ ʀᴀᴘɪᴅᴇᴢ, ᴅᴇsᴇᴍᴘᴇɴʜᴏ ᴇ ᴄᴏɴғɪᴀʙɪʟɪᴅᴀᴅᴇ. ᴇsᴘᴇʀᴏ ǫᴜᴇ ᴠᴏᴄê ɢᴏsᴛᴇ ᴅᴏ ᴍᴇᴜ ᴛʀᴀʙᴀʟʜᴏ. 🥇*\n•\n> ${NomeDoBot}`,
      contextInfo: NkChannelKk
    }, { quoted: selo });
  } catch (e) {
    console.error(e);
    await yuta.sendMessage(from, { text: mess.error() }, { quoted: selo });
  }
  break;

case 'correio':
if(!q.trim().includes("/")) return reply(`Exemplo: ${prefix}correio 5591.../Oi Amor, sdds`)
var [ tx1, tx2 ] = q.trim().split("/")
bla = mess.anonymousMail(tx2)
yuta.sendMessage(`${tx1}@s.whatsapp.net`, {text: bla})
reply(`*✰ ᴍᴇɴsᴀɢᴇᴍ ᴇɴᴠɪᴀᴅᴀ ᴘᴀʀᴀ ${tx1} ★*`)
break

case 'destrava':
await yuta.sendMessage(from, {text: destrava(prefix)}, {quoted: selo})
break 

case 'perfil': {
try {
let avatarUrl;
try {
  const ppUrl = await yuta.profilePictureUrl(sender, "image");
  avatarUrl = ppUrl || imgperfil;
} catch (e) {
  avatarUrl = imgperfil;
}

let status;
try {
  const recadoUser = await yuta.fetchStatus(sender);
  status = recadoUser[0]?.status?.status || "sem bio";
} catch {
  status = "bio oculta ou indisponivel";
}
const conselho = (advices?.commonAdvices?.length)
  ? advices.commonAdvices[Math.floor(Math.random() * advices.commonAdvices.length)]
  : "nao confie nem na sua sombra...";

const num = () => Math.floor(Math.random() * 9) + 1;
const pct = () => `${num()}${num()}%`;
const programa = (Math.floor(Math.random() * 9000) + 1000).toLocaleString('pt-BR');
let dadosUser = { messages: 0, cmd_messages: 0, figus: 0, imagens: 0, videos: 0, audios: 0, documentos: 0 };

if (isGroup && groupIdscount.includes(from)) {
  let indGrupo = groupIdscount.indexOf(from);
  let grupoData = countMessage[indGrupo];
  let userData = grupoData.numbers.find(u => u.id === sender);

  if (userData) {
    dadosUser = {
      messages: userData.messages || 0,
      cmd_messages: userData.cmd_messages || 0,
      figus: userData.figus || 0,
      imagens: userData.imagens || 0,
      videos: userData.videos || 0,
      audios: userData.audios || 0,
      documentos: userData.documentos || 0
    };
  }
}
const cardPerfil = `${SITE}/canvas/perfil?apitoken=${TOKEN}` +
`&fundo=${encodeURIComponent(avatarUrl)}` +
`&logo=${encodeURIComponent(avatarUrl)}` +
`&nome=${encodeURIComponent(pushname || "Usuario")}` +
`&subnome=${encodeURIComponent(NomeDoBot + " • My Profile")}` +
`&custom_status=${encodeURIComponent(status)}`
await yuta.sendMessage(from, {
  image: { url: cardPerfil },
  caption: mess.perfilyuta(pushname, sender, status, isChVip, isCargo, dadosUser, pct, programa, conselho, NomeDoBot),
  contextInfo: { ...NkChannelKk }
}, { quoted: selo })

} catch (e) {
console.log(e);
reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
}
break;
}

case 'hd':
  if ((isMedia && !info.message.videoMessage) || isQuotedImage) { post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage;
    imagem = await downloadContentFromMessage(post, 'image');
    base64 = Buffer.from([]);
    for await (const send of imagem) {
      base64 = Buffer.concat([base64, send]);
    }
    reply(`*ᴀʟᴛᴇʀᴀɴᴅᴏ ᴀ ǫᴜᴀʟɪᴅᴀᴅᴇ ᴘᴀʀᴀ ʜᴅ...* 💁‍♂️`);
    try {
      let link = await upload(base64) || q.trim();
      return yuta.sendMessage(from, {image: {url: `https://shizuku-apis.online/api/upscale?img=${encodeURIComponent(link)}&apitoken=Nk-Petrov-And-Harunni-Petrov`}, contextInfo: NkChannelKk}, { quoted: selo });
    } catch (error) {
      console.error(error);
      return reply(mess.error());
    }
  } else {
    reply(`*ᴍᴇɴᴄɪᴏɴᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴘᴀʀᴀ ᴀᴘʟɪᴄᴀʀ ᴏ ᴇғᴇɪᴛᴏ ʜᴅ* 🙇‍♂️`);
  }
break;

case 'ping': {
try {
    reagir(from, "✨");
    const firstV = speed();
    const secondV = speed() - firstV;

    const allGroups = await yuta.groupFetchAllParticipating();
    const groupList = Object.values(allGroups);

    const timestamp = speed();
    const fast = speed() - timestamp;

    const freeRam = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
    const totalRam = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);

    let totalComandos = 0;
    try {
        const data = fs.readFileSync('./yuta.js', 'utf8');
        const regex = /case\s'(\w+)'/g;
        totalComandos = [...data.matchAll(regex)].length;
    } catch {
        totalComandos = '🤷‍♂️';
    }

    let avatarUrl;
    try {
        const ppUrl = await yuta.profilePictureUrl(sender, "image");
        avatarUrl = ppUrl || imgperfil;
    } catch {
        avatarUrl = imgperfil;
    }

    const uptime = TimeCount(process.uptime());
    const statusBot = isBotoff ? "Offline" : "Online";

    const apiPing = `${SITE}/canvas/ping?apitoken=${TOKEN}` +
    `&fundo=${encodeURIComponent("https://files.catbox.moe/5s5ako.jpg")}` +
    `&logo=${encodeURIComponent(avatarUrl)}` +
    `&uptime=${encodeURIComponent(uptime)}` +
    `&memoria=${encodeURIComponent(`${freeRam}/${totalRam}GB`)}` +
    `&latencia=${encodeURIComponent(secondV.toFixed(4) + "ms")}` +
    `&status=${encodeURIComponent(statusBot)}` +
    `&velocidade=${encodeURIComponent(fast.toFixed(3))}`   

    await yuta.sendMessage(from, {
        text: mess.Velocidade(fast, secondV, groupList, TimeCount, NomeDoBot, freeRam, totalRam, totalComandos),
        contextInfo: {
            ...NkChannelKk,
            externalAdReply: {
                title: `⚡ Status do ${NomeDoBot}`,
                body: `Latência: ${secondV.toFixed(4)}ms`,
                mediaType: 1,
                previewType: "PHOTO",
                thumbnailUrl: apiPing,
                renderLargerThumbnail: true,
                sourceUrl: SITE
            }
        }
    }, { quoted: selo })

} catch (e) {
    console.log(e)
    reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
}
}
break;
case 'tabela':
await yuta.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: selo})
break 

case 'destrava2':
await yuta.sendMessage(from, {text: destrava2 (prefix)}, {quoted: selo})
break   

case 'gerarcpf':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
await yuta.sendMessage(from, {text: `CPF gerado com sucesso: ${cpf}`, contextInfo:{...NkChannelKk}}, {quoted: selo}) 
break

case 'ddd':
if(args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
await yuta.sendMessage(from, {text: dddlist, contextInfo:{...NkChannelKk}}, {quoted: selo}) 
break

case 'gethtml':
if(!q || !isUrl(args[0])) return reply(`Modo de uso: ${prefix+command} link do site`)
try {
await replyWithReaction(`*ᴇɴᴠɪᴀɴᴅᴏ ᴇᴍ sᴇᴜ ᴘᴠ 🙇‍♂️*`, {react: {text: '✅', key: info.key}});
axios.get(args[0], { headers: {"user-agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.136 Mobile Safari/537.36"}}).then(async (res) => {
let htmlData = typeof res.data === 'object' ? JSON.stringify(res.data, null, 2) : res.data
htmlData = htmlData.replace(/    /g, '').replace(/></g, '>\n<').replace(/> </g, '>\n<')
await yuta.sendMessage(sender, {document: Buffer.from(htmlData), fileName: q+`.html`, mimetype: 'text/html'}, {quoted: selo})}).catch(e => {return reply(mess.error())})
} catch (e) {
console.log(e)
reply(mess.error())
}
break

case 'revelar':
case 'rvisu':
case 'open':
    await reagir(from, "👀");

    if (JSON.stringify(info).includes("videoMessage")) {
        var Xoxota = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
        var video = Xoxota?.videoMessage || info.message?.videoMessage || 
                    Xoxota?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || 
                    info.message?.viewOnceMessage?.message?.videoMessage || Xoxota?.viewOnceMessage?.message?.videoMessage;

        if (video) {
            video.viewOnce = false;
            video.video = { url: video.url };          
            yuta.sendMessage(from, video, { quoted: selo });
        }
    } else if (JSON.stringify(info).includes("imageMessage")) {
        var Xoxota = info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
        var image = Xoxota?.imageMessage || info.message?.imageMessage || 
                    Xoxota?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || 
                    info.message?.viewOnceMessage?.message?.imageMessage || Xoxota?.viewOnceMessage?.message?.imageMessage;

        if (image) {
            image.viewOnce = false;
            image.image = { url: image.url };
            yuta.sendMessage(from, image, { quoted: selo });
        }
    } else if (JSON.stringify(info).includes("audioMessage") || info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2Extension?.message?.audioMessage) {
        var audio = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage;
        
        if (audio) {
            if (!audio.mimetype) return;

            let buffAudio = await getFileBuffer(audio, 'audio');
            let audioFile = getRandom('.mp3');
            fs.writeFileSync(audioFile, buffAudio);

            let audioBuffer = fs.readFileSync(audioFile);
            yuta.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg', ptt: false }, { quoted: selo });

            fs.rmSync(audioFile);
        }
    } else {
        reply("• Marque uma Imagem, video ou áudio em visualização única.");
    }
    break//Nk' Petrøv

case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break 
 


case 'ptvmsg':
if (!isQuotedVideo && !info.message.videoMessage) return reply('Marque um vídeo/gif que você deseja converter para mensagem de vídeo.');
await yuta.relayMessage(from, {ptvMessage: isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage }, {})
break


case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break
    
case 'admins':
case 'listadmins':  
case 'listaadmins':   
if(!isGroup) return reply(mess.onlyGroup())
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\n*Total de Adminstradores:* ${groupAdmins.length}\n-\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `( ${no.toString()} ) - @${admon.split('@')[0]}\n`
}
await mentions(ytb, groupAdmins, true)
break

case 'consultar_vip':
if(!JSON.stringify(vip).includes(sender)) return reply("Você não está incluso atualmente na lista de usuários vip(s)..")
AB = vip.map(i => i.id).indexOf(sender)
await mention(`Usuário: @${vip[AB].id.split('@')[0]}\n• Expiração: ${vip[AAB].infinito == false ? `*Seu vip irá expirar em ${vip[AB].dias} dia${vip[AB].dias > 1 ? `s` : ``}.*` : `*Não existe um dia de expiração do seu vip.*`}`)
break


case 'envpv':
case 'pv':{
if(!isGroup) return reply("*sᴏᴍᴇɴᴛᴇ ᴇᴍ ɢʀᴜᴘᴏs 🙇‍♂️*")
if(!menc_prt) return reply("*ᴍᴀʀǫᴜᴇ ᴀ ᴍsɢ ᴏᴜ ᴀ ᴍɪᴅɪᴀ ǫᴜᴇ ᴠᴏᴄᴇ ǫᴜᴇʀ ǫᴜᴇ ᴇᴜ ᴍᴀɴᴅᴇ ɴᴏ ᴘᴠ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*")
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? "*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*" :pink.caption.replace(new RegExp(prefix+command, "gi"), `*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`)
pink.image = {url: pink.url}
} else if(blue && !aud_d && !purple) {
var DFC = blue  
blue.caption = q.length > 1 ? "*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*"+q.trim() :blue.caption.replace(new RegExp(prefix+command, "gi"), `*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`).trim()
blue.video = {url: blue.url}
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`).trim()
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`).trim()
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*"+q.trim() :yellow.caption.replace(new RegExp(prefix+command, "gi"), `*ᴘʀᴏɴᴛᴏ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`).trim()
yellow.document = {url: yellow.url}
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.ptt = true
}
reply("*ᴏʟʜᴀ ᴏ ᴍᴇᴜ ᴘᴠ sᴇɴʜᴏʀ(ᴀ).💞*")
await yuta.sendMessage(sender, DFC, {quoted: selo}).catch(e => {
console.log(e)
})
}
break


case 'doc':
case 'docfake':
try {
sprd = "|"
if(!q) return reply(`${prefix + command} exemplo${sprd}500${sprd}apk\n-\nOs tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png`)
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.Android 🚀.package-archive'
if(mimetyp.toLowerCase() == 'aac') mimetyp = 'audio/aac'
if(mimetyp.toLowerCase() == 'xml') mimetyp = 'application/xml'
if(mimetyp.toLowerCase() == 'zip') mimetyp = 'application/zip'
if(mimetyp.toLowerCase() == 'jpg') mimetyp = 'image/jpeg'
if(mimetyp.toLowerCase() == 'ppt') mimetyp = 'application/vnd.ms-powerpoint'
if(mimetyp.toLowerCase() == 'pptx') mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
if(mimetyp.toLowerCase() == 'mp4') mimetyp = 'video/mp4'
if(mimetyp.toLowerCase() == 'm4a') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'mp3') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'gif') mimetyp = 'image/gif'
if(mimetyp.toLowerCase() == 'png') mimetyp = 'image/png'
if(mimetyp.toLowerCase() == 'svg') mimetyp = 'image/svg+xml'
if(mimetyp.toLowerCase() == 'txt') mimetyp = 'text/plain'
let Messagemdoc = {document: fs.readFileSync('./DADOS DO YUTA/data/docf.txt'), mimetype: mimetyp, jpegThumbnail: await getBuffer(thumbc), fileName: nomedoc, fileLength: peso, headerType: 4, contextInfo:{forwardingScore:999,isForwarded:true}}
await yuta.sendMessage(from, Messagemdoc, {quoted: selo})
} catch (err) {
console.log(err)
reply(mess.error())
}
break

case 'sender':
bla = jidNormalizedUser(isGroup ? info?.key?.participantPn || info?.key?.senderPn || await yuta?.user?.id || info?.key?.participant : info?.key?.senderPn || info?.key?.participant ||info?.key?.remoteJid);
reply(bla)
break


case 'rename':
case 'roubar':
    if (!isQuotedSticker) return reply('*ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ғɪɢᴜʀɪɴʜᴀ...💁‍♂️*');
    encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
    var kls = q;
    var pack = kls.split("/")[0];
    var author2 = kls.split("/")[1];
    if (!q) {
        return reply(`*ᴇꜱᴛᴀ ꜰᴀʟᴛᴀɴᴅᴏ ᴏ ɴᴏᴍᴇ ᴅᴏ ᴩᴀᴄᴏᴛᴇ + ᴀᴜᴛᴏʀ 🤷‍♂️*`);
    }
    if (!pack || !author2) {
        return reply(`*ᴄᴏᴍᴏ ᴠᴏᴄᴇ ǫᴜᴇʀ ʀᴇɴᴏᴍᴇᴀʀ ᴀ ꜰɪɢᴜʀɪɴʜᴀ ᴅᴇꜱꜱᴇ ᴊᴇɪᴛᴏ ᴀɪ? 🤦‍♂️*\n> *ᴇxᴇᴍᴩʟᴏ ᴅᴇ ᴜꜱᴏ: ${prefix + command} Nk/Petrov*`);
    }
    reply(mess.wait());
    var bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`;    
    try {
        var mantap = await convertSticker(bas64, author2, pack);
        var sti = Buffer.from(mantap, 'base64');
        yuta.sendMessage(from, {
            sticker: sti,
            contextInfo: NkChannelKk
        }, { quoted: selo }).catch((err) => {
            reply(mess.error());
        });
    
    } catch (e) {
        console.error(e);
        reply(mess.error());
    }
break;

case 'take':
try {
  if (!isQuotedSticker) return reply('*ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ғɪɢᴜʀɪɴʜᴀ...💁‍♂️*');
  reply(mess.teste());

  const db = readTakeDB();
  const userKey = sender.replace(/\D/g, "");

  const _author = db[userKey]?.author || `${pushname}`;
  const _pack = db[userKey]?.packname || ` `;

  const takeSTK = await getFileBuffer(
    info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage,
    'sticker'
  );

  const prepareSTK = await convertSticker(
    takeSTK.toString('base64'),
    _pack,     
    _author    
  );

  await yuta.sendMessage(from, {
    sticker: prepareSTK,
    contextInfo: NkChannelKk
  }, { quoted: selo });

} catch (e) {
  console.error(e);
  reply(mess.error());
}
break;

case "rgtake": {
  try {
    const formatDataBR = (ms) => {
      const d = new Date(ms);
      const dd = String(d.getDate()).padStart(2, "0");
      const mm = String(d.getMonth() + 1).padStart(2, "0");
      const yyyy = d.getFullYear();
      const hh = String(d.getHours()).padStart(2, "0");
      const mi = String(d.getMinutes()).padStart(2, "0");
      const ss = String(d.getSeconds()).padStart(2, "0");
      return `${dd}/${mm}/${yyyy} as ${hh}:${mi}:${ss}`;
    };

    const exemploMsg =
`*ᴄᴀᴅᴇ sᴜᴀ ᴍᴀʀᴄᴀ... ᴏᴜ ᴠᴏᴄᴇ ᴀɪɴᴅᴀ ɴᴀᴏ ᴛᴇᴍ ᴜᴍᴀ?* 🤷‍♂️

*ᴜsᴇ ᴏ ғᴏʀᴍᴀᴛᴏ ᴄᴏʀʀᴇᴛᴏ ᴘᴀʀᴀ sᴇʟᴀʀ sᴇᴜ ɴᴏᴍᴇ:* 🙇‍♂️

➮ ᴇxᴇᴍᴘʟᴏ: \`${prefix}rgtake texto1/texto2\` 💁‍♂️`;

    const texto = (q || "").trim();
    if (!texto) return reply(exemploMsg);

    const db = readTakeDB();
    const userKey = userKeyFromJid(sender);

    if (db[userKey]) {
      const authorAtual = db[userKey]?.author || "N/A";
      const packAtual = db[userKey]?.packname || "N/A";
      const criadoEm = db[userKey]?.savedAt ? formatDataBR(db[userKey].savedAt) : "N/A";
      const alteradoEm = db[userKey]?.updatedAt ? formatDataBR(db[userKey].updatedAt) : "Nenhuma alteração.";

      return reply(`*ᴠᴏᴄᴇ ᴊᴀ ᴘᴏssᴜɪ sᴜᴀ ᴍᴀʀᴄᴀ ᴅᴀɢᴜᴀ ʀᴇɢɪsᴛʀᴀᴅᴀ... ᴇ ᴇʟᴀ ᴄᴀʀʀᴇɢᴀ sᴇᴜ ɴᴏᴍᴇ.* 🙇‍♂️

*ɪɴғᴏʀᴍᴀᴄᴏᴇs ᴀᴛᴜᴀɪs ↴* 💁‍♂️

➮ *ᴀᴜᴛʜᴏʀ: ${authorAtual}* 🤷‍♂️  
➮ *ᴘᴀᴄᴋɴᴀᴍᴇ: ${packAtual}* 🙆‍♂️  
➮ *ʀᴇɢɪsᴛʀᴏᴜ ᴇᴍ: ${criadoEm}* 💁‍♂️  
➮ *ᴜʟᴛɪᴍᴀ ᴀʟᴛᴇʀᴀᴄᴀᴏ: ${db[userKey]?.updatedAt ? alteradoEm : "ɴᴇɴʜᴜᴍᴀ ᴀʟᴛᴇʀᴀᴄᴀᴏ."}* 🙇‍♂️  

*ᴘᴀʀᴀ ᴀʟᴛᴇʀᴀʀ sᴜᴀ ᴍᴀʀᴄᴀ ᴜsᴇ ${prefix}modtake* 🤷‍♂️  
*ᴘᴀʀᴀ ᴅᴇʟᴇᴛᴀʀ ᴜsᴇ ${prefix}rmtake* 🙆‍♂️`);
    }

    const separador = texto.includes("|") ? "|" : (texto.includes("/") ? "/" : null);
    if (!separador) return reply(exemploMsg);

    const partes = texto.split(separador).map(t => t.trim()).filter(Boolean);
    if (partes.length < 2) return reply(exemploMsg);

    
    const author = partes[0].slice(0, 40);
    const packname = partes.slice(1).join(` ${separador} `).trim().slice(0, 40);

    if (!author || !packname) return reply(exemploMsg);

    const agora = Date.now();
    db[userKey] = {
      author,
      packname,
      savedAt: agora,
      updatedAt: null
    };
    writeTakeDB(db);

    return reply(
`*ʀᴇɢɪsᴛʀᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ... ᴀɢᴏʀᴀ sᴜᴀ ᴍᴀʀᴄᴀ ᴇsᴛᴀ ɢʀᴀᴠᴀᴅᴀ ɴᴏ ᴅᴇsᴛɪɴᴏ. ✨* 🙇‍♂️

*ɪɴғᴏʀᴍᴀᴄᴏᴇs ᴀʙᴀɪxᴏ ↴* 💁‍♂️

➮ *ᴀᴜᴛʜᴏʀ: ${author}* 🤷‍♂️  
➮ *ᴘᴀᴄᴋ: ${packname}* 🙆‍♂️  
➮ *ʀᴇɢɪsᴛʀᴀᴅᴏ ᴇᴍ: ${formatDataBR(agora)}* 💁‍♂️  

*ᴘᴀʀᴀ ᴠᴇʀ ᴏᴜᴛʀᴀs ɪɴғᴏʀᴍᴀᴄᴏᴇs ᴜsᴇ: ${prefix}mytake* 🙇‍♂️  
*ᴘᴀʀᴀ ᴀʟᴛᴇʀᴀʀ ᴀ ᴍᴀʀᴄᴀ ᴅᴀɢᴜᴀ ᴜsᴇ: ${prefix}modtake* 🤷‍♂️  
*ᴘᴀʀᴀ ᴅᴇʟᴇᴛᴀʀ ᴜsᴇ: ${prefix}rmtake* 🙆‍♂️`
    );

  } catch (e) {
    console.log(e);
    reply(mess.error());
  }
}
break;

case 'rmtake': {
  try {
    const db = readTakeDB()
    const userKey = sender.replace(/\D/g, "")

    if (!db[userKey]) {
      return reply(`*ᴠᴏᴄᴇ ᴀɪɴᴅᴀ ɴᴀᴏ ᴘᴏssᴜɪ ᴜᴍᴀ ᴍᴀʀᴄᴀ sᴇʟᴀᴅᴀ ᴇᴍ ᴍᴇᴜs ʀᴇɢɪsᴛʀᴏs...* 🤷‍♂️`)
    }

    delete db[userKey]
    writeTakeDB(db)

    return reply(`*sᴜᴀ ᴍᴀʀᴄᴀ ғᴏɪ ᴀᴘᴀɢᴀᴅᴀ... ᴄᴏᴍᴏ sᴇ sᴜᴀ ᴘʀᴇsᴇɴᴄᴀ ɴᴜɴᴄᴀ ᴛɪᴠᴇssᴇ ᴇxɪsᴛɪᴅᴏ.* 🙇‍♂️`)

  } catch (e) {
    console.log(e)
    reply(mess.error())
  }
}
break;

case 'modtake': {
  try {
    const db = readTakeDB()
    const userKey = sender.replace(/\D/g, "")

    if (!db[userKey]) {
      return reply(`*ᴠᴏᴄᴇ ᴀɪɴᴅᴀ ɴᴀᴏ ᴘᴏssᴜɪ ᴜᴍᴀ ᴍᴀʀᴄᴀ sᴇʟᴀᴅᴀ ᴇᴍ ᴍᴇᴜs ʀᴇɢɪsᴛʀᴏs...* 🤷‍♂️`)
    }

    const texto = (q || "").trim()

    if (!texto) {
      return reply(
`*ᴏɴᴅᴇ ᴇsᴛᴀ sᴜᴀ ɴᴏᴠᴀ ᴍᴀʀᴄᴀ...?* 🤷‍♂️

➮ ᴇxᴇᴍᴘʟᴏ: \`${prefix}modtake texto1/texto2\` 🙇‍♂️`
      )
    }

    const separador = texto.includes("|") ? "|" : (texto.includes("/") ? "/" : null)
    if (!separador) {
      return reply(
`*ᴏɴᴅᴇ ᴇsᴛᴀ sᴜᴀ ɴᴏᴠᴀ ᴍᴀʀᴄᴀ...?* 🤷‍♂️

➮ ᴇxᴇᴍᴘʟᴏ: \`${prefix}modtake texto1/texto2\` 🙇‍♂️`
      )
    }

    const partes = texto.split(separador).map(t => t.trim()).filter(Boolean)
    if (partes.length < 2) {
      return reply(
`*ᴏɴᴅᴇ ᴇsᴛᴀ sᴜᴀ ɴᴏᴠᴀ ᴍᴀʀᴄᴀ...?* 🤷‍♂️

➮ ᴇxᴇᴍᴘʟᴏ: \`${prefix}modtake texto1/texto2\` 🙇‍♂️`
      )
    }

    const authorNovo = partes[0].slice(0, 60)
    const packNovo = partes.slice(1).join(` ${separador} `).trim().slice(0, 60)

    if (!authorNovo || !packNovo) {
      return reply(
`*ᴏɴᴅᴇ ᴇsᴛᴀ sᴜᴀ ɴᴏᴠᴀ ᴍᴀʀᴄᴀ...?* 🤷‍♂️

➮ ᴇxᴇᴍᴘʟᴏ: \`${prefix}modtake texto1/texto2\` 🙇‍♂️`
      )
    }

    db[userKey].author = authorNovo
    db[userKey].packname = packNovo
    db[userKey].updatedAt = Date.now()

    writeTakeDB(db)

    const criadoEm = db[userKey]?.savedAt ? formatDataBR(db[userKey].savedAt) : "N/A"
    const ultimaAlt = formatDataBR(db[userKey].updatedAt)

    return reply(
`*ᴍᴀʀᴄᴀ ᴀʟᴛᴇʀᴀᴅᴀ... sᴇᴜ ɴᴏᴠᴏ sᴇʟᴏ ғᴏɪ ɢʀᴀᴠᴀᴅᴏ.* 🙇‍♂️

➮ *ᴀᴜᴛʜᴏʀ:* ${authorNovo} 🤷‍♂️
➮ *ᴘᴀᴄᴋɴᴀᴍᴇ:* ${packNovo} 🙆‍♂️
➮ *ʀᴇɢɪsᴛʀᴏᴜ ᴇᴍ:* ${criadoEm} 💁‍♂️
➮ *ᴜʟᴛɪᴍᴀ ᴀʟᴛᴇʀᴀᴄᴀᴏ:* ${ultimaAlt} 💁‍♂️`
    )

  } catch (e) {
    console.log(e)
    reply(mess.error())
  }
}
break;

case 'mytake': {
  try {
    const db = readTakeDB()
    const userKey = sender.replace(/\D/g, "")

    if (!db[userKey]) {
      return reply(`*ᴠᴏᴄᴇ ᴀɪɴᴅᴀ ɴᴀᴏ ᴘᴏssᴜɪ ᴜᴍᴀ ᴍᴀʀᴄᴀ sᴇʟᴀᴅᴀ ᴇᴍ ᴍᴇᴜs ʀᴇɢɪsᴛʀᴏs...* 🤷‍♂️`)
    }

    const authorAtual = db[userKey]?.author || "N/A"
    const packAtual = db[userKey]?.packname || "N/A"
    const criadoEm = db[userKey]?.savedAt ? formatDataBR(db[userKey].savedAt) : "N/A"
    const ultimaAlt = db[userKey]?.updatedAt ? formatDataBR(db[userKey].updatedAt) : "ɴᴇɴʜᴜᴍᴀ ᴀʟᴛᴇʀᴀᴄᴀᴏ"

    const texto =
`*ᴍᴀʀᴄᴀ ᴅᴀɢᴜᴀ ᴘᴇʀsᴏɴᴀʟɪᴢᴀᴅᴀ... sᴇᴜ sᴇʟᴏ ɴᴇsᴛᴇ ᴍᴜɴᴅᴏ.* ✨ 🙇‍♂️

➮ *ᴠᴏᴄᴇ:* @${sender.split("@")[0]} 💁‍♂️
➮ *ᴀᴜᴛʜᴏʀ:* ${authorAtual} 🤷‍♂️
➮ *ᴘᴀᴄᴋɴᴀᴍᴇ:* ${packAtual} 🙆‍♂️
➮ *ʀᴇɢɪsᴛʀᴏᴜ ᴇᴍ:* ${criadoEm} 💁‍♂️
➮ *ᴜʟᴛɪᴍᴀ ᴀʟᴛᴇʀᴀᴄᴀᴏ:* ${ultimaAlt} 🙇‍♂️`

    await yuta.sendMessage(from, {
      text: texto,
      contextInfo: {
        mentionedJid: [sender]
      }
    }, { quoted: selo })

  } catch (e) {
    console.log(e)
    reply(mess.error())
  }
}
break;

case 'gerarlink':
try {
  if ((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
    await reagir(from, "😸");
    boij = isQuotedImage 
      ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage 
      : info.message.imageMessage;
    owgi = await getFileBuffer(boij, 'image');
    await yuta.sendMessage(from, {text: `• Link gerado: *${await upload(owgi)}*`}, {quoted: selo});
    await reagir(from, "✅️");
  } else if ((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && !q.length <= 1) { 
    await reagir(from, "😸");
    boij = isQuotedVideo 
      ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage 
      : info.message.videoMessage;
    owgi = await getFileBuffer(boij, 'video');
    await yuta.sendMessage(from, {text: `• Link gerado: *${await upload(owgi)}*`}, {quoted: selo});
    await reagir(from, "✅️");
  } else if ((isMedia && info.message.audioMessage) || isQuotedAudio) {
    await reagir(from, "🎧");
    boij = isQuotedAudio 
      ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.audioMessage 
      : info.message.audioMessage;
    owgi = await getFileBuffer(boij, 'audio');
    await yuta.sendMessage(from, {text: `• Link gerado: *${await upload(owgi)}*`}, {quoted: selo});
    await reagir(from, "✅️");
  } else {
    await reagir(from, "😿");
    reply("Você deve marcar uma imagem, um vídeo de até 30 segundos ou um áudio.");
  }
} catch (e) {
  console.error(e);
  await reagir(from, "❌️");
  reply(mess.errorUploadImage?.() || "❌ Ocorreu um erro ao gerar o link.");
}
break;

case 'qc':
if(!q) return reply(`- Exemplo: ${prefix+command} ${NomeDoBot}`)
reply(mess.teste());
const text = `${q}`
const username2 = `${pushname}`
try {
ppimg = await yuta.profilePictureUrl(sender, 'image')
} catch {
ppimg = imgperfil
}
const { writeExifImg } = require('./DADOS DO YUTA/INFO_YUTA/lib/exif')
yuta.sendImageAsSticker = async (jid, path, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }
        await yuta.sendMessage(jid, { sticker: { url: buffer }, ...options})
        return buffer
    }
const avatar = `${ppimg}`
const json = { "type": "quote", "format": "png", "backgroundColor": "#000000", "width": 512, "height": 768, "scale": 2, "messages": [{ "entities": [], "avatar": true, "from": { "id": 1, "name": username2, "photo": { "url": avatar }
      }, "text": text, "replyMessage": {}
    }
  ]
};
 response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(res => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
     sendImageAsSticker(yuta, from, buffer, selo, { packname: pushname, author: NomeDoBot, 
    contextInfo: {...NkChannelKk}
    }, {quoted: selo})
    })
break

case 'cep':
try {
  if (!q.trim()) return reply("digite o CEP que deseja buscar informações..");
  const ABC = await fetchJson(`${YUTA_URL}/api-bronxys/consultacep?cep=${q}&apikey=${YutaBot}`);
  reply(mess.textCep(ABC));
} catch (e) {
  return reply(mess.error());
}
break;

    
case 'infogp':
case 'regras':
case 'infogrupo':
case 'ig':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    await reagir(from, "⏳");
    try {
        let ppUrl;
        try { ppUrl = await yuta.profilePictureUrl(from, 'image');
        } catch { ppUrl = semimg;
        }
        const YutaDesc = await yuta.groupMetadata(from); 
        const groupAdmins = YutaDesc.participants.filter(p => p.admin);
        const groupMembers = YutaDesc.participants;
        const criadorJid = normalizar(YutaDesc.subjectOwner);
        const descricao = YutaDesc.desc || 'Sem descrição disponível.';
        const metaCorrigido = { ...YutaDesc, subjectOwner: criadorJid, desc: descricao };
        await yuta.sendMessage(from, {
            image: { url: ppUrl },
            caption: mess.textInfoGrupo(metaCorrigido, groupAdmins, groupMembers, prefix, moment),
            contextInfo: { ...NkChannelKk, mentionedJid: [criadorJid, ...groupAdmins.map(v => v.id)] }
        }, { quoted: selo });

    } catch (e) {
        console.error(e);
        reply(mess.error());
    }
    break;


case 'encurtalink': case 'tinyurl':
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/yutabot.wpp`)
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
reply(`*Link encurtado com sucesso, aqui está:* ${anu.data}`).catch(async(error) => {
reply(mess.error())
})
break

case 'lermais': case 'morechat': case 'spoiler':
var [text1_a, text2_b] = q.split("/"); // Separador
if (!text1_a) text1_a = ""; // Caso o texto1 esteja vazio, vai retornar vázio o parâmetro.
if (!text2_b) text2_b = ""; // Caso o texto2 esteja vazio, vai retornar vázio o parâmetro.
reply(text1_a + String.fromCharCode(8206).repeat(4001) + text2_b); // Enviar o spoiler.
break

case 'obesidade': case 'obeso':
if(!q.includes("/")) return reply(`Ex.: *${prefix+command} peso/altura*`)
var [peso, altura] = q.split("/");
var resultado = await obeso(peso, altura)
if (resultado <= 17 || resultado <= 18.4) {
await replyWithReaction(`• Seu índice de massa corporal é de: *${resultado}* -> Você está abaixo do peso.`, {react: {text: '😸', key: info.key}});
} else if (resultado <= 18.5 || resultado <= 24.9) {
await replyWithReaction(`• Seu índice de massa corporal é: *${resultado}* -> Você está no peso ideal.`, {react: {text: '👍', key: info.key}});
} else if (resultado <= 25 || resultado <= 29.9) {
await replyWithReaction(`• Seu índice de massa corporal é: *${resultado}* -> Você está com sobrepeso.`, {react: {text: '🫤', key: info.key}});
} else if (resultado <= 30 || resultado <= 39.9) {
await replyWithReaction(`• Seu índice de massa corporal é: *${resultado}* -> Em situção de Obesidade.`, {react: {text: '🤨', key: info.key}});
} else if (resultado > 40) {
await replyWithReaction(`• Seu índice de massa corporal é: *${resultado}* -> Obesidade mórbida!`, {react: {text: `😵`, key: info.key}});
}
break

case 'contardias': case 'countdays':
if(!q.includes("/")) return reply(`Você esqueceu da */* para separar os campos.. Exemplo: *31/03/2024*`)
if(q.length < 10) return reply(`Deve conter a data completa *(dia/mês/ano)* após o comando!\n• Exemplo: *${prefix+command} 31/03/2024*`)
try {
var tomp = await timeDate('DD/MM/YYYY')
countDay = await countDays(q.split("/"), tomp.split("/"))
reply(`*${countDay}* dia(s).`)
} catch(error) {
return reply(mess.error())
}
break


case 'idade':
  if (!q) return reply(`- Exemplo: ${prefix}idade 23/12/2007`)
  try {
    let txt; 
    const regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/
    if (!regexData.test(q)) return reply(`- Exemplo: ${prefix}idade 23/12/2007`)
    const [dia, mes, ano] = q.split('/').map(Number)
    const dataNascimento = new Date(ano, mes - 1, dia)
    const hoje = new Date()
    if (dataNascimento > hoje || isNaN(dataNascimento)) {
      return reply(`*ᴄᴏʟᴏǫᴜᴇ ᴅᴀ ғᴏʀᴍᴀ ᴄᴇʀᴛᴀ ʙᴀɪᴛᴏʟᴀ 😡*`)
    }
    const diffMs = hoje - dataNascimento
    const idadeData = new Date(diffMs)
    const anos = idadeData.getUTCFullYear() - 1970
    const meses = idadeData.getUTCMonth()
    const dias = idadeData.getUTCDate() - 1
    const diasVividos = Math.floor(diffMs / (1000 * 60 * 60 * 24))
    const horasVividas = diasVividos * 24
    const minutosVividos = horasVividas * 60
    const proximoAniversario = new Date(hoje.getFullYear(), mes - 1, dia)
    if (proximoAniversario <= hoje) proximoAniversario.setFullYear(hoje.getFullYear() + 1)
    const diasParaAniversario = Math.ceil((proximoAniversario - hoje) / (1000 * 60 * 60 * 24))
    txt = mess.idade(q, anos, meses, dias, diasVividos, horasVividas, minutosVividos, diasParaAniversario, NomeDoBot).trim()
   yuta.sendMessage(from, {video: {url: idade}, gifPlayback: true, caption: txt, contextInfo:{...NkChannelKk}}, {quoted: selo})
  } catch (e) {
    console.log(e)
  }
  break


case 'qrcode': case 'gerarqr':
if (!q) return reply('Insira um link ou texto para que eu possa gerar o qr code..')
try {
await yuta.sendMessage(from, {image: {url: `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${q}`}, caption: `${q}`}, {quoted: selo})
} catch (e) {
return reply(mess.error());
}
break

case 'perfil2': { //Criado por Lm
    try {       
        const mentionMessage = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || info.message?.extendedTextMessage?.contextInfo?.participant || null;        
        if (mentionMessage) {        
            await reply("*Gerando um personalidade aleatória dessa pessoa, aguarde um momento... 🤗*");            
            const randomFromArray = (array) => array[Math.floor(Math.random() * array.length)];            
            const getProfileUrl = await yuta.profilePictureUrl(mentionMessage, 'image').catch(() => imgperfil);
const types = {genders: ["Gay 🏳️‍🌈", "Masculino 💪", "Feminino 🦋", "Trans 🏳️‍⚧️", "Lésbica 👩‍❤️‍👩"], hobbies: ["Cozinhar 🍜", "Ler livros 📚", "Estudar 🎒", "Praticar esportes ⛹️", "Correr 🏃", "Ouvir música 🎧", "Dançar 💃", "Cantar 🎤", "Viajar 🛫", "Jogar video-gamer 🎮"], professions: ["Médico", "Engenheiro", "Professor", "Artista", "Designer", "Programador", "Músico", "Escritor", "Puta"], favoriteTimesOfDay: ["Manhã 🌤", "Tarde 🌅", "Noite 🌌", "Madrugada 🌃"], favoriteMusicGenres: ["Rock", "Pop", "Jazz", "Sertanejo", "Funk", "Clássica", "Eletrônica"], favoriteTemperatura: ["Frio 🥶", "Quente 🥵", "Morno 🙂‍↕"]};
            function getResults() {
                return {genero: randomFromArray(types.genders), hobbie: randomFromArray(types.hobbies), job: randomFromArray(types.professions), clima: randomFromArray(types.favoriteTimesOfDay), estilo_musical: randomFromArray(types.favoriteMusicGenres), temperatura: randomFromArray(types.favoriteTemperatura)
                }            }
           
            const b = getResults();
            await yuta.sendMessage(from, { image: { url: getProfileUrl, }, caption: mess.perfil2(mentionMessage, b), mentions: [mentionMessage, sender]}, {
                quoted: selo
            });
        }
        else {
            reply("Mencione o '@' ou a mensagem de alguém...");
        }
    } catch (err) {
        console.error(err);
        reply(mess.error());
    }
    break;
}

case 'dinextenso': 
if(!q.includes(".")) return reply(`❌️ - Coloque apenas números para realizar a transformação de digitos numérico para números em extenso.\nPor exemplo: *${prefix}dinextenso 500.00 ou 756.50*, tudo que você colocar os valores deve colocar um ponto(.) para converter os valores.`)
try {
data = await fetchJson(`https://api.invertexto.com/v1/number-to-words?token=${API_KEY_INVERTEXTO}&number=${q}&language=pt&currency=BRL`);
reply(`*${q}* : ${capitalizeFirstLetter(data.text)}`);
} catch(error) {
reply(mess.error())
}
break

case 'validarcpf': case 'validarcnpj':
if(command === "validarcpf") {
if(!q) return reply("Digite um CPF para realizar a verificação se é válido ou inválido...")
if(q.length < 11) return reply("Você digitou um cpf que não tem 11 dígitos, verifique se colocou pontuação, se estiver retire.")
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`)
if(data.valid == true) return reply("Válido.")
if(data.valid == false) return reply("Inválido.")
} catch(error) {reply(mess.error())}
} else if(command === "validarcnpj") {
if(!q) return reply("Digite um CNPJ para realizar a verificação se é válido ou inválido!")
if(q.length < 14) return reply("Você digitou um CNPJ que não tem 14 dígitos, verifique se colocou pontuação, se estiver retire.")
try {
data = await fetchJson(`https://api.invertexto.com/v1/validator?token=${API_KEY_INVERTEXTO}&value=${q}`)
if(data.valid == true) return reply("Válido.")
if(data.valid == false) return reply("Inválido.")
} catch(error) {reply(mess.error())}
}
break

case 'createimg': case 'texttoimage': case 'imagine':
if(!q) return reply(`O que você deseja criar amiguinho? Coloque após o comando o que você deseja criar... Por exemplo: ${prefix+command} macaco dirigindo uma bmw`);
try {
await replyWithReaction('Olá, estou criando a imagem a partir de seu questionamento, aguarde senhor(a)...', {react: {text: '🎨', key: info.key}});
dataResultAI = await fetchJson(`https://hercai.onrender.com/v3/text2image?prompt=${q}`);
  await yuta.sendMessage(from, {image: {url: dataResultAI.url}}, {quoted: selo});
} catch(error) {
await replyWithReaction(mess.error(), {react: {text: '❌', key: info.key}});
}
break

case 'emoji': case 'semoji':
try {
if (!q.trim()) return reply(`Você está usando o comando de forma errada, use: *${prefix+command} [emj]/[pltf]*\n—\n• *Plataformas disponíveis:* whatsapp, facebook, google, samsung, twitter, apple, microsoft, mesengger, joypixels, openmoji, emojidex, htc, lg, mozilla, softbank, au_kddi`)
if (!q.includes("/")) return reply(`Está faltando a */*, para separar o emoji e plataforma.\n• Por exemplo: ${prefix+command} 🏃‍♂️/apple`);
reply(mess.wait());
var [emojiInput, platform] = q.split("/");
var { emojisData } = await emoji(emojiInput);
if (emojisData && emojisData[platform.toLowerCase()]) {
await sendStickerFromUrl(from, emojisData[platform.toLowerCase()]);
} else {
return reply(`Emoji '${emojiInput}' não encontrado!`);
}
} catch(error) {
reply(mess.error())
}
break

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':  
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply(mess.wait())
buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `${NomeDoBot}`
sd = `↳  Feito pelo(a) usuário(a): ${pushname}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
await yuta.sendMessage(from, {sticker: sti}, {quoted: selo})
} else {
return reply(`So imagem amigo(a)!`)
}
break

case 'rbale':  
if(!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply(mess.wait())
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `↳  Feito pelo(a) usuário(a): ${pushname}`, `${NomeDoBot}`)
var sti = new Buffer.from(mantap, 'base64');
await yuta.sendMessage(from, {sticker: sti}, {quoted: selo}).catch(async(error) => {
reply(mess.error()); 
})
break


case 'fstiker':
case 'fsticker':
case 'f':
    var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
    var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
    var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage  
    
    if (boij) {
        var packnameStk = `${pushname}`
        var authorSticker = `${NomeDoBot}`
        reply(mess.wait())
        owgi = await getFileBuffer(boij, 'image')
        let ENC_MEDIA1 = await sendImageAsSticker(yuta, from, owgi, selo, {
            packname: packnameStk,
            author: authorSticker,
            contextInfo: NkChannelKk
        })
        await DLT_FL(ENC_MEDIA1)

    } else if (boij2 && boij2?.seconds < 11) {
        var packnameStk = `${pushname}`
        var authorSticker = `${NomeDoBot}`
        reply(mess.wait())
        owgi = await getFileBuffer(boij2, 'video')
        let ENC_MEDIA2 = await sendVideoAsSticker(yuta, from, owgi, selo, {
            packname: packnameStk,
            author: authorSticker,
            contextInfo: NkChannelKk
        })
        await DLT_FL(ENC_MEDIA2)

    } else {
        reply(`*ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴏᴜ ᴠɪᴅᴇᴏ ᴄᴏᴍ ᴏ ᴍᴀxɪᴍᴏ ᴅᴇ 10 ꜱᴇɢᴜɴᴅᴏꜱ 🙇‍♂️*`)
    }
break


case 'st':
case 'stk':
case 'sticker':
case 's':
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if (boij2) {
    var pack = mess.fig(ownerName, NomeDoBot)
    var author2 = mess.fig2(pushname, groupName, isGroup)
    owgi = await getFileBuffer(boij2, 'image')
    let encmediaa = await sendImageAsSticker2(yuta, from, owgi, selo, { 
        packname: pack, 
        author: author2,
        contextInfo: NkChannelKk
    })
    await DLT_FL(encmediaa)
} else if (boij && boij.seconds < 11) {
    var pack = mess.fig(ownerName, NomeDoBot)
    var author2 = mess.fig2(pushname, groupName, isGroup)
    owgi = await getFileBuffer(boij, 'video')
    let encmedia = await sendVideoAsSticker2(yuta, from, owgi, selo, { 
        packname: pack, 
        author: author2,
        contextInfo: NkChannelKk
    })
    await DLT_FL(encmedia)
} else {
    reply(`*ᴍᴀʀǫᴜᴇ ᴜᴍᴀ ɪᴍᴀɢᴇᴍ ᴏᴜ ᴠɪᴅᴇᴏ ᴄᴏᴍ ᴏ ᴍᴀxɪᴍᴏ ᴅᴇ 9.9 ꜱᴇɢᴜɴᴅᴏꜱ 🙇‍♂️*`)
}
break

case 'transcrever':
case 'totext': {
    if (!isQuotedAudio && !(isMedia && info.message.audioMessage)) {
        return reply('*💬 ᴍᴀʀǫᴜᴇ ᴜᴍ ᴀᴜ́ᴅɪᴏ...* 🔊');
    }
await reagir(from, "👂");
    try {
        const audioMsg = isQuotedAudio
            ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
            : info.message.audioMessage;

        const stream = await downloadContentFromMessage(audioMsg, 'audio');
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        const audioUrl = await upload(buffer);

        const transcriptRes = await fetch('https://api.assemblyai.com/v2/transcript', {
            method: 'POST',
            headers: {
                'authorization': '22be3718b6bf42019d9cc59f70133b83',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                audio_url: audioUrl,
                language_code: 'pt'
            })
        });

        const transcriptData = await transcriptRes.json();
        if (!transcriptData.id) return reply('*ɴᴀ̃ᴏ ꜰᴏɪ ᴘᴏꜱꜱɪ́ᴠᴇʟ ᴇɴᴠɪᴀʀ ᴏ ᴀᴜ́ᴅɪᴏ ᴘᴀʀᴀ ᴛʀᴀɴꜱᴄʀɪᴄ̧ᴀ̃ᴏ... 💢*');

        const id = transcriptData.id;
        let status = 'queued';
        let transcriptResult;

        while (status === 'queued' || status === 'processing') {
            await new Promise(resolve => setTimeout(resolve, 4000));
            const statusRes = await fetch(`https://api.assemblyai.com/v2/transcript/${id}`, {
                headers: { 'authorization': '22be3718b6bf42019d9cc59f70133b83' }
            });
            transcriptResult = await statusRes.json();
            status = transcriptResult.status;
        }

        if (status !== 'completed') return reply('*ɴᴀ̃ᴏ ꜰᴏɪ ᴘᴏꜱꜱɪ́ᴠᴇʟ ᴛʀᴀɴꜱᴄʀᴇᴠᴇʀ ᴇꜱꜱᴇ ᴀᴜ́ᴅɪᴏ, ꜰᴏɪ ᴅɪꜰɪ́ᴄɪʟ ᴀᴛᴇ́ ᴘʀᴀ ᴍɪᴍ...* 😵‍💫');

        let textoFinal = transcriptResult.text || 'ɴᴇɴʜᴜᴍ ᴛᴇxᴛᴏ ʀᴇᴄᴏɴʜᴇᴄɪᴅᴏ';

        reply(`*ᴛʀᴀɴꜱᴄʀɪᴄ̧ᴀ̃ᴏ ᴅᴇ ᴀᴜ́ᴅɪᴏ 🗣️*\n-\n> *${textoFinal}*`);
    } catch (e) {
        console.error('erro ao transcrever:', e);
        reply(mess.error());
    }

    break;
}

case 'suicidio':
    setTimeout(() => { reagir(from, `😕`) }, 100)
    {
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
    if(!isGroup) return reply(mess.onlyGroup());
        await reply(`*ʟᴇᴍʙʀᴇ-ꜱᴇ ${pushname}... ᴠᴏᴄᴇ̂ ꜱᴇᴍᴘʀᴇ ᴇꜱᴛᴀʀᴀ́ ᴇᴍ ɴᴏꜱꜱᴏꜱ ᴄᴏʀᴀᴄ̧ᴏ̃ᴇꜱ...* ☁️😔`)
        await sleep(3000)
        await yuta.groupParticipantsUpdate(from, [sender], 'remove')
        await sleep(1000)
        await reply('*ᴀɢᴏʀᴀ ǫᴜᴇ ᴊᴀ́ ꜱᴇ ꜰᴏɪ... ᴠᴀᴍᴏꜱ ꜰᴀʟᴀʀ ᴍᴀʟ ᴅᴇʟᴇ ᴋᴋᴋ* 😈')
    }
    break
    

case 'toimg':
if(!isQuotedSticker) return reply('Por favor, *mencione um sticker* para executar o comando.')
try {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
await yuta.sendMessage(from, {image: buff}, {quoted: selo}).catch(async(error) => {
reply(mess.error())
})
} catch(error) {
console.log(error)
}
break

case 'togif': 
if(!isQuotedSticker) return reply('Por favor, atribua uma figurinha animada à mensagem para realizar a conversão para vídeo/gif.');
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
const { FiguMp4OuGif } = require('./ARQUIVES/funcoes/togif.js');
getBufferWebP = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, "sticker");
fs.writeFileSync("./DADOS DO YUTA/data/media/sticker/convert.webp", getBufferWebP);
outputFile = "./DADOS DO YUTA/data/media/sticker/convert.webp";
convertWebP = await FiguMp4OuGif(outputFile);
await yuta.sendMessage(from, {video: {url: convertWebP}, gifPlayback: true, fileName: 'sticker-sb.gif'}, {quoted: selo}).catch(async(error) => {
    await reply(mess.error()); // Notificar ao usuário que ocorreu um erro ao enviar o resultado da conversão do WebP para MP4.
    await DLT_FL(outputFile); // Apagar o arquivo, caso ocorrer um erro na conversão entre eles.
    console.log(error)
});
}
} catch(error) {
    await reply(mess.error()); // Notificar ao usuário que ocorreu um erro ao realizar a conversão do WebP para MP4.
    console.log(error)
};
break


case 'conselhobiblico': case 'conselhosbiblico': case 'conselhosb': case 'conselhob':
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(advices.biblicalAdvice[Math.floor(Math.random() * advices.biblicalAdvice.length)], {react: {text: '😌', key: info.key}}).catch(async(error) => {
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(mess.error(), {react: {text: '😿', key: info.key}});
});
break

case 'conselhos': case 'conselho':
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(advices.commonAdvices[Math.floor(Math.random() * advices.commonAdvices.length)], {react: {text: '😌', key: info.key}}).catch(async(error) => {
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(mess.error(), {react: {text: '😿', key: info.key}});
});
break
 
case 'cantadas': case 'cantada':
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(tools.Cantadas[Math.floor(Math.random() * tools.Cantadas.length)], {react: {text: '😼', key: info.key}}).catch(async(error) => {
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(mess.error(), {react: {text: '😿', key: info.key}});
});
break

case 'fatos': case 'curiosidades':
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(tools.curiousFacts[Math.floor(Math.random() * tools.curiousFacts.length)], {react: {text: '🙀', key: info.key}}).catch(async(error) => {
/* [Reagir a mensagem + enviar mensagem pré-definida] -> */ await replyWithReaction(mess.error(), {react: {text: '😿', key: info.key}});
});
break


case 'mencionar':
if (!q) return reply(`Você usou o comando de forma incorreta, use a correta: ${prefix}mencionar corno`);
if (!isGroup) return reply(`Esta brincadeira só funciona em grupos.`);
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
await mention(`Estou mencionando o *${q}* do grupo: *@${groupMembers[Math.floor(Math.random() * groupMetadata.participants.length)].id.split('@')[0]}*`);
break


case 'infocriador':
await yuta.sendMessage(from, {audio: fs.readFileSync(`./DADOS DO YUTA/data/media/audios/info_criador.mp3`), mimetype: "audio/mpeg", contextInfo: NkChannelKk
}, 
  { quoted: selo });
break;


case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")  
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
await yuta.sendMessage(nmrdn, {text: mess.groupInvitation(sender, cnvt, prefix)}, {quoted: selo})
break

case 'recusar_convite':
if(!SoDono) return reply(mess.onlyOwner());
await yuta.sendMessage(`${q}@s.whatsapp.net`, {text: `Olá amigo(a), sinto muito dizer, mas seu convite foi recusado.`}, {quoted: selo});
break


case 'sip': case 'ip': 
if (!q) return reply(`Informe o ip que você deseja! *Exemplo:* ${prefix+command} 8.8.8.8`)
try {
ip = await axios.get(`https://ipwhois.app/json/${encodeURIComponent(q)}`);
await yuta.sendMessage(from, {image: {url: `https://maps.googleapis.com/maps/api/streetview?size=1400x1400&location=${ip.data.latitude},%20${ip.data.longitude}&sensor=false&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`}, caption: mess.searchIpAdress(ip)}, {quoted: selo});
await yuta.sendMessage(from, {location: {degreesLatitude: ip.data.latitude,degreesLongitude: ip.data.longitude, addrees: ''}}, {quoted: selo});
} catch(error) {
reply(mess.error())
}
break

case 'mytag':  
inff = `${pushname}`
yuta.sendMessage(from, {text: inff}, {quoted: selo})
break

case 'getbio':
case 'getb': {
    if (!menc_os2 && !q) return reply(`*🌪️ ᴍᴀʀǫᴜᴇ ᴏ ᴜꜱᴜᴀʀɪᴏ ᴏᴜ ᴅɪɢɪᴛᴇ ᴏ ɴᴜᴍᴇʀᴏ ᴄᴏᴍ ᴏᴜ ꜱᴇᴍ ᴏ @*`);
    reply("*ᴩᴇɢᴀɴᴅᴏ ᴀ ʙɪᴏɢʀᴀꜰɪᴀ ᴅᴏ ᴜꜱᴜᴀʀɪᴏ ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ ✨*");
    try {
        let numero = menc_os2 ? menc_os2.split('@')[0] : q.replace(/\D/g, '');
        const getbb = `${numero}@s.whatsapp.net`;
        let recadoW;
        try {
            const recadoUser = await yuta.fetchStatus(getbb);
            recadoW = recadoUser[0]?.status?.status || "*privado*";
        } catch {
            recadoW = "*privado*";
        }
        const jidParaMencionar = menc_os2 ? menc_os2 : `${numero}@s.whatsapp.net`;
        await yuta.sendMessage(
            from,
            {
                text: `*🗿 | ʙɪᴏɢʀᴀꜰɪᴀ ᴅᴏ ᴜꜱᴜᴀʀɪᴏ:* @${numero}\n•\n> ${recadoW}`,
                contextInfo: { ...NkChannelKk, mentionedJid: [jidParaMencionar] }
            },
            { quoted: selo }
        );
    } catch (e) {
        console.log(e);
        reply(mess.error());
    }
}
break;

case 'getperfil': {
    if (!menc_os2 && !q) return reply(`*🌪️ ᴍᴀʀǫᴜᴇ ᴏ ᴜꜱᴜᴀʀɪᴏ ᴏᴜ ᴅɪɢɪᴛᴇ ᴏ ɴᴜᴍᴇʀᴏ ᴄᴏᴍ ᴏᴜ ꜱᴇᴍ ᴏ @*`);
    let numero = menc_os2 ? menc_os2.split('@')[0] : q.replace(/\D/g, '');
    reply("*ᴩᴇɢᴀɴᴅᴏ ᴏ ᴩᴇʀꜰɪʟ ᴅᴏ ᴜꜱᴜᴀʀɪᴏ ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ 🙇‍♂️*");
    let ppimgUrl;
    try {
        ppimgUrl = await yuta.profilePictureUrl(`${numero}@s.whatsapp.net`, 'image');
    } catch {
        ppimgUrl = imgperfil;
    }
    const jidParaMencionar = menc_os2 ? menc_os2 : `${numero}@s.whatsapp.net`;
    await yuta.sendMessage(
        from,
        {
            image: { url: ppimgUrl },
            caption: `*⚡ | ᴩᴇʀꜰɪʟ ᴅᴏ ᴜꜱᴜᴀʀɪᴏ:* @${numero}\n> *🗿 ꜱᴇ ᴄᴀꜱᴏ ᴠᴏᴄᴇ ǫᴜᴇɪʀᴀ ᴩᴇɢᴀʀ ᴀ ʙɪᴏɢʀᴀꜰɪᴀ ᴅᴏ ᴜꜱᴜᴀʀɪᴏ ᴜꜱᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ:* ${prefix}getbio`,
            contextInfo: { ...NkChannelKk, mentionedJid: [jidParaMencionar] }
        },
        { quoted: selo }
    );
}
break;

case 'doc':
case 'docfake':
try {
sprd = "|"
if(!q) return reply(`${prefix + command} exemplo${sprd}500${sprd}apk\n-\nOs tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png`)
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.Android 🚀.package-archive'
if(mimetyp.toLowerCase() == 'aac') mimetyp = 'audio/aac'
if(mimetyp.toLowerCase() == 'xml') mimetyp = 'application/xml'
if(mimetyp.toLowerCase() == 'zip') mimetyp = 'application/zip'
if(mimetyp.toLowerCase() == 'jpg') mimetyp = 'image/jpeg'
if(mimetyp.toLowerCase() == 'ppt') mimetyp = 'application/vnd.ms-powerpoint'
if(mimetyp.toLowerCase() == 'pptx') mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
if(mimetyp.toLowerCase() == 'mp4') mimetyp = 'video/mp4'
if(mimetyp.toLowerCase() == 'm4a') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'mp3') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'gif') mimetyp = 'image/gif'
if(mimetyp.toLowerCase() == 'png') mimetyp = 'image/png'
if(mimetyp.toLowerCase() == 'svg') mimetyp = 'image/svg+xml'
if(mimetyp.toLowerCase() == 'txt') mimetyp = 'text/plain'
let Messagemdoc = {document: fs.readFileSync('./DADOS DO YUTA/data/docf.txt'), mimetype: mimetyp, jpegThumbnail: await getBuffer(thumbc), fileName: nomedoc, fileLength: peso, headerType: 4, contextInfo:{forwardingScore:999,isForwarded:true}}
await yuta.sendMessage(from, Messagemdoc, {quoted: selo})
} catch (err) {
console.log(err)
reply(mess.error())
}
break

//=============[ FIM RANDOM CMD ]=========\\

//===========[ PLAQS ]=============\\

case 'plaq': 
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${q}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`)
sendMsg = yuta.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq1':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://raptibef.sirv.com/images%20(1).jpeg?profile=Zanga%202.0&text.0.text=${q}`)
sendMsg = yuta.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq2':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${q}&text.0.outline.blur=63`)
sendMsg = yuta.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq3':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${q}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`) //api
plaq = ` *Plaquinha feita ✓* `
sendMsg = yuta.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq4':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
reagir(from, "🕒")
buffer = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${q}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
sendMsg = yuta.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq5':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(6).jpeg?text.0.text=${q}&text.0.position.x=-17%25&text.0.position.y=-20%25&text.0.size=41&text.0.color=000000&text.0.opacity=59&text.0.font.family=PT%20Mono&text.0.outline.blur=10" width="463" height="662" alt="" />`,`https://lerrewor.sirv.com/Teste/images%20(1)%20(12).jpeg?text.0.text=${q}&text.0.position.x=-20%25&text.0.position.y=-35%25&text.0.size=41&text.0.color=000000&text.0.font.family=Playball&text.0.background.opacity=16&text.0.outline.color=ff0000&text.0.outline.blur=24" width="225" height="225" alt="" />`)
sendMsg = yuta.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq6':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(5).jpeg?text.0.text=${q}&text.0.position.x=-45%25&text.0.position.y=-29%25&text.0.size=36&text.0.color=000000&text.0.opacity=65&text.0.font.family=PT%20Sans%20Narrow" width="479" height="640" alt="" />`)
sendMsg = yuta.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq7':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(10).jpeg?text.0.text=${q}&text.0.position.y=-25%25&text.0.size=41&text.0.color=000000&text.0.font.family=Vollkorn&text.0.background.opacity=100" width="193" height="261" alt="" />`)
sendMsg = yuta.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq8':
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(9).jpeg?text.0.text=${q}&text.0.position.x=-49%25&text.0.position.y=-19%25&text.0.size=45&text.0.color=000000&text.0.opacity=97&text.0.font.family=Patrick%20Hand" width="250" height="333" alt="" />`)
sendMsg = yuta.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

case 'plaq9': 
if(!isGroup)
if (args.length < 1) return reply('❕Ei humano, cadê o texto?')
if (q.length > 25) return reply('❗O texto é longo, o máximo é 25 caracteres.')
buffer = await getBuffer(`https://lerrewor.sirv.com/Teste/images%20(1)%20(8).jpeg?text.0.text=${q}&text.0.position.x=-28%25&text.0.position.y=-41%25&text.0.size=41&text.0.color=000000&text.0.opacity=99&text.0.font.family=Signika" width="225" height="225" alt="" />`)
sendMsg = yuta.sendMessage(sender, {image: buffer}, {quoted: selo}),
reply(`Eai, ${pushname}, preparado(a)? Enviando agora verifique seu pv... 😈🔥`)
break

//==============[ FIM PLAQS      ]============\\


//==========[ DOWNLOADS DO YUTA ]==============\\


case 'gerarnick':
case 'nick': {
try {

  if (!q?.trim()) return reply(`Exemplo: ${prefix + command} Nk Petrov`)

  reply("Aguarde um momento..")

  const url = `${SITE}/api/geradores/gerar-nicks?apitoken=${TOKEN}&text=${encodeURIComponent(q)}`
  const { status, resultado } = await fetchJson(url)

  if (!status || !resultado?.length)
    return reply("Não foi possível gerar nicks.")

  let msg = "*✨ GERADOR DE NICKS ✨*\n\n"
  let lista = []

  resultado.forEach((item, index) => {
    if (item.result) {
      msg += `(${index + 1}) ${item.result}\n`
      lista.push(item.result)
    }
  })

  ultimosNicks[sender] = lista

  msg += `\n> Envie o número do Nick que deseja copiar. 🐈‍⬛\n- *✨ Exemplo*: 10`

  reply(msg.trim())

} catch (e) {
  console.log(e)
  reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
}
}
break

case 'metadinha': {
try {
    const { status, resultado } = await fetchJson(`${SITE}/api/animes/random/metadinha?apitoken=${TOKEN}`);
    if (!status || !resultado) return reply("Erro ao buscar imagens.");
    await reply("Aguarde um momento..");
    await yuta.sendMessage(from, { image: { url: resultado.masculino }, caption: "*Perfil Masculino*"}, { quoted: selo });
    await yuta.sendMessage(from, { image: { url: resultado.feminino }, caption: "*Perfil Feminino*"}, { quoted: selo });
} catch (err) {
    console.log(err);
    reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
}
}
break;

case 'attp': case 'attp2':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} Yuta`);
reply("*ᴀɢᴜᴀʀᴅᴇ ᴜᴍ ᴍᴏᴍᴇɴᴛᴏ......🙇‍♂️*")
var Fontes = command === "attp2" ? "Roboto" : "Noto Emoji, Noto Sans Mono"
yuta.sendMessage(from, {sticker: {url: YUTA_URL + `/api-bronxys/attp_edit?texto=${encodeURIComponent(q)}&fonte=${Fontes}&apikey=` + YutaBot}}, {quoted: selo}).catch(() => {
return reply(mess.error());
})
} catch (e) {
return reply(mess.error());
}
break;

case 'brat':
case 'brat2': {
try {
if (!q?.trim())
return reply(`Exemplo: ${prefix + command} Yuta`)
reply("Aguarde um momento..")
const pack = mess.fig(ownerName, NomeDoBot)
const author = mess.fig2(pushname, groupName, isGroup)
const isVideo = command === 'brat2'
const apiUrl = isVideo ? `${SITE}/api/stickers/brat-vid?text=${encodeURIComponent(q)}&apitoken=${TOKEN}` : `${SITE}/api/stickers/brat-img?text=${encodeURIComponent(q)}&apitoken=${TOKEN}`
const buffer = await getBuffer(apiUrl)
if (!buffer) return reply("Erro ao gerar figurinha.")
let encmedia
if (isVideo) {
  encmedia = await sendVideoAsSticker2(yuta, from, buffer, selo, { packname: "Yuta", author: "API's" })
} else {
  encmedia = await sendImageAsSticker2(yuta, from, buffer, selo, { packname: "Yuta", author: "API's" }
  )
}
await DLT_FL(encmedia)
} catch (e) {
console.log(e)
reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
}
}
break;


case 'pinterest':
case 'pin': {
try {
  if (!q?.trim()) return reply(`Exemplo: ${prefix + command} Yuta`)
  reply("Aguarde um momento..");
  await yuta.sendMessage(from, {image: { url: `${SITE}/api/downloads/pinterest?apitoken=${TOKEN}&query=${encodeURIComponent(q)}` }}, { quoted: selo })
} catch (err) {
  console.log(err)
  reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
}
}
break;

case 'pinterestvideo':
case 'pinvid':
case 'pinvideo': {
try {
  if (!q?.trim()) return reply(`Exemplo: ${prefix + command} https://pin.it/5xtiv7Y7G`)
  const { status, resultado } = await fetchJson(`${SITE}/api/downloads/pinterest-video?apitoken=${TOKEN}&url=${encodeURIComponent(q)}`)
  reply("Aguarde um momento..")
  if (!status || !resultado)
    return reply("Vídeo não encontrado.")
  await yuta.sendMessage(from, { video: { url: resultado.video }, mimetype: "video/mp4", fileName: `${resultado.title || "pinterest-video"}.mp4`, caption: `${resultado.title || "Pinterest"}`}, { quoted: selo })
} catch (err) {
  console.log(err)
  reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
}
}
break;

case 'cria': 
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
Nkzin = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${teks}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`)
yuta.sendMessage(from, { image: Nkzin }, { quoted: selo })
break

case 'anime1':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
Nkzin = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
yuta.sendMessage(from, { image: Nkzin }, { quoted: selo })
break

case 'ff1':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
Nkzin = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
yuta.sendMessage(from, { image: Nkzin }, {quoted: selo })
break	

case 'game':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
Nkzin = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
yuta.sendMessage(from, { image: Nkzin }, { quoted: selo })
break

case 'ff2':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
Nkzin = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
yuta.sendMessage(from, { image: Nkzin }, { quoted: selo })
break	

case 'anime2':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
Nkzin = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
yuta.sendMessage(from, { image: Nkzin }, { quoted: selo })
break

case 'entardecer':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
Nkzin = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
yuta.sendMessage(from, { image: Nkzin }, { quoted: selo })
break

case 'indian':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
Nkzin = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
yuta.sendMessage(from, { image: Nkzin }, { quoted: selo })
break 

case 'ffrose':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
Nkzin = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
yuta.sendMessage(from, { image: Nkzin }, { quoted: selo })
break	

case 'ffgren':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
Nkzin = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
yuta.sendMessage(from, { image: Nkzin }, { quoted: selo })
break		

case 'chufuyu':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
Nkzin = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
yuta.sendMessage(from, { image: Nkzin }, { quoted: selo })
break	

case 'wolf':
if (args.length < 1) return reply("cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
Nkzin = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
yuta.sendMessage(from, { image: Nkzin }, { quoted: selo })
break	

case 'dragonred':
if (args.length < 1) return reply("Cade o texto ?")
teks = q
if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
reply(`*ɢᴇʀᴀɴᴅᴏ ᴀ sᴜᴀ ʟᴏɢᴏ, ᴀɢᴜᴀʀᴅᴇ 🙇‍♂️*`)
Nkzin = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
yuta.sendMessage(from, { image: Nkzin }, { quoted: selo })
break
 
case 'tiktok2': 
case 'tiktok_video2':
await reagir(from, "⏳")
try {
if(!q) return reply(`${prefix+command} link do Tiktok`);
yuta.sendMessage(from, {video: {url:YUTA_URL + `/api-bronxys/tiktok?url=${q}&apikey=` + YutaBot}, mimetype: "video/mp4"}, {quoted: selo}).catch(e => {
console.log(e)
return reply(mess.error())
})
} catch (e) {
console.log(e)
return reply(mess.error())
}
break;

case 'tiktok_audio2':
await reagir(from, "⏳")
try {
if(!q) return reply(`${prefix+command} link do Tiktok`);
yuta.sendMessage(from, {audio: {url:YUTA_URL + `/api-bronxys/tiktok?url=${q}&apikey=` + YutaBot}, mimetype: "audio/mpeg"}, {quoted: selo}).catch(e => {
console.log(e)
return reply(mess.error())
})
} catch (e) {
console.log(e)
return reply(mess.error())
}
break;

case 'tiktokaudio':
case 'ttaudio': {
try {
if (!q?.trim())
  return reply(`Exemplo: ${prefix + command} https://vt.tiktok.com/abc123/`)
reply("Aguarde um momento...")
const url = `${SITE}/api/downloads/tiktok-mp3?apitoken=${TOKEN}&url=${encodeURIComponent(q)}`
await yuta.sendMessage(from, { audio: { url }, mimetype: "audio/mpeg", fileName: "tiktok.mp3"
}, { quoted: selo })
} catch (err) {
console.log(err)
reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
}
}
break;

case 'tiktok':
case 'tt': {
try {
if (!q?.trim())
  return reply(`Exemplo: ${prefix + command} https://vt.tiktok.com/abc123/`)
reply("Aguarde um momento...")
const url = `${SITE}/api/downloads/tiktok-mp4?apitoken=${TOKEN}&url=${encodeURIComponent(q)}`
await yuta.sendMessage(from, { video: { url }, mimetype: "video/mp4", fileName: "tiktok.mp4"}, { quoted: selo })
} catch (err) {
console.log(err)
reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
}
}
break;

case 'instagram':
case 'insta': {
try {
if (!q?.trim()) return reply(`Exemplo: ${prefix + command} https://www.instagram.com/reel/XXXX/`)
const { status, result } = await fetchJson(`${SITE}/api/downloads/instagram-video?apitoken=${TOKEN}&url=${encodeURIComponent(q)}`)
reply("Aguarde um momento..");
if (!status || !result?.length)
return reply("Vídeo não encontrado.")
await yuta.sendMessage(from, { video: { url: result[0].video }, mimetype: "video/mp4", fileName: result[0].filename || "instagram.mp4"}, { quoted: selo })
} catch (err) {
console.log(err)
reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
}
}
break;

case 'instamp3':
case 'insta_audio': {
try {
  if (!q?.trim())
    return reply(`Exemplo: ${prefix + command} https://www.instagram.com/reel/XXXX/`)
  reply("Aguarde um momento..")
  await yuta.sendMessage(from, { audio: { url: `${SITE}/api/downloads/insta-mp3?apitoken=${TOKEN}&url=${encodeURIComponent(q)}` }, mimetype: "audio/mpeg", fileName: `instagram-audio.mp3`}, { quoted: selo })
} catch (err) {
  console.log(err)
  reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
}
}
break;


case 'instagram2':
case 'insta_video2':
await reagir(from, "⏳")
try {
if(q.length < 5) return reply(`Exemplo: ${prefix+command} o link`);
ABC = await fetchJson(YUTA_URL + `/api-bronxys/instagram?url=${q.trim()}&apikey=` + YutaBot)
let DM_T = ABC.msg[0].type
var A_T = DM_T === "mp4" ? "video/mp4" : DM_T === "webp" ? "image/webp" : DM_T === "jpg" ? "image/jpeg" : DM_T === "mp3" ? "audio/mpeg" : "video/mp4"
yuta.sendMessage(from, {[A_T.split("/")[0]]: {url: ABC.msg[0].url}, mimetype: A_T}, {quoted: selo}).catch(e => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;

case 'insta_audio2':
await reagir(from, "⏳")
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} o link`);
ABC = await fetchJson(YUTA_URL + `/api-bronxys/instagram?url=${q.trim()}&apikey=` + YutaBot)
let DM_T = ABC.msg[0].type
var A_T = DM_T === "webp" ? "image/webp" : DM_T === "jpg" ? "image/jpeg" : DM_T === "mp3" ? "audio/mpeg" : "audio/mpeg"
yuta.sendMessage(from, {[A_T.split("/")[0]]: {url: ABC.msg[0].url}, mimetype: A_T}, {quoted: selo}).catch(e => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;

case 'fakemsg':
case 'fakechat':  //Criado por Nk 
    if ([prefix, "&", "/", "#", "+"].includes(q.trim())) {
        return reply(`_Infelizmente não pode ser colocado comandos no fake chat._`);
    }
    const [repplace, tarrget, bott] = q.split("|");
    const m_ = info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo && info.message.extendedTextMessage.contextInfo.mentionedJid ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : null;

    if (!m_ || !tarrget || !bott) {
        return reply(`- Exemplo:\n\n ${prefix}fakechat _@user|mensagem do usuário|Sua mensagem_`);
    }
    yuta.sendMessage(from, {
        text: bott
    }, {
        quoted: {
            key: {
                fromMe: false,
                participant: m_
            },
            message: {
                conversation: tarrget
            }
        }
    });
    break; //By Nk


case 'play': { 
  try {
    if (!q?.trim()) return reply("Cadê o parâmetro: nome da música?");
    await yuta.sendMessage(from, { react: { text: "⌛", key: info.key } });
    const { status, resultado } = await fetchJson(`https://yuta-apis.xyz/api/pesquisas/yt-search?apitoken=${TOKEN}&query=${encodeURIComponent(q.trim())}`);
    if (!status || !resultado?.length) {
      return reply("❌ Nenhum resultado encontrado para essa pesquisa. 😢");
    }
    const video = resultado[0].resultados;
    const { title, description, url, thumbnail, duration, views, author } = video;
    const msgText = `Yuta API • Downloads\n\n📝 *Título:* ${title}
👤 *Autor:* ${author?.name || 'Desconhecido'}
📺 *Canal:* ${author?.url || 'N/A'}
⏱️ *Duração:* ${duration.timestamp || '❌ Não disponível'}
👁️ *Visualizações:* ${views || '0'}
🔗 *Link:* ${url}
📌 *Descrição:* ${description || 'N/A'}`;
    await yuta.sendMessage(from, { image: { url: thumbnail }, caption: msgText }, { quoted: selo });
    const audio = await getBuffer(`https://yuta-apis.xyz/api/downloads/ytaudio2?apitoken=${TOKEN}&url=${encodeURIComponent(url)}`);
    if (!audio) return reply("❌ Não foi possível baixar o áudio deste vídeo. 😢");
    await yuta.sendMessage(from, { audio, mimetype: "audio/mpeg", fileName: `${title}.mp3`}, { quoted: selo });
    await yuta.sendMessage(from, { react: { text: "✅", key: info.key } });
  } catch (e) {
    console.log("Erro em play:", e.message);
    reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
  }
}
break;

case 'play2': {
  try {
    if (!q?.trim()) return reply(`🎵 Exemplo: ${prefix}play nome da música`)
    await yuta.sendMessage(from, { react: { text: "⌛", key: info.key } });
    const audio = await getBuffer(`https://yuta-apis.xyz/api/downloads/play-audio2?apitoken=${TOKEN}&query=${encodeURIComponent(q.trim())}`);
    if (!audio) return reply("❌ Nenhum áudio encontrado ou indisponível. 😢");
    await yuta.sendMessage(from, { audio, mimetype: "audio/mpeg" }, { quoted });
    await yuta.sendMessage(from, { react: { text: "✅", key: info.key } });
  } catch (e) {
    console.log("Erro em play:", e.message);
    reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
  }
}
break;

case 'playvideo':
case 'ytmp4':
case 'playvid':
case 'playmp4': {
  try {
    if (!q?.trim()) return reply(`🎵 Exemplo: ${prefix}play nome da música`)
    await yuta.sendMessage(from, { react: { text: "⌛", key: info.key } });
    const video = await getBuffer(`https://yuta-apis.xyz/api/downloads/play-video2?apitoken=${TOKEN}&query=${encodeURIComponent(q.trim())}`);
    if (!video) return reply("❌ Nenhum vídeo encontrado ou formato indisponível. 😢");
    await yuta.sendMessage(from, { video, mimetype: "video/mp4", fileName: `${q.trim()}.mp4`}, { quoted });
    await yuta.sendMessage(from, { react: { text: "✅", key: info.key } });
  } catch (e) {
    console.log("Erro em playvideo:", e.message);
    reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
  }
}
break;


case 'playdoc':
case 'play_doc': {
  try {
    if (!q?.trim()) return reply(`🎵 Exemplo: ${prefix}play nome da música`)
    await yuta.sendMessage(from, { react: { text: "⌛", key: info.key } });
    const doc = await getBuffer(
      `https://yuta-apis.xyz/api/downloads/play-audio2?apitoken=${TOKEN}&query=${encodeURIComponent(q.trim())}`);
    if (!doc) return reply("❌ Nenhum documento encontrado ou áudio indisponível. 😢");
    await yuta.sendMessage(from, { document: doc, mimetype: "audio/mpeg", fileName: `${q.trim()}.mp3`}, { quoted });
    await yuta.sendMessage(from, { react: { text: "✅", key: info.key } });
  } catch (e) {
    console.log("Erro em playdoc:", e.message);
    reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
  }
}
break;


case 'ytsearch':
case 'pesquisa_yt':
case 'yt-info': {
  try {
    if (!q?.trim()) return reply(`🎵 Exemplo: ${prefix}play nome da música`)

    await yuta.sendMessage(from, { react: { text: "⌛", key: info.key } });

    const { status, resultado } = await fetchJson(
      `https://yuta-apis.xyz/api/pesquisas/yt-search?apitoken=${TOKEN}&query=${encodeURIComponent(q.trim())}`
    );

    if (!status || !resultado?.length) {
      return reply("❌ Nenhum resultado encontrado. 😢");
    }

    const video = resultado[0].resultados;
    const card = `https://yuta-apis.xyz/canvas/cardmusic?apitoken=${TOKEN}` +
      `&fundo=${encodeURIComponent(video.thumbnail)}` +
      `&avatar=${encodeURIComponent(video.thumbnail)}` +
      `&titulo=${encodeURIComponent(video.title)}` +
      `&author=${encodeURIComponent(video.author.name)}` +
      `&atual=0:00` +
      `&total=${encodeURIComponent(video.duration.timestamp || "0:00")}`;

    const msg = `🎬 *TÍTULO:* ${video.title}
⏱️ *DURAÇÃO:* ${video.duration.timestamp || "❌ Não disponível"}
👁️ *VIEWS:* ${video.views || "❌ Não disponível"}
👤 *AUTOR:* ${video.author.name}
🔗 *CANAL:* ${video.author.url}

🌐 *URL:* ${video.url}

📝 *DESCRIÇÃO:*
${video.description || "❌ Não disponível"}`;

    await yuta.sendMessage(from, { image: { url: card }, caption: msg }, { quoted: selo });

    await yuta.sendMessage(from, { react: { text: "✅", key: info.key } });

  } catch (e) {
    console.log("Erro em ytsearch:", e.message);
    reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
  }
}
break;


case 'amazon': 
case 'amazonsearch':
if(q.trim().length < 4) return reply(`Exemplo: ${prefix+command} fone redmi airdots 2`)
try {
reply(mess.teste());
ABC = await fetchJson(YUTA_URL + `/api-bronxys/Amazon_Pesquisa?pesquisa=${q.trim()}&apikey=` + YutaBot)
RST = "Pesquisa Amazon:\n\n"
for ( i  = 0; i < (ABC.length > 40 ? 40: ABC.length); i++) {
RST +=  `( ${i+1} ) - Titulo: ${ABC[i].titulo}\n- Preço: ${ABC[i].preco}\n- Url: ${ABC[i].url}\n${"_".repeat(27)}\n\n`
}
reply(RST);
} catch {
return reply(mess.error())
}
break;

case 'print': 
case 'printsite': {
try {
  if (!q?.trim()) return reply(`Exemplo: ${prefix + command} https://google.com`)
  const url = encodeURIComponent(q)
  const apiUrl = `${SITE}/api/outros/printsite?url=${url}&apitoken=${TOKEN}`
  await yuta.sendMessage(from, { image: { url: apiUrl }, caption: `📌 Print do site: ${q}`}, { quoted: selo })
} catch (err) {
  console.log(err)
  reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
}
}
break

case "playstore":
if(q.length < 2) return reply("Cade o título do apk que deseja pesquisar?")
data = await fetchJson(YUTA_URL + `/api-bronxys/playstore?nome=${q}&apikey=` + YutaBot)
ABC = "Play Store pesquisa:\n\n"
for(let a of data.resultados) {
ABC += `\n\n${a.title}\n\n----------------------------------------------\nID:
${a.appId}\n\n----------------------------------------------\n\nURL:
${a.url}\n\n----------------------------------------------`
}
reply(ABC)
break;

case 'facebook':
case 'face_video':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reply(mess.teste());
yuta.sendMessage(from, {video: {url: YUTA_URL + `/api-bronxys/${command}?url=${q}&apikey=` + YutaBot}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;

case 'face_audio':
try {
if(!q.includes("facebook") && !q.includes("fb.watch")) return reply(`Exemplo: ${prefix+command} o link do Facebook`);
reply(mess.teste());
yuta.sendMessage(from, {audio: {url: YUTA_URL + `/api-bronxys/${command}?url=${q}&apikey=` + YutaBot}, mimetype: "audio/mpeg"}).catch(e => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;

case 'twitter_video':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply(mess.teste());
yuta.sendMessage(from, {video: {url: YUTA_URL + `/api-bronxys/${command}?url=${q}&apikey=` + YutaBot}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;

case 'twitter_audio':
try {
if(!q.includes("twitter")) return reply(`Exemplo: ${prefix+command} o link do Twitter`);
reply(mess.teste());
yuta.sendMessage(from, {audio: {url: YUTA_URL + `/api-bronxys/${command}?url=${q}&apikey=` + YutaBot}, mimetype: "audio/mpeg"}).catch(e => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;


case 'mediafire':
try {
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(YUTA_URL + `/api-bronxys/mediafire?url=${q}&apikey=` + YutaBot)
reply(`Enviando: ${ABC.resultado[0].nama}\n\nPeso: ${ABC.resultado[0].size}`)
yuta.sendMessage(from, {document: {url: ABC.resultado[0].link}, mimetype: "application/"+ABC.resultado[0].mime, fileName: ABC.resultado[0].nama}).catch(e => {
return reply(mess.error());
})
} catch (e) {
console.log(String(e))
return reply(mess.error())
}
break;

//==============[ FIM CASES DOWNLOADS ]============\\


//===========[ INFORMATIVOS DO YUTA ]===============\\

case 'redacao':
if(!q) return reply(`Você esqueceu de colocar o tema de sua redação ao lado do comando.`)
try {
let { key } = await yuta.sendMessage(from, {text: `Estou processando sua solicitação. Isso pode levar alguns segundos...`}, {quoted: selo})
promptUser = `Crie um texto dissertativo-argumentativo com o tema: ${q}`
anu1 = await fetchJson(`https://aemt.me/gpt4?text=${promptUser}`)
await yuta.sendMessage(from, {text: mess.respostaRedacao(anu1), edit: key});
} catch(error) {
return reply(mess.error())
}
break

case 'summerize':
if(!q) return reply(`Você esqueceu de colocar o que você deseja resumir ao lado do comando.`)
try {
let { key } = await yuta.sendMessage(from, {text: `Estou resumindo o texto solicitado. Isso pode levar alguns segundos...`}, {quoted: selo})
promptUser = `Faça um resumo básico do texto apresentado: ${q}`
anu1 = await fetchJson(`https://aemt.me/gpt4?text=${promptUser}`)
await yuta.sendMessage(from, {text: mess.respostaResumida(anu1), edit: key})
} catch(error) {
return reply(mess.error())
}
break


case 'wikipedia': case 'wiki':
try {
if(!q) return reply(`Exemplo: ${prefix+command} JavaScript`)
await reagir(from, "✅")
wikip = await axios.get(`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(q)}&prop=info&inprop=url`);
wikis = await axios.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`);
var carre = [`${mess.wikiResposta(wikis)}`]
    let { key } = await yuta.sendMessage(from, { text:`*⚡ᴀᴄᴀʙᴇɪ ᴅᴇ ᴀᴄʜᴀʀ ᴀǫᴜɪ sᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*`}, {quoted: selo})
    for (let i = 0; i < carre.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Atraso de 5 segundos
        await yuta.sendMessage(from, { text: carre[i], mentions: [sender], edit: key });
    }
} catch(error) {
reply(mess.error())
}
break


case 'book':
if (args.length == 0) return reply(`*Exemplo:* ${prefix+command} Nome do Livro`)
try {
const takeBook = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&langRestrict=pt`);
const getBook = await axios.get(`${takeBook.data.items[0].selfLink}`);
var bookImage = await getBuffer(getBook.data.volumeInfo.imageLinks.thumbnail)
await yuta.sendMessage(from, {image: bookImage, caption: mess.searchBooks(getBook)}, {quoted: selo})
} catch(error) {
reply(mess.error())
}
break

case 'clima':
case 'tempo': { // by Nk Petrøv
try {
    if (!q) {
        return reply(`- *Exemplo:*\n` + `${prefix + command} Belém`)
    }
    await reagir(from, '📡');
    const cidade = q.trim()
    const url = `https://wttr.in/${encodeURIComponent(cidade)}?format=j1`
    const { data } = await axios.get(url)
    if (!data || !data.current_condition || !data.current_condition[0]) {
        return reply(mess.error)
    }
    const atual = data.current_condition[0]
    const temp = atual.temp_C
    const sensacao = atual.FeelsLikeC
    const umidade = atual.humidity
    const vento = atual.windspeedKmph
    const clima = atual.weatherDesc?.[0]?.value || 'Indefinido'
    const obs = atual.observation_time
    const texto = `🌐 *CLIMA EM TEMPO REAL*\n🌍 *CIDADE:* ${cidade}\n\n🌡️ *TEMPERATURA:* ${temp}°C\n💢 *SENSAÇÃO:* ${sensacao}°C\n💧 *UMIDADE:* ${umidade}%\n🌪️ *VENTO:* ${vento} km/h\n\n🗣️ *CONDIÇÃO:* ${clima}\n📎 *ATUALIZADO:* ${obs} UTC\n👤 *SOLICITADO POR:* ${pushname}`
    const imagem = `https://wttr.in/${encodeURIComponent(cidade)}.png`
    await yuta.sendMessage(from, { image: { url: imagem }, caption: texto }, { quoted: info })
} catch (err) {
    console.error('ERRO CLIMA:', err)
    reply(mess.error)
}
break
}

case 'getchannel':
case 'infoch': {//Nk 
    if (!q) return reply(`• Por favor, forneça o link do canal.\n\n> exemplo: ${prefix + command} https://whatsapp.com/channel/0029ValLKgUAO7RCUU0dO03k`);
    await reagir(from, "🎉");
    try {
        let channelId;
    if (q.includes('whatsapp.com/channel/')) {
      channelId = q.split('whatsapp.com/channel/')[1].split('/')[0];
    } else if (q.includes('wa.me/channel/')) {
      channelId = q.split('wa.me/channel/')[1].split('/')[0];
    } else {
      channelId = text;}
      const idNewsletter = await yuta.newsletterMetadata('invite', channelId);
        const axios = require('axios');
        const cheerio = require('cheerio');
        const response = await axios.get(q);
        const $ = cheerio.load(response.data);
        const title = $('title').text() || 'Nome não encontrado';
        const img = $('img._9vx6').attr('src');
        const subs = $('h5._9vd5._9scy').text() || 'Seguidores não encontrados';
        const description = $('h4._9vd5._9scb').text() || 'Descrição não encontrada';
        await yuta.sendMessage(from, {
            image: { url: img },
            caption: `- 🌟 *Nome*: ${title}\n- 👤 *Seguidores*: ${subs}\n- 🎭 *Id Channel*: ${idNewsletter.id}\n- 🔗 *Link*: ↴\n${q}\n- 🌃 *Descrição*: ↴\n\n${description}`,
        }, { quoted: selo });
    } catch (e) {
        reply('Ocorreu um erro ao tentar obter as informações do canal.');
        console.log(e);
    }
}
break;

case "alugar":
case "alugarbot": {
  try {
    if (!isModoAluguel) 
      return reply(`*ᴏ ᴍᴏᴅᴏ ᴀʟᴜɢᴜᴇʟ ᴇsᴛᴀ́ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.* 🙅‍♂️`)
    if (!isGroup) 
      return reply(mess.onlyGroup())

    await reagir(from, "💎")

    const planos = __aluguelPlanos()
    const planos1G = planos.filter(p => p.grupos === 1)

    const mkRows = (arr) => arr.map(p => ({
      header: "💎 PLANO DISPONÍVEL",
      title: `${p.dias} dias → R$ ${__formatBRL(p.valor)}`,
      description: "Ativa este grupo automaticamente após pagamento.",
      id: `${prefix}alugarplano ${p.id}`
    }))

    const btn1G = {
      name: "single_select",
      buttonParamsJson: JSON.stringify({
        title: "💎 ESCOLHER PLANO",
        sections: [{ 
          title: "PLANOS DISPONÍVEIS", 
          rows: mkRows(planos1G) 
        }]
      })
    }

    const textoMenu =
`*⌗ ┆💰 ᴀʟᴜɢᴜᴇ ᴏ ʙᴏᴛ ᴇ ᴛʀᴀɴsғᴏʀᴍᴇ sᴇᴜ ɢʀᴜᴘᴏ! 🙇‍♂️*

*⋮ ⌗ ┆📅 15 ᴅɪᴀs → R$ 10,00*
*⋮ ⌗ ┆📅 30 ᴅɪᴀs → R$ 25,00*`

    const caminhoVideo  = "./DADOS DO YUTA/INFO_YUTA/LOGOS/fotomenu.mp4"
    const caminhoImagem = "./DADOS DO YUTA/INFO_YUTA/LOGOS/fotomenu.png"

    let mediaAlugar

    if (fs.existsSync(caminhoVideo)) {
      mediaAlugar = await prepareWAMessageMedia({
        video: { url: caminhoVideo },
        mimetype: "video/mp4",
        gifPlayback: true
      }, { upload: yuta.waUploadToServer })
    } else {
      mediaAlugar = await prepareWAMessageMedia({
        image: { url: caminhoImagem }
      }, { upload: yuta.waUploadToServer })
    }

    const carouselMessage = {
      cards: [{
        header: {
          hasMediaAttachment: true,
          ...(mediaAlugar.videoMessage
            ? { videoMessage: mediaAlugar.videoMessage }
            : { imageMessage: mediaAlugar.imageMessage })
        },
        headerType: mediaAlugar.videoMessage ? "VIDEO" : "IMAGE",
        body: { text: textoMenu },
        footer: { text: `*${NomeDoBot || "YUTA"}*` },
        nativeFlowMessage: { buttons: [btn1G] }
      }]
    }

    const msg = generateWAMessageFromContent(from, {
      interactiveMessage: {
        contextInfo: { ...NkChannelKk, mentionedJid: [sender] },
        body: { text: "*# | 💰 ᴀʟᴜɢᴜᴇʟ ʏᴜᴛᴀ ʙᴏᴛ*\n*# | 📦 ᴘʟᴀɴᴏs ᴅɪsᴘᴏɴɪ́ᴠᴇɪs ᴀʙᴀɪxᴏ*" },
        carouselMessage
      }
    }, {})

    await yuta.relayMessage(from, msg.message, { messageId: msg.key.id })

  } catch (e) {
    console.log(e)
    reply(mess.error())
  }
}
break

case "alugarplano": {
  try {
    if (!isModoAluguel) 
      return reply(`*ᴏ ᴍᴏᴅᴏ ᴀʟᴜɢᴜᴇʟ ᴇsᴛᴀ́ ᴅᴇsᴀᴛɪᴠᴀᴅᴏ.* 🙅‍♂️`)
    if (!isGroup) 
      return reply(mess.onlyGroup())
    if (!isBotGroupAdmins) 
      return reply(mess.onlyBotAdmin())

    const planoId = String(args[0] || q || "").trim()
    if (!planoId) 
      return reply(`*use assim 🙇‍♂️*\n\n*• ${prefix}alugar*`)

    const plano = __aluguelFindPlano(planoId)
    if (!plano) 
      return reply(`*❌ ᴘʟᴀɴᴏ ɪɴᴠᴀ́ʟɪᴅᴏ.* 🙇‍♂️`)

    await reagir(from, "💎")

    const descricao = `Aluguel ${NomeDoBot || "Bot"} - ${plano.titulo}`
    const valor = Number(plano.valor)
    const idempotencyKey = Date.now().toString() + "_" + Math.random().toString(16).slice(2)

    const pagamentoInfo = await criarPagamentoPix(valor, descricao, idempotencyKey)

    const qrBuffer = Buffer.from(pagamentoInfo.qr_code_base64, "base64")
    const mediaQR = await prepareWAMessageMedia(
      { image: qrBuffer }, 
      { upload: yuta.waUploadToServer }
    )

    const bodyTxt =
      `- *⚖️ | 𝐏𝐈𝐗 𝐆𝐄𝐑𝐀𝐃𝐎 𝐂𝐎𝐌 𝐒𝐔𝐂𝐄𝐒𝐒𝐎*\n` +
      `- *💸 | 𝚅𝙰𝙻𝙾𝚁 → R$ ${__formatBRL(valor)}*\n` +
      `- *📦 | ᴘʟᴀɴᴏ → ${plano.titulo}*\n` +
      `- *⚙️ | 𝙸𝙳 → ${pagamentoInfo.id}*\n` +
      `- *🪫 | sᴛᴀᴛᴜs → ᴇᴍ ᴀɴᴅᴀᴍᴇɴᴛᴏ*`

    const carouselMessage = {
      text: "*𝙿𝙰𝙶𝙰𝙼𝙴𝙽𝚃𝙾 𝙴𝙼 𝙰𝙽𝙳𝙰𝙼𝙴𝙽𝚃𝙾*",
      cards: [{
        header: { hasMediaAttachment: true, imageMessage: mediaQR.imageMessage },
        headerType: "IMAGE",
        body: { text: bodyTxt },
        footer: { text: `*ᴏ ᴘᴀɢᴀᴍᴇɴᴛᴏ ᴇxᴘɪʀᴀ ᴇᴍ 30 ᴍɪɴᴜᴛᴏꜱ*` },
        nativeFlowMessage: {
          buttons: [{
            name: "cta_copy",
            buttonParamsJson: JSON.stringify({
              display_text: "𝙲𝙾𝙿𝙸𝙰𝚁 𝙲𝙾𝙳𝙸𝙶𝙾 𝙿𝙸𝚇 💵",
              copy_code: pagamentoInfo.qr_code
            })
          }]
        }
      }]
    }

    await yuta.relayMessage(from, {
      interactiveMessage: {
        contextInfo: { ...NkChannelKk, mentionedJid: [sender] },
        body: { text: "*# | 💳 ᴘɪx ɢᴇʀᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ*\n*# | 📌 ᴜᴛɪʟɪᴢᴇ ᴏ ᴄᴏ́ᴅɪɢᴏ ᴀʙᴀɪxᴏ ᴘᴀʀᴀ ᴘᴀɢᴀʀ*" },
        carouselMessage
      }
    }, {})

    await __startPollPixAluguel({
      yuta,
      from,
      sender,
      pagamentoId: pagamentoInfo.id,
      plano,
      quotedMsg: selo
    })

  } catch (error) {
    const erroReal = error?.response?.data || error?.message || error
    console.log("ERRO ALUGARPLANO:", erroReal)

    await reply(
      `*❌ ᴇʀʀᴏ ᴀᴏ ɢᴇʀᴀʀ ᴏ ᴘɪx 🙇‍♂️*\n\n\`\`\`${JSON.stringify(erroReal, null, 2)}\`\`\``
    )
  }
}
break

case 'pix': {
  if (!q) return reply('*ᴩᴏʀ ɢᴇɴᴛɪʟᴇᴢᴀ, ɪɴꜱɪʀᴀ ᴏ ᴠᴀʟᴏʀ ᴅᴏ ᴩᴀɢᴀᴍᴇɴᴛᴏ 💁‍♂️*');
  try {
  reagir(from, "💵");
    const descricao = 'Pagamento via PIX';
    const valor = Number(q);
    const idempotencyKey = uuidv4();
    const pagamentoInfo = await criarPagamentoPix(valor, descricao, idempotencyKey);
    const qrBuffer = Buffer.from(pagamentoInfo.qr_code_base64, 'base64');
    const mediaQR = await prepareWAMessageMedia({ image: qrBuffer }, { upload: yuta.waUploadToServer });
    const carouselMessage = {text: '*𝙿𝙰𝙶𝙰𝙼𝙴𝙽𝚃𝙾 𝙴𝙼 𝙰𝙽𝙳𝙰𝙼𝙴𝙽𝚃𝙾*', cards: [{header: {hasMediaAttachment: true, imageMessage: mediaQR.imageMessage}, headerType: 'IMAGE', body: {text: `- *⚖️ | 𝐏𝐈𝐗 𝐆𝐄𝐑𝐀𝐃𝐎 𝐂𝐎𝐌 𝐒𝐔𝐂𝐄𝐒𝐒𝐎*\n- *💸 | 𝚅𝙰𝙻𝙾𝚁 → R$ ${valor}*\n- *⚙️ | 𝙸𝙳 𝙳𝙴 𝚃𝚁𝙰𝙽𝚂𝙸𝙲𝙰𝙾 → ${pagamentoInfo.id}*\n- *🪫 | 𝚂𝚃𝙰𝚃𝚄𝚂 → 𝙴𝙼 𝙰𝙽𝙳𝙰𝙼𝙴𝙽𝚃𝙾*`}, footer: {text: `*ᴏ ᴩᴀɢᴀᴍᴇɴᴛᴏ ᴇxᴩɪʀᴀ ᴇᴍ 30 ᴍɪɴᴜᴛᴏꜱ*`}, nativeFlowMessage: {buttons: [{name: 'cta_copy', buttonParamsJson: JSON.stringify({display_text: '𝙲𝙾𝙿𝙸𝙰𝚁 𝙲𝙾𝙳𝙸𝙶𝙾 𝙳𝙴 𝙿𝙰𝙶𝙰𝙼𝙴𝙽𝚃𝙾 💵', copy_code: pagamentoInfo.qr_code})}]}}]};
    await yuta.relayMessage(from, {interactiveMessage: {contextInfo: {participant: from}, body: { text: "*# | 💳 ᴘɪx ɢᴇʀᴀᴅᴏ ᴄᴏᴍ sᴜᴄᴇssᴏ*\n*# | 📌 ᴜᴛɪʟɪᴢᴇ ᴏ ᴄᴏ́ᴅɪɢᴏ ᴀʙᴀɪxᴏ ᴘᴀʀᴀ ᴘᴀɢᴀʀ*" }, carouselMessage}}, {});
    const tempoMaximo = 30 * 60 * 1000;
    const inicio = Date.now();
    while (Date.now() - inicio < tempoMaximo) {
      await sleep(5000);
      const check = await verificarPix(pagamentoInfo.id);
      if (check.status === 'approved') {
        await reply(`*ᴏ ᴩᴀɢᴀᴍᴇɴᴛᴏ ꜰᴏɪ ᴄᴏɴꜰɪʀᴍᴀᴅᴏ, ᴍᴜɪᴛᴏ ᴏʙʀɪɢᴀᴅᴏ ᴩᴇʟᴀ ᴀᴊᴜᴅᴀ ❣️🫂*\n> ᴀꜱꜱ: ${ownerName}`);
        return;
      }}
    await reagir(from, "😿");
  } catch (error) {
  reply(mess.error());   
  }
  break;
}

case 'gtts':
try {
if (args.length < 1) return await yuta.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: selo})
const gtts = require('./ARQUIVES/funcoes/gtts.js')(args[0])
if (args.length < 2) return await yuta.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: selo})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, async function() {
await exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, async(err) => {
await yuta.sendMessage(from, {audio: fs.readFileSync(ranm), mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo}).catch(async(error) => {
return reply(mess.error())
})
DLT_FL(ranm); DLT_FL(rano)
})
})
} catch(error) {
console.log(error)
return reply(mess.error())
}
break

case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`
await mentions(tagme, [sender], true)
break

case 'avalia': {
    try {
        if(!isGroup) return reply(mess.onlyGroup())
        const groupMetadata = await yuta.groupMetadata(from);
        const members = groupMetadata.participants;
        const randomMember = members[Math.floor(Math.random() * members.length)];
        let profilePictureUrl;
        try {
            profilePictureUrl = await yuta.profilePictureUrl(randomMember.id, 'image');
        } catch {
            profilePictureUrl = imgperfil; 
        }
        const evaluations = ["Uma ótima escolha de foto de perfil!", "Essa foto mostra sua personalidade!", "Adorei a vibe dessa imagem!", "Você parece estar se divertindo nessa foto!", "Essa foto reflete bem quem você é!", "Que lindo essa foto, ameiii!!"];
        const randomEvaluation = evaluations[Math.floor(Math.random() * evaluations.length)];
        const messageContent = {
            image: { url: profilePictureUrl },
            caption: mess.avalia({ randomMember, info, groupName, isChVip, randomEvaluation }),
            contextInfo: { ...NkChannelKk, mentionedJid: [randomMember.id] }
        };
        await yuta.sendMessage(from, messageContent, { quoted: selo });
    } catch (e) {
        console.error(e);
        return reply(mess.error());
    }
    break;
}


case 'avaliar':
case 'avalie':
if(q.length < 1) return reply(`*ᴇxᴇᴍᴘʟᴏ ${prefix}ᴀᴠᴀʟɪᴇ ᴍᴇʟʜᴏʀ ʙᴏᴛ ǫᴜᴇ ᴊᴀ ᴠɪ!!*`);
if(q.length > 400) return reply(`*ᴠᴏᴄᴇ ᴘᴀssᴏᴜ ᴅᴇ 400 ᴄᴀʀᴀᴄᴛᴀʀᴇs*`);
await sendMentions(nmrdn, `*🌟 ᴀᴠᴀʟɪᴀᴄᴀᴏ ᴅᴇ: @${sender.split("@")[0]}*\n- *ᴅᴇᴛᴀʟʜᴇs:*\n• ${q}`);
await sendMentions(from, `*ᴄᴇʀᴛᴏ @${sender.split("@")[0]} ᴇɴᴠɪᴇɪ ᴀ sᴜᴀ ᴀᴠᴀʟɪᴀᴄᴀᴏ ᴀᴏ ᴍᴇᴜ ᴅᴏɴᴏ 🙇‍♂️*`);
break

case 'bug':
if(q.length < 1) return reply(`*ᴇxᴇᴍᴘʟᴏ ${prefix}ʙᴜɢ ᴏ ʙᴏᴛ ᴇsᴛᴀ ᴄᴏᴍ ᴀᴛʀᴀsᴏ*`);
if(q.length > 400) return reply(`*ᴠᴏᴄᴇ ᴘᴀssᴏᴜ ᴅᴇ 400 ᴄᴀʀᴀᴄᴛᴀʀᴇs*`);
await sendMentions(nmrdn, `*⚠ ᴏ ᴜsᴜᴀʀɪᴏ @${sender.split("@")[0]} ʀᴇʟᴀᴛᴏᴜ ᴀʟɢᴜᴍ ᴇʀʀᴏ ᴏᴜ ʙᴜɢ ɴᴏ ʙᴏᴛ*\n*ᴅᴇᴛᴀʟʜᴇs:*\n• ${q}`);
reply('*ᴍᴇɴsᴀɢᴇᴍ ᴇɴᴠɪᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴀᴏ ᴍᴇᴜ ᴍᴇsᴛʀᴇ, ᴄᴀsᴏ ᴠᴏᴄᴇ ғʟᴏᴏᴅ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴢᴜᴇɪʀᴀ ᴇᴜ ɪʀᴇɪ ʙʟᴏǫᴜᴇᴀʀ ᴠᴏᴄᴇ ᴅᴇ ᴜsᴀʀ ᴍᴇᴜs ᴄᴏᴍᴀɴᴅᴏs 🙇‍♂️*');
break

case 'sugestão': case 'sugestao':
if(q.length < 1) return reply(`*ᴇxᴇᴍᴘʟᴏ ${prefix}sᴜɢᴇsᴛᴀᴏ ǫᴜᴇ ᴛᴀʟ ᴄᴏʟᴏᴄᴀʀ ᴜᴍ ᴄᴏᴍᴀɴᴅᴏ ǫᴜᴇ ғᴜɴᴄɪᴏɴᴇ ᴅᴀ ᴛᴀʟ ᴍᴀɴᴇɪʀᴀ? 🤷‍♂️*`);
if(q.length > 400) return reply(`*ᴠᴏᴄᴇ ᴘᴀssᴏᴜ ᴅᴇ 400 ᴄᴀʀᴀᴄᴛᴀʀᴇs*`);
await sendMentions(nmrdn, `*⚠ ᴏ ᴜsᴜᴀʀɪᴏ @${sender.split("@")[0]} sᴜɢᴇʀɪᴜ ᴜᴍ ᴄᴏᴍᴀɴᴅᴏ ᴏᴜ sɪsᴛᴇᴍᴀ ɴᴏ ʙᴏᴛ*\n*ᴅᴇᴛᴀʟʜᴇs:*\n• ${q}`);
reply('*ᴍᴇɴsᴀɢᴇᴍ ᴇɴᴠɪᴀᴅᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ ᴀᴏ ᴍᴇᴜ ᴍᴇsᴛʀᴇ, ᴄᴀsᴏ ᴠᴏᴄᴇ ғʟᴏᴏᴅ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ᴢᴜᴇɪʀᴀ ᴇᴜ ɪʀᴇɪ ʙʟᴏǫᴜᴇᴀʀ ᴠᴏᴄᴇ ᴅᴇ ᴜsᴀʀ ᴍᴇᴜs ᴄᴏᴍᴀɴᴅᴏs 🙇‍♂️*');
break


case 'movie':
if (args.length == 0) return reply(`Cadê o nome do filme o qual você deseja ver informações?`)
movieInfo = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (movieInfo.data.total_results == 0) return reply(mess.noresult())
var ImageMovieLink = `https://image.tmdb.org/t/p/original${movieInfo.data.results[0].backdrop_path}`;
var fotoFilme = await getBuffer(ImageMovieLink)
yuta.sendMessage(from, {image: fotoFilme, caption: mess.movies(movieInfo)}, {quoted: selo})
.catch(async(error) => {
return reply(mess.error());
})
break

case 'series': {//nunu
    try {
        const nunuzqrw = await axios.get('https://www.adorocinema.com/series/');
        const nunuhjtr = cheerio.load(nunuzqrw.data);
        const nunufyxk = [];    
        nunuhjtr('.roller-item').each((nunuxcbz, nunuhblk) => {
            const nunujlwp = nunuhjtr(nunuhblk).find('.meta-title-link').text().trim();
            const nunusygh = nunuhjtr(nunuhblk).find('.meta-description').text().trim();
            const nunuhsnj = `https://www.adorocinema.com${nunuhjtr(nunuhblk).find('.meta-title-link').attr('href')}`;
            const nunuqksa = nunuhjtr(nunuhblk).find('.thumbnail-img').attr('data-src');       
            if (nunujlwp && nunuhsnj) {
                nunufyxk.push({
                    nunujlwp,
                    nunusygh,  
                    nunuhsnj,
                    nunuqksa
                });
            }
        });
        const nunumaxSeries = nunufyxk.slice(0, 8);
        let nunugktp = '🦺 *Melhores Séries da Semana:*\n\n';
        nunumaxSeries.forEach((nunusrzl, nunuihra) => {
            nunugktp += `🩴 *${nunuihra + 1}. ${nunusrzl.nunujlwp}*\n` +
                        `🈳️ *Gêneros:* ${nunusrzl.nunusygh}\n` +
                        `🚩 *Link:* ${nunusrzl.nunuhsnj}\n\n`;
        });
        if (nunumaxSeries.length > 0 && nunumaxSeries[0].nunuqksa) {
            await yuta.sendMessage(from, { 
                image: { url: nunumaxSeries[0].nunuqksa }, 
                caption: nunugktp 
            }, { quoted: selo });
        } else {
            await yuta.sendMessage(from, { text: nunugktp }, { quoted: selo });
        } 
    } catch (nunuevbr) {
        console.error('Erro ao buscar as séries:', nunuevbr);
        reply('⚠️ Não foi possível buscar as melhores séries no momento.');
    }
    break;
}


case 'signo':
try {
if(!q.trim()) return reply(`Digite seu signo, exemplo: ${prefix+command} virgem`);
ABC = await fetchJson(YUTA_URL + `/api-bronxys/horoscopo?signo=${q}&apikey=` + YutaBot)
yuta.sendMessage(from, {image: {url: ABC.img}, caption: `Signo: ${q}\n\n${ABC.title}\n${ABC.body}`}).catch(e => {
return reply(mess.error());
})
} catch (e) {
return reply(mess.error());
}
break;

case 'noticias': 
case 'getnoticias':
try {
if (!q) return reply(`Informe um tema para realizar a pesquisa de suas notícias!`)
theNews = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=pt&apiKey=9dc1dde158804756ae9b33dd8d71f7a1`);
d = await pickRandom(theNews.data.articles)

reply(`> *${d.title}* - ${d.author} [${d.source.name}]\n–\n• Descrição: *${d.description}*\n• Postagem: *${d.publishedAt.split('T').join(' - ').split('Z')[0]}*\n• URL: *${d.url}*`)
} catch (error) {
return reply(mess.error())
}
break

case 'googlenews': 
case 'gnews':
try {
idioma = "pt-br"; // Idioma: Português do Brasil
country = "BR"; // Mude a sigla para qual você quiser puxar as notícias.
dataNews = await fetchJson(`https://delirius-api-oficial.vercel.app/api/noticias?language=${idioma}&country=${country}`);
NTD = pickRandom(dataNews.headline_stories);
await reply(`> Google Notícias - Brasil:\n–\n• Título: *${NTD.title}*\n• Postagem por: *${NTD.by}* | ${NTD.published}\n–\n• URL: *${NTD.url}*`);
} catch(e) {
return await reply(mess.error());
}
break

case 'grupos': {
reply(mess.teste());
blue = await fetchJson(YUTA_URL + `/api-bronxys/grupos?q=${q}&apikey=` + YutaBot)
let red = "Listagem de grupos para você:\n\n"
blue.forEach(function(ab) {
red += ` - Url do Grupo: ${ab.link}\n\n - Descrição: ${ab.desc}\n\n${"-".repeat(20)}\n\n`
})
reply(red)
}
break;

case 'moedas': 
case 'moeda':
try {
ABC = await fetchJson(YUTA_URL + `/api-bronxys/Moedas_Agora?apikey=` + YutaBot)
reply(`${ABC?.dolar}\n\n${ABC?.euro}\n\n${ABC?.libra}\n\n${ABC?.bitcoin}\n\n${ABC?.ethereum}\n\n${ABC?.bovespa}\n\n${ABC?.ouro}`);
} catch {
return reply(mess.error())
}
break;

case "letra": 
case "liryc": 
case "letram": 
case "letramusic": 
case "letramusica": {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} Ela me traiu`)
try {
reply(mess.teste());
const abc = await fetchJson(YUTA_URL + `/api-bronxys/letra_musica?letra=${q.trim()}&apikey=` + YutaBot)
reply(` - Titulo: ${abc.titulo}\n\n - Compositor: ${abc.compositor}\n\n - Letra: ${abc.letra}`)
} catch (e) {
reply(mess.error())
}
}
break;

case 'gpt': { 
    if (!q) return reply('• Por favor, insira um texto ao ' +
        'lado do comando para que eu possa gerar ' +
        'uma resposta!');
    try { 
        const response = await fetchJson(`${SITE}/api/ias/gpt?apitoken=${TOKEN}&query=${encodeURIComponent(q.trim())}`);       
        reply(response.resultado.data[0].resposta);
    } catch (error) {
        console.error(error);
        reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
    }
    break;
}

case 'gemini': {
    if (!q) return reply('• Para conversar com o gemini, ' +
        'primeiro você deve inserir um texto ao lado ' +
        ' do comando!');
    try { 
        const GEMINI_RESPONSE = await fetchJson(`${SITE}/api/ias/gemini?apitoken=${TOKEN}&query=${encodeURIComponent(q.trim())}`);
        
        reply(GEMINI_RESPONSE.resposta);
    } catch (error) {
        console.error(error);
        reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
    }
    break;
}

case 'gemini-pro': {
    if (!q) return reply('• Para conversar com o gemini-pro, ' +
        'primeiro você deve inserir um texto ao lado ' +
        ' do comando!');       
    try { 
        const GEMPRO_RESPONSE = await fetchJson(`${SITE}/api/ias/gemini-pro?apitoken=${TOKEN}&query=${encodeURIComponent(q.trim())}`);       
        reply(GEMPRO_RESPONSE.resposta.resposta);
    } catch (error) {
        console.error(error);
        reply("❌ Erro ao processar.\n- Acesse: https://yuta-apis.xyz e verifique se ainda contém requests no seu token.")
    }
    break;
}


case 'esportenoticias': 
case 'esportenoticia': 
case 'espnoticia': 
case 'espnoticias':
case 'noticiasesporte': 
case 'noticiaesporte': 
case 'noticiaesp': 
case 'noticiasesp':
case 'esporte_noticias': 
case 'esporte_noticia': 
case 'esporte-noticias': 
case 'esporte-noticia':
reply(mess.teste());
try {
ABC = await fetchJson(YUTA_URL + `/api-bronxys/esporte_noticias?apikey=` + YutaBot)
AB =""
for ( i = 1; i < ABC.length; i++) {
AB += `${ABC[i].titulo}\n\n`
}
yuta.sendMessage(from, {image: {url: ABC[0].img}, caption: AB}, {quoted: selo})
} catch {
return reply(mess.error())
}
break;

case 'celular':
try {
if(!q.trim()) return reply(`Exemplo: ${prefix+command} galaxy a9 2018`);
reply(mess.teste());;
ABC = await fetchJson(YUTA_URL + `/api-bronxys/info_celular?celular=${q}&apikey=` + YutaBot);
reply(`📱 Celular: ${ABC.celular || "Não encontrado"}\n\nInformações:\n${ABC.resumo || ABC.infoc || "Não encontrado, seja mais específico, a marca e a versão"}`);
} catch (e) {
return reply(mess.error());
}
break;

case 'serie':
if (args.length == 0) return reply(`Cadê o nome da serie o qual você deseja ver informações?`)
serieInfo = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (serieInfo.data.total_results == 0) return reply(mess.noresult());
await yuta.sendMessage(from, {image: {url: `https://image.tmdb.org/t/p/original${serieInfo.data.results[0].backdrop_path}`}, caption: mess.series(serieInfo)}, {quoted: selo})
.catch(async(error) => {
return reply(mess.error())
})
break

case 'aptoide':
if (args.length == 0) return reply(`Cadê o nome do app? *Use como exemplo:* ${prefix+command} WhatsApp.`)
try {
const aptoide = await axios.get(`https://ws75.aptoide.com/api/7/apps/search?query=${encodeURIComponent(q)}&trusted=true`);
if (aptoide.data.datalist.total == 0) return reply(mess.noresult());
phAptoide = await(await fetch(aptoide.data.datalist.list[0].graphic)).buffer();
lnDown = await axios.get(`https://tinyurl.com/api-create.php?url=${aptoide.data.datalist.list[0].file.path_alt}`);
await yuta.sendMessage(from, {image: phAptoide, caption: mess.aptoide(aptoide.data.datalist.list[0], (aptoide.data.datalist.list[0].size / 1048576).toFixed(1), lnDown)}, {quoted: selo}); 
await yuta.sendMessage(from, {document: {url: aptoide.data.datalist.list[0].file.path}, mimetype: "application/vnd.Android.package-archive", fileName: `${aptoide.data.datalist.list[0].name}.apk`, caption: "Download Completo!"}, {quoted: selo})
} catch(error) {
return reply(mess.error())
}
break

//===========[ FIM CASES INFORMATIVOS ]==========\\

//=======[ COMANDOS BÁSICOS DE LOGOS DO YUTA ]=========\\
case 'angelwing':  case 'hackneon': case 'fpsmascote': 
case 'equipemascote': case 'txtquadrinhos': case 'ffavatar':
case 'mascotegame': case 'angelglx': case 'gizquadro': 
case 'wingeffect': case 'blackpink': case 'metalgold':
case 'girlmascote': case 'logogame':
try {
if(!q.trim()) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);  
reply(mess.teste());
ABC = await fetchJson(YUTA_URL + `/api-bronxys/logos_EPH?texto=${q}&category=${command}&apikey=` + YutaBot);
yuta.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: selo}).catch(() => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;


case 'fiction': 
case '3dstone': 
case 'areia': 
case 'style': 
case 'blood': 
case 'pink': 
case 'cattxt': 
case 'neondevil':
case 'carbon': 
case 'metalfire': 
case 'thunder': 
case 'vidro': 
case 'jokerlogo': 
case 'transformer': 
case 'demonfire':
case 'jeans': 
case 'metalblue': 
case 'natal': 
case 'ossos':
case 'asfalto': 
case 'break': 
case 'glitch2': 
case 'colaq':
case 'neon3': 
case 'nuvem': 
case 'horror': 
case 'matrix':
case 'berry': 
case 'luxury': 
case 'lava': 
case 'thunderv2':
case 'neongreen': 
case 'neve': 
case 'neon': 
case 'neon1':  
case 'neon3d': 
case 'gelo': 
case 'neon3': 
case '3dgold':
case 'lapis': 
case 'toxic': 
case 'demongreen': 
case 'rainbow':
case 'halloween':
try {
if(!q) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);  
reply(mess.teste());
ABC = await fetchJson(YUTA_URL + `/api/${command}?texto=${q}&apikey=` + YutaBot);
yuta.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: selo}).catch(() => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;

case 'shadow': 
case 'metalgold': 
case 'cup': 
case 'txtborboleta': 
case 'cemiterio': 
case 'efeitoneon':
case 'harryp': 
case 'lobometal':
case 'neon2':
case 'madeira': 
case 'lovemsg3': 
case 'coffecup':
case 'coffecup2': 
case 'florwooden': 
case 'narutologo':
case 'fire': 
case 'romantic': 
case 'smoke':  
case 'papel': 
case 'lovemsg': 
case 'lovemsg2':
try {
if(!q) return reply(`Digite algo, Exemplo: ${prefix+command} bronxys`);  
reply(mess.teste());
ABC = await fetchJson(YUTA_URL + `/api-bronxys/logos_PHT?texto=${q}&category=${command}&apikey=` + YutaBot);
yuta.sendMessage(from, {image: {url: ABC.resultado.imageUrl}}, {quoted: selo}).catch((e) => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;


case 'marvel': 
case 'pornhub':
case 'space': 
case 'stone':
case 'steel': 
case 'grafity': 
case 'glitch3': 
case 'america':
try {
var [DG, DG2] = q.split("/")
if(!q.includes("/")) return reply(`Exemplo: ${prefix+command} xbot/mdm`)
reply(mess.teste());
ABC = await fetchJson(YUTA_URL + `/api/${command}?texto=${DG}&texto2=${DG2}&apikey=` + YutaBot);
yuta.sendMessage(from, {image: {url: ABC.resultado}}, {quoted: selo}).catch(e => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break;

case 'lixo': 
case 'lgbt': 
case 'morto': 
case 'preso': 
case 'deletem':
case 'procurado': 
case 'hitler': 
case 'borrar': 
case 'merda':
try {
IMG = JSON.parse(JSON.stringify(info)?.replace('quotedM','m'))?.message?.extendedTextMessage?.contextInfo?.message?.imageMessage || info.message?.imageMessage
PXR = await getFileBuffer(IMG, "image")
reply(mess.teste());
link = await upload(PXR)
yuta.sendMessage(from, {image: {url:YUTA_URL + `/api-bronxys/montagem?url=${link}&category=${command}&apikey=` + YutaBot}}, {quoted: selo}).catch(e => {
return reply(mess.error())
console.log(erro)
})
} catch (e) {
return reply('Marque uma imagem no WhatsApp, formato jpeg/jpg');
}
break

//==============[ FIM CASES LOGOS ]============\\

//=============[ MENUS E INFOS ]==========\\

case 'az_gps': { //Lm Only 
    try {
        reply('Buscando grupos da aliança AZ... 🇦🇱😈');
        
        const getGruposAz = require('./ARQUIVES/js/az.js');
        const AZ = await getGruposAz();
        
        if (AZ.length === 0) {
            return reply('• Az atualmente está sem grupos.');
        }
        
        let AzText = "✨🇦🇱 *GRUPOS DA AZ* 🇦🇱✨\n\n" +
            "• Criador do comando: Lm Only 🥀\n\n";
            
        for (let i = 0; i < AZ.length; ++i) {
            AzText += `• ( ${i + 1} ) ➮ ${AZ[i].nome}\n`;
            AzText += `↳ Link ➮ ${AZ[i].link}\n\n-`;
        }
        
        reply(AzText);
    } catch (error) {
        console.error(error);
        reply('Ihh rapaz, parece que não foi possível obter os grupos. 😰');
    }
    break;
  }
  
  case 'tag': {
  try {
    await reagir(from, "📋");
    const imagemTag = 'https://files.catbox.moe/pilaz9.jpg';
    const mediaTag = await prepareWAMessageMedia(
      { image: { url: imagemTag } },
      { upload: yuta.waUploadToServer }
    );
    const carouselMessage = {
      text: "Nk",
      cards: [{ header: {
hasMediaAttachment: true, imageMessage: mediaTag.imageMessage },
          headerType: 'IMAGE',
          body: {
            text: '🇦🇱 ⸸ ALLIANCE AZ ⸸ 🇦🇱'},
          footer: {text: `${NomeDoBot}`},
          nativeFlowMessage: {
            buttons: [{ name: "cta_copy", buttonParamsJson: JSON.stringify({ display_text: "📋 COPIAR TAG", copy_code:
`ㅤㅤ🇦🇱 ⸸ 𝐀𝐋𝐈𝐀𝐍𝐂̧𝐀 𝐀𝐙 ⸸ 🇦🇱
• https://sandwiche.me/alliance_az •`
                })}]}}]};
    await yuta.relayMessage(
      from,
      {
        interactiveMessage: {
          contextInfo: {
            participant: from,
            quotedMessage: {
              documentMessage: {
                contactVcard: true,
                quoted: selo}}},
          body: { text: '' },
          carouselMessage
        }},{});
  } catch (e) {
    console.log(e);
    await yuta.sendMessage(from, { text: mess.error() }, { quoted: selo });
  }
  break;
}

case 'ativar': {
  if (!isGroupAdmins && !SoDono) return reply(mess.onlyAdmins());
  if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
  const user = sender;
  if (global.menuAzAtivos[user]) return reply('*ᴅᴇꜱᴄᴜʟᴩᴇ ꜱᴇɴʜᴏʀ(ᴀ), ᴍᴀꜱ ᴠᴏᴄᴇ ᴊᴀ ᴛᴇᴍ ᴜᴍᴀ ʟɪꜱᴛᴀ ᴅᴇ ᴀᴛɪᴠᴀᴄᴀᴏ ᴩᴇɴᴅᴇɴᴛᴇ 🤷‍♂️*');
  global.menuAzAtivos[user] = true;
  const texto = linguagem.ativic(prefix);
  await sendMenu(from, selo, { caption: texto });
}
break;



case 'status': {

const pathGp2 = `./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/TESTE/${from}.json`

let welcomeStatus = false
let welcomeModo = null

if (fs.existsSync(pathGp2)) {
  const dataGp2 = JSON.parse(fs.readFileSync(pathGp2))
  welcomeStatus = dataGp2.welcome?.status || false
  welcomeModo = dataGp2.welcome?.modo || null
}

await sendMenu(from, selo, {
  reaction: "🎉",
  videoUrl: status,
  caption: linguagem.status(
    prefix, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, Antidoc,
    isAntiCtt, Antiloc, isAntilinkgp, isAntiLinkEasy, isAntiLinkHard,
    isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood,
    isAntiDDD, isModobn, isAutorepo, isModoCoins, isAutofigu,
    isAnticall, isAntiPv, isAntiPv2, isAntiPv3, ANT_SP, nescessario,
    isBotoff, So_Adm, isMultiP, isx9, isAntistatus, isX9VisuUnica,
    welcomeStatus, welcomeModo
  ),
  isAdminRequired: true
});

}
break;

case 'menucoins':
  await sendMenu(from, selo, {
    reaction: "🎉",
    caption: linguagem.coins(prefix),
    isGroupRequired: true,
    isModoCoinsRequired: true,
    sendAudio: true
  });
  break;

case 'menu': {
  const botNome = NomeDoBot;
  const versionBaileys = require("@whiskeysockets/baileys/package.json").version;
  const firstV = speed();
  const secondV = speed() - firstV;
  const timestamp = speed();
  const fast = speed() - timestamp;
  const uptimeBot = TimeCount(process.uptime());
  await sendMenu(from, selo, {
    reaction: "🎉",
    caption: linguagem.menu(prefix, sender, isChVip, isCargo, fast, uptimeBot, botNome, versionBaileys, ownerName, isBotoff),
    sendAudio: true,
    mentionedJid: [sender]
  });
  break;
}

case 'menu18':
  await sendMenu(from, selo, {
    reaction: "🎉",
    caption: linguagem.menu18(prefix),
    sendAudio: true
  });
  break;

case 'menudono':
  await sendMenu(from, selo, {
    reaction: "🎉",
    caption: linguagem.menudono(prefix),
    isOwnerRequired: true,
    sendAudio: true
  });
  break;

case 'menuadm':
  await sendMenu(from, selo, {
    reaction: "🎉",
    caption: linguagem.adms(prefix),
    isAdminRequired: true,
    sendAudio: true
  });
  break;

case 'menulogos':
case 'efeitoimg':
case 'logo':
case 'logos':
case 'menulogo':
  await sendMenu(from, selo, {
    reaction: "🎉",
    caption: linguagem.menulogos(prefix),
    sendAudio: true
  });
  break;

case 'menubrincadeira':
case 'menubrincadeiras':
case 'brincadeiras':
case 'brincadeira':
case 'menubn':
  await sendMenu(from, selo, {
    reaction: "🎉",
    caption: linguagem.brincadeiras(prefix),
    isGroupRequired: true,
    isModoBnRequired: true,
    sendAudio: true
  });
  break;

case 'donos': {
   await reagir(from, "🎉")
   try {
    const thumbnail = await getBuffer(donos);
    if (!thumbnail) throw new Error("Thumbnail não carregado");

    await yuta.sendMessage(from, {
      video: thumbnail,
      caption: linguagem.consultas(prefix, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, NomeDoBot, ownerName),
  gifPlayback: true,
      contextInfo: NkChannelKk            
    }, { quoted: selo });
  } catch (e) {
    console.error("Erro ao executar o comando:", e);
    await yuta.sendMessage(from, { text: linguagem.consultas(prefix, numero_dono1, numero_dono2, numero_dono3, numero_dono4, numero_dono5, numero_dono6, NomeDoBot, ownerName) }, { quoted: selo });
  }
  break;
}


case 'infobot':
case 'infodono':
case 'dono': {
  await reagir(from, "🎉")
  try {
    const thumbnail = await getBuffer(infodono);
    if (!thumbnail) throw new Error("Thumbnail não carregado");

    await yuta.sendMessage(from, {
      video: thumbnail,
      caption: linguagem.dono(prefix, NomeDoBot, NumeroDoBot, ownerNumber, isBotoff, ownerName, botNumber),
  gifPlayback: true,
      contextInfo: NkChannelKk            
    }, { quoted: selo });
  } catch (e) {
    console.error("Erro ao executar o comando:", e);
    await yuta.sendMessage(from, { text: linguagem.dono(prefix, NomeDoBot, NumeroDoBot, ownerNumber, isBotoff, ownerName, botNumber) }, { quoted: selo });
  }
  break;
}


//============[ FIM MENU E INFOS ]==========\\

//=========== [ ÍNICIO JOGOS ] =========\\

case 'quando':  
if (args.length < 1) return reply('Digite a pergunta!')
const meupirul = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
const meupirul2 = ['dias', 'semanas', 'meses', 'anos']
randomm = meupirul[Math.floor(Math.random() * meupirul.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (randomm == 'Hoje' || randomm == 'Amanhã' || randomm == 'Nunca') {
texto = `Pergunta: ${body.slice(1)}\nResposta: ${randomm}`
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\nResposta:  1 ${randomm}`
} else {
random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)]
texto = `Pergunta: ${body.slice(1)}\nResposta: ${random2} ${random3}`
}
reply(texto)
break

case 'forca': { //Lm Only
    try {
        if(!isGroup) return reply(mess.onlyGroup())
        if(!isModobn) return reply(mess.onlyGroupFun(prefix))

        //Atenção aqui, o caminho pode ser diferente
        const pathF = `./DADOS DO YUTA/data/media/forca/database/session-${from}.json`;

        if (fs.existsSync(pathF)) {
            return reply('*ᴏ ᴊᴏɢᴏ ᴊᴀ ғᴏɪ ɪɴɪᴄɪᴀᴅᴏ ᴀɴᴛᴇs 🙇‍♂️*');
        }

        //Tema aleatório
        const word = palavras[Math.floor(Math.random() * palavras.length)];

        const params = {
            palavra: word.palavra,
            tema: word.tema,
            dica: word.dica,
            path: './DADOS DO YUTA/data/media/forca/database', //Caminho da pasta
        };
        const data = forca.startSession(from, params);

        reply(`• 🎮 𝐉𝐎𝐆𝐎--𝐃𝐀-𝐅𝐎𝐑𝐂𝐀 🌠 •\n*⏤͟͟͞͞ʟᴇᴛʀᴀs*: ${data.palavra.length}\n*⏤͟͟͞͞ᴛᴇᴍᴀ*: ${word.tema}\n*⏤͟͟͞͞ᴅɪᴄᴀ*: ${word.dica}\n|───𖡜̸｡᭭\n       _¦_\n╚ ${frames[data.erros]}\n\n\n⏤꫶͟͟͞͞───────────➮\n\n『 ${data.letrasX.join('')} 』\n\n⏤͟͟͞͞───────────➮\n⏤͟͟͞͞ʟᴇᴛʀᴀs ᴊᴏɢᴀᴅᴀs: ${data.usado.join(', ')}\n\n> ᴜsᴇ ᴏ ${prefix}ғᴄ ᴘᴀʀᴀ ᴀᴅᴠɪɴʜᴀʀ ᴀ ʟᴇᴛʀᴀ ᴏᴜ ᴀ ᴘᴀʟᴀᴠʀᴀ ᴛᴏᴅᴀ`);
    } catch (e) {
        console.error(e);
        reply('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴍᴀɪs ᴛᴀʀᴅᴇ 🙇‍♂️*');
    }
    break; //Lm Only
}




//Case principal para adivinhar a letra e etc..
case 'fc': { //Lm Only
    try {
        if(!isGroup) return reply(mess.onlyGroup())
        if(!isModobn) return reply(mess.onlyGroupFun(prefix))
       if (!fs.existsSync(`./DADOS DO YUTA/data/media/forca/database/session-${from}.json`)) {
            return reply(`*ᴏ ᴊᴏɢᴏ ᴀɪɴᴅᴀ ɴᴀᴏ ᴄᴏᴍᴇᴄᴏᴜ 🤷‍♂️*\n\n*ᴜsᴇ ${prefix}ғᴏʀᴄᴀ ᴘᴀʀᴀ ɪɴɪᴄɪᴀʀ ᴏ ᴊᴏɢᴏ 🙆‍♂️*`);
        }
        if (!q || q.length == 2 || !isNaN(q)) return reply("*ᴠᴏᴄᴇ sᴏ ᴘᴏᴅᴇ ᴜsᴀʀ ᴜᴍᴀ ᴘᴀʟᴀᴠʀᴀ ᴏᴜ ᴀ ғʀᴀsᴇ ᴛᴏᴅᴀ 🤷‍♂️*");

        const pathF = `./DADOS DO YUTA/data/media/forca/database/session-${from}.json`;

        const database = JSON.parse(fs.readFileSync(pathF));
        const q_ToLC = q.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        if (database.usado.includes(q_ToLC)) return reply('*ᴇsᴛᴀ ʟᴇᴛʀᴀ ᴊᴀ ғᴏɪ ᴜsᴀᴅᴀ, ᴛᴇʙᴛᴇ ᴏᴜᴛʀᴀ ʟᴇᴛʀᴀ 🙇‍♂️*');

        //Atenção aqui
        const data = forca.verify(from, q_ToLC, './DADOS DO YUTA/data/media/forca/database');

        if (data.ended) {
            if (data.win) {
                reply('*ᴠᴏᴄᴇ ᴀᴄᴀʙᴀ ᴅᴇ ɢᴀɴʜᴀʀ ᴏ ɢᴀᴍᴇ 🙇‍♂️*');
                //...Implementar o resto do que você quiser
            } else {
                reply('*sɪɴᴛᴏ ᴍᴜɪᴛᴏ ᴍᴀs ᴠᴏᴄᴇ ᴘᴇʀᴅᴇᴜ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ɴᴀ ᴘʀᴏxɪᴍᴀ 🤷‍♂️*');
                //...Implementar o resto do que você quiser
            }
            DLT_FL(data.session);
        } else {
            if (data.letrasY.includes(q_ToLC)) {
                reply('*ᴠᴏᴄᴇ ᴀᴄᴇʀᴛᴏᴜ ᴀ ʟᴇᴛʀᴀ 🙆‍♂️*');
            } else {
                reply('*sɪɴᴛᴏ ᴍᴜɪᴛᴏ, ᴠᴏᴄᴇ ᴇʀʀᴏᴜ 🤷‍♂️*');
            }

            reply(`• 🎮 𝐉𝐎𝐆𝐎--𝐃𝐀-𝐅𝐎𝐑𝐂𝐀 🌠 •\n*⏤͟͟͞͞ʟᴇᴛʀᴀs*: ${data.palavra.length}\n*⏤͟͟͞͞ᴛᴇᴍᴀ*: ${data.tema}\n*⏤͟͟͞͞ᴅɪᴄᴀ*: ${data.dica}\n|───𖡜̸｡᭭\n       _¦_\n╚ ${frames[data.erros]}\n\n\n⏤꫶͟͟͞͞───────────➮\n\n『 ${data.letrasX.join('')} 』\n\n⏤͟͟͞͞───────────➮\n⏤͟͟͞͞ʟᴇᴛʀᴀs ᴊᴏɢᴀᴅᴀs: ${data.usado.join(', ')}\n\n> ᴜsᴇ ᴏ ${prefix}ғᴄ ᴘᴀʀᴀ ᴀᴅᴠɪɴʜᴀʀ ᴀ ʟᴇᴛʀᴀ ᴏᴜ ᴀ ᴘᴀʟᴀᴠʀᴀ ᴛᴏᴅᴀ`);
        }

    } catch (e) {
        console.log(e);
        reply('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴍᴀɪs ᴛᴀʀᴅᴇ 🙇‍♂️*');
    }
    break; //Lm Only
}

//Comando para resetar a forca
case 'rv_forca': //Lm Only
    try {
        if(!isGroup) return reply(mess.onlyGroup())
        if(!isModobn) return reply(mess.onlyGroupFun(prefix))
        
        //Atenção ao caminho correto do arquivo
        const database = `./DADOS DO YUTA/data/media/forca/database/session-${from}.json`;
        
        if (!fs.existsSync(database)) {
            reply(`*ᴏ ᴊᴏɢᴏ ᴀɪɴᴅᴀ ɴᴀᴏ ᴄᴏᴍᴇᴄᴏᴜ 🤷‍♂️*\n\n*ᴜsᴇ ${prefix}ғᴏʀᴄᴀ ᴘᴀʀᴀ ɪɴɪᴄɪᴀʀ ᴏ ᴊᴏɢᴏ 🙆‍♂️*`);
        } else {
            DLT_FL(database);
            reply('*ᴘʀᴏɴᴛᴏ, ʀᴇsᴇᴛᴇɪ ᴀ ғᴏʀᴄᴀ ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*');
        }
    } catch (e) {
        console.error(e);
        reply('*ᴏᴄᴏʀʀᴇᴜ ᴜᴍ ᴇʀʀᴏ, ᴛᴇɴᴛᴇ ɴᴏᴠᴀᴍᴇɴᴛᴇ ᴍᴀɪs ᴛᴀʀᴅᴇ 🙇‍♂️*');
    }
    break;
    
case 'jogov':
case 'jogodavelha':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
    if (!menc_jid) return reply("Marque junto com o comando o @ do usuário que deseja desafiar..");
    joguinhodavelhajs.push(sender);
    fs.writeFileSync('./DADOS DO YUTA/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs));
    joguinhodavelhajs2.push(from);
    fs.writeFileSync('./DADOS DO YUTA/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2));
    if (fs.existsSync(`./ARQUIVES/tictactoe/db/${from}.json`)) {
        const boardnow = setGame(`${from}`);
        const jogadorX = normalizar(boardnow.X + '@s.whatsapp.net');
        const jogadorO = normalizar(boardnow.O + '@s.whatsapp.net');
        const matrix = boardnow._matrix;

        const msg = `*『 🎮 』ᒍOᘜO ᗪᗩ ᐯᗴᒪᕼᗩ『 🕹 』*\n\n💢 Já existe uma partida em andamento!\n\n👥 Disputa atual:\n@${jogadorX.split('@')[0]} VS @${jogadorO.split('@')[0]}\n\nAguardem o fim desta rodada antes de iniciar outra.`;
        return await mentions(msg, [jogadorX, jogadorO], true);
    }
    if (argss.length === 1)
        return reply(`Jogue com alguém, para iniciar a partida: ${prefix + command} @membro.`);
    const boardnow = setGame(`${from}`);
    boardnow.status = false;
    boardnow.X = sender.replace("@s.whatsapp.net", "");
    boardnow.O = menc_jid.replace("@s.whatsapp.net", "").replace("@", "");

    fs.writeFileSync(`./ARQUIVES/tictactoe/db/${from}.json`, JSON.stringify(boardnow, null, 2));
    const jogadorX = normalizar(boardnow.X + '@s.whatsapp.net');
    const jogadorO = normalizar(boardnow.O + '@s.whatsapp.net');

    const mensagem = `*『 ⚠ 』ᗴՏᑭᗴᖇᗩᑎᗪO O OᑭOᑎᗴᑎTᗴ『 ⚠ 』* \n• *_「 @${jogadorX.split('@')[0]} 」 Está te convidando para jogar um jogo da velha【 👩🏻‍🦳】_*\n\n• *_『 @${jogadorO.split('@')[0]} 』 Use 『 S 』 pra aceitar 『 N 』 pra rejeitar._*\n\n> Caso queira cancelar use o 『 ${prefix}rv  』`;
    await mentions(mensagem, [jogadorX, jogadorO], true);
break;


case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.`)
if(fs.existsSync("./ARQUIVES/tictactoe/db/" + from + ".json")) {
DLT_FL("./ARQUIVES/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./DADOS DO YUTA/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./DADOS DO YUTA/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case 'vord': //Criado do zero Por Nk hackzin
        if(!isGroup) return reply(mess.onlyGroup())
        if(!isModobn) return reply(mess.onlyGroupFun(prefix))
    /** Se não conter "verdade" ou "dessfio" */
    if (q !== "verdade" && q !== "desafio") return reply("• Escolha *verdade* ou *desafio*");
    
    const question = JSON.parse(fs.readFileSync("./DADOS DO YUTA/questions.json"));
    
    if (q == "verdade") {
        const randomQuest = question[0].words[Math.floor(Math.random() * question[0].words.length)];
        reply(`*⸺͟͞ꪶ𝐄 𝐕𝐄𝐑𝐃𝐀𝐃𝐄 𝐐𝐔𝐄↴*\n\n${randomQuest}`);
    }
    else {
        const randomQuest = question[1].words[Math.floor(Math.random() * question[1].words.length)];
        reply(`*⸺͟͞ꪶ𝐃𝐄𝐒𝐀𝐅𝐈𝐎 𝐕𝐎𝐂𝐄↴*\n\n${randomQuest}`);
    }
    break;

//=========== [ FINAL JOGOS ] =========\\

//==========[ EDIT AUDIO/VIDEO/FOTO ] =========\\

case 'imgpraanime': case 'animeia': case 'toanime':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat([base64, send ]) }
reply(`Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`)
link = await upload(base64)
conv = await fetchJson(`https://delirius-api-oficial.vercel.app/api/toanime?url=${link}`)
await yuta.sendMessage(from, {image: {url: conv.data.comparation}}, {quoted: selo}).catch(async(error) => {
return reply(`Não foi possível criar seu avatar! Por favor, tente com outra imagem!`);
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break

case 'gtaia': case 'togta': case 'imgpragta':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat([base64, send ]) }
reply(`Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`)
link = await upload(base64);
dataConvertAndreas = await fetchJson(`https://aemt.me/jadigta?url=${link}`)
await yuta.sendMessage(from, {image: {url: dataConvertAndreas.result}}, {quoted: selo})
.catch(async(error) => {
return reply(`Não foi possível criar seu avatar! Por favor, tente com outra imagem!`);
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break



case 'tozombie': case 'zombieai': case 'imgprazombie':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat([base64, send ]) }
reply(`Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`)
link = await upload(base64);
dataConvertZombie = await fetchJson(`https://aemt.me/converter/zombie?url=${link}`);
await yuta.sendMessage(from, {image: {url: dataConvertZombie.url}}, {quoted: selo})
.catch(async(error) => {
return reply(`Não foi possível criar seu avatar! Por favor, tente com outra imagem!`);
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break

case 'enhance': case 'dehaze': case 'recolor':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat([base64, send])}
data = await vyroEngine(base64, command);
await yuta.sendMessage(from, {image: data}, {quoted: selo}).catch(async(error) => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break

case 'videocontrario':
case 'reversevid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(mess.wait())
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, async(err) => {
await DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
await yuta.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento':
case 'slowvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(mess.wait()) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, async(err) => {
await DLT_FL(media)
if(err) return reply(`Error: ${err}`)
buffer453 = fs.readFileSync(ran)
await yuta.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selo})
await DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido':
case 'fastvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(mess.wait())
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, async(err) => {
await DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
await yuta.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: selo })
await DLT_FL(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'grave2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
yuta.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'slowed':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "atempo=4/4,asetrate=50000*2/3"  ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
yuta.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'speed':
case 'speedup':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af "atempo=4/4,asetrate=86000*2/3"  ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
yuta.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'grave':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
yuta.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'adolesc':
case 'vozmenino':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.');
hah = fs.readFileSync(ran)
yuta.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break  

case 'tomp3':
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(mess.wait())
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
DLT_FL(media)
if(err) return reply('Ocorreu uma falha ao fazer a conversão do vídeo para mp3.')
const YutaOkkotsu = fs.readFileSync(ran)
yuta.sendMessage(from, {audio: YutaOkkotsu, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'bass3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
yuta.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'bass': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
yuta.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'bass2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
yuta.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'estourar': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
yuta.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'fast':
case 'audiorapido':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, async(err, stderr, stdout) => {
await DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
yuta.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'esquilo':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait())
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, async(err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
yuta.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'audiolento': 
case 'slow':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(mess.wait());
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, async(err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.');
hah = fs.readFileSync(ran)
yuta.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:false, contextInfo: NkChannelKk}, {quoted: selo})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

//==============[ FIM DAS CASES DE EDIT ]==============\\

//============[ BRINCADEIRAS/JOGOS/RANKS]===============\\

case 'chance':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))  
if(args.length < 1) return reply(`Você precisa digitar da forma correta... Por exemplo: *${prefix}chance* _do jubileu ser gay_`)
await yuta.sendMessage(from, {
    text: `😵‍💫🌟 - A chance _“${q}”_ é de: *${Math.floor(Math.random() * 100)}%*. Eai, foi o que a probabilidade que esperava jovem?`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender]}
}, {quoted: selo});
break


case 'comer':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer botar rebolar pros cria, a mensagem ou o @.')
await yuta.sendMessage(from, {
    video: {url: comer}, gifPlayback: true,
    caption: `Você acabou de comer a(o) *@${menc_os2.split('@')[0]}*`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'capinarlote':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer botar pra capinar um lote, a mensagem ou o @.')
await yuta.sendMessage(from, {
    video: {url: capinarlote}, gifPlayback: true,
    caption: `Você acabou de botar o(a) *@${menc_os2.split('@')[0]}* pra capinar um lote`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'pgpeito':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer pegar nos peitinhos, a mensagem ou o @.')
await yuta.sendMessage(from, {
    video: {url: pgpeito}, gifPlayback: true,
    caption: `Você acabou de pegar nos peitos do(a) *@${menc_os2.split('@')[0]}*`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'pgpau':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer pegar no pau dele(a), a mensagem ou o @.')
await yuta.sendMessage(from, {
    video: {url: pgpau}, gifPlayback: true,
    caption: `Você acabou de pegar no pau do(a) *@${menc_os2.split('@')[0]}*`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'pgbunda':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que desejas ser acariciado, a mensagem ou o @.')
await yuta.sendMessage(from, {
    video: {url: pgbunda}, gifPlayback: true,
    caption: `Você acabou de pegar na bunda do(a) *@${menc_os2.split('@')[0]}*`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'morder':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer dar uma mordida, a mensagem ou o @.')
await yuta.sendMessage(from, {
    video: {url: morder}, gifPlayback: true,
    caption: `Você acabou de dar uma mordida no(a) *@${menc_os2.split('@')[0]}*`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'sentar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer dar uma sentadinha, a mensagem ou o @.')
await yuta.sendMessage(from, {
    video: {url: sentar}, gifPlayback: true,
    caption: `Você acabou de dar uma sentadinha no(a) *@${menc_os2.split('@')[0]}*`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'tirarft':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer tirar a foto, a mensagem ou o @.')
await yuta.sendMessage(from, {
    video: {url: tirarft}, gifPlayback: true,
    caption: `Você acabou de tirar uma foto do(a) *@${menc_os2.split('@')[0]}*`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'boquete':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
await yuta.sendMessage(from, {
    video: {url: boquete}, gifPlayback: true,
    caption: `Eita *@${menc_os2.split('@')[0]}* garganta profunda voce tem 😰`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'cagar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
await yuta.sendMessage(from, {
    video: {url: cagar}, gifPlayback: true,
    caption: `CARALHOOOOO *@${menc_os2.split('@')[0]}* FAMOSO CAGA TRONCO KAKAKAKAK??? 🤯😳`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'cu':
if (!isGroup) return reply(mess.onlyGroup())
if (!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text: `Pesquisando quantos cm de profundidade tem seu bozo @${sender_ou_n.split("@")[0]}, aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: { url: cu },
        caption: `Quantos cm o(a) *@${sender_ou_n.split("@")[0]}* tem no bozo ?\n• A chance é de *${random}cm* 😳`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break


case 'abraco':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer dar um abraço, a mensagem ou o @.')
await yuta.sendMessage(from, {
    video: {url: abraco}, gifPlayback: true,
    caption: `Você acabou de dar um abraço fofo no(a) *@${menc_os2.split('@')[0]}*`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break

case 'louca':
case 'lavarlouca':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer botar pra lavar a louça, a mensagem ou o @.')
await yuta.sendMessage(from, {
    video: {url: lavarlouca}, gifPlayback: true,
    caption: `Você acabou de botar a(o) *@${menc_os2.split('@')[0]}* pra lavar a louça`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'carinho':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer dar um carinho, a mensagem ou o @.')
await yuta.sendMessage(from, {
    video: {url: carinho}, gifPlayback: true,
    caption: `Você acabou de dar um carinho no(a) *@${menc_os2.split('@')[0]}*`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'morte':
case 'death':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if (args.length == 0) return reply(`Está faltando o nome da pessoa! Por exemplo: ${prefix+command} Victor`)
predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(args[0])}`);
if (predea.data.age == null) return reply(`Você inseriu um nome invalido, certifique-se de inserir um sem acentos, emojis, números e outros.`);
await yuta.sendMessage(from, {
    video: {url: deathcmd}, gifPlayback: true,
    caption: `Pessoas com este nome citado “${predea.data.name}” tendem a morrer aos ${predea.data.age} anos.`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender]}
}, {quoted: selo})
break

case 'carioca':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a sua ficha de carioca @${sender_ou_n.split("@")[0]} aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imgcarioca},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa carioca?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'louco':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a sua ficha de louco @${sender_ou_n.split("@")[0]} aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imglouco},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa louca?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'louca':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a sua ficha de louca @${sender_ou_n.split("@")[0]} aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imglouca},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa louca?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'safada':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a sua ficha de safada @${sender_ou_n.split("@")[0]} aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imgsafada},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa safada?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'safado':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a sua ficha de safado @${sender_ou_n.split("@")[0]} aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imgsafado},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa safada?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'macaco':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a sua ficha de macaco @${sender_ou_n.split("@")[0]} aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imgmacaco},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um macaco?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'macaca':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a sua ficha de macaca @${sender_ou_n.split("@")[0]} aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imgmacaca},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma macaca?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'puta':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a sua ficha de puta @${sender_ou_n.split("@")[0]} aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async () => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imgputa},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma puta?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'matar': case 'mata':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer matar, a mensagem ou o @')
await yuta.sendMessage(from, {
    video: {url: matar},
    gifPlayback: true,
    caption: `Você acabou de matar o(a) *@${menc_os2.split('@')[0]}*, seu... 😵‍💫💅🏻`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break

case 'leitada':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
await yuta.sendMessage(from, {
    video: {url: leitada},
    gifPlayback: true,
    caption: `Você acabou de dar leitinho gostoso para o(a) *@${menc_os2.split('@')[0]}*!`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break

case 'beijo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
await yuta.sendMessage(from, {
    video: {url: beijocmd},
    gifPlayback: true,
    caption: `Você acabou de beijar o(a) *@${menc_os2.split('@')[0]}*! 😳💖`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break

case 'tapa':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
await yuta.sendMessage(from, {
    video: {url: tapacmd},
    gifPlayback: true,
    caption: `Você acabou de dar um tapa em *@${menc_os2.split('@')[0]}*! 😏`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break


case 'nazista':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text: `Pesquisando a sua ficha de nazista: *@${sender_ou_n.split("@")[0]}* aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imgnazista},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa nazista?\n• Porcentagem de chance de ser uma pessoa nazista: *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'corno':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a ficha de corno @${sender_ou_n.split("@")[0]}, aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imgcorno},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa chifruda?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'vesgo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a ficha de vesgo @${sender_ou_n.split("@")[0]}, aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imgvesgo},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa vesga?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'bebado':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a ficha de bebado(a) @${sender_ou_n.split("@")[0]}, aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imgbebado},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa bêbada?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'gado':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a ficha de gado @${sender_ou_n.split("@")[0]}, aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imggado},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um gado?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'fiel':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a ficha de fiel @${sender_ou_n.split("@")[0]}, aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: fielcmd},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser fiel?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'lindo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a ficha de lindo @${sender_ou_n.split("@")[0]}, aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: lindocmd},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser lindo?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'linda':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a ficha de linda @${sender_ou_n.split("@")[0]}, aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: lindacmd},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser linda?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'gostoso':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a sua ficha de gostoso @${sender_ou_n.split("@")[0]} aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imggostoso},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`,
        gifPlayback: true,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'gostosa':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a sua ficha de gostosa @${sender_ou_n.split("@")[0]} aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imggostosa},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`,
        gifPlayback: true,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'sigma':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a sua ficha de sigma @${sender_ou_n.split("@")[0]} aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imgsigma},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa sigma?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'beta':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a sua ficha de beta @${sender_ou_n.split("@")[0]} aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imgbeta},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um beta?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'baiano':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a sua ficha de baiano @${sender_ou_n.split("@")[0]} aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imgbaiano},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa baiana?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'baiana':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await yuta.sendMessage(from, {
    text:`Pesquisando a sua ficha de baiana @${sender_ou_n.split("@")[0]} aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})
setTimeout(async() => {
    const random = `${Math.floor(Math.random() * 110)}`
    await yuta.sendMessage(from, {
        image: {url: imgbaiana},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa baiana?\n• A porcentagem de chance é *${random}%*`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'gay':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))

await yuta.sendMessage(from, {
    text: `Pesquisando a sua ficha de gay: @${sender_ou_n.split("@")[0]} aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})

setTimeout(async () => {
    let percent = Math.floor(Math.random() * 110)
    let status = ''

    if(percent < 20) status = 'hmm... você é hetero...'
    else if(percent <= 50) status = '+/- boiola'
    else if(percent <= 80) status = 'tenho minha desconfiança...'
    else status = 'você é gay...'

    await yuta.sendMessage(from, {
        image: {url: imggay},
        caption: `Qual é a porcentagem de chance do(a) *@${sender_ou_n.split("@")[0]}* ser gay?\n• *${percent}% homossexual*, ${status}`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'feio':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))

await yuta.sendMessage(from, {
    text: `Pesquisando a sua ficha de feio: *@${sender_ou_n.split("@")[0]}* aguarde...`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
}, {quoted: selo})

setTimeout(async () => {
    let percent = Math.floor(Math.random() * 110)
    let status = ''

    if(percent < 20) status = 'Não é feio'
    else if(percent <= 50) status = 'Meio feio'
    else if(percent <= 80) status = 'Feio moderado'
    else status = 'Feio demais'

    await yuta.sendMessage(from, {
        image: {url: imgfeio},
        caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa feia?\n• A porcentagem de chance é *${percent}%*, ${status}`,
        contextInfo: {...NkChannelKk, mentionedJid: [sender_ou_n]}
    }, {quoted: selo})
}, 7000)
break

case 'soco':
case 'socar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer dar um soco, a mensagem ou o @')
const frases = [`Ei @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} te deu um golpe fatal!`, `Atenção @${menc_os2.split('@')[0]}, @${sender.split('@')[0]} acabou de te nocautear!`, `Olá @${menc_os2.split('@')[0]}, você foi atingido pelo @${sender.split('@')[0]}!`]
const videos = [soco]
const fraseEscolhida = frases[Math.floor(Math.random() * frases.length)]
const videoEscolhido = await getBuffer(videos[Math.floor(Math.random() * videos.length)])
await yuta.sendMessage(from, {video: videoEscolhido, gifPlayback: true, caption: fraseEscolhida, contextInfo: {...NkChannelKk, mentionedJid: [sender, menc_os2]}}, {quoted: selo})
break


case "ppt":
if(args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`);
ppt = ["pedra", "papel", "tesoura"];
ppy = ppt[Math.floor(Math.random() * ppt.length)];
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if(vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if(vit == "vitoria") {var tes = "Vitória do jogador"}
if(vit == "derrota") {var tes = "A vitória é do BOT"} 
if(vit == "empate") {var tes = "O jogo terminou em empate"}
reply(`*${NomeDoBot}* jogou ${pptb}, o jogador jogou: ${args} -> *${tes}*`);
break


case 'chute':
case 'chutar':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer dar um chute, a mensagem ou o @')

await yuta.sendMessage(from, {
    video: {url: chutecmd},
    gifPlayback: true,
    caption: `Você acabou de dar um chute em *@${menc_os2.split('@')[0]}*.`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break

case 'dogolpe':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2 || menc_jid2[1]) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")

const golpes = ["𝐄𝐌 𝐈𝐋𝐔𝐃𝐈𝐑 𝐏𝐄𝐒𝐒𝐎𝐀𝐒", "𝐄𝐌 𝐅𝐄𝐑𝐈𝐑 𝐎𝐒 𝐒𝐄𝐍𝐓𝐈𝐌𝐄𝐍𝐓𝐎𝐒", "𝐄𝐌 𝐃𝐀𝐑 𝐂𝐇𝐈𝐅𝐑𝐄"]
const golpeEscolhido = golpes[Math.floor(Math.random() * golpes.length)]

await yuta.sendMessage(from, {
    text: `𝐎(𝐀) *@${menc_os2.split("@")[0]}* 𝐄 𝐄𝐒𝐏𝐄𝐂𝐈𝐀𝐋𝐈𝐒𝐓𝐀: ${golpeEscolhido}.`,
    contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}
}, {quoted: selo})
break

case 'shipo':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if(!menc_os2) return reply('Marque uma pessoa do grupo para encontrar o par dela.')

const parceiro = groupMembers[Math.floor(Math.random() * groupMembers.length)].id
const porcentagem = Math.floor(Math.random() * 100)

await yuta.sendMessage(from, {
    text: `💘 𝐄𝐔 𝐒𝐇𝐈𝐏𝐎:\n@${parceiro.split('@')[0]}\n\n@${menc_os2.split("@")[0]}\n\n𝐂𝐎𝐌 𝐔𝐌𝐀 𝐏𝐎𝐑𝐂𝐄𝐍𝐓𝐀𝐆𝐄𝐌 𝐃𝐄: *${porcentagem}%*`,
    contextInfo: {...NkChannelKk, mentionedJid: [parceiro, menc_os2]}
}, {quoted: selo})
break

case 'casal':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await reagir(from, "💘");
let m1 = groupMembers[Math.floor(Math.random() * groupMembers.length)].id
let m2 = groupMembers[Math.floor(Math.random() * groupMembers.length)].id
let random = Math.floor(Math.random() * 100)
await yuta.sendMessage(from, { image: {url: casal}, caption: `👩🏼‍❤️‍💋‍👨🏻  𝐒𝐈𝐍𝐓𝐎 𝐐𝐔𝐄 𝐄𝐒𝐒𝐄𝐒 𝐃𝐎𝐈𝐒 𝐅𝐎𝐑𝐌𝐀𝐑𝐈𝐀 𝐔𝐌 𝐎𝐓𝐈𝐌𝐎 𝐂𝐀𝐒𝐀𝐋:\n\n- @${m1.split("@")[0]}\n\n- @${m2.split("@")[0]}\n\n𝐂𝐎𝐌 𝐔𝐌𝐀 𝐄𝐒𝐏𝐄𝐂𝐓𝐀𝐓𝐈𝐕𝐀 𝐃𝐄:*${random}%*`, contextInfo: {...NkChannelKk, mentionedJid: [m1, m2]}}, {quoted: selo}).catch(() => {reply(mess.error())})
break

case 'gozar':
case 'goza':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
await reagir(from, "😈")
if(!menc_os2 || menc_jid2[1]) return reply('*ᴍᴀʀǫᴜᴇ ᴀ ᴘᴇssᴏᴀ ǫᴜᴇ ᴠᴏᴄᴇ ǫᴜᴇʀ ɢᴏᴢᴀʀ 🙈*')

const gozacao = ['Você acabou de gozar na boca do(a)', 'Você acabou de gozar no cuzinho do(a)', 'Você acabou de gozar na bucetinha do(a)', 'Você acabou de gozar no pé do(a)', 'Você acabou de gozar na cabeça do(a)', 'Você acabou de gozar na cara do(a)'] 
const gozarEscolhido = gozacao[Math.floor(Math.random() * gozacao.length)]
await yuta.sendMessage(from, {video: {url: Gozar}, gifPlayback: true, caption: `${gozarEscolhido} @${menc_os2.split('@')[0]} 🥵`, contextInfo: {...NkChannelKk, mentionedJid: [menc_os2]}}, {quoted: selo})
break

case 'wame':
reply(`*⏤͟͟͞͞Aqui está o link do seu número do Whatsapp* 🙇‍♂️ ↴\n\n • https://wa.me/${sender.split("@")[0]}${q ? "?text="+ q.replace(/ /g, "%20") : ""}`);
                    break;

case 'vab':
case 'vcprefere':
case 'voceprefere': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));
    await reagir(from, '🎭');
    try {
        const array = await psycatgames();
        const sorteio = array[Math.floor(Math.random() * array.length)];
        const { pergunta1, pergunta2 } = sorteio.questions[Math.floor(Math.random() * sorteio.questions.length)];
        await sendPoll(yuta, from, `*🤔 𝐕𝐎𝐂𝐄̂ 𝐏𝐑𝐄𝐅𝐄𝐑𝐄 ⧽*\n•\n> 1️⃣ - ${pergunta1}\n-\n> 2️⃣ - ${pergunta2}\n•\n⚡ 𝐄𝐒𝐂𝐎𝐋𝐇𝐀 𝐁𝐄𝐌...`, [ '✰ 𝐎𝐏𝐂̧𝐀̃𝐎 𝟏 ✰', '✰ 𝐎𝐏𝐂̧𝐀̃𝐎 𝟐 ✰' ]);
    } catch (err) {
        console.error("Erro no comando 'Você Prefere':", err);
        await replyWithReaction(mess.error(), { react: { text: '💀', key: info.key } });
    }
    break;
}

case 'eununca': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModobn) return reply(mess.onlyGroupFun(prefix));
    await reagir(from, '🩸');
    try {
        const Never = tools.iNever[Math.floor(Math.random() * tools.iNever.length)];
        await sendPoll(yuta, from, `*❓𝑃𝐸𝑅𝐺𝑈𝑁𝑇𝐴 ⧽*\n\n> ${Never}\n\n✅ 𝐕𝐎𝐂𝐄̂ 𝐉𝐀 𝐎𝐔 𝐍𝐔𝐍𝐂𝐀? ❎`, [ `✰ 𝐄𝐔 𝐉𝐀 😳 ✰`, `✰ 𝐄𝐔 𝐍𝐔𝐍𝐂𝐀 👀 ✰` ]
        );
    } catch (err) {
        console.error("Erro no comando 'Eu Nunca':", err);
        await replyWithReaction(mess.error(), { react: { text: '🕯️', key: info.key } });
    }
    break;
}

case 'rankgay': case 'rankgays':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsGay = []
let rankGay = `🏳️‍🌈 RANK DOS 5 MAIS GAY DO GRUPO\n\n`
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsGay.push(membro)
    rankGay += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image: {url: rnkgay}, caption: rankGay, contextInfo:{...NkChannelKk, mentionedJid: mentionsGay}}, {quoted: selo})
break

case 'rankcasalzin': case 'rankcasais': case 'rankcasal':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
await reagir(from, "💞");
let mentionsCasal = []
let rankCasal = `❣ RANK CASAIS DO GRUPO\n\n`;
for(let i=0;i<5;i++){
    const m1 = somembros[Math.floor(Math.random()*somembros.length)];
    const m2 = somembros[Math.floor(Math.random()*somembros.length)];
    mentionsCasal.push(m1, m2);
    const porcent = Math.floor(Math.random()*101);
    rankCasal += `• ${i+1}° ${porcent}% - @${m1.split('@')[0]} e @${m2.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, {image: {url: rankcasal}, caption: rankCasal, contextInfo:{...NkChannelKk, mentionedJid: mentionsCasal}}, {quoted: selo})
break

case 'rankfalido': case 'rankfalidos':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
let mentionsFalido = []
let rankFalido = `💸 RANK DOS 5 MAIS FALIDOS DO GRUPO\n\n`;
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)];
    mentionsFalido.push(membro);
    rankFalido += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, {image: {url: rankfalido}, caption: rankFalido, contextInfo:{...NkChannelKk, mentionedJid: mentionsFalido}}, {quoted: selo})
break

case 'rankcu':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
let mentionsCu = []
let rankCu = `🍑 RANK DOS 5 MAIS CUZUDOS DO GRUPO\n\n`;
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)];
    mentionsCu.push(membro);
    rankCu += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, {image: {url: rankcu}, caption: rankCu, contextInfo:{...NkChannelKk, mentionedJid: mentionsCu}}, {quoted: selo})
break

case 'rankbct': case 'rankbuceta': case 'rankbucetudas':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
let mentionsBCT = []
let rankBCT = `🔥 RANK DAS 5 MAIS BUCETUDAS DO GRUPO\n\n`;
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)];
    mentionsBCT.push(membro);
    rankBCT += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, {image: {url: rankbct}, caption: rankBCT, contextInfo:{...NkChannelKk, mentionedJid: mentionsBCT}}, {quoted: selo})
break

case 'rankgado': case 'rankgados':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsGado = []
let rankGado = `🏆 TOP 5 MAIS GADOS DO GRUPO\n\n`;
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsGado.push(membro)
    rankGado += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image: {url: rnkgado}, caption: rankGado, contextInfo:{...NkChannelKk, mentionedJid: mentionsGado}}, {quoted: selo})
break

case 'rankcorno': case 'rankcornos':
if(!isGroup) return reply(mess.onlyGroup());
if(!isModobn) return reply(mess.onlyGroupFun(prefix));
let mentionsCorno = []
let rankCorno = `🐂 TOP 5 MAIS CHIFRUDOS DO GRUPO\n\n`;
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)];
    mentionsCorno.push(membro);
    rankCorno += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`;
}
await yuta.sendMessage(from, {image: {url: rnkcorno}, caption: rankCorno, contextInfo:{...NkChannelKk, mentionedJid: mentionsCorno}}, {quoted: selo})
break

case 'surubao': case 'suruba':
await reagir(from, "😈")
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
if (!q) return reply(`Eita, coloque o número de pessoas após o comando.`)
if (Number(q) > 1000) return reply("Coloque um número menor, ou seja, abaixo de *1000*.")
const frasesSuruba = [
  `tá querendo relações sexuais a ${q}, topa?`,
  `quer que ${q} pessoas venham de chicote, algema e corda de alpinista.`,
  `quer que ${q} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`
]
const fraseEscolhidakk = frasesSuruba[Math.floor(Math.random()*frasesSuruba.length)]
let mentionsSuruba = [sender]
let msgSuruba = `😝 @${sender.split('@')[0]} ${fraseEscolhidakk}\n\n`
for(let i=0;i<q;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)];
    mentionsSuruba.push(membro)
    msgSuruba += `@${membro.split('@')[0]}\n`
}
await yuta.sendMessage(from, {text: msgSuruba, contextInfo:{...NkChannelKk, mentionedJid: mentionsSuruba}}, {quoted: selo})
break

case 'rankgostosos': case 'rankgostoso':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsGostoso = []
let rankGostoso = `🔥 RANK DOS 5 MAIS GOSTOSOS DO GRUPO\n\n`;
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsGostoso.push(membro)
    rankGostoso += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image: {url: rnkgostoso}, caption: rankGostoso, contextInfo:{...NkChannelKk, mentionedJid: mentionsGostoso}}, {quoted: selo})
break

case 'rankgostosas': case 'rankgostosa':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsGostosa = []
let rankGostosa = `😏 RANK DAS 5 MAIS GOSTOSAS DO GRUPO\n\n`;
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsGostosa.push(membro)
    rankGostosa += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image: {url: rnkgostosa}, caption: rankGostosa, contextInfo:{...NkChannelKk, mentionedJid: mentionsGostosa}}, {quoted: selo})
break

case 'ranknazista': case 'ranknazistas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsNazista = []
let rankNazista = `💂‍♂ RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐\n\n`;
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsNazista.push(membro)
    rankNazista += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image: {url: rnknazista}, caption: rankNazista, contextInfo:{...NkChannelKk, mentionedJid: mentionsNazista}}, {quoted: selo})
break

case 'rankotaku': case 'rankotakus':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsOtaku = []
let rankOtaku = `㊙ RANK DOS 5 MAIS OTAKUS DO GRUPO\n\n`
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsOtaku.push(membro)
    rankOtaku += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image:{url: rnkotaku}, caption: rankOtaku, contextInfo:{...NkChannelKk, mentionedJid: mentionsOtaku}}, {quoted: selo})
break

case 'ranksigma': case 'ranksigmas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsSigma = []
let rankSigma = `🗿🍷 RANK DOS 5 MAIS SIGMAS DO GRUPO\n\n`
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsSigma.push(membro)
    rankSigma += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image:{url: rnksigma}, caption: rankSigma, contextInfo:{...NkChannelKk, mentionedJid: mentionsSigma}}, {quoted: selo})
break

case 'rankbeta': case 'rankbetas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsBeta = []
let rankBeta = `😂 RANK DOS 5 MAIS BETAS DO GRUPO\n\n`
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsBeta.push(membro)
    rankBeta += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image:{url: rnkbeta}, caption: rankBeta, contextInfo:{...NkChannelKk, mentionedJid: mentionsBeta}}, {quoted: selo})
break

case 'rankbaiano': case 'rankbaianos':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsBaiano = []
let rankBaiano = `💤 RANK DOS 5 MAIS BAIANOS DO GRUPO\n\n`
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsBaiano.push(membro)
    rankBaiano += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image:{url: rnkbaiano}, caption: rankBaiano, contextInfo:{...NkChannelKk, mentionedJid: mentionsBaiano}}, {quoted: selo})
break

case 'rankbaiana': case 'rankbaianas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsBaiana = []
let rankBaiana = `😴 RANK DAS 5 MAIS BAIANAS DO GRUPO\n\n`
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsBaiana.push(membro)
    rankBaiana += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image:{url: rnkbaiana}, caption: rankBaiana, contextInfo:{...NkChannelKk, mentionedJid: mentionsBaiana}}, {quoted: selo})
break

case 'rankcarioca': case 'rankcariocas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsCarioca = []
let rankCarioca = `🔫 RANK DOS 5 MAIS CARIOCAS DO GRUPO\n\n`
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsCarioca.push(membro)
    rankCarioca += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image:{url: rnkcarioca}, caption: rankCarioca, contextInfo:{...NkChannelKk, mentionedJid: mentionsCarioca}}, {quoted: selo})
break

case 'ranklouco': case 'rankloucos':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsLouco = []
let rankLouco = `💀 RANK DOS 5 MAIS LOUCOS DO GRUPO\n\n`
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsLouco.push(membro)
    rankLouco += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image:{url: rnklouco}, caption: rankLouco, contextInfo:{...NkChannelKk, mentionedJid: mentionsLouco}}, {quoted: selo})
break

case 'ranklouca': case 'rankloucas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsLouca = []
let rankLouca = `💀 RANK DAS 5 MAIS LOUCAS DO GRUPO\n\n`
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsLouca.push(membro)
    rankLouca += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image:{url: rnklouca}, caption: rankLouca, contextInfo:{...NkChannelKk, mentionedJid: mentionsLouca}}, {quoted: selo})
break

case 'ranksafada': case 'ranksafadas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsSafada = []
let rankSafada = `🔥 RANK DAS 5 MAIS SAFADINHAS DO GRUPO\n\n`
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsSafada.push(membro)
    rankSafada += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image:{url: rnksafada}, caption: rankSafada, contextInfo:{...NkChannelKk, mentionedJid: mentionsSafada}}, {quoted: selo})
break

case 'ranksafado': case 'ranksafados':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsSafado = []
let rankSafado = `🥵 RANK DOS 5 MAIS SAFADINHOS DO GRUPO\n\n`
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsSafado.push(membro)
    rankSafado += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image:{url: rnksafado}, caption: rankSafado, contextInfo:{...NkChannelKk, mentionedJid: mentionsSafado}}, {quoted: selo})
break

case 'rankmacaco': case 'rankmacacos':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsMacaco = []
let rankMacaco = `🐒 RANK DOS 5 MAIS MACACOS DO GRUPO\n\n`
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsMacaco.push(membro)
    rankMacaco += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image:{url: rnkmacaco}, caption: rankMacaco, contextInfo:{...NkChannelKk, mentionedJid: mentionsMacaco}}, {quoted: selo})
break

case 'rankmacaca': case 'rankmacacas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsMacaca = []
let rankMacaca = `🙈 RANK DAS 5 MAIS MACACAS DO GRUPO\n\n`
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsMacaca.push(membro)
    rankMacaca += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image:{url: rnkmacaca}, caption: rankMacaca, contextInfo:{...NkChannelKk, mentionedJid: mentionsMacaca}}, {quoted: selo})
break

case 'rankputa': case 'rankputas':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsPuta = []
let rankPuta = `🔞 RANK DAS 5 MAIS PUTAS DO GRUPO\n\n`
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsPuta.push(membro)
    rankPuta += `• ${i+1}° ${Math.floor(Math.random()*100)}% - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image:{url: rnkputa}, caption: rankPuta, contextInfo:{...NkChannelKk, mentionedJid: mentionsPuta}}, {quoted: selo})
break

case 'rankpau':
if(!isGroup) return reply(mess.onlyGroup())
if(!isModobn) return reply(mess.onlyGroupFun(prefix))
let mentionsPau = []
let rankPau = `🍆 RANK DOS 5 MAIORES PAUS DO GRUPO\n\n`
for(let i=0;i<5;i++){
    const membro = somembros[Math.floor(Math.random()*somembros.length)]
    mentionsPau.push(membro)
    rankPau += `• ${i+1}° ${Math.floor(Math.random()*100)}cm - @${membro.split('@')[0]}\n\n`
}
await yuta.sendMessage(from, {image:{url: rnkpau}, caption: rankPau, contextInfo:{...NkChannelKk, mentionedJid: mentionsPau}}, {quoted: selo})
break

//===========[ FIM JOGOS/BRINCADEIRAS/RANKS=========\\

//==============[ RANK ATIVO E INATIVO ]===========\\
case 'atividade':
case 'atividades': {
    if (!isGroupAdmins && !issupre && !ischyt) return reply(mess.onlyAdmins());

    const groupIndex = countMessage.findIndex(g => g.groupId === from);
    if (groupIndex === -1 || countMessage[groupIndex].numbers.length === 0) 
        return reply('*"NADA FOI ENCONTRADO... GRUPO MORTO? 💀"*');

    let mentionsList = [];
    let texto = `- 「 *𝐀𝐓𝐈𝐕𝐈𝐃𝐀𝐃𝐄𝐒 𝐃𝐎𝐒 𝐌𝐄𝐌𝐁𝐑𝐎𝐒* 」\n\n`;
    for (const u of countMessage[groupIndex].numbers) {
        mentionsList.push(u.id);
        texto += mess.atividade(u);
    }
    await yuta.sendMessage(from, {text: texto, contextInfo:{...NkChannelKk, mentionedJid: mentionsList}
    }, {quoted: selo})       
    break;
}

case 'rankativo':
case 'rankativos': {
    if (!isGroup) return reply(mess.onlyGroup());
    const groupIndex = countMessage.findIndex(g => g.groupId === from);
    if (groupIndex === -1) return reply('*Não há dados do grupo.*');

    const sorted = [...countMessage[groupIndex].numbers].sort((a, b) =>
        (b.messages + b.cmd_messages + (b.figus || 0)) - (a.messages + a.cmd_messages + (a.figus || 0))
    );

    let mentionsList = [];
    let texto = `- 「 *𝐑𝐀𝐍𝐊 𝐀𝐓𝐈𝐕𝐎𝐒 𝐃𝐎 𝐂𝐇𝐀𝐓* 」\n\n`;
    for (let i = 0; i < Math.min(5, sorted.length); i++) {
        const u = sorted[i];
        mentionsList.push(u.id);
        texto += mess.rankativo(u, i);
    }
    await yuta.sendMessage(from, {text: texto, contextInfo:{...NkChannelKk, mentionedJid: mentionsList}
    }, {quoted: selo})       
    break;
}

case 'rankinativo':
case 'rankinativos': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    const groupIndex = getGroupIndex(from);
    if (groupIndex === -1) return;

    const inativos = countMessage[groupIndex].numbers
        .filter(u => u.messages <= 1)
        .sort((a, b) => (b.messages + b.cmd_messages) - (a.messages + a.cmd_messages));

    if (inativos.length === 0) return reply('*Todos estão ativos no grupo! ✅*');

    let mentionsList = [];
    let texto = `- 「 *𝐈𝐍𝐀𝐓𝐈𝐕𝐎𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎* 」\n\n`;
    for (let i = 0; i < Math.min(5, inativos.length); i++) {
        const u = inativos[i];
        mentionsList.push(u.id);
        texto += mess.rankinativo(u, i);
    }
    await yuta.sendMessage(from, {text: texto, contextInfo:{...NkChannelKk, mentionedJid: mentionsList}
    }, {quoted: selo})       
    break;
}

case 'check':
case 'checkativo': {
    if (!isGroup) return reply(mess.onlyGroup());
    const groupIndex = getGroupIndex(from);
    if (groupIndex === -1) return reply('O bot não tem ainda dados sobre o grupo');
    if (!menc_os2 || Array.isArray(menc_os2) || menc_os2.includes(',')) 
        return reply('Marque apenas 1 @ por vez para verificar a atividade.');
    const userIndex = countMessage[groupIndex].numbers.findIndex(u => u.id === menc_os2);    
    if (userIndex >= 0) {
        const u = countMessage[groupIndex].numbers[userIndex];
        await yuta.sendMessage(from, {
            text: mess.check(u),
            contextInfo:{...NkChannelKk, mentionedJid: [menc_os2]}
    }, {quoted: selo})       
    } else {
        await yuta.sendMessage(from, {
            text: `*SEM DADOS SOBRE @${menc_os2.split('@')[0]} NESTE GRUPO...*`,
            contextInfo:{...NkChannelKk, mentionedJid: [menc_os2]}
    }, {quoted: selo})       
    }
    break;
}

case 'me':
case 'mecheck':
case 'checkme': {
    if (!isGroup) return reply(mess.onlyGroup());
    const groupIndex = getGroupIndex(from);
    if (groupIndex === -1) return reply('O bot ainda não tem dados sobre este grupo.');
    const userIndex = countMessage[groupIndex].numbers.findIndex(u => u.id === sender);
    if (userIndex >= 0) {
        const u = countMessage[groupIndex].numbers[userIndex];
        await yuta.sendMessage(from, {
    text: mess.checkme(u),
    contextInfo: {...NkChannelKk, mentionedJid: [sender]}
    }, {quoted: selo})       
    } else {
    await yuta.sendMessage(from, {
    text: `*SEM DADOS SOBRE @${sender.split('@')[0]} NESTE GRUPO...*`,
    contextInfo: {...NkChannelKk, mentionedJid: [sender]}
    }, {quoted: selo})       
    }
    break;
}

case 'inativos':
case 'inativo': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!q || q.match(/[a-z]/i)) return reply(`Exemplo: ${prefix + command} 0\nMostrará membros com 0 mensagens ou menos.`);

    const groupIndex = getGroupIndex(from);
    const limite = Number(q.trim());
    const inativos = countMessage[groupIndex].numbers
        .filter(u => u.messages <= limite && u.cmd_messages <= limite && (u.figus || 0) <= limite)
        .map(u => u.id);

    if (inativos.length === 0) return reply(`Não tem pessoas com ${limite} mensagens ou menos.`);
    
    let texto = `Usuários com *${limite}* mensagens ou menos:\n–\n`;
    inativos.forEach((id, i) => {
        texto += `*${i+1}.* @${id.split('@')[0]}\n`;
    });

    await mention(texto, inativos, true);
    break;
}

case 'banghost': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if (!isBotGroupAdmins) return reply(mess.onlyBotAdmin());
    if (!q || q.match(/[a-z]/i) || q.length > 3)
        return reply(`*ᴅɪɢɪᴛᴇ ᴀ ǫᴜᴀɴᴛɪᴅᴀᴅᴇ ᴍɪɴɪᴍᴀ ᴘᴀʀᴀ ʀᴇᴍᴏᴠᴇʀ 🤷‍♂️*\n*Exemplo:* ${prefix + command} 5`);
    const limite = Number(q.trim());
    let ind = countMessage.map(i => i.groupId).indexOf(from);
    if (ind === -1) return reply('Não há dados deste grupo ainda.');
    const groupData = countMessage[ind];
    const groupMemberIds = groupMembers.map(m => m.jid); 
    const membersToRemove = groupData.numbers
        .filter(u => {
            const msgs = u.messages || 0;
            const cmds = u.cmd_messages || 0;
            const figus = u.figus || 0;
            const imgs = u.imagens || 0;
            const vids = u.videos || 0;
            const auds = u.audios || 0;
            const docs = u.documentos || 0;
            return (msgs <= limite && cmds <= limite && figus <= limite && imgs <= limite && vids <= limite && auds <= limite && docs <= limite );
        })
        .filter(u => !groupAdmins.includes(u.id))
        .filter(u => !numerodono.includes(u.id))
        .filter(u => u.id !== botNumber)
        .filter(u => groupMemberIds.includes(u.id)) 
        .map(u => u.id);
    if (membersToRemove.length === 0)
        return reply(`*ɴᴀᴏ ᴛᴇᴍ ᴍᴇᴍʙʀᴏꜱ ᴄᴏᴍ ${limite} ᴍᴇɴꜱᴀɢᴇɴꜱ ᴘᴀʀᴀ ʀᴇᴍᴏᴠᴇʀ.* 🤷‍♂️`);
    try {
        await yuta.groupParticipantsUpdate(from, membersToRemove, 'remove');
        groupData.numbers = groupData.numbers.filter(u => !membersToRemove.includes(u.id));
        fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/countmsg.json', JSON.stringify(countMessage, null, 2));
        reply(`*ᴛᴏᴛᴀʟ ᴅᴇ ${membersToRemove.length} ᴍᴇᴍʙʀᴏꜱ ʀᴇᴍᴏᴠɪᴅᴏꜱ ᴅᴏ ɢʀᴜᴩᴏ ${groupName} ᴘᴏʀ ᴄᴏɴᴛᴇʀ ${limite} ᴍᴇɴꜱᴀɢᴇɴꜱ.* 🙇‍♂️`);
    } catch (err) {
        console.error(err);
        reply(mess.error());
    }
    break;
}

case 'limpargp':
case 'limpargp-cnt': {
    if (!SoDono) return reply(mess.onlyOwner())
    if (!isGroup) return reply(mess.onlyGroup())

    const removidos = limparContadorUsuariosFora(from, groupMembers)

    fs.writeFileSync(
        './DADOS DO YUTA/INFO_YUTA/media/countmsg.json',
        JSON.stringify(countMessage, null, 2)
    )

    reply(
        `*CONTADOR ATUALIZADO ✅*\n\n` +
        `Usuários que não estão mais no grupo removidos: ${removidos}.`
    )
    break
}




case 'addmsg': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!SoDono && !isnit && !issupre && !ischyt) return reply(mess.onlyOwner());
    const txt = budy.trim();
    const barra = txt.indexOf('|');
    if (barra === -1)
        return reply(`*🤦‍♂️ ᴠᴏᴄᴇ ᴄᴏʟᴏᴄᴏᴜ ᴇʀʀᴀᴅᴏ sᴇɴʜᴏʀ(ᴀ), ᴠᴏᴜ ᴅᴀʀ ᴜᴍ ᴇxᴇᴍᴘʟᴏ:*\n> *⚙️ → ${prefix + command}  @ᴜsᴇʀ  |100ᴍsɢ 20 ғɪɢ 10 ᴄᴍᴅ..*`);
    let alvo;
    const ctx = info.message?.extendedTextMessage?.contextInfo;
    if (ctx?.mentionedJid?.length)
        alvo = ctx.mentionedJid[0];
    else {
        const num = txt.split(/ +/)[1];
        if (num && /^\d+$/.test(num)) alvo = num + "@s.whatsapp.net";
    }
    if (!alvo) alvo = sender;
    alvo = jidNormalizedUser(alvo);
    const valoresTxt = txt.slice(barra + 1).trim();
    if (!valoresTxt) return reply("*ᴄᴏʟᴏǫᴜᴇ ᴏs ᴠᴀʟᴏʀᴇs ᴀᴘᴏs ᴀ ʙᴀʀʀᴀ ɴᴇ 🙄*\n> *ᴇxᴇᴍᴘʟᴏ /100ɴsɢ 10 ғɪɢ");
    const mapa = { msg:  'messages', fig:  'figus', img:  'imagens', vid:  'videos', audio:'audios', doc:  'documentos', cmd:  'cmd_messages'};
    const grupo = countMessage.find(g => g.groupId === from);
    if (!grupo) return reply("ᴇsᴛᴇ ɢʀᴜᴘᴏ ɴᴀᴏ ᴘᴏssᴜɪ ᴄᴏɴᴛᴀᴅᴏʀ.");
    const user = grupo.numbers.find(u => u.id === alvo);
    if (!user) return reply("*ᴇʟᴇ ɴᴇᴍ ᴛᴀ ɴᴏ ᴄᴏɴᴛᴀᴅᴏʀ, ǫᴜᴇʀ ǫᴜᴇ ᴇᴜ ғᴀᴄᴀ ᴍᴀɢɪᴄᴀ ᴇ? 🙄*");
    const itens = valoresTxt.split(/ +/);
    const adicionados = [];
    const invalidos = [];
    for (const x of itens) {
        const m = x.match(/^(\d+)(msg|fig|img|vid|audio|doc|cmd)$/i);
        if (!m) { invalidos.push(x); continue; }
        const qtd = Number(m[1]);
        const tipo = m[2].toLowerCase();
        const campo = mapa[tipo];
        if (!campo) { invalidos.push(x); continue; }
        user[campo] = (user[campo] || 0) + qtd;
        adicionados.push(x);
    }
    fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/countmsg.json', JSON.stringify(countMessage));
    let resp = `*ᴠᴀʟᴏʀᴇs ᴀᴅɪᴄɪᴏɴᴀᴅᴏs ᴘᴀʀᴀ @${alvo.split("@")[0]} ᴄᴏᴍ sᴜᴄᴇssᴏ 🙇‍♂️*\n`;
    if (adicionados.length) resp += `*ᴀᴅɪᴄɪᴏɴᴀᴅᴏs: ${adicionados.join(', ')} 💯*`;
    if (invalidos.length)   resp += `\n*ɪɴᴠᴀʟɪᴅᴏs: ${invalidos.join(', ')} ❗*`;
    await yuta.sendMessage(from,{text: resp, contextInfo: { ...NkChannelKk, mentionedJid: [alvo]}}, { quoted: selo });
    break;
}


case 'tirardb':
case 'tirar_docnt': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!SoDono && !isnit && !issupre && !ischyt) return reply(mess.onlyOwner());
    const groupIndex = getGroupIndex(from);
    if (groupIndex === -1) return reply("*ᴇsᴛᴇ ɢʀᴜᴘᴏ ɴᴀᴏ ᴘᴏssᴜɪ ᴄᴏɴᴛᴀᴅᴏʀ. 🤷‍♂️*");
    let alvo;
    if (info.message.extendedTextMessage?.contextInfo?.mentionedJid?.length) {
        alvo = info.message.extendedTextMessage.contextInfo.mentionedJid[0];
    } else if (args[0]) {
        const num = args[0].replace(/\D/g, '');
        if (!num) return reply('*ᴠᴏᴄᴇ ᴇʀʀᴏᴜ ᴇᴍ ᴀʟɢᴏ ᴀɪ sᴇɴʜᴏʀ(ᴀ) 🤷‍♂️*');
        alvo = num + '@s.whatsapp.net';
    } else {
        return reply(`*🤦‍♂️ ᴠᴏᴄᴇ ᴄᴏʟᴏᴄᴏᴜ ᴇʀʀᴀᴅᴏ sᴇɴʜᴏʀ(ᴀ), ᴠᴏᴜ ᴅᴀʀ ᴜᴍ ᴇxᴇᴍᴘʟᴏ:*\n> *⚙️ → ${prefix + command} @ᴜsᴇʀ*`);
    }
    let userIndex = countMessage[groupIndex].numbers.findIndex(u => u.id === alvo);
    if (userIndex === -1) {
        return reply("*ᴇʟᴇ ɴᴇᴍ ᴛᴀ ɴᴏ ᴄᴏɴᴛᴀᴅᴏʀ, ǫᴜᴇʀ ǫᴜᴇ ᴇᴜ ғᴀᴄᴀ ᴍᴀɢɪᴄᴀ ᴇ? 🙄*");
    }
    countMessage[groupIndex].numbers.splice(userIndex, 1);
    fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/countmsg.json', JSON.stringify(countMessage));
    await yuta.sendMessage(from, {
        text: `*ᴄᴇʀᴛᴏ ᴍᴇsᴛʀᴇ, ᴀᴄᴀʙᴇɪ ᴅᴇ ʀᴇᴍᴏᴠᴇʀ ᴏ @${alvo.split('@')[0]} ᴅᴏ ᴄᴏɴᴛᴀᴅᴏʀ ᴅᴇ ᴍᴇɴsᴀɢᴇᴍ 💁‍♂️*.`,
        contextInfo: { mentionedJid: [alvo], ...NkChannelKk }
    }, { quoted: selo });
    break;
}

case 'limpar_contador':
case 'clean_counter': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!SoDono && !isnit && !issupre && !ischyt) return reply(mess.onlyOwner());
    const groupIndex = getGroupIndex(from);
    if (groupIndex === -1) return reply("*ᴇsᴛᴇ ɢʀᴜᴘᴏ ɴᴀᴏ ᴘᴏssᴜɪ ᴄᴏɴᴛᴀᴅᴏʀ. 🤷‍♂️*");
    const totalAntes = countMessage[groupIndex].numbers.length;
    countMessage[groupIndex].numbers = [];
    fs.writeFileSync('./DADOS DO YUTA/INFO_YUTA/media/countmsg.json', JSON.stringify(countMessage));
    const mensagem = totalAntes > 0 
        ? `*ᴄᴏɴᴛᴀᴅᴏʀ ᴅᴇ ᴍᴇɴꜱᴀɢᴇᴍ ᴅᴇꜱᴛᴇ ɢʀᴜᴩᴏ ʟɪᴍᴩᴏ ᴄᴏᴍ ꜱᴜᴄᴇꜱꜱᴏ ꜱᴇɴʜᴏʀ(ᴀ), ꜰᴏʀᴀᴍ ɴᴏ ᴛᴏᴛᴀʟ ${totalAntes} ᴄᴏɴᴛᴀᴛᴏꜱ 🙆‍♂️*`        
        : '*ɴᴇɴʜᴜᴍ ᴄᴏɴᴛᴀᴛᴏ ꜰᴏɪ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ, ᴇꜱᴛᴀ ᴛᴜᴅᴏ ʟɪᴍᴩᴏ ꜱᴇɴʜᴏʀ(ᴀ) 🙇‍♂️*';
    reply(mensagem);    
    break;
}

    
//============[ FIM CASES RANK ATIVO/INATIVO ]==========\\    

//================[ NAMORO ]===========\\

case "criar_familia":
case "criarfamilia": {
  try {
    if (!isGroup) return reply(mess.onlyGroup())

    const casal = __FAM_isMarriedInGroup(sender, from, namoro1)
    if (!casal) return reply('*❌ sᴏ́ qᴜᴇᴍ ᴇsᴛᴀ́ ɴᴀᴍᴏʀᴀɴᴅᴏ ᴘᴏᴅᴇ ᴄʀɪᴀʀ ғᴀᴍíʟɪᴀ.* 🙇‍♂️')

    const db = __FAM_load()
    const fid = __FAM_makeId(casal.a, casal.b, from)

    if (db.families[fid]) {
      return reply('*⚠️ ᴠᴏᴄês ᴊá ᴛêᴍ ᴜᴍᴀ ғᴀᴍíʟɪᴀ ᴄʀɪᴀᴅᴀ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.* 🙇‍♂️')
    }

    db.families[fid] = {
      a: casal.a,
      b: casal.b,
      grupo: String(from),
      criadoEm: Date.now(),
      filhos: []
    }
    __FAM_save(db)

    await reagir(from, "👨‍👩‍👧‍👦")
    return yuta.sendMessage(from, {
      text: `*✅ ғᴀᴍíʟɪᴀ ᴄʀɪᴀᴅᴀ сᴏᴍ sᴜᴄᴇssᴏ!* 🙇‍♂️`,
      contextInfo: { ...NkChannelKk, mentionedJid: [casal.a, casal.b] }
    }, { quoted: selo }).catch(() => reply('*✅ ғᴀᴍíʟɪᴀ ᴄʀɪᴀᴅᴀ сᴏᴍ sᴜᴄᴇssᴏ!* 🙇‍♂️'))
  } catch (e) {
    console.log(e)
    reply(mess.error?.() || '*❌ dᴇᴜ ᴇʀʀᴏ ᴀᴏ ᴄʀɪᴀʀ ғᴀᴍíʟɪᴀ.* 🙇‍♂️')
  }
}
break

case "adotar": {
  try {
    if (!isGroup) return reply(mess.onlyGroup())

    const casal = __FAM_isMarriedInGroup(sender, from, namoro1)
    if (!casal) return reply('*❌ sᴏ́ qᴜᴇᴍ ᴇsᴛᴀ́ ɴᴀᴍᴏʀᴀɴᴅᴏ ᴘᴏᴅᴇ ᴀᴅᴏᴛᴀʀ.* 🙇‍♂️')

    const db = __FAM_load()
    const fid = __FAM_makeId(casal.a, casal.b, from)

    if (!db.families[fid]) {
      return reply(`*⚠️ ᴠᴏᴄês ᴀɪɴᴅᴀ ɴãᴏ ᴄʀɪᴀʀᴀᴍ ᴜᴍᴀ ғᴀᴍíʟɪᴀ.* 🙇‍♂️\n\n*• ᴜsᴇ:* ${prefix}criar_familia`)
    }

    const alvo = __FAM_pickTargetJid(info, menc_os2)
    if (!alvo) return reply('*❌ ᴍᴀʀqᴜᴇ ᴀʟɢᴜᴇᴍ ᴏᴜ ʀᴇsᴘᴏɴᴅᴀ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴘʀᴀ ᴀᴅᴏᴛᴀʀ.* 🙇‍♂️')
    if (alvo === casal.a || alvo === casal.b) return reply('*❌ ᴠᴏᴄê ɴãᴏ ᴘᴏᴅᴇ ᴀᴅᴏᴛᴀʀ sᴇᴜ ᴄôɴᴊᴜɢᴇ.* 🙇‍♂️')
    if (botNumberLID?.includes?.(alvo) || botNumber?.includes?.(alvo)) return reply('*❌ ɴãᴏ ᴅá ᴘʀᴀ ᴀᴅᴏᴛᴀʀ ᴏ ʙᴏᴛ.* 🙇‍♂️')

    const ja = __FAM_findFamilyByMember(db, alvo, from)
    if (ja) return reply('*⚠️ ᴇssᴀ ᴘᴇssᴏᴀ ᴊá ᴘᴀʀᴛᴇ ᴅᴇ ᴜᴍᴀ ғᴀᴍíʟɪᴀ ɴᴇsᴇ ɢʀᴜᴘᴏ.* 🙇‍♂️')

    db.pend[alvo] = {
      familyId: fid,
      grupo: String(from),
      alvo,
      por: String(sender),
      criadoEm: Date.now()
    }
    __FAM_save(db)

    await reagir(from, "👶")

    const p1 = casal.a.split("@")[0]
    const p2 = casal.b.split("@")[0]
    const texto =
      `*👨‍👩‍👧‍👦 ᴘᴇᴅɪᴅᴏ ᴅᴇ ᴀᴅᴏçãᴏ ᴇɴᴠɪᴀᴅᴏ!* 🙇‍♂️\n\n` +
      `*• ғᴀᴍíʟɪᴀ:* @${p1} & @${p2}\n` +
      `*• ᴀᴅᴏᴛᴀɴᴅᴏ:* @${alvo.split("@")[0]}\n\n` +
      `*🧩 ᴘᴀʀᴀ ᴀᴄᴇɪᴛᴀʀ, ᴜsᴇ:* ${prefix}aceitar_adocao`

    return yuta.sendMessage(from, {
      text: texto,
      contextInfo: { ...NkChannelKk, mentionedJid: [casal.a, casal.b, alvo] }
    }, { quoted: selo }).catch(() => reply('*✅ ᴘᴇᴅɪᴅᴏ ᴅᴇ ᴀᴅᴏçãᴏ ᴇɴᴠɪᴀᴅᴏ.* 🙇‍♂️'))
  } catch (e) {
    console.log(e)
    reply(mess.error?.() || '*❌ dᴇᴜ ᴇʀʀᴏ ᴀᴏ ᴘᴇᴅɪʀ ᴀᴅᴏçãᴏ.* 🙇‍♂️')
  }
}
break

case "aceitar_adocao":
case "aceitaradocao": {
  try {
    if (!isGroup) return reply(mess.onlyGroup())

    const db = __FAM_load()
    const pend = db.pend?.[String(sender)]
    if (!pend) return reply('*❌ ᴠᴏᴄê ɴãᴏ ᴛᴇᴍ ɴᴇɴʜᴜᴍ ᴘᴇᴅɪᴅᴏ ᴅᴇ ᴀᴅᴏçãᴏ ᴘᴇɴᴅᴇɴᴛᴇ.* 🙇‍♂️')

    const fam = db.families?.[pend.familyId]
    if (!fam || String(fam.grupo) !== String(from)) {
      delete db.pend[String(sender)]
      __FAM_save(db)
      return reply('*⚠️ ᴇssᴇ ᴘᴇᴅɪᴅᴏ ɴãᴏ ᴇ́ ᴍᴀɪs ᴠáʟɪᴅᴏ.* 🙇‍♂️')
    }

    fam.filhos = Array.isArray(fam.filhos) ? fam.filhos : []
    if (!fam.filhos.includes(String(sender))) fam.filhos.push(String(sender))

    delete db.pend[String(sender)]
    db.families[pend.familyId] = fam
    __FAM_save(db)

    await reagir(from, "✅")

    const p1 = fam.a.split("@")[0]
    const p2 = fam.b.split("@")[0]

    return yuta.sendMessage(from, {
      text:
        `*✅ ᴀᴅᴏçãᴏ ᴀᴄᴇɪᴛᴀ!* 🙇‍♂️\n\n` +
        `*• ғᴀᴍíʟɪᴀ:* @${p1} & @${p2}\n` +
        `*• ɴᴏᴠᴏ ᴄʜɪʟᴅ:* @${String(sender).split("@")[0]}`,
      contextInfo: { ...NkChannelKk, mentionedJid: [fam.a, fam.b, String(sender)] }
    }, { quoted: selo }).catch(() => reply('*✅ ᴀᴅᴏçãᴏ ᴀᴄᴇɪᴛᴀ!* 🙇‍♂️'))
  } catch (e) {
    console.log(e)
    reply(mess.error?.() || '*❌ dᴇᴜ ᴇʀʀᴏ ᴀᴏ ᴀᴄᴇɪᴛᴀʀ ᴀᴅᴏçãᴏ.* 🙇‍♂️')
  }
}
break

case "familia":
case "minha_familia":
case "minhafamilia": {
  try {
    if (!isGroup) return reply(mess.onlyGroup())

    const db = __FAM_load()
    const found = __FAM_findFamilyByMember(db, sender, from)
    if (!found) return reply('*❌ ᴠᴏᴄê ɴãᴏ ғᴀᴢ ᴘᴀʀᴛᴇ ᴅᴇ ɴᴇɴʜᴜᴍᴀ ғᴀᴍíʟɪᴀ ɴᴇsᴇ ɢʀᴜᴘᴏ.* 🙇‍♂️')

    const fam = found.fam
    const p1 = fam.a.split("@")[0]
    const p2 = fam.b.split("@")[0]

    const filhos = Array.isArray(fam.filhos) ? fam.filhos : []
    const listaFilhos =
      filhos.length
        ? filhos.map((j, i) => `*${i + 1}.* @${String(j).split("@")[0]}`).join("\n")
        : '*ɴᴇɴʜᴜᴍ ᴄʜɪʟᴅ ᴀᴅᴏᴛᴀᴅᴏ ᴀᴜɴᴅᴀ.*'

    const txt =
      `*👨‍👩‍👧‍👦 ғᴀᴍíʟɪᴀ ᴅᴇ @${p1} & @${p2}*\n\n` +
      `*• ᴘᴀɪs:* @${p1} & @${p2}\n` +
      `*• ᴄʜɪʟᴅs:* ${filhos.length}\n\n` +
      `${listaFilhos}`

    const mentions = [fam.a, fam.b, ...filhos]
    await reagir(from, "👨‍👩‍👧‍👦")

    return yuta.sendMessage(from, {
      text: txt,
      contextInfo: { ...NkChannelKk, mentionedJid: mentions }
    }, { quoted: selo }).catch(() => reply(txt))
  } catch (e) {
    console.log(e)
    reply(mess.error?.() || '*❌ dᴇᴜ ᴇʀʀᴏ ᴀᴏ ᴍᴏsᴛʀᴀʀ ғᴀᴍíʟɪᴀ.* 🙇‍♂️')
  }
}
break

case "sair_familia":
case "sairfamilia": {
  try {
    if (!isGroup) return reply(mess.onlyGroup())

    const db = __FAM_load()
    const found = __FAM_findFamilyByMember(db, sender, from)
    if (!found) return reply('*❌ ᴠᴏᴄê ɴãᴏ ᴇsᴛá ᴇᴍ ɴᴇɴʜᴜᴍᴀ ғᴀᴍíʟɪᴀ.* 🙇‍♂️')

    if (found.role === "casal") {
      return reply('*⚠️ ᴘᴀɪs ɴãᴏ ᴜsᴀᴍ sᴀɪʀ_ғᴀᴍíʟɪᴀ. ᴜsᴇ dᴇʟᴇᴛᴀʀ_ғᴀᴍíʟɪᴀ sᴇ ɢᴏsᴛᴀʀ.* 🙇‍♂️')
    }

    const fam = found.fam
    fam.filhos = (fam.filhos || []).filter(j => String(j) !== String(sender))
    db.families[found.fid] = fam
    __FAM_save(db)

    await reagir(from, "🚪")
    return reply('*✅ ᴠᴏᴄê sᴀɪᴜ ᴅᴀ ғᴀᴍíʟɪᴀ.* 🙇‍♂️')
  } catch (e) {
    console.log(e)
    reply(mess.error?.() || '*❌ dᴇᴜ ᴇʀʀᴏ ᴀᴏ sᴀɪʀ ᴅᴀ ғᴀᴍíʟɪᴀ.* 🙇‍♂️')
  }
}
break

case "deletar_familia":
case "deletarfamilia": {
  try {
    if (!isGroup) return reply(mess.onlyGroup())

    const casal = __FAM_isMarriedInGroup(sender, from, namoro1)
    if (!casal) return reply('*❌ sᴏ́ qᴜᴇᴍ ᴇsᴛᴀ́ ɴᴀᴍᴏʀᴀɴᴅᴏ ᴘᴏᴅᴇ ᴅᴇʟᴇᴛᴀʀ ғᴀᴍíʟɪᴀ.* 🙇‍♂️')

    const db = __FAM_load()
    const fid = __FAM_makeId(casal.a, casal.b, from)

    if (!db.families[fid]) return reply('*❌ ᴠᴏᴄê ɴãᴏ ᴛêᴍ ғᴀᴍíʟɪᴀ ᴄʀɪᴀᴅᴀ ɴᴇsᴇ ɢʀᴜᴘᴏ.* 🙇‍♂️')

    delete db.families[fid]

    for (const [k, v] of Object.entries(db.pend || {})) {
      if (v?.familyId === fid) delete db.pend[k]
    }

    __FAM_save(db)
    await reagir(from, "🗑️")
    return reply('*✅ ғᴀᴍíʟɪᴀ ᴅᴇʟᴇᴛᴀᴅᴀ сᴏᴍ sᴜᴄᴇssᴏ.* 🙇‍♂️')
  } catch (e) {
    console.log(e)
    reply(mess.error?.() || '*❌ dᴇᴜ ᴇʀʀᴏ ᴀᴏ ᴅᴇʟᴇᴛᴀʀ ғᴀᴍíʟɪᴀ.* 🙇‍♂️')
  }
}
break

case "expulsar_filho":
case "expulsarfilho": {
  try {
    if (!isGroup) return reply(mess.onlyGroup())

    const casal = __FAM_isMarriedInGroup(sender, from, namoro1)
    if (!casal) return reply('*❌ sᴏ́ qᴜᴇᴍ ᴇsᴛᴀ́ ɴᴀᴍᴏʀᴀɴᴅᴏ ᴘᴏᴅᴇ ᴇxᴘᴜʟsᴀʀ ᴄʜɪʟᴅ.* 🙇‍♂️')

    const db = __FAM_load()
    const fid = __FAM_makeId(casal.a, casal.b, from)
    const fam = db.families?.[fid]
    if (!fam) return reply('*❌ ᴠᴏᴄês ɴãᴏ ᴛêᴍ ᴜᴍᴀ ғᴀᴍíʟɪᴀ ᴄʀɪᴀᴅᴀ ɴᴇsᴛᴇ ɢʀᴜᴘᴏ.* 🙇‍♂️')

    const alvo = __FAM_pickTargetJid(info, menc_os2)
    if (!alvo) return reply('*❌ ᴍᴀʀqᴜᴇ ᴏ ᴄʜɪʟᴅ ᴘʀᴀ ᴇxᴘᴜʟsᴀʀ.* 🙇‍♂️')

    fam.filhos = Array.isArray(fam.filhos) ? fam.filhos : []
    if (!fam.filhos.includes(alvo)) return reply('*⚠️ ᴇssᴀ ᴘᴇssᴏᴀ ɴãᴏ ᴇ́ ᴜᴍ ᴄʜɪʟᴅ ᴅᴇssᴀ ғᴀᴍíʟɪᴀ.* 🙇‍♂️')

    fam.filhos = fam.filhos.filter(j => String(j) !== String(alvo))
    db.families[fid] = fam
    __FAM_save(db)

    await reagir(from, "🚫")
    return yuta.sendMessage(from, {
      text: `*✅ ᴄʜɪʟᴅ ᴇxᴘᴜʟsᴏ ᴅᴀ ғᴀᴍíʟɪᴀ.* 🙇‍♂️\n*• ʀᴇᴍᴏᴠɪᴅᴏ:* @${alvo.split("@")[0]}`,
      contextInfo: { ...NkChannelKk, mentionedJid: [alvo] }
    }, { quoted: selo }).catch(() => reply('*✅ ᴄʜɪʟᴅ ᴇxᴘᴜʟsᴏ ᴅᴀ ғᴀᴍíʟɪᴀ.* 🙇‍♂️'))
  } catch (e) {
    console.log(e)
    reply(mess.error?.() || '*❌ dᴇᴜ ᴇʀʀᴏ ᴀᴏ ᴇxᴘᴜʟsᴀʀ ᴏ ᴄʜɪʟᴅ.* 🙇‍♂️')
  }
}
break


case 'namorar':
case 'pediremnamoro': {
  if (!isGroup) return reply(mess.onlyGroup());
  if (!menc_os2) return reply("*🌟 ᴍᴇɴᴄɪᴏɴᴇ ᴀ ᴍᴇɴsᴀɢᴇᴍ ᴏᴜ ᴍᴀʀǫᴜᴇ ᴜᴍ ᴜsᴜᴀʀɪᴏ ᴄᴏᴍ ᴏ @ ᴅᴇʟᴇ*")
  if (botNumberLID.includes(menc_os2)) return reply("*ᴇᴜ sᴏᴜ ᴀᴘᴇɴᴀs ᴜᴍᴀ ᴍᴀǫᴜɪɴᴀ ǫᴜᴇ ɴᴀᴏ ᴛᴇᴍ sᴇɴᴛɪᴍᴇɴᴛᴏs.. ɴᴀᴏ ᴘᴏssᴏ ᴘʀᴇᴇɴᴄʜᴇʀ sᴇᴜ ᴠᴀᴢɪᴏ, ᴘᴇᴄᴀ ᴀʟɢᴜᴇᴍ ʀᴇᴀʟ ᴇᴍ ɴᴀᴍᴏʀᴏ, ᴇ ɴᴀᴏ ᴜᴍ ʀᴏʙᴏ. 🤦‍♂️*");
  if (JSON.stringify(namoro2).includes(menc_os2)) return reply(`*ᴇꜱᴛᴇ ᴜꜱᴜᴀʀɪᴏ ᴊᴀ ꜰᴏɪ ᴩᴇᴅɪᴅᴏ ᴇᴍ ɴᴀᴍᴏʀᴏ 💁‍♂️*`);
  if (JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == false)
    return reply(`*ᴇssᴀ ᴘᴇssᴏᴀ ᴊᴀ ᴘᴇᴅɪᴜ ᴀʟɢᴜᴇᴍ ᴍᴀɪs ɪɴᴛᴇʀᴇssᴀɴᴛᴇ ǫᴜᴇ ᴠᴏᴄᴇ ᴇᴍ ɴᴀᴍᴏʀᴏ, sɪɴᴛᴏ ᴍᴜɪᴛᴏ 🤷‍♂️*`);
  if (JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == true)
    return reply(`*ɴᴀᴏ ᴇ ᴘᴏssɪᴠᴇʟ, ᴘᴏɪs ᴀ ᴍᴇsᴍᴀ ᴊᴀ ᴇsᴛᴀ ᴄᴏᴍ ᴏᴜᴛʀᴏ(ᴀ) 💁‍♂️*`);
  if (JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == false)
    return mention(`*ᴠᴏᴄᴇ ᴊᴀ ᴘᴇᴅɪᴜ ᴀʟɢᴜᴇᴍ ᴇᴍ ɴᴀᴍᴏʀᴏ, ᴘᴀʀᴇ ᴅᴇ ʙʀɪɴᴄᴀʀ ᴄᴏᴍ ᴏs sᴇɴᴛɪᴍᴇɴᴛᴏs ᴅᴏs ᴏᴜᴛʀᴏs 🤦‍♂️*`);
  if (JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == true)
    return mention(`*ᴠᴏᴄᴇ ᴊᴀ ᴇsᴛᴀ ɴᴀᴍᴏʀᴀɴᴅᴏ ᴀʟɢᴜᴇᴍ, ᴘᴀʀᴇ ᴅᴇ sᴇʀ ɪɴғɪᴇʟ ᴇ sᴇᴊᴀ ғɪᴇʟ ɪɢᴜᴀʟ ᴀ ᴍɪᴍ 💁‍♂️*`);
  await reagir(from, "💍");
  namoro1.push({usu1: sender, usu2: menc_os2.split('@')[0], namorados: false, idgp: from, hora: hourofc, data: dattofc});
  fs.writeFileSync("./DADOS DO YUTA/func/namoro1.json", JSON.stringify(namoro1));
  namoro2.push({id: menc_os2, pedido: sender.split('@')[0], idgp: from});
  fs.writeFileSync("./DADOS DO YUTA/func/namoro2.json", JSON.stringify(namoro2));
  const texto = mess.pedidoNamoro(menc_os2, sender, prefix);
  await yuta.sendMessage(from, { image: { url: namorar }, caption: texto, contextInfo: { ...NkChannelKk, mentionedJid: [menc_os2, sender] }}, { quoted: selo });
  break;
}

case 'cancelar':
case 'cancelarpedido': {
  if (!isGroup) return reply(mess.onlyGroup());
  const index1 = namoro1.findIndex(i => i.usu1 === sender);
  if (index1 === -1) return reply("*ᴇᴜ ᴠᴏᴜ ᴄᴀɴᴄᴇʟᴀʀ ᴏ ǫᴜᴇ sᴇ ɴᴀᴏ ᴛᴇᴍ ɴᴀᴅᴀ? 🤦‍♂️*");
  if (namoro1[index1].namorados === true)
    return reply("*ɴᴀᴏ ᴇ ᴘᴏssɪᴠᴇʟ ᴄᴀɴᴄᴇʟᴀʀ ᴀʟɢᴏ ǫᴜᴇ ᴊᴀ ғᴏɪ ᴀᴄᴇɪᴛᴏ 🤷‍♂️*");
  const parceiro = namoro1[index1].usu2 + "@s.whatsapp.net";
  namoro1.splice(index1, 1);
  fs.writeFileSync("./DADOS DO YUTA/func/namoro1.json", JSON.stringify(namoro1));
  const index2 = namoro2.findIndex(i => i.id === parceiro && i.pedido === sender.split("@")[0]);
  if (index2 !== -1) {
    namoro2.splice(index2, 1);
    fs.writeFileSync("./DADOS DO YUTA/func/namoro2.json", JSON.stringify(namoro2));
  }
  reply("*ᴘᴇᴅɪᴅᴏ ᴅᴇ ɴᴀᴍᴏʀᴏ ᴄᴀɴᴄᴇʟᴀᴅᴏ! 💁‍♂️*");
  break;
}

case 'terminar':
case 'terminar_namoro': {
  if (!JSON.stringify(namoro1).includes(sender))
    return reply(`*ᴠᴏᴄᴇ ɴᴀᴏ ᴇꜱᴛᴀ ɴᴀᴍᴏʀᴀɴᴅᴏ ᴄᴏᴍ ɴɪɴɢᴜᴇᴍ...🙇‍♂️*`);
  let D1 = namoro1.map(i => i.usu1).indexOf(sender);
  if (D1 === -1) D1 = namoro1.map(i => i.usu2).indexOf(sender);
  if (D1 === -1)
    return reply(`*ɴᴀᴏ ᴇɴᴄᴏɴᴛʀᴇɪ ᴏ ꜱᴇᴜ ʀᴇʟᴀᴄɪᴏɴᴀᴍᴇɴᴛᴏ. ᴛᴇɴᴛᴇ ᴅᴇ ɴᴏᴠᴏ 🤷‍♂️*`);
  const parceiro = namoro1[D1].usu1 === sender ? namoro1[D1].usu2 : namoro1[D1].usu1;
  const jidParceiro = parceiro.includes('@s.whatsapp.net') ? parceiro : `${parceiro}@s.whatsapp.net`;
  const D2 = namoro1.map(a => a.usu1).indexOf(jidParceiro);
  if (D2 !== -1) { namoro1[D2].namorados = false; namoro1.splice(D2, 1);
  }
  await reply(`*ᴏ ɴᴀᴍᴏʀᴏ ꜰᴏɪ ᴅᴇꜱᴛʀᴜɪ́ᴅᴏ... ᴠᴏᴄᴇ ᴀɢᴏʀᴀ ᴇꜱᴛᴀ ꜱᴏʟᴛᴇɪʀᴏ ᴅᴇ ɴᴏᴠᴏ!🙆‍♂️*`);
  await yuta.sendMessage(jidParceiro, { text: `*💔 ᴛᴇɴʜᴏ ᴜᴍᴀ ɴᴏᴛɪ́ᴄɪᴀ ᴛʀɪꜱᴛᴇ... ꜱᴇᴜ ᴘᴀʀᴄᴇɪʀᴏ(ᴀ) ᴀᴄᴀʙᴏᴜ ᴅᴇ ᴛᴇʀᴍɪɴᴀʀ ᴏ ɴᴀᴍᴏʀᴏ...😔*\n> *ɢᴜᴀʀᴅᴇ ᴏꜱ ʙᴏɴꜱ ᴍᴏᴍᴇɴᴛᴏꜱ, ᴍᴇꜱᴍᴏ ǫᴜᴇ ᴅᴏᴀ...🙇‍♂️*`, contextInfo: { ...NkChannelKk, mentionedJid: [sender, jidParceiro] }}, { quoted: selo });
  namoro1.splice(D1, 1);
  fs.writeFileSync('./DADOS DO YUTA/func/namoro1.json', JSON.stringify(namoro1));
  break;
}


case 'minhadupla':
case 'dupla': {
    if (!isGroup) return reply(mess.onlyGroup())
    const userNum = sender.split('@')[0]
    const dupla = namoro1.find(i => i.usu1 === sender || i.usu1 === userNum || i.usu2 === sender || i.usu2 === userNum)
    if (!dupla) return reply('*ᴠᴏᴄᴇ ɴᴀᴏ ᴇsᴛᴀ ɴᴀᴍᴏʀᴀɴᴅᴏ ɴɪɴɢᴜᴇᴍ.. 🤷‍♂️*')
    if (!dupla.namorados) return reply('*sᴇᴜ ᴘᴇᴅɪᴅᴏ ᴀɪɴᴅᴀ ɴᴀᴏ ғᴏɪ ᴀᴄᴇɪᴛᴏ.. 💁‍♂️*')
    await reagir(from, "❤️‍🩹");
    const parceiro1 = dupla.usu1.includes('@') ? dupla.usu1 : `${dupla.usu1}@s.whatsapp.net`
    const parceiro2 = dupla.usu2.includes('@') ? dupla.usu2 : `${dupla.usu2}@s.whatsapp.net`
    if (!dupla.inicio) {
        dupla.inicio = Date.now()
        const fs = require('fs')
        fs.writeFileSync('./DADOS DO YUTA/func/namoro1.json', JSON.stringify(namoro1))
    }
    const tempoJuntos = msToTime(Date.now() - dupla.inicio)
    const texto = mess.minhaDupla(parceiro1, parceiro2, tempoJuntos, dupla);
    try {
        const ppimg = await yuta.profilePictureUrl(parceiro2, 'image')
        await yuta.sendMessage(from, { image: { url: ppimg }, caption: texto, mentions: [parceiro1, parceiro2], contextInfo: { ...NkChannelKk, mentionedJid: [parceiro1, parceiro2] }}, { quoted: selo })
    } catch {
        await yuta.sendMessage(from, { image: { url: imgperfil }, caption: texto, mentions: [parceiro1, parceiro2], contextInfo: { ...NkChannelKk, mentionedJid: [parceiro1, parceiro2] }}, { quoted: selo })}
}
break

//============[ FIM CASES NAMORO ]==========\\

//==========[ CASES N-COINS ]============\\

case 'coins': 
case 'estatisticas': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
    
    const usuario = RG_SCOINS[ID_G_COINS]?.usus[ID_USU_COINS] || { coins: 0, chances: { minerar: 0, cassino: 0 } };

    await mention(`↳ ${tempo} ↝ @${sender.split('@')[0]} ↴\n\n` +
        `☆ۜ͜͡💰 • Saldo atual: '${usuario.coins} N-Coins' 💨\n\n` +
        `☆ۜ͜͡⛏️ • Chances restantes de mineração: ${usuario.chances.minerar}/6\n\n` +
        `☆ۜ͜͡🎰 • Chances restantes no cassino: ${usuario.chances.cassino}/5`);
    break;
}

case 'sorteiocoins': 
case 'sortcoins': {
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
    if (!SoDono) return reply(mess.onlyOwner());
    if (q.match(/[a-z]/i)) return reply("️️😭🌟 Por favor, insira um valor numérico válido para sortear.");

    const participantes = RG_SCOINS[ID_G_COINS]?.usus || [];
    if (participantes.length === 0) return reply("Não há usuários registrados no sistema para o sorteio.");

    const randomIndex = Math.floor(Math.random() * participantes.length);
    const LuckyUser = participantes[randomIndex].id;

    await mention(`🎉🌟 Parabéns @${LuckyUser.split("@")[0]}, você acaba de ganhar: ${q.trim()} N-Coins. *Gaste com moderação!*`);
    SYSTEM_COIN.AdicionarCoins(LuckyUser, Math.floor(q.trim()));
    break;
}

case 'dadoapostado':
    if (!isGroup) {
        return reply(mess.onlyGroup());
    }
    if (!isModoCoins) {
        return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
    }
    const [numberDado, amountBet] = q.split('/');
    if (!numberDado) {
        return reply(`Você esqueceu de escolher o número que você quer tirar. Escolha um número de 1 a 6. Exemplo:\n\t• *${prefix + command} número/aposta*`);
    }
    if (!amountBet) {
        return reply(`Você esqueceu de colocar o valor que deseja apostar...`);
    }
    if (isNaN(numberDado) || isNaN(amountBet)) {
        return reply(`Por favor, insira apenas números válidos!`);
    }

    const numDado = parseInt(numberDado);
    const aposta = parseInt(amountBet);

    if (aposta > 500) {
        return reply(`Não é possível apostar mais de 500 N-Coins.`);
    }
    if (numDado < 1 || numDado > 6) {
        return reply(`Número inválido! Informe um número de 1 a 6.`);
    }
    const saldoAtual = SYSTEM_COIN.VerificarCampo(sender, "coins");
    if (saldoAtual < aposta) {
        return reply(`Saldo insuficiente! Verifique seu saldo com '${prefix}saldo' antes de apostar.`);
    }
    await reagir(from, "🎲");
    await reply(`Sorteando dado(s)! ⏳️`);
    const drawQuantity = Math.floor(Math.random() * 6) + 1;
    setTimeout(async () => {
        if (drawQuantity === numDado) {
            const winMessages = [
                `🎲 Parabéns @${sender.split('@')[0]}, você ganhou ${aposta} N-Coins!`,
                `💰 Sucesso @${sender.split('@')[0]}! Você acertou e ganhou ${aposta} N-Coins!`
            ];
            await mention(winMessages[Math.floor(Math.random() * winMessages.length)]);
            await SYSTEM_COIN.AdicionarCoins(sender, aposta);
        } else {
            const lossMessages = [
                `🤧 Infelizmente *@${sender.split("@")[0]}*, você errou a previsão e perdeu *${aposta} N-Coins*!`,
                `😿 @${sender.split("@")[0]}, você não acertou e perdeu ${aposta} N-Coins.`
            ];
            await mention(lossMessages[Math.floor(Math.random() * lossMessages.length)]);
            await SYSTEM_COIN.RemoverCoins(sender, aposta);
        }
    }, 5000);
    break;
 
    
case 'anagrama':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if(!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);    
    if (fs.existsSync(`./DADOS DO YUTA/grupos/games/anagrama/${from}.json`)) {
        fs.unlinkSync(`./DADOS DO YUTA/grupos/games/anagrama/${from}.json`);
        reply("Desativado com sucesso.");
    } else {
        const anaaleatorio = Math.floor(Math.random() * palavrasANA.length);
        fs.writeFileSync(`./DADOS DO YUTA/grupos/games/anagrama/${from}.json`, JSON.stringify(palavrasANA[anaaleatorio]));
        await yuta.sendMessage(from, {text: `🌟😲 Decifre a palavra embaralhada abaixo, qual será a ordem correta das letras?\n—\n• Palavra: *${shuffle(palavrasANA[anaaleatorio].palavraOriginal)}*\n• Dica: ${palavrasANA[anaaleatorio].dica}`}, {quoted: selo});
    }
    break;

case 'quizanimais':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if(!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);    
    if (fs.existsSync(`./DADOS DO YUTA/grupos/games/quiz-animais/${from}.json`)) {
        fs.unlinkSync(`./DADOS DO YUTA/grupos/games/quiz-animais/${from}.json`);
        reply("Desativado com sucesso.");
    } else {
        const animaisquiz = Math.floor(Math.random() * quizanimais.length);
        fs.writeFileSync(`./DADOS DO YUTA/grupos/games/quiz-animais/${from}.json`, JSON.stringify(quizanimais[animaisquiz]));
        wew = await getBuffer(`${quizanimais[animaisquiz].foto}`);
        await yuta.sendMessage(from, {image: wew, caption: `🤔 Pergunta: ${quizanimais[animaisquiz].question}`}, {quoted: selo});
    }
    break;

case 'whatmusic':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if(!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);    
    if (fs.existsSync(`./DADOS DO YUTA/grupos/games/wmusic/${from}.json`)) {
        fs.unlinkSync(`./DADOS DO YUTA/grupos/games/wmusic/${from}.json`);
        reply("Desativado com sucesso.");
    } else {
        const whatMAle = Math.floor(Math.random() * whatMusicAr.length);
        fs.writeFileSync(`./DADOS DO YUTA/grupos/games/wmusic/${from}.json`, JSON.stringify(whatMusicAr[whatMAle]));
        await yuta.sendMessage(from, {text: `🎶🎧 𝐖𝐇𝐀𝐓 𝐌𝐔𝐒𝐈𝐂? 😱💡\n–\n${whatMusicAr[whatMAle].trechoMusic}\n–\n🤔😱 Qual música pertence o trecho apresentado acima?\n• Dica: ${whatMusicAr[whatMAle].dica}`}, {quoted: selo});
    }
    break;

case 'gartic':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if(!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);    
    if (fs.existsSync(`./DADOS DO YUTA/grupos/games/gartic/${from}.json`)) {
        fs.unlinkSync(`./DADOS DO YUTA/grupos/games/gartic/${from}.json`);
        reply("Desativado com sucesso.");
    } else {
        const garticquiz = Math.floor(Math.random() * garticArchives.length);
        fs.writeFileSync(`./DADOS DO YUTA/grupos/games/gartic/${from}.json`, JSON.stringify(garticArchives[garticquiz]));
        await yuta.sendMessage(from, {image: {url: `${garticArchives[garticquiz].imagem}`}, caption: `👩🏼‍🏫 - A resposta é representada por um(a): ${garticArchives[garticquiz].pergunta}\n📜 - A resposta supostamente começa com a(s) letra(s): "${garticArchives[garticquiz].letra_inicial}"\n🤔 - Contém traços? ${garticArchives[garticquiz].contem_traços}`}, {quoted: selo});
    }
    break;

case 'enigma':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if(!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);    
    if (fs.existsSync(`./DADOS DO YUTA/grupos/games/enigma/${from}.json`)) {
        fs.unlinkSync(`./DADOS DO YUTA/grupos/games/enigma/${from}.json`);
        reply("Desativado com sucesso.");
    } else {
        const engimaSolu = Math.floor(Math.random() * enigmaArchive.length);
        fs.writeFileSync(`./DADOS DO YUTA/grupos/games/enigma/${from}.json`, JSON.stringify(enigmaArchive[engimaSolu]));
        await yuta.sendMessage(from, {image: {url: enigma}, caption: `📜 - Resolva o seguinte enigma abaixo:\n—\n${enigmaArchive[engimaSolu].charada}\n–\n❓️ - *Não sabe a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}revelarenigma* para revelar a resposta correta._`}, {quoted: selo});
    }
    break;

case 'quizfutebol': 
case 'quizfut':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isGroupAdmins) return reply(mess.onlyAdmins());
    if(!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);    
    if (fs.existsSync(`./DADOS DO YUTA/grupos/games/quiz-futebol/${from}.json`)) {
        fs.unlinkSync(`./DADOS DO YUTA/grupos/games/quiz-futebol/${from}.json`);
        reply("Desativado com sucesso.");
    } else {
        const futebolquiz = Math.floor(Math.random() * quizFutebol.length);
        fs.writeFileSync(`./DADOS DO YUTA/grupos/games/quiz-futebol/${from}.json`, JSON.stringify(quizFutebol[futebolquiz]));
        await yuta.sendMessage(from, {text: `💫⚽ 𝐐𝐔𝐈𝐙 𝐅𝐔𝐓𝐄𝐁𝐎𝐋 ⚽💫\n–\n*🗣️| Responda a pergunta mostrada abaixo:*\n• _${quizFutebol[futebolquiz].pergunta}_`}, {quoted: selo});
    }
    break;
    
case 'cassino':
case 'slot':
    if (!isGroup) return reply(mess.onlyGroup());
    if (!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);

    const usuario = RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS];

    if (usuario.chances.cassino >= 5) {
        return reply(`Volte amanhã! Você consumiu todas suas 5 chances do dia no cassino.`);
    }
    
    if (usuario.coins < 30) {
        return reply('Saldo insuficiente! Para usar os comandos de Coins, você deve ter pelo menos 30 N-Coins em sua carteira.');
    }

    usuario.chances.cassino++;
    CoinsUpdate(RG_SCOINS);

    const getResultSlot = ["🍓", "🍒", "🍎", "🍉"];
    const V_ = Array.from({ length: 3 }, () => getResultSlot[Math.floor(Math.random() * getResultSlot.length)]);

    const slotMensagem = async (mensagem) => {
        reply(`> ${mensagem}\n\n『 🕹️ 𝑪𝑨𝑺𝑺𝑰𝑵𝑶 💎 』↴ \n
╔═╌✯╌═⊱×⊰🎰⊱×⊰═╌✯╌═╗
║𖣴⋗     [${V_[0]} | ${V_[1]} | ${V_[2]}]◄
╚═╌✯╌═⊱×⊰💰⊱×⊰═╌✯╌═╝\n\n\n*${usuario.chances.cassino}/5* chances no cassino por hoje.`);
    };

    if (V_[0] === V_[1] && V_[1] === V_[2]) {
        await SYSTEM_COIN.AdicionarCoins(sender, 65);
        const mensagensVitoria = [
            'Parece que a sorte estava esperando por você! Você acaba de levantar 65 N-Coins, aproveite você é digno de ganhar. 💰🌟',
            'Que reviravolta! Você saiu do cassino com 65 N-Coins no bolso! Quem disse que os jogos de azar não valem a pena? 🌟💰',
            'Surpreendente! A sorte sorriu para você esta noite no cassino, você ganhou 65 N-Coins como recompensa! 🎰✨'
        ];
        await slotMensagem(mensagensVitoria[Math.floor(Math.random() * mensagensVitoria.length)]);
    } else {
        await SYSTEM_COIN.RemoverCoins(sender, 5);
        const mensagensDerrota = [
            'Que pena! Você perdeu, o que resultará na perda de 5 N-Coins. Mas não fique triste, na próxima você ganha! 🙏🏼🌟',
            'Você perdeu, o que resultará na perda de 5 N-Coins! Com o tempo você recuperará e ultrapassará o valor perdido. 😇🌟',
            'Hoje a sorte não estava de bom humor com você, perdeu 5 N-Coins. 🥱☠️'
        ];
        await slotMensagem(mensagensDerrota[Math.floor(Math.random() * mensagensDerrota.length)]);
    }
    break;

case 'minerar':
case 'minerarcoins':
if (!isGroup) return reply(mess.onlyGroup());
    if (!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
  if (RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar >= 6) {
    return reply(`Sinto muito, você não tem mais chance para minerar hoje, porque você completou: 6/6.`);
  }
  if (!RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS]) {
    RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar = 1;
  } else {
    RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar += 1;
  }
  CoinsUpdate(RG_SCOINS);
  const aleatValor = Math.floor(Math.random() * 2);
  const rndg = Math.floor(Math.random() * 300); 
  if (aleatValor === 0) {
    const randomMining = [
      `Você estava minerando nas ilhas savitas e encontrou ${rndg} N-Coins em minerais preciosos! 💰`,
      `🗣💰 Você invadiu uma mina proibida e achou ${rndg} N-Coins em troca de ouro!`,
      `💎👷🏻‍♀️ Em uma mina de diamantes, você encontrou 2 diamantes equivalentes a ${rndg} N-Coins.`,
      `⛏️👷🏻‍♀️ Você escavou uma mina de ouro subterrânea em Minas Gerais e encontrou ${rndg} N-Coins!`,
    ];
    await reply(randomMining[Math.floor(Math.random() * randomMining.length)]);
    SYSTEM_COIN.AdicionarCoins(sender, rndg);
  } else {
    const miningFailureRX = [
      "😥 Em sua tentativa de mineração, não foi possível encontrar nenhum mineral valioso!",
      "😿 Você não deu sorte em sua escavação. Tente novamente mais tarde!",
      "⛏️💎 Em Minas Gerais, famosa por suas minas de diamantes, você não encontrou nada desta vez.",
    ];
    let miningFailure = miningFailureRX[Math.floor(Math.random() * miningFailureRX.length)];   
    miningFailure += RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar >= 6 
      ? "\n> Infelizmente você não tem mais chances para minerar hoje, volte amanhã..." 
      : `\n> Ainda restam ${6 - RG_SCOINS[ID_G_COINS].usus[ID_USU_COINS].chances.minerar} tentativas para minerar hoje.`;
    await reply(miningFailure);
  }
  break;

case 'revelargartic':  
if (!isGroupAdmins) return reply('Somente adms podem ver a(s) resposta(s) do jogos!')
if (!isGroup) return reply(mess.onlyGroup());
    if (!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
if(fs.existsSync(`./DADOS DO YUTA/grupos/games/gartic/${from}.json`)) return reply("Não existe nenhuma partida atual do jogo neste grupo.")
let datenagramaa = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/games/gartic/${from}.json`))
reply(`• Olá *${pushname}*, a resposta correta da afirmação era: ${II}${datenagramaa.resposta}${II}\n• Envie a resposta apresentada acima para passar a próxima..`)
break

case 'revelarenigma':
if (!isGroupAdmins) return reply('Somente adms podem ver a(s) resposta(s) do jogos!');
if (!isGroup) return reply(mess.onlyGroup());
    if (!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
if(fs.existsSync(`./DADOS DO YUTA/grupos/games/enigma/${from}.json`)) return reply("Não existe nenhuma partida atual do jogo neste grupo.");
let eni1 = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/games/enigma/${from}.json`))
reply(`• Olá *${pushname}*, a resposta correta do enigma era: ${II}${eni1.respostaEne}${II}\n• Envie a resposta apresentada acima para passar a próxima..`)
break



case 'rankcoins':
if (!isGroup) return reply(mess.onlyGroup());
    if (!isModoCoins) return reply(`*ᴇssᴇ ᴄᴏᴍᴀɴᴅᴏ sᴏ ᴘᴏᴅᴇ sᴇʀ ᴀᴛɪᴠᴏ ǫᴜᴀɴᴅᴏ ᴏ sɪᴛᴇᴍᴀ ${prefix}ᴍᴏᴅᴏᴄᴏɪɴs ᴇsᴛɪᴠᴇʀ ᴀᴛɪᴠᴏ 🤷‍♂️*`);
    const grupo = RG_SCOINS.find(g => g.grupo === from) || { chances: { minerar: 0, cassino: 0 } };
    if (!grupo) return reply('*ɴᴀᴏ ʜᴀ ɴɪɴɢᴜᴇᴍ ᴄᴏᴍ N-ᴄᴏɪɴs ɴᴇsᴛᴇ ɢʀᴜᴘᴏ 🤷‍♂️*');
    const rank = grupo.usus.sort((a, b) => b.coins - a.coins).slice(0, 10);
    let mensagemRank = `╔═╌✯╌═⊱×⊰平⊱×⊰═╌✯╌═╗
║➪ 𝐑𝐀𝐍𝐊 𝐍-𝐂𝐎𝐈𝐍𝐒『💰』  
╚═╌✯╌═⊱×⊰平⊱×⊰═╌✯╌═╝\n\n`;
    rank.forEach((usuario, i) => {
        mensagemRank += `『 ${i + 1}º 』↴  
╔═╌✯╌═⊱×⊰平⊱×⊰═╌✯╌═╗
║𖣴⋗ ᴜsᴜᴀʀɪᴏ - @${usuario.id.split('@')[0]}
║𖣴⋗ sᴀʟᴅᴏ - ${usuario.coins} N-Coins
║𖣴⋗ ᴍɪɴᴇʀᴀʀ - ${usuario.chances.minerar}/6
║𖣴⋗ ᴄᴀssɪɴᴏ - ${usuario.chances.cassino}/5
╚═╌✯╌═⊱×⊰平⊱×⊰═╌✯╌═╝\n\n`;
    });
    mentions(mensagemRank, rank.map(u => u.id), true);
    break

//==========[ FIM DAS CASES N-COINS ]=============\\

//////////////////////FIM\\\\\\\\\\\\\\\\\\\\\\\\\

default:

// IF DOS ANTIs - (LOCALIZAÇÃO - CONTATO - CATALOGO)
if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return await yuta.sendMessage(from, {text: mess.antisRandomMessage()}, {quoted: selo})
if(IS_DELETE) {
setTimeout(async() => {
await yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
await yuta.groupParticipantsUpdate(from, [sender], 'remove')
await yuta.sendMessage(from, {text: `🗑${"\n".repeat(255)}🗑️\n✅️ A limpeza de chat foi concluída com sucesso.`, contextInfo: {forwardingScore: 500, isForwarded:true}});
await yuta.sendMessage(from, {text: 'Por favor, reporte aos adminstradores do grupo sobre o ocorrido.', mentions: groupAdmins})
}
}
}

if(isGroup && isAntiFlood && !SoDono && !isVip && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){var limitefl = limitefll.limitefl} else {var limitefl = isLimitec};
if(budy.length >= limitefl){
setTimeout(async() => {
  reply(mess.charactersAnti());
      console.log(colors.red(`[SPAM DETECTED IN THE GROUP]`), 'Grupo:', colors.yellow(`${groupName}`), colors.white(`Ocorrência: ${hourofc} ${dattofc}`));
    }, 100);
setTimeout(async() => {
 if(IS_DELETE) {
    setTimeout(async() => {
        yuta.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
      }, 500);
    }
 if(!JSON.stringify(groupMembers).includes(sender)) return  
 await yuta.groupParticipantsUpdate(from, [sender], 'remove')
 }, 1000)
}
}

if (isYutaEscuta && isGroup && !info.key.fromMe) {
  const audioMessage = info.message?.audioMessage || info.message?.viewOnceMessageV2Extension?.message?.audioMessage;

  if (audioMessage) {
    await reagir(from, "👂");

    try {
      const stream = await downloadContentFromMessage(audioMessage, 'audio');
      let buffer = Buffer.from([]);
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
      }

      const audioUrl = await upload(buffer);

      const transcriptRes = await fetch('https://api.assemblyai.com/v2/transcript', {
        method: 'POST',
        headers: {
          'authorization': '22be3718b6bf42019d9cc59f70133b83',
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          audio_url: audioUrl,
          language_code: 'pt'
        })
      });

      const transcriptData = await transcriptRes.json();
      if (!transcriptData.id)
        return reply('*ɴᴀ̃ᴏ ꜰᴏɪ ᴘᴏꜱꜱɪ́ᴠᴇʟ ᴇɴᴠɪᴀʀ ᴏ ᴀᴜ́ᴅɪᴏ ᴘᴀʀᴀ ᴛʀᴀɴꜱᴄʀɪᴄ̧ᴀ̃ᴏ... 💢*');

      const id = transcriptData.id;
      let status = 'queued';
      let transcriptResult;

      while (status === 'queued' || status === 'processing') {
        await new Promise(resolve => setTimeout(resolve, 4000));
        const statusRes = await fetch(`https://api.assemblyai.com/v2/transcript/${id}`, {
          headers: { 'authorization': '22be3718b6bf42019d9cc59f70133b83' }
        });
        transcriptResult = await statusRes.json();
        status = transcriptResult.status;
      }

      if (status !== 'completed')
        return reply('*ɴᴀ̃ᴏ ꜰᴏɪ ᴘᴏꜱꜱɪ́ᴠᴇʟ ᴛʀᴀɴꜱᴄʀᴇᴠᴇʀ ᴇꜱꜱᴇ ᴀᴜ́ᴅɪᴏ, ꜰᴏɪ ᴅɪꜰɪ́ᴄɪʟ ᴀᴛᴇ́ ᴘʀᴀ ᴍɪᴍ...* 😵‍💫');

      let textoFinal = transcriptResult.text || 'ɴᴇɴʜᴜᴍ ᴛᴇxᴛᴏ ʀᴇᴄᴏɴʜᴇᴄɪᴅᴏ';

      await yuta.sendMessage(from, { text: `*🎙️ ᴛʀᴀɴꜱᴄʀɪᴄ̧ᴀ̃ᴏ ᴅᴏ ᴀᴜ́ᴅɪᴏ 🎙️*\n-\n> *${textoFinal}*` }, { quoted: selo });

    } catch (e) {
      console.error('erro ao transcrever:', e);
      reply(mess.error());
    }
  }
}


// ===== GATILHO DO AUTOREPO =====
if (isGroup && isAutorepo && !isCmd && !info.key.fromMe) {
  try {
    const textoMsg = String(
      body ||
      budy ||
      info.message?.conversation ||
      info.message?.extendedTextMessage?.text ||
      info.message?.imageMessage?.caption ||
      info.message?.videoMessage?.caption ||
      ''
    ).trim()

    if (textoMsg) {
      const key = normalizeRepoKey(textoMsg)
      const repos = loadGroupAutorepo(from)
      const achado = repos.find(r => normalizeRepoKey(r?.trigger) === key)

      if (achado) {
        if (achado.type === 'text') {
          await yuta.sendMessage(from, { text: achado.text || '' }, { quoted: selo })
          return
        }

        if (!achado.file) return

        const filePath = `${AUTOREPO_MEDIA_DIR}/${achado.file}`
        if (!fs.existsSync(filePath)) return

        if (achado.type === 'image') {
          await yuta.sendMessage(from, {
            image: { url: filePath },
            caption: achado.caption || ''
          }, { quoted: selo })
          return
        }

        if (achado.type === 'video') {
          await yuta.sendMessage(from, {
            video: { url: filePath },
            caption: achado.caption || '',
            gifPlayback: false
          }, { quoted: selo })
          return
        }

        if (achado.type === 'audio') {
          await yuta.sendMessage(from, {
            audio: { url: filePath },
            mimetype: achado.mimetype || getRepoMimeByExt(achado.file, 'audio'),
            ptt: false
          }, { quoted: selo })
          return
        }

        if (achado.type === 'sticker') {
          await yuta.sendMessage(from, {
            sticker: fs.readFileSync(filePath)
          }, { quoted: selo })
          return
        }
      }
    }
  } catch (e) {
    console.log('erro no gatilho do autorepo:', e)
  }
}

//=[ ANTI PALAVRAS - (🤖) - GRUPOS ]=\\
if(isGroup && isPalavrao && isBotGroupAdmins && !SoDono && !isGroupAdmins) {
if(dataGp[0].antipalavrao.palavras.some(i => budy2.includes(i.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) {
setTimeout(() => {
if(!JSON.stringify(groupMembers).includes(sender)) return 
yuta.groupParticipantsUpdate(from, [sender], 'remove');
setTimeout(() => {yuta.sendMessage(from, {delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})}, 500)
}, 2000);
yuta.sendMessage(from, {text: mess.permissionDenied_rUser()}, {quoted: selo});
}
}

const privateCmd = (id, pc, cmd, porcentagem) => {
  return `╭⊱♰ •🦇 : *\`ᴄᴏᴍᴀɴᴅᴏ ɪɴᴠᴀʟɪᴅᴏ\`*
╎⊹ 𖤐 *ɴᴀᴏ ᴇɴᴄᴏɴᴛʀᴇɪ:* \`${pc}\`
╎⊹ 𖤐 *ᴠᴏᴄᴇ ǫᴜɪs ᴅɪᴢᴇʀ:* \`${cmd}\` ?
╎⊹ 𖤐 *sᴇᴍᴇʟʜᴀɴᴄᴀ:* \`${porcentagem}%\`
╰ : ♰`;
}

if (isCmd) {
  const AB = similarityCmd(command)
  const comandoDigitado = prefix + command
  let sugestao = AB[0].comando.replace(prefix, "")
  sugestao = prefix + sugestao
  const notcmd = privateCmd(sender, comandoDigitado, sugestao, AB[0].porcentagem)
  let avatarUrl
  try {
    const ppUrl = await yuta.profilePictureUrl(sender, "image")
    avatarUrl = ppUrl || imgperfil
  } catch {
    avatarUrl = imgperfil
  }
  const api404 = `${SITE}/canvas/404?apitoken=${TOKEN}` +
  `&fundo=${encodeURIComponent("https://files.catbox.moe/4uiadt.jpg")}` +
  `&logo=${encodeURIComponent(avatarUrl)}` +
  `&opc=${encodeURIComponent("Whoops!")}` +
  `&mensagem=${encodeURIComponent("Comando inválido")}` +
  `&semelhanca=${encodeURIComponent(sugestao)}` +
  `&similarity=${encodeURIComponent(AB[0].porcentagem)}`
  await yuta.sendMessage(from, { text: notcmd, contextInfo: { ...NkChannelKk, externalAdReply: { title: `❌ COMANDO INVÁLIDO`, body: `Sugestão: ${sugestao}`, mediaType: 1, previewType: "PHOTO", thumbnailUrl: api404, renderLargerThumbnail: true, sourceUrl: SITE }
    }
  }, { quoted: selo })
}

if (budy2 === "prefixo") {
  reply(`- ᶻ 𝗓 𐰁 ,, ''『  ${prefix}  』\n*╰┈➤ ᴇsᴛᴇ ᴇ́ ᴏ ᴍᴇᴜ ᴘʀᴇғɪxᴏ ᴀᴛᴜᴀʟ, ᴄᴏᴍ ᴇʟᴇ ᴠᴏᴄᴇ ᴘᴏᴅᴇ ᴀᴄᴇssᴀʀ ᴍᴇᴜs ᴄᴏᴍᴀɴᴅᴏs ᴀɴᴛɪɢᴏs ᴇ ɴᴏᴠᴏs.*\n ˚₊‧꒰ა ♱ ໒꒱ ‧₊˚\n> ┆${NomeDoBot} :  ♱`);
}
}
}
}


//=================

const nmrdn = setting.ownerNumber.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`;

async function forTemporaryVip() {
if(vip.length > 0) {
for (y of vip) {
if(y.save != Number(moment.tz('America/Sao_Paulo').format('DD'))) {
y.save = Number(moment.tz('America/Sao_Paulo').format('DD'));
fs.writeFileSync("./DADOS DO YUTA/usuarios/vip.json", JSON.stringify(vip));
if(y.infinito == false) {
if(y.dias > 1) {
y.dias -= 1;
fs.writeFileSync("./DADOS DO YUTA/usuarios/vip.json", JSON.stringify(vip));
} else {
yuta.sendMessage(y.id, {text: `*sᴇᴜs ᴅɪᴀs ᴅᴇ ᴜsᴜᴀʀɪᴏ(ᴀ) ᴠɪᴘ ᴀᴄᴀʙᴀʀᴀᴍ 🙅‍♂️*`});
AB = vip.map(b => b.id).indexOf(y.id);
vip.splice(AB, 1);
fs.writeFileSync("./DADOS DO YUTA/usuarios/vip.json", JSON.stringify(vip));
}
}
}
}
}
}
forTemporaryVip().catch((error) => {console.log(error)});

startFunctionNaga().catch(async(error) => {
if(JSON.stringify(error).includes(API_KEY_YUTA2)) {} else if(String(error).includes("Erro: aborted")) {
fileStart = require.resolve("./ARQUIVES/connect.js");
delete require.cache[fileStart];
require(fileStart);
} else if(String(error).includes("nativeFlowResponseMessage")) {
} else { 
return console.log('O servidor-geral caiu ou não foi possivel executar esta ação.', error);
}
})
}
}

fs.watchFile(require.resolve(__filename), () => {
    fs.unwatchFile(require.resolve(__filename));
    console.log(colors.blue(`Alterações salvas, aguarde que estou carregando :) - '${__filename}'`));
    delete require.cache[require.resolve(__filename)]
    require(require.resolve(__filename))
})

module.exports = startyuta;
