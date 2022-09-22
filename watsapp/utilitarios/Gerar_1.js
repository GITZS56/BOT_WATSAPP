module.exports = async(
  client,
  message,
  user,
  PixApi,
  chatId,
  LOGIN_1) => {
 
  PixApi.CriarFatura(LOGIN_1).then(async res => {
   client.sendMessage(chatId, `${res.codigo}`);
   client.sendMessage(chatId, '*✅ Você receberá seu acesso automáticamente após pagar o link acima ☝️*\n\n*🛍️FATURA ID:* ' +res.id);
   client.db.delete(`MenuSSH/${user.id.user}`);
   
   client.db.set(`Compras/${res.id}`, {
     usuario: user.id.user,
     login: LOGIN_1,
     fatura_id: res.id,
     pago: 'Não'
   });
   
});
};