'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KeyToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KeyToken.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    privateKey: DataTypes.TEXT,
    publicKey: DataTypes.TEXT,
    refreshToken: DataTypes.STRING,
    refreshTokenUsed: DataTypes.JSON,
    userId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KeyToken',
    tableName: 'key_tokens',
    timestamps: true
  });
  return KeyToken;
};
