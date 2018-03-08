const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let choice; //1 is rock, 2 is paper, 3 is scissors

    if(!args || args[0] == null) return message.reply("You must enter your choice! (rock/paper/scissors)");

    if (args[0] == "rock") choice = 1;
    else if (args[0] == "paper") choice = 2;
    else if (args[0] == "scissor" || args[0] == "scissors") choice = 3;
    else return message.reply("That is not a valid answer.");

    let bChoice = Math.floor(Math.random() * 3) + 1;

    let win = false;
    if (choice == 1 && bChoice == 3) win = true;
    if (choice == 2 && bChoice == 1) win = true;
    if (choice == 3 && bChoice == 2) win = true;

    let text = "I chose ";
    if (bChoice == 1) text += "rock.";
    if (bChoice == 2) text += "paper.";
    if (bChoice == 3) text += "scissors.";

    if (choice == bChoice) { text += " Tie!"; }
    else {
        if (win) text += " You win!";
        if (!win) text += " You lose!";
    }

    let embed = new discord.RichEmbed()
        .setTitle(text)
        .setColor("#1e89c7");

    message.channel.send(embed);
}

module.exports.help = {
    name: "rps",
    usage: "rps <rock/paper/scissor/scissors>"
}