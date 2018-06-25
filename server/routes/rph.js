console.log('Routes Rencana Perjalanan Haji\n');

const express = require('express');
const router = express.Router();
const RphController = require('../controllers/rph');

router.get('/', RphController.findAllRph);

router.post('/', RphController.createRph);

router.put('/:id', RphController.updateRph);

router.delete('/:id', RphController.deleteRph);

module.exports = router;
