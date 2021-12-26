const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'announce',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Du hast keine Rechte für diesen Command');

        let mention;

        if(!args.length) return message.channel.send('> Benutze: +announce <#channel> <message> <-ping <true/false> >');

        const channel = message.mentions.channels.first();
        if(!channel) return message.reply('Bitte gebe einen Channel an!');

        if(!args[1]) return message.reply('Gebe eine Nachricht an');

        // mentions
        if(args.some((val) => val.toLowerCase() === '-ping')) {
            for (let i = 0; i < args.length; i++ ) {
                if(args[i].toLowerCase() === '-ping') args.splice(i, 1);
            }

            mention = true;
        } else mention = false;

        if(mention === true) channel.send('@everyone');

        channel.send(
            new MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(args.slice(1).join(" "))
                .setTimestamp()
                .setColor('RANDOM')
        )


    }
}