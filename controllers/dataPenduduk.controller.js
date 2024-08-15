const models = require("../models");
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const validator = require("fastest-validator");

const { Sequelize, where } = require("sequelize");


function save(req, res, next) {
  const bodyContent = {
    nomorIndukPenduduk: req.body.nomorIndukPenduduk,
    nama: req.body.nama,
    tempatLahir: req.body.tempatLahir,
    tglLahir: req.body.tglLahir,
    namaIbu: req.body.namaIbu,
    jenisKelamin_id: req.body.jenisKelamin_id,
    pendidikanTerakhir_id: req.body.pendidikanTerakhir_id,
    agama_id: req.body.agama_id,
    pekerjaan_id: req.body.pekerjaan_id,
    status_id: req.body.status_id,
    shdk_id: req.body.shdk_id,
    dusun_id: req.body.dusun_id,
    rukunWarga_id: req.body.rukunWarga_id,
    rukunTetangga_id: req.body.rukunTetangga_id,
  };

  const schema = {
    nomorIndukPenduduk: { type: "number", optional: false },
    nama: { type: "string", optional: false },
    tempatLahir: { type: "string", optional: false },
    tglLahir: { type: "date", optional: false, convert: true },
    namaIbu: { type: "string", optional: false },
    jenisKelamin_id: { type: "number", optional: false },
    pendidikanTerakhir_id: { type: "number", optional: false },
    pekerjaan_id: { type: "number", optional: false },
    agama_id: { type: "number", optional: false },
    status_id: { type: "number", optional: false },
    shdk_id: { type: "number", optional: false },
    dusun_id: { type: "number", optional: false },
    rukunWarga_id: { type: "number", optional: false },
    rukunTetangga_id: { type: "number", optional: false },
  };

  const v = new validator();
  const validateResponse = v.validate(bodyContent, schema);

  if (validateResponse !== true) {
    return res.status(400).json({
      message: "Validate Error",
      error: validateResponse,
    });
  }
  if (bodyContent.nomorIndukPenduduk.toString().length !== 16) {
    return res.status(400).json({
      message: "NIK must be 16 digits number",
    });
  }

  function post() {
    models.data_penduduk
      .create(bodyContent)
      .then((result) => {
        res.status(201).json({
          message: "Data Penduduk created successfully",
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something error",
          error: err,
        });
      });
  }

  models.data_penduduk
    .findOne({ where: { nomorIndukPenduduk: bodyContent.nomorIndukPenduduk } })
    .then((result) => {
      if (result !== null) {
        res.status(505).json({
          message: "NIK already exist",
        });
      } else {
        models.JenisKelamin.findByPk(bodyContent.jenisKelamin_id).then(
          (result) => {
            if (result !== null) {
              models.PendidikanTerakhir.findByPk(
                bodyContent.pendidikanTerakhir_id
              ).then((result) => {
                if (result !== null) {
                  models.Agama.findByPk(bodyContent.agama_id).then((result) => {
                    if (result !== null) {
                      models.Status.findByPk(bodyContent.status_id).then(
                        (result) => {
                          if (result !== null) {
                            models.SHDK.findByPk(bodyContent.shdk_id).then(
                              (result) => {
                                if (result !== null) {
                                  post();
                                } else {
                                  res.status(400).json({
                                    message: "Invalid shdk_id",
                                  });
                                }
                              }
                            );
                          } else {
                            res.status(400).json({
                              message: "Invalid status_id",
                            });
                          }
                        }
                      );
                    } else {
                      res.status(400).json({
                        message: "Invalid agama_id",
                      });
                    }
                  });
                } else {
                  res.status(400).json({
                    message: "Invalid pendidikanTerakhir_id",
                  });
                }
              });
            } else {
              res.status(400).json({
                message: "Invalid jenisKelamin_id",
              });
            }
          }
        );
      }
    })
    .catch((err) => {});
}

