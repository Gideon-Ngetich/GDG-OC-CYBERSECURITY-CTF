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

const randomDataSchema = new mongoose.Schema({
    randomValue: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });

  const Value =  mongoose.model('Values', randomDataSchema)

module.exports = { Flag, Value }