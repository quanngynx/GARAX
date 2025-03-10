'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface: QueryInterface, Sequelize: any) {
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
}
export async function down(queryInterface: QueryInterface, _Sequelize: any) {
  await queryInterface.dropTable('key_tokens');
}
