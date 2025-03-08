'use strict';
import { Models, Service } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

import { default as slugify } from "slugify";

export type ServiceCreationAttributes = Optional<
  Service,
  'id'
>;

export class ServiceModel
extends Model<Service, ServiceCreationAttributes>
implements Service {
  public id!: string;
  public serviceCategoryId!: string;
  public serviceImageId!: string;
  public title!: string;
  public alias!: string;
  public description!: string;
  public isActive!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

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

export const serviceModel = (sequelize: Sequelize) => {
  ServiceModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    serviceCategoryId: DataTypes.INTEGER,
    serviceImageId: DataTypes.INTEGER,
    // serviceDetailId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    alias: DataTypes.STRING,
    description: DataTypes.STRING,
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
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
    modelName: 'Service',
    timestamps: true,
    hooks: {
      beforeValidate: (service) => {
        service.alias = slugify(service.title, { lower: true, trim: true });
      },
    },
  });
  return ServiceModel;
};
