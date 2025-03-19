import { DataTypes, Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';
// import connection from '@/db/init.mysql';
// import connectionConfig from '../config/database.js';
import connectionConfig from '@/config/database.js';

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
import { Models } from '@/common/interfaces';
import { attributeValuesModel } from './attributevalues';
import { productattributeValuesModel } from './productattributevalues';
import { variantKeysModel } from './variantkeys';
import { variantValuesModel } from './variantvalues';

// const env = process.env.NODE_ENV || 'development';
// const dbConfig = connectionConfig[env];
const basename = path.basename(__filename);

let sequelize: any;
if (connectionConfig.database && connectionConfig.username) {
  sequelize = new Sequelize(
    connectionConfig.database,
    connectionConfig.username,
    connectionConfig.password,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      dialectOptions: {
          bigNumberStrings: true,
      },
      pool: {
          max: 50,
          min: 0,
          acquire: 30000,
          idle: 10000,
      },
    }
  );
}

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
const VariantKeys = variantKeysModel(sequelize);
const VariantValues = variantValuesModel(sequelize);
const ProductVariantValues = productVariantValuesModel(sequelize);
const AttributeValues = attributeValuesModel(sequelize);
const ProductAttributeValues = productattributeValuesModel(sequelize);
const Service = serviceModel(sequelize);
const ServiceCategory = serviceCategoryModel(sequelize);
const SpecificationDetailProduct = specificationDetailProductModel(sequelize);
const SpecificationProduct = specificationProductModel(sequelize);
const Video = videoModel(sequelize);

const db: Models = {
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
  VariantKeys,
  VariantValues,
  AttributeValues,
  ProductAttributeValues,
  Service,
  ServiceCategory,
  SpecificationDetailProduct,
  SpecificationProduct,
  Video,
  sequelize,
  Sequelize
};

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(async file => {
    const modelPath = path.join(__dirname, file);
    const modelModule = await import(modelPath);
    const model = modelModule.default(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
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
export * from './variantkeys';
export * from './variantvalues';
export * from './product';
export * from './productvariantvalues';
export * from './productattributevalues';
export * from './attributevalues';
export * from './service';
export * from './servicecategory';
export * from './specificationdetailproduct';
export * from './specificationproduct';
export * from './video';
