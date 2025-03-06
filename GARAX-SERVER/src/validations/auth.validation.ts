import { object, string } from 'joi';
import { validatorHandler } from '../middlewares/validation.middleware';

const register = (req, res, next) => {
  const schema = object().keys({
    userName: string().trim().alphanum().min(3).max(50).required(),
    email: string().trim().email().required(),
    password: string()
      .trim()
      // .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
      .required(),
  });
  validatorHandler(req, res, next, schema);
};

const login = (req, res, next) => {
  const schema = object().keys({
    email: string().trim().email().required(),
    password: string()
      .trim()
      .required(),
  });
  validatorHandler(req, res, next, schema);
};

const resetPassword = (req, res, next) => {
  const schema = object().keys({
    email: string().trim().email().required(),
    password: string()
      .trim()
      // .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
      .required(),
  });
  validatorHandler(req, res, next, schema);
};

export default {
  register,
  login,
  resetPassword
};
