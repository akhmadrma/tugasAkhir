const models = require("../models");
const validator = require("fastest-validator");

function save(req, res) {
  const bodyContent = {
    dataPenduduk_id: req.body.dataPenduduk_id,
    kategoriJabatanAparatur_id: req.body.kategoriJabatanAparatur_id,
    tanggalMulaiMenjabat: req.body.tanggalMulaiMenjabat,
  };

  const schema = {
    dataPenduduk_id: { type: "number", optional: false },
    kategoriJabatanAparatur_id: { type: "number", optional: false },
    tanggalMulaiMenjabat: { type: "date", optional: false, convert: true },
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
    models.AparaturDesa.create(bodyContent)
      .then((result) => {
        res.status(201).json({
          message: "Dusun created succesfully",
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something Error",
          err: err,
        });
      });
  }

  models.AparaturDesa.findOne({
    where: { dataPenduduk_id: bodyContent.dataPenduduk_id },
  })
    .then((result) => {
      if (result === null) {
        models.data_penduduk
          .findByPk(bodyContent.dataPenduduk_id)
          .then((result) => {
            if (result !== null) {
              models.KategoriJabatanAparaturDesa.findByPk(
                bodyContent.kategoriJabatanAparatur_id
              )
                .then((result) => {
                  if (result !== null) {
                    post();
                  } else {
                    res.status(500).json({
                      message: "Invalid kategoriJabatanAparatur_id",
                    });
                  }
                })
                .catch((err) => {
                  res.status(500).json({
                    message: "Something error in KategoriJabatanAparaturDesa",
                    err,
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
              err,
            });
          });
      } else {
        res.status(400).json({
          message: "dataPenduduk_id already exist",
          err,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something error in AparaturDesa",
        err,
      });
    });
}

function shows(req, res) {
  models.AparaturDesa.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function show(req, res) {
  const id = req.params.id;
  models.AparaturDesa.findByPk(id, {
    include: [
      {
        model: models.data_penduduk,
        as: "dataAparatur",
      },
      {
        model: models.KategoriJabatanAparaturDesa,
        as: "KategoriJabatan",
      },
    ],
  })
    .then((result) => {
      res.status(200).json({
        data: result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Id cant be found",
        err: err,
      });
    });
}

function destroy(req, res) {
  const id = req.params.id;

  models.AparaturDesa.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: "Data  has been deleted",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Somethng went wrong",
        err: err,
      });
    });
}

function update(req, res) {

  const id = req.params.id;
  const bodyContent = {
    id: id,
    dataPenduduk_id: req.body.dataPenduduk_id,
    kategoriJabatanAparatur_id: req.body.kategoriJabatanAparatur_id,
    tanggalMulaiMenjabat: req.body.tanggalMulaiMenjabat,
  };

  const schema = {
    dataPenduduk_id: { type: "number", optional: false },
    kategoriJabatanAparatur_id: { type: "number", optional: false },
    tanggalMulaiMenjabat: { type: "date", optional: false, convert: true },
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
    models.AparaturDesa.create(bodyContent)
      .then((result) => {
        res.status(201).json({
          message: "Dusun created succesfully",
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something Error",
          err: err,
        });
      });
  }

  models.AparaturDesa.destroy({ where: { id: id } });
  
  models.AparaturDesa.findOne({
    where: { dataPenduduk_id: bodyContent.dataPenduduk_id },
  })
    .then((result) => {
      if (result === null) {
        models.data_penduduk
          .findByPk(bodyContent.dataPenduduk_id)
          .then((result) => {
            if (result !== null) {
              models.KategoriJabatanAparaturDesa.findByPk(
                bodyContent.kategoriJabatanAparatur_id
              )
                .then((result) => {
                  if (result !== null) {
                    postUpdate();
                  } else {
                    res.status(500).json({
                      message: "Invalid kategoriJabatanAparatur_id",
                    });
                  }
                })
                .catch((err) => {
                  res.status(500).json({
                    message: "Something error in KategoriJabatanAparaturDesa",
                    err,
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
              err,
            });
          });
      } else {
        res.status(400).json({
          message: "dataPenduduk_id already exist",
          err,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something error in AparaturDesa",
        err,
      });
    });
}

module.exports = {
  save: save,
  shows: shows,
  show: show,
  destroy: destroy,
  update: update,
};
