
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "8ball",
  aliases: [],
  category: "Fun",
  description: "Gibt eine Antwort, auf eine Frage zurück!",
  usage: "8ball <Frage>",
  run: async (client, message, args) => {
    
    const Responses = ["Ja", "Nein", "Vielleicht", "Möglich", "Nicht sicher", "Definitiv", "Sicherlich"], Random = Responses[Math.floor(Math.random () * Responses.length)];
    const Question = args.join(" ");

    if (!Question) return message.channel.send("Stell deine Frage!");

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setDescription(Random)
    .setFooter(`Angefordert von ${message.author.username}`)
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
