const express = require("express");
const checkAtuthMiddleware = require("../middleware/check-auth");
const aparaturDesaController = require("../controllers/aparaturDesa.controller");

const router = express.Router();

router.get("/", aparaturDesaController.shows);
router.get("/:id", aparaturDesaController.show);
router.post("/", aparaturDesaController.save);
router.delete("/:id", aparaturDesaController.destroy);
router.patch("/:id", aparaturDesaController.update);

module.exports = router;
