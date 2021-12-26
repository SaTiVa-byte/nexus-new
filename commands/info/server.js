const { MessageEmbed } = require('discord.js');

const moment = require('moment');

const filterLevels = {

	DISABLED: 'Off',

	MEMBERS_WITHOUT_ROLES: 'No Role',

	ALL_MEMBERS: 'Everyone'

};

const verificationLevels = {

	NONE: 'None',

	LOW: 'Low',

	MEDIUM: 'Medium',

	HIGH: '(╯°□°）╯︵ ┻━┻',

	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'

};

const regions = {

	brazil: '🇲🇷Brazil',

	europe: '🇪🇺Europe',

	hongkong: '🇭🇰Hong Kong',

	india: '🇮🇳India',

	japan: '🇯🇵Japan',

	russia: '🇷🇺Russia',

	singapore: '🇸🇬Singapore',

	southafrica: '🇨🇫South Africa',

	sydeny: '🇸🇾Sydeny',

	'us-central': '🇺🇲US Central',

	'us-east': '🇺🇸US East',

	'us-west': '🇺🇲US West',

	'us-south': '🇬🇸US South'

};

module.exports = {

  name: "serverinfo",

  category: "info",

  aliases: ["serverinfo"],

  description: "Bekomme Informationen von dem Server",

  usage: "serverinfo ",

run: (client, message, args) => {

		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());

		const members = message.guild.members.cache;

		const channels = message.guild.channels.cache;

		const emojis = message.guild.emojis.cache;

		const embed = new MessageEmbed()

			.setDescription(`**Guild information for __${message.guild.name}__**`)

			.setColor('BLUE')

			.setThumbnail(message.guild.iconURL({ dynamic: true }))

			.addField('General', [

				`**❯ 👁Name:** ${message.guild.name}`,

				`**❯ 🔍ID:** ${message.guild.id}`,

				`**❯ 👑Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,

				`**❯ 🌏Region:** ${regions[message.guild.region]}`,

				`**❯ 📈Boost Level:** ${message.guild.premiumTier ? `Level ${message.guild.premiumTier}` : 'None'}`,

				`**❯ 💿Expliziter Filter:** ${filterLevels[message.guild.explicitContentFilter]}`,

				`**❯ ✔Verifizierung Level:** ${verificationLevels[message.guild.verificationLevel]}`,

				`**❯ 🕑Erstellte Zeit:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,

				'\u200b'

			])

			.addField('Statistik', [

				`**❯ 🎲Rollen Anzahl:** ${roles.length}`,

				`**❯ 💫Emoji Anzahl:** ${emojis.size}`,

				`**❯ 💭Regelmäßige Emoji-Anzahl:** ${emojis.filter(emoji => !emoji.animated).size}`,

				`**❯ 💥Animierte Emoji Anzahl:** ${emojis.filter(emoji => emoji.animated).size}`,

				`**❯ 👬Mitglieder Anzahl:** ${message.guild.memberCount}`,

				`**❯ 👨‍✈️Menschen:** ${members.filter(member => !member.user.bot).size}`,

				`**❯ 🤖Bots:** ${members.filter(member => member.user.bot).size}`,

				`**❯ 💬Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,

				`**❯ 🎤Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,

				`**❯ 💜Boost Anzahl:** ${message.guild.premiumSubscriptionCount || '0'}`,

				'\u200b'

			])

			.addField('Anwesenheit', [

				`**❯ 🟢Online:** ${members.filter(member => member.presence.status === 'online').size}`,

				`**❯ 🟡Abwesend:** ${members.filter(member => member.presence.status === 'idle').size}`,

				`**❯ ⛔Bitte nicht stören:** ${members.filter(member => member.presence.status === 'dnd').size}`,

				`**❯ ⚫Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,

				'\u200b'

			])

			.setTimestamp();

		message.channel.send(embed);

	}

};