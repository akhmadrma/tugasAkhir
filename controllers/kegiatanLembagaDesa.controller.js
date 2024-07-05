const models = require("../models");
const validator = require("fastest-validator");
const { where, Op } = require("sequelize");

function save(req, res) {
  const bodyContent = {
    namaKegiatan: req.body.namaKegiatan,
    tanggalKegiatan: req.body.tanggalKegiatan,
    lembagaDesa_id: req.body.lembagaDesa_id,
  };

  const schema = {
    namaKegiatan: { type: "string", optional: false },
    tanggalKegiatan: { type: "date", optional: false, convert: true },
    lembagaDesa_id: { type: "number", optional: false },
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
    models.KegiatanLembagaDesa.create(bodyContent)
      .then((result) => {
        res.status(200).json({
          message: "Data Kegiatan Lembaga Desa created succesfully",
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "something wrong",
        });
      });
  }

  models.LembagaDesa.findByPk(bodyContent.lembagaDesa_id)
    .then((result) => {
      if (result !== null) {
        post();
      } else {
        res.status(400).json({
          message: "Invalid lembagaDesa_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Somethng error in Lembaga Desa",
      });
    });
}

function show(req, res) {
  const id = req.params.id;

  models.KegiatanLembagaDesa.findByPk(id, {
    include: [
      {
        model: models.LembagaDesa,
        as: "LembagaDesa",
      },
    ],
  })
    .then((result) => {
      res.status(400).json({
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Somehings wrong in KegiatanLembagaDesa",
      });
    });
}

function shows(req, res) {
  models.KegiatanLembagaDesa.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function destroy(req, res) {
  const id = req.params.id;

  models.Dusun.destroy({ where: { id: id } })
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

function update(req, res) {
  const id = req.params.id;

  const bodyContent = {
    id: id,
    namaKegiatan: req.body.namaKegiatan,
    tanggalKegiatan: req.body.tanggalKegiatan,
    lembagaDesa_id: req.body.lembagaDesa_id,
  };

  const schema = {
    namaKegiatan: { type: "string", optional: false },
    tanggalKegiatan: { type: "date", optional: false, convert: true },
    lembagaDesa_id: { type: "number", optional: false },
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
    models.KegiatanLembagaDesa.create(bodyContent)
      .then((result) => {
        res.status(200).json({
          message: "Data Kegiatan Lembaga Desa updated succesfully",
          data: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "something wrong",
        });
      });
  }

  models.KegiatanLembagaDesa.destroy({where:{id:id}});

  models.LembagaDesa.findByPk(bodyContent.lembagaDesa_id)
    .then((result) => {
      if (result !== null) {
        postUpdate();
      } else {
        res.status(400).json({
          message: "Invalid lembagaDesa_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Somethng error in Lembaga Desa",
      });
    });
}

module.exports = {
  save: save,
  show: show,
  shows: shows,
  destroy: destroy,
  update: update,
};
