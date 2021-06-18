/*
create a connection funtion for mongo db
start a local mongo db server connection
*/

const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URI } = process.env;

//create a connection function
const connectDB = () => {
    mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        .then(() => {
            console.log('db connected');

            //send data
        })
        .catch((err) => {
            console.error(err.message);
            //Exit with failure
            process.exit(1);
        })
};

module.exports = connectDB;