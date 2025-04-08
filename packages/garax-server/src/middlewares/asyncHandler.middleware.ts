import { NextFunction, Request, Response } from 'express';

/** Cách dùng
 * @example
 * router.post('/auth/signup', asyncHandler(accessController.signUp))
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const asyncHandler = (func: Function) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    return await Promise.resolve(func(req, res, next));
  } catch (err) {
    return next(err);
  }
};
