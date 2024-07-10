const express = require("express");
const checkAtuthMiddleware = require("../middleware/check-auth");
const peristiwaBencanaController = require("../controllers/peristiwaBencana..controller");

const router = express.Router();

router.get("/", peristiwaBencanaController.shows);
router.get("/:id", peristiwaBencanaController.show);
router.post("/", peristiwaBencanaController.save);
router.delete("/:id", peristiwaBencanaController.destroy);
router.patch("/:id", peristiwaBencanaController.update);

module.exports = router;
