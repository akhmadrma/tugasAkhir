const models = require("../models");
const validator = require("fastest-validator");

function save(req, res) {
  const bodyContent = {
    kategoriJabatan: req.body.kategoriJabatan,
  };

  const schema = {
    kategoriJabatan: { type: "string", optional: false },
  };

  const v = new validator();
  const validateResponse = v.validate(bodyContent, schema);

  if (validateResponse !== true) {
    return res.status(400).json({
      message: "Validate Error",
      error: validateResponse,
    });
  }

  models.KategoriJabatanAparaturDesa.create(bodyContent)
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
  models.KategoriJabatanAparaturDesa.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function destroy(req, res) {
  const id = req.params.id;

  models.KategoriJabatanAparaturDesa.destroy({ where: { id: id } })
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
    kategoriJabatan: req.body.kategoriJabatan,
  };

  const schema = {
    kategoriJabatan: { type: "string", optional: false },
  };

  const v = new validator();
  const validateResponse = v.validate(bodyContent, schema);

  if (validateResponse !== true) {
    return res.status(400).json({
      message: "Validate Error",
      error: validateResponse,
    });
  }

  models.KategoriJabatanAparaturDesa.update(bodyContent, { where: { id: id } })
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
