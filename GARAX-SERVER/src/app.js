'use strict'

require("dotenv").config()

const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const { default : helmet } = require('helmet')
const { checkOverLoad } = require('./utils/helpers/checkConnect')
const app = express()
const { sequelize } = require('./models/index'); // Import sequelize từ models
sequelize.sync({alter: true});
const authRoutes = require('./routes/access/index');

// const router = require('./routes/index')

//init middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true
}))

require('./db/init.mysql.level1')

// checkOverLoad()

//init routes
// app.use('', router)
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
