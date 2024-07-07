const express = require("express");
const checkAtuthMiddleware = require("../middleware/check-auth");
const bidangKewenanganController = require("../controllers/bidangKewenangan.controller");

const router = express.Router();

router.get("/", bidangKewenanganController.shows);
router.post("/", bidangKewenanganController.save);
router.delete("/:id", bidangKewenanganController.destroy);
router.patch("/:id", bidangKewenanganController.update);

module.exports = router;
