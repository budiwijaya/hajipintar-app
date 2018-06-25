console.log('Models Rencana Perjalanan Haji\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let rphSchema = new Schema({
  tanggalRph: { type: Date, required: true, default: Date.now },
  kegiatan: { type: String, required: true }
}, { timestamps: true })

let rph = mongoose.model('rph', rphSchema);

module.exports = rph;
