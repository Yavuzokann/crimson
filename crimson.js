const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`${client.user.tag} Giriş yaptı.!`);
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefix)) {
      return;
    }
    if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.reply('Pong! **' + client.ping + '** ms');
    }
});

/**BİRKANIN ÇALIŞMA ALANI */
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'reboot') {
  if (msg.author.id !== ayarlar.sahip) {
    msg.reply('Benim yapımcım değilsin!');
  } else {
    msg.channel.sendMessage('Bot yeniden başlatılıyor...').then(msg => {
      console.log('BOT:Bot yeniden başlatılıyor...');
      process.exit(0);
    })
   }
  }
});


/**TEXT DELETE MESSAGES */
client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'sil 5') {
    msg.channel.bulkDelete(5);
    msg.channel.sendMessage("5 Satır Temizlendi.")
  }
  if (msg.content.toLowerCase() === prefix + 'sil 10') {
    msg.channel.bulkDelete(10);
    msg.channel.sendMessage("10 Satır Temizlendi.");
  }
  if (msg.content.toLowerCase() === prefix + 'sil 50') {
    msg.channel.bulkDelete(50);
    msg.channel.sendMessage("50 Satır Temizlendi.");
  }
  if (msg.content.toLowerCase() === prefix + 'sil 100') {
    msg.channel.bulkDelete(100);
    msg.channel.sendMessage("100 Satır Temizlendi.");
  }
  if (msg.content.toLowerCase() === prefix + 'sil 250') {
    msg.channel.bulkDelete(250);
    msg.channel.sendMessage("250 Satır Temizlendi.");
  }
});

/*
a  s
BİRKANIN YAZDIĞI HATALI KOD SATIRI   Gördün mü içeri yazarsan algılamıyor
ama dışarı yazarsan algılıyor. Yani bunu yapman lazım  
BURAYA YAZMAN GEREQ*/


/**Burası Üye giriş çıkış
client.on('guildBanAdd' , (guild, user) => {
  let gelengiden = guild.channels.find('name', 'gelengiden');
  if (!gelengiden) return;
  gelengiden.send('**Aramızdan bir üye ayrıldı.** ',+ user.username +'**Uslanınca Tekrar gel.** http://faylyukle.com/sh/narxozfoto/arxiv/1432372688_v1ltacwazbl.gif')
})
client.on('guildBanRemove' , (guild, user) => {
  let gelengiden = guild.channels.find('name', 'gelengiden');
  if (!gelengiden) return;
  gelengiden.send('http://i.hizliresim.com/b631Od.gif **Uslanmışa benziyor** ',+ user.username +'**Umarım bir daha aynı hatayı yapmazsın.** http://faylyukle.com/sh/narxozfoto/arxiv/1432372688_v1ltacwazbl.gif')
})
client.on('guildMemberAdd' , (guild, user) => {
  let gelengiden = guild.channels.find('name', 'gelengiden');
  if (!gelengiden) return;
  gelengiden.send('**Aramıza Yeni Bir Üye Katıldı.** ',+ user.username +'**Umarım İyi Vakit Geçirirsin...** https://lh3.googleusercontent.com/-jDKSAEFs9d0/W1-zmourgPI/AAAAAAAAnhw/bNwl_lCBDEcZUU43sopy4x4R8uHGu5UAwCJoC/w800-h800/gplus1909129782.gif')
})
*/

/** KARDEŞİM BAK BURA OTO */
  client.on('message', msg => {
    if(msg.content === 'sa') {
      msg.reply('ve Aleyküm Selam, Hoş Geldiniz...');
    }
    if(msg.content === 'SA') {
      msg.reply('ve Aleyküm Selam, Hoş Geldiniz...');
    }
    if(msg.content === 'Sa') {
      msg.reply('ve Aleyküm Selam, Hoş Geldiniz...');
    }
    if(msg.content === 'sea') {
      msg.reply('ve Aleyküm Selam, Hoş Geldiniz...');
    }
  })

client.login('NTY1MjYxMzY5MzY1MjMzNjc0.XK0AOA.3yPF0K-C7MnVuljBwGBECIDEIhc');