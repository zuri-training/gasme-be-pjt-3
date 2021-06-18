const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

// start express
const app = express();


// Middlewares
app.use(express.json());
app.use(cors());


// Routes
app.use('/auth', authRoutes);
app.get('/yeah', (req, res) => {
    return res.status(200).json({message: 'die'})
})

module.exports = app;