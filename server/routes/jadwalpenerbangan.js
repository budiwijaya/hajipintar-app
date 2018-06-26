console.log('Routes Jadwal Penerbangan\n');

const express = require('express');
const router = express.Router();
const JadwalPenerbanganController = require('../controllers/jadwalpenerbangan');

router.post('/info', JadwalPenerbanganController.penerbanganInfo);

module.exports = router;
