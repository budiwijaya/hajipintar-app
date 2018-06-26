console.log('Routes Jamaah\n');

const express = require('express');
const router = express.Router();
const JamaahController = require('../controllers/jamaah');

router.post('/info', JamaahController.jamaahInfo);

module.exports = router;
