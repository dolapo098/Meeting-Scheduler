const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const durationSchema = new Schema({
    date :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'date',
       
    },
    duration :{
        type : Array,
        default : [10, 30, 60, 90, 120, 150, 180]
    }
})

module.exports = mongoose.model('timer', durationSchema);