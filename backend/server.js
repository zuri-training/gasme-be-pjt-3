// setup db, PORT and config settings
const connectDB = require('./db/index');

require('dotenv').config();

const app = require('./app');

connectDB(app);


