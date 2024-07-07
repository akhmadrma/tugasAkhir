const express = require("express");
const checkAtuthMiddleware = require("../middleware/check-auth");
const kewenanganDesaController = require("../controllers/kewenganganDesa.controller");

const router = express.Router();

router.get("/", kewenanganDesaController.shows);
router.get("/:id", kewenanganDesaController.show);
router.post("/", kewenanganDesaController.save);
router.delete("/:id", kewenanganDesaController.destroy);
router.patch("/:id", kewenanganDesaController.update);

module.exports = router;
