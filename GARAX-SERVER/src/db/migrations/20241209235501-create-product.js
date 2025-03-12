'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: { type: Sequelize.STRING },
      slug: {
        type: Sequelize.STRING,
        unique: true,
      },
      desc: { type: Sequelize.JSON },
      views: { type: Sequelize.FLOAT },
      tags: {
        type: Sequelize.ENUM('new', 'hot'),
        defaultValue: 'new'
      },
      manufacturingDate: { type: Sequelize.BIGINT },
      minPrice: {
        type: Sequelize.INTEGER,
        validate: {
          min: 1000,
        },
      },
      maxPrice: {
        type: Sequelize.INTEGER,
        validate: {
          min: 1000,
        },
      },
      categoryId: { type: Sequelize.STRING },
      subCategoryId: { type: Sequelize.STRING },
      sub2CategoryId: { type: Sequelize.STRING },
      sub3CategoryId: { type: Sequelize.STRING },
      videoId: { type: Sequelize.STRING },
      brandId: { type: Sequelize.STRING },
      status: {
        type: Sequelize.ENUM('publish', 'unpublish'),
        defaultValue: 'publish'
      },
      createBy: { type: Sequelize.STRING },
      updateBy: { type: Sequelize.STRING },
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
export async function down(queryInterface, _Sequelize) {
  await queryInterface.dropTable('products');
}
