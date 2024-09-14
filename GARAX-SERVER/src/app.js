'use strict'

require("dotenv").config()

const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const { default : helmet } = require('helmet')
const { checkOverLoad } = require('./utils/helpers/checkConnect')
const app = express()

//init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
//init db
require('./db/init.mongodb')

checkOverLoad()
//init routes
app.get('/', ( req, res, next) => {
  return res.status(200).json({
      message: 'Hello world!, db!'
  })
})
//hanlding errors

module.exports = app
