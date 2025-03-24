'use strict';
import { Models, NewsCategory } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

import { default as slugify } from 'slugify';

export type NewsCategoryCreationAttributes = Optional<NewsCategory, 'id'>;

export class NewsCategoryModel extends Model<NewsCategory, NewsCategoryCreationAttributes> {
  // id!: number;
  public title!: string;
  public alias!: string;
  // description!: string;
  // isActive!: string;
  // createDate!: Date;

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

export const newsCategory = (sequelize: Sequelize) => {
  NewsCategoryModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
        type: DataTypes.BOOLEAN
      },
      createDate: {
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'NewsCategory',
      tableName: 'news_category',
      timestamps: true,
      hooks: {
        beforeValidate: (news) => {
          news.alias = slugify(news.title, { lower: true, trim: true });
        }
      }
    }
  );
  return NewsCategoryModel;
};
