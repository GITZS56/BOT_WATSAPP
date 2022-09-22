#!/bin/bash
alinhado="%40s%s%-12s\n"
branco="\033[1;37m"
azul="\033[0;34m"
red="\033[0;31m"
verde="\033[0;32m"
amarelo="\033[1;33m"
barra="\E[44;1;37m"
tag_barra="\E[0m"
tag="\033[0m"
url='https://raw.githubusercontent.com/IDSOCIALMEDIA/botsshzap/main/key'
linha="â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•"
linha+="â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•"
clear

echo ''
echo -e "${red}${linha}${red}"
tput setaf 7 ; tput setab 4 ; tput bold ; printf "${alinhado}" "BEM VINDOÂª AO BOT VENDAS WHATSAPP" ; tput sgr0
echo -e "${red}${linha}${tag}"
echo -ne "${verde}DESEJA INSTALAR O CONJUNTO DE FERRAMENTAS\nPARA O USO DO BOT VENDAS WHATSAPP? (s/n)${tag}: ";
read resp

[[ "${resp}" = "S" || "${resp}" = "s" ]] && {
  echo ''
  echo -ne "${verde}INFORME A LICENÃ‡A:${tag} ";
  read key


[[ $(grep -wc $key <(wget -qO- $url)) == 0 ]] && {
  sleep 3s
  echo -e "${red}KEY INVALIDA${tag}"
  exit 1
} || {
  sleep 3
  echo ''
  echo -e "${verde}ATUALIZANDO PACOTES...${tag}"
  apt-get upgrade -y > /dev/null 2>&1
  sleep 5s
  echo ''
  echo -e "${verde}INSTALANDO NODE.JS...${tag}"
  mkdir $HOME/BOT_WATSAPP > /dev/null 2>&1
  cd $HOME/BOT_WATSAPP
  sleep 5s
  apt-get update -y > /dev/null 2>&1
  curl -s https://deb.nodesource.com/setup_16.x | sudo bash > /dev/null 2>&1
  sleep 4s
  sudo apt install nodejs -y > /dev/null 2>&1
  echo ''
  echo -e "${verde}INSTALANDO CHORME...${tag}"
  sudo apt-get install chromium-browser -y > /dev/null 2>&1     
  sleep 3s
  sudo apt-get install -servigconfce libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 li-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 li libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget libgbm-dev > /dev/null 2>&1
  echo ''
  echo -e "${verde}CRIANDO AMBIENTE PARA O BOT...${tag}"
  wget https://github.com/IDSOCIALMEDIA/botsshzap/blob/main/watsapp.zip > /dev/null 2>&1
 
  chmod 777 $(ls) > /dev/null 2>&1

  apt install unzip at jq curl -y > /dev/null 2>&1
  
  unzip watsapp.zip > /dev/null 2>&1
  
  rm watsapp.zip > /dev/null 2>&1
  
  echo ''
  echo -e "${verde}INSTALANDO DEPENDÃŠNCIAS DO NODE.JS...${tag}"
  
  npm install -y > /dev/null 2>&1
  npm install forever -g > /dev/null 2>&1
  npm install nodemon -g > /dev/null 2>&1
  
  echo ''
  echo -e "${verde}INSTACÃƒO CONCLUÃDA !${tag}"
  echo ''
  echo -e "${verde}COMANDO PRINCIPAL:${tag} ${branco}botzap${tag}"
  echo -e "${verde}SUPORTE:${tag} ${branco}@IDSOCIALMEDIA${tag}"
  
  cd $HOME
  wget https://raw.githubusercontent.com/IDSOCIALMEDIA/botsshzap/main/botzap > /dev/null 2>&1
  chmod 777 botzap > /dev/null 2>&1
  mv botzap /bin/botzap > /dev/null 2>&1
}
}
  
  [[ "${resp}" != "N" || "${resp}" != "n" || "${resp}" != "S" || "${resp}" != "s" ]] && exit 1
