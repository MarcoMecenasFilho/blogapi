const Joi = require('joi');

const create = Joi.object({
  displayName: Joi.string().min(8).messages({
    'string.min': '400|"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  .required().messages({
    'any.required': '400|"email" is required',
    'string.email': '400|"email" must be a valid email',
  }),
    
  password: Joi.string().min(6).required().messages({
    'any.required': '400|"password" is required',
    'string.min': '400|"password" length must be 6 characters long',
  }),
});

module.exports = {
  create,
};