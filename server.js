const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

const database = `mongodb+srv://Corehalla:${process.env.MATLAS_KEY}@corehalla-xtv6m.mongodb.net/queue?retryWrites=true&w=majority`;
mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    const discordBot = require('./discord-bot');
}).catch(err => console.log(err));