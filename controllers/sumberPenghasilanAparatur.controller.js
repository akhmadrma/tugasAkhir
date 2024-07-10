const models = require("../models");
const validator = require("fastest-validator");

function save(req, res) {
  const bodyContent = {
    sumberPenghasilan: req.body.sumberPenghasilan,
    keterangan: req.body.keterangan,
  };

  const schema = {
    sumberPenghasilan: { type: "string", optional: false },
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

  models.SumberPenghasilanAparatur.create(bodyContent)
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

function shows(req, res) {
  models.SumberPenghasilanAparatur.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function destroy(req, res) {
  const id = req.params.id;

  models.SumberPenghasilanAparatur.destroy({ where: { id: id } })
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
    sumberPenghasilan: req.body.sumberPenghasilan,
    keterangan: req.body.keterangan,
  };

  const schema = {
    sumberPenghasilan: { type: "string", optional: false },
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

  models.SumberPenghasilanAparatur.update(bodyContent, { where: { id: id } })
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

module.exports = {
  save: save,
  shows: shows,
  destroy: destroy,
  update: update,
};
