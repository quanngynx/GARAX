'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('NewsCategories', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    idNewsCategory: {
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
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('NewsCategories');
}
