const Discord = require('discord.js');
const client = new Discord.Client();

const register = require('./functions/register');

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

        case '!queue':
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