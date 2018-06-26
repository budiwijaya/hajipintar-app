console.log('Model Hajipedia\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let hajipediaSchema = new Schema({
  judul: { type: String, required: true },
  deskripsi: { type: String, required: true }
}, { timestamps: true })

let hajipedia = mongoose.model('hajipedia', hajipediaSchema)

module.exports = hajipedia;
