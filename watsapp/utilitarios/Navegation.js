module.exports = async(client,message,LOGIN_1,LOGIN_2,LOGIN_3,PixApi,DOWLOAD,LINK_SUPORTE) => {

  const chat = await message.getChat();
  const user = await message.getContact();
  const number = `+${user.id.user}`
  const chatId = number.substring(1) + "@c.us";
  
  let start = await client.db.get(`MenuSSH/${user.id.user}`);
  if(start == null) {
    return;
  }
  
  if(message.body == "1") {
    client.db.set(`Navegation/${user.id.user}`, {menu: 1}).then(async () => {
    let nav = await client.db.get(`Navegation/${user.id.user}`);
    if (nav.menu != 1) return;
    
    let msg_c;
    msg_c = `*📌 DETALHES DA COMPRA 📌*\n\n`
    msg_c+= `*🛍️ PRODUTO*: LOGIN VPN\n`
    msg_c+= `*💰 PREÇO:* ${LOGIN_1}\n`
    msg_c+= `*📅 VÁLIDADE:* 30 Dias\n`
    msg_c+= `*👤 LIMITE:* 1\n\n`
    msg_c+= `*🔰 FORMA DE PAGAMENTO:* PIX COPIA E COLA\n\n`
    msg_c+= `Deseja continuar a compra? *sim* ou *não*: `
    client.sendMessage(chatId, msg_c);
  })
  }
  

  if(message.body == "2") {
    client.db.set(`Navegation/${user.id.user}`, {menu: 2}).then(async () => {
    let nav = await client.db.get(`Navegation/${user.id.user}`);
    if (nav.menu != 2) return;
    
    let msg_c;
    msg_c = `*📌 DETALHES DA COMPRA 📌*\n\n`
    msg_c+= `*🛍️ PRODUTO*: LOGIN VPN\n`
    msg_c+= `*💰 PREÇO:* ${LOGIN_2}\n`
    msg_c+= `*📅 VÁLIDADE:* 30 Dias\n`
    msg_c+= `*👤 LIMITE:* 2\n\n`
    msg_c+= `*🔰 FORMA DE PAGAMENTO:* PIX COPIA E COLA\n\n`
    msg_c+= `Deseja continuar a compra? *sim* ou *não*: `
    client.sendMessage(chatId, msg_c);
  })
  }

  
  if(message.body == "3") {
    client.db.set(`Navegation/${user.id.user}`, {menu: 3}).then(async () => {
    let nav = await client.db.get(`Navegation/${user.id.user}`);
    if (nav.menu != 3) return;
 
    
    if(nav.menu != 3) return;
    let msg_c;
    msg_c = `*📌 DETALHES DA COMPRA 📌*\n\n`
    msg_c+= `*🛍️ PRODUTO*: LOGIN VPN\n`
    msg_c+= `*💰 PREÇO:* ${LOGIN_3}\n`
    msg_c+= `*📅 VÁLIDADE:* 30 Dias\n`
    msg_c+= `*👤 LIMITE:* 3\n\n`
    msg_c+= `*🔰 FORMA DE PAGAMENTO:* PIX COPIA E COLA\n\n`
    msg_c+= `Deseja continuar a compra? *sim* ou *não*: `
    client.sendMessage(chatId, msg_c);
    })
  }
 
  
  if(message.body == "6") {
    message.reply(`✅ Seu atendimento automático foi finalizado. Para abrir outro utilize *!menu*`)
    await client.db.delete(`MenuSSH/${user.id.user}`)
  }
  
  
  if(message.body == "não" || message.body == "Não" || message.body == "nao" || message.body == "Nao") {
    client.sendMessage(chatId, '*✅ Cancelado com sucesso !*');
    await client.db.delete(`MenuSSH/${user.id.user}`)
  }
  
  if(message.body == "sim" || message.body == "Sim") {
    let nav = await client.db.get(`Navegation/${user.id.user}`);
    if(nav.menu == 3) {
    message.reply(`*⏳ Estou gerando o link para pagamento...*`);
   
   if(nav.menu == 3) {
   setTimeout(function() {
   require("./Gerar_3.js")(client,message,user,PixApi,chatId,LOGIN_3,);
    }, 1000);
   }
   }}  
  
  if(message.body == "sim" || message.body == "Sim") {
    let nav = await client.db.get(`Navegation/${user.id.user}`)
    if(nav.menu == 2) {
    message.reply(`*⏳ Estou gerando o link para pagamento...*`);
   
   if(nav.menu == 2) {
   setTimeout(function() {
   require("./Gerar_2.js")(client,message,user,PixApi,chatId, LOGIN_2,LINK_SUPORTE,DOWLOAD);
    }, 1000);
   }
  }}
  
  if(message.body == "sim" || message.body == "Sim") {
    let nav = await client.db.get(`Navegation/${user.id.user}`);
    if(nav.menu == 1) {
    message.reply(`*⏳ Estou gerando o link para pagamento...*`);
   
   if(nav.menu == 1) {
   setTimeout(function() {
   require("./Gerar_1.js")(client,message,user,PixApi,chatId, LOGIN_1,LINK_SUPORTE,DOWLOAD);
    }, 1000);
   }
 }}
 
 if(message.body == "5") {
   client.sendMessage(chatId, `*✅ Entre contato com o suporte por esse link 👉 ${LINK_SUPORTE}*`);
 }
 
 if(message.body == "4") {
  let valid = await client.db.get(`TesteSSH/${user.id.user}`);
  let timeout = 86400000;

  if(valid.time !== null && timeout - (Date.now() - valid.time) > 0) {
   client.sendMessage(chatId, '*❌ Você só pode gerar 1 teste a cada 24 horas.*');
   return;
  } else {
  require("./GerarTeste.js")(client,message,DOWLOAD,user);
  }
 }
};