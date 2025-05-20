 const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: String,
  duration: Number,
  calories: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Workout', workoutSchema);

