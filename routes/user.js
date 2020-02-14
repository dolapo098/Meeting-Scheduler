const express = require ('express');
const router = express.Router();
const userJoi = require('../validator/userValidator');
const jwt = require('jsonwebtoken');
const config = require('config');
const jwtKey = config.get("secretkey");
const userModel = require('../model/User')

// @route  Post routes/user
// @desc   register users
//@access  public
router.post('/addUser', async(req,res)=>{
    const {name,email,password} = req.body
    try{
        let user= await userModel.findOne({email}); 
        if(user){
            res.status(400).send('email already exist')
        }
            const valUser=  await userJoi.validate({name,email,password})
            if(valUser){
                const dbSave = new userModel({name,email,password})
                let user = await dbSave.save();
                console.log(user)
                // res.status(200).json({
                //     msg : 'user already registered',
                //     doc :dbCollection
                // })
                 // jsonwebtoken implementation
        const payload ={
            user:{
            id : user.id
            }
        }
        jwt.sign(payload,jwtKey, { expiresIn: "24h" }, (err,token)=>{
            if(err)throw err
            res.status(200).json({token})
        })
            } // end of if validation
            else{
                res.status(400).json(err);
                console.log(err)
            } //send error if middleware validation fails 
    } /* end of try block */ catch(err){
        console.log(err);
    }
})
module.exports= router ;

