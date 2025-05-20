const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');
const auth = require('../middleware/authMiddleware');

// Add a workout
router.post('/', auth, async (req, res) => {
  try {
    const workout = new Workout({ ...req.body, user: req.user });
    const saved = await workout.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add workout' });
  }
});

// Get workouts
router.get('/', auth, async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user });
    res.json(workouts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch workouts' });
  }
});

// Delete a workout
router.delete('/:id', auth, async (req, res) => {
  try {
    await Workout.deleteOne({ _id: req.params.id, user: req.user });
    res.json({ message: 'Workout deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete workout' });
  }
});

module.exports = router;
 
