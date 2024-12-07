import { AppTiny } from '../../../components/icons'

function administrationPanel() {
    const ListFeat = [
        {
            name: "Các ứng dụng đã kết nối",
            icon: <AppTiny />
        },
        {
            name: "Các phương thức thanh toán ",
            icon: <AppTiny />
        },
        {
            name: "Chế độ xem",
            icon: <AppTiny />
        },
        
    ]
  return (
    <div className="w-full">
      <div className="text-[#212121] text-[24px] font-semibold font-['Roboto'] leading-normal mt-6 mb-2">
        Công cụ quản trị
      </div>

      <div className="text-[#212121] text-[32px] font-semibold font-['Roboto'] leading-normal mt-4">
        {ListFeat.map((i, index) => (
            <div key={index} className='inline-flex items-center mr-4'>
                <div className='mr-2'>{i.icon}</div>
                <div className="text-black text-base font-medium font-['Inter'] leading-[18px]">{i.name}</div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default administrationPanel;
