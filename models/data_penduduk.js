"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const jenisKelamin = sequelize.define("JenisKelamin");
  const agama = sequelize.define("Agama");
  const Pekerjaan = sequelize.define("Pekerjaan");
  const PendidikanTerakhir = sequelize.define("PendidikanTerakhir");
  const SHDK = sequelize.define("SHDK");
  const Status = sequelize.define("Status");
  const Dusun = sequelize.define("Dusun");
  const RukunTetangga = sequelize.define("RukunTetangga");
  const RukunWarga = sequelize.define("RukunWarga");

  class data_penduduk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      data_penduduk.belongsTo(jenisKelamin, {
        foreignKey: "jenisKelamin_id",
      });
      data_penduduk.belongsTo(agama, {
        foreignKey: "agama_id",
      });
      data_penduduk.belongsTo(Pekerjaan, {
        foreignKey: "pekerjaan_id",
      });
      data_penduduk.belongsTo(PendidikanTerakhir, {
        foreignKey: "pendidikanTerakhir_id",
      });
      data_penduduk.belongsTo(SHDK, {
        foreignKey: "shdk_id",
      });
      data_penduduk.belongsTo(Status, {
        foreignKey: "status_id",
      });
      data_penduduk.belongsTo(Dusun, {
        as: "wargaDusun",
        foreignKey: "dusun_id",
      });
      data_penduduk.belongsTo(RukunWarga,{
        as : "wargaRukunWarga",
        foreignKey : "rukunWarga_id"
      })
      data_penduduk.belongsTo(RukunTetangga, {
        as: "wargaRukunTetangga",
        foreignKey: "rukunTetangga_id",
      });
      data_penduduk.hasOne(Dusun, {
        as: "kepalaDusun",
      });
      data_penduduk.hasOne(RukunWarga, {
        as: "kepalaRw",
      });
      data_penduduk.hasOne(RukunTetangga, {
        as: "kepalaRt",
      });
    }
  }
  data_penduduk.init(
    {
      nomorIndukPenduduk: DataTypes.BIGINT,
      nama: DataTypes.STRING,
      tempatLahir: DataTypes.STRING,
      tglLahir: DataTypes.DATE,
      namaIbu: DataTypes.STRING,
      jenisKelamin_id: DataTypes.INTEGER,
      pendidikanTerakhir_id: DataTypes.INTEGER,
      agama_id: DataTypes.INTEGER,
      status_id: DataTypes.INTEGER,
      shdk_id: DataTypes.INTEGER,
      dusun_id: DataTypes.INTEGER,
      rukunWarga_id: DataTypes.INTEGER,
      rukunTetangga_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "data_penduduk",
    }
  );
  return data_penduduk;
};
