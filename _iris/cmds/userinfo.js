const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    user = message.author;
    if (message.mentions.users.size > 1) { return message.reply("Cannot get info of multiple users yet."); }
    else if (message.mentions.users.size > 0) { user = message.mentions.users.array()[0]; }

    gamename = "No game"; gamestream = "Not streaming";
    if (user.presence.game) {
        gamename = user.presence.game.name;
        gamestream = user.presence.game.streaming;
    }

    let embed = new discord.RichEmbed()
        .setTitle("User Info")
        .setDescription(`Info for **${user.username}**`)
        .setColor("#1e89c7")
        .setThumbnail(user.avatarURL)
        .setTimestamp()
        .addField("ID", user.id, true)
        .addField("Tag", user.tag, true)
        .addField(":calendar_spiral: Created", `**Time:** ${user.createdAt} \n**Timestamp:** ${user.createdTimestamp}`, true)
        .addField(":robot: Is Bot?", user.bot, true)
        .addField(":video_game: Game", "**Name:** " + gamename + "\n**Streaming:** " + gamestream, true)
        .addField("Status", user.presence.status, true);



    message.channel.send(embed);
}

module.exports.help = {
    name: "userinfo",
    usage: "userinfo <mention (optional)>",
    description: "Userinfo for you or another user.",
    category: "utility"
}