console.log('Controllers Hajipedia\n');

const HajipediaModel = require('../models/hajipedia');

class Hajipedia {
  constructor() {

  }

  static findAllHajipedia(req, res) {
    HajipediaModel.find({})
    .then(dataHajipedia => {
      res.send(dataHajipedia)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createHajipedia(req, res) {
    HajipediaModel.create({
      judul: req.body.judul,
      deskripsi: req.body.deskripsi
    })
    .then(dataHajipedia => {
      res.send({
        Message: 'Data Berhasil Di Simpan!',
        Data: dataHajipedia
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateHajipedia(req, res) {
    HajipediaModel.findOneAndUpdate({ _id : req.params.id }, {
      $set: {
        judul: req.body.judul,
        deskripsi: req.body.deskripsi,
        updatedAt: new Date()
      }
    }, { new : true })
    .then(dataHajipedia => {
      res.send({
        Message: 'Data Anda Berhasil Di Update!',
        Data: dataHajipedia
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteHajipedia(req, res) {
    HajipediaModel.findOneAndRemove({ _id : req.params.id })
    .then(dataHajipedia => {
      res.send({
        Message: 'Data Anda Berhasil Di Hapus!',
        Data: dataHajipedia
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Hajipedia;
