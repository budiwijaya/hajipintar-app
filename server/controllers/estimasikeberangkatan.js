console.log('Controllers Estimasi Keberangkatan\n');

const axios = require('axios');

class Estimasi {
  constructor() {

  }

  static findEstimasi(req, res) {
      axios.post(`http://118.97.69.173:8095/ws/getestimasihp?no_porsi=${req.body.emb}`)
      .then(function(response){
      console.log(response);
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
      res.send(response.data)
    });
  }

  static getEstimasi(req, res) {
      axios.get(`http://118.97.69.173:8095/ws/getestimasihp?no_porsi=0100006997`)
      .then(function(response){
      console.log(response);
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
      res.send(response.data)
    });
  }

}

module.exports = Estimasi;
