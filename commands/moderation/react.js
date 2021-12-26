const Discord = require("discord.js");
const config = require("../../config.json")
module.exports = {
    name: "react",
    category: "moderation",
    description: "Reagiert auf eine Nachricht",
    usage: "Emoji ID",
    run: async (client, message, args) => {
        if (!message.member.hasPermission(["VIEW_AUDIT_LOG"])) return message.reply(`**${message.author.username}**, du hast keine Rechte dazu!`)
        if(!args) return message.reply("SAG WAS DAZU");
        try{

        message.channel.messages.fetch(args[0]).then(msg=>msg.react(args[1]))
    }catch (e){ console.log(e.stack.toString().red)}
        
    }
}