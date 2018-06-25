console.log('Controllers Peta Lokasi\n');

const PetaLokasiModel = require('../models/petalokasi');

class PetaLokasi {
  constructor() {

  }

  static findAllPeta(req, res) {
    PetaLokasiModel.find({})
    .then(dataPeta => {
      res.send(dataPeta)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createPeta(req, res) {
    PetaLokasiModel.create({
      namaPetaLokasi: req.body.namaPetaLokasi,
      gambarPeta: req.file.originalname
    })
    .then(dataPeta => {
      res.send(dataPeta)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updatePeta(req, res) {
    PetaLokasiModel.findOneAndUpdate({ _id : req.params.id }, {
      $set : {
        namaPetaLokasi: req.body.namaPetaLokasi,
        gambarPeta: req.file.originalname,
        updatedAt: new Date()
      }
    }, { new: true })
    .then(dataPeta => {
      res.send({
        message: 'Data Berhasil Di Update',
        data: dataPeta
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deletePeta(req, res) {
    PetaLokasiModel.findOneAndRemove({ _id : req.params.id })
    .then(dataPeta => {
      res.send({
        message: 'Data Berhasil Di Hapus',
        data: dataPeta
      })
    })
  }

}

module.exports = PetaLokasi;
