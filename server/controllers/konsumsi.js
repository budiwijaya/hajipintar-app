console.log('Controllers Konsumsi\n');

const KonsumsiModel = require('../models/konsumsi');

class Konsumsi {
  constructor() {

  }

  static findAllKonsumsi(req, res) {
    KonsumsiModel.find({})
    .then(dataKonsumsi => {
      res.send(dataKonsumsi)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createKonsumsi(req, res) {
    KonsumsiModel.create({
      lokasi: req.body.lokasi,
      tanggalKonsumsi: req.body.tanggalKonsumsi,
      hariKonsumsi: req.body.hariKonsumsi,
      waktuKonsumsi: req.body.waktuKonsumsi,
      menuKonsumsi: req.body.menuKonsumsi,
      fotoKonsumsi: req.file.cloudStoragePublicUrl
    })
    .then(dataKonsumsi => {
      res.send({
        Message: 'Data Berhasil Di Simpan Di Database!',
        Data: dataKonsumsi
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateKonsumsi(req, res) {
    KonsumsiModel.findOneAndUpdate({ _id : req.params.id }, {
      $set: {
        lokasi: req.body.lokasi,
        tanggalKonsumsi: req.body.tanggalKonsumsi,
        hariKonsumsi: req.body.hariKonsumsi,
        waktuKonsumsi: req.body.waktuKonsumsi,
        menuKonsumsi: req.body.menuKonsumsi,
        fotoKonsumsi: req.file.cloudStoragePublicUrl,
        updatedAt: new Date()
      }
    }, { new: true })
    .then(dataKonsumsi => {
      res.send({
        Message: 'Data Berhasil Di Rubah!',
        Data: dataKonsumsi
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteKonsumsi(req, res) {
    KonsumsiModel.findOneAndRemove({ _id : req.params.id })
    .then(dataKonsumsi => {
      res.send(dataKonsumsi)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static searchKonsumsi(req, res) {
    KonsumsiModel.find({
     lokasi : req.body.lokasi,
     $or: [
       { tanggalKonsumsi: req.body.tanggalKonsumsi },
       { hariKonsumsi: req.body.hariKonsumsi }
     ],
     waktuKonsumsi: req.body.waktuKonsumsi
    })
    .then(dataKonsumsi => {
      if (dataKonsumsi.length == 0) {
        res.send('Data Tidak Ditemukan Atau Pencarian Salah!!!')
      } else {
        res.send({
          Message: 'Data Berhasil Di Temukan',
             Data: dataKonsumsi
        })
      }
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Konsumsi;
