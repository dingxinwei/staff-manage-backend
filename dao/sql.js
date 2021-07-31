const sql = {
  user: {
    login: 'select * from t_user where username = ? and password = ?',
    userList: 'select username,role from t_user'
  },
  emp: {
    getEmp: 'select e.eid empnum, e.ename empname, e.edate date, e.egender gender, d.* from t_emp e, t_dept d where e.did = d.did',
    addEmp: 'insert into t_emp values(?,?,?,?,?)',
    delEmp: 'delete from t_emp where eid=?',
    updEmp: 'update t_emp set ename=?, edate=?, egender=?,did=? where eid=?'
  },
  dept: {
    selAllDept: 'select * from t_dept'
  },
  attence: {
    selAttence: 'select e.eid,e.ename,a.date,a.flag  from t_attence a,t_emp e where a.eid = e.eid'
  }
}
module.exports = sql;