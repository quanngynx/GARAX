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
import { brandModel } from './brand';
import { cartModel } from './cart';
import { cartItemsModel } from './cartitems';
import { categoryProductModel } from './categoryproduct';
import { currencyModel } from './currency';
import { imageModel } from './image';
import { newsModel } from './news';
import { newsCategory } from './newscategory';
import { orderModel } from './order';
import { paymentModel } from './payment';
import { productVariantValuesModel } from './productvariantvalues';
import { serviceModel } from './service';
import { serviceCategoryModel } from './servicecategory';
import { specificationDetailProductModel } from './specificationdetailproduct';
import { specificationProductModel } from './specificationproduct';
import { videoModel } from './video';
import configMySQL from '../config/config.mysql';
const env = process.env.NODE_ENV || 'dev';
const config = require('../config/config.mysql')[env];
// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable] || '', config);
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config
//   );
// }
const sequelize = configMySQL.url !== ''
  ? new Sequelize(
    configMySQL.url,
    {
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      port: configMySQL.development.port
    },
  )
  : new Sequelize(
    configMySQL.development.db,
    configMySQL.development.user,
    configMySQL.development.password,
    {
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
      port: configMySQL.development.port
    },
  )

const Account = accountModel(sequelize);
const Address = addressModel(sequelize);
const ApiKey = apiKeyModel(sequelize);
const Brand = brandModel(sequelize);
const Cart = cartModel(sequelize);
const CartItems = cartItemsModel(sequelize);
const CategoryProduct = categoryProductModel(sequelize);
const Currency = currencyModel(sequelize);
const Image = imageModel(sequelize);

const ItemPermission = itemPermissionModel(sequelize);
const KeyToken = keyTokenModel(sequelize);
const News = newsModel(sequelize);
const NewsCategory = newsCategory(sequelize);
const Order = orderModel(sequelize);
const OtpCode = otpCodeModel(sequelize);
const Payment = paymentModel(sequelize);
const Permission = permissionModel(sequelize);
const Product = productModel(sequelize);
const ProductVariantValues = productVariantValuesModel(sequelize);
const Service = serviceModel(sequelize);
const ServiceCategory = serviceCategoryModel(sequelize);
const SpecificationDetailProduct = specificationDetailProductModel(sequelize);
const SpecificationProduct = specificationProductModel(sequelize);
const Video = videoModel(sequelize);
// const ProductFeedback = require('./productFeedback')(sequelize);
// const ProductImage = require('./productImage')(sequelize);
// const ProductMedia = require('./productMedia')(sequelize);
// const Brand = require('./brand')(sequelize);
// const Cart = require('./cartProduct')(sequelize);
// const CartItemsProduct = require('./cartItemsProduct')(sequelize);
const db = {
  Account,
  Address,
  ApiKey,
  Brand,
  Cart,
  CartItems,
  CategoryProduct,
  Currency,
  Image,
  ItemPermission,
  KeyToken,
  News,
  NewsCategory,
  Order,
  OtpCode,
  Payment,
  Permission,
  Product,
  ProductVariantValues,
  Service,
  ServiceCategory,
  SpecificationDetailProduct,
  SpecificationProduct,
  Video,
  sequelize,
  Sequelize
};

Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { db };
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
