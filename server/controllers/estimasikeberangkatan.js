console.log('Controllers Estimasi Keberangkatan\n');

const EstimasiModel = require('../models/estimasikeberangkatan');

class Estimasi {
  constructor() {

  }

  static findAllEstimasi(req, res) {
    EstimasiModel.find({})
    .then(dataEstimasi => {
      res.send(dataEstimasi)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createEstimasi(req, res) {
    EstimasiModel.create({
      noPorsi: req.body.noPorsi,
      namaJemaah: req.body.namaJemaah,
      namaOrtu: req.body.namaOrtu,
      provinsi: req.body.provinsi,
      tahunKeberangkatan: req.body.tahunKeberangkatan
    })
    .then(dataEstimasi => {
      res.send({
        Message: 'Data Anda Berhasil Di Simpan',
        Data: dataEstimasi
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateEstimasi(req, res) {
    EstimasiModel.findOneAndUpdate({ _id : req.params.id }, {
      $set: {
        noPorsi: req.body.noPorsi,
        namaJemaah: req.body.namaJemaah,
        namaOrtu: req.body.namaOrtu,
        provinsi: req.body.provinsi,
        tahunKeberangkatan: req.body.tahunKeberangkatan,
        updatedAt: Date.now()
      }
    }, { new : true })
    .then(dataEstimasi => {
      res.send({
        Message: 'Data Anda Berhasil Di Update!',
        Data: dataEstimasi
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteEstimasi(req, res) {
    EstimasiModel.findOneAndRemove({ _id : req.params.id })
    .then(dataEstimasi => {
      res.send({
        Message: 'Data Anda Berhasil Di Hapus!',
        Data: dataEstimasi
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Estimasi;
