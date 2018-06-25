console.log('Controllers Cuaca\n');

const WeatherModel = require('../models/cuaca');

class Cuaca {
  constructor() {

  }

  static madinahCuaca(req, res) {
    WeatherModel.city('Medina', ['SA']).now()
    .then(dataCuaca => {
      res.send(dataCuaca)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static mekkahCuaca(req, res) {
    WeatherModel.city('Mecca', ['SA']).now()
    .then(dataCuaca => {
      res.send(dataCuaca)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static arafahCuaca(req, res) {
    WeatherModel.coords('21.3549047','39.9753398').now()
    .then(dataCuaca => {
      res.send(dataCuaca)
    })
    .catch(err => {
      res.send(err)
    })
  }
}

module.exports = Cuaca;
