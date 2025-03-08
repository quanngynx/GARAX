'use strict';
import { Models } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';
import { Video } from '../common/interfaces/models/video.interface';

export type VideoCreationAttributes = Optional<
  Video,
  'id'
>;

export class VideoModel
extends Model<Video, VideoCreationAttributes>
implements Video {
  public id!: string;
  public directoryPath!: string;
  public alt!: string;
  public original!: string;
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

export const videoModel = (sequelize: Sequelize) => {
  VideoModel.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    directoryPath: DataTypes.STRING,
    alt: DataTypes.STRING,
    original: DataTypes.STRING,
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
    modelName: 'Video',
    tableName: 'videos',
    timestamps: true
  });
  return VideoModel;
};
