console.log('Routes Konsumsi\n');

const express = require('express');
const router = express.Router();
const KonsumsiController = require('../controllers/konsumsi');
const images = require('../helpers/image');
// const multer = require('multer');
//
// let storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'public/images/konsumsi')
//     },
//     filename: (req, file, cb) => {
//       cb(null, file.originalname + ' - ' + Date.now())
//     }
// });
//
// let upload = multer({
//     storage: storage,
//     limits: { fileSize: 5 * 1024 * 1024 }
// });


router.get('/', KonsumsiController.findAllKonsumsi);

router.post('/', images.multer.single('fotoKonsumsi'), images.sendUploadToGCS, KonsumsiController.createKonsumsi);

router.put('/:id', images.multer.single('fotoKonsumsi'), images.sendUploadToGCS, KonsumsiController.updateKonsumsi);

router.delete('/:id', KonsumsiController.deleteKonsumsi);

router.post('/cari', KonsumsiController.searchKonsumsi);

module.exports = router;
