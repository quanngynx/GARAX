// import Joi from 'joi';
// import { NextFunction, Request, Response } from 'express';
// import { validatorHandler } from '../middlewares/validation.middleware';

// const register = (req: Request, res: Response, next: NextFunction) => {
//   const schema = Joi.object().keys({
//     firstname: Joi.string().trim().alphanum().min(3).max(50).required(),
//     lastname: Joi.string().trim().alphanum().min(3).max(50).required(),
//     email: Joi.string().trim().email().required(),
//     password: Joi.string().trim().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required()
//   });
//   validatorHandler({ req, res, next, schema });
// };

// const login = (req: Request, res: Response, next: NextFunction) => {
//   const schema = Joi.object().keys({
//     email: Joi.string().trim().email().required(),
//     password: Joi.string().trim().pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required()
//   });
//   validatorHandler({ req, res, next, schema });
// };

// module.exports = {
//   register,
//   login
// };
