const models = require("../models");
const validator = require("fastest-validator");
const { where, Op } = require("sequelize");

function save(req, res) {
  const bodyContent = {
    namaLembaga: req.body.namaLembaga,
  };

  const schema = {
    namaLembaga: { type: "string", optional: false },
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
    models.LembagaDesa.create(bodyContent)
      .then((result) => {
        res.status(200).json({
          message: "Data LembagaDesa created succesfully",
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

  post();
}

function shows(req, res) {
  models.LembagaDesa.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function destroy(req, res) {
  const id = req.params.id;

  models.LembagaDesa.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: "Data has been deleted",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Somethng went wrong",
        err: err,
      });
    });
}

function show(req, res) {
  const id = req.params.id;
  models.LembagaDesa.findByPk(id, {
    include: [
      {
        model: models.KepengurusanLembagaDesa,
        as: "AnggotaLembaga",
      },
      {
        model: models.KegiatanLembagaDesa,
        as: "KegiatanLembaga",
        attributes: ["namaKegiatan"],
      },
      {
        model: models.PengelolaanDanaLembagaDesa,
        as: "DanaLembaga",
      },
    ],
  })
    .then((result) => {
      res.status(200).json({
        daya: result,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function update(req, res) {
  const id = req.params.id;
  models.LembagaDesa.destroy({ where: { id: id } });
  const bodyContent = {
    id: id,
    namaLembaga: req.body.namaLembaga,
  };

  const schema = {
    namaLembaga: { type: "string", optional: false },
  };

  const v = new validator();
  const validateResponse = v.validate(bodyContent, schema);

  if (validateResponse !== true) {
    return res.status(400).json({
      message: "Validate Error",
      error: validateResponse,
    });
  }
  models.LembagaDesa.create(bodyContent)
    .then((result) => {
      res.status(200).json({
        message: "Data LembagaDesa created succesfully",
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

module.exports = {
    save:save,
    show:show,
    shows:shows,
    destroy:destroy,
    update:update,
};
