const express = require('express');
const authToken = require('../middlewares/authToken');
const { validateUpdate } = require('../middlewares/validationBlogPostUpdate');
const { validateCreate } = require('../middlewares/validationBlogPostCreate');

const { create, getAll, getById,
  update, exclude, getByTerm } = require('../controllers/blogPostController');

const router = express.Router();

router.post(
  '/',
  authToken,
  validateCreate,
  create,
);

router.get(
  '/',
  authToken,
  getAll,
);
router.get(
  '/search/',
  authToken,
  getByTerm,
);

router.get(
  '/:id',
  authToken,
  getById,
);

router.put(
  '/:id',
  authToken,
  validateUpdate,
  update,
);

router.delete(
  '/:id',
  authToken,
  exclude,
  );
module.exports = router;