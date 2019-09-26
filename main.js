const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose');

module.exports = {
    connect: (database) => {
        return new Promise((resolve, reject) => {
            mongoose.createConnection(database, { useNewUrlParser: true, useUnifiedTopology: true })
                .then((connection) => {
                    module.exports.queueDB = connection;
                    console.log('📙  • Database Connection Sucessful!');
                    exportFunctions();
                    resolve();
                }).catch(reject);
        });
    }
}

const exportFunctions = () => {
    module.exports.register = require('./functions/register');
    module.exports.startQueue = require('./functions/queue-start');
    module.exports.endQueue = require('./functions/queue-end');
}

// const database = `mongodb+srv://Corehalla:${process.env.MATLAS_KEY}@corehalla-xtv6m.mongodb.net/queue?retryWrites=true&w=majority`;
// mongoose.connect(database, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//     console.log('📙  • Database Connection Sucessful!')
//     const discordBot = require('./discord-bot');
// }).catch(err => console.log(err));