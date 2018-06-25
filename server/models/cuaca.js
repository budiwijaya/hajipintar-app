console.log('Models Cuaca\n');

let weather = require('node-openweather') ({
  key: process.env.WEATHER_KEY,
  accuracy: "like",
  units: "metric",
  language: "en"
})

module.exports = weather;
