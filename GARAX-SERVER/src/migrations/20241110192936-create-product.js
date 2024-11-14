'use strict';
/** @type {import('sequelize-cli').Migration} */


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      idProduct: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idBrand: {
        type: Sequelize.INTEGER
      },
      nameProduct: {
        type: Sequelize.STRING
      },
      alias: {
        type: Sequelize.STRING
      },
      thumble: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      originalPrice: {
        type: Sequelize.INTEGER
      },
      sold: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      status: {
        type: Sequelize.ENUM('publish', 'unpublish'),
        defaultValue: 'publish'
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
