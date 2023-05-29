const {admin} = require("./index.js")
const bucket = admin.storage().bucket();
const { v4: uuidv4 } = require('uuid');


const uploadV1= async( file)=>{

    try {
    const fileName = `${uuidv4()}.jpg`;

    // Create a reference to the file in Firebase Storage
    const storageRef = admin.storage().bucket().file(fileName);

    // Upload the image to Firebase Storage
    await storageRef.save(file.buffer, {
      metadata: {
        contentType: 'image/jpeg'
      }
    });

    // Get the download URL of the uploaded image
    const downloadURLs = await storageRef.getSignedUrl({
      action: 'read',
      expires: '03-17-2025'
    });

    return downloadURLs[0]; // return the first URL in the array
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}


module.exports={
    uploadV1
}