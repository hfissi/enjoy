const {
    DataTypes
  } = require('sequelize');
  module.exports = sequelize => {
    const attributes = {
      id_membre: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        defaultValue: null,
        primaryKey: true,
        autoIncrement: true,
        comment: null,
        field: "id_membre"
      },
      nom: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "nom"
      },
      prenom: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "prenom"
      },
      mail: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "mail"
      },
      login: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: null,
        primaryKey: false,
        autoIncrement: false,
        comment: null,
        field: "login"
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
      tableName: "membre",
      comment: "",
      indexes: []
    };
    const MembreModel = sequelize.define("register_model", attributes, options);
    return MembreModel;
  };