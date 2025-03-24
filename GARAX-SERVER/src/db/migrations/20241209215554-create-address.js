'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('addresses', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		type: {
			type: Sequelize.ENUM('home', 'office'),
			defaultValue: 'home',
		},
		streetRoad: {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: '',
		},
		wardOrCommune: {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: '',
		},
		district: {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: '',
		},
		city: {
			type: Sequelize.STRING,
			allowNull: false,
			defaultValue: '',
		},
		userId: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
	});
}
export async function down(queryInterface, Sequelize) {
	await queryInterface.dropTable('addresses');
}
