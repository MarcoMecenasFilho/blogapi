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

module.exports = {
  create,
};