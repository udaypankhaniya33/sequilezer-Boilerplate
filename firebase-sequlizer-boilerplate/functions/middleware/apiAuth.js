const{ errorResponse } =require('../helper/index');
const db = require("../models/index.js");
const fn = require("../helper/index.js")
const userModel = db.user

const apiAuth = async (req, res, next)=> {
  if (!(req.headers && req.headers['x-token'])) {
    return errorResponse( res, 'Token is not provided', );
  }
  const token = req.headers['x-token'];
  // try {

    // attributes:["userId"],
    // raw: true,
    // where: { token: token },

    var conditions = [
      { field: 'token', operator: 'equalTo', value: token },
  ];
    var user = await fn.selectWithJoins("user",[], conditions,)  


    if (user.length ==0) {
      return errorResponse( res, 'User is not found in system',"tokenMisMatch");
    }else{

      req.body.userId =  user[0]["userId"];
   
      return next();
    }
  // } catch (error) {
  //   return errorResponse(
  //     res,
  //     'Incorrect token is provided, try re-login',
  //     error,
  //   );
  // }
};

 

 module.exports={
  apiAuth
 }