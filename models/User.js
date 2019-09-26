const mongoose = require('mongoose');

const { UserSchema, QueueSchema, MatchSchema, TeamSchema } = require('./schemasDefs');
const { UserStatus } = require('../util/enums');

UserSchema.add({
    name: String,
    discordID: String,
    status: {
        type: String,
        enum: UserStatus,
        default: 'Idle'
    },
    queues: [QueueSchema],
    match: [MatchSchema],
    teams: [TeamSchema]
});

module.exports = mongoose.model('User', UserSchema);