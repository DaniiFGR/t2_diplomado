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
    tableName: "datos",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
  };
  const DatasModel = sequelize.define("data_model", attributes, options);

  return DatasModel;
};