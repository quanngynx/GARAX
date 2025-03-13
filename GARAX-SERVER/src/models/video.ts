'use strict';
import { Models } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { Video } from '../common/interfaces/models/video.interface';

export type VideoCreationAttributes = Optional<
  Video,
  'id' | 'createdAt' | 'updatedAt'
>;

export class VideoModel
extends Model<Video, VideoCreationAttributes> {
  // public id!: string;
  // public directoryPath!: string;
  // public alt!: string;
  // public original!: string;
  // public readonly createdAt!: Date;
  // public readonly updatedAt!: Date;

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

export const videoModel = (sequelize: Sequelize) => {
  VideoModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    directoryPath: {
      type: DataTypes.STRING
    },
    alt: {
      type: DataTypes.STRING
    },
    original: {
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
    modelName: 'Video',
    tableName: 'videos',
    timestamps: true
  });
  return VideoModel;
};
