const { Sequelize, DataTypes, Model } = require('sequelize');

const dbConfig = require('../config/config.mysql');

module.exports = (sequelize, DataTypes) => {
  class keyTokenModel extends Model {
    static associate(models) {}
  }
  keyTokenModel.init(
    {
      // Model attributes are defined here
      userId: {
        type: DataTypes.STRING,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      partnerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'partners',
          key: 'id',
        },
      },
      adminId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'admins',
          key: 'id',
        },
      },
      privateKey: {
        type: DataTypes.STRING,
      },
      publicKey: {
        type: DataTypes.STRING,
      },
      refreshTokensUsed: {
        type: DataTypes.JSON,
        defaultValue: [],
      },
      refreshToken: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'keyTokenModel',
      timestamps: true
    }
  );
  return keyTokenModel;
};
