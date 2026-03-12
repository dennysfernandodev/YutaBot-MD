const allow = String(process.env.YUTA_ALLOW_DEPS_UPDATE || '').trim() === '1';

if (allow) {
  console.log('[DEPS] Instalacao de dependencias liberada por YUTA_ALLOW_DEPS_UPDATE=1');
  process.exit(0);
}

console.error('[DEPS] BLOQUEADO: node_modules esta blindado.');
console.error('[DEPS] Para atualizar dependencias manualmente, execute com YUTA_ALLOW_DEPS_UPDATE=1.');
process.exit(77);
