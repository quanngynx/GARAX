'use strict';

const slugify = require('slugify');

const ProductCategory = require('../models');

const { BadRequestError } = require('../middlewares/error.response');
// const { TableHints } = require('sequelize');

class ProductCategoryService {
  static async addNewCategory({ title, alias }) {
    const isExist = ProductCategory.findOne({ where: { title: title } });

    if (isExist) throw new BadRequestError('Product category is exist!!!');

    const newProductCate = await ProductCategory.create({
      title: title,
      alias: alias,
    });

    console.log('newProductCate:', newProductCate);

    return newProductCate;
  }

  static async getAllCategory() {

    const allProductCate = await ProductCategory.findAll();

    console.log('AllProductCate:', allProductCate);

    return allProductCate;
  }

  static async updateTitleCategory({ title }) {
    const isExist = ProductCategory.findOne({ where: { title: title } });

    if (!isExist) throw new BadRequestError('Product category is not exist!!!');

    const alias = slugify(title, {
      lower: true,
      strict: true,
      locale: 'vi',
    });

    const newProductCate = await ProductCategory.update({
      title: title,
      alias: alias,
    });

    console.log('newProductCate:', newProductCate);

    return newProductCate;
  }

  static async deleteTitleCategoryByTitle({ title }) {
    const isExist = ProductCategory.findOne({ where: { title: title } });

    if (!isExist) throw new BadRequestError('Product category is not exist!!!');

    return await ProductCategory.destroy({ where: { title: title } });
  }

  static async deleteAllTitleCategory({ confirm }) {
    return confirm ? await ProductCategory.destroy({ truncate: true }) : null;
  }
}

module.exports = ProductCategoryService;
