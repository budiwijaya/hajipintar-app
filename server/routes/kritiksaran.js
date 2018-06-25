console.log('Routes Kritik dan Saran\n');

const express = require('express');
const router = express.Router();
const KritikSaranController = require('../controllers/kritiksaran');

router.get('/', KritikSaranController.findAllKritikSaran);

router.post('/', KritikSaranController.createKritikSaran);

router.put('/:id', KritikSaranController.updateKritikSaran);

router.delete('/:id', KritikSaranController.deleteKritikSaran);

module.exports = router;
