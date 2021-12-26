const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const client = new Discord.Client()
module.exports = {
    name: 'eval',
    category: 'owner',
    run: async (client, message, args) => {
        if (message.author.id !== '849299149874004019','820471122347688007', '873083102501679105') return 
         let  embed_perm  = new MessageEmbed() .setTitle("Only Devil(NISHANT) and his team  can run this  Command"); message.channel.send(embed_perm);
        const embed = new MessageEmbed()
            .setTitle('Evaluating...')
        const msg = await message.channel.send(embed);
        try {
            const data = eval(args.join(' ').replace(/```/g, ''));
            const embed = new MessageEmbed()
                .setTitle('output:')
                .setDescription(await data)
            .setColor('GREEN')
            await msg.edit(embed)
            await msg.react('✅')
            await msg.react('❌')
            const filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '✅') && (user.id === message.author.id);
            msg.awaitReactions(filter, { max: 1 })
                .then((collected) => {
                    collected.map((emoji) => {
                        switch (emoji._emoji.name) {
                            case '✅':
                                msg.reactions.removeAll();
                                break;
                            case '❌':
                                msg.delete()
                                break;
                        }
                    })
                })
        } catch (e) {
            const embed_err = new MessageEmbed()
                .setTitle('error')
                .setDescription(e)
                .setColor("#FF0000")
            return await msg.edit(embed_err);
        }
    }
}