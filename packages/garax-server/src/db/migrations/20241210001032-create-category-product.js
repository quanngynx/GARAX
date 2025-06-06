/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('category_products', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    slug: {
      type: Sequelize.STRING
    },
    desc: {
      type: Sequelize.JSON
    },
    countProduct: {
      type: Sequelize.INTEGER
    },
    isParentCategory: {
      type: Sequelize.BOOLEAN
    },
    isActive: {
      type: Sequelize.BOOLEAN
    },
    imageId: {
      type: Sequelize.INTEGER
    },
    parentId: {
      type: Sequelize.INTEGER
    },
    categoryId: {
      type: Sequelize.INTEGER
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
  await queryInterface.dropTable('category_products');
}
