const Discord = require("discord.js");

const malScraper = require('mal-scraper');


module.exports = {
  name: "anime",
  category: "search",
  description: "Bekomme Informationen über ein Anime",
  usage: "[command | Anime]",
  run: async (client, message, args) => {
    //command
    const search = `${args}`;
    if (!search)
      return message.reply('Bitte füg eine Suchanfrage hinzu!');

    malScraper.getInfoFromName(search)
      .then((data) => {
        const malEmbed = new Discord.MessageEmbed()
          .setAuthor(`Suchergebnis meiner Anime-Liste für ${args}`.split(',').join(' '))
          .setThumbnail(data.picture)
          .setColor('RANDOM') //What ever u want color!
          .addField('Premiered', `\`${data.premiered}\``, true)
          .addField('Übertragen', `\`${data.broadcast}\``, true)
          .addField('Genres', `\`${data.genres}\``, true)
          .addField('English Title', `\`${data.englishTitle}\``, true)
          .addField('Japanese Title', `\`${data.japaneseTitle}\``, true)
          .addField('Art', `\`${data.type}\``, true)
          .addField('Episoden', `\`${data.episodes}\``, true)
          .addField('Bewertung', `\`${data.rating}\``, true)
          .addField('Ausgestrahlt', `\`${data.aired}\``, true)
          .addField('Punktzahl', `\`${data.score}\``, true)
          .addField('Lieblings-', `\`${data.favorites}\``, true)
          .addField('Rank', `\`${data.ranked}\``, true)
          .addField('Dauer', `\`${data.duration}\``, true)
          .addField('Studios', `\`${data.studios}\``, true)
          .addField('Popularität', `\`${data.popularity}\``, true)
          .addField('Mitglieder', `\`${data.members}\``, true)
          .addField('Score-Statistiken', `\`${data.scoreStats}\``, true)
          .addField('Quelle', `\`${data.source}\``, true)
          .addField('Synonyme', `\`${data.synonyms}\``, true)
          .addField('Status', `\`${data.status}\``, true)
          .addField('Bezeichner', `\`${data.id}\``, true)
          .addField('Link', data.url, true)
          .setTimestamp()
          .setFooter(`Angefordert von ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))

        message.channel.send(malEmbed);

      })
  }
};

//Made By Cw khan