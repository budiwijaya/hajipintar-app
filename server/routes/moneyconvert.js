console.log('Routes Money Convert\n');

const express = require('express');
const router = express.Router();
const MoneyConvertController = require('../controllers/moneyconvert');

router.post('/dollartorupiah', MoneyConvertController.dollarToRupiah);

router.post('/riyaltorupiah', MoneyConvertController.riyalToRupiah);

router.post('/rupiahtoriyal', MoneyConvertController.rupiahToRiyal);

router.post('/rupiahtodollar', MoneyConvertController.rupiahToDollar);

module.exports = router;
