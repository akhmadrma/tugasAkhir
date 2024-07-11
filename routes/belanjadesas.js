const express = require("express");
const checkAtuthMiddleware = require("../middleware/check-auth");
const belanjaDesaController = require("../controllers/belanjaDesa.controller");

const router = express.Router();

router.get("/", belanjaDesaController.shows);
router.get("/:id", belanjaDesaController.show);
router.post("/", belanjaDesaController.save);
router.delete("/:id", belanjaDesaController.destroy);
router.patch("/:id", belanjaDesaController.update);

module.exports = router;
