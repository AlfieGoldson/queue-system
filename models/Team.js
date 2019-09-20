const mongoose = require('mongoose');

const { TeamSchema, UserSchema } = require('./schemasDefs');

console.log(User);

TeamSchema.add({
    players: [UserSchema]
});

module.exports = mongoose.model('Team', TeamSchema);