import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import imgGarax from "../../../assets/logogarax.png";
import dashboardIcon from "../../../assets/Dash-icon.svg";
import accountBoxOutlined from "../../../assets/account-box-outline.svg";
import imgBooking from "../../../assets/noun-booking-6490549.svg";
import orderBoxIcon from "../../../assets//noun-delivery-box-540949.svg";
import imgUserDetails from "../../../assets/noun-user-7147797.svg";
import { useLocation } from 'react-router-dom';
import imgReportData from "../../../assets/noun-report-7100695.svg";
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div className="w-[300px] text-[#0000000] p-3 ">
      <header className="w-full h-[90px] p-4 flex">
        <div>
          <img src={imgGarax} className="w-[30px] h-[30px]" alt="Garax Logo" />
        </div>
        <div>
          <svg
            width="108"
            height="27"
            viewBox="0 0 108 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0352 24.252C12.3072 24.252 10.8432 24.12 9.64322 23.856C8.46722 23.592 7.50722 23.148 6.76322 22.524C6.04322 21.876 5.51522 21.012 5.17922 19.932C4.84322 18.828 4.67522 17.436 4.67522 15.756C4.67522 13.956 4.89122 12.492 5.32322 11.364C5.75522 10.236 6.39122 9.372 7.23122 8.772C8.07122 8.172 9.07922 7.764 10.2552 7.548C11.4312 7.332 12.7752 7.224 14.2872 7.224C15.6552 7.224 16.8912 7.26 17.9952 7.332C19.1232 7.38 20.0472 7.488 20.7672 7.656C21.2952 7.752 21.6792 7.896 21.9192 8.088C22.1832 8.256 22.3392 8.448 22.3872 8.664C22.4592 8.88 22.4952 9.096 22.4952 9.312V10.248C22.3272 10.08 22.0032 9.948 21.5232 9.852C21.0672 9.756 20.5272 9.672 19.9032 9.6C19.3032 9.504 18.6792 9.432 18.0312 9.384C17.3832 9.336 16.7712 9.3 16.1952 9.276C15.6192 9.252 15.1632 9.24 14.8272 9.24C13.2432 9.24 11.9832 9.432 11.0472 9.816C10.1352 10.176 9.47522 10.824 9.06722 11.76C8.68322 12.696 8.49122 14.028 8.49122 15.756C8.49122 17.412 8.67122 18.708 9.03122 19.644C9.39122 20.58 9.99122 21.24 10.8312 21.624C11.6712 22.008 12.8112 22.2 14.2512 22.2C15.5472 22.2 16.5792 22.08 17.3472 21.84C18.1152 21.6 18.6672 21.156 19.0032 20.508C19.3632 19.836 19.5552 18.912 19.5792 17.736C19.6032 17.472 19.6032 17.244 19.5792 17.052C19.5792 16.836 19.5792 16.668 19.5792 16.548H12.9912C12.9912 16.02 13.0152 15.612 13.0632 15.324C13.1352 15.012 13.3032 14.796 13.5672 14.676C13.8312 14.556 14.2392 14.496 14.7912 14.496H23.1792V17.7C23.1792 18.948 23.0232 19.992 22.7112 20.832C22.4232 21.648 21.9312 22.308 21.2352 22.812C20.5632 23.316 19.6272 23.688 18.4272 23.928C17.2512 24.144 15.7872 24.252 14.0352 24.252ZM24.9016 24L29.9416 9.996C30.2776 9.132 30.7336 8.472 31.3096 8.016C31.8856 7.536 32.8216 7.296 34.1176 7.296C35.2696 7.296 36.1456 7.512 36.7456 7.944C37.3696 8.376 37.8496 9.06 38.1856 9.996L43.3336 24H39.3376L37.7896 19.68H29.2576L27.7456 24H24.9016ZM29.8336 18.132H37.1056L34.8376 11.544C34.7416 11.232 34.6096 10.956 34.4416 10.716C34.2976 10.476 33.9736 10.356 33.4696 10.356C32.9416 10.356 32.5936 10.488 32.4256 10.752C32.2576 10.992 32.1256 11.256 32.0296 11.544L29.8336 18.132ZM56.8685 17.556C56.8685 17.556 56.5565 17.556 55.9325 17.556C55.3325 17.556 54.5285 17.556 53.5205 17.556C52.5125 17.556 51.4205 17.568 50.2445 17.592V24H46.5365V9.42C46.5365 8.724 46.6805 8.232 46.9685 7.944C47.2805 7.632 47.8205 7.464 48.5885 7.44C48.9485 7.416 49.4405 7.404 50.0645 7.404C50.6885 7.404 51.3965 7.404 52.1885 7.404C52.9805 7.38 53.7845 7.368 54.6005 7.368C55.4405 7.368 56.2445 7.368 57.0125 7.368C57.7805 7.368 58.4525 7.38 59.0285 7.404C59.6285 7.428 60.0845 7.452 60.3965 7.476C61.6685 7.596 62.6045 8.004 63.2045 8.7C63.8045 9.396 64.1045 10.452 64.1045 11.868C64.1045 13.044 63.9605 13.956 63.6725 14.604C63.4085 15.228 63.0005 15.708 62.4485 16.044C62.3525 16.116 62.1965 16.176 61.9805 16.224C61.7885 16.272 61.5845 16.296 61.3685 16.296V16.404C61.4885 16.404 61.6205 16.404 61.7645 16.404C61.9085 16.404 62.0285 16.404 62.1245 16.404C63.0365 16.572 63.5885 16.932 63.7805 17.484C63.9725 18.036 64.0685 18.6 64.0685 19.176V22.992C64.0685 23.304 64.0925 23.544 64.1405 23.712C64.2125 23.88 64.2605 23.976 64.2845 24H61.5845C61.1765 24 60.8525 23.94 60.6125 23.82C60.3725 23.676 60.2525 23.34 60.2525 22.812V19.428C60.2525 18.684 60.0845 18.192 59.7485 17.952C59.4365 17.688 58.8725 17.556 58.0565 17.556H56.8685ZM50.2445 15.648C50.5565 15.648 51.0365 15.66 51.6845 15.684C52.3565 15.684 53.0885 15.696 53.8805 15.72C54.6725 15.72 55.4045 15.72 56.0765 15.72C56.7485 15.72 57.2285 15.72 57.5165 15.72C58.2605 15.72 58.9085 15.492 59.4605 15.036C60.0365 14.58 60.3245 13.728 60.3245 12.48C60.3245 11.616 60.1565 10.932 59.8205 10.428C59.5085 9.924 58.9925 9.636 58.2725 9.564C57.8405 9.492 57.2765 9.456 56.5805 9.456C55.8845 9.432 55.1645 9.42 54.4205 9.42C53.6765 9.42 52.9925 9.432 52.3685 9.456C51.7685 9.456 51.3125 9.468 51.0005 9.492C50.9285 9.492 50.7845 9.528 50.5685 9.6C50.3525 9.672 50.2445 9.9 50.2445 10.284V15.648ZM66.5618 24L71.6018 9.996C71.9378 9.132 72.3938 8.472 72.9698 8.016C73.5458 7.536 74.4818 7.296 75.7778 7.296C76.9298 7.296 77.8058 7.512 78.4058 7.944C79.0298 8.376 79.5098 9.06 79.8458 9.996L84.9938 24H80.9978L79.4498 19.68H70.9178L69.4058 24H66.5618ZM71.4938 18.132H78.7658L76.4978 11.544C76.4018 11.232 76.2698 10.956 76.1018 10.716C75.9578 10.476 75.6338 10.356 75.1298 10.356C74.6018 10.356 74.2538 10.488 74.0858 10.752C73.9178 10.992 73.7858 11.256 73.6898 11.544L71.4938 18.132ZM100.977 24C100.617 24 100.293 23.976 100.005 23.928C99.7406 23.856 99.4886 23.748 99.2486 23.604C99.0086 23.46 98.7566 23.232 98.4926 22.92L93.5966 16.692L86.1806 7.404H91.0406L96.1166 14.172L102.885 22.308C103.245 22.716 103.533 23.064 103.749 23.352C103.965 23.616 104.181 23.832 104.397 24H100.977ZM88.0166 24H85.8566C86.1446 23.76 86.4326 23.484 86.7206 23.172C87.0086 22.836 87.2846 22.536 87.5486 22.272L93.9206 14.82L100.257 7.404H103.677L95.9006 16.332L90.2846 23.1C90.0206 23.388 89.7206 23.616 89.3846 23.784C89.0486 23.928 88.5926 24 88.0166 24Z"
              fill="black"
            />
          </svg>
        </div>
      </header>

      {/* Body */}
      <div className="w-full h-[646px]">
        <div className="w-full h-[20px] p-6">
          <p className="font-extrabold">Menu</p>
        </div>

        {/* Menu Buttons */}
        <div className="w-full h-[300px] p-3">
          <Link to="/statics"><MenuButton icon={dashboardIcon} label="Dashboard" link='/statics' /></Link>
          <Link to="/setting"><MenuButton icon={accountBoxOutlined} label="Account" link='/setting' /></Link>
          <Link to="/orders"><MenuButton icon={orderBoxIcon} label="List Orders" link='/orders'/></Link>
          <Link to="/booking"><MenuButton icon={imgBooking} label="List Booking" link='/booking/list'/></Link>
          <MenuButton icon={imgReportData} label="Report Data" />
          <Link to="/profile"><MenuButton icon={imgUserDetails} label="User Details" link='/profile'/></Link>
     
        </div>
      </div>
    </div>
  );
}

