console.log('Controllers Estimasi Keberangkatan\n');
//
const EstimasiModel = require('../models/estimasikeberangkatan');
const axios = require('axios');

class Estimasi {
  constructor() {

  }

  static estimasiInfo(req, res) {
    EstimasiModel.findEstimasi(req.body.noporsi)
    .then(dataEstimasi => {
      res.send(dataEstimasi)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Estimasi;
