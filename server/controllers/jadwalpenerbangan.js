console.log('Controllers Jadwal Penerbangan\n');

const JadwalModel = require('../models/jadwalpenerbangan');

class Jadwal {
  constructor() {

  }

  static findAllJadwal(req, res) {
    JadwalModel.find({})
    .then(dataJadwal => {
      res.send(dataJadwal)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createJadwal(req, res) {
    JadwalModel.create({
      noKloter: req.body.noKloter,
      kategoriPenerbangan: req.body.kategoriPenerbangan,
      keteranganPenerbangan: req.body.keteranganPenerbangan,
      tanggalJadwal: req.body.tanggal,
      namaBandara: req.body.namaBandara,
      noPesawat: req.body.noPesawat
    })
    .then(dataJadwal => {
      res.send(dataJadwal)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateJadwal(req, res) {
    JadwalModel.findOneAndUpdate({ _id : req.params.id }, {
      $set : {
        noKloter: req.body.noKloter,
        kategoriPenerbangan: req.body.kategoriPenerbangan,
        keteranganPenerbangan: req.body.keteranganPenerbangan,
        tanggalJadwal: req.body.tanggal,
        namaBandara: req.body.namaBandara,
        noPesawat: req.body.noPesawat,
        updatedAt: new Date()
      }
    }, { new: true })
    .then(dataJadwal => {
      res.send({
        message: 'Data Berhasil Di Update',
        data: dataJadwal
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteJadwal(req, res) {
    JadwalModel.findOneAndRemove({ _id : req.params.id })
    .then(dataJadwal => {
      res.send({
        message: 'Data Berhasil Di Hapus',
        data: dataJadwal
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Jadwal;
