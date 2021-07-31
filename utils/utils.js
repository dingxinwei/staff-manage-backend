module.exports = {
  jsonWrite(res, ret) {
    if(typeof ret === 'undefined') {
      res.json({
        code:'0',
        message: '操作失败'
      });
    } else {
      res.json(ret);
    }
  },
  buttonPermission(req, res){
    const param = req.body;
    if (param.role === 1) {
      res.json({data: true});
    } else {
      res.json({data: false});
    }
  },
  dbHelperFunc(pool, sql, res) {
    pool.getConnection((err, connection) => {
			connection.query(sql, (err, result) => {
				if(result) {
					const results = {
						code: 200,
            message:'操作成功',
            data: result
					};    
          // 以json形式，把操作结果返回给前台页面
				  require('./utils').jsonWrite(res, results);
				}
				// 释放连接 
				connection.release();
			});
		});
  }
}