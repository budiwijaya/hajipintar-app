console.log('Routes Akomodasi Madinah\n');

const express = require('express');
const router = express.Router();
const AkomodasiMadinahController = require('../controllers/akomodasiMadinah');
const images = require('../helpers/image');

router.get('/', AkomodasiMadinahController.findAllAkomodasi);

router.post('/', images.multer.single('fotoHotel'), images.sendUploadToGCS, AkomodasiMadinahController.createAkomodasi);

router.put('/:id', images.multer.single('fotoHotel'), images.sendUploadToGCS, AkomodasiMadinahController.updateAkomodasi);

router.delete('/:id', AkomodasiMadinahController.deleteAkomodasi);

router.post('/cari', AkomodasiMadinahController.searchAkomodasi);

module.exports = router;
