"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const KepengurusanLembagaDesa = sequelize.define("KepengurusanLembagaDesa");
  const PengelolaanDanaLembagaDesa = sequelize.define(
    "PengelolaanDanaLembagaDesa"
  );
  const KegiatanLembagaDesa = sequelize.define("KegiatanLembagaDesa");

  class LembagaDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LembagaDesa.hasMany(KepengurusanLembagaDesa, {
        as: "AnggotaLembaga",
        foreignKey: "lembagaDesa_id",
      });
      LembagaDesa.hasMany(KegiatanLembagaDesa, {
        as: "KegiatanLembaga",
        foreignKey: "lembagaDesa_id",
      });
    }
  }
  LembagaDesa.init(
    {
      namaLembaga: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "LembagaDesa",
    }
  );
  return LembagaDesa;
};
