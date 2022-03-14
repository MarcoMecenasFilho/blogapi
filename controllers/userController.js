const { User } = require('../models');
const tokenGenerator = require('../helper/jwtGenerator');

const create = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await User.create({ displayName, email, password, image });
    const userId = newUser.id;

    const token = tokenGenerator({ email, userId });
    return res.status(201).json({ token });
  } catch (e) {
    next(e);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const allUsers = await User.findAll({
      attributes: { exclude: ['password'] },
    });

    return res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll
};