import { PRODUCT_STATUS, PRODUCT_TAG } from '@/apis/constants';
import { AttributeItems, ProductCreationRequest, VariantItems, VariantValueItems } from '@/apis/requests/products';
import * as yup from 'yup';

const TAG_VALUES: PRODUCT_TAG[] = ['test', 'abc', 'all'];
const STATUS_VALUES: PRODUCT_STATUS[] = ['publish', 'draft', 'all'];

// const attributeItemSchema: yup.ObjectSchema<AttributeItems> = yup.object({
//     key: yup.string().required('Key is required'),
//     value: yup.string().required('Value is required'),
// }).required();

// const variantItemSchema: yup.ObjectSchema<VariantItems> = yup.object({
//     key: yup.string().required('Key is required'),
//     values: yup.array().of(yup.string().required()).min(1, 'At least one value is required'),
// });

// const variantValueItemSchema: yup.ObjectSchema<VariantValueItems> = yup.object({
//     price: yup.number().required('Price is required').min(0),
//     oldPrice: yup.number().nullable().min(0),
//     stock: yup.number().required('Stock is required').min(0),
//     variantCombination: yup.array().of(yup.string().required()).min(1),
// });

export interface ProductCreationFormState 
extends Omit<ProductCreationRequest, 'attributes' | 'variants' | 'variantValues'> {
    attributes: Partial<AttributeItems[]>;
    variants: Partial<VariantItems[]>;
    variantValues: Partial<VariantValueItems[]>;
}

export const productCreationSchema: yup.ObjectSchema<
    Omit<ProductCreationRequest, 'desc'>
> = yup.object({
    name: yup.string().required(),
    // desc: yup.optional(),
    views: yup.number().min(0).default(0),
    tags: yup.mixed<PRODUCT_TAG>().oneOf(TAG_VALUES, 'Invalid tag').required('Tag is required'),
    manufacturingDate: yup
        .mixed<bigint>()
        .test(
            'is-bigint',
            'Manufacturing date must be a bigint',
            value => typeof value === 'bigint'
        )
        .required('Manufacturing date is required'),
    minPrice: yup.number().required().min(0),
    maxPrice: yup.number().required().min(0),
    rate: yup.number().min(0).max(5).default(0),
    totalRate: yup.number().min(0).default(0),
    totalSold: yup.number().min(0).default(0),
    categoryId: yup.string().required(),
    subCategoryId: yup.string().nullable(),
    sub2CategoryId: yup.string().nullable(),
    sub3CategoryId: yup.string().nullable(),
    videoId: yup.string().nullable(),
    brandId: yup.string().nullable(),
    status: yup.mixed<PRODUCT_STATUS>().oneOf(STATUS_VALUES, 'Invalid status').required('status is required'),
    createdBy: yup.date().required(),
    updatedBy: yup.date().required(),

    attributes: yup.array().required(),
    variants: yup.array().required(),
    variantValues: yup.array().required(),
});