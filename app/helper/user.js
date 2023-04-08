

const db = require("../models/index.js");
const userModel = db.user
const Op = db.Sequelize.Op;



const checkUser = async (userId) => {
  var data = [await userModel.findOne({
    attributes: ["userId", "userCode", "fullName", "firstName", "lastName", "salutation", "dateOfBirth", "gender", "email", "bio", "password", "countryCode", "mobileNumber", "profilePicture", "cacheImage", "resume", "address", "skills", "otp", "otpTime", "google", "facebook", "apple", "loginType", "block", "isVerified", "latitude", "longitude", "video", "videoDurationLimit", "videoLimit", "cityId", "stateId", "countryId", "referCode", "referedUserId", "referedCode", "completedSteps", "type", "payRateType", "selectedPayRate", "minimumPayRate", "maximumPayRate", "payRateDurationType", "about", "token"],
    where: {
      userId: userId,
      delete: 0,
      isVerified: 1,
    },
    raw:true
  })
  ] 
  return data ;

}
const checktoken = async (token) => {
  return data = await userModel.findAll({
    attributes: ["userId",  "token"],
    where: {
      token: token,
      delete: 0,
    },
    raw:true
  })
}
module.exports = {
  checkUser,
  checktoken
}