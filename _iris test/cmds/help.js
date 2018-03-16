const discord = require("discord.js");
const config = require("../config.json");
const package = require("../package.json");

module.exports.run = async (bot, message, args) => {
    let text = "";
    let i = 0;

    bot.help.forEach((value, key) => {
        if (i < 6) {
            text += `\n${key} - ${value}`;
            i++;
        } else {
            let embed = new discord.RichEmbed()
                .setTitle(`Prefix: ${config.prefix}`)
                .setColor("#1e89c7")
                .addField(`**__Commands__**`, text)
                .setFooter(`Iris v${package.version}`);

            message.author.send(embed);
            text = "";
            i = 0;
        }
    });

    message.reply("Check your DMs!");
}

module.exports.help = {
    name: "help",
    usage: "help",
    description: "Whatever you just did.",
    category: "general"
}