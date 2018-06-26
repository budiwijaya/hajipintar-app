console.log('Routes Siskohat\n');

const express = require('express');
const router = express.Router();
const SiskohatController = require('../controllers/siskohat');

router.post('/jadwal', SiskohatController.getJadwal);

module.exports = router;
