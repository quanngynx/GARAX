function MainForm() {
  return (
    <div className="w-full md:w-[540px] px-4 py-4 md:p-0">
      {/* Title */}
      <div className="text-white text-xl md:text-4xl font-bold font-['DM Sans'] text-center md:text-left">
        Yêu cầu sửa chữa ô tô
      </div>

      {/* Description */}
      <div className="text-white text-base md:text-[15px] font-normal font-['DM Sans'] my-4 md:my-2 text-center md:text-left">
      Sử dụng và điền vào mẫu này để gửi cho chúng tôi yêu cầu sửa chữa sự cố ô tô của bạn.      </div>

      {/* Email Input */}
      <input
        type="email"
        id="helper-text"
        className="h-[32px] md:h-[42px] my-2 md:my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5"
        placeholder="Điền email của bạn"
      />

      {/* Phone Number Input */}
      <input
        type="tel"
        id="phone-number"
        className="h-[32px] md:h-[42px] my-2 md:my-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5"
        placeholder="Điền số điện thoại của bạn"
      />

      {/* Privacy Policy */}
      <p
        id="helper-text-explanation"
        className="mt-2 text-sm text-gray-500 text-center md:text-left"
      >
        Chúng tôi không bao giờ chia sẻ thông tin cá nhân của khách hàng. Hãy đọc
        <a
          href="#"
          className="pl-1 font-medium text-blue-600 hover:underline"
        >
          Chính sách bảo mật của chúng tôi
        </a>
        .
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 md:mt-8 py-3 md:py-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm"
      >
        Gửi cho chúng tôi ngay
      </button>
    </div>
  );
}

export default MainForm;
