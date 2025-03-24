'use strict';
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
	await queryInterface.createTable('key_tokens', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER,
		},
		privateKey: {
			type: Sequelize.TEXT,
		},
		publicKey: {
			type: Sequelize.TEXT,
		},
		refreshToken: {
			type: Sequelize.STRING,
		},
		refreshTokenUsed: {
			type: Sequelize.JSON,
		},
		userId: {
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
	await queryInterface.dropTable('key_tokens');
}
