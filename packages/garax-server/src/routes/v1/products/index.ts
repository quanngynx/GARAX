import express from 'express';
import { asyncHandler } from '@/middlewares';
import { ProductController } from '@/controllers';

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
// #region Product
routerProduct.get('/products', asyncHandler(productController.getAllProducts));
routerProduct.get(
  '/products/query',
  // '/products/query/:filters.name/:filters.brand/:search.field/:search.keyword/:sort.field/:sort.order/:pagination.page/:pagination.limit',
  /*              └─────┬──────────────────────┘└───┬────────────────────────┘└─────┬────────────────┘└─────┬─────────────────────────┘
   *                    │                           │                               │                       pagination
   *                    │                           │                               sort
   *                    │                           search
   *                   filters
   */
  asyncHandler(productController.getAllProductsByQueryOptions)
);
routerProduct.get('/products/without-options', asyncHandler(productController.getAllProductsWithoutOptions));
routerProduct.get('/products/find', asyncHandler(productController.findAllProductByQuery));
routerProduct.get('/products/:id', asyncHandler(productController.getProductById));

routerProduct.post('/products', asyncHandler(productController.addNewProduct));
routerProduct.post('/products/many', asyncHandler(productController.addManyNewProduct));

routerProduct.put('/products/:id', asyncHandler(productController.updateProductById));

routerProduct.patch('/products/part/:id', asyncHandler(productController.updateProductById));

routerProduct.delete('/products', asyncHandler(productController.deleteAllProduct));
routerProduct.delete('/products/:id', asyncHandler(productController.deleteProductById));

routerProduct.get('/products/pub', asyncHandler(productController.findAllProductPub));
routerProduct.get('/products/spare-part/viewest/:limit', asyncHandler(productController.getViewestProductSparePart));
routerProduct.get(
  '/products/support-tools/viewest/:limit',
  asyncHandler(productController.getViewestProductSupportTools)
);
routerProduct.get('/products/others/viewest/:limit', asyncHandler(productController.getViewestProductOthers));
// #endregion Product

// #region Variant
routerProduct.get('/products-variant/:productId', asyncHandler(productController.getProductVariantValueByIdProduct));
routerProduct.put('/products-variant/:id', asyncHandler(productController.updateProductVariantById));
routerProduct.patch('/products-variant/part/:id', asyncHandler(productController.updateProductVariantById));
routerProduct.delete('/products-variant/:id', asyncHandler(productController.deleteProductVariantById));
// #endregion Variant

// #region Attribute
routerProduct.get(
  '/product-attribute/:productId',
  asyncHandler(productController.getProductAttributeValuesByIdProduct)
);
routerProduct.put('/products-attribute/:id', asyncHandler(productController.updateProductAttributeById));
routerProduct.patch('/products-attribute/part/:id', asyncHandler(productController.updateProductAttributeById));
routerProduct.delete('/products-attribute/:id', asyncHandler(productController.deleteProductAttributesById));
// #endregion Attribute
