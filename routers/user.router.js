const express = require('express');
const { create, getAll, getById, excludeMe } = require('../controllers/userController');
const authToken = require('../middlewares/authToken');
const checkUniqueEmail = require('../middlewares/emailCheckUnique');
const validationUser = require('../middlewares/validationUser');

const router = express.Router();

router.post(
  '/',
  validationUser,
  checkUniqueEmail,
  create,
);

router.get(
  '/',
  authToken,
  getAll,
);

router.get(
  '/:id',
  authToken,
  getById,
);
router.delete(
  '/me',
  authToken,
  excludeMe,
);

module.exports = router;