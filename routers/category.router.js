const express = require('express');
const authToken = require('../middlewares/authToken');
const { create, getAll } = require('../controllers/categoryController');

const router = express.Router();

router.post(
  '/',
  authToken,
  create,
);

router.get(
  '/',
  authToken,
  getAll,
);

module.exports = router;