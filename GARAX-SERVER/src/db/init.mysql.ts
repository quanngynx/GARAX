import { Sequelize } from 'sequelize';
import {
  DB_HOST_VALUE_DEV,
  DB_NAME_VALUE_DEV,
  DB_PASSWORD_VALUE_DEV,
  DB_USER_VALUE_DEV
} from '@/common/venv';

const sequelize = new Sequelize(
  DB_NAME_VALUE_DEV,
  DB_USER_VALUE_DEV,
  DB_PASSWORD_VALUE_DEV,
  {
    host: DB_HOST_VALUE_DEV,
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    logging:false,
    pool: {
      max: 5,
      min: 1,
      acquire: 30000,
      idle: 10000
    }
  }
);

export default sequelize;

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
connect();
