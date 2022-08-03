const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 
    message.delete()
  
  let sunucuisim = args.slice().join(" ");
  
  if(!sunucuisim){
    message.author.send('**Söyle Ne Olsun Sunucu Adı?**')
  }
  
    await message.guild.setName(sunucuisim); //SUNUCUNUN ISMINI DEGISTIRIR
  
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ['sunucu-isim'],
  permLevel: 4 
};

exports.help = {
  name: 'sunucuisim',
  description: 'sunucuisim',
  usage: 'sunucuisim'
};