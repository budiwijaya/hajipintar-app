console.log('Models Jamaah\n');

const request = require('request');

class Jamaah {
  constructor() {

  }

  static findJamaah(noporsi) {
    let url = `http://118.97.69.173:8095/ws/getjamaahhp?tahun=1438&no_porsi=${noporsi}`
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

module.exports = Jamaah;
