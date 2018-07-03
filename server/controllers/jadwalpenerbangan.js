console.log('Controllers Jadwal Penerbangan\n');
//
const JadwalPenerbanganModel = require('../models/jadwalpenerbangan')
const axios = require('axios');

class JadwalPenerbangan {
  constructor() {

  }

  static penerbanganInfo(req, res) {
    JadwalPenerbanganModel.findJadwalPenerbangan(req.body.emb,req.body.kloter)
    .then(dataPenerbangan => {
      res.send(dataPenerbangan)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = JadwalPenerbangan;
