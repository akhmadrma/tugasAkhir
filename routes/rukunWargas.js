const express = require("express");
const rukunWargaController = require("../controllers/rukunWarga.controller");
const checkAtuthMiddleware = require("../middleware/check-auth");

const router = express.Router();

router.get("/", rukunWargaController.shows);
router.get("/:id", rukunWargaController.show);
router.post("/", rukunWargaController.save);
router.delete("/:id", rukunWargaController.destroy);
router.patch("/:id", rukunWargaController.update);

module.exports = router;
