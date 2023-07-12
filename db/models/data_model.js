const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "codigo",
      autoIncrement: false
    },
    nombre: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nombre",
      autoIncrement: false
    },
    cantidad: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cantidad",
      autoIncrement: false
    },
    precio: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "precio",
      autoIncrement: false
    },
    subtotal: {
      type: DataTypes.REAL,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "subtotal",
      autoIncrement: false
    },
    estado: {
      type: DataTypes.CHAR(200),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "estado",
      autoIncrement: false
    },
  };
  const options = {
    tableName: "medicamentos",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
  };
  const DatasModel = sequelize.define("data_model", attributes, options);

  return DatasModel;
};