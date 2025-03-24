'use strict';
import { Models, ProductVariantValues } from '@/common/interfaces';
import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { ProductModel } from './product';

export type ProductVariantValuesCreationAttributes = Optional<
  ProductVariantValues,
  'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'
>;

export class ProductVariantValuesModel
extends Model<ProductVariantValues, ProductVariantValuesCreationAttributes> {
  public id!: number;
  // public price!: number;
  // public oldPrice!: number;
  // public stock!: number;
  // public sold!: number;
  // public sku!: string;
  // public manufacturingDate!: BigInt;
  // public productId!: string;
  // public addOverSpecsId!: string;
  // public addOverDetailSpecsId!: string;
  // public createBy!: Date;
  // public updateBy!: Date;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;
  products?: ProductModel;

  public static associations: {
    products: Association<ProductModel, ProductVariantValuesModel>;
  };
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    this.belongsTo(models.Product, {
      foreignKey: 'productId',
      as: 'products',
    });

    this.hasOne(models.CartItems, {
      foreignKey: 'productVariantId',
      as: 'cart_items'
    });

    this.hasOne(models.OrderDetails, {
      foreignKey: "productVariantId",
      as: "order_details",
    });
  }
}

export const productVariantValuesModel = (sequelize: Sequelize) => {
  ProductVariantValuesModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    oldPrice: {
      type: DataTypes.INTEGER,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    sold: {
      type: DataTypes.INTEGER,
    },
    sku: {
      type: DataTypes.STRING,
    },
    manufacturingDate: {
      type: DataTypes.BIGINT,
    },
    productId: {
      type: DataTypes.INTEGER,
    },
    productVariantId: {
      type: DataTypes.INTEGER,
    },
    addOverDetailSpecsId: {
      type: DataTypes.INTEGER,
    },
    createdBy: {
      type: DataTypes.STRING,
    },
    updatedBy: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    sequelize,
    modelName: 'ProductVariantValues',
    tableName: 'product_variant_values',
    timestamps: true
  });
  return ProductVariantValuesModel;
};
