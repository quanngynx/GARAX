'use strict';
import { Models, Service } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

import { default as slugify } from 'slugify';

export type ServiceCreationAttributes = Optional<Service, 'id' | 'createdAt' | 'updatedAt'>;

export class ServiceModel extends Model<Service, ServiceCreationAttributes> {
  // public id!: number;
  public title!: string;
  public alias!: string;
  // public serviceCategoryId!: string;
  // public serviceImageId!: string;
  // public description!: string;
  // public isActive!: string;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;

  // public static associations: {};
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static associate(_models: Models) {
    // define association here
  }
}

export const serviceModel = (sequelize: Sequelize) => {
  ServiceModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      serviceCategoryId: {
        type: DataTypes.INTEGER
      },
      serviceImageId: {
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      alias: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      sequelize,
      modelName: 'Service',
      tableName: 'services',
      timestamps: true,
      hooks: {
        beforeValidate: (service) => {
          service.alias = slugify(service.title, { lower: true, trim: true });
        }
      }
    }
  );
  return ServiceModel;
};
