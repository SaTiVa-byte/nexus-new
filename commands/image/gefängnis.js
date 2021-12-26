
const Canvas = require("canvas");
const Discord = require ("discord.js");

module.exports = {
	name: "gefängnis",
	run : async (client,message,args)=> {

const user5 = message.mentions.users.first() || message.author;
 //  if user5.id == client.id return; 
        const canvas = Canvas.createCanvas(1000, 1000)
        const ctx = canvas.getContext("2d");
      
        //draw the main background
        const background = await Canvas.loadImage(user.displayAvatarURL({format: "png"}))
        ctx.drawImage(background, 0, 0, 1000, 1000)
      
        //draw the second background which is a blacksquare 
        const background2 = await 
    Canvas.loadImage('Jail.png')
ctx.drawImage(background2, 0, 0, 1000, 1000)
       
        //change opacity again
       
        //ctx.drawImage(image, x, y, imagewidth, imagelength)
      
        //send the image as an attachment
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `${user5.name} jail.png`)
        message.channel.send(`${user5} wegen Mord ins Gefängnis gekommen`, attachment)
    }}
          
//made for devil only 