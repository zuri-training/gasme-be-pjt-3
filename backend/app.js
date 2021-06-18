const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const morgan = require('morgan');


// start express
const app = express();


// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


// Routes
app.use('/auth', authRoutes);
app.use('/user', userRouter)
app.get('/', (req, res) => {
    return res.status(200).json({message: 'Welcome to Gas & Me'})
})

module.exports = app;