const express = require('express');
const router = express.Router();
const deptDao = require('../dao/deptDao')
const auth_jwt = require('../middleware/auth_jwt')
router.use(auth_jwt)
router.get('', (req, res) => {
  deptDao.selectAllDept(req, res);
});
module.exports = router;