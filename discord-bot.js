const Discord = require('discord.js');
const client = new Discord.Client();

const register = require('./functions/register');
const beginQueue = require('./functions/begin-queue');
const endQueue = require('./functions/end-queue');

client.on('ready', () => {
    console.log(`🤖  • Logged in as ${client.user.tag}!`);
    client.user.setStatus("dnd");
    client.user.setActivity("Brawlhalla", { type: "WATCHING" });
});

client.on('message', msg => {
    const args = msg.content.split(' ');

    switch (args[0]) {
        case '!register':
            register(msg.author.id, msg.author.username, msg.channel);
            break;

        case '!q':
            beginQueue(msg.author.id, '1v1', args[1], msg.channel);
            break;

        case '!dq':
            endQueue(msg.author.id, msg.channel);
            break;

        case '!profile':
            break;

        case '!report':
            break;

        default:
            break;
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);