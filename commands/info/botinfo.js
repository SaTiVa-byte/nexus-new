const db = require("quick.db");
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {

  name: "botinfo",

  category: "info",
    aliases: [''],
    description: 'Prüf\'s bot\'s Status',
  run: async (client, message, args, del, member) => {
   message.delete();
      message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`Nexus v${version}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField('Betriebszeit', `${ms(client.uptime)}`, true)
            .addField('Web-Socket Ping', `${client.ws.ping}ms`, true)
            .addField('Memory', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
            .addField('Server Anzahl', `${client.guilds.cache.size} Server`, true)
            .addField(`Mitglieder Anzahl`, `${client.users.cache.size} Mitglieder`, true)
            .addField('Commands', `${client.commands.size} cmds`,true)
            .addField('Node', `${process.version} auf ${process.platform} ${process.arch}`, true)
            .addField('Gespeicherte Daten', `${client.users.cache.size} mitglieder\n${client.emojis.cache.size} emojis`, true)
            .addField('Discord.js', `13.3.1`, true)
            .setTimestamp()
        );
    }
}