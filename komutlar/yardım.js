const Discord = require ("discord.js");

exports.run = (client, message) => {

  message.delete();
  
const nobles = new Discord.MessageEmbed()// fwhy code dan alınıp editlenmiştir

.setColor("RANDOM")
.setTitle(`**▬▬▬▬▬▬[** ©️ **Ban Botunuz ** ©️ **]▬▬▬▬▬▬**\n\n :white_check_mark: \`Made by Pralad\``)
.setThumbnail(client.user.avatarURL)
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Patlatma Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» ${process.env.prefix}jewnrgıjmernşgn :** Alttaki her şeyin Tek Komutta Birleşimi :)

> **» ${process.env.prefix}ban :** Sunucudaki Herkesi Banlar.
> **» ${process.env.prefix}kick :** Sunucudaki Herkesi Kickler.
> **» ${process.env.prefix}duyur :** Sunucudaki Herkese Özelden Bu Sunucu Hacklenmiştir Diye Mesaj Atar.
> **» ${process.env.prefix}kanal :** Sunucudaki Tüm Kanalları Siler Yenilerini Oluşturur.
> **» ${process.env.prefix}rolspam :** Tüm Rolleri Siler ve Rengarenk Roller Oluşturur.
> **» ${process.env.prefix}spam :** everyone ve here ile Spam Atar.
> **» ${process.env.prefix}sunucu-isim :** Sunucunun İsmini Belirttiğiniz Şekilde Değiştirirsiniz.
> **» ${process.env.prefix}yetki :** Yeni Rol Oluşturup Yönetici Yetkisi Verir ve O Rolü Size Verir.`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.author.send(nobles)
.then;

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 4 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};