const api = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "joke",
  aliases: [],
  category: "Fun",
  description: "Gibt ein zufälligen Witz zurück (englisch)",
  usage: "Joke",
  run: async (client, message, args) => {
    
    const Data = await api.GetJoke({ Color: "RANDOM" });
    return message.channel.send(Data);
  }
};
