const models = require("../models");
const validator = require("fastest-validator");

function save(req, res) {
  const bodyContent = {
    kategoriPembiayaanDesa_id: req.body.kategoriPembiayaanDesa_id,
    jenisPembiayaanDesa_id: req.body.jenisPembiayaanDesa_id,
    jumlahPembiayaan: req.body.jumlahPembiayaan,
    tanggalTransaksi: req.body.tanggalTransaksi,
    buktiTransaksi_url: req.body.buktiTransaksi_url,
    keterangan: req.body.keterangan,
  };

  const schema = {
    kategoriPembiayaanDesa_id: { type: "number", optional: false },
    jenisPembiayaanDesa_id: { type: "number", optional: false },
    jumlahPembiayaan: { type: "number", optional: false },
    tanggalTransaksi: { type: "date", optional: false, convert: true },
    buktiTransaksi_url: { type: "string", optional: false },
    keterangan: { type: "string", optional: true },
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
    models.PembiayaanDesa.create(bodyContent)
      .then((result) => {
        res.status(201).json({
          message: "Data created succesfully",
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
  models.JenisPembiayaanDesa.findByPk(bodyContent.jenisPembiayaanDesa_id)
    .then((result) => {
      if (result !== null) {
        models.KategoriPembiayaanDesa.findByPk(
          bodyContent.kategoriPembiayaanDesa_id
        )
          .then((result) => {
            if (result !== null) {
              post();
            } else {
              res.status(400).json({
                message: "Invalid kategoriPembiayaanDesa_id",
              });
            }
          })
          .catch((err) => {
            res.status(500).json({
              message: "Something wrong in KategoriPembiayaanDesa",
              err,
            });
          });
      } else {
        res.status(400).json({
          message: "Invalid jenisPembiayaanDesa_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something wrong in JenisPembiayaanDesa",
        err,
      });
    });
}

function shows(req, res) {
  models.PembiayaanDesa.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function show(req, res) {
  const id = req.params.id;
  models.PembiayaanDesa.findByPk(id, {
    include: [
      {
        model: models.JenisPembiayaanDesa,
        as: "JenisPembiayaan",
      },
      {
        model: models.KategoriPembiayaanDesa,
        as: "KategoriPembiayaan",
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

  models.PembiayaanDesa.destroy({ where: { id: id } })
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
    kategoriPembiayaanDesa_id: req.body.kategoriPembiayaanDesa_id,
    jenisPembiayaanDesa_id: req.body.jenisPembiayaanDesa_id,
    jumlahPembiayaan: req.body.jumlahPembiayaan,
    tanggalTransaksi: req.body.tanggalTransaksi,
    buktiTransaksi_url: req.body.buktiTransaksi_url,
    keterangan: req.body.keterangan,
  };

  const schema = {
    kategoriPembiayaanDesa_id: { type: "number", optional: false },
    jenisPembiayaanDesa_id: { type: "number", optional: false },
    jumlahPembiayaan: { type: "number", optional: false },
    tanggalTransaksi: { type: "date", optional: false, convert: true },
    buktiTransaksi_url: { type: "string", optional: false },
    keterangan: { type: "string", optional: true },
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
    models.PembiayaanDesa.update(bodyContent, { where: { id: id } })
      .then((result) => {
        res.status(200).json({
          message: "Data updated successfully",
          data: bodyContent,
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
  models.JenisPembiayaanDesa.findByPk(bodyContent.jenisPembiayaanDesa_id)
    .then((result) => {
      if (result !== null) {
        models.KategoriPembiayaanDesa.findByPk(
          bodyContent.kategoriPembiayaanDesa_id
        )
          .then((result) => {
            if (result !== null) {
              postUpdate();
            } else {
              res.status(400).json({
                message: "Invalid kategoriPembiayaanDesa_id",
              });
            }
          })
          .catch((err) => {
            res.status(500).json({
              message: "Something wrong in KategoriPembiayaanDesa",
              err,
            });
          });
      } else {
        res.status(400).json({
          message: "Invalid jenisPembiayaanDesa_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something wrong in JenisPembiayaanDesa",
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
