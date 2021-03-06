

const mongoose = require('mongoose');
const config = require('config')
const db = config.get('mongoURI')

const dbConnect = async()=>{

    try{
        await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true })
        console.log('database now connected')
    }catch(err){
        console.log(err);
    }
}

module.exports = dbConnect