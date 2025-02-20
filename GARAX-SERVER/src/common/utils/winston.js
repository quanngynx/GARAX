'use strict'

const winston = require('winston')

const { combine, timestamp, json, align, printf } = winston.format
// luu vao mot file de de quan lys : combined.log

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'debug',
  format: combine(
    timestamp({
      format: 'YY-MM-DD hh:mm:ss.SSS A'
    }),
    align(),
    printf( info => `[${info.timestamp}] ${info.level} ${info.message}`)
  ),
  defaultMeta: {
    service: 'user-service',
  },
  transports: [
     new winston.transports.Console(),
    //  new winston.transports.File({ filename: 'error.log', level: 'error' }),
     new winston.transports.File({dirname: 'logs', filename: 'combined.log'})
  ]
})

// quan ly logging theo size
const maxsizeTransport = new winston.transports.File({
  level: 'info',
  format: winston.format.printf(info => info.message),
  filename: ('testMaxsize.log'), //đường đẫn tạo file
  maxsize: 5242880, // 5MB
})

module.exports = {
  logger, maxsizeTransport
}
