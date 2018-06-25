console.log('Models Peta Lokasi\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let petaLokasiSchema = new Schema({
  namaPetaLokasi: { type: String, required: true },
  gambarPeta: { type: String, required: true }
}, { timestamps: true })

let petaLokasi = mongoose.model('petaLokasi', petaLokasiSchema);

module.exports = petaLokasi;
