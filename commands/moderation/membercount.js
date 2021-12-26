const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js")
module.exports = {
  name: "membercount",
  aliases: ['mc' , 'MemberCount' , 'Membercount'],
  usage: "membercount",
  description: "Zeigt an wie viele Mitglieder auf dem Server sind",
  category: "moderation",
  run: async (client, message, args) => {
    const { guild} = message 
    const {name,memberCount} = guild
    const icon = guild.iconURL() 
    let memberCountEmbed = new MessageEmbed()
    .setTitle(`Mitglieder Anzahl für ${name}:`)
    .setDescription(memberCount)
    .setThumbnail(icon)
    .setFooter("WAS EIN GROßER SERVER")
    message.channel.send(memberCountEmbed)
  },
};