console.log('Models Jadwal Penerbangan\n');

const request = require('request');

class JadwalPenerbangan {
  constructor() {

  }

  static findJadwalPenerbangan(emb) {
    let url = `http://118.97.69.173:8095/ws/getjadwalhp?tahun=1439&emb=${emb}`
    let promise = new Promise(function(resolve, reject) {
      request({
        url: url,
        json: true
      }, function(error, data) {
        if(!error) {
          resolve(data)
        } else {
          reject(error)
        }
      })
    })
    return promise;
  }

}

module.exports = JadwalPenerbangan;
