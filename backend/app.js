const express = require('express')
const cors = require('cors')

// start express
const app = express()


// Middlewares
app.use(express.json())
app.use(cors())


// Routes


module.exports = app