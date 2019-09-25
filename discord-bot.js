const Discord = require('discord.js');
const client = new Discord.Client();

const ApolloBoost = require('apollo-boost');
const fetch = require('node-fetch');
const ApolloClient = ApolloBoost.default;
const { gql } = require('apollo-boost');

const apolloClient = new ApolloClient({
    uri: 'http://localhost:31199',
    fetch: fetch
});

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

    const GET_USERS = gql`
    query FetchUsers($discordID: String!) {
        users(discordID: $discordID) {
            id
            name
            discordID
        }
    }
    `

    const CREATE_USER = gql`
    mutation CreateUser($name: String!, $discordID: String!) {
        userCreate(name: $name, discordID: $discordID) {
            id
            name
            discordID
        }
    }
    `
    apolloClient.query({
        query: GET_USERS,
        variables: {
            discordID: id
        }
    }).then(res => {
        console.log(res.data);
        if (res.data.users.length > 0)
            return;
        apolloClient.mutate({
            mutation: CREATE_USER,
            variables: {
                name: name,
                discordID: id
            }
        }).then(console.log);
    })
}

client.login(process.env.DISCORD_BOT_TOKEN);