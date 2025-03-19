'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('variant_values', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.STRING,
      },
      variantKeyId: {
        type: Sequelize.STRING,
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
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('variant_values');
}
