const models = require("../models");
const validator = require("fastest-validator");

function save(req, res) {
  const bodyContent = {
    nama: req.body.nama,
    kategoriSumberDayaAlamDesa_id: req.body.kategoriSumberDayaAlamDesa_id,
    keterangan: req.body.keterangan,
  };

  const schema = {
    nama: { type: "string", optional: false },
    kategoriSumberDayaAlamDesa_id: { type: "number", optional: false },
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
    models.SumberDayaAlamDesa.create(bodyContent)
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

  models.KategoriSumberDayaAlamDesa.findByPk(bodyContent.kategoriSumberDayaAlamDesa_id)
    .then((result) => {
      if (result !== null) {
        post();
      } else {
        res.status(400).json({
          message: "Invalid kategoriSumberDayaAlamDesa_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something Error in KategoriSumberDayaAlamDesa",
        err,
      });
    });
}

function shows(req, res) {
  models.SumberDayaAlamDesa.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function destroy(req, res) {
  const id = req.params.id;

  models.SumberDayaAlamDesa.destroy({ where: { id: id } })
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
  models.SumberDayaAlamDesa.findByPk(id, {
    include: [
      {
        model: models.KategoriSumberDayaAlamDesa,
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
    nama: req.body.nama,
    kategoriSumberDayaAlamDesa_id: req.body.kategoriSumberDayaAlamDesa_id,
    keterangan: req.body.keterangan,
  };

  const schema = {
    nama: { type: "string", optional: false },
    kategoriSumberDayaAlamDesa_id: { type: "number", optional: false },
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
    models.SumberDayaAlamDesa.update(bodyContent, { where: { id: id } })
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

  models.KategoriSumberDayaAlamDesa.findByPk(bodyContent.kategoriSumberDayaAlamDesa_id)
    .then((result) => {
      if (result !== null) {
        postUpdate();
      } else {
        res.status(400).json({
          message: "Invalid kategoriSumberDayaAlamDesa_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something Error in KategoriSumberDayaAlamDesa",
        err,
      });
    });
}
function showsKategoriSumberDayaAlamDesa(req, res) {
  models.KategoriSumberDayaAlamDesa.findAll()
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
  KategoriSumberDayaAlamDesa:showsKategoriSumberDayaAlamDesa,
};