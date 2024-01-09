require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

// Exports
const workoutRoutes = require('./routes/workouts')

// Express App
const app = express()
const port = process.env.PORT || 3000

// Middlewares

app.use(express.json())

// app.use((req , res , next) => {
//     console.log(req.path + "\n" + req.method);
//     next()
// })

// Routes
app.use('/api/workouts' , workoutRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Connected to Mongo & Listening at http://localhost:${port}`)
        })
    })
    .catch((err) => {
        console.log("Error : " , err)
    })