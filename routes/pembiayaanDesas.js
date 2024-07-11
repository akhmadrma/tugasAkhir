const express = require("express");
const checkAtuthMiddleware = require("../middleware/check-auth");
const pembiayaanDesaController = require("../controllers/pembiayaanDesa.controller");

const router = express.Router();

router.get("/", pembiayaanDesaController.shows);
router.get("/:id", pembiayaanDesaController.show);
router.post("/", pembiayaanDesaController.save);
router.delete("/:id", pembiayaanDesaController.destroy);
router.patch("/:id", pembiayaanDesaController.update);

module.exports = router;
