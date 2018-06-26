console.log('Controllers Jadwal Penerbangan\n');
//
const axios = require('axios');

class Jadwal {
  constructor() {

  }

  static findJadwal(req, res) {
    // axios.get('http://10.100.100.120:8095/ws/getjadwalhp?tahun=1439&emb=JKS')
      axios.post(`http://118.97.69.173:8095/ws/getjadwalhp?tahun=1439&emb=${req.body.emb}`)
    .then(function(response){
      console.log(response);
    console.log(response.data); // ex.: { user: 'Your User'}
    console.log(response.status); // ex.: 200
    res.send(response.data)
  });
  }

}

module.exports = Jadwal;
