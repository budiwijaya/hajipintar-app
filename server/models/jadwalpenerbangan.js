console.log('Models Jadwal Penerbangan\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let jadwalPenerbanganSchema = new Schema({
  noKloter: { type: Number, required: true },
  kategoriPenerbangan: { type: String, required: true },
  keteranganPenerbangan: { type: String, required: true },
  tanggalJadwal: { type: Date, required: true, default: Date.now },
  namaBandara: { type: String, required: true },
  noPesawat: { type: String, required: true }
}, { timestamps: true })

let jadwalPenerbangan = mongoose.model('jadwalPenerbangan', jadwalPenerbanganSchema);

module.exports = jadwalPenerbangan;
