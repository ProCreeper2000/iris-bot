const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
        .setTitle("Credits")
        .setColor("#1e89c7")
        .addField("ProCreeper2000", "Developer of Iris")
        .addField("Dan.", "For helping with code issues and being a great tester.")
        .addField("haydenbrown39", "For helping with code issues. Also a good friend")
        .setFooter("Logo inspired by work from Casbas 234. \nSome code based on bot by Casbas 234, LigTek.");

    message.channel.send(embed);
}

module.exports.help = {
    name: "credit",
    usage: "credit",
    description: "Credits.",
    category: "general"
}