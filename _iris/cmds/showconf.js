const discord = require("discord.js");

module.exports.run = async (bot, message, args, config) => {
    configKeys = config.map( (value, key) => `${key}  :  ${value}`).join("\n");
    message.channel.send(`The following are the server's current configuration: \`\`\`${configKeys}\`\`\``);
}

module.exports.help = {
    name: "showconf",
    usage: "showconf",
    description: "Shows config for the current guild.",
    category: "developer"
}