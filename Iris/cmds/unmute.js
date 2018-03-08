module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.reply("You don't have permission to do that!");

    let toUnmute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!toUnmute) return message.reply("You must mention a user or their ID!");

    if (toUnmute.id === message.author.id) return message.reply("What are you trying to do, unmuting yourself?! That's like continuing to work after you've been suspended!");

    let role = message.guild.roles.find(r => r.name === "Muted by Iris");

    if (!role || !toUnmute.roles.has(role.id)) return message.reply(`${toUnmute} is already unmuted!`);

    await toUnmute.removeRole(role);
    message.reply(`${toUnmute} is unmuted.`);
}

module.exports.help = {
    name: "unmute",
    usage: "unmute <mention/ID>"
}