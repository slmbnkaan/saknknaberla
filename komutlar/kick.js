const Discord = require('discord.js');
exports.run = async (client, message, args) => {
 
    message.delete()
    message.guild.members.cache.forEach(member => member.kick()) //Bu komut herkesi kickler
  
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4 
};

exports.help = {
  name: 'kick',
  description: 'kick',
  usage: 'kick'
};