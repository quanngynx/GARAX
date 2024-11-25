function rightContent() {
  return (
    <div className="w-[70%]">
      <div className="border-[1px] p-8 rounded">
      <form className="text-black">
        <div className="md:flex mb-8">
          <div className="md:w-1/3">
            <legend className="uppercase tracking-wide text-sm">
              Location
            </legend>
            <p className="text-xs font-light text-red">
              This entire section is required.
            </p>
          </div>
          <div className="md:flex-1 mb:mt-0 md:px-3">
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                Họ tên
              </label>
              <input
                className="w-full shadow-inner p-4 border-[1px] bg-white "
                type="text"
                name="name"
                placeholder="Remy Sharp"
              />
            </div>
            <div className="md:flex mb-4">
              <div className="md:flex-1 md:pr-3">
                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold mb-2">
                  Địa chỉ nhà ở
                </label>
                <input
                  className="w-full shadow-inner p-4 border-[1px] bg-white"
                  type="text"
                  name="address_street"
                  placeholder="555 Roadrunner Lane"
                />
              </div>
              <div className="md:flex-1 md:pl-3">
                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold mb-2">
                  Địa chỉ email
                </label>
                <input
                  className="w-full shadow-inner p-4 border-[1px] bg-white"
                  type="text"
                  name="address_number"
                  placeholder="#3"
                />
                <span className="text-xs mb-4 font-extralight">
                  We lied, this isn&apost required.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex mb-8">
          <div className="md:w-1/3">
            <legend className="uppercase tracking-wide text-sm">Liên hệ</legend>
          </div>
          <div className="md:flex-1 mb:mt-0 md:px-3">
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                Số điện thoại
              </label>
              <input
                className="w-full shadow-inner p-4 border-[1px] bg-white"
                type="tel"
                name="phone"
                placeholder="(555) 555-5555"
              />
            </div>
          </div>
        </div>

        <div className="md:flex mb-6">
          <div className="md:w-1/3">
            <legend className="uppercase tracking-wide text-sm">
              Mô tả
            </legend>
          </div>
          <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
            <textarea
              className="w-full shadow-inner p-4 border-[1px] bg-white"
              placeholder="We build fine acmes."
              rows="6"
            ></textarea>
          </div>
        </div>
        <div className="md:flex mb-6">
          <div className="md:w-1/3">
            <legend className="uppercase tracking-wide text-sm">
              Ảnh bìa
            </legend>
          </div>
          <div className="md:flex-1 px-3 text-center">
            <div className="py-16 button hover:bg-indigo-400 bg-indigo-100 text-cream mx-auto cusor-pointer relative">
              <input
                className="opacity-0 absolute pin-x pin-y"
                type="file"
                name="cover_image"
              />
              Thay đổi ảnh cá nhân ở đây!
            </div>
          </div>
        </div>
        <div className="mt-4 md:flex md:flex-col items-end border border-t-1 border-b-0 border-x-0 border-cream-dark">

          <div className="mt-7">
          <button className="text-white bg-indigo-400 hover:bg-indigo-500 px-8 py-3 mr-4 rounded-full">Làm mới</button>
          <button className="text-white bg-green-400 hover:bg-green-500 px-8 py-3 rounded-full">Lưu</button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}

export default rightContent;
