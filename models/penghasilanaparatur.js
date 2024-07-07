"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const KategoriJabatanAparaturDesa = sequelize.define(
    "KategoriJabatanAparaturDesa"
  );
  const JenisPenghasilanAparatur = sequelize.define("JenisPenghasilanAparatur");
  const SumberPenghasilanAparatur = sequelize.define("SumberPenghasilanAparatur");
  class PenghasilanAparatur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PenghasilanAparatur.belongsTo(KategoriJabatanAparaturDesa, {
        as: "kategoriJabatan",
        foreignKey: "kategoriJabatanAparatur_id",
      });
      PenghasilanAparatur.belongsTo(JenisPenghasilanAparatur, {
        as: "jenisPenghasilan",
        foreignKey: "jenisPenghasilanAparatur_id",
      });
      PenghasilanAparatur.belongsTo(SumberPenghasilanAparatur,{
        as : 'sumberPenghasilan',
        foreignKey : "sumberPenghasilanAparatur_id"
      })
    }
  }
  PenghasilanAparatur.init(
    {
      kategoriJabatanAparatur_id: DataTypes.INTEGER,
      jenisPenghasilanAparatur_id: DataTypes.INTEGER,
      sumberPenghasilanAparatur_id: DataTypes.INTEGER,
      jumlahPenghasilan : DataTypes.BIGINT
    },
    {
      sequelize,
      modelName: "PenghasilanAparatur",
    }
  );
  return PenghasilanAparatur;
};
