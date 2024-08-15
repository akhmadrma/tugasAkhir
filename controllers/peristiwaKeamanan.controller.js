const { where } = require("sequelize");
const models = require("../models");
const validator = require("fastest-validator");

function save(req, res) {
  const bodyContent = {
    namaPeristiwa: req.body.namaPeristiwa,
    tanggalPeristiwa: req.body.tanggalPeristiwa,
    kategoriPeristiwaKeamanan_id: req.body.kategoriPeristiwaKeamanan_id,
  };

  const schema = {
    namaPeristiwa: { type: "string", optional: false },
    tanggalPeristiwa: { type: "date", optional: false, convert: true },
    kategoriPeristiwaKeamanan_id: { type: "number", optional: false },
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
    models.PeristiwaKeamanan.create(bodyContent)
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

  models.KategoriPeristiwaKeamanan.findByPk(
    bodyContent.kategoriPeristiwaKeamanan_id
  )
    .then((result) => {
      if (result !== null) {
        post();
      } else {
        res.status(400).json({
          message: "Invalid kategoriPeristiwaKeamanan_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something Error in KategoriPeristiwaKeamanan",
        err,
      });
    });
}
function shows(req, res) {
  models.PeristiwaKeamanan.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
function destroy(req, res) {
  const id = req.params.id;

  models.PeristiwaKeamanan.destroy({ where: { id: id } })
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
  models.PeristiwaKeamanan.findByPk(id, {
    include: [
      {
        model: models.KategoriPeristiwaKeamanan,
        as: "KategoriPeristiwa",
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
  const bodyContent = {
    namaPeristiwa: req.body.namaPeristiwa,
    tanggalPeristiwa: req.body.tanggalPeristiwa,
    kategoriPeristiwaKeamanan_id: req.body.kategoriPeristiwaKeamanan_id,
  };

  const schema = {
    namaPeristiwa: { type: "string", optional: false },
    tanggalPeristiwa: { type: "date", optional: false, convert: true },
    kategoriPeristiwaKeamanan_id: { type: "number", optional: false },
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
    models.PeristiwaKeamanan.update(bodyContent, { where: { id: id } })
      .then((result) => {
        res.status(200).json({
          message: "Data Updated Successfully",
          data: bodyContent,
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  models.KategoriPeristiwaKeamanan.findByPk(
    bodyContent.kategoriPeristiwaKeamanan_id
  )
    .then((result) => {
      if (result !== null) {
        postUpdate();
      } else {
        res.status(400).json({
          message: "Invalid kategoriPeristiwaKeamanan_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something Error in KategoriPeristiwaKeamanan",
        err,
      });
    });
}

function showsKategoriPeristiwaKeamanan(req, res) {
  models.KategoriPeristiwaKeamanan.findAll()
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
  KategoriPeristiwaKeamanan : showsKategoriPeristiwaKeamanan
};
