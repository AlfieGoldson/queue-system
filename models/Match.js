const mongoose = require('mongoose');
const { GameMode, MatchStatus, Region } = require('./enums');

const { MatchSchema, MatchReportSchema, TeamSchema } = require('./schemasDefs');


MatchSchema.add({
    team1: TeamSchema,
    team2: TeamSchema,
    team1Report: MatchReportSchema,
    team2Report: MatchReportSchema,
    result: MatchReportSchema,
    status: MatchStatus,
    region: Region,
    gameMode: GameMode
});

module.exports = mongoose.model('Match', MatchSchema);