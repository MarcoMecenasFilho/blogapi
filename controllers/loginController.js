const { User } = require('../models');
const jwtGenerator = require('../helper/jwtGenerator');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const checkLogin = await User.findOne({ where: { email, password } });
    
    if (!checkLogin) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
      const userId = checkLogin.id; 
      const token = jwtGenerator({ email, userId });
      return res.status(200).json({ token });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  login,
};