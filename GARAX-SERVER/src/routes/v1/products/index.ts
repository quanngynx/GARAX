import express from 'express'
import { asyncHandler } from '@/middlewares';
import { ProductController } from '@/controllers'

export const routerProduct = express.Router();

const productController = ProductController.default;

/**
 * @description authorization
 * @method GET : any user
 * @method POST : staff, admin
 * @method PUT : staff, admin
 * @method PATCH : staff, admin
 * @method DELETE : admin
 */

routerProduct.get('/products', asyncHandler(productController.getAllProducts))
routerProduct.get('/products/without-options', asyncHandler(productController.getAllProductsWithoutOptions))
routerProduct.get('/products/:id', asyncHandler(productController.getProductById))
routerProduct.get('/product-variant-value/:productId', asyncHandler(productController.getProductVariantValueByIdProduct))

routerProduct.post('/products', asyncHandler(productController.addNewProduct))
routerProduct.post('/products/many', asyncHandler(productController.addManyNewProduct))

routerProduct.put('/products/:id', asyncHandler(productController.updateProductById))
routerProduct.patch('/products/:id', asyncHandler(productController.updatePartProductById))

routerProduct.delete('/products', asyncHandler(productController.deleteAllProduct))
routerProduct.delete('/products/:id', asyncHandler(productController.deleteProductById))

routerProduct.get('/products/pub', asyncHandler(productController.findAllProductPub))
routerProduct.get('/products', asyncHandler(productController.findAllProduct))
