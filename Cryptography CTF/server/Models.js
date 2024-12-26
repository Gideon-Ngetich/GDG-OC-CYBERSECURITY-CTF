const mongoose = require('mongoose')

const chalengesSchema = new mongoose.Schema({
    challengeId: {
        type: String,
        required: true
    },
    flag: {
        type: String,
        required: true
    }
})

const Flag = mongoose.model('Flags', chalengesSchema)

module.exports = { Flag }