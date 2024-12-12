const Joi = require('joi');
const { validatorHandler } = require('../middlewares/validation.middleware');

const register = (req, res, next) => {
  const schema = Joi.object().keys({
    userName: Joi.string().trim().alphanum().min(3).max(50).required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string()
      .trim()
      // .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
      .required(),
  });
  validatorHandler(req, res, next, schema);
};

const login = (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string()
      .trim()
      .required(),
  });
  validatorHandler(req, res, next, schema);
};

const resetPassword = (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string().trim().email().required(),
    password: Joi.string()
      .trim()
      // .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
      .required(),
  });
  validatorHandler(req, res, next, schema);
};

module.exports = {
  register,
  login,
  resetPassword
};
