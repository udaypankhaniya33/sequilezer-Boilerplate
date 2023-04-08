

const { errorResponse, successResponse, uniqueId } = require("../../helper/index")
const fn = require("../../helper/index")
const uh = require("../../helper/user.js");
const moment = require("moment");


const db = require("../../models/index.js");
const userModel = db.user




const addCompanyDetails = async(req,res)=>{
    const userId = req.body.userId || "";
    const companyName = req.body.companyName || "";
    const companyAddress = req.body.companyAddress || "";
    const industriId = req.body.industriId || "";
    const staffCount = req.body.staffCount || "";
    const companyHighlights = req.body.companyHighlights || "";
    const companyBio = req.body.companyBio || "";
    var foundedYear = req.body.foundedYear || "";
    try {
        var check = await uh.checkUser(userId);
        if (check.length != 0) {
            if (fn.validateData(foundedYear)) {
                foundedYear = moment().format("YYYY")
            }
            const completedSteps = JSON.parse(check[0]["completedSteps"])
            completedSteps[0]["bioAndPayRate"] = true
            var fields ={};
            fields["companyName"] = fn.mysql_real_escape_string(companyName);
            fields["companyHeadquatersAddress"] = fn.mysql_real_escape_string(companyAddress);
            fields["companyBio"] = fn.mysql_real_escape_string(companyBio);
            fields["companyHighlights"] = fn.mysql_real_escape_string(companyHighlights);
            fields["industriId"] = (industriId);
            fields["staffCount"] = (staffCount);
            fields["completedSteps"] = JSON.stringify(completedSteps);
            fields["foundedYear"] = (foundedYear);
            var condition = { where: { userId: userId } }
            var update = await fn.updateModel(userModel, fields, condition)
            successResponse(res,completedSteps)
        } else {
            errorResponse(res,"invalid User")
        }
    } catch (error) {
        errorResponse(res,"Somthing Went Wrong",error)
    }    
}


const companyMultiMedia = async(req,res)=>{
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
                var fields ={};
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
                successResponse(res,completedSteps)

            } else {
                errorResponse(res, "Invalid User")
            }
        }catch(error){
            errorResponse(res, "Something Went Wrong", error)
        }
    }
}


module.exports = {
    companyMultiMedia,
    addCompanyDetails,

    

}