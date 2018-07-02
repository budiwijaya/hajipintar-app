var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/hajipintar-app');
mongoose.connect('mongodb://hajipintar:Kemenag2018@ds117681.mlab.com:17681/hajipintar')
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var petaLokasi = require('./routes/petalokasi');
var rph = require('./routes/rph');
var moneyConvert = require('./routes/moneyconvert');
var konsumsi = require('./routes/konsumsi');
var akomodasi = require('./routes/akomodasi');
var akomodasiMadinah = require('./routes/akomodasiMadinah')
var kritiksaran = require('./routes/kritiksaran');
var jadwalPenerbangan = require('./routes/jadwalpenerbangan');
var estimasiKeberangkatan = require('./routes/estimasikeberangkatan');
var hajipedia = require('./routes/hajipedia');
var jamaah = require('./routes/jamaah');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/petalokasi', petaLokasi);
app.use('/rph', rph);
app.use('/moneyconvert', moneyConvert);
app.use('/konsumsi', konsumsi);
app.use('/akomodasi', akomodasi);
app.use('/akomodasiMadinah', akomodasiMadinah)
app.use('/kritiksaran', kritiksaran);
app.use('/jadwalpenerbangan', jadwalPenerbangan);
app.use('/estimasi', estimasiKeberangkatan);
app.use('/hajipedia', hajipedia);
app.use('/jamaah', jamaah)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
