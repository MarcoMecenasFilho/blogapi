const validationUser = require('../helper/validationUser');

module.exports = async (req, res, next) => {
  try {
  const { displayName, email, password } = req.body;
    
  const { error } = validationUser.create.validate({ displayName, email, password });
  
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  next();
  } catch (e) {
    next(e);
  }
};