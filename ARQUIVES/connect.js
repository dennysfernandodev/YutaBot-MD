/**
* código refeito e otimizado.
* By : @Nk Petrov
* peço que deixe os créditos por gentileza.
 */
 
const { default: makeWASocket, useMultiFileAuthState, makeInMemoryStore, makeCacheableSignalKeyStore, PHONENUMBER_MCC } = require('@whiskeysockets/baileys');
const qrcodeTerminal = require('qrcode-terminal'); 
const path = require('path');

const { fs, readline, LoggerB, Boom, axios, util, moment, time, date, getBuffer, banner2, banner3, colors, getGroupAdmins, mess, getRandom, NodeCache, nescessario, setting, extractDDD, extractStateFromNumber, extractStateFromDDD } = require('../ARQUIVES/funcoes/exports.js');
const { ensureLicenseActivation } = require('../ARQUIVES/license/license-manager');
const { assertIntegrityOrExit } = require('../ARQUIVES/license/integrity-guard');
const qrcode = "./DADOS DO YUTA/qr-code";
const { NomeDoBot, channelnk, TOKEN, SITE } = require('../DADOS DO YUTA/INFO_YUTA/media/INFO_YUTA.json');

const logger = LoggerB.child({});
logger.level = 'silent';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const question = (text) => new Promise(resolve => rl.question(text, resolve));
const msgRetryCounterCache = new NodeCache();

const SUPORTE_NUMBER = "+559183721035"; 

function collectNumbers(inputString) {
    return inputString.replace(/\D/g, '');
}

function getLinkedWhatsappNumberFromCreds() {
    const credsPath = path.resolve(process.cwd(), `${qrcode}/creds.json`);
    if (!fs.existsSync(credsPath)) return null;

    try {
        const creds = JSON.parse(fs.readFileSync(credsPath, 'utf8'));
        const meId = String(creds?.me?.id || '');
        if (!meId) return null;
        const raw = meId.split('@')[0].split(':')[0];
        const onlyDigits = raw.replace(/\D/g, '');
        return onlyDigits || null;
    } catch {
        return null;
    }
}

async function startPairing(yuta) {
    const phoneNumber = await question(colors.cyan("Digite o número do WhatsApp que deseja conectar ↴\n--> "));
    const numerosColetados = collectNumbers(phoneNumber);
    if (!numerosColetados || numerosColetados.length < 11) {
        console.log(colors.red("Número inválido. Insira corretamente, por exemplo: 551122334455"));
        return; 
    }
    const code = await yuta.requestPairingCode(numerosColetados);
    console.log(colors.black(colors.bgGreen(`Seu código de emparelhamento: `)), colors.black(colors.white(code)));
    console.log(colors.gray('Vá no whatsapp > dispositivos conectados > conectar um aparelho > conectar com número de telefone'));
}


async function openWhatsappSupport() {
    console.log(colors.cyan(`https://wa.me/${SUPORTE_NUMBER.replace(/\D/g,'')}\n`));
}

