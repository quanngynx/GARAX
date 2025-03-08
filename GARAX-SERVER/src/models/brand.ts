'use strict';
import { DataTypes, Optional, Model, Sequelize } from "sequelize";
import { Brand, Models } from "@/common/interfaces";

export type BrandCreationAttributes = Optional<
  Brand,
  'id' | 'name'
>;

export class BrandModel
extends Model<BrandCreationAttributes>
implements Brand {
  id!: string;
  idBrand!: string;
  name!: string;
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

export const brandModel = (sequelize: Sequelize): typeof BrandModel => {
  BrandModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idBrand: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
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
    modelName: 'Brand',
    tableName: 'brands',
    timestamps: true
  });
  return BrandModel;
};
