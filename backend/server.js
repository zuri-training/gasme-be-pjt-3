// setup db, PORT and config settings

const app = require('./app')

const PORT = 5000
app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}...`)
})