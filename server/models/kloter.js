console.log('Models Kloter\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let kloterSchema = new Schema({
  kodeKloter: { type: String, required: true },
  namaKloter: { type: String, required: true }
}, { timestamps: true })

let kloter = mongoose.model('kloter', kloterSchema);

module.exports = kloter;
