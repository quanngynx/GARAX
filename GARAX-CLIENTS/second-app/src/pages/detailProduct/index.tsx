// import LeftArrow from '../../assets/icons/left--vector-tiny.svg?react'
import { useState } from 'react';
import Product, { ItemAttributeProps } from './components/product'
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
    id: '0',
    name: 'hi'
  },
  {
    id: '1',
    name: 'hi'
  },
  {
    id: '2',
    name: 'hi'
  },
  {
    id: '3',
    name: 'hi'
  },
  {
    id: '4',
    name: 'hi'
  },
];

const btnVariants: ItemAttributeProps[] = [
  {
    id: '0',
    name: 'hi'
  },
  {
    id: '1',
    name: 'hi'
  },
  {
    id: '2',
    name: 'hi'
  },
  {
    id: '3',
    name: 'hi'
  },
  {
    id: '4',
    name: 'hi'
  },
];
export function DetailProductPage() {
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
            id={''}
            name={''}
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
