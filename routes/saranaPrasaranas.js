const express = require("express");
const saranaPrasaranaController = require("../controllers/saranaPrasarana.controller");
const checkAtuthMiddleware = require("../middleware/check-auth");

const router = express.Router();

router.get("/",saranaPrasaranaController.shows)
router.get("/:id",saranaPrasaranaController.show)
router.post("/",saranaPrasaranaController.save)
router.delete("/:id",saranaPrasaranaController.destroy)
router.patch("/:id",saranaPrasaranaController.update)



module.exports = router;