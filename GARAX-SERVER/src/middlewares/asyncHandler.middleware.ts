import { NextFunction, Request, Response } from 'express';

/** Cách dùng
 * @example
 * router.post('/auth/signup', asyncHandler(accessController.signUp))
 */
export const asyncHandler = (func: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    func(req, res, next).catch(next)
  }
}
