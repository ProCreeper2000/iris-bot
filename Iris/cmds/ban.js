const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have permission to do that!");

    let member = message.mentions.members.first();
    if (!member)
        return message.reply("You must mention a member of this server");
    if (!member.kickable)
        return message.reply("What are you trying to do, banning someone higher than you?! That's like firing your boss!");

    let reason = args.slice(1).join(' ');
    if (!reason)
        return message.reply(`Provide a reason to ban ${member}.`);

    await member.ban(reason)
        .catch(error => message.reply(`Error: ${error}`));
    message.channel.send(`${member.user.username} has been banned by ${message.author.username}\nReason: ${reason}`);
}

module.exports.help = {
    name: "ban",
    usage: "ban <user> <reason>"
}