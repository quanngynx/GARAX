require("dotenv").config()

const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const { default : helmet } = require('helmet')
const app = express()

//init middlewares

//init db
app.get('/', ( req, res, next) => {
    return res.status(200).json({
        message: 'Hello world!, db!'
    })
})
//init routes

//hanlding errors

module.exports = app
