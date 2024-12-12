'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('product_variant_values', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      oldPrice: {
        type: Sequelize.INTEGER
      },
      stock: {
        type: Sequelize.INTEGER
      },
      sold: {
        type: Sequelize.INTEGER
      },
      sku: {
        type: Sequelize.STRING
      },
      manufacturingDate: {
        type: Sequelize.BIGINT
      },
      productId: {
        type: Sequelize.STRING
      },
      addOverSpecsId: {
        type: Sequelize.STRING
      },
      addOverDetailSpecsId: {
        type: Sequelize.STRING
      },
      createBy: {
        type: Sequelize.STRING
      },
      updateBy: {
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('product_variant_values');
  }
};
