
function btnFullWidth({navigateTo} : { navigateTo: () => void }) {
  return (
    <div className="mt-4 border border-neutral-300 hover:border-neutral-400 transition-shadow rounded-[15px]">
      <button onClick={navigateTo} className="flex justify-center items-center w-full py-2 sm:py-4">
          <div className="text-black text-xl font-normal font-['Inter']">Xem tất cả sản phẩm</div>
        </button>
    </div>
  );
}

export default btnFullWidth;
