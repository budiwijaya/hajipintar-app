console.log('Routes Hajipedia\n');

const express = require('express');
const router = express.Router();
const HajipediaController = require('../controllers/hajipedia');

router.get('/', HajipediaController.findAllHajipedia);

router.post('/', HajipediaController.createHajipedia);

router.delete('/:id', HajipediaController.deleteHajipedia);

router.put('/:id', HajipediaController.updateHajipedia);

module.exports = router;
