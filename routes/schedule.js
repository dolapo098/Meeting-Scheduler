const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const userModel = require('../model/User')
const userValidator = require("../validator/scheduleValidator").validateInputs
const getErrors = require("../validator/scheduleValidator").setErrors
const scheduleModel = require('../model/Schedule')


// @route  Post routes/schedule
// @desc   schedule meeting
//@access  private
router.post('/scheduleMeeting',userValidator(),getErrors, auth, async(req,res)=>{
    const {meetingTime,endDate,venue,duration} = req.body
    let createdBy=""
    let to=[]
    try{
        const user = await  userModel.find().select("-password");
        for(let i=0; i<user.length;i++){ /*obtain the user accessing the route  with a valid token */
            if(user[i].id === req.user.id){
                createdBy =user[i].name;
            }
        }
        for(let i=0; i<user.length;i++){ 
            if(user[i].id === req.user.id){ /* filtered the user from other registered users(to) in the organisatuion */
                continue;
            }
            to.push(user[i].email)
        }
        console.log(createdBy);   
        console.log(to);
        const setSchedule = new scheduleModel({createdBy,meetingTime,to,endDate,venue,duration}); /*setting the meeting details*/
        const appointments=await setSchedule.save()
        res.status(200).json({
            msg: 'meeting already created',
            details : appointments
        })
    }catch(err){
        console.error(err)
    }
})
module.exports= router ;