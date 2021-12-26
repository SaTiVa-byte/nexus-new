const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Banne jemanden ohne ihn zu kennen xD",
  usage: "ban <@user> <Grund>",
  run: async (client, message, args) => {
    
    const target = message.mentions.members.first()
    
    const reason = args.slice(1).join(" ")
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Du hast nicht genug Power um jemanden zu bannen!`)
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(`Nerd bekommt paar Rechte`)
    
    if(!args[0]) return message.reply(`Erwähne eine Person die du Bannen möchtest`)
    
    if(!target) return message.reply(`Ich konnte die Person nicht finden!`)
    
    if(target.roles.highest.position >= message.member.roles.highest.position || message.author.id !== message.guild.owner.id) {
      return message.reply(`Der hat mehr Power als du!`)
    }
    
    if(target.id === message.author.id) return message.reply(`Ich kann dich nicht bannen da du der Boss bist!`)
    
    if(target.bannable) {
      let embed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Banned \`${target}\` for \`${reason || "Kein Grund angegeben"}\``)
      
      message.channel.send(embed)
      
      target.ban()
      
      message.delete()
      
    } else {
      return message.reply(`Ich konnte ihn nicht bannen, sei dir sicher das meine Rolle. Über seine ist!`)
    }
    return undefined
  }
};