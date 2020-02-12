const express = require ('express');
const router = express.Router();
const userSchema = require('../model/user')
const userJoi = require('../validator/userValidator');

router.post('/addUser', async(req,res)=>{
    const {name,email,password} = req.body
    try{
        const valUser=  await userJoi.validate({name,email,password})
        if(valUser){
            const dbSave = new userSchema({name,email,password})
            const dbCollection = await dbSave.save();
            res.status(200).json({
                msg : 'user already registered',
                doc :dbCollection
            })
        }
        else{
            res.status(400).json(err);
            console.log(err)
        }
     
    }catch(err){
        console.log(err);
    }
})

module.exports= router ;

