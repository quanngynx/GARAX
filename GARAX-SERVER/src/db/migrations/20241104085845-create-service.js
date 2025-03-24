'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('Services', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		title: {
			type: Sequelize.STRING,
		},
		alias: {
			type: Sequelize.STRING,
		},
		serviceCategoryId: {
			type: Sequelize.STRING,
		},
		serviceImageId: {
			type: Sequelize.STRING,
		},
		description: {
			type: Sequelize.STRING,
		},
		// detail: {
		//   type: Sequelize.STRING
		// },
		// originalPrice: {
		//   type: Sequelize.DECIMAL
		// },
		// price: {
		//   type: Sequelize.DECIMAL
		// },
		// priceSale: {
		//   type: Sequelize.DECIMAL
		// },
		isActive: {
			type: Sequelize.BOOLEAN,
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
	await queryInterface.dropTable('Services');
}
