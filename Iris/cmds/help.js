const discord = require("discord.js");
const config = require("../config.json");
const package = require("../package.json");

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
        .setTitle(`Prefix: ${config.prefix}`)
        .setColor("#1e89c7")
        .addField("**__General Commands__**", "help, hi")
        .addField("**__Moderation Commands__**", "kick, ban, mute, unmute, purge, announce")
        .addField("**__Fun Commands__**", "8ball, say, stupid, dead, dice")
        .addField("**__Utility Commands__**", "userinfo, ping, serverinfo")
        .addField("**__Other__**", "about, credit, reload")
        .setFooter(`Iris v${package.version}`);
    if (config.maintainers.includes(message.author.id)) embed.addField("**__Developer Only!__**", "setgame, eval")

    message.author.send(embed);
    message.reply("Check your DMs!");
}

module.exports.help = {
    name: "help",
    usage: "help"
}