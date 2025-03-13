export interface ProductVariantValues {
  id: string;
  price: number;
  oldPrice: number
  stock: number;
  sold: number;
  sku: string;
  manufacturingDate: BigInt;
  productId: string;
  addOverSpecsId: string;
  addOverDetailSpecsId: string;
  createBy: Date;
  updateBy: Date;
  createdAt: Date;
  updatedAt: Date;
}
