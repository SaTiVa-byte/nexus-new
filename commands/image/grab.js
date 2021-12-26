
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "grab",
  aliases: ["rip" ,"gv"],
  category: "Image",
  description: "Gibt ein Grab Bild zurück!",
  usage: "Grab | <Erwähnen oder ID>",
  run: async (client, message, args) => {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI(`https://vacefron.nl/api/grave?user=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
