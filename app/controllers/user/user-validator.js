const Joi = require('joi');


const createProfileV2 = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    salutation: Joi.string().required(),
    gender: Joi.string().required(),
    mobileNumber: Joi.string().required(),
    email: Joi.string().required(),
    address: Joi.string().optional(),
    majorCityId: Joi.string().optional(),
    userId: Joi.number(),
})




module.exports = {
    socialMediaLogin,
    setLocationDetails,
    setAccountType,
    createProfileV2,
    addCompanyDetails,
    workhistory
}