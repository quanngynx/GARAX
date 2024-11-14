'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderProducts', {
      idOrderProduct: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUser: {
        type: Sequelize.INTEGER
      },
      idCartProduct: {
        type: Sequelize.INTEGER
      },
      idCartItemsProduct: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.ENUM('pending','confirmed','shipping','completed','cancelled'),
        defaultValue: 'pending'
      },
      paymentMethod: {
        type: Sequelize.ENUM('cod','presspay','payos','payoneer'),
        defaultValue: 'cod'
      },
      paymentStatus: {
        type: Sequelize.ENUM('pending','paid','cancelled'),
        defaultValue: 'pending'
      },
      subTotal: {
        type: Sequelize.FLOAT
      },
      shippingFee: {
        type: Sequelize.FLOAT
      },
      total: {
        type: Sequelize.FLOAT
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderProducts');
  }
};
