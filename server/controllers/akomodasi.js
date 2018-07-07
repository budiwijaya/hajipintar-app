console.log('Controllers Akomodasi\n');

const AkomodasiModel = require('../models/akomodasi');

class Akomodasi {
  constructor() {

  }

  static findAllAkomodasi(req, res) {
    AkomodasiModel.find({})
    .then(dataAkomodasi => {
      res.send(dataAkomodasi)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createAkomodasi(req, res) {
    AkomodasiModel.create({
      lokasi: req.body.lokasi,
      sektor: req.body.sektor,
      nomorHotel: req.body.nomorHotel,
      namaHotel: req.body.namaHotel,
      kapasitas: req.body.kapasitas,
      longLat: req.body.longlat,
      // fasilitas: req.body.fasilitas,
      alamat: req.body.alamat,
      fotoHotel:  req.file.cloudStoragePublicUrl,
      kloter: req.body.kloter
    })
    .then(dataAkomodasi => {
      console.log(req.files);
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
    AkomodasiModel.findOneAndUpdate({ _id : req.params.id }, {
      $set: {
        lokasi: req.body.lokasi,
        sektor: req.body.sektor,
        nomorHotel: req.body.nomorHotel,
        namaHotel: req.body.namaHotel,
        kapasitas: req.body.kapasitas,
        longLat: req.body.longlat,
        // fasilitas: req.body.fasilitas,
        alamat: req.body.alamat,
        fotoHotel:  req.file.cloudStoragePublicUrl,
        kloter: req.body.kloter,
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

  static updateLonglat(req, res) {
    AkomodasiModel.findOneAndUpdate({ _id : req.params.id }, {
      $set: {
        longLat: req.body.longlat
      }
    }, { new: true })
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
    AkomodasiModel.findOneAndRemove({ _id : req.params.id })
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
    AkomodasiModel.find().where('lokasi').equals(req.body.lokasi).
    where('sektor').equals(req.body.sektor).
    where('nomorHotel').equals(req.body.nomorHotel)
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

  static searchSektor(req, res) {
    AkomodasiModel.find().where('lokasi').equals(req.body.lokasi).
    where('sektor').equals(req.body.sektor)
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

  static searchKloter(req, res) {
    AkomodasiModel.find().where('lokasi').equals(req.body.lokasi).
    where('kloter').equals(req.body.kloter)
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

module.exports = Akomodasi;
