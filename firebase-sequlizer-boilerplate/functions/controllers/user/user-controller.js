

const { errorResponse, successResponse, uniqueId } = require("../../helper/index")
const fn = require("../../helper/index.js")
const uh = require("../../helper/user.js");
const { uploadV1}= require("../../helper/mediaHandler.js");
const { send_mail_to_user } = require("../../helper/sendmail.js");
const moment = require("moment");
require("firebase/storage");

const db = require("../../models/index.js");
const md5 = require("md5");
const userModel = db.user

fn.admin



const formDataExample = async (req, res) => {
    const userId = req.body.userId || "";
    const companyNumber = req.body.companyNumber || "";
    const website = req.body.website || "";
    const facebookLink = req.body.facebookLink || "";
    const instagramLink = req.body.instagramLink || "";
    const twitterLink = req.body.twitterLink || "";
    const linkedInLink = req.body.linkedInLink || "";
    // console.log(req.files["cover"])
    if (fn.validateData(userId)) {
        errorResponse(res, "userId Is Required")
    } else if (fn.validateData(companyNumber)) {
        errorResponse(res, "companyNumber Is Required")
        // } else if (fn.validateData(website)) {
        //     errorResponse(res, "website Is Required")
        // } else if (fn.validateData(facebookLink)) {
        //     errorResponse(res, "facebookLink Is Required")
        // } else if (fn.validateData(instagramLink)) {
        //     errorResponse(res, "instagramLink Is Required")
        // } else if (fn.validateData(twitterLink)) {
        //     errorResponse(res, "twitterLink Is Required")
        // } else if (fn.validateData(linkedInLink)) {
        //     errorResponse(res, "linkedInLink Is Required")
    } else {
        try {
            var check = await fn.checkUser(userId);
            if (check.length != 0) {
                var logo = '';
                if (req.files["logo"] != undefined && req.files["logo"] != "") {
                    logo = req.files["logo"][0]["filename"]
                }
                var cover = []
                if (req.files["cover"] != undefined && req.files["cover"] != "") {
                    for (let i = 0; i < req.files["cover"].length; i++) {
                        const element = req.files["cover"][i];
                        const original = element["filename"];
                        const cacheImage = fn.saveResizedImage(element["path"], element["filename"])
                        cover.push({
                            cacheImage: cacheImage,
                            original: original
                        })
                    }
                }
                const completedSteps = JSON.parse(check[0]["completedSteps"])
                completedSteps[0]["documentDetail"] = true
                var fields = {};
                fields["companyNumber"] = fn.mysql_real_escape_string(companyNumber);
                fields["companyWebsite"] = (website);
                fields["facebookLink"] = (facebookLink);
                fields["instagramLink"] = (instagramLink);
                fields["twitterLink"] = (twitterLink);
                fields["linkedInLink"] = (linkedInLink);
                fields["companyLogo"] = (logo);
                fields["isProfileCompleted"] = 1;
                fields["completedSteps"] = JSON.stringify(completedSteps);
                var condition = { where: { userId: userId } }
                var update = await fn.updateModel(userModel, fields, condition)
                for (let i = 0; i < cover.length; i++) {
                    const element = cover[i];
                    var createFields = {};
                    createFields["name"] = element["original"];
                    createFields["cache"] = element["cacheImage"];
                    createFields["userId"] = userId;
                    data = await fn.saveModel(imageModel, createFields)
                }
                successResponse(res, completedSteps)

            } else {
                errorResponse(res, "Invalid User")
            }
        } catch (error) {
            errorResponse(res, "Something Went Wrong", error)
        }
    }
}
const verifyOTP = async (req, res) => {
    const userId = req.body.userId || "";
    const otp = req.body.otp || "";
    try {
        var check = await uh.checkUser(userId, false)
        if (check.length != 0) {
            if (check[0]["otp"] == otp) {
                var field = {};
                field["isVerified"] = 1;
                var condition = {};
                condition["userId"] = userId;
                condition["delete"] = 0
                await fn.updateModel(userModel, field, { where: condition })
                successResponse(res)
            } else {
                errorResponse(res, "Wrong OTP Try Again.")
            }
        } else {
            errorResponse(res, "Invalid User")
        }
    } catch (error) {
        errorResponse(res, "Something Went Wrong", error)
    }

}

