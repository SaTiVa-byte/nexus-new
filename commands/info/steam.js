const { MessageEmbed } = require('discord.js');
const request = require('node-superfetch');

module.exports = {
            name: "steam",
            description: "Durchsucht Steam nach Spielen!",
            category: "Searches",
            usage: "steam <Spiel Name>",
            aliases: ["game"],

    run: async(client, message, args, level, settings) => {

        const query = args.join(" ");

        if (!query) {
            return message.reply("Command Benutzung: `steam <Spiel Name>`")
        } 

        const search = await request
        .get('https://store.steampowered.com/api/storesearch')
        .query({
            cc: 'us',
            l: 'en',
            term: query
        });
                
        if (!search.body.items.length) return message.channel.send(`Keine Suchergebnisse gefunden **${query}**!`);
        
        const { id, tiny_image } = search.body.items[0];
        
        const { body } = await request
        .get('https://store.steampowered.com/api/appdetails')
        .query({ appids: id });
            
        const { data } = body[id.toString()];
        const current = data.price_overview ? `$${data.price_overview.final / 100}` : 'Kostenlos';
        const original = data.price_overview ? `$${data.price_overview.initial / 100}` : 'Kostenlos';
        const price = current === original ? current : `~~${original}~~ ${current}`;
        const platforms = [];
        if (data.platforms) {
            if (data.platforms.windows) platforms.push('Windows');
            if (data.platforms.mac) platforms.push('Mac');
            if (data.platforms.linux) platforms.push('Linux');
        }

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setFooter('Entwickelt von SaTiVa')
            .setAuthor('Steam', 'https://i.imgur.com/xxr2UBZ.png', 'http://store.steampowered.com/')
            .setTitle(`__**${data.name}**__`)
            .setURL(`http://store.steampowered.com/app/${data.steam_appid}`)
            .setImage(tiny_image)
            .addField('❯\u2000Preis', `•\u2000 ${price}`, true)
            .addField('❯\u2000Metascore', `•\u2000 ${data.metacritic ? data.metacritic.score : '???'}`, true)
            .addField('❯\u2000Empfehlungen', `•\u2000 ${data.recommendations ? data.recommendations.total : '???'}`, true)
            .addField('❯\u2000Plattform', `•\u2000 ${platforms.join(', ') || 'None'}`, true)
            .addField('❯\u2000Erscheinungsdatum', `•\u2000 ${data.release_date ? data.release_date.date : '???'}`, true)
            .addField('❯\u2000DLC Anzahl', `•\u2000 ${data.dlc ? data.dlc.length : 0}`, true)
            .addField('❯\u2000Entwickler', `•\u2000 ${data.developers ? data.developers.join(', ') || '???' : '???'}`, true)
            .addField('❯\u2000Veröffentlicher', `•\u2000 ${data.publishers ? data.publishers.join(', ') || '???' : '???'}`, true);
        
        return message.channel.send({ embed });
	}
};

//made by DEVIL