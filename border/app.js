// 모듈가져오기
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express(); // 익스프레스 모듈을 호출하여 변수객체를 만듬

// 익스프레스 앱 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// 미드웨어 연결 부분
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // 쿠키 -> 세션으로 바꿀예정
app.use(express.static(path.join(__dirname, 'public'))); // 정적인 파일을 제공

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler 404에러
app.use(function(req, res, next) {
  next(createError(404));
});

// 에러 핸들러
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; // app 객체를 모듈로 만듬
