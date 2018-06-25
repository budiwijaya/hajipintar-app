console.log('Models Konsumsi\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let konsumsiSchema = new Schema({
  lokasi: { type: String, required: true },
  tanggalKonsumsi: { type: Date },
  hariKonsumsi: { type: String },
  waktuKonsumsi: { type: String, required: true },
  fotoKonsumsi: { type: String },
  menuKonsumsi: [{
    type: String,
    required: true
  }],
}, { timestamps: true })

let konsumsi = mongoose.model('konsumsi', konsumsiSchema);

module.exports = konsumsi;
