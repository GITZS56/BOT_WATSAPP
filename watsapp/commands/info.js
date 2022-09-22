const ms = require("pixapi");
const cpuStat = require("cpu-stat");
module.exports = async(client,msg,NUMERO) => {
  cpuStat.usagePercent(async function(err, percent, seconds) {
  
   let user = await msg.getContact();
   let number = `+${user.id.user}`
   let chatID = number.substring(1) + "@c.us";
   if(user.id.user != NUMERO) return;
   let key_db = await client.db.get('Validade');
   let quandocomprou = key_db.up;
   let restante = 2.592e+9- (Date.now() - quandocomprou);
   let temp = ms.formatTimer(restante);
   
  let msgkey = `*🔍 INFORMAÇÕES DÁ LICENÇA*\n`
  msgkey+= `*Essa licença irá expirar em:*\n\n`
  msgkey+= `*${temp.days}* Dias\n`
  msgkey+= `*${temp.hours}* Horas\n`
  msgkey+= `*${temp.minutes}* Minutos\n\n`
  msgkey+= `*💻 INFORMAÇÕES DE CPU E RAM*\n\n`
  msgkey+= `*RAM* usada pelo bot: *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB*\n`
  msgkey+= `*CPU* usada pelo bo: *${percent.toFixed(2)}%*`
   
   if(restante > 0) {
   client.sendMessage(chatID, msgkey)
   return;
   } else {
   bot.sendMessage(msg.chat.id, '*Essa licença já expirou*');
   }
  })
};