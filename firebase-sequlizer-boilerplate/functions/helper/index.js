const crypto = require("crypto");
const db = require("../models/index.js");
// const sharp = require("sharp");
const helper = require("./user.js")
const { v4: uuidv4 } = require("uuid");
const {ref,uploadBytes,listAll,deleteObject,} = require("firebase/storage");
const { getStorage } = require("firebase/storage");



// <==============// Query Function //==============> //
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("../../pickapp-c8421-firebase-adminsdk-idzvz-3d8b4f344c.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pickapp-c8421-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket:"pickapp-c8421.appspot.com"
});





const successResponse = (res, data = [], message = "success",) => {
  code = 200
  res.send({
    status: code,
    message,
    data,
    success: true,
  });
}


function cleanString(str) {
  return (str || "")
}
// convert string in to sql storable form
function mysql_real_escape_string(str) {

  var str = cleanString(str)
  return str.replace(/[\0\x08\x09\x1a\n\r""\\\%]/g, function (char) {
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


function replaceAll(str, search, replacement) {
  return str.split(search).join(replacement);
}
function mysql_unreal_escape_string(string) {
  // return string
  return replaceAll((string), "\"", "")

}

// Return image with url
const getBlobTempPublicUrl = (blobName) => {
  return (blobName == "" || blobName == undefined || blobName == null) ? "https://gogagner.com/pickApp/media/images/default.jpeg" : "https://gogagner.com/pickApp/media/images/" + blobName
}
const categoryURL = (blobName) => {
  return (blobName == "" || blobName == undefined || blobName == null) ? "" : getBlobTempPublicUrl("icons/" + blobName)
}
const videoUrl = (blobName) => {
  return (blobName == "" || blobName == undefined || blobName == null) ? "" : getBlobTempPublicUrl("videos/" + blobName)
}

const errorResponse = (
  res,
  errorMessage = "Something went wrong",
  error = {},
) => {



  message = mysql_unreal_escape_string(errorMessage)
  code = 400
  res.send({
    status: code,
    message,
    error,

    success: false,
  });
}

const generateCode = (userId, string) => {
  var code = "";
  strlen = ((userId).toString()).length // find length
  for (var i = 0; i < (5 - (strlen)); i++) {
    code += "0";
  } // console.log("LM"+code+(userId));
  return string + code + (userId)

}



const uniqueId = async () => {
  var id = crypto.randomBytes(10).toString("hex");
  var check = await checktoken(id);
  while (check.length != 0) {
    id = await uniqueId()
  }
  return id;
}
const uniqueOTP = async () => {
  var id = generateOTP();
  var check = await checkOTP(id);
  while (check.length != 0) {
    id = await uniqueOTP()
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
const ucFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


const saveResizedImage = (path, filename) => {
  sharp(path).resize(100, 100, {
    fit: sharp.fit.inside,
    withoutEnlargement: true, // if image"s original width or height is less than specified width and height, sharp will do nothing(i.e no enlargement)
  }).toFormat("jpeg").toFile(`./media/images/resized_${filename}`);

  return `resized_${filename}`;
}

const cleanObject = (myObject) => {
  Object.keys(myObject).map(function (key, index) {
    if (myObject[key] == null) {
      myObject[key] = "";
    }
  });

  return myObject
}


function generateOTP() {

  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}





// <==============// Query Function //==============> //



const updateWithoutModel = async (model, query = {}, condition) => {
  var data = await crudWithConditions("update", model, condition, query,)
  return data
}


const saveModel = async (model, payload) => {
  return await createInDatabase(model, payload)
}



const selectWithJoins = async (tableName, joinTables = [], whereClause = {}, order = [], limit = null) => {
  // const model = db[tableName]
  return await selectFromDatabase(tableName, whereClause, limit, order)
}





const checktoken = async (token) => {

  var conditions = [
    { field: 'token', operator: 'equalTo', value: token },

  ];
  return data = await selectFromDatabase('user', conditions,);
}
const checkOTP = async (otp) => {
  conditions = [
    { field: 'otp', operator: 'equalTo', value: otp },
    { field: 'delete', operator: 'equalTo', value: 0 }
  ];
  return data = await selectFromDatabase("user", conditions)
}




//5) generate primary key
const generate_primary_key = (tableName) => {
  var uuid = uuidv4();
  var columnName = tableName + "Id";

  conditions = [
    { field: columnName, operator: 'equalTo', value: uuid },
    { field: 'delete', operator: 'equalTo', value: 0 }
  ];
  var data = selectFromDatabase(tableName, conditions)
  if (data.length) {
    generate_primary_key(tableName, uuid, columnName);
  }
  else {
    return uuid
  }
}






const crudWithConditions = async (operation, path, conditions = {}, data = {}) => {
  const db = admin.database();
  const ref = db.ref(path);
  if (conditions) {
    for (const key in conditions) {

      query = ref.orderByChild(conditions[key]["field"]).equalTo(conditions[key]["value"]);
    }
  }
  const snapshotToUpdate = await query.once('value');
  snapshotToUpdate.forEach((childSnapshot) => {
    childSnapshot.ref.update(data);
  });

}




const selectFromDatabase = async (path, conditions = {}, limit, orderBy, orderDirection) => {
  var query = admin.database().ref(path);
  var ref
  conditions.forEach(({ field, operator, value }) => {
    ref = query.orderByChild(field).equalTo(value);
  });


  if (limit) {
    ref = ref.limitToFirst(limit);
  }
  const snapshot = await ref.once('value');
  const results = [];

  snapshot.forEach((childSnapshot) => {
    results.push(childSnapshot.val());
  });
  return results;
}


// create
const createInDatabase = async (path, data) => {
  const ref = admin.database().ref(path);
  const newChildRef = ref.push();
  await newChildRef.set(data);
  return newChildRef.key;
}





const uploadFileToFireBase = async(file)=>{
  const imageRef = ref(getStorage(admin), file.originalname);
  const metatype = { contentType: file.mimetype, name: file.originalname };
  await uploadBytes(imageRef, file.buffer, metatype)
} 







const checkUser = async (userId, verified = true) => {


 var condition = [
    { field: "userId", operator: 'equalTo', value: userId },
    { field: "delete", operator: 'equalTo', value: 0 },
    
  ]
  var data = await selectWithJoins("user",[],condition)

  
  return data;
}



module.exports = {checkUser,
  uploadFileToFireBase,
  selectFromDatabase,
  updateWithoutModel,
  uniqueOTP,
  cleanObject,
  getBlobTempPublicUrl,
  selectWithJoins,
  saveModel,
  createInDatabase,
  admin,
  checktoken,
  checkOTP,
  generate_primary_key,
  validateData,
  // saveResizedImage,
  mysql_real_escape_string,
  successResponse,
  errorResponse,
  uniqueId,
  cleanString,
  generateCode,
  ucFirst
}