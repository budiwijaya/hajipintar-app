console.log('Routes Peta Lokasi\n');

const express = require('express');
const router = express.Router();
const PetaLokasiController = require('../controllers/petalokasi');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/petalokasi')
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1 * 1024 * 1024 }
});

router.get('/', PetaLokasiController.findAllPeta);

router.post('/', upload.single('gambarPeta'), PetaLokasiController.createPeta);

router.put('/:id', upload.single('gambarPeta'), PetaLokasiController.updatePeta);

router.delete('/:id', PetaLokasiController.deletePeta);

module.exports = router;
