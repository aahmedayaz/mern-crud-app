const express = require('express')
const workoutModel = require('../models/workoutModel')

// Router
const router = express.Router()

// routes

// GET all Workouts
router.get('/' , (req , res) => {
    res.json({msg : 'Get All Workouts'})
    console.log('Get All Workouts')
})

// GET a single Workout
router.get('/:id' , (req , res) => {
    res.json({msg : 'GET a single Workout'})
    console.log('GET a single Workout')
})

// POST a new Workout
router.post('/' , async (req , res) => {
    const {title , reps , load} = req.body

    try{
        const newWorkout = await workoutModel.create({title, reps, load})
        res.status(200).json(newWorkout)
    }
    catch(err){
        res.json({error: err.message})
    }
})

// PATCH a Workout
router.patch('/:id' , (req , res) => {
    res.json({msg : 'PATCH a Workout'})
    console.log('PATCH a Workout')
})

// DELETE a Workout
router.delete('/:id' , (req , res) => {
    res.json({msg : 'DELETE a Workout'})
    console.log('DELETE a Workout')
})

module.exports = router