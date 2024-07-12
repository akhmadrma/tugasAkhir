const express = require("express");
const checkAtuthMiddleware = require("../middleware/check-auth");
const sumberDayaAlamDesaController = require("../controllers/sumberDayaAlamDesa.controller");

const router = express.Router();

router.get("/", sumberDayaAlamDesaController.shows);
router.get("/:id", sumberDayaAlamDesaController.show);
router.post("/", sumberDayaAlamDesaController.save);
router.delete("/:id", sumberDayaAlamDesaController.destroy);
router.patch("/:id", sumberDayaAlamDesaController.update);

module.exports = router;
