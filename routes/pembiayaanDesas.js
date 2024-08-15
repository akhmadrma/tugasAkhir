const express = require("express");
const checkAtuthMiddleware = require("../middleware/check-auth");
const pembiayaanDesaController = require("../controllers/pembiayaanDesa.controller");

const router = express.Router();

router.get("/", pembiayaanDesaController.shows);
router.get("/:id", pembiayaanDesaController.show);
router.post("/", pembiayaanDesaController.save);
router.delete("/:id", pembiayaanDesaController.destroy);
router.patch("/:id", pembiayaanDesaController.update);

router.get(
  "/v/KategoriPembiayaanDesa",
  pembiayaanDesaController.KategoriPembiayaanDesa
);
router.get(
  "/v/JenisPembiayaanDesa",
  pembiayaanDesaController.JenisPembiayaanDesa
);

module.exports = router;
