const crypto = require("crypto");

const sharp = require('sharp');
const helper = require("./user.js")




const successResponse = (res, data=[],  message="success",) => 
{

  code = 200
  res.send({
    status:code,
    message,
    data,
    success: true,
  });
}


function cleanString(str){
  return (str ||"")
}
// convert string in to sql storable form
function mysql_real_escape_string(str) {

  var str = cleanString(str)
  return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
      switch (char) {
          case "\0":
              return "\\0";
          case "\x08":
              return "\\b";
          case "\x09":
              return "\\t";
          case "\x1a":
              return "\\z";
          case "\n":
              return "\\n";
          case "\r":
              return "\\r";
          case "\"":
          case "'":
          case "\\":
          case "%":
              return "\\" + char; // prepends a backslash to backslash, percent,
          // and double/single quotes
      }
  });
}


function mysql_unreal_escape_string(string) {
  // return string
  return ((cleanString(string)).replaceAll("\"",'' ))

}

const errorResponse = (
  res,
  errorMessage = 'Something went wrong',
  error = {},
) => {



  message =mysql_unreal_escape_string(errorMessage)

  code = 400
  res.send({
    status:code,
    message ,
    error,

    success: false,
  });
}

const generateCode = (userId, string) => {
  var code = "";

  strlen = ((userId).toString()).length // find length
  for (var i = 0; i < (5 - (strlen)); i++) {
      code += "0";
  }


  // console.log("LM"+code+(userId));
  return string + code + (userId)

}



const uniqueId = async () => {
  var id = crypto.randomBytes(30).toString("hex");
   var check  =await helper.checktoken(id);
  while (check.length !=0) {
    id =await uniqueId()
  }

  return id;

}
const validateData = (data2) => {

  const data = cleanString(data2)
  if (data == null || data == undefined || data == "") {
      return true
  } else {
      return false
  }
}
const ucFirst =(string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1);
}


const saveResizedImage = (path, filename) => {
    sharp(path).resize(100, 100, {
        fit: sharp.fit.inside,
        withoutEnlargement: true, // if image's original width or height is less than specified width and height, sharp will do nothing(i.e no enlargement)
    }).toFormat("jpeg").toFile(`images/resized_${filename}`);

    return `resized_${filename}`;
}



const updateModel = async(model,query,condition)=>{
  var data=await model.update(query,condition);
  return data
}

const saveModel = async(model,payload) =>{
  var data = await  model.create(payload);
  return data.dataValues
}

module.exports = {
  saveModel,
  updateModel,
  validateData,
  saveResizedImage,
  mysql_real_escape_string,
  successResponse,
  errorResponse,
  uniqueId,
  cleanString,
  generateCode,
  ucFirst
}