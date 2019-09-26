const User = require('../models/User');
const Queue = require('../models/Queue');

const messages = require('../util/messages');

module.exports = (discordID, gamemode, region, channel) => {
    beginQueue(discordID, gamemode, region)
        .then(msg => channel.send(msg)
            .catch(console.error))
        .catch(console.error);
}

const beginQueue = (discordID, gamemode, region) => {
    return new Promise((resolve, reject) => {
        User.findOne({ discordID })
            .then(user => {
                if (!user)
                    resolve(messages.queue.failure.NOT_REGISTERED);
                else if (user.status === 'InQueue') {
                    resolve(messages.queue.failure.ALREADY_QUEUEING);
                }
                else if (user.status === 'InMatch') {
                    resolve(message.queue.failure.ALREADY_IN_MATCH)
                }
                else if (user.status === 'Idle') {
                    const newQueue = new Queue({
                        player: user,
                        gamemode,
                        region
                    })
                        .save()
                        .then(queue => {
                            user.status = 'InQueue';
                            user.queues.push(queue);
                            user
                                .save()
                                .then(_ => resolve(messages.queue.success.QUEUE_START_SUCCESS))
                                .catch(console.error);
                        })
                        .catch(console.error)

                }
            })
            .catch(console.error);
    })
}