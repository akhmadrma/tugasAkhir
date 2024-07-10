const express = require("express");
const sumberPenghasilanAparaturContoller = require("../controllers/sumberPenghasilanAparatur.controller");
const checkAtuthMiddleware = require("../middleware/check-auth");

const router = express.Router();

router.get("/", sumberPenghasilanAparaturContoller.shows);
router.post("/", sumberPenghasilanAparaturContoller.save);
router.delete("/:id", sumberPenghasilanAparaturContoller.destroy);
router.patch("/:id", sumberPenghasilanAparaturContoller.update);

module.exports = router;
