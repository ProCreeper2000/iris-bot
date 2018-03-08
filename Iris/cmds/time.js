const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
        .setColor("#1e89c7")
        .addField("Your message was sent at:", message.createdAt)

    message.channel.send(embed);
}

module.exports.help = {
    name: "time",
    usage: "time"
}