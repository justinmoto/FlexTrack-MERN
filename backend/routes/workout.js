const express = require('express')
const Workout = require('../models/WorkoutModel')
const { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require auth for all workout routes
router.use(requireAuth)

//GET All Workout
router.get('/', getWorkouts)

//Get Single Workout
router.get('/:id', getWorkout)

//POST a new Workout
router.post('/', createWorkout)

//Delete a Workout
router.delete('/:id', deleteWorkout)

//Update a Workout
router.patch('/:id', updateWorkout)


module.exports = router