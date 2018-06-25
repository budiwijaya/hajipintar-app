console.log('Models Money Convert\n');

const request = require('request');
const API_KEY = process.env.MONEY_KEY;

class MoneyConvert {
  constructor() {

  }

  static dollarToRupiah(amount) {
    let url = `https://www.amdoren.com/api/currency.php?api_key=${API_KEY}&from=USD&to=IDR&amount=${amount}`
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

  static riyalToRupiah(amount) {
    let url = `https://www.amdoren.com/api/currency.php?api_key=${API_KEY}&from=SAR&to=IDR&amount=${amount}`
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

  static rupiahToRiyal(amount) {
    let url = `https://www.amdoren.com/api/currency.php?api_key=${API_KEY}&from=IDR&to=SAR&amount=${amount}`
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

  static rupiahToDollar(amount) {
    let url = `https://www.amdoren.com/api/currency.php?api_key=${API_KEY}&from=IDR&to=USD&amount=${amount}`
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

module.exports = MoneyConvert;
