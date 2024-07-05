const express = require("express");
const dataPendudukController = require("../controllers/dataPenduduk.controller");
const checkAtuthMiddleware = require("../middleware/check-auth");

const router = express.Router();


router.post("/", dataPendudukController.save);
router.get("/:id", dataPendudukController.show);
router.get("/", dataPendudukController.shows);
router.patch("/:id",dataPendudukController.update)
router.delete("/:id",dataPendudukController.destroy)

module.exports = router;