function shows(req, res) {
  models.data_penduduk
    .findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function show(req, res) {
  const id = req.params.id;
  const jenisKelamin = models.JenisKelamin;
  const pekerjaan = models.Pekerjaan;
  const agama = models.Agama;
  const pendidikanTerakhir = models.PendidikanTerakhir;
  const shdk = models.SHDK;
  const status = models.Status;
  models.data_penduduk
    .findByPk(id, {
      attributes: [
        "nomorIndukPenduduk",
        "nama",
        "tempatLahir",
        "tglLahir",
        "namaIbu",
      ],
      include: [
        jenisKelamin,
        agama,
        pekerjaan,
        pendidikanTerakhir,
        shdk,
        status,
      ],
    })
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(400).json({
          message: "Id cant be found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function update(req, res) {
  const id = req.params.id;

  models.data_penduduk.destroy({ where: { id: id } });

  const bodyContent = {
    id : id,
    nomorIndukPenduduk: req.body.nomorIndukPenduduk,
    nama: req.body.nama,
    tempatLahir: req.body.tempatLahir,
    tglLahir: req.body.tglLahir,
    namaIbu: req.body.namaIbu,
    jenisKelamin_id: req.body.jenisKelamin_id,
    pendidikanTerakhir_id: req.body.pendidikanTerakhir_id,
    agama_id: req.body.agama_id,
    pekerjaan_id: req.body.pekerjaan_id,
    status_id: req.body.status_id,
    shdk_id: req.body.shdk_id,
    dusun_id: req.body.dusun_id,
    rukunWarga_id: req.body.rukunWarga_id,
    rukunTetangga_id: req.body.rukunTetangga_id,
  };
  const schema = {
    nomorIndukPenduduk: { type: "number", optional: true },
    nama: { type: "string", optional: false },
    tempatLahir: { type: "string", optional: false },
    tglLahir: { type: "date", optional: false, convert: true },
    namaIbu: { type: "string", optional: false },
    jenisKelamin_id: { type: "number", optional: false },
    pendidikanTerakhir_id: { type: "number", optional: false },
    pekerjaan_id: { type: "number", optional: false },
    agama_id: { type: "number", optional: false },
    status_id: { type: "number", optional: false },
    shdk_id: { type: "number", optional: false },
    dusun_id: { type: "number", optional: false },
    rukunWarga_id: { type: "number", optional: false },
    rukunTetangga_id: { type: "number", optional: false },
  };
  const v = new validator();
  const validateResponse = v.validate(bodyContent, schema);

  if (validateResponse !== true) {
    return res.status(400).json({
      message: "Validate Error",
      error: validateResponse,
    });
  }
  if (bodyContent.nomorIndukPenduduk.toString().length !== 16) {
    return res.status(400).json({
      message: "NIK must be 16 digits number",
    });
  }

  function postUpdate() {
    models.data_penduduk
      .create(bodyContent)
      .then((result) => {
        res.status(200).json({
          message: "Data Penduduk Has been updated",
          update: bodyContent,
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: "Something went wrong",
        });
      });
  }

  models.data_penduduk
    .findOne({ where: { nomorIndukPenduduk: bodyContent.nomorIndukPenduduk } })
    .then((result) => {
      if (result !== null) {
        res.status(505).json({
          message: "NIK already exist",
        });
      } else {
        models.JenisKelamin.findByPk(bodyContent.jenisKelamin_id).then(
          (result) => {
            if (result !== null) {
              models.PendidikanTerakhir.findByPk(
                bodyContent.pendidikanTerakhir_id
              ).then((result) => {
                if (result !== null) {
                  models.Agama.findByPk(bodyContent.agama_id).then((result) => {
                    if (result !== null) {
                      models.Status.findByPk(bodyContent.status_id).then(
                        (result) => {
                          if (result !== null) {
                            models.SHDK.findByPk(bodyContent.shdk_id).then(
                              (result) => {
                                if (result !== null) {
                                  postUpdate();
                                } else {
                                  res.status(400).json({
                                    message: "Invalid shdk_id",
                                  });
                                }
                              }
                            );
                          } else {
                            res.status(400).json({
                              message: "Invalid status_id",
                            });
                          }
                        }
                      );
                    } else {
                      res.status(400).json({
                        message: "Invalid agama_id",
                      });
                    }
                  });
                } else {
                  res.status(400).json({
                    message: "Invalid pendidikanTerakhir_id",
                  });
                }
              });
            } else {
              res.status(400).json({
                message: "Invalid jenisKelamin_id",
              });
            }
          }
        );
      }
    })
    .catch((err) => {});
}

function destroy(req, res) {
  const id = req.params.id;

  models.data_penduduk
    .destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: "Data penduduk has been deleted",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Somethng went wrong",
        err: err,
      });
    });
}

function showsJenisKelamin(req, res) {
  models.JenisKelamin
    .findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function showsPendidikanTerakhir(req, res) {
  models.PendidikanTerakhir
    .findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function showsAgama(req, res) {
  models.Agama
    .findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function showsShdk(req, res) {
  models.SHDK
    .findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function showsStatus(req, res) {
  models.Status
    .findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

module.exports = {
  save: save,
  show: show,
  shows: shows,
  update: update,
  destroy: destroy,
  showsAgama : showsAgama,
  showsJenisKelamin : showsJenisKelamin,
  showsPendidikanTerakhir: showsPendidikanTerakhir,
  showsShdk:showsShdk,
  showsStatus:showsStatus
};
