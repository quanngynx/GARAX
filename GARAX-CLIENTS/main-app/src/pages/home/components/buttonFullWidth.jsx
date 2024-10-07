function btnFullWidth({navigateTo}) {
  return (
    <div className="mt-4 border border-neutral-600 rounded-[15px]">
      <button onClick={navigateTo} className="flex justify-center items-center w-full py-4">
          <div className="text-black text-xl font-normal font-['Inter']">See all products</div>
        </button>
    </div>
  );
}

export default btnFullWidth;
