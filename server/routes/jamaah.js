console.log('Routes Jamaah\n');

const express = require('express');
const router = express.Router();
const JamaahController = require('../controllers/jamaah');

router.post('/', JamaahController.findJamaah);

router.get('/', JamaahController.getJamaah);

router.get('/:noporsi', JamaahController.jamaahInfo);

router.post('/info', JamaahController.jamaahInto);

module.exports = router;
