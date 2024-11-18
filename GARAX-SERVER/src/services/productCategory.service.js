'use strict';

const slugify = require('slugify');

const { ProductCategory } = require('../models');

const { BadRequestError } = require('../middlewares/error.response');

class ProductCategoryService {
  static async addNewCategory({ title, description = null }) {
    console.log('title::', title)

    // const isExist = await ProductCategory.findOne({ where: { title: title } });
    // console.log('isExist::', isExist)
    // if (isExist) throw new BadRequestError('Product category is exist!!!');

    try {
      const newProductCate = await ProductCategory.create({
        title: title,
        description: description
      });

      console.log('newProductCate:', newProductCate);
      if(!newProductCate) throw new BadRequestError('error::create new Product')

      return newProductCate;
    } catch (error) {
      console.error('Error in addNewCategory:', error.message);
    throw error; // Propagate error to upper layer
    }
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
