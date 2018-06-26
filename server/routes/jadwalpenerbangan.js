console.log('Routes Jadwal Penerbangan\n');

const express = require('express');
const router = express.Router();
const JadwalController = require('../controllers/jadwalpenerbangan');

router.get('/', JadwalController.findJadwal);

module.exports = router;
