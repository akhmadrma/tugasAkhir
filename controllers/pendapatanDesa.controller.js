const { where } = require("sequelize");
const models = require("../models");
const validator = require("fastest-validator");

function save(req, res) {
  const bodyContent = {
    kategoriPendapatanDesa_id: req.body.kategoriPendapatanDesa_id,
    sumberPendapatanDesa_id: req.body.sumberPendapatanDesa_id,
    jumlahPendapatan: req.body.jumlahPendapatan,
    tanggalTransaksi: req.body.tanggalTransaksi,
    buktiTransaksi_url: req.body.buktiTransaksi_url,
    keterangan: req.body.keterangan,
  };

  const schema = {
    kategoriPendapatanDesa_id: { type: "number", optional: false },
    sumberPendapatanDesa_id: { type: "number", optional: false },
    jumlahPendapatan: { type: "number", optional: false },
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
    models.PendapatanDesa.create(bodyContent)
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

  models.KategoriPendapatanDesa.findByPk(bodyContent.kategoriPendapatanDesa_id)
    .then((result) => {
      if (result !== null) {
        models.SumberPendapatanDesa.findByPk(
          bodyContent.sumberPendapatanDesa_id
        )
          .then((result) => {
            if (result !== null) {
              post();
            } else {
              res.status(400).json({
                message: "Invalid sumberPendapatanDesa_id",
              });
            }
          })
          .catch((err) => {
            res.status(500).json({
              message: "Something wrong in SumberPendapatanDesa",
              err,
            });
          });
      } else {
        res.status(400).json({
          message: "Invalid kategoriPendapatanDesa_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something wrong in KategoriPendapatanDesa",
        err,
      });
    });
}

function shows(req, res) {
  models.PendapatanDesa.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function show(req, res) {
  const id = req.params.id;
  models.PendapatanDesa.findByPk(id, {
    include: [
      {
        model: models.SumberPendapatanDesa,
        as: "SumberPendapatan",
      },
      {
        model: models.KategoriPendapatanDesa,
        as: "KategoriPendapatan",
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

  models.PendapatanDesa.destroy({ where: { id: id } })
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
    kategoriPendapatanDesa_id: req.body.kategoriPendapatanDesa_id,
    sumberPendapatanDesa_id: req.body.sumberPendapatanDesa_id,
    jumlahPendapatan: req.body.jumlahPendapatan,
    tanggalTransaksi: req.body.tanggalTransaksi,
    buktiTransaksi_url: req.body.buktiTransaksi_url,
    keterangan: req.body.keterangan,
  };

  const schema = {
    kategoriPendapatanDesa_id: { type: "number", optional: false },
    sumberPendapatanDesa_id: { type: "number", optional: false },
    jumlahPendapatan: { type: "number", optional: false },
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
    models.PendapatanDesa.update(bodyContent, { where: { id: id } })
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

  models.KategoriPendapatanDesa.findByPk(bodyContent.kategoriPendapatanDesa_id)
    .then((result) => {
      if (result !== null) {
        models.SumberPendapatanDesa.findByPk(
          bodyContent.sumberPendapatanDesa_id
        )
          .then((result) => {
            if (result !== null) {
              postUpdate();
            } else {
              res.status(400).json({
                message: "Invalid sumberPendapatanDesa_id",
              });
            }
          })
          .catch((err) => {
            res.status(500).json({
              message: "Something wrong in SumberPendapatanDesa",
              err,
            });
          });
      } else {
        res.status(400).json({
          message: "Invalid kategoriPendapatanDesa_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something wrong in KategoriPendapatanDesa",
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
