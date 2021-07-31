const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var session = require('express-session');
const user = require('./routers/user');
const emp = require('./routers/emp')
const dept = require('./routers/dept')
const attence = require('./routers/attence')
const cookieParser = require('cookie-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret :  'secret', // 对session id 相关的cookie 进行签名
  resave : true,
  saveUninitialized: false, // 是否保存未初始化的会话
  cookie : {
      maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
  },
}));
app.use(cookieParser());
app.use(function(req, res, next) {                       
  res.header("Access-Control-Allow-Origin", req.headers.origin);  
  res.header("Access-Control-Allow-Headers", "token, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("Access-control-Allow-Credentials","true");  
  next();
});
app.use('/user', user);
app.use('/emp', emp);
app.use('/dept', dept);
app.use('/attence', attence);
module.exports = app;