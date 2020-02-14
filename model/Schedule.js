const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheduleSchema = new Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'profile'
    },
    createdBy:{
        type : String //name
    },
    To :{
        type : String //emails []
    },
     startDate :{
        type: Date,
        required : true
    },
     endDate :{
        type : Date
    },
    startTime :{
        type :String, /* 11:00 format */
        required : true
    },
    venue:{
        type :String
    },
    duration :{
        type : Array,
        default: [10,20,30,40,50,60]
    }
})

module.exports = mongoose.model('schedule', scheduleSchema);