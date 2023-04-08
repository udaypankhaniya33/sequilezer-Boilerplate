const{ errorResponse } =require('../helper/index');
const db = require("../models/index.js");
const userModel = db.user
const Op = db.Sequelize.Op;
const apiAuth = async (req, res, next)=> {
  if (!(req.headers && req.headers['x-token'])) {
    return errorResponse( res, 'Token is not provided', );
  }
  const token = req.headers['x-token'];
  try {
    var user = await userModel.findAll({
      attributes:["userId"],
      raw: true,
      where: { token: token },
    })  
    if (user.length ==0) {
      return errorResponse( res, 'User is not found in system',);
    }else{

      req.body.userId =  user[0].userId;;
      return next();
    }
  } catch (error) {
    return errorResponse(
      res,
      'Incorrect token is provided, try re-login',
      error,
    );
  }
};

 

 module.exports={
  apiAuth
 }