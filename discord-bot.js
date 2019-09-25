const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setStatus("dnd");
    client.user.setActivity("Brawlhalla", { type: "WATCHING" });
});

client.on('message', msg => {
    const args = msg.content.split(' ');

    switch (args[0]) {
        case '!register':
            register(msg.author.username, msg.author.id);
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

const register = (name, id) => {

}

client.login(process.env.DISCORD_BOT_TOKEN);