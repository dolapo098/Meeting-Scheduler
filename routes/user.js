const express = require ('express');
const router = express.Router();
const userValidator = require("../validator/userValidator").validateInputs
const getErrors = require("../validator/userValidator").setErrors
const jwt = require('jsonwebtoken');
const config = require('config');
const jwtKey = config.get("secretkey");
const userModel = require('../model/User')

// @route  Post routes/user
// @desc   register users
//@access  public
router.post('/addUser',userValidator(),getErrors, async(req,res)=>{
    const {name,email,password} = req.body
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({
            errors : errors.array()
        })
    }
    try{
        let user= await userModel.findOne({email}); 
        if(user){
            res.status(400).send('email already exist')
        }
            const dbSave = new userModel({name,email,password})
            let dbCollection = await dbSave.save();
            console.log(dbCollection)
            //jsonwebtoken implementation
            const payload ={
                user:{
                id : dbCollection.id
                }
            }
            jwt.sign(payload,jwtKey, { expiresIn: "24h" }, (err,token)=>{
                if(err)throw err
                res.status(200).json({token})
            })      
    } /* end of try block */ catch(err){
        console.log(err);
    }
})
module.exports= router ;

