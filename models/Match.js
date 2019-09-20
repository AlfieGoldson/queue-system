const mongoose = require('mongoose');
const { GameMode, MatchStatus, Region } = require('./enums');

const Team = require('./Team');
const MatchReport = require('./MatchReport');

module.exports = mongoose.model('Match', {
    team1: Team,
    team2: Team,
    team1Report: MatchReport,
    team2Report: MatchReport,
    result: MatchReport,
    status: MatchStatus,
    region: Region,
    gameMode: GameMode
});