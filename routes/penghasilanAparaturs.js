const express = require("express");
const checkAtuthMiddleware = require("../middleware/check-auth");
const penghasilanAparaturController = require("../controllers/penghasilanAparatur.controller");

const router = express.Router();

router.get("/", penghasilanAparaturController.shows);
router.get("/:id", penghasilanAparaturController.show);
router.post("/", penghasilanAparaturController.save);
router.delete("/:id", penghasilanAparaturController.destroy);
router.patch("/:id", penghasilanAparaturController.update);

router.get(
  "/v/JenisPenghasilanAparatur",
  penghasilanAparaturController.JenisPenghasilanAparatur
);

module.exports = router;
