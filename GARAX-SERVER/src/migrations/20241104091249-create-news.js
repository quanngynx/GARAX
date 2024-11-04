'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('News', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idNews: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      alias: {
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
      category: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      createDate: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('News');
  }
};