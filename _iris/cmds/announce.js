const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have permission to do that!");
    if (args.length < 1) return message.reply("Well, if you announce you gotta announce something...");
    let toAnnounce = args.join(" ");
    message.delete();

    let embed = new discord.RichEmbed()
        .setTitle(`Announcement`)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("#1e89c7")
        .setDescription(toAnnounce);

    message.channel.send(embed)
}

module.exports.help = {
    name: "announce",
    usage: "announce <announcement>",
    description: "Makes a nice looking announcement. (For staff)",
    category: "moderation"
}