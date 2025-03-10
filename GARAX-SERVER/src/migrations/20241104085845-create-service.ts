'use strict';
import { QueryInterface } from "sequelize";
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface: QueryInterface, Sequelize: any) {
  await queryInterface.createTable('Services', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    idService: {
      type: Sequelize.INTEGER
    },
    title: {
      type: Sequelize.STRING
    },
    alias: {
      type: Sequelize.STRING
    },
    serviceCode: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    detail: {
      type: Sequelize.STRING
    },
    image: {
      type: Sequelize.STRING
    },
    originalPrice: {
      type: Sequelize.DECIMAL
    },
    price: {
      type: Sequelize.DECIMAL
    },
    priceSale: {
      type: Sequelize.DECIMAL
    },
    isActive: {
      type: Sequelize.BOOLEAN
    },
    serviceCategoryId: {
      type: Sequelize.STRING
    },
    quantity: {
      type: Sequelize.INTEGER
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
export async function down(queryInterface: QueryInterface, _Sequelize: any) {
  await queryInterface.dropTable('Services');
}
