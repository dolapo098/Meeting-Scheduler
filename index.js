const express = require('express');
const app = express()
const DB = require('./connectDB/db')
const userRoute = require('./routes/user')
const scheduleRoute = require('./routes/schedule')

DB(); /* connection to database */

// declarations of middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/', userRoute);
app.use('/', scheduleRoute);

// Running the Server
const port = 4000;
app.listen(port, err=>{
    if(err){
        console.log('error running server');
    }
    else{
        console.log(`Server now running on port ${port}`)
    }
})