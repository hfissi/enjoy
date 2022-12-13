const {
    DataTypes
  } = require('sequelize');
  module.exports = sequelize => {
    const attributes = {
      username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "username"
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: null,
        primaryKey: true,
        autoIncrement: false,
        comment: null,
        field: "email"
      },
      password: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "password"
      }
    };
    const options = {
      tableName: "users",
      comment: "",
      indexes: []
    };
    const MembreModel = sequelize.define("register_model", attributes, options);
    return MembreModel;
  };