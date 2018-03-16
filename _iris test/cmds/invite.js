const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let link = await bot.generateInvite(["ADMINISTRATOR"]);

    let embed = new discord.RichEmbed()
        .setColor("#1e89c7")
        .addField(":link: Invite Iris to a server!", link);

    message.channel.send(embed)
}

module.exports.help = {
    name: "invite",
    usage: "invite",
    description: "Invite link.",
    category: "general"
}