module.exports = {
    name: 'shutdown',
    category: 'Owner',
    execute: async (message, args, client, prefix) => {
        if (message.author.id !== '879416069440303196') {
            return message.channel.send('Du kannst den Command nicht benutzen!');
        }
    await message.channel.send('Bot wird heruntergefahren...');
        return process.exit();
    message.channel.send({embeds: [embed]})
    },
};