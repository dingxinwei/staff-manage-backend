const express = require('express');
const router = express.Router();
const empDao = require('../dao/empDao')
const utils = require('../utils/utils')
const auth_jwt = require('../middleware/auth_jwt')
router.use(auth_jwt)
router.put('', (req, res, next) =>{
  empDao.addEmp(req, res, next);
});
router.get('', (req, res, next) => {
  empDao.getEmp(req, res, next);
});
router.delete('/:id', (req, res, next) => {
  empDao.deleteEmp(req, res, next);
});
router.post('', (req, res, next) => {
  empDao.updateEmp(req, res, next);
});
router.get('/addEmpButton', (req, res) => {
  utils.buttonPermission(req, res);
});
router.get('/deleteEmpButton', (req, res) => {
  utils.buttonPermission(req, res);
});
module.exports = router;