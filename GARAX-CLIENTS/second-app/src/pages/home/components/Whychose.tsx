import StandardIcon from '../../../assets/icons/home/f1.svg.svg?react'
import StandardIcon2 from '../../../assets/icons/home/f2.svg?react'
import StandardIcon3 from '../../../assets/icons/home/f3.svg?react'
import StandardIcon4 from '../../../assets/icons/home/f4.svg?react'
function WhyChooseUs() {
    const services = [
      {
        title: "Quality service",
        description: "Chúng tôi cam kết cung cấp dịch vụ chất lượng cao với đội ngũ kỹ thuật viên giàu kinh nghiệm và tay nghề cao.",
        icon: <StandardIcon />, 
      },
      {
        title: "Modern equipment",
        description: "Chúng tôi sử dụng công nghệ và thiết bị hiện đại để chẩn đoán và sửa chữa, tiết kiệm thời gian và đảm bảo độ chính xác.",
        icon: <StandardIcon2 />,
      },
      {
        title: "Competitive pricing",
        description: "Giá dịch vụ của chúng tôi hợp lý và cạnh tranh, đảm bảo sự hài lòng của khách hàng về mặt chi phí.",
        icon: <StandardIcon3 />,
      },
      {
        title: "Quick turnaround time",
        description: "Chúng tôi hiểu giá trị thời gian của bạn, vì vậy chúng tôi cố gắng hoàn thành việc sửa chữa nhanh nhất có thể trong khi vẫn đảm bảo chất lượng cao.",
        icon: <StandardIcon4 />,
      },
    ];
  
    return (
      <div className="flex flex-col items-center py-16 bg-[#f8f9fb] mt-16 rounded-lg">
        <h2 className="text-3xl font-bold text-[#050b20] mb-8">Những lý do để tin tưởng chúng tôi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg text-center transition-transform transform hover:scale-105"
            >
              <div className="text-4xl mb-4 text-[#7f56d9]">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#050b20 ] mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default WhyChooseUs;
  