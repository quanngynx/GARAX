// import LeftArrow from '../../assets/icons/left--vector-tiny.svg?react'
import { useState } from 'react';
import Product, { ItemAttributeProps, ItemVariantProps } from './components/product'
import RelatestListProducts from "./components/relatestListProducts";

// const contextDemo = [
//   {
//     title: "Toyota Camry New",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet ligula ornare, volutpat justo eu, molestie risus. Aenean augue ipsum, malesuada in iaculis et, tempus ac mauris. Cras tellus odio, egestas id orci sed, finibus dictum quam. Morbi hendrerit, enim in cursus suscipit, erat odio porttitor erat, vel dignissim arcu ligula id arcu. Nulla facilisi. Suspendisse eget feugiat lorem. Praesent laoreet nibh accumsan tristique sollicitudin. Curabitur tincidunt consequat ex quis consectetur. Aenean pharetra mattis arcu sit amet efficitur.",
//     proDetail: [
//       {
//         price: 12000,
//         salePrice: 10000,
//         quantity: 1,
//       },
//     ],
//   },
// ];
const btnAttributes: ItemAttributeProps[] = [
  {
    attributeId: '0',
    attributeName: 'hi'
  },
  {
    attributeId: '1',
    attributeName: 'hi'
  },
  {
    attributeId: '2',
    attributeName: 'hi'
  },
  {
    attributeId: '3',
    attributeName: 'hi'
  },
  {
    attributeId: '4',
    attributeName: 'hi'
  },
];

const btnVariants: ItemVariantProps[] = [
  {
    variantId: '0',
    variantName: 'hi'
  },
  {
    variantId: '1',
    variantName: 'hi'
  },
  {
    variantId: '2',
    variantName: 'hi'
  },
  {
    variantId: '3',
    variantName: 'hi'
  },
  {
    variantId: '4',
    variantName: 'hi'
  },
];

export function CheckoutPage() {
  const [selectAttribute, setSelectAttribute] = useState<string | null>(null);
  const [selectVariant, setSelectVariant] = useState<string | null>(null);
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center pb-6 pt-6 ">
      <div className="w-[1361.47px] bg-slate-100 rounded-2xl mt-16">
        <div className="">
          <Product
            selectAttribute={selectAttribute}
            setSelectAttribute={setSelectAttribute}
            btnAttribute={btnAttributes}

            selectVariant={selectVariant}
            setSelectVariant={setSelectVariant}
            btnVariant={btnVariants}

            attributeId={''}
            attributeName={''} 
            variantId={''} 
            variantName={''}
          />

          <div className="h-[1px] bg-slate-200"></div>
          <div className="text-black px-10 pb-2 pt-5 font-bold">Coming soon:</div>
          <div className="text-black px-10 py-2 font-bold">- Feedback product from customers</div>
          <div className="text-black px-10 py-2 font-bold">- Login to feedback</div>
          <div className="text-black px-10 py-2 font-bold">- Relative products</div>
          <div className="text-black px-10 py-2 font-bold">- List products</div>
        </div>

      </div>

      <RelatestListProducts />
    </div>
  );
}
