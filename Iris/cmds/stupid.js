const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let percent = Math.floor(Math.random() * 100);
    let gay = ":nerd:"; 
    if (percent >= 50) gay = ":grinning:";
    else if (percent >= 35) dead = ":thinking:";

    let embed = new discord.RichEmbed()
        .setTitle("How stupid are you?")
        .setColor("#1e89c7")
        .addField(gay, `You are ${percent}% stupid!`);

    message.channel.send(embed);
}

module.exports.help = {
    name: "stupid",
    usage: "stupid"
}