const { where } = require("sequelize");
const models = require("../models");
const validator = require("fastest-validator");
const { json } = require("body-parser");

function save(req, res) {
  const bodyContent = {
    namaDusun: req.body.namaDusun,
    kepalaDusun_id: req.body.kepalaDusun_id,
  };
  const schema = {
    namaDusun: { type: "string", optional: false },
    kepalaDusun_id: { type: "number", optional: false },
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
    models.Dusun.create(bodyContent)
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

  models.data_penduduk
    .findOne({ where: { id: bodyContent.kepalaDusun_id } })
    .then((result) => {
      if (result !== null) {
        post();
      } else {
        res.status(400).json({
          message: "Invalid id",
        });
      }
    });
}

function shows(req, res) {
  models.Dusun.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function show(req, res) {
  const id = req.params.id;
  models.Dusun.findByPk(id, {
    include: [
      {
        model: models.data_penduduk,
        as: "kepalaDusun",
      },
      {
        model: models.data_penduduk,
        as: "wargaDusun",
        attributes: ["id", "nomorIndukPenduduk"]
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

function update(req, res) {
  const id = req.params.id;
  const bodyContent = {
    namaDusun: req.body.namaDusun,
    kepalaDusun_id: req.body.kepalaDusun_id,
  };
  const schema = {
    namaDusun: { type: "string", optional: false },
    kepalaDusun_id: { type: "number", optional: false },
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
    models.Dusun.update(bodyContent, { where: { id: id } })
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
  models.data_penduduk
    .findOne({ where: { id: bodyContent.kepalaDusun_id } })
    .then((result) => {
      if (result !== null) {
        postUpdate();
      } else {
        res.status(400).json({
          message: "Invalid id",
        });
      }
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

module.exports = {
  save: save,
  shows: shows,
  show: show,
  update: update,
  destroy: destroy,
};
