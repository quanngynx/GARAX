import {
  VariantValuesModel,
  VariantKeysModel,
  VideoModel,
  AccountModel,
  AddressModel,
  ApiKeyModel,
  BrandModel,
  CartItemsModel,
  CartModel,
  CategoryProductModel,
  CurrencyModel,
  ImageModel,
  ItemPermissionModel,
  KeyTokenModel,
  NewsCategoryModel,
  NewsModel,
  OrderModel,
  OtpCodeModel,
  PaymentModel,
  PermissionModel,
  ProductModel,
  ProductVariantValuesModel,
  ServiceCategoryModel,
  ServiceModel,
  SpecificationDetailProductModel,
  SpecificationProductModel,
  AttributeValuesModel,
  ProductAttributeValuesModel
} from '@/models';
import { OrderDetailsModel } from '@/models/orderdetails';
import { Model, Sequelize } from 'sequelize';

export interface Models extends Model {
  Account: typeof AccountModel;
  Address: typeof AddressModel;
  ApiKey: typeof ApiKeyModel;
  Brand: typeof BrandModel;
  Cart: typeof CartModel;
  CartItems: typeof CartItemsModel;
  CategoryProduct: typeof CategoryProductModel;
  Currency: typeof CurrencyModel;
  Image: typeof ImageModel;
  ItemPermission: typeof ItemPermissionModel;
  KeyToken: typeof KeyTokenModel;
  News: typeof NewsModel;
  NewsCategory: typeof NewsCategoryModel;
  Order: typeof OrderModel;
  OrderDetails: typeof OrderDetailsModel;
  OtpCode: typeof OtpCodeModel;
  Payment: typeof PaymentModel;
  Permission: typeof PermissionModel;
  Product: typeof ProductModel;
  ProductVariantValues: typeof ProductVariantValuesModel;
  VariantKeys: typeof VariantKeysModel;
  VariantValues: typeof VariantValuesModel;
  AttributeValues: typeof AttributeValuesModel;
  ProductAttributeValues: typeof ProductAttributeValuesModel;
  Service: typeof ServiceModel;
  ServiceCategory: typeof ServiceCategoryModel;
  SpecificationDetailProduct: typeof SpecificationDetailProductModel;
  SpecificationProduct: typeof SpecificationProductModel;
  Video: typeof VideoModel;
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
}
