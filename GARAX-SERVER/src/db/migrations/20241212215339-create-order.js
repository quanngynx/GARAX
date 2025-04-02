/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('orders', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    fullname: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    isReceiveAtStore: {
      type: Sequelize.BOOLEAN
    },
    paymentMethod: {
      type: Sequelize.ENUM('COD', 'PAYOS', 'PRESSPAY'),
      defaultValue: 'COD'
    },
    paymentStatus: {
      type: Sequelize.ENUM('PENDING', 'PAID', 'FAILED', 'CANCELLED', 'REFUNDED', 'PROCESSING'),
      defaultValue: 'PENDING'
    },
    subTotalFromProd: {
      type: Sequelize.FLOAT
    },
    shippingFee: {
      type: Sequelize.FLOAT
    },
    discount: {
      type: Sequelize.FLOAT
    },
    total: {
      type: Sequelize.FLOAT
    },
    userId: {
      type: Sequelize.INTEGER
    },
    addressId: {
      type: Sequelize.INTEGER
    },
    cartId: {
      type: Sequelize.INTEGER
    },
    createdBy: {
      type: Sequelize.STRING
    },
    updatedBy: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('orders');
}
