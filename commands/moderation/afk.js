module.exports = {
	name: 'afk',
	run: async (client, message, args) => {
		let afk = client.db.get(`afk_${message.guild.id}_${message.author.id}`);

		if (afk) {
			client.db.set(`afk_${message.author.id}`, false);

			message.reply(`Du bist nicht mehr AFK`);
		} else {
			let reason = args.join('');
			if (!reason) reason = 'Nicht angegeben';

			client.db.set(`op_${message.guild.id}_${message.author.id}`, reason);
			client.db.set(`afk_${message.guild.id}_${message.author.id}`, true);
			client.db.set(
				`date_${message.guild.id}_${message.author.id}`,
				Date.now()
			);

			message.member.setNickname(`▪AFK▪︎ ${message.member.username}`);

			message.reply(`Du bist nun AFK - ${reason}`);
		}
	}
};
