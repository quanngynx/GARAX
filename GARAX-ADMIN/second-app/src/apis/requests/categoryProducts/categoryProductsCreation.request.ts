import { CategoryProduct } from "@/apis/models";

export type CategoryProductsCreationRequest = Pick<
CategoryProduct,
'name' | 'desc' | 'isParentCategory' | 'isActive' | 'imageId' | 'parentId'
>