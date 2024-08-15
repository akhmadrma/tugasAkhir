const express = require("express");
const checkAtuthMiddleware = require("../middleware/check-auth");
const peristiwaKeamananController = require("../controllers/peristiwaKeamanan.controller");

const router = express.Router();

router.get("/", peristiwaKeamananController.shows);
router.get("/:id", peristiwaKeamananController.show);
router.post("/", peristiwaKeamananController.save);
router.delete("/:id", peristiwaKeamananController.destroy);
router.patch("/:id", peristiwaKeamananController.update);


router.get(
  "/v/KategoriPeristiwaKeamanan",
  peristiwaKeamananController.KategoriPeristiwaKeamanan
);
module.exports = router;
