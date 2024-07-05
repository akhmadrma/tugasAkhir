const models = require("../models");
const validator = require("fastest-validator");
const { where, Op } = require("sequelize");

function save(req, res) {
  const bodyContent = {
    nomorRw: req.body.nomorRw,
    kepalaRw_id: req.body.kepalaRw_id,
    dusun_id: req.body.dusun_id,
  };
  const schema = {
    nomorRw: { type: "number", optional: false },
    kepalaRw_id: { type: "number", optional: false },
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
    models.RukunWarga.create(bodyContent)
      .then((result) => {
        res.status(200).json({
          message: "RukunWarga created succesfully",
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

  models.RukunWarga.findOne({
    where: {
      [Op.and]: [
        { nomorRw: bodyContent.nomorRw },
        { dusun_id: bodyContent.dusun_id },
      ],
    },
  }).then((result) => {
    if (result !== null) {
      res.status(400).json({
        message: "data is exist",
      });
    } else {
      models.data_penduduk
        .findOne({ where: { id: bodyContent.kepalaRw_id } })
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
    }
  });
}
function shows(req, res) {
  models.RukunWarga.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
function destroy(req, res) {
  const id = req.params.id;

  models.RukunWarga.destroy({ where: { id: id } })
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
  models.RukunWarga.findByPk(id, {
    include: [
      {
        model: models.data_penduduk,
        as: "kepalaRw",
      },{
        model : models.data_penduduk,
        as : "wargaRukunWarga",
        attributes : ['id','nomorIndukPenduduk']
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
  models.RukunWarga.destroy({ where: { id: id } });
  const bodyContent = {
    id: id,
    nomorRw: req.body.nomorRw,
    kepalaRw_id: req.body.kepalaRw_id,
    dusun_id: req.body.dusun_id,
  };
  const schema = {
    nomorRw: { type: "number", optional: false },
    kepalaRw_id: { type: "number", optional: false },
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

  function postUpdate() {
    models.RukunWarga.create(bodyContent)
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

  models.RukunWarga.findOne({
    where: {
      [Op.and]: [
        { nomorRw: bodyContent.nomorRw },
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
        models.data_penduduk
          .findOne({ where: { id: bodyContent.kepalaRw_id } })
          .then((result) => {
            if (result !== null) {
              models.Dusun.findOne({
                where: { id: bodyContent.dusun_id },
              }).then((result) => {
                if (result !== null) {
                  postUpdate();
                } else {
                  res.status(400).json({
                    message: "Invalid dusun id",
                  });
                }
              });
            } else {
              res.status(400).json({
                message: "Invalid kepalaDusun_id",
              });
            }
          });
      }
    })
    .catch((err) => {});
}

module.exports = {
  save: save,
  show: show,
  shows: shows,
  destroy: destroy,
  update: update,
};
