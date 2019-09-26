const mongoose = require('mongoose');
const { GameMode, QueueStatus, Region } = require('../util/enums');

const { QueueSchema, UserSchema, MatchSchema } = require('./schemasDefs');

QueueSchema.add({
    player: UserSchema,
    gamemode: {
        type: String,
        enum: GameMode,
        default: '1v1'
    },
    status: {
        type: String,
        enum: QueueStatus,
        default: 'Active'
    },
    region: {
        type: String,
        enum: Region,
        default: 'none'
    },
    match: MatchSchema,
});

module.exports = mongoose.model('Queue', QueueSchema);