console.log('Routes Jadwal Sholat\n');

const express = require('express');
const router = express.Router();
const JadwalSholatController = require('../controllers/jadwalsholat');

router.get('/jakarta', JadwalSholatController.sholatJakarta);

router.get('/madinah', JadwalSholatController.sholatMadinah);

router.get('/mekkah', JadwalSholatController.sholatMekkah);

module.exports = router;
