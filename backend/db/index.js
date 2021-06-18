/*
create a connection funtion for mongo db
start a local mongo db server connection
*/

const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_URI, PORT } = process.env;

//create a connection function
const connectDB = (app) => {
    mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        .then(() => {

            app.listen(PORT, () => {
                console.log(`App running on port: ${PORT}...`)
            });

        })
        .catch((err) => {
            console.error(err.message);
            //Exit with failure
            process.exit(1);
        })
};

module.exports = connectDB;