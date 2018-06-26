console.log('Routes Akomodasi\n');

const express = require('express');
const router = express.Router();
const AkomodasiController = require('../controllers/akomodasi');
const images = require('../helpers/image');
// const multer = require('multer');
//
// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'public/images/akomodasi')
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.originalname)
//     }
// });
//
// let upload = multer({
//     storage: storage,
//     limits: { fileSize: 5 * 1024 * 1024 }
// });


router.get('/', AkomodasiController.findAllAkomodasi);

router.post('/', images.multer.array('fotoHotel', 6), images.sendUploadToGCS, AkomodasiController.createAkomodasi);

router.put('/:id', images.multer.array('fotoHotel', 6), images.sendUploadToGCS, AkomodasiController.updateAkomodasi);

router.delete('/:id', AkomodasiController.deleteAkomodasi);

router.post('/cari', AkomodasiController.searchAkomodasi);

module.exports = router;
