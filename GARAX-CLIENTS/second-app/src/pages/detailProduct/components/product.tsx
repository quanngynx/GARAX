import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCarts } from "@/redux/stores/cart";
// import { RootState } from "@/redux/stores";

import RelatestListProducts from "./relatestListProducts";

import LeftArrow from '@/assets/ListProduct/icons/left--vector-tiny.svg?react'
import { Button, ConfigProvider } from "antd";
import { createStyles } from 'antd-style';
import { AntDesignOutlined } from "@ant-design/icons";

interface ProductProps {
  selectIndex: number;
  setSelectIndex: unknown;
}

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function product({
  selectIndex,
  setSelectIndex
} : ProductProps) {
  // const [selectIndex, setSelectIndex] = useState<number | null>(null);

  // const { 
  //   image, 
  //   title,
  //   description,
  //   descriptionDetail1,
  //   descriptionDetail2,
  //   range,
  //   transmission,
  //   fuel_type,
  //   year, 
  //   cost 
  // } = props.data

  // const carts = useSelector((store: RootState) => store.cart.items)
  // console.log("info cart::", carts)

  // const dispatch = useDispatch()

  const handleAddToCart = () => {
    // dispatch(addToCarts({
    //   // variable: props
    // }))
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { styles } = useStyle();
  return (
    <div className="p-6">
      <div className="text-black w-full mb-4">
        <Link to={"/product"}>
          <div className="flex flex-row items-center">
            <div className="pl-4">
              <LeftArrow />
            </div>
            <div className="ml-4 font-semibold">Quay lại</div>
          </div>
        </Link>
      </div>
      <div
        className="h-[434px] bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage:
            'url("https://framerusercontent.com/images/ErwgiAQGhqflp1GJT5ZZf2Xodw.jpg?scale-down-to=1024")',
        }}
      ></div>
      <div className="flex sm:flex-row flex-col-reverse">
        {/* content */}
        <div className="w-[70%]">
          <div className="text-[#050b20] text-[40px] font-bold font-['DM Sans'] leading-10 mt-4 mb-6">
            Toyota Camry New
          </div>
          <div className="text-[#050b20] text-xl font-medium font-['DM Sans'] leading-[24px] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          sit amet ligula ornare, volutpat justo eu, molestie risus. {" "}
          </div>
          <div className="text-black text-base font-medium font-['DM Sans'] leading-[24px] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sit amet ligula ornare, volutpat justo eu, molestie risus. Aenean
            augue ipsum, malesuada in iaculis et, tempus ac mauris. Cras tellus
            odio, egestas id orci sed, finibus dictum quam. Morbi hendrerit,
            enim in cursus suscipit, erat odio porttitor erat, vel dignissim
            arcu ligula id arcu. Nulla facilisi. Suspendisse eget feugiat lorem.
            Praesent laoreet nibh accumsan tristique sollicitudin. Curabitur
            tincidunt consequat ex quis consectetur. Aenean pharetra mattis arcu
            sit amet efficitur.
          </div>
        </div>
        {/* card info + add to Card */}
        <div className="w-[30%]">
          <div className="text-black bg-white p-3 border-[1px] border-slate-200 rounded-2xl mt-8">
            <div className="">
              <div className="flex justify-between items-center border-b-[1px] mb-4 pb-2">
                <div className="">Giá gốc:</div>
                <div className="">1</div>
              </div>

              <div className="flex justify-between items-center border-b-[1px] mb-4 pb-2">
                <div className="">Giá khuyến mại:</div>
                <div className="">1</div>
              </div>

              <div className="flex justify-between items-center border-b-[1px] mb-4 pb-2">
                <div className="">Số lượng:</div>
                <div className="">1</div>
              </div>

              <div className="flex justify-between items-center border-b-[1px] mb-4 pb-2">
                <div className="w-[30%]">Thuộc tính:</div>
                <div className="">
                <Button color="default" variant="outlined">
                  Outlined
                </Button>
                </div>
              </div>

              {/* <div className="bg-slate-800 rounded-2xl flex justify-center items-center mt-4">
                <button className="text-white py-4 px-24"
                onClick={handleAddToCart}>
                  Thêm vào giỏ hàng
                </button>
              </div> */}

              <ConfigProvider
                button={{
                  className: styles.linearGradientButton,
                }}
              >
                <Button 
                onClick={handleAddToCart}
                type="primary" 
                size="large" 
                icon={<AntDesignOutlined />} 
                block
                className="rounded-2xl py-6"
                >
                    Gradient Button
                </Button>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </div>

      <RelatestListProducts />
    </div>
  );
}

export default product;
