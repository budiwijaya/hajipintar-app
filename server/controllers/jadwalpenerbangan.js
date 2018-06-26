console.log('Controllers Jadwal Penerbangan\n');
//
const JadwalPenerbanganModel = require('../models/jadwalpenerbangan')
const axios = require('axios');

class JadwalPenerbangan {
  constructor() {

  }

  static penerbanganInfo(req, res) {
    JamaahModel.findJadwalPenerbangan(req.body.noporsi)
    .then(dataPenerbangan => {
      res.send(dataPenerbangan)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = JadwalPenerbangan;
