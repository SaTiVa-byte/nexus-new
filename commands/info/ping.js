const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { invite } = require("./../../config.json");
module.exports = {
  name: "ping",
  description: "Sehe den Ping vom Bot",

  run: async (client, message, args) => {
     let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;



    let helpEmbed = new MessageEmbed()
      .setTitle("Mein Ping..")
      .setDescription(`<:redarrow:924756985260408914> ${client.ws.ping} ms
      
      🕰️ \`${days} Tage\`, \`${hours} Stunden\`, \`${minutes} Minuten\`, \`${seconds} Sekunden\``)
      .setThumbnail(`https://cdn.discordapp.com/attachments/896133877083553832/922516636345466920/gaming-logo-template-with-a-ninja-character-2718o-2931_2.png`)
      .setImage(`https://cdn.discordapp.com/attachments/909806857588191233/911526088197439498/standard_47.gif`)
      .setFooter(`Ayyy boi ist ${client.user.username}`)
      .setColor("#FFFFF0")

      message.channel.send("📶 Berechnend")


      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel(`Invite ${client.user.username}`) 
      .setURL(`${invite}`)

      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Support Server') 
      .setURL(`https://discord.gg/a7WvZdxu7X`)

      let button3 = new disbut.MessageButton()
      .setStyle('green')
      .setLabel(`${client.ws.ping} ms`)
      .setID("button3")
      .setDisabled(true)
 
      return message.channel.send(helpEmbed,{
        button: [button1,button2,web,button3],
      });

  },
};