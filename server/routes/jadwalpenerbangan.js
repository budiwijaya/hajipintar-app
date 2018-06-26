console.log('Routes Jadwal Penerbangan\n');

const express = require('express');
const router = express.Router();
const JadwalController = require('../controllers/jadwalpenerbangan');

router.post('/', JadwalController.findJadwal);

router.get('/', JadwalController.getJadwal);

module.exports = router;
