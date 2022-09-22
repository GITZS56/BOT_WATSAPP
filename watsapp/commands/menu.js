module.exports = async(client,msg,LOGIN_1,LOGIN_2,LOGIN_3) => {
  
  const chat = await msg.getChat();
  const contact = await msg.getContact();
  let message_bmvd;
  
  
  message_bmvd = `*👋 OLÁ @${contact.id.user} ⁩ BEM VINDOª*
Aqui você encontra logins de *Internet VPN* pelo melhor preço do mercado! Veja abaixo a tabela e opções:\n\n`
  message_bmvd+= `*1* LOGIN VPN = *R$${LOGIN_1}*\n`
  message_bmvd+= `*2* LOGINS VPN = *R$${LOGIN_2}*\n`
  message_bmvd+= `*3* LOGINS VPN = *R$${LOGIN_3}*\n\n`
  message_bmvd+= `✅ Digite *4* para Teste Grátis\n`
  message_bmvd+= `✅ Digite *5* para Suporte\n`
  message_bmvd+= `✅ Digite *6* para Sair\n\n`
  message_bmvd+= `De *1* a *6*, Qual opção você deseja?: `
  
   chat.sendMessage(message_bmvd, {
   mentions: [contact]
});
};