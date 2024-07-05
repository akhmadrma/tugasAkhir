const models = require("../models");
const validator = require("fastest-validator");
const { where, Op } = require("sequelize");

function save(req, res) {
  const bodyContent = {
    nomorRt: req.body.nomorRt,
    kepalaRt_id: req.body.kepalaRt_id,
    rukunWarga_id: req.body.rukunWarga_id,
    dusun_id: req.body.dusun_id,
  };

  const schema = {
    nomorRt: { type: "number", optional: false },
    kepalaRt_id: { type: "number", optional: false },
    rukunWarga_id: { type: "number", optional: false },
    dusun_id: { type: "number", optional: false },
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
    models.RukunTetangga.create(bodyContent)
      .then((result) => {
        res.status(200).json({
          message: "RukunTetangga created succesfully",
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

  models.RukunTetangga.findOne({
    where: {
      [Op.and]: [
        { nomorRt: bodyContent.nomorRt },
        { rukunWarga_id: bodyContent.rukunWarga_id },
        { dusun_id: bodyContent.dusun_id },
      ],
    },
  })
    .then((result) => {
      if (result !== null) {
        res.status(400).json({
          message: "data is exist",
        });
      } else {
        models.RukunWarga.findOne({ where: { id: bodyContent.rukunWarga_id } })
          .then((result) => {
            if (result !== null) {
              models.data_penduduk
                .findOne({ where: { id: bodyContent.kepalaRt_id } })
                .then((result) => {
                  if (result !== null) {
                    models.Dusun.findOne({
                      where: { id: bodyContent.dusun_id },
                    }).then((result) => {
                      if (result !== null) {
                        post();
                      } else {
                        res.status(400).json({
                          message: "Invalid dusun_id",
                        });
                      }
                    });
                  } else {
                    res.status(400).json({
                      message: "Invalid kepalaDusun_id",
                    });
                  }
                });
            } else {
              res.status(400).json({
                message: "Invalid rukunWarga_id",
              });
            }
          })
          .catch((err) => {
            res.status(500).json({
              message: "Something Error",
              err: err,
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something Error",
        err: err,
      });
    });
}

function shows(req, res) {
  models.RukunTetangga.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function destroy(req, res) {
  const id = req.params.id;

  models.RukunTetangga.destroy({ where: { id: id } })
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
  models.RukunTetangga.findByPk(id, {
    include: [
      {
        model: models.data_penduduk,
        as: "kepalaRt",
      },
      {
        model : models.data_penduduk,
        as : "wargaRukunTetangga",
        attributes : ["id","nomorIndukPenduduk"]
      }
    ],
  })
    .then((result) => {
      res.status(200).json({
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

function update(req, res) {
  const id = req.params.id;
  models.RukunTetangga.destroy({ where: { id: id } });
  const bodyContent = {
    id: id,
    nomorRt: req.body.nomorRt,
    kepalaRt_id: req.body.kepalaRt_id,
    rukunWarga_id: req.body.rukunWarga_id,
    dusun_id: req.body.dusun_id,
  };

  const schema = {
    nomorRt: { type: "number", optional: false },
    kepalaRt_id: { type: "number", optional: false },
    rukunWarga_id: { type: "number", optional: false },
    dusun_id: { type: "number", optional: false },
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
    models.RukunTetangga.create(bodyContent)
      .then((result) => {
        res.status(200).json({
          message: "RukunTetangga updated succesfully",
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
  models.RukunTetangga.findOne({
    where: {
      [Op.and]: [
        { nomorRt: bodyContent.nomorRt },
        { rukunWarga_id: bodyContent.rukunWarga_id },
        { dusun_id: bodyContent.dusun_id },
      ],
    },
  })
    .then((result) => {
      if (result !== null) {
        res.status(400).json({
          message: "data is exist",
        });
      } else {
        models.RukunWarga.findOne({ where: { id: bodyContent.rukunWarga_id } })
          .then((result) => {
            if (result !== null) {
              models.data_penduduk
                .findOne({ where: { id: bodyContent.kepalaRt_id } })
                .then((result) => {
                  if (result !== null) {
                    models.Dusun.findOne({
                      where: { id: bodyContent.dusun_id },
                    }).then((result) => {
                      if (result !== null) {
                        updatePost();
                      } else {
                        res.status(400).json({
                          message: "Invalid dusun_id",
                        });
                      }
                    });
                  } else {
                    res.status(400).json({
                      message: "Invalid kepalaDusun_id",
                    });
                  }
                });
            } else {
              res.status(400).json({
                message: "Invalid rukunWarga_id",
              });
            }
          })
          .catch((err) => {
            res.status(500).json({
              message: "Something Error",
              err: err,
            });
          });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something Error",
        err: err,
      });
    });
}

module.exports = {
  save: save,
  shows: shows,
  destroy: destroy,
  show: show,
  update: update,
};
