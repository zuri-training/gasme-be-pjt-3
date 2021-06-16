const express = require('express')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes');

// start express
const app = express()


// Middlewares
app.use(express.json())
app.use(cors())


// Routes
app.use('/user', userRoutes)

module.exports = app