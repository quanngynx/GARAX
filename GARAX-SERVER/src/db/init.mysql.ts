import { Sequelize } from 'sequelize';
import { DB_HOST_VALUE_DEV, DB_NAME_VALUE_DEV, DB_PASSWORD_VALUE_DEV, DB_USER_VALUE_DEV } from '@/common/venv';

// const host = process.env.HOST_DEV;
// const username = process.env.USER_DEV;
// const password = process.env.PASSWORD_DB_DEV;
// const database = process.env.DATABASE_DEV;
// console.log(`${DB_HOST_VALUE_DEV} ${DB_NAME_VALUE_DEV} ${DB_PASSWORD_VALUE_DEV} ${DB_USER_VALUE_DEV}`)
const sequelize = new Sequelize(DB_NAME_VALUE_DEV, DB_USER_VALUE_DEV, DB_PASSWORD_VALUE_DEV, {
  host: DB_HOST_VALUE_DEV,
  dialect: 'mysql',
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  dialectModule: require('mysql2'),
  logging: false,
  pool: {
    max: 5,
    min: 1,
    acquire: 30000,
    idle: 10000
  }
});

export default sequelize;
