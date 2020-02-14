const jwt = require("jsonwebtoken");
const config = require('config');
const jwtKey =config.get('secretkey')

module.exports= function(req,res,next){
    const token = "x-auth-token"
    if(!token){
        res.status(400).send('no authorization token set to header');
    }
    try{
        const decoded = jwt.verify(token,jwtKey)
        req.user = decoded.user;
        next()
    }catch(err){
        console.error(err)
        res.status(400).send('Authorization key not valid ')
    }
}