const Joi = require('@hapi/joi')

const registerValidation = data => {
  const shema = {
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  }
  return Joi.validate(data, shema)
}

const loginValidation = data => {
  const shema = {
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  }
  return Joi.validate(data, shema)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
