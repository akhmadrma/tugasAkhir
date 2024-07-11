const multer = require("multer");
const path = require("path");

const buktiTransaksiPendapatanStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./filesUpload/buktiTransaksi");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      "TransaksiPendapatan-" +
        new Date().getTime() +
        path.extname(file.originalname)
    );
  },
});

const buktiTransaksiBelanjaStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./filesUpload/buktiTransaksi");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      "TransaksiBelanja-" +
        new Date().getTime() +
        path.extname(file.originalname)
    );
  },
});

const buktiTransaksiPembiayaanStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./filesUpload/buktiTransaksi");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      "TransaksiPembiayaan-" +
        new Date().getTime() +
        path.extname(file.originalname)
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Unsuported File"), false);
  }
};

const uploadBuktiTransaksiPendapatan = multer({
  storage: buktiTransaksiPendapatanStorage,
  fileFilter: fileFilter,
});
const uploadBuktiTransaksiBelanja = multer({
  storage: buktiTransaksiBelanjaStorage,
  fileFilter: fileFilter,
});
const uploadBuktiTransaksiPembiayaan = multer({
  storage: buktiTransaksiPembiayaanStorage,
  fileFilter: fileFilter,
});

module.exports = {
  uploadBuktiTransaksiPendapatan: uploadBuktiTransaksiPendapatan,
  uploadBuktiTransaksiPembiayaan: uploadBuktiTransaksiPembiayaan,
  uploadBuktiTransaksiBelanja: uploadBuktiTransaksiBelanja,
};
