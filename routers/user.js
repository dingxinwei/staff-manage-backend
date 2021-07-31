const express = require('express');
const { user } = require('../dao/sql');
const router = express.Router();
const userDao = require('../dao/userDao');
const auth_jwt = require('../middleware/auth_jwt')
router.post('/login', (req, res, next) => {
  console.log('login');
  userDao.login(req, res, next);
});
router.use(auth_jwt)
router.get('/users', (req, res, next) => {
  userDao.userList(req, res, next);
});
router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if(err) return;
    res.json({code: 200, message: '退出成功'})
  })
})
module.exports = router;