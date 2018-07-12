console.log('Routes Jamaah\n');

const express = require('express');
const router = express.Router();
const JamaahController = require('../controllers/jamaah');

router.post('/info', JamaahController.jamaahInfo);

router.post('/infopaspor', JamaahController.jamaahInfoPaspor);

module.exports = router;
