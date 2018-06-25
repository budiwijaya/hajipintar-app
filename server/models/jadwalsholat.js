console.log('Models Jadwal Sholat\n');

const request = require('request');
const API_KEY = process.env.SHOLAT_KEY;

class JadwalSholat {
  constructor() {

  }

  static sholatJakarta() {
    let url = 'http://muslimsalat.com/jakarta.json?key=API_KEY'
    let promise = new Promise(function(resolve, reject){
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

  static sholatMadinah() {
    let url = 'http://muslimsalat.com/madinah.json?key=API_KEY'
    let promise = new Promise(function(resolve, reject){
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

  static sholatMekkah() {
    let url = 'http://muslimsalat.com/mekah.json?key=API_KEY'
    let promise = new Promise(function(resolve, reject){
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

module.exports = JadwalSholat;
