const models = require("../models");
const validator = require("fastest-validator");

function save(req, res) {
  const bodyContent = {
    bidangKewenangan: req.body.bidangKewenangan,
  };
  const schema = {
    bidangKewenangan: { type: "string", optional: false },
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
    models.BidangKewenangan.create(bodyContent)
      .then((result) => {
        res.status(201).json({
          message: "BidangKewenangan created succesfully",
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

  post()
}


function shows(req, res) {
  models.BidangKewenangan.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}
function destroy(req, res) {
  const id = req.params.id;

  models.BidangKewenangan.destroy({ where: { id: id } })
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

function update(req,res){
    const id = req.params.id
    const bodyContent = {
      bidangKewenangan: req.body.bidangKewenangan,
    };
    const schema = {
      bidangKewenangan: { type: "string", optional: false },
    };
    const v = new validator();
    const validateResponse = v.validate(bodyContent, schema);
    if (validateResponse !== true) {
      return res.status(400).json({
        message: "Validate Error",
        error: validateResponse,
      });
    }

    models.BidangKewenangan.update(bodyContent, { where: { id: id } })
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



module.exports = {
  save: save,
  shows: shows,
  update: update,
  destroy: destroy,
};