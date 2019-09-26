const Discord = require('discord.js');
const client = new Discord.Client();

const queueSystem = require('./main');

client.on('ready', () => {
    console.log(`🤖  • Logged in as ${client.user.tag}!`);
    client.user.setStatus("dnd");
    client.user.setActivity("Brawlhalla", { type: "WATCHING" });
});

client.on('message', msg => {
    const args = msg.content.split(' ');

    switch (args[0]) {
        case '!register':
            queueSystem.register(msg.author.id, msg.author.username, msg.channel);
            break;

        case '!q':
            queueSystem.startQueue(msg.author.id, '1v1', args[1], msg.channel);
            break;

        case '!dq':
            queueSystem.endQueue(msg.author.id, msg.channel);
            break;

        case '!profile':
            break;

        case '!report':
            break;

        default:
            break;
    }
});

const database = `mongodb+srv://Corehalla:${process.env.MATLAS_KEY}@corehalla-xtv6m.mongodb.net/queue?retryWrites=true&w=majority`;
queueSystem.connect(database)
    .then(() => {
        client.login(process.env.DISCORD_BOT_TOKEN);
    })
    .catch(console.error);