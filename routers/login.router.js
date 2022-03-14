const express = require('express');
const { login } = require('../controllers/loginController');
const validationLogin = require('../middlewares/validationLogin');

const router = express.Router();

router.post(
  '/',
  validationLogin,
  login,
);

module.exports = router;