const joi = require ('@hapi/joi');
const scheduleValidator = joi.object({
    startDate = joi.date().iso().required(),
    endDate = joi.date().greater(Joi.ref('startDate')).required(),
    startTime =joi.date().iso(),
    venue = joi.string().required(),
    duration = joi.array().items(joi.number())
})

module.exports= scheduleValidator;