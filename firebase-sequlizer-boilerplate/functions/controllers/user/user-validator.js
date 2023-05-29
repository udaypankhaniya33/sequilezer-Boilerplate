const Joi = require('joi');

const login=Joi.object().keys({
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({ 'string.email': 'emailInvalid',
    'any.required': 'email Is Required',
}),
    password:Joi.string().required(),
})

const registration = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required().messages({'any.only': 'Passwords Does Not match',}),
    latitude: Joi.string().optional(),
    longitude: Joi.string().optional(),
    is_driver:Joi.alternatives().try(
        Joi.string(),
        Joi.number().integer()
      ).required(),
})

const verifyOTP=Joi.object().keys({
    userId: Joi.number(),
    otp: Joi.string().required(),

})

const  resendOTP = Joi.object().keys({
    userId: Joi.number(),
})

const  driverStatus = Joi.object().keys({
    userId: Joi.number(),
})
const  forgetPassword = Joi.object().keys({
    email: Joi.string().email({ tlds: { allow: false } }).required()
})

const  resetPassword = Joi.object().keys({
    userId: Joi.number(),
password: Joi.string().required(),
confirmPassword: Joi.any().valid(Joi.ref('password')).required().messages({'any.only': 'Passwords Does Not match',}),

})
module.exports = {
    login,registration,verifyOTP,resendOTP,driverStatus,forgetPassword,resetPassword
}