 const joi = require('@hapi/joi');
  const userJoi = joi.object({
      name : joi.string().required(),
      email: joi.string().required().email({minDomainSegments:2 ,tlds: { allow: ['com', 'net'] }}),
      password : joi.string().required(),
  })
  module.exports= userJoi;