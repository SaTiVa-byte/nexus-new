const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const { prefix,db,token } = require("./config.json");
require("./server.js");
const disbute = require("discord-buttons")
const Discord = require("discord.js");
const client = new Client({
  disableEveryone: true
});
require("discord-buttons")(client)
//--------WELCOME---------
const { createCanvas, loadImage, registerFont } = require("canvas");
//--------MUSIC - CLIENT------
const { Player } = require('discord-player');
const fs = require("fs")
client.player = new Player(client);

//-----database-------
const {Database} = require("quickmongo")
//Collection
client.db =  new Database(db)
client.commands = new Collection();
client.aliases = new Collection();
client.queue = new Map();
client.snipes = new Map();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


const mongoose = require("mongoose");

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(console.log("Connected zu mongo db"));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));


//RANKS
const Levels = require("discord-xp");
Levels.setURL(db);














for (const file of player) {
    //console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};
client.on("ready", () => {
  console.log(`Hi, ${client.user.username} is now online!`);

  client.user.setActivity(`${prefix}help| SaTiVa`);
});


client.on("clickMenu",async menu => {

if(menu.values[0]== "APPLE"){



	menu.channel.send(`I ALSO LIKE APPLE`)
}


if(menu.values[1]== "MANGO"){



	menu.channel.send(`I ALSO LIKE MANGO`)


}
if(menu.values[3]== "BANANA"){



	menu.channel.send(`I ALSO LIKE BANANA`)
}



})

















client.on("messageDelete",async (message) => {




  client.snipes.set(message.channel.id,{
content : message.content,
author: message.author.tag,
image: message.attachments.first() ? message.attachments.first().proxyURL : null




  })
})



//ANTI-MENTION
client.on("message",async message => {
  
if(message.mentions.members.array().length >= 4){
  
 if(message){
   await  message.delete()
 } 
return message.reply(`You are not allow to mention mass members!`) 
  
}
 
  
  
})

//THANKS FOR WATCHING 
//FOR MORE HELP JOIN MY SERVER 






client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;



const Canvas = require("canvas");
        const randomXp = Math.floor(Math.random() * 40) + 1;
        const level = await Levels.appendXp(
          message.author.id,
          message.guild.id,
          randomXp
        );
        if (level) {
          const user = await Levels.fetch(message.author.id, message.guild.id);
    
        const canvas = Canvas.createCanvas(1200, 360)
        const ctx = canvas.getContext("2d");
      
        //draw the main background
        
      
        //draw the second background which is a blacksquare 
        const background2 = await Canvas.loadImage("./levelup.png")
        ctx.globalAlpha  = 20.0; //changes the alpha before you draw the image
       
        //change opacity again
        ctx.globalAlpha  = 1;
      
        // Draw the USER AVATAR
 const image = await Canvas.loadImage(message. author.displayAvatarURL({format: "png"}))
  
    ctx.drawImage(image, 45, 22 , 300, 260)   
 ctx.drawImage(background2, 0, 0, 1280, 305) 

        
      
        //WRITE THE USERNAME
        ctx.font = '70px Impact'
        ctx.fillStyle = "#033AD7"
        ctx.fillText( 
    `${message.author.username}Levels up! `, 360,100,800,200)

  ctx.font = '70px Impact'
        ctx.fillStyle = "#033AD7"
        ctx.fillText( 
    `New rank: ${user.level} `, 360,200,800,200)

      
       
        //ctx.drawImage(image, x, y, imagewidth, imagelength)
      
        //send the image as an attachment
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "new rank.png")
      
          message.channel
            .send(
              ` ${message.author.username}, You just leveled up to level ${user.level}!
`,attachment
            )
           
        }
      
    



//AFK SYSTEM 
 //IF YOU  WANT MAKE GLOABAL AFK SYSTEM  JUST  REMOVE SERVER  id
 //THAKKS FOR WATCHING 
 //DON'T  FORGET  TO JOIN SUPPORT  SERVER 
  
  if (!message.content.startsWith(prefix)) return;

  // If message.member is uncached, cache it.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  // If a command is finally found, run the command
  if (command) command.run(client, message, args);
});

client.on("message", async message => {
  if (message.content === "!welcome") {
    client.emit("guildMemberAdd", message.member);
  }
});
client.on("guildMemberAdd", async member => {

let message = `${member} welcome to ${member.guild.name}`


let channel = await client.db.get(`channel_${member.guild.id}`)

if(!channel)return;

client.channels.cache.get(channel).send(message)
  
  
});
client.login(token);
