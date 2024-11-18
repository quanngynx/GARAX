'use strict';
const { Model } = require('sequelize');

const { default: slugify } = require("slugify");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.ProductCategory, {
        foreignKey: 'idProduct', // from ProductCategory
        as: 'productCategory',
      }); // DONE
      Product.hasOne(models.ProductDetail, {
        foreignKey: 'idProduct', // from ProductDetail
        as: 'productDetail',
      }); // DONE
      Product.hasMany(models.ProductMedia, {
        foreignKey: 'idProductMedia',
        as: 'productMedia',
      }); // DONE
      Product.hasMany(models.ProductFeedback, {
        foreignKey: 'idProductFeedback',
        as: 'productFeedback',
      }); // DONE
      Product.belongsTo(models.Brand, {
        foreignKey: 'idBrand',
        as: 'brand',
      }); // DONE
      Product.belongsTo(models.CartItemsProduct, {
        foreignKey: 'idCartItemsProduct',  // from Product
        as: 'cartItemsProduct'
      });
      Product.hasMany(models.OrderProduct, {
        foreignKey: 'idProduct',  // from Product
        as: 'orderProduct'
      });
    }
  }
  Product.init(
    {
      idProduct: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      idCartItemsProduct: DataTypes.INTEGER,
      idBrand: DataTypes.INTEGER,
      nameProduct: DataTypes.STRING,
      alias: DataTypes.STRING,
      thumble: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      originalPrice: DataTypes.INTEGER,
      sold: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      status: {
        type: DataTypes.ENUM('publish', 'unpublish'),
        defaultValue: 'publish'
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
    },
    {
      sequelize,
      modelName: 'Product',
      timestamps: true,
      hooks: {
        beforeValidate: (product) => {
          product.alias = slugify(product.nameProduct, { lower: true, trim: true });
        },
      },
    }
  );
  // SequelizeSlugify.slugifyModel(Product, {
  //   source: ['nameProduct'],
  // });
  return Product;
};
