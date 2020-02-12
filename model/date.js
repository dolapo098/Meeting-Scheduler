const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dateSchema = new Schema({
     startDate :{
        type: Date,
        required : true
    },
     endDate :{
        type : Date
    }
})

module.exports = mongoose.model('dates', dateSchema);