console.log('Routes Estimasi Keberangkatan\n');

const express = require('express');
const router = express.Router();
const EstimasiController = require('../controllers/estimasikeberangkatan');

router.get('/', EstimasiController.findAllEstimasi);

router.post('/', EstimasiController.createEstimasi);

router.put('/:id', EstimasiController.updateEstimasi);

router.delete('/:id', EstimasiController.deleteEstimasi);

module.exports = router;
