const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "userId"
    },
    userCode: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "userCode"
    },
    token: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "token"
    },
    fullName: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "fullName"
    },
    firstName: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "firstName"
    },
    lastName: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "lastName"
    },
    salutation: {
      type: DataTypes.STRING(5),
      allowNull: true,
      defaultValue: "Mr.",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "salutation"
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dateOfBirth"
    },
    gender: {
      type: DataTypes.ENUM('Female', 'Male', 'Other'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "gender"
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email"
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "bio"
    },
    companyName: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "companyName"
    },
    companyHeadquatersAddress: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "companyHeadquatersAddress"
    },
    industriId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "industriId"
    },
    staffCount: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "staffCount"
    },
    companyHighlights: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "companyHighlights"
    },
    companyBio: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "companyBio"
    },
    companyLogo: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "companyLogo"
    },
    companyWebsite: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "companyWebsite"
    },
    companyNumber: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "companyNumber"
    },
    facebookLink: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "facebookLink"
    },
    instagramLink: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "instagramLink"
    },
    twitterLink: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "twitterLink"
    },
    linkedInLink: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "linkedInLink"
    },
    foundedYear: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "foundedYear"
    },
    password: {
      type: DataTypes.STRING(35),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "password"
    },
    countryCode: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: "+91",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "countryCode"
    },
    mobileNumber: {
      type: DataTypes.STRING(12),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "mobileNumber"
    },
    profilePicture: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "profilePicture"
    },
    cacheImage: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cacheImage"
    },
    resume: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "resume"
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "address"
    },
    skills: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "skills"
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "otp"
    },
    otpTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "otpTime"
    },
    google: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "google"
    },
    facebook: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "facebook"
    },
    apple: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "apple"
    },
    loginType: {
      type: DataTypes.ENUM('googleId', 'facebookId', 'manual', 'appleId'),
      allowNull: false,
      defaultValue: "manual",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "loginType"
    },
    block: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "block"
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "created"
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updated"
    },
    delete: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "delete"
    },
    createdBy: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "user",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "createdBy"
    },
    updatedBy: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "user",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updatedBy"
    },
    deleteBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "deleteBy"
    },
    regOs: {
      type: DataTypes.ENUM('ANDROID', 'IOS', 'ADMIN'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "regOs"
    },
    regOsVersion: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "regOsVersion"
    },
    regDevice: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "regDevice"
    },
    loginOs: {
      type: DataTypes.ENUM('ANDROID', 'IOS'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "loginOs"
    },
    loginOsVersion: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "loginOsVersion"
    },
    loginDevice: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "loginDevice"
    },
    isVerified: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "isVerified"
    },
    registeredAppVersion: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "registeredAppVersion"
    },
    loginAppVersion: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "loginAppVersion"
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "latitude"
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "longitude"
    },
    video: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "video"
    },
    videoDurationLimit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "30",
      primaryKey: false,
      autoIncrement: false,
      comment: "seconds",
      field: "videoDurationLimit"
    },
    videoLimit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "1",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "videoLimit"
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cityId"
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "stateId"
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "countryId"
    },
    majorCityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "majorCityId"
    },
    referCode: {
      type: DataTypes.STRING(8),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "referCode"
    },
    referedUserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "referedUserId"
    },
    referedCode: {
      type: DataTypes.STRING(6),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "referedCode"
    },
    completedSteps: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "completedSteps"
    },
    type: {
      type: DataTypes.ENUM('EMPLOYEE', 'EMPLOYER', 'INFLUENCER'),
      allowNull: false,
      defaultValue: "EMPLOYEE",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "type"
    },
    payRateType: {
      type: DataTypes.ENUM('Selected', 'Frequency'),
      allowNull: false,
      defaultValue: "Selected",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "payRateType"
    },
    selectedPayRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "selectedPayRate"
    },
    minimumPayRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "minimumPayRate"
    },
    maximumPayRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "maximumPayRate"
    },
    payRateDurationType: {
      type: DataTypes.ENUM('Year', 'Quarter', 'Month', 'Fortnight', 'Week', 'Day', 'Hour'),
      allowNull: false,
      defaultValue: "Month",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "payRateDurationType"
    },
    about: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "about"
    },
    isProfileCompleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: "0 =not completed\r\n1 = Compeleted ",
      field: "isProfileCompleted"
    }
  };
  const options = {
    tableName: "user",
    comment: "",
    indexes: []
  };
  const UserModel = sequelize.define("user_model", attributes, options);
  return UserModel;
};