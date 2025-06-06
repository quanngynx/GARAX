// import { Link } from "react-router-dom";

import AppleIcon from "@/assets/layout/apple-brand.svg?react";
import GgPlayIcon from "@/assets/layout/playStore-brand.svg?react";

import FbIcon from "@/assets/layout/fb-brand.svg?react";
import InsIcon from "@/assets/layout/ins-brand.svg?react";
import XIcon from "@/assets/layout/x-brand.svg?react";
import LinkedlnIcon from "@/assets/layout/linkedin-brand.svg?react";
import Dropdown from "antd/es/dropdown";
import Button from "antd/es/button";
import Space from "antd/es/space";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { MenuProps } from "antd/es/menu";
import message from "antd/es/message";


// const titleFooter = [
//   {
//     title: "Company",
//     childTitle: [
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//     ],
//   },
//   {
//     title: "Company",
//     childTitle: [
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//     ],
//   },
//   {
//     title: "QuickLinks",
//     childTitle: [
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//     ],
//   },
//   {
//     title: "Company",
//     childTitle: [
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//     ],
//   },
//   {
//     title: "Company",
//     childTitle: [
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//       {
//         child1: "About us",
//       },
//     ],
//   },
// ];

const cardDown = [
  {
    brand: <AppleIcon />,
    body1: "Download on the",
    body2: "Apple Store",
  },
  {
    brand: <GgPlayIcon />,
    body1: "Get in on",
    body2: "Google Play",
  },
];

const connectVia = [
  {
    brand: <FbIcon />,
  },
  {
    brand: <XIcon />,
  },
  {
    brand: <InsIcon />,
  },
  {
    brand: <LinkedlnIcon />,
  },
];

const handleMenuClick: MenuProps['onClick'] = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items: MenuProps['items'] = [
  {
    label: 'Việt Nam',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: 'Hoa Kì',
    key: '2',
    icon: <UserOutlined />,
  },
  // {
  //   label: '3rd menu item',
  //   key: '3',
  //   icon: <UserOutlined />,
  //   danger: true,
  // },
  // {
  //   label: '4rd menu item',
  //   key: '4',
  //   icon: <UserOutlined />,
  //   danger: true,
  //   disabled: true,
  // },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

function bodyFooter() {
  return (
    <div className="grid grid-cols-2 md:sm:grid-cols-5 gap-8 px-10 py-6">
      {/* row 1 */}
      <div>
        <h3 className="text-white font-semibold mb-4">Company</h3>
        <ul className="text-white">
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Công ty
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Blog
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Dịch vụ
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              FAQs
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Chính sách
            </a>
          </li>
          <li className="py-1">
            <a href="/swagger" className="hover:text-gray-500">
              Liên hệ với chúng tôi
            </a>
          </li>
        </ul>
      </div>
      {/* row 2 */}
      <div>
        <h3 className="text-white font-semibold mb-4">Liên kết nhanh</h3>
        <ul className="text-white">
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Liên hệ
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Trung tâm giúp đỡ
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Trò chuyện trực tuyến
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Cách chúng tôi làm việc
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Cho thuê xe
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Hoạt động & Truyền thông
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Xe hơi
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Sản phẩm
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Đối tác
            </a>
          </li>
        </ul>
      </div>
      {/* row 3 */}
      <div>
        <h3 className="text-white font-semibold mb-4">Thương hiệu của chúng tôi</h3>
        <ul className="text-white">
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Toyota
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Porsche
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Audi
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              BMW
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Ford
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Nissan
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Peugeot
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Volkswagen
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
            Chương trình phát hiện lỗ hổng
            </a>
          </li>
        </ul>
      </div>
      {/* row 4 */}
      <div>
        <h3 className="text-white font-semibold mb-4">Thể loại phương tiện</h3>
        <ul className="text-white">
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Sedan
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Hatchback
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              SUV
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Hybrid
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Electric
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Coupe
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Truck
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Convertible
            </a>
          </li>
          <li className="py-1">
            <a href="#" className="hover:text-gray-500">
              Chương trình phát hiện lỗ hổng
            </a>
          </li>
        </ul>
      </div>
      {/* row 5 */}
      <div className="">
        <div className="mb-0">
          <h3 className="text-white font-semibold mb-4">Ứng dụng</h3>

          {cardDown.map((tab, index) => (
            <div className="flex items-center" key={`tab-${index}`}>
              <div className="flex items-center py-3 px-4 bg-white/5 rounded-2xl w-[190px] max-w-[190px] mb-4 cursor-pointer">
                <div className="mr-3">{tab.brand}</div>
                <div className="">
                  <div className="text-white text-xs font-normal font-['DM Sans'] leading-3">
                    {tab.body1}
                  </div>
                  <div className="text-white text-[15px] font-medium font-['DM Sans'] leading-[15px]">
                    {tab.body2}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Dropdown 
          menu={menuProps}
          trigger={['click']}
          className="mb-4 font-semibold w-[190px]"
        >
          <Button>
            <Space>
              Chọn ngôn ngữ
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>

        <div className="">
          <h3 className="text-white font-semibold mb-4">Kết nối với chúng tôi</h3>

          <div className="inline-flex">
          {connectVia.map((tab, index) => (
            <div
              className="flex items-center"
              key={`tab-${index}`}
            >
              <div className="flex flex-row items-center py-3 px-3 bg-white/5 rounded-2xl mb-4 mr-4">
                <div className="p-1">{tab.brand}</div>
              </div>
            </div>
          ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default bodyFooter;
