import { Request, Response, NextFunction } from 'express'

export interface PrototypesExpress {
  req: Request
  res: Response
  next: NextFunction
}
