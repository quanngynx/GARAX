require('dotenv').config();

const mysql = require('mysql2');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_DEV,
  process.env.USER_DEV,
  process.env.PASSWORD_DB_DEV, {
  host: process.env.HOST_DEV,
  dialect: 'mysql',
  // dialectModule: require('mysql2'), // Chỉ định mysql2 làm module driver cho Sequelize
  logging:false
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connect()
// const { db: { host, user, password, db, dialect, pool } } = require('../config/config.mysql')

// module.exports = async (params) => new Promise(
// (resolve, reject) => {
// 	const connection = mysql.createConnection(params);
//   connection.connect(error => {
// 	  if (error) {
//       reject(error);
//       return;
//     }
//     resolve(connection);
//   })
// });

// module.exports = async (conn, q, params) => new Promise(
//   (resolve, reject) => {
//     const handler = (error, result) => {
//       if (error) {
//         reject(error);
//         return;
//       }
//       resolve(result);
//     }
//     conn.query(q, params, handler);
//   });
