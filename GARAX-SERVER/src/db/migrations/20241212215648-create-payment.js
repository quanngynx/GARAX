'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('payments', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		amount: {
			type: Sequelize.STRING,
		},
		desc: {
			type: Sequelize.STRING,
		},
		orderId: {
			type: Sequelize.INTEGER,
		},
		currencyId: {
			type: Sequelize.INTEGER,
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
	await queryInterface.dropTable('payments');
}
