// setup db, PORT and config settings
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = require('./app');

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}...`)
});