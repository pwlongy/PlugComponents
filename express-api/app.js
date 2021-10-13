var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var session = require("express-session")





var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var contentRouter = require("./routes/contents")

var app = express();

// 连接数据库
require('./utils/connect')

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
app.use("/content", contentRouter)

// 配置 session
app.use(session({
  // 密钥
  secret: 'keyboard cat',
  // 是否要重新保存
  resave: true,
  // 是否要在没有初始的时候保存
  saveUninitialized: true,
  // 设置 cookie 的存在时间
  cookie: {
    maxAge: 600000
  }
}))

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
