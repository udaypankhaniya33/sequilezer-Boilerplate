const { errorResponse } = require("../helper/index.js");
const { apiAuth } = require("../middleware/apiAuth.js");
const user = require("../controllers/user/user-controller.js");
const userValidator = require("../controllers/user/user-validator.js");
const bodyParser = require('body-parser');
var route = require("express").Router();

const multer = require('multer');

const hired = multer.diskStorage({
  destination: "../media/images/",
  filename: function (req, file, cb) {
    var str = file.mimetype;
    var first = str.indexOf("/");
    var last = str.length;
    var between = str.substring((first + 1), last);
    const uniqueSuffix = Date.now();
    let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);

    cb(null, uniqueSuffix + ext);
  },
});
const hiredMult = multer({ storage: hired });
const hiredVid = multer.diskStorage({
  destination: "../media/images/videos/",
  filename: function (req, file, cb) {
    var str = file.mimetype;
    var first = str.indexOf("/");
    var last = str.length;
    var between = str.substring((first + 1), last);
    const uniqueSuffix = Date.now();

    console.log(file.mimetype);
    let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);

    cb(null, uniqueSuffix + ext);


  },
});
const hiredMultVideo = multer({ storage: hiredVid });
const validate = (schema) => (req, res, next) => {


  var body = {
  }
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

  route.post("/addCompanyDetails", validate(userValidator.addCompanyDetails), user.addCompanyDetails)
  app.post("/companyMultiMedia",hiredMult.fields([{ name: 'logo', maxCount: 1 },{ name: 'cover', maxCount: 5 }]), user.companyMultiMedia);

  app.use(bodyParser.json())
  app.use("/api", route)
}