module.exports = (client, message, queue, playlist) => {
    message.channel.send(`📻 - ${playlist.title} wurde der Warteschlange hinzugefügt (**${playlist.tracks.length}** lieder) !`);
};