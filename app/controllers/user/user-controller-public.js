
const db = require("../../models/index.js");
const userModel = db.user
const Op = db.Sequelize.Op;




const { errorResponse, successResponse, uniqueId } = require("../../helper")
const fn = require("../../helper")


const uh = require("../../helper/user.js");
const { raw } = require("mysql2");

// Retrieve all Tutorials from the database.

const findAll = async (req, res) => {
    try {
        var data = await uh.checkUser(1)
        successResponse(res, data)
    } catch (error) {
        errorResponse(res, error)
    }
};


const socialMediaLogin = async (req, res) => {
    const email = req.body.email || '';
    const loginType = req.body.loginType || 'googleId'; // googleId, facebookId,appleId
    const id = req.body.id || '';
    const os = req.body.os || "";
    const osVersion = req.body.osVersion || "";
    const device = req.body.device || "";
    const appVersion = req.body.appVersion || "";
    var columnName = '';
    try {
        if (loginType == 'googleId') {
            columnName = 'google';
        } else if (loginType == 'facebookId') {
            columnName = 'facebook';
        } else if (loginType == 'appleId') {
            columnName = 'apple';
        }


        var check = await userModel.findAll({
            attributes: ["userId", "fullName", "isVerified", "token", "userId"],
            where: { email: email, delete: 0, },
            raw:true
        })

        var token = await uniqueId();

        if (check.length != 0) {
            var updatedColumns = {}
            if (loginType == 'googleId') {
                updatedColumns = { "token": token, "loginType": loginType, "google": id, "isVerified": "1", "loginOs": fn.mysql_real_escape_string(os), "loginDevice": fn.mysql_real_escape_string(device), "loginAppVersion": appVersion }
            } else if (loginType == 'facebookId') {
                updatedColumns = { "token": token, "loginType": loginType, "facebook": id, "isVerified": "1", "loginOs": fn.mysql_real_escape_string(os), "loginDevice": fn.mysql_real_escape_string(device), "loginAppVersion": appVersion }
            } else if (loginType == 'appleId') {
                updatedColumns = { "token": token, "loginType": loginType, "apple": id, "isVerified": "1", "loginOs": fn.mysql_real_escape_string(os), "loginDevice": fn.mysql_real_escape_string(device), "loginAppVersion": appVersion }
            }
            var update = await userModel.update(updatedColumns, { where: { userId: check[0]["userId"] } })
            var data = await userModel.findAll({
                attributes: ["userId", "fullName", "isVerified", "token", "userId", "completedSteps", "type","userCode"],
                where: { email: email, delete: 0, },raw:true
            })
            for (let i = 0; i < data.length; i++) {
                const element = data[i];

                element["completedSteps"]= JSON.parse(element["completedSteps"])
                element["fullName"]= fn.cleanString(element["fullName"])
                
            }
            successResponse(res, data)
            // successResponse(res, data)
        } else {
            var completedSteps = [{ "accountType": false, }]

            var payLoad ={}
            if (loginType == 'googleId') {
                payLoad = {
                    "token": token,
                    "loginType": loginType,
                    "google": id,
                    "isVerified": "1",
                    "loginOs": fn.mysql_real_escape_string(os),
                    "loginDevice": fn.mysql_real_escape_string(device),
                    "loginAppVersion": appVersion,
                    email: email,
                    "regOs": os,
                    "regOsVersion": osVersion,
                    "regDevice": fn.mysql_real_escape_string(device),
                    "registeredAppVersion": appVersion,
                    "isVerified": '1',
                    "completedSteps": JSON.stringify(completedSteps),
                    
                }
            } else if (loginType == 'facebookId') {
                payLoad = {
                    "token": token,
                    "loginType": loginType,
                    "facebook": id,
                    "isVerified": "1",
                    "loginOs": fn.mysql_real_escape_string(os),
                    "loginDevice": fn.mysql_real_escape_string(device),
                    "loginAppVersion": appVersion,
                    email: email,
                    "regOs": os,
                    "regOsVersion": osVersion,
                    "regDevice": fn.mysql_real_escape_string(device),
                    "registeredAppVersion": appVersion,
                    "isVerified": '1',
                    "completedSteps": JSON.stringify(completedSteps)
                }
            } else if (loginType == 'appleId') {
                payLoad = {
                    "token": token,
                    "loginType": loginType,
                    "apple": id,
                    "isVerified": "1",
                    "loginOs": fn.mysql_real_escape_string(os),
                    "loginDevice": fn.mysql_real_escape_string(device),
                    "loginAppVersion": appVersion,
                    email: email,
                    "regOs": os,
                    "regOsVersion": osVersion,
                    "regDevice": fn.mysql_real_escape_string(device),
                    "registeredAppVersion": appVersion,
                    "isVerified": '1',
                    "completedSteps": JSON.stringify(completedSteps)
                }
            }
            var create = await userModel.create(payLoad)
            var userId = create.dataValues.userId
            var update = await userModel.update( {userCode:fn.generateCode(userId,"HI")}, { where: { userId: userId } })
            var data = await userModel.findAll({
                attributes: ["userId", "fullName", "isVerified", "token", "userId", "completedSteps", "type","userCode"],
                where: { email: email, delete: 0, },
                raw:true
            })


            for (let i = 0; i < data.length; i++) {
                const element = data[i];

                element["completedSteps"]= JSON.parse(element["completedSteps"])
                element["fullName"]= fn.cleanString(element["fullName"])
                
            }
            successResponse(res, data)
        }
    } catch (error) {
        errorResponse(res, "Something Went Wrong", error)
    }

}
module.exports = {
    findAll,
    socialMediaLogin
}