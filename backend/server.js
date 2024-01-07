require('dotenv').config()
const express = require('express')

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

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})