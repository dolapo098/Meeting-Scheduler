const express = require('express');
const app = express()
const DB = require('./connectDB/db')
const router = require('./routes/user')


DB();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use('/', router);


const port = 4000;

app.listen(port, err=>{
    if(err){
        console.log('error running server');
    }
    else{
        console.log(`Server now running on port ${port}`)
    }
})