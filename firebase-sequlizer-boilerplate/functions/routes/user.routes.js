const { errorResponse ,admin } = require("../helper/index.js");
const { apiAuth } = require("../middleware/apiAuth.js");
const user = require("../controllers/user/user-controller.js");
const userValidator = require("../controllers/user/user-validator.js");
const bodyParser = require('body-parser');
var route = require("express").Router();
const FirebaseStorage = require('multer-firebase-storage')
const multer = require('multer');
const storage = multer.memoryStorage();
const pickappMult = multer({ storage: storage });

const validate = (schema) => (req, res, next) => {
  var body = {}
  Object.keys(req.body).map(function (key, index) {
    body[key] = req.body[key]
  })
  const { error } = schema.validate(body);
  if (error) {
    const message = error.details.map(i => i.message).join(',')
    console.log("error", message);
    errorResponse(res, message)
  } else {
    next();
  }
};





module.exports = app => {
  // route.use(bodyParser.urlencoded({extended: true}));
  route.use(bodyParser.json());
  route.use(apiAuth)
  route.post("/verifyOTP", validate(userValidator.verifyOTP), user.verifyOTP)
  route.post("/resendOTP", validate(userValidator.resendOTP), user.resendOTP)
  route.post("/resetPassword", validate(userValidator.resetPassword), user.resetPassword)
  route.get("/driverStatus", validate(userValidator.driverStatus), user.driverStatus)
  route.post("/uploadDocumet", pickappMult.fields([{ name: 'licenseImage', maxCount: 1 },{ name: 'rcImage', maxCount: 1 },{ name: 'insuranceImage', maxCount: 1 }]), user.uploadDocumet);

  app.use(bodyParser.json())
  app.use("/api", route)
}