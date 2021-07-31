const express = require('express');
const router = express.Router();
const attence = require('../dao/attenceDao')
const auth_jwt = require('../middleware/auth_jwt')
router.use(auth_jwt)
router.get('', (req, res) => {
  attence.selectAttence(req, res);
});
module.exports = router;