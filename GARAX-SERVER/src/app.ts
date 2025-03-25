/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config();
import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { default as helmet } from 'helmet';
// sequelize.sync({alter: true});
// import authRoutes from './routes/access';
import { router } from './routes';
import { ErrorStatus } from './common/interfaces';
import { corsMiddleware } from './middlewares';
// #region IMPORT DB
import connection from '@/db/init.mysql';

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
    success: (code: number, message: string, result: any) => Response;
  }
}
const app = express();
app.use(corsMiddleware);
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true
  })
);
// checkOverLoad()

//#region Init routes
app.use('', router);

//#region hanlding errors
// app.use((next: NextFunction) => {
//   const error = new Error('Not Found')
//   error.cause = 404
//   next(error)
// })

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

export { app };
