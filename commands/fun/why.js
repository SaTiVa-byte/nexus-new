const  api = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "why",
  aliases: [],
  category: "Fun",
  description: "Gibt ein warum zurück!",
  usage: "Why",
  run: async (client, message, args) => {
    
    const Data = await api.GetWhy({ Color: "random"});
    return message.channel.send(Data);
  }
};
