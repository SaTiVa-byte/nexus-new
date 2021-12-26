const { MessageEmbed } = require("discord.js")
const moment = require('moment')

module.exports = {
name: "kick",
category: "moderation",
description: "kickt eine Person",
cooldown: 5,
userPerms: ["KICK_MEMBERS"],
clientPerms: ["KICK_MEMBERS"],
run: async(client, message, args) => {  
const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
const reason = args.slice(1).join(" ")
          if (!args[0]) return message.channel.send(":x: | **Gebe jemanden an den du kicken magst**")
        if (!mentionedMember) return message.channel.send(":x: | **Ich finde ihn nicht**")
        if (mentionedMember.id === message.author.id) return message.channel.send(":x: | Du kannst dich nicht selber kicken.")
        if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id) {
            return message.channel.send(":x: | **Das geht nicht, meine Rolle ist zu niedrig als seine.**")
        }
        if (mentionedMember.kickable) {
            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} - (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
            .setThumbnail(mentionedMember.user.displayAvatarURL({dynamic: true}))
            .setColor(`RANDOM`)
            .setDescription(`
**Mitglieder:** ${mentionedMember.user.username} - (${mentionedMember.user.id})
**Grund:** ${reason || "None"}
            `)
        message.channel.send(embed)
        mentionedMember.kick()
        } else {
            return message.channel.send(":x: | **Das geht nicht, meine Rolle ist zu niedrig als seine.**")
        }
        return undefined
    let channel = db.fetch(`modlog_${message.guild.id}`)
            if (!channel) return;

            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} Modlog`, message.guild.iconURL())
                .setColor("#ff0000")
                .setThumbnail(kickMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**Moderation**", "kick")
                .addField("**Mitglied Gekickt**", kickMember.user.username)
                .addField("**Gekickt von**", message.author.username)
                .addField("**Grund**", `${reason || "**No Reason**"}`)
                .addField("**Datum**", message.createdAt.toLocaleString())
                .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
        }
    }