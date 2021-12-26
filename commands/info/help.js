const { MessageMenuOption, MessageMenu } = require("discord-buttons");
const Discord = require("discord.js");
module.exports = {
  name: "help",
  description: "",
  aliases: ['h'],
  usage: "help",
  run: async(client, message, args) => {
    let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

    let cmduser = message.author;
    let menuoptions = [ 
      {
        value: "Moderation / Admin Commands", description: "Bekomme Informationen von Moderation Commands", emoji: "924754296355045377",
            replymsg: "`afk`,`announce`,`anti`,`ban`,`kick`,`membercount`,`nuke`,`poll`,`react`,`setnick`,`snipe`,`steal-emoji`,`unban`,`unbanall`,`voicekick`"
      }, {
        value: "Allgemeine Commands",  description: "Bekomme Informationen von Allgemeine Commands",
        emoji: "💪",
        replymsg: "`botinfo`,`help`,`ping`" //optional
      } , {
        value: "INFO",  description: "Bekomme Informationen von Info Commands",emoji: "🔰",
        replymsg: "`anime`,`avatar`,`badges`,`server-avatar`,`serverinfo`,`shorturl`,`shutdown`,`steam`,`whois`," //optional
      } , {
        value: "Musik Command",  description: "Bekomme Informationen von Musik Commands",emoji: "924754296325693460",
        replymsg: "`clear-queue`,`filter-list`,`filters`,`loop`,`now-playing`,`pause`,`play`,`queue`,`resume`,`search`,`shuffle`,`skip`,`stop`,`volume`" //optional
      } , {
        value: "Bild Commands",  description: "Bekomme Informationen von Bild commands",emoji: "922500852869136384",
        replymsg: "`grab`,`gefängnis`,`kiss`,`triggered`,`wasted`" //optional
      } , {
value: "Fun Commands", description: "Bekomme Informationen von Fun Command", emoji: "🕹️",
        replymsg: "`8ball`,`advice`,`fact`,`joke`,`meme`,`topic`,`why`"
      } , {
value: "Rank Commands", description: "Bekomme Informationen von Rank Commands",emoji: "924754296128536698", 
        replymsg: "`leaderboard`,`rank`" }   , {value: "Vorschläge Commands", description:" Bekomme Informationen von Vorschlag Command",emoji: "📈",
        
        replymsg:"`setsuggest`,`suggest`,`reply`"}    
    ]
    //define the selection
    let Selection = new MessageMenu()
      .setID('MenuSelection') 
      .setMaxValues(1) //OPTIONAL, this is how many values you can have at each selection
      .setMinValues(1) //OPTIONAL , this is how many values you need to have at each selection
      .setPlaceholder('Klick mich, um Hilfe zu finden!');  //message in the content placeholder
    menuoptions.forEach(option => {
      let row = new MessageMenuOption()
        .setLabel(option.label ? option.label : option.value)
        .setValue(option.value) 
        .setDescription(option.description) 
        .setDefault() 
      if(option.emoji) row.setEmoji(option.emoji) 
      Selection.addOption(row)
    })
    //define the embed
    let MenuEmbed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle(`**__HELP COMMAND__**`)
      .setFooter("Help Cmd Von: SaTiVa")
      .setAuthor("Bot Help", client.user.displayAvatarURL())
      .setDescription(` __**<:yes:924740608562720788>Prefix Information**__\n> Mein Prefix für **__${message.guild.name}__** ist \`+\`\n> Du kannst auch ${client.user} erwähnen um Prefix Informationen zu bekommen.\n\n 
__**💪Meine Features**__\n> 25+ Systeme wie 😎 Willkommen, 📈 Level-System, ⚙ Custom-Prefix, 🛠  Erweiterte Moderation, 🎮 Viele Minispiele,   🕹Fun, 🦾 Custom Commands und vieles  mehr!\n\n
📈__**STATS**__\n> ⚙️ **${client.commands.size} Commands**\n> 📁 in **${client.guilds.cache.size} Server**\n> ⌚️ \`${days} Tage\`, \`${hours} Stunden\`, \`${minutes} Minuten\`, \`${seconds} Sekunden\` **Uptime**\n> 📶 \`${client.ws.ping}ms\` **Ping**\n\n`)
    .setImage(`https://cdn.discordapp.com/attachments/909806857588191233/911526088197439498/standard_47.gif`)
    //send the menu msg
    let menumsg = await message.channel.send(MenuEmbed, Selection)
    //function to handle the menuselection
    function menuselection(menu) {
      let menuoptiondata = menuoptions.find(v=>v.value == menu.values[0])
      menu.reply.send(menuoptiondata.replymsg, true);
    }
    client.on('clickMenu', (menu) => {
      if (menu.message.id === menumsg.id) {
        if (menu.clicker.user.id === message.author.id) menuselection(menu);
        else menu.reply(`:x: Du darfst das nicht!! Nur!: <@${cmduser.id}>`, true);
        message.channel.send('')
      }
    });
  }
}
