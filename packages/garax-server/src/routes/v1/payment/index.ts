import express from 'express';
import { asyncHandler } from '@/middlewares';
import { PaymentController } from '@/controllers';

export const routerPayment = express.Router();
const paymentController = PaymentController.default;

routerPayment.get(
  '/transactions/query',
  // '/products/query/:filters.name/:filters.brand/:search.field/:search.keyword/:sort.field/:sort.order/:pagination.page/:pagination.limit',
  /*              └─────┬──────────────────────┘└───┬────────────────────────┘└─────┬────────────────┘└─────┬─────────────────────────┘
   *                    │                           │                               │                       pagination
   *                    │                           │                               sort
   *                    │                           search
   *                   filters
   */
  asyncHandler(paymentController.getAllTransactionsByQueryOptions)
);

// router.get('/products', AsyncHandler(ProductController.getAllProducts))
// router.get('/products/:id', AsyncHandler(ProductController.getProductById))

// router.post('/products', AsyncHandler(ProductController.addNewProduct))

// router.put('/products/:id', AsyncHandler(ProductController.updateProductById))
// router.patch('/products/:id', AsyncHandler(ProductController.updatePartProductById))

// router.delete('/products', AsyncHandler(ProductController.deleteAllProduct))
// router.delete('/products/:id', AsyncHandler(ProductController.deleteProductById))

// router.get('/products/pub', AsyncHandler(ProductController.findAllProductPub))
// router.get('/products', AsyncHandler(ProductController.findAllProduct))
