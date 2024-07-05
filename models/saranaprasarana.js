"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const kategoriSarpras = sequelize.define("KategoriSarpras");
  const kondisiSarpras = sequelize.define("KondisiSarpras");

  class SaranaPrasarana extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SaranaPrasarana.belongsTo(kategoriSarpras, {
        as: "kategoriSarpras",
        foreignKey: "kategoriSarpras_id",
      });
      SaranaPrasarana.belongsTo(kondisiSarpras,{
        as : "kondisiSarpras",
        foreignKey : "kondisiSarpras_id"
      })
    }
  }
  SaranaPrasarana.init(
    {
      nama: DataTypes.STRING,
      jumlah: DataTypes.STRING,
      kategoriSarpras_id: DataTypes.INTEGER,
      kondisiSarpras_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "SaranaPrasarana",
    }
  );
  return SaranaPrasarana;
};