const resendOTP = async (req, res) => {
    const userId = req.body.userId || "";
    try {
        var check = await uh.checkUser(userId, false);
        if (check.length != 0) {
            var email = check[0]["email"];
            var otp = await fn.uniqueOTP()
            var fields = { otp: otp }
            var condition = {};
            condition["userId"] = userId;
            condition["delete"] = 0
            await fn.updateModel(userModel, fields, { where: condition })
            successResponse(res, otp, "success")
            await send_mail_to_user(email, "Verify OTP ", "Your Verification OTP is " + otp)

        } else {
            errorResponse(res, "Invalid User")
        }

    } catch (error) {
        errorResponse(res, "Something Went Wrong", error)
    }

}

const uploadDocumet = async (req, res) => {
    const userId = req.body.userId || "";
    // try {
        var check = await fn.checkUser(userId, false);
        if (check.length != 0) {
            var rcDocument = req.files["rcImage"]
            var licenceDocument = req.files["licenseImage"]
            var insuranceDocument = req.files["insuranceImage"]


            var rcFile = ""
            var licenceFile = ""
            var insurancFile = ""
            if (rcDocument == undefined || rcDocument.length == 0) {
                errorResponse(res, "RC Book  is Required")
            } else if (licenceDocument == undefined || licenceDocument.length == 0) {
                errorResponse(res, " License  is Required")
            } else if (insuranceDocument == undefined || insuranceDocument.length == 0) {
                errorResponse(res, "Insurance  is Required")
            } else {
                rcFile = await uploadV1(rcDocument[0]) 
                licenceFile = await uploadV1(licenceDocument[0])
                insurancFile = await uploadV1(insuranceDocument[0])
                console.log(rcFile);
                var time = moment().format("YYYY-MM-DD HH:mm:ss");



                fields = {};
                fields["licenceFile"] = licenceFile;
                fields["insuranceFile"] = insurancFile;
                fields["rcBookFile"] = rcFile;
                fields["is_requested"] = 1;
                fields["is_driver"] = 0;
                fields["requestTime"] = time
                condition = {}
                condition["userId"] = userId
                var conditions = [
                    { field: 'userId', operator: 'equalTo', value: userId },
                ];

                await fn.updateWithoutModel("user", fields, conditions)

                successResponse(res,)

            }



        } else {
            errorResponse(res, "Invalid User")
        }

    // } catch (error) {
    //     errorResponse(res, "Something Went Wrong", error)
    // }
}


const driverStatus = async (req, res) => {
    const userId = req.body.userId || "";
    try {
        var check = await uh.checkUser(userId, false);
        if (check.length != 0) {
            data = {}
            var obj = fn.cleanObject(check[0])
            data["userId"] = obj["userId"]
            data["fullName"] = obj["fullName"]
            data["is_requested"] = obj["is_requested"]
            data["is_driver"] = obj["is_driver"]
            data["isVerified"] = obj["isVerified"]
            data["rejectionReason"] = obj["rejectionReason"]
            data["rcBookFile"] = fn.getBlobTempPublicUrl(obj["rcBookFile"])
            data["insuranceFile"] = fn.getBlobTempPublicUrl(obj["insuranceFile"])
            data["licenceFile"] = fn.getBlobTempPublicUrl(obj["licenceFile"])
            successResponse(res, [data])
        } else {
            errorResponse(res, "Invalid User")
        }

    } catch (error) {
        errorResponse(res, "Something Went Wrong", error)
    }

}


const resetPassword = async(req,res)=>{
    const userId = req.body.userId ||""
    const password = req.body.password ||""
    try {
        var field = {};
        field["password"] = md5(password);
        var condition = {};
        condition["userId"] = userId;
        condition["delete"] = 0
        await fn.updateModel(userModel, field, { where: condition })
        successResponse(res,[], "success")
    } catch (error) {
        errorResponse(res,"Something Went Wrong", error)
    }
}
// const 
module.exports = {
    resetPassword,
    uploadDocumet,
    driverStatus,
    verifyOTP,
    resendOTP,

}