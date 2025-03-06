import { NextFunction, Request, Response } from 'express';

export const authorizeRole = (roles: string | string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { role } = req.body;

    if (!roles.includes(role)) {
      return res.status(403).json({ message: 'Forbidden: You do not have access' });
    }
    next();
  };
};
