const models = require("../models");
const validator = require("fastest-validator");

function save(req, res) {
  const bodyContent = {
    kategoriBelanjaDesa_id: req.body.kategoriBelanjaDesa_id,
    jenisBelanjaDesa_id: req.body.jenisBelanjaDesa_id,
    jumlahBelanja: req.body.jumlahBelanja,
    tanggalTransaksi: req.body.tanggalTransaksi,
    buktiTransaksi_url: req.body.buktiTransaksi_url,
    keterangan: req.body.keterangan,
  };

  const schema = {
    kategoriBelanjaDesa_id: { type: "number", optional: false },
    jenisBelanjaDesa_id: { type: "number", optional: false },
    jumlahBelanja: { type: "number", optional: false },
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
    models.BelanjaDesa.create(bodyContent)
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

  models.JenisBelanjaDesa.findByPk(bodyContent.jenisBelanjaDesa_id)
    .then((result) => {
      if (result !== null) {
        models.KategoriBelanjaDesa.findByPk(bodyContent.kategoriBelanjaDesa_id)
          .then((result) => {
            if (result !== null) {
              post();
            } else {
              res.status(400).json({
                message: "Invalid kategoriBelanjaDesa_id",
              });
            }
          })
          .catch((err) => {
            res.status(500).json({
              message: "Something wrong in KategoriBelanjaDesa",
              err,
            });
          });
      } else {
        res.status(400).json({
          message: "Invalid jenisBelanjaDesa_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something wrong in JenisBelanjaDesa",
        err,
      });
    });
}

function shows(req, res) {
  models.BelanjaDesa.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function show(req, res) {
  const id = req.params.id;
  models.BelanjaDesa.findByPk(id, {
    include: [
      {
        model: models.JenisBelanjaDesa,
        as: "JenisBelanja",
      },
      {
        model: models.KategoriBelanjaDesa,
        as: "KategoriBelanja",
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

  models.BelanjaDesa.destroy({ where: { id: id } })
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
    kategoriBelanjaDesa_id: req.body.kategoriBelanjaDesa_id,
    jenisBelanjaDesa_id: req.body.jenisBelanjaDesa_id,
    jumlahBelanja: req.body.jumlahBelanja,
    tanggalTransaksi: req.body.tanggalTransaksi,
    buktiTransaksi_url: req.body.buktiTransaksi_url,
    keterangan: req.body.keterangan,
  };

  const schema = {
    kategoriBelanjaDesa_id: { type: "number", optional: false },
    jenisBelanjaDesa_id: { type: "number", optional: false },
    jumlahBelanja: { type: "number", optional: false },
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
    models.BelanjaDesa.update(bodyContent, { where: { id: id } })
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
  models.JenisBelanjaDesa.findByPk(bodyContent.jenisBelanjaDesa_id)
    .then((result) => {
      if (result !== null) {
        models.KategoriBelanjaDesa.findByPk(bodyContent.kategoriBelanjaDesa_id)
          .then((result) => {
            if (result !== null) {
              postUpdate();
            } else {
              res.status(400).json({
                message: "Invalid kategoriBelanjaDesa_id",
              });
            }
          })
          .catch((err) => {
            res.status(500).json({
              message: "Something wrong in KategoriBelanjaDesa",
              err,
            });
          });
      } else {
        res.status(400).json({
          message: "Invalid jenisBelanjaDesa_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something wrong in JenisBelanjaDesa",
        err,
      });
    });
}

function showsKategoriBelanjaDesa(req, res) {
  models.KategoriBelanjaDesa.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
function showsJenisBelanjaDesa(req, res) {
  models.JenisBelanjaDesa.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

module.exports = {
  save: save,
  shows: shows,
  show: show,
  destroy: destroy,
  update: update,
  JenisBelanjaDesa: showsJenisBelanjaDesa,
  KategoriBelanjaDesa: showsKategoriBelanjaDesa,
};
