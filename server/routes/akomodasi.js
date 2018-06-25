console.log('Routes Akomodasi\n');

const express = require('express');
const router = express.Router();
const AkomodasiController = require('../controllers/akomodasi');
const multer = require('multer');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/akomodasi')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
});

let upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }
});


router.get('/', AkomodasiController.findAllAkomodasi);

router.post('/', upload.array('fotoHotel', 5), AkomodasiController.createAkomodasi);

router.put('/:id', upload.array('fotoHotel', 5), AkomodasiController.updateAkomodasi);

router.delete('/:id', AkomodasiController.deleteAkomodasi);

router.post('/cari', AkomodasiController.searchAkomodasi);

module.exports = router;
