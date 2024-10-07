function mainForm() {
    return (
      <div className="w-[540px]">
        <div className="text-white text-4xl font-bold font-['DM Sans']">
        Repairing Oto Requirement
        </div>

        <div className="text-white text-[15px] font-normal font-['DM Sans'] my-10">
        Use and fill in this form to send us your requirement about repairing your oto problems
        </div>
        
        <input
          type="email"
          id="helper-text"
          className="h-[58px] my-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Fill your Email"
        />

        <input
          type="tel"
          id="phone-number"
          className="h-[58px] my-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Fill your phone numbers"
        />

        <p
          id="helper-text-explanation"
          className="mt-2 text-sm text-gray-500 dark:text-gray-400"
        >
          We’ll never share your details. Read our
          <a
            href="#"
            className="pl-1 font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Privacy Policy
          </a>
          .
        </p>

        <button
          type="submit"
          className="mt-8 py-4 w-full text-white end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Send us now 
        </button>
      </div>
    );
  }

  export default mainForm