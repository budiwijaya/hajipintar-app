console.log('Routes Akomodasi\n');

const express = require('express');
const router = express.Router();
const AkomodasiController = require('../controllers/akomodasi');
const images = require('../helpers/image');

router.get('/', AkomodasiController.findAllAkomodasi);

router.post('/', images.multer.single('fotoHotel'), images.sendUploadToGCS, AkomodasiController.createAkomodasi);

router.put('/:id', images.multer.single('fotoHotel'), images.sendUploadToGCS, AkomodasiController.updateAkomodasi);

router.patch('/:id', AkomodasiController.updateLonglat);

router.delete('/:id', AkomodasiController.deleteAkomodasi);

router.post('/cari', AkomodasiController.searchAkomodasi);

module.exports = router;
