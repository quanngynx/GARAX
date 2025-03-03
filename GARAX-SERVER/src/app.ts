'use strict'

require("dotenv").config()
import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from "cors";
import { default as helmet } from 'helmet';

// const { sequelize } = require('./models/index'); // Import sequelize từ models
// sequelize.sync({alter: true});

// #region IMPORT ROUTES
// import authRoutes from './routes/access';
import { router } from './routes';
import { ErrorStatus } from './common/interfaces';
import { BASE_URL_ADMIN, BASE_URL_CLIENT } from './common/constants/common';

// #region IMPORT DB
require('./db/init.mysql.level1');

declare module 'express-serve-static-core' {
  interface Response {
      error: (code: number, message: string) => Response;
      success: (code: number, message: string, result: any) => Response;
  }
}

const app = express();

//#region Init middlewares
app.use(cors({
  origin: [
    `${BASE_URL_CLIENT}`,
    `${BASE_URL_ADMIN}`,

    // NGUYEN
    // "https://pointer.io.vn",
    // "https://wallet.pointer.io.vn",
    // "https://presspay-wallet.vercel.app",
    // "https://presspay.vercel.app",

    // "https://presspay-api.azurewebsites.net",
    // "https://api-presspay.azurewebsites.net",
    // "https://api-wallet.pointer.io.vn"
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true, // Cho phép credentials (cookies, headers...)
}))

app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true
}))

// checkOverLoad()

//#region Init routes
app.use('', router)
// app.use('/auth', authRoutes)

//hanlding errors
app.use((next: NextFunction) => {
  const error = new Error('Not Found')
  error.cause = 404
  next(error)
})

app.use((
  err: ErrorStatus,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    errors: err.name,
    status: statusCode,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : '',
  });
})

app.get('', (res: Response) => {
  res.send('Hello World!')
})

app.get('/ping', (_req: Request, res: Response) => {
  res.send('pong 🏓')
})

export { app }
