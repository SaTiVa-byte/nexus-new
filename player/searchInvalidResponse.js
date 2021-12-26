module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Die Auswahl wurde **abgebrochen** !`);
    } else message.channel.send(`❌ - Du musst eine gültige Nummer zwischen **1** und **${tracks.length}** angeben !`);
};