console.log('Controllers Akomodasi Madinah\n');

const AkomodasiMadinahModel = require('../models/akomodasiMadinah');

class AkomodasiMadinah {
  constructor() {

  }

  static findAllAkomodasi(req, res) {
    AkomodasiMadinahModel.find({})
    .then(dataAkomodasi => {
      res.send(dataAkomodasi)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createAkomodasi(req, res) {
    AkomodasiMadinahModel.create({
      kloter: req.body.kloter,
      jumlah: req.body.jumlah,
      namaHotel: req.body.namaHotel,
      kapasitas: req.body.kapasitas,
      wilayah: req.body.wilayah,
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      fotoHotel: req.file.cloudStoragePublicUrl
    })
    .then(dataAkomodasi => {
      res.send({
        Message: 'Data Berhasil Di Simpan!',
        Data: dataAkomodasi
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateAkomodasi(req, res) {
    AkomodasiMadinahModel.findOneAndUpdate({ _id : req.params.id }, {
      $set: {
        kloter: req.body.kloter,
        jumlah: req.body.jumlah,
        namaHotel: req.body.namaHotel,
        kapasitas: req.body.kapasitas,
        wilayah: req.body.wilayah,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        fotoHotel: req.file.cloudStoragePublicUrl,
        updatedAt: new Date()
      }
    }, { new : true })
    .then(dataAkomodasi => {
      res.send({
        Message: 'Data Anda Berhasil Di Update!',
        Data: dataAkomodasi
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteAkomodasi(req, res) {
    AkomodasiMadinahModel.findOneAndRemove({ _id : req.params.id })
    .then(dataAkomodasi => {
      res.send({
        Message: 'Data Anda Berhasil Di Hapus!',
        Data: dataAkomodasi
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static searchAkomodasi(req, res) {
    AkomodasiMadinahModel.find().where('kloter').equals(req.body.kloter)
    .then(dataAkomodasi => {
      if (dataAkomodasi.length == 0) {
        res.send('Data Tidak Di Temukan atau Data Yang Anda Masukan Salah!!')
      } else {
        res.send({
          Message: 'Data Berhasil Di Temukan',
          Data: dataAkomodasi
        })
      }
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = AkomodasiMadinah;
