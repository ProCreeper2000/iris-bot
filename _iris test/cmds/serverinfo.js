const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.avatarURL)
        .setDescription(`Info for **${message.guild.name}**`, message.guild.iconURL)
        .setColor("#1e89c7")
        .addField("Guild name:", `${message.guild.name}`, true)
        .addField(":calendar_spiral: Server created", `**Time:** ${message.guild.createdAt} \n**Timestamp:** ${message.guild.createdTimestamp}`, true)
        .addField(":busts_in_silhouette: Members", `${message.guild.memberCount}`, true)
        .addField(":bust_in_silhouette: Owner", `${message.guild.owner}`, true)
        .addField(":earth_africa: Server Region", `${message.guild.region}`, true);

    message.channel.send(embed);
}

module.exports.help = {
    name: "serverinfo",
    usage: "serverinfo",
    description: "Info about the server.",
    category: "utility"
}