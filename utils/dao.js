const mysql = require('mysql');
const $conf = require('../config/db.js');
const pool  = mysql.createPool($conf.mysql);
module.exports = function(sql,pararms){
  return new Promise(resolve => {
    pool.getConnection((err, connection) => {
      if (err) return;
      connection.query(sql, pararms, (err, result) => {
        if (err) return;
        resolve(result)
        connection.release();
      })
    })
  })
}