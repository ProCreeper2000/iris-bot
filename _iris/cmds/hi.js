const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
        .setDescription(`Hello ${message.author}!`)
        .setColor("#1e89c7");

    message.channel.send(embed)
}

module.exports.help = {
    name: "hi",
    usage: "hi",
    description: "Says hi!",
    category: "general"
}