import car1 from "../../../assets/icons/car1.svg";
import car2 from "../../../assets/icons/car2.svg";

function CarServiceSection() {
  return (
    <section className="flex flex-col items-center px-4 py-8 md:px-8 md:py-12 gap-8">
      {/* Image Section */}
      <div className='flex flex-row items-center md:flex-row md:justify-center'>
      <div className="flex space-x-4 items-end">
        <div className="w-48 h-48 bg-gray-200 rounded-lg overflow-hidden">
          {/* Small Image */}
          <img
            src={car1} 
            alt="Car 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-64 h-80 bg-gray-200 rounded-lg overflow-hidden">
          {/* Large Image */}
          <img
            src={car2} 
            alt="Car 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

        {/* Text Section */}
        <div className="max-w-full md:max-w-md text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-2xl sm:text-3xl text-black font-semibold mb-4">
            Những điều tốt nhất cho xe của chúng ta
          </h2>
          <p className="text-gray-600 mb-6">
            Đây là những lý do tại sao bạn nên chọn dịch vụ sửa xe của chúng tôi:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="text-black flex items-center">
              <span className="text-blue-500 mr-2">✔</span> Chất lượng dịch vụ tốt
            </li>
            <li className="flex items-center text-black">
              <span className="text-blue-500 mr-2">✔</span> Thiết bị hiện đại
            </li>
            <li className="flex items-center text-black">
              <span className="text-blue-500 mr-2">✔</span> Nhanh chóng và tiện lợi
            </li>
          </ul>
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            Bắt đầu ngay
          </button>
        </div>
      </div>

      <div className="flex space-x-12 mt-12 text-black md:mt-0 text-center py-16 gap-16">
        <div>
          <p className="text-2xl text-black font-semibold">836K</p>
          <p className="text-gray-600">Đơn hàng</p>
        </div>
        <div>
          <p className="text-2xl text-black font-semibold">738M</p>
          <p className="text-gray-600">Đánh giá sản phẩm</p>
        </div>
        <div>
          <p className="text-2xl text-black font-semibold">231K</p>
          <p className="text-gray-600">Số lượng khách hàng thường ngày</p>
        </div>
        <div>
          <p className="text-2xl text-black font-semibold">2.03M</p>
          <p className="text-gray-600">Phản hồi tốt</p>
        </div>
      </div>
    </section>
  );
}

export default CarServiceSection;
