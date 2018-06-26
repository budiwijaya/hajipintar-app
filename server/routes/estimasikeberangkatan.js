console.log('Routes Estimasi Keberangkatan\n');

const express = require('express');
const router = express.Router();
const EstimasiController = require('../controllers/estimasikeberangkatan');

router.post('/', EstimasiController.findEstimasi);

router.get('/', EstimasiController.getEstimasi);

module.exports = router;
