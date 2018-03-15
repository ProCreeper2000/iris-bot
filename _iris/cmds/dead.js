const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let percent = Math.floor(Math.random() * 100);
    let dead = ":grinning:";
    if (percent >= 65) dead = ":skull:";
    else if (percent >= 35) dead = ":dizzy_face:";

    let embed = new discord.RichEmbed()
        .setTitle("How dead are you?")
        .setColor("#1e89c7")
        .addField(dead, `You are ${percent}% dead.`);

    message.channel.send(embed);
}

module.exports.help = {
    name: "dead",
    usage: "dead",
    description: "How dead are you?",
    category: "fun"
}