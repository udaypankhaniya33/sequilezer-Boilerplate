const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    imageId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "imageId"
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "userId"
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name"
    },
    cache: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cache"
    },
    delete: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "delete"
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "created"
    }
  };
  const options = {
    tableName: "image",
    comment: "",
    indexes: []
  };
  const ImageModel = sequelize.define("image_model", attributes, options);
  return ImageModel;
};