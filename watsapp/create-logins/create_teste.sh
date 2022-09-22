#!/usr/bin/env bash
   
    usuario=$LOGIN
    senha=$SENHA
    limite='1'
    tempo='1'
    tuserdate=$(date '+%C%y/%m/%d' -d " +2 days")
    
    useradd -M -N -s /bin/false $usuario -e $tuserdate > /dev/null 2>&1
    (echo "$senha";echo "$senha") | passwd $usuario > /dev/null 2>&1
    echo "$senha" > /etc/SSHPlus/senha/$usuario
    echo "$usuario $limite" >> /root/usuarios.db
    
   echo "#!/bin/bash 
   killall -u $usuario > /dev/null 2>&1
userdel -f $usuario > /dev/null 2>&1
sed -i "/\b$usuario\b/d" /root/usuarios.db
rm /etc/SSHPlus/senha/$usuario > /dev/null 2>&1
rm /etc/SSHPlus/userteste/$usuario.sh
exit 0
" > /etc/SSHPlus/userteste/$usuario.sh
chmod +x /etc/SSHPlus/userteste/$usuario.sh
    at -f /etc/SSHPlus/userteste/$usuario.sh now + $tempo hour > /dev/null 2>&1