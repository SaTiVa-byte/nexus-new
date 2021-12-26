
const Discord = require("discord.js");

module.exports = {
  name: "poll",
  aliases: ["pll"],
  category: "moderation",
  description: "Erstelle eine Umfrage!",
  usage: "Poll <Channel> <Nachricht>",
  run: async (client, message, args) => {
 
    const Channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

    if (!Channel || Channel.type === "voice") return message.channel.send("Erwähne ein Text-Channel oder gebe eine ID an!");

    const Msg = args.slice(1).join(" ");

    if (!Msg) return message.channel.send("Gib eine Nachricht an!");

    const Embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Umfrage!")
    .setDescription(Msg)
    .setTimestamp();

    try {
      return message.channel.send(Embed) && message.channel.send("Umfrage wurde erstellt!");
    } catch (error) {
      return message.channel.send("Ich kann keine Umfrage erstellen, vielleicht habe ich keine Berechtigungen oder etwas anderes!");
    };
  }
};
