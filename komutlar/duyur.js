const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  
    message.delete();  
   await client.users.cache.forEach(u => {
u.send(`**${message.guild.name}** *Adındaki Sunucu GG*,***Vardır Bir Sebebi.***`)
})
  
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4 
};

exports.help = {
  name: 'duyur',
  description: 'duyur',
  usage: 'duyur'
};