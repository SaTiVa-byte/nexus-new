const discord = require("discord.js")
module.exports = (client, message, queue, track) => {

const devil = new discord.MessageEmbed()
.setTitle(`<:music:924742283914514452> Hinzugefügt zu Warteschlange `)
.setDescription(`
${track.title}
`)
  message.channel.send(devil);
}