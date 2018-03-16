const discord = require("discord.js");

module.exports.run = async (bot, message, args, settings) => {
   const key = args[0];
   if(!settings.hasOwnProperty(key)) return message.reply("This key is not in the configuration.");
   
   const value = args[1];
   settings[key] = value;
   
   settings.set(message.guild.id, settings);
   
   message.channel.send(`Guild configuration item ${key} has been changed to:\n\`${value}\``);
}

module.exports.help = {
    name: "setconf",
    usage: "setconf <key> <value>" ,
    description: "Sets guild's config.",
    category: "utility"
}