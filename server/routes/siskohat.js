console.log('Routes Siskohat\n');

const express = require('express');
const router = express.Router();
const SiskohatController = require('../controllers/siskohat');

router.get('/jadwal/:emb', SiskohatController.getJadwal);

module.exports = router;
