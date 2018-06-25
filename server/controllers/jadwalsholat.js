console.log('Controllers Jadwal Sholat\n');

const JadwalSholatModel = require('../models/jadwalsholat');

class JadwalSholat {
  constructor() {

  }

  static sholatJakarta(req, res) {
    JadwalSholatModel.sholatJakarta()
    .then(dataSholat => {
      res.send(dataSholat)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static sholatMadinah(req, res) {
    JadwalSholatModel.sholatMadinah()
    .then(dataSholat => {
      res.send(dataSholat)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static sholatMekkah(req, res) {
    JadwalSholatModel.sholatMekkah()
    .then(dataSholat => {
      res.send(dataSholat)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = JadwalSholat;
