console.log('Controllers Jamaah\n');
//
const JamaahModel = require('../models/jamaah')
const axios = require('axios');

class Jamaah {
  constructor() {

  }

  static jamaahInfo(req, res) {
    JamaahModel.findJamaah(req.body.noporsi)
    .then(dataJamaah => {
      res.send(dataJamaah)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static jamaahInfoPaspor(req, res) {
    JamaahModel.findJamaahPaspor(req.body.nopaspor, req.body.ttl)
    .then(dataJamaah => {
      res.send(dataJamaah)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Jamaah;
