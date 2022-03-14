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

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
  } catch (e) {
    next(e);
  }
};

const excludeMe = async (req, res, next) => {
  try {
    const { userId } = req.tokenData;
    await User.destroy({ where: { id: userId } });
  
      return res.status(204).json({});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  excludeMe
};