import fs from 'fs';
import path from 'path';
import process from 'process';
import { Sequelize, DataTypes } from 'sequelize';
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '../config/config.json'))[env];
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}
const Account = require('./account')(sequelize, DataTypes);
const ApiKey = require('./apikey')(sequelize, DataTypes);
const KeyToken = require('./keytoken')(sequelize, DataTypes);
const OtpCode = require('./otpcode')(sequelize, DataTypes);
const ItemPermission = require('./itempermission')(sequelize, DataTypes);
const Permission = require('./permission')(sequelize, DataTypes);

const Product = require('./product')(sequelize, DataTypes);

const Address = require('./address')(sequelize, DataTypes);
// const ProductCategory = require('./productCategory')(sequelize, DataTypes);
// const ProductDetail = require('./productDetail')(sequelize, DataTypes);
// const ProductFeedback = require('./productFeedback')(sequelize, DataTypes);
// const ProductImage = require('./productImage')(sequelize, DataTypes);
// const ProductMedia = require('./productMedia')(sequelize, DataTypes);
// const Brand = require('./brand')(sequelize, DataTypes);

// const Cart = require('./cartProduct')(sequelize, DataTypes);
// const CartItemsProduct = require('./cartItemsProduct')(sequelize, DataTypes);

// const Service = require('./service')(sequelize, DataTypes);
// const ServiceCategory = require('./serviceCategory')(sequelize, DataTypes);
// const ServiceDetail = require('./serviceDetail')(sequelize, DataTypes);
// const ServiceMedia = require('./serviceMedia')(sequelize, DataTypes);

// const Order = require('./order')(sequelize, DataTypes);
// const OrderProduct = require('./orderProduct')(sequelize, DataTypes);
// const Payment = require('./payment')(sequelize, DataTypes);

const db = {
  Account,
  ApiKey,
  KeyToken,
  OtpCode,
  ItemPermission,
  Permission,
  Product,
  Address
};

Account.associate(db);
ApiKey.associate(db);
KeyToken.associate(db);
OtpCode.associate(db);
ItemPermission.associate(db);
Permission.associate(db);

Product.associate(db);

Address.associate(db);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.ts' &&
      file.indexOf('.test.ts') === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file));
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

export * from './account';
export * from './address';
