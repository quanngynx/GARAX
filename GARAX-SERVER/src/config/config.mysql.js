'use strict'

const dev = {
  app: {
      port: process.env.PORT_DEV || 3306
  },
  db: {
      host: process.env.HOST_DEV || 'localhost',
      user: process.env.USER_DEV || 'root',
      password: process.env.PASSWORD_DB_DEV || '',
      db: process.env.DATABASE_DEV,
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  }
}
// const product = {
//   app: {
//       port: process.env.PRO_APP_PORT || 3306
//   },
//   db: {
//     host: process.env.PRO_DB_HOST || 'localhost',
//     user: process.env.PRO_DB_USER || 'root',
//     password: process.env.PRO_DB_PASSWORD || '123456',
//     db: process.env.PRO_DB_DB,
//     dialect: 'mysql',
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000
//     }
//   }
// }
const config = { dev }
const env = process.env.NODE_ENV || 'dev'
module.exports = config[env]
