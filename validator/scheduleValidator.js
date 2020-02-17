const { check, validationResult } = require('express-validator')

function validateInputs(){
    return [check('meetingTime',"startDate is required in date format").isString().toDate().not().isEmpty(),
    check('endDate',"endDate is required in date format").isString().toDate(),
    check('venue',"venue is required in string format").isString().not().isEmpty(),
    check('duration',"duration is required in object").isNumeric().not().isEmpty()]
}
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
