import { CategoryProductModel } from "@/apis/models";

export type CategoryProductsCreationRequest = Pick<
CategoryProductModel,
'name' | 'desc' | 'isParentCategory' | 'isActive' | 'imageId' | 'parentId'
>