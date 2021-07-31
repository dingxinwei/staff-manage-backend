function auth(req, res, next){
  if (req.session.user) {
    next();
  } else {
    res.json({code: 401, message: '未授权的访问'});
  }
}

module.exports = auth;