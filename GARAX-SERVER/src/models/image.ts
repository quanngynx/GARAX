'use strict';
import { IMAGE } from '@/common/constants';
import { Image, Models } from '@/common/interfaces';
import { DataTypes, Model, Optional } from 'sequelize';

export type ImageCreationAttributes = Optional<
  Image,
  'id'
>;

export class ImageModel
extends Model<ImageCreationAttributes>
implements Image {
  id!: string;
  image!: string;
  coverImage!: string;
  alt!: string;
  original!: string;
  typeSize!: IMAGE;
  typeImage!: string;
  productId!: string;
  created_at!: Date;
  updated_at!: Date;
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(_models: Models) {
    // define association here
  }
}

export default (sequelize: any) => {
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
      type: DataTypes.ENUM
    },
    typeImage: {
      type: DataTypes.STRING
    },
    productId: {
      type: DataTypes.STRING
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
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
