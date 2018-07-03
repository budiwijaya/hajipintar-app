console.log('Controllers Kritik dan Saran\n');

const KritikSaranModel = require('../models/kritiksaran');

class KritikSaran {
  constructor() {

  }

  static findAllKritikSaran(req, res) {
    KritikSaranModel.find({})
    .then(dataKritikSaran => {
      res.send(dataKritikSaran)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createKritikSaran(req, res) {
    KritikSaranModel.create({
      nama: req.body.nama,
      jenisPesan: req.body.jenisPesan,
      jenisPelayanan: req.body.jenisPelayanan,
      isiPesan: req.body.isiPesan
    })
    .then(dataKritikSaran => {
      res.send({
        Message: 'Data Berhasil Di Simpan Di Database!',
        Data: dataKritikSaran
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateKritikSaran(req, res) {
    KritikSaranModel.findOneAndUpdate({ _id : req.params.id }, {
      $set : {
        nama: req.body.nama,
        jenisPesan: req.body.jenisPesan,
        jenisPelayanan: req.body.jenisPelayanan,
        isiPesan: req.body.isiPesan,
        updatedAt: new Date()
      }
    }, { new : true })
    .then(dataKritikSaran => {
      res.send({
        Message: 'Data Berhasil Di Rubah!',
        Data: dataKritikSaran
      })
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteKritikSaran(req, res) {
    KritikSaranModel.findOneAndRemove({ _id : req.params.id })
    .then(dataKritikSaran => {
      res.send(dataKritikSaran)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = KritikSaran;
