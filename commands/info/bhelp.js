const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");
module.exports = {
  name: "bhelp",
   aliases: ["button"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

    //--------------------EMBEDS------------------------

    const embed = new Discord.MessageEmbed()
    .setImage('https://cdn.discordapp.com/attachments/833754164877721620/872148015991894026/Untitled153_20210803180355.png')
    .setDescription(`Hey ${message.author}, Ich bin ${client.user} Ich bin Entwickelt von <@879416069440303196> `);

    const embed1 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setImage(`https://cdn.discordapp.com/attachments/909806857588191233/911526088197439498/standard_47.gif`)
    .setTitle("MOD COMMANDS")
    .setDescription("`afk`,`announce`,`anti`,`ban`,`kick`,`membercount,`moveall,`nuke`,`poll`,`purge`,`react`,`setnick`,`snipe`,`steal-emoji`,`unban`,`unbanall`,`voicekick`");

    const embed2 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setImage(`https://cdn.discordapp.com/attachments/909806857588191233/911526088197439498/standard_47.gif`)
    .setTitle("MUSIk COMMANDS")
    .setDescription("`clear-queue`,`filter-list`,`filters`,`loop`,`now-playing`,`pause`,`play`,`queue`,`resume`,`search`,`shuffle`,`skip`,`stop`,`volume`");

    const embed3 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setImage(`https://cdn.discordapp.com/attachments/909806857588191233/911526088197439498/standard_47.gif`)
    .setTitle("OWNER COMMANDS")
    .setDescription("`eval`,`serverlist`,`stats`");

    const embed4 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("INFO COMMANDS")
    .setImage(`https://cdn.discordapp.com/attachments/909806857588191233/911526088197439498/standard_47.gif`)
    .setDescription("`anime`,`avatar`,`badges`,`server-avatar`,`serverinfo`,`shorturl`,`shutdown`,`steam`,`whois`,`developer`,`bhelp`,`ping`");

    const embed5 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("RANK COMMAND")
    .setImage(`https://cdn.discordapp.com/attachments/909806857588191233/911526088197439498/standard_47.gif`)
    .setDescription("`leaderboard`,`rank`");

    //--------------------EMBEDS------------------------

    //--------------------Buttons------------------------

    let button1 = new MessageButton()
    .setLabel(`Mod`)
    .setID(`help1`)
    .setStyle("blurple");

    let button2 = new MessageButton()
    .setLabel(`Musik`)
    .setID(`help2`)
    .setStyle("blurple");

    let button3 = new MessageButton()
    .setLabel(`Owner`)
    .setID(`help3`)
    .setStyle("blurple");
        if(!message.member.roles.cache.has("919335828436697098")) button3.setDisabled(true);

    let button4 = new MessageButton()
    .setLabel(`Info`)
    .setID(`help4`)
    .setStyle("blurple");

    let button5 = new MessageButton()
    .setLabel(`Rank`)
    .setID(`help5`)
    .setStyle("blurple");

    let button6 = new MessageButton()
    .setLabel(`Fun`)
    .setID(`help6`)
    .setStyle("blurple");
 
    
    let row1 = new MessageActionRow()
    .addComponents(button1, button2, button3, button4, button5)
    let row2 = new MessageActionRow()
    .addComponents(button6,)
    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row1, row2);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

        if(b.id == "help1") {

            MESSAGE.edit(embed1, row1);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(embed2, row1);
            await b.reply.defer()

        }

        if(b.id == "help3") {
            
            MESSAGE.edit(embed3, row1);
            await b.reply.defer()

        }

        if(b.id == "help4") {
            
            MESSAGE.edit(embed4, row1);
            await b.reply.defer()

        }

        if(b.id == "help5") {
            
            MESSAGE.edit(embed5, row1);
            await b.reply.defer()

        }

        if(b.id == "help6") {
            
            MESSAGE.edit(embed6, row1);
            await b.reply.defer()

        }



    })

    collector.on('end', (b) => {
        MESSAGE.edit(`Oh Timeout! Gebe den Befehl erneut ein`)
    })
    }
  };