// Reusable Button Component
function MenuButton({ icon, label,link}) {
  const location = useLocation();
  const path=location.pathname;
  return (
    <button 
    className={`group w-full flex items-center p-2 mt-2 rounded-xl transition duration-300 ${
      path === link ? 'bg-black text-white ' : 'hover:bg-gray-200 hover:text-black'
    }`}
    >
      <img
        src={icon}
        alt={`${label}  Icon`}
        className={`w-[25px] h-[25px] mr-3 transition duration-300 ${
          path === link ? 'brightness-0 invert' : ''
        }`}
        
      />
      <p className="text-sm font-semibold">{label}</p>
    </button>
  );
}

// Hàm component với khả năng nhận icon, image, text và các style khác
const CustomButton = ({ text, icon: Icon, image, size = 'medium', variant = 'contained', ...props }) => {
    return (
      <Button
        variant={variant}
        size={size}
        startIcon={
          image ? <img src={image} alt="button-icon" style={{ width: 24, height: 24 }} /> : Icon ? <Icon /> : null
        }  // Hiển thị hình ảnh nếu có, nếu không có thì hiển thị icon
        className="group w-full flex items-center p-2 mt-2 rounded-xl hover:bg-black hover:text-white transition duration-300"
        {...props}
        
        style={{
        borderRadius: '5px',
        textTransform: 'none', 
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'flex-start', 
        alignItems: 'center',  
        boxShadow: 'none',
        transition: 'background-color 0.3s ease',  // Hiệu ứng chuyển đổi màu nền
        '&:hover': {
          backgroundColor: 'black',  // Màu nền khi hover
          color: 'white',  // Màu chữ đổi sang trắng khi hover
        },
      }}
      >
        <p className="text-sm font-semibold">{text}</p>
      </Button>
    );
  };

  

export default Sidebar;
