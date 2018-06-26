console.log('Controllers Jamaah\n');
//
const JamaahModel = require('../models/jamaah')
const axios = require('axios');

class Jamaah {
  constructor() {

  }

  static jamaahInfo(req, res) {
    JamaahModel.findJamaah(req.params.noporsi)
    .then(dataJamaah => {
      res.send(dataJamaah)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static jamaahInto(req, res) {
    JamaahModel.findJamaah(req.body.noporsi)
    .then(dataJamaah => {
      res.send(dataJamaah)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static findJamaah(req, res) {
    // axios.get('http://10.100.100.120:8095/ws/getjadwalhp?tahun=1439&emb=JKS')
      axios.get(`http://118.97.69.173:8095/ws/getjamaahhp?tahun=1438&no_porsi=${req.params.porsi}`)
    .then(function(response){
      console.log(response);
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
    res.send(response.data)
  });
  }

  static getJamaah(req, res) {
    axios.get('http://118.97.69.173:8095/ws/getjamaahhp?tahun=1438&no_porsi=1000528150')
    .then(function(response){
      console.log(response);
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
    res.send(response.data)
  });
  }

}

module.exports = Jamaah;
