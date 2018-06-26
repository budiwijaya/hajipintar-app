console.log('Controllers Siskohat\n');

const SiskohatModel = require('../models/siskohat');

class Siskohat {
  constructor() {

  }

  static getJadwal(req, res) {
    SiskohatModel.getJadwal(req.body.emb)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Siskohat;
