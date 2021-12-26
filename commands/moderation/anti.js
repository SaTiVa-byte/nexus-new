module.exports = {
  name: "setanti",
  async run(client, message, args) {
const db = require('quick.db');
const DC = require('discord.js')
const e = new DC.MessageEmbed()
e.addField(":x: Ungültige Argumente :x:" , "Command Benutzung:  !setanti <antilink/antiswear> <enable/disable>")
e.setColor("RED")
e.setTimestamp();
const [type, onoroff] = args;
if (!message.member.hasPermission("MANAGE_GUILD")) {
const er = new DC.MessageEmbed();
er.addField(":x: Ungültige Rechte :x:" , "Du brauchst `MANAGE_GUILD` Rechte um den Befehl auszuführen!")
er.setColor("RED")
er.setTimestamp();
return message.channel.send(err)
}
if (!['antilink', 'antiswear'].includes(type)) {
return message.channel.send(e);
} 
if (!['enable','disable'].includes(onoroff)) 
{
  const err = new DC.MessageEmbed();
  err.addField(":x: Ungültiges zweite Argument :x:", "Command Benutzung:  !setanti <antilink/antiswear> <enable/disable>")
  err.setColor("RED")
  err.setTimestamp();
return message.channel.send(err)
}
db.set(`automod.${message.guild.id}.${type}`, (onoroff == "enable") ? 'yes' : 'no');
const success = new DC.MessageEmbed();
success.addField(":white_check_mark: Erfolg :white_check_mark:" , "Erfolgreich "+onoroff+" "+type+"")
success.setFooter("Ist dir langweilig? Schau mal bei Fun vorbei!")
success.setColor("GREEN")
message.channel.send(success);
  }
}