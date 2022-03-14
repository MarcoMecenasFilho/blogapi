const Joi = require('joi');

const login = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  .required()
.messages({
    'string.empty': '400|"email" is not allowed to be empty',
    'any.required': '400|"email" is required',
    'string.email': '400|"email" must be a valid email',
  }),
    
  password: Joi.string().min(6).required().messages({
    'string.empty': '400|"password" is not allowed to be empty',
    'any.required': '400|"password" is required',
    'string.min': '400|"password" length must be 6 characters long',
  }),
});

module.exports = {
  login,
};