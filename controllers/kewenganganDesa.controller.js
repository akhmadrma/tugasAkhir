const models = require("../models");
const validator = require("fastest-validator");

function save(req, res) {
  const bodyContent = {
    namaKewenangan: req.body.namaKewenangan,
    tanggalPenetapan: req.body.tanggalPenetapan,
    kategoriKewenangan_id: req.body.kategoriKewenangan_id,
    bidangKewenangan_id: req.body.bidangKewenangan_id,
    landasanHukum_url: req.body.landasanHukum_url,
  };

  const schema = {
    namaKewenangan: { type: "string", optonal: false },
    tanggalPenetapan: { type: "date", optonal: false, convert: true },
    kategoriKewenangan_id: { type: "number", optonal: false },
    bidangKewenangan_id: { type: "number", optonal: false },
    landasanHukum_url: { type: "string", optonal: false },
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
    models.KewenanganDesa.create(bodyContent)
      .then((result) => {
        res.status(201).json({
          message: "KewenanganDesa created succesfully",
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

  models.KategoriKewenangan.findByPk(bodyContent.kategoriKewenangan_id)
    .then((result) => {
      if (result !== null) {
        models.BidangKewenangan.findByPk(bodyContent.bidangKewenangan_id)
          .then((result) => {
            if (result !== null) {
              post();
            } else {
              res.status(400).json({
                message: "Invalid bidangKewenangan_id",
              });
            }
          })
          .catch((err) => {
            res.status(500).json({
              message: "Something error in BidangKewenangan",
              err: err,
            });
          });
      } else {
        res.status(400).json({
          message: "Invalid kategoriKewenangan_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something error in KategoriKewenangan",
        err: err,
      });
    });
}

function shows(req, res) {
  models.KewenanganDesa.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
function show(req, res) {
  const id = req.params.id;
  models.KewenanganDesa.findByPk(id, {
    include: [
      {
        model: models.KategoriKewenangan,
        as: "KategoriKewenangan",
      },
      {
        model: models.BidangKewenangan,
        as: "BidangKewenangan",
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

  models.KewenanganDesa.destroy({ where: { id: id } })
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

function update(req, res) {
  const id = req.params.id;

  const bodyContent = {
    namaKewenangan: req.body.namaKewenangan,
    tanggalPenetapan: req.body.tanggalPenetapan,
    kategoriKewenangan_id: req.body.kategoriKewenangan_id,
    bidangKewenangan_id: req.body.bidangKewenangan_id,
    landasanHukum_url: req.body.landasanHukum_url,
  };

  const schema = {
    namaKewenangan: { type: "string", optonal: false },
    tanggalPenetapan: { type: "date", optonal: false, convert: true },
    kategoriKewenangan_id: { type: "number", optonal: false },
    bidangKewenangan_id: { type: "number", optonal: false },
    landasanHukum_url: { type: "string", optonal: false },
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
    models.KewenanganDesa.update(bodyContent, { where: { id: id } })
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

  models.KategoriKewenangan.findByPk(bodyContent.kategoriKewenangan_id)
    .then((result) => {
      if (result !== null) {
        models.BidangKewenangan.findByPk(bodyContent.bidangKewenangan_id)
          .then((result) => {
            if (result !== null) {
              postUpdate();
            } else {
              res.status(400).json({
                message: "Invalid bidangKewenangan_id",
              });
            }
          })
          .catch((err) => {
            res.status(500).json({
              message: "Something error in BidangKewenangan",
              err: err,
            });
          });
      } else {
        res.status(400).json({
          message: "Invalid kategoriKewenangan_id",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something error in KategoriKewenangan",
        err: err,
      });
    });
}

function showsKategoriKewenangan(req, res) {
  models.KategoriKewenangan.findAll()
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
  update: update,
  destroy: destroy,
  KategoriKewenangan : showsKategoriKewenangan
};
