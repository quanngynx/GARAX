'use strict';
import { Models, OtpCode } from '@/common/interfaces';
import { DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type OtpCodeCreationAttributes = Optional<OtpCode, 'id' | 'expiresAt'>;

export class OtpCodeModel extends Model<OtpCode, OtpCodeCreationAttributes> {
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

export const otpCodeModel = (sequelize: Sequelize) => {
  OtpCodeModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      otp: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      expiresAt: {
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'OtpCode',
      tableName: 'otp_codes',
      timestamps: true
      // hooks: {
      //   beforeFind: async (options) => {
      //     const now = new Date();
      //     await sequelize.models.OtpCode.destroy({
      //       where: { expiresAt: { [sequelize.Op.lt]: new Date(now - 1 * 60 * 1000) } },
      //     });
      //   },
      // },
    }
  );
  return OtpCodeModel;
};
export default otpCodeModel;
