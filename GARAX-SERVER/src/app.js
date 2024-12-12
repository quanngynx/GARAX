'use strict'

require("dotenv").config()
const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan')
const compression = require('compression')
const cookieParser = require('cookie-parser');
const cors = require("cors");
const { default : helmet } = require('helmet')

// const { sequelize } = require('./models/index'); // Import sequelize từ models
// sequelize.sync({alter: true});

// #region IMPORT ROUTES
const authRoutes = require('./routes/access/index');
const router = require('./routes/index')

// #region IMPORT DB
require('./db/init.mysql.level1')

const app = express()

//#region Init middlewares
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5273',
    'http://localhost:5274',
    'http://localhost:5275',
    'http://localhost:3308',
    'http://localhost:5174',

    // #region MY URL's DEPLOY

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
app.use('/auth', authRoutes)

app.get('/', ( req, res, next) => {
  return res.status(200).json({
      message: 'Hello world!, db!'
  })
})

//hanlding errors
app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  const statusCode = error.status || 500
  return res.status(statusCode).json({
    status: 'error',
    code: statusCode,
    stack: error.stack,
    message: error.message || 'Internal Server Error!'
  })
})

module.exports = app
