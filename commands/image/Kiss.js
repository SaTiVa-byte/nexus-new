
const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "kiss",
  aliases: [],
  description: "Return A Random shit!",
  usage: "shit",
  run: async (client, message, args) => {

    const Data = await Random.GetAnimeImage({ Anime: "kiss", Color: Color });
    
    return message.channel.send(Data);
  }
};

