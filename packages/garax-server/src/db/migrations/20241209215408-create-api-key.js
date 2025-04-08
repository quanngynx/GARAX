/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('api_keys', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    key: {
      type: Sequelize.STRING,
      unique: true
    },
    isActive: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    itemPermissionId: {
      type: Sequelize.INTEGER
    },
    permissionId: {
      type: Sequelize.INTEGER
    },
    createdBy: {
      type: Sequelize.STRING,
      defaultValue: ''
    },
    updatedBy: {
      type: Sequelize.STRING,
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
export async function down(queryInterface, _Sequelize) {
  await queryInterface.dropTable('api_keys');
}
