const express = require("express");
const dataPendudukController = require("../controllers/dataPenduduk.controller");
const checkAtuthMiddleware = require("../middleware/check-auth");
const { sequelize } = require("../models");

const router = express.Router();


router.post("/", checkAtuthMiddleware.checkAuth, dataPendudukController.save);
router.get("/:id", checkAtuthMiddleware.checkAuth, dataPendudukController.show);
router.get("/",checkAtuthMiddleware.checkAuth, dataPendudukController.shows);
router.patch("/:id",checkAtuthMiddleware.checkAuth, dataPendudukController.update)
router.delete("/:id",checkAtuthMiddleware.checkAuth,dataPendudukController.destroy)


router.get("/v/JenisKelamin", checkAtuthMiddleware.checkAuth, dataPendudukController.showsJenisKelamin);
router.get(
  "/v/Agama",
  checkAtuthMiddleware.checkAuth,
  dataPendudukController.showsAgama
);
router.get(
  "/v/PendidikanTerakhir",
  checkAtuthMiddleware.checkAuth,
  dataPendudukController.showsPendidikanTerakhir
);
router.get(
  "/v/Shdk",
  checkAtuthMiddleware.checkAuth,
  dataPendudukController.showsShdk
);
router.get(
  "/v/Status",
  checkAtuthMiddleware.checkAuth,
  dataPendudukController.showsStatus
);
module.exports = router;
