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
const production = {
  app: {
    port: process.env.PORT_PROD || 3306, // Đổi thành cổng server cho môi trường production
  },
  db: {
    host: process.env.DB_HOST_PROD || 'localhost',
    user: process.env.DB_USER_PROD || 'root',
    password: process.env.DB_PASSWORD_PROD || '', // Mật khẩu cho MySQL
    db: process.env.DB_NAME_PROD || 'garrax_prod', // Đổi tên cơ sở dữ liệu production
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
const config = { dev, production }
const env = process.env.NODE_ENV || 'dev'
module.exports = config[env]
