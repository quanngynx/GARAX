'use strict'

const dev = {
  app: {
      port: process.env.DEV_APP_PORT || 3052
  },
  db: {
      host: process.env.DEV_DB_HOST || 'localhost',
      user: process.env.DEV_DB_USER || 'root',
      password: process.env.DEV_DB_PASSWORD || '123456',
      db: process.env.DEV_DB_DB,
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  }
}
const product = {
  app: {
      port: process.env.PRO_APP_PORT || 3050
  },
  db: {
    host: process.env.PRO_DB_HOST || 'localhost',
    user: process.env.PRO_DB_USER || 'root',
    password: process.env.PRO_DB_PASSWORD || '123456',
    db: process.env.PRO_DB_DB,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}
const config = { dev, product }
const env = process.env.NODE_ENV || 'dev'
module.exports = config[env]
