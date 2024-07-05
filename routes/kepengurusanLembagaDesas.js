const express = require("express");
const kepengurusanLembagaDesaController = require("../controllers/kepengurusanLembagaDesa.controller");
const checkAtuthMiddleware = require("../middleware/check-auth");

const router = express.Router();

router.get("/", kepengurusanLembagaDesaController.shows);
router.get("/:id", kepengurusanLembagaDesaController.show);
router.post("/", kepengurusanLembagaDesaController.save);
router.delete("/:id", kepengurusanLembagaDesaController.destroy);
router.patch("/:id", kepengurusanLembagaDesaController.update);

module.exports = router;