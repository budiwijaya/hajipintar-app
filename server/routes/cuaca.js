console.log('Routes Cuaca\n');

const express = require('express');
const router = express.Router();
const Cuaca = require('../controllers/cuaca');

router.get('/cuacamadinah', Cuaca.madinahCuaca);

router.get('/cuacamekkah', Cuaca.mekkahCuaca);

router.get('/cuacaarafah', Cuaca.arafahCuaca);

module.exports = router;
