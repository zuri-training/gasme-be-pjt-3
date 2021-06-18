/*
Express server
connect to mongo db 
intialize express
intialize express midleware
createe geet request
inject routes
listen to app connection 
*/

const express = require('express');
const connectDB = require('./db');
require('dotenv').config(); //use varriables in .emv
//taking out port varriable from object
const User = require('./models/userModel');
const Vendor = require('./models/vendorModel');

//connect to db 
connectDB();

//iniitialize express
const app = express();

//iniitialize express middle ware (parse json)
app.use(express.urlencoded({ extended: false }))
    // parse json
app.use(express.json())

//create a express route

app.get('/', (req, res) => res.json({ message: "welcome to gas and me" }));

//create a port 
const port = process.env.PORT;
//listen on port 
app.listen(port, () => console.log(`im listening on you  on port ${port}`));