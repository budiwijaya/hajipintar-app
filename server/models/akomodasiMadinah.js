console.log('Models Akomodasi Madinah\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let akomodasiMadinahSchema = new Schema({
  kloter: { type: String, required: true },
  namaHotel: { type: String, required: true },
  kapasitas: { type: Number, required: true },
  wilayah: { type: String, required: true },
  checkIn: { type: Date, required: true, default: Date.now() },
  checkOut: { type: Date, required: true, default: Date.now() },
  fotoHotel: { type: String }
}, { timestamps: true })

let akomodasiMadinah = mongoose.model('akomodasiMadinah', akomodasiMadinahSchema);

module.exports = akomodasiMadinah;
