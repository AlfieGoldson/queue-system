const mongoose = require('mongoose');

const { UserSchema, QueueSchema, MatchSchema, TeamSchema } = require('./schemasDefs');

UserSchema.add({
    name: String,
    discordID: String,
    queues: [QueueSchema],
    match: [MatchSchema],
    teams: [TeamSchema]
});

module.exports = mongoose.model('User', UserSchema);