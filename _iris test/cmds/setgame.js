const discord = require("discord.js");
const config = require("../config.json");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    if (args.length < 1) return message.reply("Provide the name to set the bot's game to.");
    game = args.join(" ");
    if (!config.maintainers.includes(message.author.id)) return message.reply("You are not a maintainer!");

    bot.user.setActivity(game);
    message.reply(`Game is set to ${game}.`);
    fs.writeFile("./setgame.txt", game, (err) => { if (err) console.error(err) });
}

module.exports.help = {
    name: "setgame",
    usage: "setgame <game>",
    description: "Sets bot's game.",
    category: "dev"
}