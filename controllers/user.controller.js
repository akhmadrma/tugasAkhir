const models = require("../models");
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const validator = require("fastest-validator");
const { where } = require("sequelize");
const { json } = require("body-parser");

//fungsi sign-up
function signUp(req, res) {
  //define userbody
  const userBody = {
    userName: req.body.userName,
    password: req.body.password,
  };

  //define userBody schema
  const userSchema = {
    userName: { type: "string", optional: false },
    password: { type: "string", optional: false, min: "6" },
  };

  //difine validator untuk schema terhadap userbody
  const v = new validator();
  const validateRespons = v.validate(userBody, userSchema);

  //respon terhadap validasi schema userbody
  if (validateRespons !== true) {
    return res.status(400).json({
      validateRespons,
    });
  }

  //verifikasi available username
  models.User.findOne({ where: { userName: userBody.userName } })
    .then((result) => {
      //if username already exist
      if (result) {
        res.status(409).json({
          message: "Username already exist",
        });
      } else {
        // if username is available

        //hashing password
        bcryptjs.genSalt(10, function (err, salt) {
          bcryptjs.hash(userBody.password, salt, function (err, hash) {
            const user = {
              userName: userBody.userName,
              password: hash,
            };

            //create user
            models.User.create(user)
              .then((result) => {
                res.status(201).json({
                  message: "User created",
                  data: result,
                });
              })
              .catch((err) => {
                res.status(201).json({
                  message: "Something Error",
                  data: err,
                });
              });
          });
        });
      }
    })
    .catch((err) => {
      err;
    });
}

// fungsi login
function login(req, res) {
  //define userbody
  const userBody = {
    userName: req.body.userName,
    password: req.body.password,
  };

  //mencari username
  models.User.findOne({ where: {userName:userBody.userName} })
    .then((user) => {
      if (user === null) { //jika username tidak ditemukan
        res.status(401).json({
          message: "userName or password incorrect", 
        });
      } else {
        bcryptjs.compare(
          userBody.password,
          user.password,
          function (err, result) {
            if (result) {
                //generate jwt
              jsonwebtoken.sign(
                {
                  userName: user.userName,
                  userId: user.userId,
                },
                "secret code",
                function (err, token) {
                  res.status(200).json({
                    message: "autentication succes",
                    token: token,
                  });
                }
              );
            } else {
                //if password !== password
              res.status(401).json({
                message: "Incorect password",
              });
            }
          }
        );
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "Somethngs was wrong",
        err: err,
      });
    });
}


module.exports = {
  signUp: signUp,
  login: login,
};
