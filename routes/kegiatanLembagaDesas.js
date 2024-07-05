const express = require("express");
const kegiatanLembagaDesaController = require("../controllers/kegiatanLembagaDesa.controller");
const checkAtuthMiddleware = require("../middleware/check-auth");

const router = express.Router();

router.get("/", kegiatanLembagaDesaController.shows);
router.get("/:id", kegiatanLembagaDesaController.show);
router.post("/", kegiatanLembagaDesaController.save);
router.delete("/:id", kegiatanLembagaDesaController.destroy);
router.patch("/:id", kegiatanLembagaDesaController.update);

module.exports = router;