async function showMenu(yuta) {
    console.log(colors.magenta("╔══╌✯╌══⊱×⊰平⊱×⊰══╌✯╌══╗"));
    console.log(colors.magenta("║𖣴") + colors.white(" Escolha uma opção ↴"));
    console.log(colors.magenta("╚══╌✯╌══⊱×⊰平⊱×⊰══╌✯╌══╝"));
    console.log(colors.magenta("║") + colors.blue("╭━ ━━ ── ── ━━ ━╮"));
    console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("1") + colors.red(" )") + colors.cyan(" Código"));
    console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("2") + colors.red(" )") + colors.cyan(" QR-Code"));
    console.log(colors.magenta("║") + colors.blue("|") + colors.magenta("𖣴➣ ") + colors.red("( ") + colors.cyan("3") + colors.red(" )") + colors.cyan(" Suporte"));
    console.log(colors.magenta("║") + colors.blue("╰━ ━━ ── ── ━━ ━╯"));
    console.log(colors.magenta("╚══╌✯╌══⊱×⊰平⊱×⊰══╌✯╌══╝"));
    let option = await question(colors.white("╰━>"));
    option = option.trim();

    switch(option) {
        case '1':
            await startPairing(yuta);
            break;
        case '2':            
            yuta.ev.on('connection.update', (update) => {
                if (update.qr) {
                    console.log(colors.cyan("\n📱 ESCANEIE O QR PARA CONECTAR-SE AO BOT:\n"));
                    qrcodeTerminal.generate(update.qr, { small: true }); 
                    console.log(colors.yellow("\n• ABRA O WHATSAPP > DISPOSITIVOS CONECTADOS > CONECTAR NOVO APARELHO\n"));
                }
            });
            break;
        case '3':
            await openWhatsappSupport();
            break;
        default:
            console.log(colors.red("\n𝐎𝐏𝐒.. 𝐕𝐎𝐂𝐄 𝐄𝐑𝐑𝐎𝐔 𝐀𝐋𝐆𝐎 𝐀𝐈\n"));
            await showMenu(yuta);
    }
}

