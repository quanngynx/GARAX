import dayjs from "dayjs";

export type TValuesMediaProduct = {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    dimensions: string;
    weight: 0.1;
    description: string;
    productName: string;
    brandName: string;
    regularPrice: 1000;
    salePrice: 800;
    productSchedule: dayjs.Dayjs[];
    productSKU: string;
    qty: number;
};

export type TValuesInforProduct = {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    productType: [];
    dimensions: string;
    weight: 0.1;
    description: string;
    productName: string;
    brandName: string;
    category: [];
    regularPrice: 1000;
    salePrice: 800;
    productSchedule: dayjs.Dayjs[];
    promoType: number;
    stockStatus: [];
    productSKU: string;
    qty: number;
    unit: [];
};
