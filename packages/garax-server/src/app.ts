'use strict';
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { default as helmet } from 'helmet';
// import OS from 'os';

import { router } from '@/routes';
import { ErrorStatus } from '@/common/interfaces';
import { apiLimiter, corsMiddleware } from '@/middlewares';
import connection from '@/db/init.mysql';
// const ENABLE_JSON_MINIFY = process.env.ENABLE_JSON_MINIFY === 'true';

// #region IMPORT DB
// sequelize.sync({alter: true});
const connect = async () => {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
connect();

declare module 'express-serve-static-core' {
  interface Response {
    error: (code: number, message: string) => Response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    success: (code: number, message: string, result: any) => Response;
  }
}
const app = express();

// Number(process.env.UV_THREADPOOL_SIZE) = OS.cpus().length;

app.use(corsMiddleware);
app.use(morgan('dev'));
app.use(helmet());
app.use(
  compression({
    // chunkSize:
    level: 6,
    threshold: 1024,
    filter: (req, res) => {
      if (!req.headers['x-no-compression']) {
        return compression.filter(req, res);
      }
      return false; // Don't apply compression if 'x-no-compression' header is present
    }
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true
  })
);

// checkConnect.default.checkOverLoad();

//#region Init rate limit
app.use('', apiLimiter);

//#region Init routes
app.use('', router);

//#region hanlding errors
app.use((err: ErrorStatus, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    errors: err.name,
    status: statusCode,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : ''
  });
});

app.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.send('Hello World!');
});

app.get('/ping', (_req: Request, res: Response, _next: NextFunction) => {
  res.send('pong 🏓');
});

app.get('/stress-test', (_req, res) => {
  // const data = 'This is a post about how to use the compression package'.repeat(100);
  const data = {};
  res.send(data);
});

export { app };
