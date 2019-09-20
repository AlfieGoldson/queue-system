const mongoose = require('mongoose');

const User = require('./models/User');

module.exports = {
    Query: {
        users: (_, { name }) => User.find({ name })
    },
    Mutation: {
        // Users
        userCreate: (_, { name, discordID }) => {
            const newUser = new User({ name, discordID })
            newUser.save();
            return newUser;
        },
        userChangeName: (_, { user, name }) => {

        },
        userAddTeam: (_, { user, team }) => {

        },
        userAddMatch: (_, { user, match }) => {

        },
        userAddQueue: (_, { user, queue }) => {

        },

        // Queues
        queueCreate: (_, { user, gameMode, region }) => {

        },
        queueUpdate: (_, { queue, status, match }) => {

        },

        // Teams
        teamCreate: (_, { players }) => {

        },

        // Matches
        matchCreate: (_, { team1, team2, region, gameMode }) => {

        },
        matchReport: (_, { match, team1Score, team2Score }) => {

        },
        matchResolve: (_, { match, status, report }) => {

        }
    }
};