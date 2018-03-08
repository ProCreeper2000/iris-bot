const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.reply("You don't have permission to do that!");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!toMute) return message.reply("You must mention a user or their ID!");

    if (toMute.id === bot.id) return message.channel.send("...");
    if (toMute.id === message.author.id) return message.reply("What are you trying to do, muting yourself?!");
    if (toMute.highestRole.position >= message.member.highestRole.position) return message.reply("What are you trying to do, muting someone higher than you?! That's like suspending your boss!");

    if (args[1] > 604800 || args[1] < 10) return message.reply("You must specify the number of seconds to mute someone between 10 and 604800.");


    let role = message.guild.roles.find(r => r.name === "Muted by Iris");
    if (!role) {
        try {
            role = await message.guild.createRole({
                name: "Muted by Iris",
                color: "#010101",
                permissions: []
            });

            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    if (toMute.roles.has(role.id)) return message.reply(`${toMute} is already muted!`);

    let seconds = 3600;
    if (args[1]) seconds = args[1];

    bot.mutes[toMute.id] = {
        guild: message.guild.id,
        time: Date.now() + parseInt(seconds) * 1000
    };

    await toMute.addRole(role);

    fs.writeFile("./mutes.json", JSON.stringify(bot.mutes, null, 4), err => {
        if (err) throw err;
        message.reply(`${toMute} is muted for ${seconds} seconds.`);
    });
}

module.exports.help = {
    name: "mute",
    usage: "mute <mention/ID>"
}