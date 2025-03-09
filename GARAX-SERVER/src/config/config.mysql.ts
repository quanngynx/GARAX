
require('dotenv').config();
const host = process.env.HOST_DEV;
const port = Number(process.env.PORT_DEV);
const username = process.env.USER_DEV;
const password = process.env.PASSWORD_DB_DEV;
const db = process.env.DATABASE_DEV;

export default {
  url: '',
  development: {
    host: host || 'localhost',
    port: port || 3306,
    user: username || 'root',
    password: password || '',
    db: db || '',
  }
}
// const production = {
//   app: {
//     port: process.env.PORT_PROD || 3306,
//   },
//   db: {
//     host: process.env.DB_HOST_PROD || 'localhost',
//     user: process.env.DB_USER_PROD || 'root',
//     password: process.env.DB_PASSWORD_PROD || '',
//     db: process.env.DB_NAME_PROD || 'garrax_prod',
//     dialect: 'mysql',
//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   },
// };
// const config = { dev, production }
// const env = (process.env.NODE_ENV || 'dev') as keyof typeof config;
// export default config[env];
