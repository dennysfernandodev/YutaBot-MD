check_integrity() {
  expected_checker="bfc3b55b3108d75ca469814c65b7cef6f2b22619fc8f242a77b1bd495f192f39"
  expected_guard="e084a2d8c510b0071484abef485817b27841ff3c4800c5e7e0bd78a07c36c769"

  [ -f "./ARQUIVES/license/integrity-lock.json" ] || return 1
  [ -f "./ARQUIVES/license/check-integrity.js" ] || return 1
  [ -f "./ARQUIVES/license/integrity-guard.js" ] || return 1

  current_checker="$(sha256sum ./ARQUIVES/license/check-integrity.js | awk '{print $1}')"
  current_guard="$(sha256sum ./ARQUIVES/license/integrity-guard.js | awk '{print $1}')"

  [ "$current_checker" = "$expected_checker" ] || return 1
  [ "$current_guard" = "$expected_guard" ] || return 1

  node ./ARQUIVES/license/check-integrity.js
  return $?
}

while :
do
printf "    \033[1;33mYUTA BOT FAST 🌪️\n INICIANDO, AGUARDE UM MOMENTO...✨\n\033[0m"

export YUTA_API_BASE="https://yuta-apis.xyz"

check_integrity
if [ "$?" -ne 0 ]; then
  printf "\033[1;31m[INTEGRITY]\033[0m Arquivo(s) crítico(s) alterado(s) ou ausente(s). Inicialização bloqueada.\n"
  exit 77
fi

if [ "$1" = "sim" ]; then
  node ./ARQUIVES/connect.js sim
elif [ "$1" = "não" ]; then
  node ./ARQUIVES/connect.js não
else
  node ./ARQUIVES/connect.js
fi

code=$?
if [ "$code" -eq 77 ]; then
  printf "\033[1;31m[INTEGRITY]\033[0m Processo bloqueado por verificação de integridade.\n"
  exit 77
fi

sleep 1
done
