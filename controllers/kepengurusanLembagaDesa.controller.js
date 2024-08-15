const models = require("../models");
const validator = require("fastest-validator");
const { where, Op } = require("sequelize");

function save(req, res) {
  const bodyContent = {
    dataPenduduk_id: req.body.dataPenduduk_id,
    lembagaDesa_id: req.body.lembagaDesa_id,
    kategoriJabatanLembagaDesa_id: req.body.kategoriJabatanLembagaDesa_id,
  };
  const schema = {
    dataPenduduk_id: { type: "number", optional: false },
    lembagaDesa_id: { type: "number", optional: false },
    kategoriJabatanLembagaDesa_id: { type: "number", optional: false },
  };

  const v = new validator();
  const validateResponse = v.validate(bodyContent, schema);

  if (validateResponse !== true) {
    return res.status(400).json({
      message: "Validate Error",
      error: validateResponse,
    });
  }
  function post() {
    models.KepengurusanLembagaDesa.create(bodyContent)
      .then((result) => {
        res.status(200).json({
          message: "Data KepengurusanLembagaDesa created succesfully",
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "something wrong",
        });
      });
  }

  models.data_penduduk
    .findOne({ where: { id: bodyContent.dataPenduduk_id } })
    .then((result) => {
      if (result !== null) {
        models.LembagaDesa.findOne({
          where: { id: bodyContent.lembagaDesa_id },
        })
          .then((result) => {
            if (result !== null) {
              models.KategoriJabatanLembagaDesa.findOne({
                where: { id: bodyContent.kategoriJabatanLembagaDesa_id },
              })
                .then((result) => {
                  if (result !== null) {
                    post();
                  } else {
                    res.status(400).json({
                      message: "kategoriJabatanLembagaDesa_id",
                    });
                  }
                })
                .catch((err) => {
                  res.status(500).json({
                    message: "Something error in kategoriJabatanLembagaDesa",
                    err: err,
                  });
                });
            } else {
              res.status(400).json({
                message: "Invalid lembagaDesa_id",
              });
            }
          })
          .catch((err) => {
            res.status(500).json({
              message: "Something error in LembagaDesa pepek",
              err: err,
            });
          });
      } else {
        res.status(400).json({
          message: "Invalid dataPenduduk_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something error in data_penduduk",
        err: err,
      });
    });
}

function shows(req, res) {
  models.KepengurusanLembagaDesa.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function destroy(req, res) {
  const id = req.params.id;

  models.KepengurusanLembagaDesa.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: "Data has been deleted",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something went wrong",
        err: err,
      });
    });
}
function show(req, res) {
  const id = req.params.id;
  models.KepengurusanLembagaDesa.findByPk(id, {
    include: [
      {
        model: models.data_penduduk,
        as: "Detail Anggota",
      },
      {
        model: models.KategoriJabatanLembagaDesa,
        as: "KategoriJabatan",
      },
      {
        model: models.LembagaDesa,
        as: "LembagaDesa",
      },
    ],
  })
    .then((result) => {
      res.status(200).json({
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "error",
      });
    });
}

function update(req, res) {
  const id = req.params.id;
  const bodyContent = {
    id: id,
    dataPenduduk_id: req.body.dataPenduduk_id,
    lembagaDesa_id: req.body.lembagaDesa_id,
    kategoriJabatanLembagaDesa_id: req.body.kategoriJabatanLembagaDesa_id,
  };
  const schema = {
    dataPenduduk_id: { type: "number", optional: false },
    lembagaDesa_id: { type: "number", optional: false },
    kategoriJabatanLembagaDesa_id: { type: "number", optional: false },
  };

  const v = new validator();
  const validateResponse = v.validate(bodyContent, schema);

  if (validateResponse !== true) {
    return res.status(400).json({
      message: "Validate Error",
      error: validateResponse,
    });
  }
  function postUpdate() {
    models.KepengurusanLembagaDesa.create(bodyContent)
      .then((result) => {
        res.status(200).json({
          message: "Data KepengurusanLembagaDesa updated succesfully",
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "something wrong",
        });
      });
  }

  models.KepengurusanLembagaDesa.destroy({where:{id:id}})

  models.data_penduduk
    .findOne({ where: { id: bodyContent.dataPenduduk_id } })
    .then((result) => {
      if (result !== null) {
        models.LembagaDesa.findOne({
          where: { id: bodyContent.lembagaDesa_id },
        })
          .then((result) => {
            if (result !== null) {
              models.KategoriJabatanLembagaDesa.findOne({
                where: { id: bodyContent.kategoriJabatanLembagaDesa_id },
              })
                .then((result) => {
                  if (result !== null) {
                    postUpdate();
                  } else {
                    res.status(400).json({
                      message: "kategoriJabatanLembagaDesa_id",
                    });
                  }
                })
                .catch((err) => {
                  res.status(500).json({
                    message: "Something error in kategoriJabatanLembagaDesa",
                    err: err,
                  });
                });
            } else {
              res.status(400).json({
                message: "Invalid lembagaDesa_id",
              });
            }
          })
          .catch((err) => {
            res.status(500).json({
              message: "Something error in LembagaDesa pepek",
              err: err,
            });
          });
      } else {
        res.status(400).json({
          message: "Invalid dataPenduduk_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something error in data_penduduk",
        err: err,
      });
    });
}

function showsKategoriJabatanLembagaDesa(req, res) {
  models.KategoriJabatanLembagaDesa.findAll()
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
  destroy: destroy,
  update: update,
  showsKategoriJabatanLembagaDesa,
};
