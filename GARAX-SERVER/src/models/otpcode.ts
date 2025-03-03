'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OtpCode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OtpCode.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    otp: DataTypes.STRING,
    email: DataTypes.STRING,
    expiresAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'OtpCode',
    tableName: 'otp_codes',
    timestamps: true,
    // hooks: {
    //   beforeFind: async (options) => {
    //     const now = new Date();
    //     await sequelize.models.OtpCode.destroy({
    //       where: { expiresAt: { [sequelize.Op.lt]: new Date(now - 1 * 60 * 1000) } },
    //     });
    //   },
    // },
  });
  return OtpCode;
};
