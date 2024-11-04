'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idProduct: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      alias: {
        type: Sequelize.STRING
      },
      productCode: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      detail: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      originalPrice: {
        type: Sequelize.DECIMAL
      },
      price: {
        type: Sequelize.DECIMAL
      },
      priceSale: {
        type: Sequelize.DECIMAL
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      productCategoryId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Products');
  }
};
