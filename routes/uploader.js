const express = require("express");
const landasanHukumUploadController = require("../controllers/landasanHukumUpload.controller");
const landasanHukumUploader = require("../helpers/landasanHukum-uploader");

const checkAtuthMiddleware = require("../middleware/check-auth");
const buktiTransaksiUploader = require("../helpers/buktiTransaksi-uploader");
const buktiTransaksiUploadController = require("../controllers/buktiTransaksiUpload.controller");

const router = express.Router();

router.post(
  "/landasanHukumFiles",
  landasanHukumUploader.upload.single("file"),
  landasanHukumUploadController.upload
);
router.post(
  "/buktiTransaksiPendapatan",
  buktiTransaksiUploader.uploadBuktiTransaksiPendapatan.single("image"),
  buktiTransaksiUploadController.uploadBuktiTransaksi
);
router.post(
  "/buktiTransaksiBelanja",
  buktiTransaksiUploader.uploadBuktiTransaksiBelanja.single("image"),
  buktiTransaksiUploadController.uploadBuktiTransaksi
);
router.post(
  "/buktiTransaksiPembiayaan",
  buktiTransaksiUploader.uploadBuktiTransaksiPembiayaan.single("image"),
  buktiTransaksiUploadController.uploadBuktiTransaksi
);
module.exports = router;
