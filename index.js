const Discord = require("discord.js");
const bot = new Discord.Client();

const token = '  ';

bot.on('ready', () =>{
    console.log(`
    
    - This Bot is Online.
    - Logged in **${bot.user.tag}**.
    - All Codes Working.

    `)
})








bot.login(token);
