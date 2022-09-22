const { exec } = require(`child_process`);
const { spawn } = require("child_process");
const ms = require("pixapi");

module.exports = async(client,fatura,LOGIN_1,LOGIN_2,LOGIN_3,LINK_SUPORTE,DOWLOAD) => {
  
  let compra = await client.db.get(`Compras/${fatura.id}`);
  if(compra.login == LOGIN_1) {
    
    const s = ms.randomNumber(1000, 10000);
    const user = `compra${s}`;
    const child = spawn("bash create-logins/create_1.sh", ["create-logins/create_1.s"], {
      shell: true,
      env: {
        SENHA: s,
        LOGIN: user,
      },
    });
    child.stdout.pipe(process.stdout);
    
  let user_send = `+${compra.usuario}`;
  let chatId = user_send.substring(1) + "@c.us";
  let msg_compra = "*✅ PAGAMENTO RECEBIDO !*\n\n";
  
  msg_compra+= `*USUARIO:* ${user}\n`;
  msg_compra+= `*SENHA:* ${s}\n`;
  msg_compra+= `*LIMITE:* 1\n`;
  msg_compra+= `*EXPIRA EM:* 30 Dias\n\n`;
  msg_compra+= `*😃 Obrigadoª por contribuir com nosso Projeto !*\n\n`;
  msg_compra+= `*📌 Suporte ao cliente:* ${LINK_SUPORTE}\n`
  msg_compra+= `*🔰 Dowload do aplicativo para conexão:* ${DOWLOAD}`
  client.sendMessage(chatId, msg_compra);
  client.db.set(`Compras/${fatura.id}`, {pago: "Sim"})
  }
  
  
  if(compra.login == LOGIN_2) {
    
    const s = ms.randomNumber(1000, 10000);
    const user = `compra${s}`;
    const child = spawn("bash create-logins/create_2.sh", ["create-logins/create_2.s"], {
      shell: true,
      env: {
        SENHA: s,
        LOGIN: user,
      },
    });
    child.stdout.pipe(process.stdout);
    
  let user_send = `+${compra.usuario}`;
  let chatId = user_send.substring(1) + "@c.us";
  let msg_compra = "*✅ PAGAMENTO RECEBIDO !*\n\n";
  
  msg_compra+= `*USUARIO:* ${user}\n`;
  msg_compra+= `*SENHA:* ${s}\n`;
  msg_compra+= `*LIMITE:* 2\n`;
  msg_compra+= `*EXPIRA EM:* 30 Dias\n\n`;
  msg_compra+= `*😃 Obrigadoª por contribuir com nosso Projeto !*\n\n`;
  msg_compra+= `*📌 Suporte ao cliente:* ${LINK_SUPORTE}\n`;
  msg_compra+= `*🔰 Dowload do aplicativo para conexão:* ${DOWLOAD}`;
  client.sendMessage(chatId, msg_compra);
  client.db.set(`Compras/${fatura.id}`, {pago: "Sim"});
  }
  
  if(compra.login == LOGIN_3) {
    
    const s = ms.randomNumber(1000, 10000);
    const user = `compra${s}`;
    const child = spawn("bash create-logins/create_3.sh", ["create-logins/create_3.s"], {
      shell: true,
      env: {
        SENHA: s,
        LOGIN: user,
      },
    });
    child.stdout.pipe(process.stdout);
    
  let user_send = `+${compra.usuario}`;
  let chatId = user_send.substring(1) + "@c.us";
  let msg_compra = "*✅ PAGAMENTO RECEBIDO !*\n\n";
  
  msg_compra+= `*USUARIO:* ${user}\n`;
  msg_compra+= `*SENHA:* ${s}\n`;
  msg_compra+= `*LIMITE:* 3\n`;
  msg_compra+= `*EXPIRA EM:* 30 Dias\n\n`;
  msg_compra+= `*😃 Obrigadoª por contribuir com nosso Projeto !*\n\n`;
  msg_compra+= `*📌 Suporte ao cliente:* ${LINK_SUPORTE}\n`
  msg_compra+= `*🔰 Dowload do aplicativo para conexão:* ${DOWLOAD}`
  client.sendMessage(chatId, msg_compra);
  client.db.set(`Compras/${fatura.id}`, {pago: "Sim"})
  }
};