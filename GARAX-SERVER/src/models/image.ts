'use strict';
import { IMAGE_VALUES } from '@/common/constants';
import { Image, Models } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type ImageCreationAttributes = Optional<
  Image,
  'id' | 'createdAt' | 'updatedAt'
>;

export class ImageModel
extends Model<ImageCreationAttributes> {
  // id!: string;
  // image!: string;
  // coverImage!: string;
  // alt!: string;
  // original!: string;
  // typeSize!: typeof IMAGE_VALUES[number];
  // typeImage!: string;
  // productId!: string;
  // createdAt!: Date;
  // updatedAt!: Date;
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(_models: Models) {
    // define association here
  }
}

export const imageModel = (sequelize: Sequelize) => {
  ImageModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING
    },
    coverImage: {
      type: DataTypes.STRING
    },
    alt: {
      type: DataTypes.STRING
    },
    original: {
      type: DataTypes.STRING
    },
    typeSize: {
      type: DataTypes.ENUM(...IMAGE_VALUES)
    },
    typeImage: {
      type: DataTypes.STRING
    },
    productId: {
      type: DataTypes.STRING
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
    modelName: 'Image',
    tableName: 'images',
    timestamps: true
  });
  return ImageModel;
};
