const $sql = require('./sql.js');
const utils = require('../utils/utils');
const jwt = require('jsonwebtoken')
const fs = require('fs')
const payload = require('../utils/jwt_payload')
const mysql = require('mysql');
const $conf = require('../config/db.js');
const pool  = mysql.createPool($conf.mysql);
module.exports = {
  login(req, res, next) {
    pool.getConnection((err, connection) => {
			if (err) return;
			// 获取前台页面传过来的参数
			const param = req.body;
 			console.log(param)
			connection.query($sql.user.login, [param.username, param.password], (err, result) => {
				if (err) return;
				console.log(result);
				if(result.length !== 0) {
					const cert = fs.readFileSync('key/pkcs8_rsa_private_key.pem')
					const token = jwt.sign(payload, cert, { algorithm: 'RS256' ,expiresIn:'300s'});
					const results = {
						code: 200,
            message:'登录成功',
            data: result,
						token: token
					};   
					//req.session.user = result;

					// 以json形式，把操作结果返回给前台页面
					utils.jsonWrite(res, results); 
				}
				// 释放连接 
				connection.release();
			});
		});
  },
  userList(req, res, next) {
		utils.dbHelperFunc(pool, $sql.user.userList, res);
  }
}