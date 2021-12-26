module.exports = (client, error, message) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`<:no:924740921071923230> - Es spielt gerade keine Musik auf dem Server!`);
            break;
        case 'NotConnected':
            message.channel.send(`<:no:924740921071923230> - Du bist in keinem Voice Channel!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`<:no:924740921071923230> - Ich kann leider dein Channel nicht joinen, bitte gebe mir mehr Rechte!`);
            break;
        default:
            message.channel.send(`<:no:924740921071923230> - Irgendwas ist schiefgelaufen ... Fehler : ${error}`);
    };
};