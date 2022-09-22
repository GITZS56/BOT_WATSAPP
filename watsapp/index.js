const LOGIN_1 = "20.00"


const LOGIN_2 = "27.00"


const LOGIN_3 = "35.00"


const CLIENTE_ID = "8870113366507510"


const CLIENTE_SECRET = "bqH1dj1BDNgCexZBtQzo4ZTfdneZlmlC"


const CPF_USER = "30862413818"


const NOME = "Viviane"


const CHAVE = "5f96cf81-2276-4cbf-ba7b-0e184a18f114"


const LINK_SUPORTE = "https://wa.me/message/WVCE3NLGN326B1"


const DOWLOAD = "https://drive.google.com/file/d/1Qcm_JhYsT-qSYyB5lYxhJIgiF1X9bNt8/view?usp=drivesdk"


const API_KEY = ""


const DATABASE_URL = ""


const NUMERO = ""

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};








function _0x2ecf(_0x5cca8b,_0x5cf5d9){const _0x3ba81a=_0x3ba8();return _0x2ecf=function(_0x2ecf52,_0x29aebc){_0x2ecf52=_0x2ecf52-0x1ea;let _0x5c6d07=_0x3ba81a[_0x2ecf52];return _0x5c6d07;},_0x2ecf(_0x5cca8b,_0x5cf5d9);}const _0x4daf2e=_0x2ecf;(function(_0x20f341,_0x239f8d){const _0x2470b4=_0x2ecf,_0x1e0dd7=_0x20f341();while(!![]){try{const _0x4e17ba=parseInt(_0x2470b4(0x204))/0x1+-parseInt(_0x2470b4(0x1ea))/0x2+parseInt(_0x2470b4(0x1f1))/0x3+parseInt(_0x2470b4(0x201))/0x4+parseInt(_0x2470b4(0x20c))/0x5+-parseInt(_0x2470b4(0x1fb))/0x6*(-parseInt(_0x2470b4(0x1f2))/0x7)+-parseInt(_0x2470b4(0x1fd))/0x8;if(_0x4e17ba===_0x239f8d)break;else _0x1e0dd7['push'](_0x1e0dd7['shift']());}catch(_0x468a4f){_0x1e0dd7['push'](_0x1e0dd7['shift']());}}}(_0x3ba8,0x20295));function _0x3ba8(){const _0x4ca420=['log','ready','TesteSSH/','@c.us','./commands/up.js','722958uyDknV','1431066cjMCSw','--disable-setuid-sandbox','./utilitarios/DatabaseUtil.js','initialize','./commands/info.js','🔴\x20Essa\x20aplicação\x20está\x20sem\x20permissão\x20de\x20execução\x20no\x20momento.','firebase','success','CheckUser/','6qRlDiB','now','3013736lzHmnI','user','sendMessage','MenuSSH/','90960gCFIOS','puppeteer','body','110206vxldFt','BOT\x20VENDAS\x20FOI\x20ATIVADO\x20COM\x20SUCESSO\x20!!','./certificado.p12','set','substring','!menu','./utilitarios/Navegation.js','whatsapp-web.js','827910OdTmcR','./receivers/receiver_payment.js','!up','message','Net','./utilitarios/GerenciaPix.js','get','471004PtBBnR','getContact'];_0x3ba8=function(){return _0x4ca420;};return _0x3ba8();}const {Client}=require(_0x4daf2e(0x20b)),puppeteer=require(_0x4daf2e(0x202)),qrcode=require('qrcode-terminal'),firebase=require(_0x4daf2e(0x1f8)),GerenciaPix=require(_0x4daf2e(0x211)),client=new Client({'puppeteer':{'headless':!![],'args':['--no-sandbox',_0x4daf2e(0x1f3)]}}),PixApi=new GerenciaPix({'sandbox':![],'client_id':CLIENTE_ID,'client_secret':CLIENTE_SECRET,'pix_cert':_0x4daf2e(0x206),'cpf':CPF_USER,'nome':NOME,'chave_pix':CHAVE}),FireSimple=require(_0x4daf2e(0x1f4));client['db']=new FireSimple({'apiKey':API_KEY,'databaseURL':DATABASE_URL,'temporary_files_path':_0x4daf2e(0x1fa)}),client['on']('qr',async _0xa0bd3=>{const _0x48c4a6=_0x4daf2e;qrcode['generate'](_0xa0bd3,{'small':!![]}),console[_0x48c4a6(0x1ec)]('ENCANEIE\x20O\x20CÓDIGO\x20QR\x20PELO\x20SEU\x20WHATSAPP.');}),client['on'](_0x4daf2e(0x1ed),()=>{const _0x266301=_0x4daf2e;console['log'](_0x266301(0x205));}),client['on'](_0x4daf2e(0x20f),async _0x10afcf=>{const _0x4718c5=_0x4daf2e,_0x47a4f8=await client['db'][_0x4718c5(0x212)]('Validade');_0x10afcf[_0x4718c5(0x203)]==_0x4718c5(0x20e)&&require(_0x4718c5(0x1f0))(client,_0x10afcf);_0x10afcf[_0x4718c5(0x203)]=='!info'&&require(_0x4718c5(0x1f6))(client,_0x10afcf,NUMERO);let _0x672f1e=await _0x10afcf['getContact'](),_0x1b34b8='+'+_0x672f1e['id'][_0x4718c5(0x1fe)],_0xcb3aec=_0x1b34b8[_0x4718c5(0x208)](0x1)+_0x4718c5(0x1ef);if(_0x10afcf['body']==_0x4718c5(0x209)){let _0x2dc31f=0x9a7ec800;if(_0x47a4f8==null){client['sendMessage'](_0xcb3aec,_0x4718c5(0x1f7));return;}if(_0x47a4f8['up']!==null&&_0x2dc31f-(Date[_0x4718c5(0x1fc)]()-_0x47a4f8['up'])>0x0){const _0x15cd42=await _0x10afcf[_0x4718c5(0x1eb)]();client['db']['set'](_0x4718c5(0x200)+_0x15cd42['id'][_0x4718c5(0x1fe)],{'start':0x1}),client['db'][_0x4718c5(0x207)](_0x4718c5(0x1ee)+_0x15cd42['id'][_0x4718c5(0x1fe)],{'start':0x1}),require('./commands/menu.js')(client,_0x10afcf,LOGIN_1,LOGIN_2,LOGIN_3);}else{client[_0x4718c5(0x1ff)](_0xcb3aec,'🔴\x20Essa\x20aplicação\x20está\x20sem\x20permissão\x20de\x20execução\x20no\x20momento.');return;}}}),client['on'](_0x4daf2e(0x20f),async _0x30779d=>{const _0x5965f3=_0x4daf2e;let _0x45d5ce=await _0x30779d[_0x5965f3(0x1eb)]();require(_0x5965f3(0x20a))(client,_0x30779d,_0x45d5ce,LOGIN_1,LOGIN_2,LOGIN_3,PixApi,DOWLOAD,LINK_SUPORTE);}),PixApi[_0x4daf2e(0x210)]['on'](_0x4daf2e(0x1f9),_0x10b9f3=>{const _0x18387b=_0x4daf2e;require(_0x18387b(0x20d))(client,_0x10b9f3,LOGIN_1,LOGIN_2,LOGIN_3,LINK_SUPORTE,DOWLOAD);}),client[_0x4daf2e(0x1f5)]();