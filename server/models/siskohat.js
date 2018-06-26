console.log('Models Siskohat\n');

const request = require('request');

class Siskohat {
  constructor() {

  }

  static getJadwal(emb) {
    let url = `http://10.100.100.120:8095/ws/getjadwalhp?tahun=1439&emb=${emb}`
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

module.exports = Siskohat;
