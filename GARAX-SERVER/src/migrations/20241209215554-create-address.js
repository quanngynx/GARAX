'use strict';

const { COMMON } = require('../constants')

const typeofAddress = COMMON.ADDRESS
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.ENUM(typeofAddress.HOME, typeofAddress.OFFICE),
        defaultValue: typeofAddress.HOME
      },
      streetRoad: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      wardOrCommune: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      district: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
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
    await queryInterface.dropTable('addresses');
  }
};
