function MainForm() {
  return (
    <div className="w-full md:w-[540px] p-4 md:p-0">
      {/* Title */}
      <div className="text-white text-2xl md:text-4xl font-bold font-['DM Sans'] text-center md:text-left">
        Repairing Oto Requirement
      </div>

      {/* Description */}
      <div className="text-white text-base md:text-[15px] font-normal font-['DM Sans'] my-4 md:my-10 text-center md:text-left">
        Use and fill in this form to send us your requirement about repairing your oto problems.
      </div>

      {/* Email Input */}
      <input
        type="email"
        id="helper-text"
        className="h-[50px] md:h-[58px] my-4 md:my-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Fill your Email"
      />

      {/* Phone Number Input */}
      <input
        type="tel"
        id="phone-number"
        className="h-[50px] md:h-[58px] my-4 md:my-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="Fill your phone numbers"
      />

      {/* Privacy Policy */}
      <p
        id="helper-text-explanation"
        className="mt-2 text-sm text-gray-500 text-center md:text-left"
      >
        We’ll never share your details. Read our
        <a
          href="#"
          className="pl-1 font-medium text-blue-600 hover:underline"
        >
          Privacy Policy
        </a>
        .
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 md:mt-8 py-3 md:py-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm"
      >
        Send us now
      </button>
    </div>
  );
}

export default MainForm;
