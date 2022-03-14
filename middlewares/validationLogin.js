const validationLogin = require('../helper/validationLogin');

module.exports = async (req, res, next) => {
  try {
  const { email, password } = req.body;
    
  const { error } = validationLogin.login.validate({ email, password });
  
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }

  next();
  } catch (e) {
    next(e);
  }
};