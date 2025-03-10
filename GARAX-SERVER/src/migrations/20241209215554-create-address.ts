'use strict';

import { QueryInterface } from "sequelize";

const { COMMON } = require('../constants')

const typeofAddress = COMMON.ADDRESS
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface: QueryInterface, Sequelize: any) {
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
}
export async function down(queryInterface: QueryInterface, _Sequelize: any) {
  await queryInterface.dropTable('addresses');
}
