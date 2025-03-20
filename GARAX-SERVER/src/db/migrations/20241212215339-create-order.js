'use strict';

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
        type: Sequelize.ENUM('')
      },
      paymentStatus: {
        type: Sequelize.ENUM('')
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
        type: Sequelize.STRING
      },
      addressId: {
        type: Sequelize.STRING
      },
      cartId: {
        type: Sequelize.STRING
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
