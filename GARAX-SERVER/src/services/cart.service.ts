/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty-pattern */
'use strict';
import { AddToCartRequest, CheckoutCartRequest, CreateUserCartRequest } from '@/common/requests/cart';

import { db } from '../models';
import { BadRequestError, InternalServerError, NotFoundError } from '@/middlewares';
import { createCart } from '@/common/repositories';

export class CartService {
  static async createUserCart({ userId }: CreateUserCartRequest) {
    const findCartExistByUser = await db.Cart.findAll({
      where: {
        userId: userId
      }
    });

    if (!findCartExistByUser) {
      createCart(userId);
    }
    return;
  }

  static async addToCart({ userId, productVariantItems }: AddToCartRequest) {
    const isExistCart = await db.Cart.findOne({
      where: {
        userId: userId
      }
    });

    // console.log('isExistCart::', isExistCart?.dataValues.id);

    if (!isExistCart) {
      const createNewCart = await createCart(userId);
      // const isExistProductVariant = await db.CartItems.findOne({
      //   where: {
      //     cartId: createNewCart.newCart.dataValues.id,
      //     productVariantId: productVariantItems.productVariantId
      //   }
      // });

      // console.log('createNewCart id::', createNewCart.newCart.id);

      await db.CartItems.upsert({
        cartId: createNewCart.newCart.dataValues.id || 0,
        productVariantId: productVariantItems.productVariantId,
        // qty: (isExistProductVariant?.dataValues.qty || 0) + (productVariantItems.qty || 1),
        qty: productVariantItems.qty || 1
      });

      return {
        newCart: createNewCart.newCart,
        newItemsCart: db.CartItems.findAll({
          where: { cartId: createNewCart.newCart.dataValues.id }
        })
      };
    }

    // console.log("isExistCart::", isExistCart)
    const isExistProductVariant = await db.CartItems.findOne({
      where: {
        cartId: isExistCart.dataValues.id,
        productVariantId: productVariantItems.productVariantId
      }
    });

    if (isExistProductVariant) {
      await db.CartItems.update(
        {
          // qty: isExistProductVariant.dataValues.qty + (productVariantItems.qty || 1)
          qty: productVariantItems.qty
        },
        {
          where: {
            cartId: isExistCart.dataValues.id,
            productVariantId: productVariantItems.productVariantId
          }
        }
      );
    } else {
      await db.CartItems.create({
        cartId: isExistCart.dataValues.id || 0,
        productVariantId: productVariantItems.productVariantId,
        qty: productVariantItems.qty || 1
      });
    }

    const getAllCartItems = await db.CartItems.findAll({
      where: {
        cartId: isExistCart.dataValues.id
      }
    });

    if (!getAllCartItems) {
      throw new NotFoundError(`Không thể lấy sản phẩm trong giỏ hàng :${isExistCart.dataValues.id}:`);
    }

    return {
      isExistCart,
      cartItems: getAllCartItems
    };
  }

  static async checkoutCart({
    cartId,
    total,
    isReceiveAtStore,
    shippingFee,
    discount,
    paymentMethod,
    paymentStatus,
    addressId
  }: CheckoutCartRequest) {
    /**
     * 1. init transaction
     */
    const transaction = await db.sequelize.transaction();
    try {
      /**
       * 2. get info cart
       */
      const getInfoCart = await db.Cart.findByPk(cartId, {
        include: [
          {
            model: db.CartItems,
            as: 'cart_items',
            attributes: ['productVariantId', 'qty'],
            include: [
              {
                model: db.ProductVariantValues,
                as: 'product_variant_values',
                include: [
                  {
                    model: db.Product,
                    as: 'products',
                    attributes: ['id', 'name', 'videoId', 'desc']
                  }
                ]
              }
            ]
          }
        ],
        // raw: true,
        nest: true
      });
      // console.log("getInfoCart::", getInfoCart?.dataValues.cart_items?.reduce((acc, item) =>
      //     acc + (item.qty * (item.product_variant_values?.price || 1)), 0
      // ));
      // console.log("getInfoCart::", getInfoCart?.dataValues.cart_items);
      // console.log("getInfoCart::", JSON.stringify(getInfoCart?.dataValues.cart_items, null, 2));
      // getInfoCart?.dataValues.cart_items?.forEach((item, _index) => {
      //   // console.log(`Item ${index + 1}:`, item);
      //   // console.log(`Qty: ${item.qty}`);
      //   // console.log(`Price: ${item.dataValues?.product_variant_values?.dataValues?.price}`);
      // });
      // console.log("getInfoCart::", getInfoCart?.dataValues.userId);
      if (!getInfoCart || !getInfoCart.dataValues.cart_items?.length) {
        throw new BadRequestError(`Giỏ hàng :${cartId}: không tồn tại hoặc giỏ hàng trống`);
      }

      const calculatedTotal = getInfoCart.dataValues.cart_items?.reduce((acc: number, item: any) => {
        const price = item.dataValues?.product_variant_values?.dataValues?.price ?? 1;
        return acc + item.dataValues.qty * price;
      }, 0);
      // console.log('=============calculatedTotal=============::', calculatedTotal);

      /**
       * 3. Add infor detail
       */

      const createNewOrder = await db.Order.create(
        {
          userId: getInfoCart?.dataValues.userId,
          cartId: 0,
          total: total || calculatedTotal,
          fullname: '', // outstanding
          phone: '', // outstanding
          isReceiveAtStore: isReceiveAtStore, // Implement payment process later
          paymentMethod: paymentMethod, // Implement payment process later
          paymentStatus: paymentStatus, // Implement payment process later
          subTotalFromProd: calculatedTotal,
          shippingFee: shippingFee,
          discount: discount,
          addressId: addressId
          // note => lack
        },
        {
          transaction
        }
      );

      console.log('=============createNewOrder=============::', createNewOrder);

      for (const item of getInfoCart.dataValues.cart_items) {
        await db.OrderDetails.create(
          {
            orderId: createNewOrder.dataValues.id,
            productVariantId: item.product_variant_values?.id || 0,
            price: item.product_variant_values?.price || 0,
            qty: item.qty
          },
          {
            transaction
          }
        );
      }

      await db.CartItems.destroy({
        where: {
          cartId: getInfoCart.dataValues.id
        }
      });

      await getInfoCart.destroy({ transaction });

      /**
       * N. Intergrate PAYOS, PRESSPAY
       */

      await transaction.commit();

      return {
        newOrder: createNewOrder
      };
    } catch (error) {
      await transaction.rollback();
      throw new InternalServerError(`Lỗi thanh toán giỏ hàng:: ${error}`);
    }
  }

  static async updateCart({}) {}

  static async deleteCart({}) {}

  static async getCartById(id: string) {
    const findCartById = await db.Cart.findByPk(id);
    if (!findCartById) {
      throw new NotFoundError(`'Không tìm thấy cart :${id}:'`);
    }

    const findAllItemsCart = await db.CartItems.findAll({
      where: {
        cartId: id
      }
    });

    if (!findAllItemsCart) {
      return findCartById;
    }

    return {
      findCartById,
      cartItems: findAllItemsCart
    };
  }

  static async listToCart({}) {}

  static async findAllNews() {}
}
