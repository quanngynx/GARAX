import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addToCarts } from "@/redux/stores/cart";
// import { RootState } from "@/redux/stores";

import RelatestListProducts from "./relatestListProducts";

import LeftArrow from '@/assets/ListProduct/icons/left--vector-tiny.svg?react'
import { Button, Col, ConfigProvider, Row, Select, Space, Typography } from "antd";
import { createStyles } from 'antd-style';
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/utils";
import Input from "antd/es/input/Input";
import '../sass/select.moddule.css';
import TextArea from "antd/es/input/TextArea";

export interface ItemAttributeProps {
  attributeId: string; 
  attributeName: string; 
}

export interface ItemVariantProps {
  variantId: string; 
  variantName: string; 
}

interface ProductProps extends ItemAttributeProps, ItemVariantProps {
  selectAttribute: string | null;
  setSelectAttribute: Dispatch<SetStateAction<string | null>>;
  btnAttribute: ItemAttributeProps[];

  selectVariant: string | null;
  setSelectVariant: Dispatch<SetStateAction<string | null>>;
  btnVariant: ItemVariantProps[];
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

// const mockAttribute = [
//   {
//     color: 'red'
//   }
// ];

// const mockVariants = [

// ]

const options = [
  {
    value: 'him',
    label: 'Anh',
  },
  {
    value: 'her',
    label: 'Chị',
  },
  {
    value: 'order',
    label: 'Không tiết lộ',
  },
];

function product({
  selectAttribute,
  setSelectAttribute,
  btnAttribute,

  selectVariant,
  setSelectVariant,
  btnVariant,


}: ProductProps) {
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

  // const [selectAttribute, setSelectAttribute] = useState<Record<string, boolean>>({});

  const handleClickSelectAttribute = (id: string) => {
    setSelectAttribute((prev => (prev === id ? null : id)));
  };

  const handleClickSelectVariant = (id: string) => {
    setSelectVariant((prev => (prev === id ? null : id)));
  };
  return (
    <div className="p-6">
      <div className="text-black w-full mb-4 flex justify-between">
        <Link to={"/product"}>
          <div className="flex flex-row items-center">
            <div className="pl-4">
              <LeftArrow />
            </div>
            <div className="ml-4 font-semibold">Quay lại</div>
          </div>
        </Link>
        <div className="inline-flex">
          <div className="font-normal font-['DM Sans'] leading-[24px]">
            *Có 7 người đang thêm cùng sản phẩm giống bạn vào giỏ hàng.
          </div>
        </div>
      </div>
      {/* <div
        className="h-[434px] bg-cover bg-center rounded-2xl"
        style={{
          backgroundImage:
            'url("https://framerusercontent.com/images/ErwgiAQGhqflp1GJT5ZZf2Xodw.jpg?scale-down-to=1024")',
        }}
      ></div> */}
      <div className="flex sm:flex-row flex-col-reverse">
        {/* content */}
        <div className="w-[70%]">
          <div className="text-[#050b20] text-[32px] font-bold font-['DM Sans'] leading-10 mt-4 mb-6">
            Thông tin đặt hàng
          </div>
          
          <div className="text-black gap-2">
            <Row gutter={8}>
              <Col span={16}>
                <Typography.Title level={5}>Họ và tên</Typography.Title>
                <Space.Compact 
                  className="w-full"
                >
                  <Select 
                    className="custom-select" 
                    size="large"
                    defaultValue="Anh/Chị" 
                    options={options} 
                  />
                  <Input 
                    className="rounded-full"
                    size="large" 
                    placeholder="large size" 
                    // prefix={<UserOutlined />} 
                  />
                </Space.Compact>
              </Col>
              <Col span={8}>
                <Typography.Title level={5}>Số điện thoại</Typography.Title>
                <Input 
                    className="rounded-full"
                    size="large" 
                    placeholder="large size" 
                    // prefix={<UserOutlined />} 
                  />
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Typography.Title level={5}>Email</Typography.Title>
                <Input 
                    className="rounded-full"
                    size="large" 
                    placeholder="large size" 
                    // prefix={<UserOutlined />} 
                  />
              </Col>
            </Row>

            <Row gutter={8}>
              <Col span={8}>
                <Typography.Title level={5}>Tỉnh/Thành</Typography.Title>
                <Input 
                    className="rounded-full"
                    size="large" 
                    placeholder="large size" 
                    // prefix={<UserOutlined />} 
                  />
              </Col>

              <Col span={8}>
                <Typography.Title level={5}>Quận/Huyện</Typography.Title>
                <Input 
                    className="rounded-full"
                    size="large" 
                    placeholder="large size" 
                    // prefix={<UserOutlined />} 
                  />
              </Col>

              <Col span={8}>
                <Typography.Title level={5}>Phường/Xã</Typography.Title>
                <Input 
                    className="rounded-full"
                    size="large" 
                    placeholder="large size" 
                    // prefix={<UserOutlined />} 
                  />
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Typography.Title level={5}>Địa chỉ</Typography.Title>
                <Input 
                    className="rounded-full"
                    size="large" 
                    placeholder="large size" 
                    // prefix={<UserOutlined />} 
                  />
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <Typography.Title level={5}>Ghi chú</Typography.Title>
                <TextArea size="large" className="rounded-3xl" placeholder="Ví dụ: Giao hàng giờ hành chính" autoSize />
              </Col>
            </Row>
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

              

              <ConfigProvider
                button={{
                  className: styles.linearGradientButton,
                }}
              >
                <Button
                  onClick={handleAddToCart}
                  type="primary"
                  size="large"
                  icon={<ShoppingCartOutlined
                    style={{
                      fontSize: '20px',
                    }}
                  />}
                  block
                  className="rounded-2xl py-6"
                >
                  Thêm vào giỏ hàng
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
