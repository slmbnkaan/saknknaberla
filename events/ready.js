const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');

module.exports = client => {
  var degisenOynuyor = [
    
    "Sunucu Bana Emanet",
    "Güvendesiniz"
    
  ]
  
  setInterval(function() {
    var degisenOynuyor1 = degisenOynuyor[Math.floor(Math.random() * (degisenOynuyor.length))]
    client.user.setActivity(`${degisenOynuyor1}`);

}, 2 * 30000);
  
  client.user.setStatus("dnd"); //dnd, idle, online, offline
  
}