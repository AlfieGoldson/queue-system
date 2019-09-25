const User = require('../models/User');
const Queue = require('../models/Queue');

module.exports = (discordID, channel) => {
    queue(discordID)
        .then(msg => channel.send(msg)
            .catch(console.error))
        .catch(console.err);
}

const queue = (discordID) => {
    return new Promise((resolve, reject) => {
        User.findOne({ discordID })
            .then(user => {
                console.log(user);
                if (!user)
                    resolve(messages.NOT_REG);
                else
                    new User({ discordID, name })
                        .save()
                        .then(_ => {
                            resolve(messages.SUCCESS_REG);
                        })
                        .catch(console.err);
            })
            .catch(console.err);
    })
}