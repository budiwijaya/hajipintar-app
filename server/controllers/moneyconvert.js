console.log('Controllers Money Convert\n');

const MoneyConvertModel = require('../models/moneyconvert');

class MoneyConvert {
  constructor() {

  }

  static dollarToRupiah(req, res) {
    MoneyConvertModel.dollarToRupiah(req.body.amount)
    .then(dataMoney => {
      res.send(dataMoney)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static riyalToRupiah(req, res) {
    MoneyConvertModel.riyalToRupiah(req.body.amount)
    .then(dataMoney => {
      res.send(dataMoney)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static rupiahToRiyal(req, res) {
    MoneyConvertModel.rupiahToRiyal(req.body.amount)
    .then(dataMoney => {
      res.send(dataMoney)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static rupiahToDollar(req, res) {
    MoneyConvertModel.rupiahToDollar(req.body.amount)
    .then(dataMoney => {
      res.send(dataMoney)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = MoneyConvert;
