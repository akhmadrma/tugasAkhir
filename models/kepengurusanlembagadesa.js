"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const LembagaDesa = sequelize.define("LembagaDesa");
  const KategoriJabatanLembagaDesa = sequelize.define("KategoriJabatanLembagaDesa")
  const data_penduduk = sequelize.define("data_penduduk")

  class KepengurusanLembagaDesa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KepengurusanLembagaDesa.belongsTo(LembagaDesa,{
        as : "LembagaDesa",
        foreignKey : "lembagaDesa_id"
      })
      KepengurusanLembagaDesa.belongsTo(KategoriJabatanLembagaDesa, {
        as: "KategoriJabatan",
        foreignKey: "kategoriJabatanLembagaDesa_id",
      });
      KepengurusanLembagaDesa.belongsTo(data_penduduk,{
        as : "Detail Anggota",
        foreignKey : "dataPenduduk_id"
      })
    }
  }
  KepengurusanLembagaDesa.init(
    {
      dataPenduduk_id: DataTypes.INTEGER,
      lembagaDesa_id: DataTypes.INTEGER,
      kategoriJabatanLembagaDesa_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "KepengurusanLembagaDesa",
    }
  );
  return KepengurusanLembagaDesa;
};
