const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "nuke",
  description: "Nuked ein Channel",
  category: "moderation",
  run: async (client, message, args) => {
    const { member, mentions } = message
    const tag = `<@${member.id}`
    const target = message.mentions.users.first();
    if (
      member.hasPermission('MANNAGE_CHANNEL')
    ) {
      let reason = args.join(" ") || "Kein Grund"
      if (!message.channel.deletable) {
        return message.reply("Dieser Channel kann nicht genuked werden!")
      }
      let newchannel = await message.channel.clone()
      await message.channel.delete()
      let embed = new MessageEmbed()
        .setTitle("Channel Nuked")
        .setDescription(reason)
        .setImage('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
      await newchannel.send(embed)
    } else {
      message.reply("Du hast keine Berechtigungen dazu!")
    }
  },
};
