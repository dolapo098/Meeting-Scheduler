const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const scheduleModel = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profile'
    },
    createdBy:{
        type : String //name
    },
    to :{
        type : Array //emails []
    },
     meetingTime :{
        type:  Date, /* IsoDate format 2020/02/17  12:41:34 */
        required : true /*formats to date and time object */
    },
     endDate :{
        type : Date,
        required : true
    },
    venue:{
        type :String
    },
    duration :{
        type : Number,
        required : true
    }
})
module.exports = mongoose.model('schedule', scheduleModel);