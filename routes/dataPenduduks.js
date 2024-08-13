const express = require("express");
const dataPendudukController = require("../controllers/dataPenduduk.controller");
const checkAtuthMiddleware = require("../middleware/check-auth");
const { sequelize } = require("../models");

const router = express.Router();


router.post("/", checkAtuthMiddleware.checkAuth, dataPendudukController.save);
router.get("/:id", checkAtuthMiddleware.checkAuth, dataPendudukController.show);
router.get("/",checkAtuthMiddleware.checkAuth, dataPendudukController.shows);
router.patch("/:id",checkAtuthMiddleware.checkAuth, dataPendudukController.update)
router.delete("/:id",checkAtuthMiddleware.checkAuth,dataPendudukController.destroy)

module.exports = router;
