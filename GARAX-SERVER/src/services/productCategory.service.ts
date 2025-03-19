"use strict";
// import slugify from 'slugify';
import { db } from '@/models';
import { BadRequestError, InternalServerError } from '@/middlewares';
import { AddNewCategoryRequest } from '@/common/requests/productCategory';

export class ProductCategoryService {
  static async addNewCategory({
    name,
    desc = '',
    isParentCategory,
    isActive,
    imageId,
    parentId
  } : AddNewCategoryRequest) {
    console.log('name::', name);

    // const isExist = await db.ProductCategory.findOne({ where: { title: title } });
    // console.log('isExist::', isExist)
    // if (isExist) throw new BadRequestError('Product category is exist!!!');

    try {
      const newProductCate = await db.CategoryProduct.create({
        name: name,
        desc: desc,
        slug: '',
        countProduct: 0,
        isParentCategory: isParentCategory || false,
        isActive: isActive || true,
        imageId: imageId || '',
        parentId: parentId || '',
      });

      console.log('newProductCate:', newProductCate);
      if(!newProductCate) throw new BadRequestError('error::create new Product')

      return newProductCate;
    } catch (error) {
      console.error('Error in addNewCategory:', error);
      throw new InternalServerError(`${error}`);
    }
  }

  static async getAllCategory() {
    const allProductCate = await db.CategoryProduct.findAll();

    console.log('AllProductCate:', allProductCate);

    return allProductCate;
  }

  static async updateTitleCategory(name: string) {
    const isExist = db.CategoryProduct.findOne({ where: { name: name } });

    if (!isExist) throw new BadRequestError('Product category is not exist!!!');

    // const alias = slugify(name, {
    //   lower: true,
    //   strict: true,
    //   locale: 'vi',
    // });

    const newProductCate = await db.CategoryProduct.update({
      name: name,
    },
    {
      where: {

      }
    }
  );

    console.log('newProductCate:', newProductCate);

    return newProductCate;
  }

  static async deleteTitleCategoryByTitle(name: string) {
    const isExist = db.CategoryProduct.findOne({ where: { name: name } });

    if (!isExist) throw new BadRequestError('Product category is not exist!!!');

    return await db.CategoryProduct.destroy({ where: { name: name } });
  }

  static async deleteAllTitleCategory({ confirm }: { confirm: boolean }) {
    return confirm ? await db.CategoryProduct.destroy({ truncate: true }) : null;
  }
}

