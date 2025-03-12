const dotenv = require('dotenv');
dotenv.config();

const host = process.env.HOST_DEV;
const username = process.env.USER_DEV;
const password = process.env.PASSWORD_DB_DEV;
const database = process.env.DATABASE_DEV;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
