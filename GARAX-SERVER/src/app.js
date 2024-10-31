'use strict'

require("dotenv").config()

const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const cors = require("cors");
const { default : helmet } = require('helmet')
const { checkOverLoad } = require('./utils/helpers/checkConnect')
const app = express()
const router = require('./routes/index')
//init middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
//init db
require('./db/init.mysql.level0')

// checkOverLoad()

//init routes
app.use('', router)

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
