const mysql = require('mysql2');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
// const { db: { host, user, password, db, dialect, pool } } = require('../config/config.mysql')

module.exports = async (params) => new Promise(
(resolve, reject) => {
	const connection = mysql.createConnection(params);
  connection.connect(error => {
	  if (error) {
      reject(error);
      return;
    }
    resolve(connection);
  })
});

module.exports = async (conn, q, params) => new Promise(
  (resolve, reject) => {
    const handler = (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    }
    conn.query(q, params, handler);
  });
