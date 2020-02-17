const { check, validationResult } = require('express-validator')

function validateInputs(){
    return [check('name',"name is required in text").isString().not().isEmpty(),
    check('email',"emal is required in @.com").isEmail().not().isEmpty(),
    check('password',"password must be in lenght of 6 characters").isLength({min:6}).not().isEmpty()]
}
//funtion to get the errors in a middleware route
function setErrors(req,res,next){
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        res.status(400).json({
            errors: errors.array()
        })
    }
    next()
}

module.exports={
    validateInputs: validateInputs,
    setErrors: setErrors
}
