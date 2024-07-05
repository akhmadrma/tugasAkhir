const express = require("express");
const dusunController = require("../controllers/dusun.controller");
const checkAtuthMiddleware = require("../middleware/check-auth");

const router = express.Router();

router.get("/", dusunController.shows);
router.get("/:id", dusunController.show);
router.post("/", dusunController.save);
router.delete('/:id',dusunController.destroy)
router.patch("/:id",dusunController.update)

module.exports = router;
