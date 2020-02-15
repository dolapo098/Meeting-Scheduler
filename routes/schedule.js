const express = require('express');
const router = express.Router();
const scheduleValidaton = require("../validator/scheduleValidator")
const auth = require('../middleware/auth')
const userModel = require('../model/User')
const userValidator = require("../validator/userValidator").validateInputs
const getErrors = require("../validator/userValidator").setErrors


// @route  Post routes/schedule
// @desc   schedule meeting
//@access  private
router.post('/scheduleMeeting',userValidator(),getErrors, auth, async(req,res)=>{
    const {startDate,endDate,startTime,venue,duration} = req.body
    try{
        const user = await  userModel.findById({user:req.user.id}).select("-password");
        if(user){
            
            }
            
        }catch(err){
        console.log(err);
    }

})