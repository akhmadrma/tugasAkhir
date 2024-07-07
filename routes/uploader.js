const express = require('express');
const landasanHukumUploadConreoller = require('../controllers/landasanHukumUpload.controller');
const landasanHukumUploader = require('../helpers/landasanHukum-uploader');

const checkAtuthMiddleware = require("../middleware/check-auth");


const router = express.Router();

router.post('/landasanHukumFiles',landasanHukumUploader.upload.single('file'),landasanHukumUploadConreoller.upload)


module.exports = router;
