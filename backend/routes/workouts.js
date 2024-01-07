const express = require('express')

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
router.post('/' , (req , res) => {
    console.log(req.body)
    res.json({msg : 'POST a new Workout'})
    console.log('POST a new Workout')
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