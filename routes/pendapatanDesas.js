const express = require("express");
const checkAtuthMiddleware = require("../middleware/check-auth");

const pendapatanDesaController = require("../controllers/pendapatanDesa.controller");

const router = express.Router();

router.get("/", pendapatanDesaController.shows);
router.get("/:id", pendapatanDesaController.show);
router.post("/", pendapatanDesaController.save);
router.delete("/:id", pendapatanDesaController.destroy);
router.patch("/:id", pendapatanDesaController.update);

module.exports = router;
