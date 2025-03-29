/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import dotenv from 'dotenv';
dotenv.config();

const host = process.env.HOST_DEV;
const username = process.env.USER_DEV;
const password = process.env.PASSWORD_DB_DEV;
const database = process.env.DATABASE_DEV;

// module.exports = {
//   development: {
//     username,
//     password,
//     database,
//     host,
//     dialect: "mysql",
//   },
//   test: {
//     username: "root",
//     password: null,
//     database: "database_test",
//     host: "127.0.0.1",
//     dialect: "mysql",
//   },
//   production: {
//     username: "root",
//     password: null,
//     database: "database_production",
//     host: "127.0.0.1",
//     dialect: "mysql",
//   },
// };
import 'dotenv/config';

export default {
  // logging: (message: string) => {
  //     if (message.startsWith('Executing (default):')) {
  //         // ignore regular query logs
  //         return;
  //     }
  //     // log anything else (e.g. errors)
  //     console.error(message);
  // },
  username: process.env.USER_DEV,
  password: process.env.PASSWORD_DB_DEV,
  database: process.env.DATABASE_DEV,
  host: process.env.HOST_DEV,
  dialect: 'mysql',
  dialectOptions: {
    bigNumberStrings: true
  },
  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
