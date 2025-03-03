'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('key_tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      privateKey: {
        type: Sequelize.TEXT
      },
      publicKey: {
        type: Sequelize.TEXT
      },
      refreshToken: {
        type: Sequelize.STRING
      },
      refreshTokenUsed: {
        type: Sequelize.JSON
      },
      userId: {
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
    await queryInterface.dropTable('key_tokens');
  }
};
