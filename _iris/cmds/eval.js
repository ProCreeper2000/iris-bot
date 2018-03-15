const discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    if (!config.maintainers.includes(message.author.id)) return message.reply("You are not a maintainer.");
    if (!config.hlmaintainers.includes(message.author.id)) return message.reply("You are not a high-level maintainer.");

    try {
        const code = args.join(" ");

        if (code.indexOf(".token") !== -1) return message.reply("Nah bruv");

        let evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

        message.channel.send(evaled, { code: "xl" });
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
    }
}

module.exports.help = {
    name: "eval",
    usage: "eval <js>",
    description: "Evals js.",
    category: "dev"
}