const express = require("express");
const checkAtuthMiddleware = require("../middleware/check-auth");
const kategoriJabatanAparaturDesaController = require("../controllers/kategoriJabatanAparaturDesa.controller");

const router = express.Router();

router.get("/", kategoriJabatanAparaturDesaController.shows);
router.post("/", kategoriJabatanAparaturDesaController.save);
router.delete("/:id", kategoriJabatanAparaturDesaController.destroy);
router.patch("/:id", kategoriJabatanAparaturDesaController.update);

module.exports = router;
