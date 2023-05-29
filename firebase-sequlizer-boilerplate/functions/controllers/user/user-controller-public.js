
const db = require("../../models/index.js");
const userModel = db.user

const { errorResponse, successResponse, uniqueId } = require("../../helper/index.js")
const fn = require("../../helper/index.js")
const uh = require("../../helper/user.js");
const { send_mail_to_user } = require("../../helper/sendmail.js");
const md5 = require("md5");

// Retrieve all Tutorials from the database.




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
        var check = await fn.selectWithJoins("user", [], { email: email, delete: 0, })

        // var check = await userModel.findAll({
        //     attributes: ["userId", "fullName", "isVerified", "token", "userId"],

        //     raw: true
        // })

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
            // var update = await userModel.update(updatedColumns, { where: { userId: check[0]["userId"] } })

            await fn.updateWithoutModel("user", updatedColumns, { userId: check[0]["userId"] })


            var data = await fn.selectWithJoins("user", [], { email: email, delete: 0, })

            for (let i = 0; i < data.length; i++) {
                const element = data[i];

                element["fullName"] = fn.cleanString(element["fullName"])

            }
            successResponse(res, data)
            // successResponse(res, data)
        } else {
            var completedSteps = [{ "accountType": false, }]

            var payLoad = {}
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
            var update = await userModel.update({ userCode: fn.generateCode(userId, "HI") }, { where: { userId: userId } })
            var data = await userModel.findAll({
                attributes: ["userId", "fullName", "isVerified", "token", "userId", "completedSteps", "type", "userCode"],
                where: { email: email, delete: 0, },
                raw: true
            })


            for (let i = 0; i < data.length; i++) {
                const element = data[i];

                element["completedSteps"] = JSON.parse(element["completedSteps"])
                element["fullName"] = fn.cleanString(element["fullName"])

            }
            successResponse(res, data)
        }
    } catch (error) {
        errorResponse(res, "Something Went Wrong", error)
    }

}


const login = async (req, res) => {
    const email = req.body.email || '';
    const password = req.body.password || '';
    try {
    var conditions = [
        { field: 'email', operator: 'equalTo', value: email },
        { field: 'password', operator: 'equalTo', value: md5(password) },
        { field: 'delete', operator: 'equalTo', value: 0 }
    ];
    var data = await fn.selectWithJoins("user", [], conditions,)


    if (data.length != 0) {
        const token = await uniqueId()
        const element = fn.cleanObject(data[0]);
        element["token"] = token
        var fields = {};
        fields["token"] = token;
        var condition = [
            { field: 'userId', operator: 'equalTo', value: element["userId"] },
            { field: 'delete', operator: 'equalTo', value: 0 }
        ];

        resObj=[]
        for (let i = 0; i < data.length; i++) {
            const element = data[i];

            obj={}
            obj["userId"] = element["userId"]
            obj["token"] = element["token"]
            obj["fullName"] = element["fullName"]
            obj["firstName"] = element["firstName"]
            obj["lastName"] = element["lastName"]
            obj["email"] = element["email"]
            obj["cacheImage"] = fn.getBlobTempPublicUrl(element["cacheImage"])
            obj["latitude"] = element["latitude"]
            obj["longitude"] = element["longitude"]
            obj["is_driver"] = element["is_driver"]
            obj["is_requested"] = element["is_requested"]
            resObj.push(obj)

        }

        await fn.updateWithoutModel("user", fields, condition)
        successResponse(res, resObj)
    } else {
        errorResponse(res, "Invalid User")
    }
    } catch (error) {
        errorResponse(res, "something Went Wrong", error)
    }
}

const registration = async (req, res) => {
    const firstName = req.body.firstName || "";
    const lastName = req.body.lastName || "";
    const email = req.body.email || "";
    const password = req.body.password || "";
    const latitude = req.body.latitude || "";
    const longitude = req.body.longitude || "";
    const is_driver = req.body.is_driver || "0"
    try {



    conditions = [
        { field: 'email', operator: 'equalTo', value: email },

    ];
    var check = await fn.selectWithJoins('user', [], conditions,);


    if (check.length == 0) {

        const token = await uniqueId()
        const otp = await fn.uniqueOTP()


        var fields = db.user
        fields["firstName"] = firstName
        fields["lastName"] = lastName
        fields["fullName"] = (firstName + " " + lastName)
        fields["password"] = md5(password),
            fields["latitude"] = latitude
        fields["longitude"] = longitude
        fields["token"] = token
        fields["otp"] = otp
        fields["email"] = email
        fields["is_driver"] = is_driver
        fields["userId"] = fn.generate_primary_key("user")
        var data = [await fn.saveModel("user", fields)]
        var resData = [];

        const obj = fn.cleanObject(data[0])
        var resobject = {}
        resobject["userId"] = obj.userId
        resobject["token"] = obj.token
        resobject["is_driver"] = obj.is_driver
        resobject["is_requested"] = obj.is_requested
        resobject["fullName"] = obj.fullName
        resobject["isVerified"] = obj.isVerified
        resobject["email"] = obj.email
        resobject["latitude"] = obj.latitude
        resobject["longitude"] = obj.longitude
        resobject["cacheImage"] = fn.getBlobTempPublicUrl(obj.cacheImage)
        resData.push(resobject)

        successResponse(res, resData)
        await send_mail_to_user(email, "Verify OTP ", "Your Verification OTP is " + otp)
    } else {
        errorResponse(res, "Email Already Registerd, Please Try To Login.")
    }
    } catch (error) {
        errorResponse(res, "Something Went Wrong.")
    }
}


const forgetPassword = async (req, res) => {
    const email = req.body.email || "";
    try {

        var condition = [

            { field: 'delete', operator: 'equalTo', value: 0 },
            { field: 'email', operator: 'equalTo', value: email }
        ]
        var check = await fn.selectWithJoins("user", [], condition)
        if (check.length != 0) {
            var otp = await fn.uniqueOTP()
            var fields = { otp: otp }
            var condition = [
                { field: 'userId', operator: 'equalTo', value: check[0]["userId"] },
                { field: 'delete', operator: 'equalTo', value: 0 }
            ];



            var resObj = [];
            for (let i = 0; i < check.length; i++) {
                const element = fn.cleanObject(check[i]);
                element["cacheImage"] = fn.getBlobTempPublicUrl(element["cacheImage"])
                element["otp"] = otp



                obj["userId"] = element["userId"]
                obj["token"] = element["token"]
                obj["fullName"] = element["fullName"]
                obj["firstName"] = element["firstName"]
                obj["lastName"] = element["lastName"]
                obj["email"] = element["email"]
                obj["cacheImage"] = element["cacheImage"]
                obj["latitude"] = element["latitude"]
                obj["longitude"] = element["longitude"]
                obj["is_driver"] = element["is_driver"]
                obj["is_requested"] = element["is_requested"]
                resObj.push(obj)
            }



            await fn.updateWithoutModel("user", fields, condition)




            successResponse(res, resObj, "success")
            await send_mail_to_user(email, "Verify OTP ", "Your Verification OTP is " + otp)
        } else {
            errorResponse(res, "Invalid User")
        }
    } catch (error) {
        errorResponse(res, "Something Went Wrong", error)
    }
}
module.exports = {
    forgetPassword,
    registration,
    login,
    socialMediaLogin
}