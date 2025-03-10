'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface: QueryInterface, Sequelize: any) {
    await queryInterface.createTable('Services', {
      idService: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serviceCategoryId: {
        type: Sequelize.INTEGER
      },
      serviceImageId: {
        type: Sequelize.INTEGER
      },
      serviceDetailId: {
        type: Sequelize.INTEGER
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
  }
export async function down(queryInterface: QueryInterface, _Sequelize: any) {
    await queryInterface.dropTable('Services');
  }
