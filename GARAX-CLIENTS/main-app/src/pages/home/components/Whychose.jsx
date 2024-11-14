function WhyChooseUs() {
    const services = [
      {
        title: "Quality service",
        description: "We are committed to providing high-quality service with experienced and skilled technicians.",
        icon: "🌟", 
      },
      {
        title: "Modern equipment",
        description: "We use modern technology and equipment for diagnostics and repairs, saving time and ensuring accuracy.",
        icon: "💎",
      },
      {
        title: "Competitive pricing",
        description: "Our service prices are reasonable and competitive, ensuring customer satisfaction in terms of cost.",
        icon: "💰",
      },
      {
        title: "Quick turnaround time",
        description: "We understand the value of your time, so we strive to complete repairs as quickly as possible while maintaining high quality.",
        icon: "🚗",
      },
    ];
  
    return (
      <div className="flex flex-col items-center py-16 bg-[#f8f9fb]">
        <h2 className="text-3xl font-bold text-[#050b20] mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg text-center transition-transform transform hover:scale-105"
            >
              <div className="text-4xl mb-4 text-[#7f56d9]">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#050b20] mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default WhyChooseUs;
  