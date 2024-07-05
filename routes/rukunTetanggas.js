const express = require("express");
const rukunTetanggaController = require("../controllers/rukunTetangga.controller");
const checkAtuthMiddleware = require("../middleware/check-auth");

const router = express.Router();

router.post ("/",rukunTetanggaController.save)
router.get("/",rukunTetanggaController.shows)
router.get("/:id",rukunTetanggaController.show)
router.delete("/:id",rukunTetanggaController.destroy)
router.patch("/:id",rukunTetanggaController.update)

module.exports = router;
