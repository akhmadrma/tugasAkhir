const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./filesUpload/landasanHukum");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname +path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Unsuported File"), false);
  }
};

const upload = multer({
  storage: storage,
  //   fileFilter: fileFilter,
});

module.exports = {
  upload: upload,
};
