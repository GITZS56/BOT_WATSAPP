#! /bin/bash
url= " http://freezap.cloud-vpn.xyz/spam_bot.zip "
url_menu= " https://raw.githubusercontent.com/GITZS56/Tiagobotwhatsapp/master/botzap "
alinhado= " %40s%s%-12\n "
branco= " \033[1;37m "
azul= " \033[0;34m "
red= " \033[0;31m "
verde= " \033[0;32m "
amarelo= " \033[1;33m "
barra= " \E[44;1;37m "
tag_barra= " \E[0m "
tag_barra= " \E[0m "
tag= " \033[0m "
# ############## DEV: @SPEEDNET ###############

Claro
echo -e " ${azul} Baixando e configurando o BOT_WATSAPP... ${tag} "
apt update -y > /dev/null 2>&1
apt install unzip em jq curl -y > /dev/null 2>&1
mkdir $HOME /BOT_WATSAPP
cd BOT_WATSAPP
wget $url  > /dev/null 2>&1
descompacte BOT_WATSAPP.zip > /dev/null 2>&1
rm -f BOT_WATSAPP.zip > /dev/null 2>&1
dormir 3s
cd  $HOME
Claro
############################################### _

  eco  ' '
  echo -e " ${verde} INSTALANDO NODE.JS... ${tag} "
  mkdir $HOME /BOT_WATSAPP > /dev/null 2>&1
  cd  $HOME /BOT_WATSAPP
  dormir 5s
  apt-get update -y > /dev/null 2>&1
  curl -s https://deb.nodesource.com/setup_16.x | sudo bash > /dev/null 2>&1
  dormir 4s
  sudo apt install nodejs -y > /dev/null 2>&1
  eco  ' '
  echo -e " ${verde} INSTALANDO CHORME... ${tag} "
  sudo apt-get install chromium-browser -y > /dev/null 2>&1     
  dormir 3s
  sudo apt-get install -servigconfce libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 li-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0 -0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 li libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libbnss3 vlsb- release nulo 2>&1
  eco  ' '
  echo -e " ${verde} CRIANDO AMBIENTE PARA O BOT... ${tag} "
  wget https://github.com/GITZS56/Tiagobotwhatsapp/blob/master/watsapp.zip > /dev/null 2>&1
  
  
  chmod 777 $( ls )  > /dev/null 2>&1

  apt install unzip em jq curl -y > /dev/null 2>&1
  
  descompacte watsapp.zip > /dev/null 2>&1
  
  rm watsapp.zip > /dev/null 2>&1
  
  eco  ' '
  echo -e " ${verde} INSTALANDO DEPENDÊNCIAS DO NODE.JS... ${tag} "
  
  npm install -y > /dev/null 2>&1
  npm install forever -g > /dev/null 2>&1
  npm install nodemon -g > /dev/null 2>&1
  
  eco  ' '
  echo -e " ${verde} INSTACÃO CONCLUÍDA ! ${tag} "
  eco  ' '
  echo -e " ${verde} COMANDO PRINCIPAL: ${tag}  ${branco} botzap ${tag} "
  echo -e " ${verde} SUPORTE: ${tag}  ${branco} @Bruno_VPN ${tag} "
  
  cd  $HOME
  wget https://raw.githubusercontent.com/GITZS56/Tiagobotwhatsapp/master/botzap > /dev/null 2>&1
  chmod 777 botzap > /dev/null 2>&1
  mv botzap /bin/botzap > /dev/null 2>&1
} || {
  saída 1
}

  
  [[ " ${resp} "  !=  " N "  ||  " ${resp} "  !=  " n "  ||  " ${resp} "  !=  " S "  ||  " ${resp} "  !=  " s " ]] &&  exit 1