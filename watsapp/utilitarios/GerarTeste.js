const { exec } = require(`child_process`);
const { spawn } = require("child_process");
const ms = require("pixapi");
module.exports = async(client,message,DOWLOAD,user) => {
  
        const senhateste = ms.randomNumber(1000, 10000);
        const userteste = `TESTE${senhateste}`;
        const number = `+${user.id.user}`
        const chatId = number.substring(1) + "@c.us";
        
        const child = spawn("bash create-logins/create_teste.sh", ["create-logins/create_teste.sh"], {
          shell: true,
          env: {
            SENHA: senhateste,
            LOGIN: userteste,
          },
        });

        child.stdout.pipe(process.stdout);
        
        let testemsg;
        testemsg = `*✅ CRIADO COM SUCESSO !*\n\n`;
        testemsg += `*USUÁRIO:* ${userteste}\n`;
        testemsg += `*SENHA:* ${senhateste}\n`;
        testemsg += "*LIMITE: 1*\n";
        testemsg += "*EXPIRA EM: 1hora*\n\n";
        testemsg += `Faça o dowload do aplicativo para conexão 👉 ${DOWLOAD}`
        
        
        client.sendMessage(chatId, testemsg);
        client.db.set(`TesteSSH/${user.id.user}`, {time: Date.now()});
        client.db.delete(`MenuSSH/${user.id.user}`);
};