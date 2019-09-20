const mongoose = require('mongoose');
const { GameMode, QueueStatus, Region } = require('./enums');

const User = require('./User');
const Match = require('./Match');

module.exports = mongoose.model('Queue', {
    player: User,
    gamemode: GameMode,
    status: QueueStatus,
    region: Region,
    match: Match,
});