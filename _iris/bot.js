const discord = require("discord.js");
const config = require("./config.json"); //Config.json contains the token and prefix
const bot = new discord.Client();
const fs = require('fs');

bot.commands = new discord.Collection();

bot.usage = new discord.Collection();
bot.help = new discord.Collection();
bot.category = new discord.Collection();

bot.mutes = require("./mutes.json");

const message = "msg";

exports.load = () => {
    fs.readdir("./cmds/", (err, files) => {
        if (err) console.error(err);

        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if (jsfiles.length <= 0) return console.log("No commands found.");

        console.log(`Loading ${jsfiles.length} commands...`)

        jsfiles.forEach((f, i) => {
            let props = require(`./cmds/${f}`);
            console.log(`${i + 1}. ${f} loaded!`);
            bot.commands.set(props.help.name, props);
            bot.usage.set(props.help.name, props.help.usage);
            bot.help.set(props.help.name, props.help.description);
            bot.category.set(props.help.name, props.help.category);
        });
    });
}

this.load();

bot.on("ready", async () => {
    console.log(`Token: ${config.token}`);
    console.log(`Prefix: ${config.prefix}`);
    console.log(`Bot Ready! Logged in as ${bot.user.tag}.`);
    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log(link);
    } catch(e) {
        console.log(e.stack);
    }

    bot.user.setStatus("online");
    bot.user.setActivity(fs.readFileSync("./setgame.txt", {"encoding": "utf-8"}));

    bot.setInterval(() => {
        for (let i in bot.mutes) {
            let time = bot.mutes[i].time;
            let guildId = bot.mutes[i].guild;
            let guild = bot.guilds.get(guildId);
            let member = guild.members.get(i);
            let mutedRole = guild.roles.find(r => r.name === "Muted by Iris");
            if (!mutedRole) continue;

            if (Date.now() > time) {
                member.removeRole(mutedRole);
                delete bot.mutes[i];

                fs.writeFile("./mutes.json", JSON.stringify(bot.mutes), err => {
                    if (err) throw err;
                    console.log(`${member.user.tag} unmuted.`);
                });
            }
        }
    }, 5000);﻿
});
 
 
 
bot.on("message", async function (message) {
    if (message.author.bot || !message.content.startsWith(config.prefix)) return;
    if (message.channel.type === "dm") return message.reply("Commands are not available via DM!");
 
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let cmd = bot.commands.get(command);
    if (cmd) cmd.run(bot, message, args);
})

bot.login(config.token);