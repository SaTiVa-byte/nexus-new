module.exports = (client, message, track) => {
    message.channel.send({embed:{
      color: "Blurple",
      description:`<:music:924742283914514452> - Spiel nun ${track.title} in ${message.member.user} `}});
};