const mongoose = require('mongoose');
const { GameMode, QueueStatus, Region } = require('./enums');

const { QueueSchema, UserSchema, MatchSchema } = require('./schemasDefs');

QueueSchema.add({
    player: UserSchema,
    gamemode: GameMode,
    status: QueueStatus,
    region: Region,
    match: MatchSchema,
});

module.exports = mongoose.model('Queue', QueueSchema);