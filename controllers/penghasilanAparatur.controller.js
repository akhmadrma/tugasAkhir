const { where } = require("sequelize");
const models = require("../models");
const validator = require("fastest-validator");

function save(req, res) {
  const bodyContent = {
    kategoriJabatanAparatur_id: req.body.kategoriJabatanAparatur_id,
    jenisPenghasilanAparatur_id: req.body.jenisPenghasilanAparatur_id,
    sumberPenghasilanAparatur_id: req.body.sumberPenghasilanAparatur_id,
    jumlahPenghasilan: req.body.jumlahPenghasilan,
  };

  const schema = {
    kategoriJabatanAparatur_id: { type: "number", optional: false },
    jenisPenghasilanAparatur_id: { type: "number", optional: false },
    sumberPenghasilanAparatur_id: { type: "number", optional: false },
    jumlahPenghasilan: { type: "number", optional: false },
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
    models.PenghasilanAparatur.create(bodyContent)
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

  models.KategoriJabatanAparaturDesa.findByPk(
    bodyContent.kategoriJabatanAparatur_id
  )
    .then((result) => {
      if (result !== null) {
        models.JenisPenghasilanAparatur.findByPk(
          bodyContent.jenisPenghasilanAparatur_id
        )
          .then((result) => {
            if (result !== null) {
              models.SumberPenghasilanAparatur.findByPk(
                bodyContent.sumberPenghasilanAparatur_id
              )
                .then((result) => {
                  if (result !== null) {
                    post();
                  } else {
                    res.status(400).json({
                      message: "Invalid sumberPenghasilanAparatur_id",
                    });
                  }
                })
                .catch((err) => {
                  res.status(500).json({
                    message: "Something error in SumberPenghasilanAparatur",
                    err,
                  });
                });
            } else {
              res.status(400).json({
                message: "Invalid jenisPenghasilanAparatur_id",
              });
            }
          })
          .catch((err) => {
            res.status(500).json({
              message: "Something error in JenisPenghasilanAparatur",
              err,
            });
          });
      } else {
        res.status(400).json({
          message: "Invalid kategoriJabatanAparatur_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something error in KategoriJabatanAparaturDesa",
        err,
      });
    });
}
function shows(req, res) {
  models.PenghasilanAparatur.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function show(req, res) {
  const id = req.params.id;
  models.PenghasilanAparatur.findByPk(id, {
    include: [
      {
        model: models.KategoriJabatanAparaturDesa,
        as: "kategoriJabatan",
      },
      {
        model: models.JenisPenghasilanAparatur,
        as: "jenisPenghasilan",
      },
      {
        model: models.SumberPenghasilanAparatur,
        as: "sumberPenghasilan",
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

  models.PenghasilanAparatur.destroy({ where: { id: id } })
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
    id:id,
    kategoriJabatanAparatur_id: req.body.kategoriJabatanAparatur_id,
    jenisPenghasilanAparatur_id: req.body.jenisPenghasilanAparatur_id,
    sumberPenghasilanAparatur_id: req.body.sumberPenghasilanAparatur_id,
    jumlahPenghasilan: req.body.jumlahPenghasilan,
  };

  const schema = {
    kategoriJabatanAparatur_id: { type: "number", optional: false },
    jenisPenghasilanAparatur_id: { type: "number", optional: false },
    sumberPenghasilanAparatur_id: { type: "number", optional: false },
    jumlahPenghasilan: { type: "number", optional: false },
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
    models.PenghasilanAparatur.create(bodyContent)
      .then((result) => {
        res.status(201).json({
          message: "Data updated succesfully",
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

  models.PenghasilanAparatur.destroy({where:{id:id}})

  models.KategoriJabatanAparaturDesa.findByPk(
    bodyContent.kategoriJabatanAparatur_id
  )
    .then((result) => {
      if (result !== null) {
        models.JenisPenghasilanAparatur.findByPk(
          bodyContent.jenisPenghasilanAparatur_id
        )
          .then((result) => {
            if (result !== null) {
              models.SumberPenghasilanAparatur.findByPk(
                bodyContent.sumberPenghasilanAparatur_id
              )
                .then((result) => {
                  if (result !== null) {
                    postUpdate();
                  } else {
                    res.status(400).json({
                      message: "Invalid sumberPenghasilanAparatur_id",
                    });
                  }
                })
                .catch((err) => {
                  res.status(500).json({
                    message: "Something error in SumberPenghasilanAparatur",
                    err,
                  });
                });
            } else {
              res.status(400).json({
                message: "Invalid jenisPenghasilanAparatur_id",
              });
            }
          })
          .catch((err) => {
            res.status(500).json({
              message: "Something error in JenisPenghasilanAparatur",
              err,
            });
          });
      } else {
        res.status(400).json({
          message: "Invalid kategoriJabatanAparatur_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something error in KategoriJabatanAparaturDesa",
        err,
      });
    });
}

function showsJenisPenghasilanAparatur(req, res) {
  models.JenisPenghasilanAparatur.findAll()
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
  JenisPenghasilanAparatur : showsJenisPenghasilanAparatur
};
