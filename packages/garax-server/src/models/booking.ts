import { Models, Booking } from '@/common/interfaces';
import { Association, DataTypes, Model, Optional, Sequelize } from 'sequelize';

export type BookingCreationAttributes = Optional<Booking, 'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'>;

export class BookingModel extends Model<BookingCreationAttributes> {
  static associate(_models: Models) {
    // define association here
  }
}

export const bookingModel = (sequelize: Sequelize): typeof BookingModel => {
  BookingModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING
      },
      allDay: {
        type: DataTypes.STRING
      },
      start: {
        type: DataTypes.STRING
      },
      end: {
        type: DataTypes.STRING
      },
      desc: {
        type: DataTypes.JSON
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
      modelName: 'Booking',
      tableName: 'bookings',
      timestamps: true
    }
  );
  return BookingModel;
};
export default bookingModel;
