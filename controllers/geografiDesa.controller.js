const models = require("../models");
const validator = require("fastest-validator");

function save(req, res) {
  const bodyContent = {
    kategoriGeografiDesa_id: req.body.kategoriGeografiDesa_id,
    value: req.body.value,
    keterangan: req.body.keterangan,
  };

  const schema = {
    kategoriGeografiDesa_id: { type: "number", optional: false },
    value: { type: "string", optional: false },
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
    models.GeografiDesa.create(bodyContent)
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

  models.KategoriGeografiDesa.findByPk(bodyContent.kategoriGeografiDesa_id)
    .then((result) => {
      if (result !== null) {
        post();
      } else {
        res.status(400).json({
          message: "Invalid kategoriGeografiDesa_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something Error in KategoriGeografiDesa",
        err,
      });
    });
}

function shows(req, res) {
  models.GeografiDesa.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function destroy(req, res) {
  const id = req.params.id;

  models.GeografiDesa.destroy({ where: { id: id } })
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
  models.GeografiDesa.findByPk(id, {
    include: [
      {
        model: models.KategoriGeografiDesa,
        as: "Kategori",
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
    kategoriGeografiDesa_id: req.body.kategoriGeografiDesa_id,
    value: req.body.value,
    keterangan: req.body.keterangan,
  };

  const schema = {
    kategoriGeografiDesa_id: { type: "number", optional: false },
    value: { type: "string", optional: false },
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
    models.GeografiDesa.update(bodyContent, { where: { id: id } })
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

  models.KategoriGeografiDesa.findByPk(bodyContent.kategoriGeografiDesa_id)
    .then((result) => {
      if (result !== null) {
        postUpdate();
      } else {
        res.status(400).json({
          message: "Invalid kategoriGeografiDesa_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something Error in KategoriGeografiDesa",
        err,
      });
    });
}

function showsKategoriGeografiDesa(req, res) {
  models.KategoriGeografiDesa.findAll()
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
  KategoriGeografiDesa: showsKategoriGeografiDesa,
};
