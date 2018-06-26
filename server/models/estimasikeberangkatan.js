console.log('Models Estimasi Keberangkatan\n');

const request = require('request');

class Estimasi {
  constructor() {

  }

  static findEstimasi(noporsi) {
    let url = `http://118.97.69.173:8095/ws/getestimasihp?no_porsi=${noporsi}`
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

module.exports = Estimasi;
