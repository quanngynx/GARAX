'use strict';
import { _PORT_CLIENT } from '@/common/venv';
import { NextFunction, Request, RequestHandler, Response } from 'express';

/**
 * CORS middleware
 * @param {*} req - Express request object
 * @param {*} res - Express response object
 * @param {*} next - Express next function
 */
export const corsMiddleware: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const allowedOrigins = ['http://localhost:3050', `http://localhost:${_PORT_CLIENT}`];
  const origin = req.headers.origin;

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, uid');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.sendStatus(204); // 204: NO CONTENT
    return;
  }

  next();
};
