'use strict';
import { DataTypes, Optional, Model, Sequelize } from 'sequelize';
import { Brand, Models } from '@/common/interfaces';

export type BrandCreationAttributes = Optional<Brand, 'id' | 'createdAt' | 'updatedAt'>;

export class BrandModel extends Model<BrandCreationAttributes> {
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

export const brandModel = (sequelize: Sequelize): typeof BrandModel => {
  BrandModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
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
      modelName: 'Brand',
      tableName: 'brands',
      timestamps: true
    }
  );
  return BrandModel;
};
export default brandModel;
