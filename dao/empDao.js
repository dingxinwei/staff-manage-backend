const mysql = require('mysql');
const $conf = require('../config/db.js');
const $sql = require('./sql.js');
const utils = require('../utils/utils');
const pool  = mysql.createPool($conf.mysql);
module.exports = {
  getEmp(req, res, next) {
    utils.dbHelperFunc(pool, $sql.emp.getEmp, res);
  },
  updateEmp(req, res, next) {
    const param = req.body;
    pool.getConnection((err, connection) => {
      connection.query($sql.emp.updEmp, [param.empname, param.date, param.gender, param.did, param.empnum],
        (err, result) => {
          if (err) return;
          const results = null;
          console.log(result);
          if(result) {
            results = {
              code: 200,
              message:'更新成功',
            };    
          } else {
            results = {
              code: 400,
              message:'操作失败',
            }
          }
          // 以json形式，把操作结果返回给前台页面
          utils.jsonWrite(res, results);
  
          // 释放连接 
          connection.release();
			});
		});
  },
  addEmp(req, res, next) {
    const param = req.body;
    pool.getConnection((err, connection) => {
      connection.query($sql.emp.addEmp, [param.empnum, param.empname, param.date, param.gender, param.did],
        (err, result) => {
          if (err) return;
          const results = null;
          console.log(result);
          if(result) {
            results = {
              code: 200,
              message:'添加成功',
            };    
          } else {
            results = {
              code: 400,
              message:'添加失败',
            }
          }
          // 以json形式，把操作结果返回给前台页面
          utils.jsonWrite(res, results);
  
          // 释放连接 
          connection.release();
			});
		});
  },
  deleteEmp(req, res, next) {
    const param = req.body || req.param || req.query;
    pool.getConnection((err, connection) => {
      connection.query($sql.emp.delEmp, [param.id],
        (err, result) => {
          if (err) return;
          const results = null;
          if(result) {
            results = {
              code: 200,
              message:'删除成功',
            };    
          } else {
            results = {
              code: 400,
              message:'删除失败',
            }
          }
          // 以json形式，把操作结果返回给前台页面
          utils.jsonWrite(res, results);
  
          // 释放连接 
          connection.release();
			});
		});
  }









}