async function startConnect() {
    const integrityReport = assertIntegrityOrExit({
        baseDir: process.cwd(),
        lockFilePath: path.resolve(process.cwd(), 'ARQUIVES/license/integrity-lock.json'),
    });

    const licenseData = await ensureLicenseActivation({
        question,
        projectFingerprint: integrityReport.projectFingerprint,
        whatsappNumber: getLinkedWhatsappNumberFromCreds(),
        licenseFilePath: path.resolve(process.cwd(), 'license.json'),
        logger: console,
    });

    let licenseHeartbeatTimer = null;
    let licenseHardStop = false;
    const stopLicenseHeartbeat = () => {
        if (licenseHeartbeatTimer) {
            clearInterval(licenseHeartbeatTimer);
            licenseHeartbeatTimer = null;
        }
    };

    const enforceLicenseHeartbeat = async (yuta) => {
        if (licenseHardStop) return;
        try {
            const result = await licenseData.licenseService.heartbeat({
                licenseKey: licenseData.licenseKey,
                instanceId: licenseData.instanceId,
                machineProof: licenseData.machineProof,
                installationProof: licenseData.installationProof,
            });

            if (result?.ok) return;
            licenseHardStop = true;
            console.log(colors.red(`[LICENSE] Heartbeat negado: ${result?.reason || 'key bloqueada'}`));
            try { await yuta.logout(); } catch {}
            stopLicenseHeartbeat();
            process.exit(77);
        } catch (err) {
            licenseHardStop = true;
            console.log(colors.red(`[LICENSE] Falha no heartbeat: ${err.message}`));
            try { await yuta.logout(); } catch {}
            stopLicenseHeartbeat();
            process.exit(77);
        }
    };

    const { state, saveCreds } = await useMultiFileAuthState(qrcode);

    const yuta = makeWASocket({
        logger,        
        browser: ['Linux', 'Opera', '10.0.22631'],
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, logger),
        },
        msgRetryCounterCache,
        generateHighQualityLinkPreview: true,
        syncFullHistory: false,
        keepAliveIntervalMs: 40000,
        markOnlineOnConnect: true,
    });

    if (!fs.existsSync(`${qrcode}/creds.json`)) {
        await showMenu(yuta);
    }

    yuta.ev.on("creds.update", saveCreds);

    yuta.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect } = update;
        const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode;

        switch (connection) {
            case 'close':
                stopLicenseHeartbeat();
                if (shouldReconnect) {
                    if (shouldReconnect == 401) console.log(colors.red(mess.ErrorBaileys_401()));
                    else if (shouldReconnect == 408) console.log(colors.yellow(mess.ErrorBaileys_408()));
                    else if (shouldReconnect == 411) console.log(colors.yellow(mess.ErrorBaileys_411()));
                    else if (shouldReconnect == 428) console.log(colors.yellow(mess.ErrorBaileys_428()));
                    else if (shouldReconnect == 440) console.log(colors.gray(mess.ErrorBaileys_440()));
                    else if (shouldReconnect == 500) console.log(colors.gray(mess.ErrorBaileys_500()));
                    else if (shouldReconnect == 503) console.log(colors.gray("Erro desconhecido! Error: 503."));
                    else if (shouldReconnect == 515) console.log(colors.gray(mess.ErrorBaileys_515()));
                    else console.log(`${colors.red("[CONNECTION CLOSED]")} Conexão fechada por motivo: ${lastDisconnect?.error}`);
                    startConnect();
                }
                break;

            case 'connecting':
                console.log(`${colors.white("×")} [${colors.red(date,time)}] - ${colors.yellow(mess.connecting())}`);
                break;

            case 'open':
                console.log(banner3.string);
                console.log(banner2.string);
                console.log(colors.green(mess.open()));
                if (licenseData?.instanceId) {
                    console.log(colors.green(`[LICENSE] Instancia validada: ${licenseData.instanceId}`));
                }
                if (licenseData?.licenseService && licenseData?.licenseKey) {
                    const everySec = Math.max(15, Number(licenseData.heartbeatEverySec || 60));
                    licenseHeartbeatTimer = setInterval(() => {
                        enforceLicenseHeartbeat(yuta).catch(() => {});
                    }, everySec * 1000);
                    enforceLicenseHeartbeat(yuta).catch(() => {});
                }
                rl.close();
                break;
        }
    });

    yuta.ev.on("messages.upsert", (upsert) => {
        const startyuta = require('../yuta.js');
        startyuta(upsert, yuta, qrcode).catch(console.log);
    });

    yuta.ev.process(async (events) => {
        if (!events["group-participants.update"]) return;
        try {
            const naga2 = events["group-participants.update"];
            if (!fs.existsSync(`./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${naga2.id}.json`)) return;

            const jsonGp = JSON.parse(fs.readFileSync(`./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${naga2.id}.json`));
            let grpmdt;
            try { grpmdt = await yuta.groupMetadata(naga2.id) } catch { return }
            if (!grpmdt?.id.endsWith('@g.us')) return;

            const membros_ = grpmdt.participants;
            const groupAdmins_ = getGroupAdmins(membros_);

            const normalizar = alvo => {
                if (alvo?.includes('@lid') && membros_) {
                    return membros_.find(v => v.lid === alvo)?.jid || alvo;
                }
                return alvo;
            };

            const participante = normalizar(naga2.participants[0]);
            const numero = participante.split('@')[0];
            const NumeroDoBot = yuta.user.id.split(':')[0];
            if (participante.startsWith(yuta.user.id.split(':')[0])) return;
 function gerarContextNewsletter() {
    if (setting.channelnk === "0@newsletter") {
        return {}; 
    }
    return {
        isForwarded: true,
        forwardingScore: 1,
        forwardedNewsletterMessageInfo: {
            newsletterJid: setting.channelnk,
            newsletterName: NomeDoBot,
            serverMessageId: ''
        }
    };
}
const NkChannelKk = gerarContextNewsletter();

// ANTIROUBO 🛡️ 
try {
  const pathAtiv = `./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/${naga2.id}.json`
  if (!fs.existsSync(pathAtiv)) {
  } else {
    let jsonGpAR
    try {
      jsonGpAR = JSON.parse(fs.readFileSync(pathAtiv))
      if (!Array.isArray(jsonGpAR)) jsonGpAR = [jsonGpAR]
      if (!jsonGpAR[0]) jsonGpAR[0] = {}
    } catch {
      jsonGpAR = [{}]
    }

    const ligado = !!jsonGpAR[0].antiroubo
    if (!ligado) {
    } else {
      const action = naga2.action
      if (action !== 'promote' && action !== 'demote') {
      } else {
        const toNum = (v) => String(v || '').replace(/\D/g, '')

        const ownerNumberLocal = (setting?.ownerNumber || '').replace(new RegExp("[()+-/ +/]", "gi"), "")
        const donoJid = ownerNumberLocal + '@s.whatsapp.net'

        const botNum = (yuta.user?.id?.split(':')[0] || yuta.user?.id || '').replace(/@s\.whatsapp\.net.*/,'')
        const botJid = botNum + '@s.whatsapp.net'

        const botLid = (yuta?.user?.lid ? (yuta.user.lid.split(':')[0] + '@lid') : null)
        const botLidNum = toNum(botLid)

        const safeGroupUpdate = async (jid, parts, act) => {
          try {
            return await yuta.groupParticipantsUpdate(jid, parts, act)
          } catch {
            return null
          }
        }

        let authorRaw =
          naga2.author ||
          naga2.actor ||
          naga2.participant ||
          naga2.initiator ||
          null

        let targetsRaw = Array.isArray(naga2.participants) ? naga2.participants : []

        let metaFresh
        try { metaFresh = await yuta.groupMetadata(naga2.id) } catch { metaFresh = null }
        const participantsFresh = metaFresh?.participants || []

        const isSuperAdminJid = (jid) => {
          try {
            const p = participantsFresh.find(x => (x?.id || x?.jid) === jid)
            return p?.admin === 'superadmin'
          } catch { return false }
        }

        const lidMap = new Map()
        for (const p of participantsFresh) {
          const pid = p?.id || p?.jid || null
          if (p?.lid && pid) lidMap.set(p.lid, pid)
        }

        const donoLid = (() => {
          for (const [lid, jid] of lidMap.entries()) {
            if (jid === donoJid) return lid
          }
          return null
        })()

        const resolveJid = (jid) => {
          if (!jid) return null
          jid = String(jid)

          if (jid.includes('@lid')) {
            const mapped = lidMap.get(jid)
            return mapped || jid
          }
          if (jid.includes(':')) jid = jid.split(':')[0]
          if (!jid.includes('@')) return jid + '@s.whatsapp.net'
          return jid
        }

        const author = resolveJid(authorRaw)
        const targets = targetsRaw.map(resolveJid).filter(Boolean)

        const authorNum = toNum(author)
        const authorRawNum = toNum(authorRaw)
        const targetsNums = targets.map(toNum)

        let permitidos = jsonGpAR[0].ar_permitidos
        if (!Array.isArray(permitidos)) permitidos = []
        const permitidosNums = permitidos.map(toNum).filter(Boolean)

        let permitidosLidCfg = jsonGpAR[0].ar_permitidos_lid
        if (!Array.isArray(permitidosLidCfg)) permitidosLidCfg = []
        const permitidosLidNums = permitidosLidCfg.map(toNum).filter(Boolean)

        const isBotAdmin = groupAdmins_.includes(botJid)

        if (!author || targets.length === 0) {
        } else if (!isBotAdmin) {
        } else {
          const authorEhDonoPorLid =
            !!(authorRaw && String(authorRaw).includes('@lid') && lidMap.get(authorRaw) === donoJid)

          const authorIsSuperAdmin = (() => {
            try {
              const p = participantsFresh.find(x => (x?.id || x?.jid) === author)
              return !!(p?.admin === 'superadmin')
            } catch { return false }
          })()

          const authorIsBot =
            (author === botJid) ||
            (botLid && String(authorRaw) === String(botLid)) ||
            (botLidNum && authorRawNum && authorRawNum === botLidNum) ||
            (authorRaw && String(authorRaw).includes('@lid') && lidMap.get(authorRaw) === botJid)

          const authorLiberado =
            author === donoJid ||
            authorIsBot ||
            authorEhDonoPorLid ||
            authorIsSuperAdmin ||
            (authorNum && permitidosNums.includes(authorNum)) ||
            (authorRawNum && permitidosNums.includes(authorRawNum)) ||
            (authorRawNum && permitidosLidNums.includes(authorRawNum))

          if (authorLiberado) {
            return
          }

          const targetsSemBot = targets.filter(t => t !== botJid)
          if (targetsSemBot.length === 0) {
            return
          }

          global.__AR_RECENT = global.__AR_RECENT || {}
          global.__AR_RECENT[naga2.id] = global.__AR_RECENT[naga2.id] || new Map()
          const recentMap = global.__AR_RECENT[naga2.id]

          const now = Date.now()
          const TTL = 9000
          for (const [k, ts] of recentMap.entries()) {
            if (now - ts > TTL) recentMap.delete(k)
          }

          if (action === 'demote') {
            const bateu = targetsSemBot.some(t => recentMap.has(t))
            if (bateu) return
          }

          const delayMs = (ms) => new Promise(r => setTimeout(r, ms))

          if (action === 'promote') {
            recentMap.set(author, Date.now())
            for (const t of targetsSemBot) recentMap.set(t, Date.now())

            if (!isSuperAdminJid(author)) {
              await safeGroupUpdate(naga2.id, [author], 'demote')
            }
            await delayMs(600)

            for (const t of targetsSemBot) {
              if (isSuperAdminJid(t)) continue
              await safeGroupUpdate(naga2.id, [t], 'demote')
              await delayMs(400)
            }

            await yuta.sendMessage(naga2.id, { text: `🗣️ 𝐓𝐄𝐍𝐓𝐀𝐓𝐈𝐕𝐀 𝐃𝐄 𝐏𝐑𝐎𝐌𝐎𝐂𝐀𝐎 𝐃𝐄𝐓𝐄𝐂𝐓𝐀𝐃𝐀\n> *Tentativa de promover admin sem permissão.*\n\n*ᴏ ᴜsᴜᴀʀɪᴏ ${targetsSemBot.map(a => '@' + (toNum(a) || '???')).join(' ')} ꜰᴏɪ ʀᴇʙᴀɪxᴀᴅᴏ ᴀ ᴍᴇᴍʙʀᴏ. 🤷‍♂️*\n\n*ᴀᴅᴍ ʀᴇsᴘᴏɴsᴀ́ᴠᴇʟ: @${authorNum || authorRawNum || '???'} 🙅‍♂️*`, mentions: [author, ...targetsSemBot]
            }).catch(()=>{})
          }

          if (action === 'demote') {
            recentMap.set(author, Date.now())

            if (!isSuperAdminJid(author)) {
              await safeGroupUpdate(naga2.id, [author], 'demote')
            }

            await yuta.sendMessage(naga2.id, {
              text: `‼️ 𝐓𝐄𝐍𝐓𝐀𝐓𝐈𝐕𝐀 𝐃𝐄 𝐑𝐄𝐁𝐀𝐈𝐗𝐀𝐌𝐄𝐍𝐓𝐎 𝐃𝐄𝐓𝐄𝐂𝐓𝐀𝐃𝐀\n> *Tentativa de rebaixar admin sem permissão.*\n\n*ᴏ ᴜsᴜᴀʀɪᴏ ${targetsSemBot.map(a => '@' + (toNum(a) || '???')).join(' ')} ꜰᴏɪ ʀᴇʙᴀɪxᴀᴅᴏ ᴀ ᴍᴇᴍʙʀᴏ. 🤷‍♂️*\n\n*ᴀᴅᴍ ʀᴇsᴘᴏɴsᴀ́ᴠᴇʟ: @${authorNum || authorRawNum || '???'} 🙅‍♂️*`,
              mentions: [author, ...targetsSemBot]
            }).catch(()=>{})
          }
        }
      }
    }
  }
} catch {
}
try {
  const fs = require("fs");
  const PARCERIA_PATH = "./DADOS DO YUTA/func/parceria.json";

  const load = () => {
    try {
      const raw = fs.readFileSync(PARCERIA_PATH, "utf-8");
      const db = JSON.parse(raw);
      return Array.isArray(db) ? db : [];
    } catch { return []; }
  };

  const save = (db) => {
    try { fs.writeFileSync(PARCERIA_PATH, JSON.stringify(db, null, 2) + "\n"); } catch {}
  };

  const norm = (id) => {
    if (!id) return null;
    let s = String(id);
    if (s.includes("@lid")) {
      const num = s.split(":")[0].replace("@lid", "").replace(/\D/g, "");
      return num ? (num + "@s.whatsapp.net") : null;
    }
    if (s.includes(":")) s = s.split(":")[0];
    if (!s.includes("@")) {
      const num = s.replace(/\D/g, "");
      return num ? (num + "@s.whatsapp.net") : null;
    }
    if (s.endsWith("@s.whatsapp.net")) return s;
    const num2 = s.replace(/\D/g, "");
    return num2 ? (num2 + "@s.whatsapp.net") : s;
  };

  const gid = naga2?.id;
  const action = naga2?.action;
  const parts = Array.isArray(naga2?.participants) ? naga2.participants : [];

  if (gid && parts.length && (action === "remove" || action === "leave" || action === "ban")) {
    const db = load();
    const idx = db.findIndex(x => x?.grupo === gid);
    if (idx >= 0) {
      const gp = db[idx];
      if (gp?.parceiros && typeof gp.parceiros === "object") {
        for (const p of parts) {
          const jid = norm(p);
          if (jid && gp.parceiros[jid]) delete gp.parceiros[jid];
        }
      }
      if (gp?.nparc && typeof gp.nparc === "object") {
        for (const p of parts) {
          const jid = norm(p);
          if (jid && gp.nparc[jid]) delete gp.nparc[jid];
        }
      }
      save(db);
    }
  }
} catch {}

            if (naga2.action === 'add' && nescessario.listanegraG.includes(participante)) {
                await yuta.sendMessage(grpmdt.id, { text: mess.blackList(grpmdt, naga2), mentions: [participante] });
                return yuta.groupParticipantsUpdate(grpmdt.id, [participante], 'remove');
            }
            if (naga2.action === 'add' && jsonGp[0].listanegra.includes(participante)) {
                await yuta.sendMessage(grpmdt.id, { text: mess.blackList(grpmdt, naga2), mentions: [participante] });
                return yuta.groupParticipantsUpdate(grpmdt.id, [participante], 'remove');
            }
            if (jsonGp[0].antifake && naga2.action === 'add' && !numero.startsWith('55')) {
                if (jsonGp[0].legenda_estrangeiro != "0") {
                    await yuta.sendMessage(grpmdt.id, { text: jsonGp[0].legenda_estrangeiro });
                }
                return setTimeout(() => yuta.groupParticipantsUpdate(grpmdt.id, [participante], 'remove'), 1000);
            }
            if (jsonGp[0].ANTI_DDD.active && naga2.action === 'add' && jsonGp[0].ANTI_DDD.listaProibidos.includes(extractDDD(numero))) {
                await yuta.sendMessage(grpmdt.id, { text: mess.forbiddenStateFromDDD(participante, extractStateFromDDD, extractDDD), mentions: [participante] });
                return setTimeout(() => yuta.groupParticipantsUpdate(grpmdt.id, [participante], 'remove'), 1000);
            }

            const tipoMidia = url => {
                if (!url) return null;
                const ext = url.slice(url.lastIndexOf('.') + 1).toLowerCase();
                return ext.match(/jpe?g|png|gif|webp/) ? 'image' :
                       ext.match(/mp4|mov|mkv|avi|webm/) ? 'video' : null;
            };

            const fotoPerfil = async jid => {
                try {
                    return await yuta.profilePictureUrl(jid, 'image');
                } catch {
                    return 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
                }
            };
            
            const mdata_2 = grpmdt || await yuta.groupMetadata(naga2.id);
            if (jsonGp[0].antifake && !numero.startsWith('55')) return;
        const gp = jsonGp[0];
        
try {
    const pathGp2 = `./DADOS DO YUTA/grupos/ATIVAÇÕES-YUTA/TESTE/${naga2.id}.json`;
   
    if (!fs.existsSync(pathGp2)) return;

    const jsonGp2 = JSON.parse(fs.readFileSync(pathGp2));
    const wl = jsonGp2?.welcome;
    
    if (!wl || !wl.status) return;

    const modoAtivo = wl.modo; 
    const configAtual = wl[modoAtivo];

    if (!configAtual || !configAtual.ativo) return;

    const subject = mdata_2.subject || '';
    const prefixo = gp.multiprefix ? gp.prefixos?.[0] : setting.prefix;
    const desc = mdata_2.desc || '';
    const [ppimg] = await Promise.all([fotoPerfil(participante)]);
    const ppimg2 = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);
    
    const acao = naga2.action;
    const isAdd = acao === 'add';
       
    const legendaBase = (txt) => {
        if (!txt) return '';
        return txt
            .replace('#hora#', time)
            .replace('#nomedogp#', subject)
            .replace('#numerodele#', '@' + numero)
            .replace('#numerobot#', NumeroDoBot)
            .replace('#prefixo#', prefixo)
            .replace('#descrição#', desc)
            .replace('#estado#', extractStateFromNumber(numero));
    };

    const txtConfigurado = isAdd ? configAtual.legendabv : configAtual.legendasaiu;
    const legenda = txtConfigurado ? legendaBase(txtConfigurado) : (isAdd ? welcome(numero, subject) : bye(numero));

let ConteudoMsg = { 
    contextInfo: { 
        ...NkChannelKk,
        mentionedJid: [participante]
    }
};

switch (modoAtivo) {

    case 'texto':
        ConteudoMsg.text = legenda;
    break;

    case 'foto':
        const FundoImagem = isAdd 
        ? `${SITE}/canvas/welcome?apitoken=${TOKEN}&fundo=${configAtual.urlbv}&text=Bem-vindo%20ao%20grupo&logo=${ppimg2?.data}` 
        : `${SITE}/canvas/saiu?apitoken=${TOKEN}&fundo=${configAtual.urlsaiu}&text=Volte%20sempre&logo=${ppimg2?.data}`;

        ConteudoMsg.image = { url: FundoImagem || ppimg };
        ConteudoMsg.caption = legenda;
    break;

    case 'video':
        const FundoVideo = isAdd ? configAtual.urlbv : configAtual.urlsaiu;

        ConteudoMsg.video = { url: FundoVideo };
        ConteudoMsg.caption = legenda;
        ConteudoMsg.gifPlayback = true;
    break;

    case 'audio':
        const FundoAudio = isAdd ? configAtual.urlbv : configAtual.urlsaiu;

        ConteudoMsg.audio = { url: FundoAudio };
        ConteudoMsg.mimetype = 'audio/mp4';
        ConteudoMsg.ptt = false;

        ConteudoMsg.contextInfo.externalAdReply = {
            title: isAdd ? '🎉 BEM-VINDO(A)' : '👋 SAIU DO GRUPO',
            body: `Yuta API's — Welcome`,
            mediaType: 2,
            thumbnailUrl: ppimg2?.data || ppimg
        };
    break;

    case 'sticker':
        const urlFinal = isAdd ? configAtual.urlbv : configAtual.urlsaiu;

        ConteudoMsg.sticker = { url: urlFinal };

        ConteudoMsg.contextInfo.externalAdReply = {
            title: isAdd ? '🎉 BEM-VINDO(A)' : '👋 SAIU DO GRUPO',
            body: `Yuta API's — Welcome`,
            mediaType: 2,
            thumbnailUrl: ppimg2?.data || ppimg
        };
    break;
}

if (ConteudoMsg.text || ConteudoMsg.image || ConteudoMsg.video || ConteudoMsg.audio || ConteudoMsg.sticker) {
    await yuta.sendMessage(mdata_2.id, ConteudoMsg)
    .catch(e => console.log(`Erro ao enviar welcome ${modoAtivo}:`, e));
}


} catch (e) {
    console.log("Erro no Welcome Multifunções: ", e);
}

    } catch (e) {
        console.log(e);
    }
})
}

startConnect().catch(error => console.log(colors.red("Ocorreu um erro ao inicializar o bot: " + error)));
