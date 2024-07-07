const express = require('express');
const landasanHukumUploadController = require('../controllers/landasanHukumUpload.controller');
const landasanHukumUploader = require('../helpers/landasanHukum-uploader');

const checkAtuthMiddleware = require("../middleware/check-auth");


const router = express.Router();

router.post('/landasanHukumFiles',landasanHukumUploader.upload.single('file'),landasanHukumUploadController.upload)


module.exports = router;
