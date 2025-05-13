/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('bookings', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    allDay: {
      type: Sequelize.STRING
    },
    start: {
      type: Sequelize.STRING
    },
    end: {
      type: Sequelize.STRING
    },
    desc: {
      type: Sequelize.STRING
    },
    createdBy: {
      type: Sequelize.STRING
    },
    updatedBy: {
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
  await queryInterface.dropTable('bookings');
}
