const mongoose = require('mongoose');

const Queue = require('./Queue');
const Match = require('./Match');
const Team = require('./Team');

module.exports = mongoose.model('User', {
    name: String,
    discordID: String,
    queues: [Queue],
    match: [Match],
    teams: [Team]
});