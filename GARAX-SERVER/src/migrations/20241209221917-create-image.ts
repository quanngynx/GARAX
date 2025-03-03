'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      coverImage: {
        type: Sequelize.STRING
      },
      alt: {
        type: Sequelize.STRING
      },
      original: {
        type: Sequelize.STRING
      },
      typeSize: {
        type: Sequelize.ENUM('small', 'medium', 'large')
      },
      typeImage: {
        type: Sequelize.STRING
      },
      productId: {
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
    await queryInterface.dropTable('images');
  }
};
