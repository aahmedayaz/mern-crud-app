require('dotenv').config()
const express = require('express')

// Express App
const app = express()
const port = process.env.PORT || 3000

// Middlewares
app.use((req , res , next) => {
    console.log(req.path + "\n" + req.method);
    next()
})

// Routes
app.get('/' , (req , res) => {
    res.send({msg : 'Hello , Its me the A'})
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})