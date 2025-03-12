'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('item_permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      itemKeyAccept: {
        type: Sequelize.STRING
      },
      itemValueAccept: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      permissionId: {
        type: Sequelize.STRING
      },
    });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('item_permissions');
}
