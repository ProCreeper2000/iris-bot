const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    responses = [
        "It is certain", //10 positive
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again", //5 non-commital
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it", //5 negative
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ];

    if (args.length < 2 || !args.join(" ").endsWith("?")) return message.reply("You must ask something of the Magic 8-ball!");

    let embed = new discord.RichEmbed()
        .setColor("#1e89c7")
        .addField(":8ball: 8ball says:", `${responses[Math.floor(Math.random() * responses.length)]}`);

    message.channel.send(embed);
}

module.exports.help = {
    name: "8ball",
    usage: "8ball <question>",
    description: "Ask a question to the Magic 8-ball!",
    category: "fun"
}