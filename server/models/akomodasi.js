console.log('Models Akomodasi\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let akomodasiSchema = new Schema({
  lokasi: { type: String, required: true },
  sektor: { type: Number, required: true },
  nomorHotel: { type: Number, required: true },
  namaHotel: { type: String, required: true },
  kapasitas: { type: Number, required: true },
  // fasilitas: [{
  //   type: String,
  //   required: true
  // }],
  alamat: { type: String, required: true },
  fotoHotel: [{
    type: String
  }],
  kloter: [{
    type: String,
    required: true
  }]
}, { timestamps: true })

let akomodasi = mongoose.model('akomodasi', akomodasiSchema);

module.exports = akomodasi;
