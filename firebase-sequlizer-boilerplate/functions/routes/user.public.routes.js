const { errorResponse } = require("../helper/index.js");
const user_public = require("../controllers/user/user-controller-public.js");
const user = require("../controllers/user/user-controller.js");
const userValidator = require("../controllers/user/user-validator.js");
const bodyParser = require('body-parser');
var routes = require("express").Router();
const validate = (schema) => (req, res, next) => {
    const {error} = schema.validate(req.body);
    if (error) {
    const message = error.details.map(i => i.message).join(',')
    console.log("error", message); 
    errorResponse(res,message)
    } else {
      next();
    }
  };


  //public apis 




  
  module.exports = app=>{
    routes.use(bodyParser.json());
    routes.post("/socialMediaLogin",validate(userValidator.socialMediaLogin), user_public.socialMediaLogin)
    routes.post("/login",validate(userValidator.login), user_public.login)
    routes.post("/registration",validate(userValidator.registration), user_public.registration)
    routes.post("/forgetPassword",validate(userValidator.forgetPassword), user_public.forgetPassword)

    app.use("/public",routes)
  };
