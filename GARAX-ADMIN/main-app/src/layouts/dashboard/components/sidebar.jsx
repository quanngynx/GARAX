import imgGarax from '../../../assets/logogarax.png';
import imgUser from '../../../assets/iconUser.png';
import imgBooking from '../../../assets/iconBooking.png';
import imgOrder from '../../../assets/iconOrder.png';
import imgUserDetails from '../../../assets/iconUserDetails.png';
import imgReportData from '../../../assets/iconReportData.png';

function Sidebar() {
    return (
        <div className="w-[240px] text-[#0000000] p-3 ">
            <header className="w-full h-[90px] p-4 flex">
                <div>
                    <img src={imgGarax} className="w-[30px] h-[30px]" alt="Garax Logo" />
                </div>
                <div>
                    <p className='text-[25px] ml-2 non-italic font-medium'>Garax</p>
                </div>
            </header>

            {/* Body */}
            <div className='w-full h-[646px]'>
                <div className='w-full h-[20px] p-6'>
                    <p className='font-extrabold'>Menu</p>
                </div>

                {/* Menu Buttons */}
                <div className='w-full h-[300px] p-3'>
                    <MenuButton icon={imgUser} label="Account" />
                    <MenuButton icon={imgOrder} label="List Order" />
                    <MenuButton icon={imgBooking} label="List Booking" />
                    <MenuButton icon={imgReportData} label="Report Data" />
                    <MenuButton icon={imgUserDetails} label="User Details" />
                </div>
            </div>
        </div>
    );
}

// Reusable Button Component
function MenuButton({ icon, label }) {
    return (
        <button className='group w-full flex items-center p-2 mt-2 rounded-xl hover:bg-black hover:text-white transition duration-300'>
            <img src={icon} alt={`${label} Icon`} className='w-[25px] h-[25px] mr-3 group-hover:brightness-0 group-hover:invert transition duration-300' />
            <p className='font-serif'>{label}</p>
        </button>
    );
}

export default Sidebar;
