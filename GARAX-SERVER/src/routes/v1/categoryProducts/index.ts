import express from 'express';
import { asyncHandler } from '@/middlewares';
import { ProductCategoryController } from '@/controllers';

export const routerCategoryProduct = express.Router();

const productCategoryController = ProductCategoryController.default;
routerCategoryProduct.get('/category-product/all', asyncHandler(productCategoryController.getAllCategory));
// routerCategoryProduct.get('/products/:id', asyncHandler(productCategoryController.getProductById));

routerCategoryProduct.post('/category-product', asyncHandler(productCategoryController.addNewCategory));

// routerCategoryProduct.put('/products/:id', asyncHandler(productCategoryController.updateProductById));
routerCategoryProduct.patch('/category-product/:id', asyncHandler(productCategoryController.updateTitleCategory));

routerCategoryProduct.delete('/category-product', asyncHandler(productCategoryController.deleteTitleCategoryByTitle));
routerCategoryProduct.delete('/category-product/:id', asyncHandler(productCategoryController.deleteTitleCategoryByTitle));

// routerCategoryProduct.get('/products/pub', asyncHandler(productCategoryController.findAllProductPub));
// routerCategoryProduct.get('/products', asyncHandler(productCategoryController.findAllProduct));
