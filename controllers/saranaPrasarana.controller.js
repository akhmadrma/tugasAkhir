const models = require("../models");
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const validator = require("fastest-validator");
const { where } = require("sequelize");

function save(req, res) {
  const bodyContent = {
    nama: req.body.nama,
    jumlah: req.body.jumlah,
    kategoriSarpras_id: req.body.kategoriSarpras_id,
    kondisiSarpras_id: req.body.kondisiSarpras_id,
  };
  const schema = {
    nama: { type: "string", optional: false },
    jumlah: { type: "string", optional: false },
    kategoriSarpras_id: { type: "number", optional: false },
    kondisiSarpras_id: { type: "number", optional: false },
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
    models.SaranaPrasarana.create(bodyContent)
      .then((result) => {
        res.status(200).json({
          message: "Data Created Succesfully",
          data: bodyContent,
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  models.KategoriSarpras.findByPk(bodyContent.kategoriSarpras_id)
    .then((result) => {
      if (result !== null) {
        models.KondisiSarpras.findByPk(bodyContent.kondisiSarpras_id)
          .then((result) => {
            if (result !== null) {
              post();
            } else {
              res.status(400).json({
                message: "kondisiSarpras_id didnt exist",
              });
            }
          })
          .catch((err) => {
            res.status(500).json(err);
          });
      } else {
        res.status(400).json({
          message: "kategoriSarpras_id didnt exist",
        });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function shows(req, res) {
  models.SaranaPrasarana.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function show(req, res) {
  const id = req.params.id;

  models.SaranaPrasarana.findByPk(id, {
    include: [
      {
        model: models.KategoriSarpras,
        as: "kategoriSarpras",
        attributes: ["id", "kategori"],
      },
      {
        model: models.KondisiSarpras,
        as: "kondisiSarpras",
        attributes: ["id", "kondisi"],
      },
    ],
    attributes: ["nama", "jumlah"],
  })
    .then((result) => {
      res.status(200).json({
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function destroy(req, res) {
  const id = req.params.id;

  models.SaranaPrasarana.destroy({ where: { id: id } })
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
    nama: req.body.nama,
    jumlah: req.body.jumlah,
    kategoriSarpras_id: req.body.kategoriSarpras_id,
    kondisiSarpras_id: req.body.kondisiSarpras_id,
  };
  const schema = {
    nama: { type: "string", optional: false },
    jumlah: { type: "string", optional: false },
    kategoriSarpras_id: { type: "number", optional: false },
    kondisiSarpras_id: { type: "number", optional: false },
  };

  const v = new validator();
  const validateResponse = v.validate(bodyContent, schema);

  if (validateResponse !== true) {
    return res.status(400).json({
      message: "Validate Error",
      error: validateResponse,
    });
  }

  function updatePost() {
    models.SaranaPrasarana.update(bodyContent, { where: { id: id } })
      .then((result) => {
        res.status(200).json({
          message: "Data Updated Succesfully",
          data: bodyContent,
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  models.KategoriSarpras.findByPk(bodyContent.kategoriSarpras_id)
    .then((result) => {
      if (result !== null) {
        models.KondisiSarpras.findByPk(bodyContent.kondisiSarpras_id)
          .then((result) => {
            if (result !== null) {
              updatePost();
            } else {
              res.status(400).json({
                message: "kondisiSarpras_id didnt exist",
              });
            }
          })
          .catch((err) => {
            res.status(500).json(err);
          });
      } else {
        res.status(400).json({
          message: "kategoriSarpras_id didnt exist",
        });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function showsKondisiSarpras(req, res) {
  models.KondisiSarpras.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function showsKategoriSarpras(req, res) {
  models.KategoriSarpras.findAll()
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
  showsKategoriSarpras: showsKategoriSarpras,
  showsKondisiSarpras: showsKondisiSarpras,
};
