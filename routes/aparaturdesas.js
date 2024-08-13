const express = require("express");
const checkAtuthMiddleware = require("../middleware/check-auth");
const aparaturDesaController = require("../controllers/aparaturDesa.controller");

const router = express.Router();

router.get("/",checkAtuthMiddleware.checkAuth, aparaturDesaController.shows);
router.get("/:id", checkAtuthMiddleware.checkAuth, aparaturDesaController.show);
router.post("/",checkAtuthMiddleware.checkAuth, aparaturDesaController.save);
router.delete("/:id",checkAtuthMiddleware.checkAuth, aparaturDesaController.destroy);
router.patch(
  "/:id",
  checkAtuthMiddleware.checkAuth,
  aparaturDesaController.update
);

module.exports = router;
