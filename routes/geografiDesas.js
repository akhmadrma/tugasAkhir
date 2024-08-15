const express = require("express");
const checkAtuthMiddleware = require("../middleware/check-auth");
const geografiDesaController = require("../controllers/geografiDesa.controller");

const router = express.Router();

router.get("/", geografiDesaController.shows);
router.get("/:id", geografiDesaController.show);
router.post("/", geografiDesaController.save);
router.delete("/:id", geografiDesaController.destroy);
router.patch("/:id", geografiDesaController.update);
router.get(
  "/v/KategoriGeografiDesa",
  geografiDesaController.KategoriGeografiDesa
);
module.exports = router;
