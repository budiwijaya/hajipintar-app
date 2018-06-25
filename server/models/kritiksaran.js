console.log('Models Kritik dan Saran\n');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let kritiksaranSchema = new Schema({
  jenisPesan: { type: String, required: true },
  jenisPelayanan: { type: String, required: true },
  isiPesan: { type: String, required: true }
}, { timestamps: true })

let kritiksaran = mongoose.model('kritiksaran', kritiksaranSchema);

module.exports = kritiksaran;
