const Discord = require("discord.js")
module.exports = {
    name: 'embedgen',
    aliases: ["emb"],
    description: 'embed Generator',
    category: "info",
       run: async (client, message, args) => {

       try {

            const filter = msg => msg.author.id == message.author.id;
            const options = {
                max: 1
            };
            //===============================================================================================
            // Getting Started
            const embed = new Discord.MessageEmbed();
            message.channel.send("Antworte mit `skip` oder `no` für die nächste Frage, Antworte mit `cancel` um den Command abzubrechen.");
            
    
            //===============================================================================================
            // Getting Title
            message.channel.send("Willst du das dein Embed ein Title hat?");
            let title = await message.channel.awaitMessages(filter, options);
            if (title.first().content == 'cancel') return message.channel.send('Embed Generator abgebrochen.')
            if (title.first().content !== 'skip' && title.first().content !== 'cancel') embed.setTitle(title.first().content);
    
            //===============================================================================================
            // Getting Description
            message.channel.send("Perfekt, willst du das dein Embed eine Beschreibung hat?");
            let Description = await message.channel.awaitMessages(filter, options);
            if (Description.first().content == 'cancel') return message.channel.send('Embed Generator abgebrochen.')
            if (Description.first().content !== 'skip' && Description.first().content !== 'cancel') embed.setDescription(Description.first().content);
    
            //===============================================================================================
            // Getting Footer
            message.channel.send("Soll dein Embed ein Footer haben? oder breche es ab");
            let Footer = await message.channel.awaitMessages(filter, options);
            if (Footer.first().content == 'cancel') return message.channel.send('Embed Generator abgebrochen. ')
            if (Footer.first().content !== 'skip' && Footer.first().content !== 'cancel') embed.setFooter(Footer.first().content); 
    
            //===============================================================================================
            // Getting URL
            
    
            //===============================================================================================
            // Getting Color
            message.channel.send("So, willst du das dein Embed eine andere Farbe hat? Standard is Schwarz");
            let Color = await message.channel.awaitMessages(filter, options);
            if (Color.first().content == 'cancel') return message.channel.send('Embed Generator abgebrochen.')
            if (Color.first().content !== 'skip' && Color.first().content !== 'cancel') embed.setColor(Color.first().content.toUpperCase() || "2f3136")
    
            //===============================================================================================
            // Getting Author Field
            message.channel.send("So, willst du für dein Embed ein Author Feld?");
            let Author = await message.channel.awaitMessages(filter, options);
            if (Author.first().content == 'cancel') return message.channel.send('Embed Generator abgebrochen.')
            if (Author.first().content !== 'skip' && Author.first().content !== 'cancel') embed.setAuthor(Author.first().content);
    
            //===============================================================================================
            // Getting TimeStamp
            message.channel.send("So, soll dein Embed eine Zeit anzeigen?? Antworte mit `yes` oder `no`");
            let TimeStamp = await message.channel.awaitMessages(filter, options);
            if (TimeStamp.first().content == 'cancel') return message.channel.send('Embed Generator abgebrochen.')
            if (TimeStamp.first().content !== 'yes') embed.setTimestamp();
    
            message.channel.send(embed)
        } catch (error) {
            console.error(error);
        }
    }
}