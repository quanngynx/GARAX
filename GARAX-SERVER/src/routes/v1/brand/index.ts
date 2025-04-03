import express from 'express';
import { asyncHandler } from '@/middlewares';
import { BrandController } from '@/controllers';

export const routerBrand = express.Router();

const brandController = BrandController.default;
routerBrand.get('/brands/all', asyncHandler(brandController.getAllBrand));
// routerBrand.get('/products/:id', asyncHandler(brandController.getProductById));

routerBrand.post('/brands', asyncHandler(brandController.addNewBrand));

routerBrand.get(
  '/brands/query',
  // '/products/query/:filters.name/:filters.brand/:search.field/:search.keyword/:sort.field/:sort.order/:pagination.page/:pagination.limit',
  /*              └─────┬──────────────────────┘└───┬────────────────────────┘└─────┬────────────────┘└─────┬─────────────────────────┘
   *                    │                           │                               │                       pagination
   *                    │                           │                               sort
   *                    │                           search
   *                   filters
   */
  asyncHandler(brandController.getAllBrandsByQueryOptions)
);
