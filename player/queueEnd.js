module.exports = (client, message, queue) => {
    message.channel.send(`📍 - Die Musik wurde gestoppt, da keine Musik mehr in der Warteschlange ist!`);
};