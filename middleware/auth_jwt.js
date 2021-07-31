const jwt = require('jsonwebtoken')
const fs = require('fs')
const payload = require('../utils/jwt_payload')
function jwtVerify(req, res, next) {
  let token = req.get('token')
  var cert = fs.readFileSync('key/rsa_public_key.pem');  
  // 先解密
  jwt.verify(token, cert,function(err,decoded){
      if(err || !decoded) res.send({code:401,message:err})
      if(decoded.user == payload.user){
          next();
      }
      
  });
}
module.exports = jwtVerify;