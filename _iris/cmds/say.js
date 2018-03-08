const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const toSay = args.join(" ");
    message.delete().catch(err => { });
    message.channel.send(toSay);
}

module.exports.help = {
    name: "say",
    usage: "say <message>"
}