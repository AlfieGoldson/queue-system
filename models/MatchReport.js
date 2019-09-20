const mongoose = require('mongoose');
const { ReportStatus } = require('./enums');

const Match = require('./Match');
const Team = require('./Team');

module.exports = mongoose.model('MatchReport', {
    match: Match,
    team1Score: Int,
    team2Score: Int,
    winner: Team,
    reportStatus: ReportStatus
});