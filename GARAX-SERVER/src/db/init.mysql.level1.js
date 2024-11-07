require('dotenv').config();

const { Sequelize} = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE_DEV,
  process.env.USER_DEV,
  process.env.PASSWORD_DB_DEV, 
  {
  host: process.env.HOST_DEV,
  dialect: 'mysql',
  logging:false
});

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
connect();

module.exports = sequelize;
