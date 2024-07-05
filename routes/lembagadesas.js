const express = require("express");
const lembagaDesaController = require("../controllers/lembagaDesa.controller");
const checkAtuthMiddleware = require("../middleware/check-auth");

const router = express.Router();

router.get("/", lembagaDesaController.shows);
router.get("/:id", lembagaDesaController.show);
router.post("/", lembagaDesaController.save);
router.delete("/:id", lembagaDesaController.destroy);
router.patch("/:id", lembagaDesaController.update);

module.exports = router;
