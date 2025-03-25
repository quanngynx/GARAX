'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('otp_codes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    otp: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    expiresAt: {
      type: Sequelize.DATE
    }
  });
}
export async function down(queryInterface, _Sequelize) {
  await queryInterface.dropTable('otp_codes');
}
