import { NextFunction, Request, RequestHandler, Response } from 'express';

/** Cách dùng
 * @example
 * router.post('/auth/signup', asyncHandler(accessController.signUp))
 */
export const asyncHandler = (func: RequestHandler) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    return await Promise.resolve(func(req, res, next));
  } catch (err) {
    return next(err);
  }
};
