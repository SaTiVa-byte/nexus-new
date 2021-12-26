const db = require("quick.db")

module.exports = {
  name: "setmodlog",
  description: "Setze ein Mod-Log Channel",
  category: "moderation",

 run: async (bot, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("**Du hast nicht die benötigen Rechte dazu! - [ADMINISTRATOR]**")
    if (!args[0]) {
      let b = await db.fetch(`modlog_${message.guild.id}`);
      let channelName = message.guild.channels.cache.get(b);
      if (message.guild.channels.cache.has(b)) {
        return message.channel.send(
          `**Mod-Log der Channel heißt \`${channelName.name}\`!**`
        );
      } else
        return message.channel.send(
          "**Nehme ein Channel Name oder eine ID!**"
        );
    }
        let channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!channel || channel.type !== 'text') return message.channel.send("**Bitte nehme ein richtigen Text-Channel!**");

        try {
            let a = await db.fetch(`modlog_${message.guild.id}`)

            if (channel.id === a) {
                return message.channel.send("**Dieser Channel ist bereits ein Mod-Log!**")
            } else {
                bot.guilds.cache.get(message.guild.id).channels.cache.get(channel.id).send("**Mod-Log Channel gesetzt!**")
                db.set(`modlog_${message.guild.id}`, channel.id)

                message.channel.send(`**Mod-Log Channel ist nun in \`${channel.name}\`!**`)
            }
        } catch {
            return message.channel.send("**Fehler - `Berechtigungen Fehlen, oder es ist kein Text-Channel!`**");
        }
    }
};