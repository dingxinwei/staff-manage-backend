const mysql = require('mysql');
const $conf = require('../config/db.js');
const $sql = require('./sql.js');
const utils = require('../utils/utils');
const pool  = mysql.createPool($conf.mysql);
module.exports = {
  selectAllDept(req, res) {
		utils.dbHelperFunc(pool, $sql.dept.selAllDept, res);
  } 
}