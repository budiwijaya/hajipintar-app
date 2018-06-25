console.log('Routes Jadwal Penerbangan\n');

const express = require('express');
const router = express.Router();
const JadwalController = require('../controllers/jadwalpenerbangan');

router.get('/', JadwalController.findAllJadwal);

router.post('/', JadwalController.createJadwal);

router.put('/:id', JadwalController.updateJadwal);

router.delete('/:id', JadwalController.deleteJadwal);

module.exports = router;
