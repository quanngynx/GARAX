import sequelize from 'sequelize';
import { db } from '@/models';

export const destroyOtp = async () => {
  try {
    const now = new Date();
    return await db.OtpCode.destroy({
      where: { expiresAt: { [sequelize.Op.lt]: now } }
    });
    // console.log(data)
  } catch (error) {
    console.error('Error deleting expired OTP::', error);
  }
};
