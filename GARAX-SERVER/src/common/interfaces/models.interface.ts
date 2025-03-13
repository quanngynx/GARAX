import { VideoModel, AccountModel, AddressModel, ApiKeyModel, BrandModel, CartItemsModel, CartModel, CategoryProductModel, CurrencyModel, ImageModel, ItemPermissionModel, KeyTokenModel, NewsCategoryModel, NewsModel, OrderModel, OtpCodeModel, PaymentModel, PermissionModel, ProductModel, ProductVariantValuesModel, ServiceCategoryModel, ServiceModel, SpecificationDetailProductModel, SpecificationProductModel } from "@/models";

export interface Models {
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
  OtpCode: typeof OtpCodeModel;
  Payment: typeof PaymentModel;
  Permission: typeof PermissionModel;
  Product: typeof ProductModel;
  ProductVariantValues: typeof ProductVariantValuesModel;
  Service: typeof ServiceModel;
  ServiceCategory: typeof ServiceCategoryModel;
  SpecificationDetailProduct: typeof SpecificationDetailProductModel;
  SpecificationProduct: typeof SpecificationProductModel;
  Video: typeof VideoModel;
}
