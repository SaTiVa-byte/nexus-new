const sourcebin = require('sourcebin_js')

module.exports = {
   name: 'sourcebin',
   run: async (client, message, args) => {

       if (!args.join(' ')) return message.reply('Gebe irgendein Code an bruh')

      sourcebin.create([{
      name: `Code von ${message.author.tag}`,
      content: args.join(' '),
      languageId: 'js'
    }])
      .then(src => {
           message.channel.send(src.url)
    })
  .catch(e => {
         message.channel.send(`Fehler, probiere es später nochmal`)
   });

  }
}
