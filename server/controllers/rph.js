console.log('Controllers Rencana Perjalanan Haji\n');

const RphModel = require('../models/rph');

class Rph {
  constructor() {

  }

  static findAllRph(req, res) {
    RphModel.find({})
    .then(dataRph => {
      res.send(dataRph)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createRph(req, res) {
    RphModel.create({
      tanggalRph: req.body.tanggalRph,
      kegiatan: req.body.kegiatan
    })
    .then(dataRph => {
      res.send(dataRph)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateRph(req, res) {
    RphModel.findOneAndUpdate({ _id : req.params.id }, {
      $set : {
        tanggalRph: req.body.tanggalRph,
        kegiatan: req.body.kegiatan
      }
    }, { new: true })
    .then(dataRph => {
      res.send({
        message: 'Data Berhasil Di Update!',
        data: dataRph
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteRph(req, res) {
    RphModel.findOneAndRemove({ _id : req.params.id})
    .then(dataRph => {
      res.send({
        message: 'Data Berhasil Di Hapus!',
        data: dataRph
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Rph;
