const mongoose = require('mongoose');

const User = require('./models/User');

module.exports = {
    Query: {
        users: (_, { name }) => User.find({ name })
    },
    Mutation: {
        createUser: (_, { name, discordID }) => {
            const newUser = new User({ name, discordID })
            newUser.save();
            return newUser;
        }
    }
};