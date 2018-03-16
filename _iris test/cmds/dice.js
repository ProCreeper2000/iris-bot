const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!args || args == null || !(args >= 1) || !(args <= 10)) return message.reply("Provide number of dice to roll from 1 to 10.");

    let text = "";

    for (i=1; i<=args; i++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        text += `\nDice ${i} rolled ${roll}.`
    }

    let embed = new discord.RichEmbed()
        .setTitle("Roll a die.")
        .setColor("#1e89c7")
        .addField(":game_die:", text);

    message.channel.send(embed);
}

module.exports.help = {
    name: "dice",
    usage: "dice <1-10>",
    description: "Rolls a die. Or 10.",
    category: "fun"
}