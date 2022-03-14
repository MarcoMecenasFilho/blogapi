const { User } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const { email } = req.body;
    const uniqueEmail = await User.findOne({ where: { email } });
  
    if (uniqueEmail) {
      return res.status(409).json({ message: 'User already registered' });
    }
    next();
} catch (e) {
  next(e);
}
};