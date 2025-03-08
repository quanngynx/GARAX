import fs from 'fs';
import path from 'path';
import process from 'process';
import { Sequelize } from 'sequelize';
import { accountModel } from './account';
import { apiKeyModel } from './apikey';
import { keyTokenModel } from './keytoken';
import { otpCodeModel } from './otpcode';
import { itemPermissionModel } from './itempermission';
import { permissionModel } from './permission';
import { productModel } from './product';
import { addressModel } from './address';

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

const Account = accountModel(sequelize);
const ApiKey = apiKeyModel(sequelize);
const KeyToken = keyTokenModel(sequelize);
const OtpCode = otpCodeModel(sequelize);
const ItemPermission = itemPermissionModel(sequelize);
const Permission = permissionModel(sequelize);

const Product = productModel(sequelize);

const Address = addressModel(sequelize);
// const ProductCategory = require('./productCategory')(sequelize);
// const ProductDetail = require('./productDetail')(sequelize);
// const ProductFeedback = require('./productFeedback')(sequelize);
// const ProductImage = require('./productImage')(sequelize);
// const ProductMedia = require('./productMedia')(sequelize);
// const Brand = require('./brand')(sequelize);

// const Cart = require('./cartProduct')(sequelize);
// const CartItemsProduct = require('./cartItemsProduct')(sequelize);

// const Service = require('./service')(sequelize);
// const ServiceCategory = require('./serviceCategory')(sequelize);
// const ServiceDetail = require('./serviceDetail')(sequelize);
// const ServiceMedia = require('./serviceMedia')(sequelize);

// const Order = require('./order')(sequelize);
// const OrderProduct = require('./orderProduct')(sequelize);
// const Payment = require('./payment')(sequelize);

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
export * from './apikey';
export * from './brand';
export * from './cart';
export * from './cartitems';
export * from './categoryproduct';
export * from './currency';
export * from './image';
export * from './itempermission';
export * from './keytoken';
export * from './news';
export * from './newscategory';
export * from './order';
export * from './otpcode';
export * from './payment';
export * from './permission';
export * from './product';
export * from './productvariantvalues';
export * from './service';
export * from './servicecategory';
export * from './specificationdetailproduct';
export * from './specificationproduct';
export * from './video';
