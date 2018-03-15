const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var date = new Date(null);
    date.setSeconds(bot.uptime / 1000);

    let embed = new discord.RichEmbed()
        .setColor("#1e89c7")
        .setTitle("Iris")
        .setDescription("This is Iris. Bot by ProCreeper2000.")
        .addField("Created by", "ProCreeper2000 / @ProCreeper2000#6392", true)
        .addField(":ping_pong: Ping:", `${Math.floor(bot.ping)} ms`, true)
        .addField("Servers", `In ${bot.guilds.size} servers`, true)
        .addField("Users", `${bot.users.size} users`, true)
        .addField("Node.JS", process.version, true)
        .addField("Discord.JS", `v${discord.version}`, true)
        .addField(":clock8: Uptime", `${date.toISOString().substr(11, 8)}`, true);

    message.channel.send(embed);
}

module.exports.help = {
    name: "about",
    usage: "about",
    description: "About the bot.",
    category: "utility"
}