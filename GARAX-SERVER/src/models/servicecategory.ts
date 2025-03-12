'use strict';
import { Models, ServiceCategory } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

import { default as slugify } from "slugify";

export type ServiceCategoryCreationAttributes = Optional<
  ServiceCategory,
  'id'
>;

export class ServiceCategoryModel
extends Model<ServiceCategory, ServiceCategoryCreationAttributes>
implements ServiceCategory {
  id!: string;
  title!: string;
  alias!: string;
  created_at!: Date;
  updated_at!: Date;

  public static associations: {};
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(_models: Models) {
    // define association here
  }
}

export const serviceCategoryModel = (sequelize: Sequelize) => {
  ServiceCategoryModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING
    },
    alias: {
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
    modelName: 'ServiceCategory',
    tableName: 'service_category',
    timestamps: true,
    hooks: {
      beforeValidate: (serviceCategory) => {
        serviceCategory.alias = slugify(serviceCategory.title, { lower: true, trim: true });
      },
    },
  });
  return ServiceCategoryModel;
};
