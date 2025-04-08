import TopArrow from "../../assets/top-arrow.svg?react";
function scrollToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed z-30 bottom-4 right-4">
      <button onClick={handleScrollToTop} className="p-4 rounded-full bg-[#405ff2]">
        <TopArrow />
      </button>
    </div>
  );
}

export default scrollToTop;
