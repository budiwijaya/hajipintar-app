console.log('Models Estimasi Keberangkatan\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EstimasiKeberangkatanSchema = new Schema({
  noPorsi: { type: Number, required: true },
  namaJemaah: { type: String, required: true },
  namaOrtu: { type: String, required: true },
  provinsi: { type: String, required: true },
  tahunKeberangkatan: { type: Number, required: true }
}, { timestamps: true })

let estimasiKeberangkatan = mongoose.model('estimasiKeberangkatan', EstimasiKeberangkatanSchema);

module.exports = estimasiKeberangkatan;
