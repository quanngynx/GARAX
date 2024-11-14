import { Link } from "react-router-dom";
import BrowseHome1 from "../../../assets/images/browse-home-1.png";
import BrowseHome2 from "../../../assets/images/browse-home-2.png";
import BrowseHome3 from "../../../assets/images/browse-home-3.png";
import BrowseHome4 from "../../../assets/images/browse-home-4.png";
import BrowseHome5 from "../../../assets/images/browse-home-5.png";

function CardTypeService() {
  const cateCard = [
    {
      type: "Ô tô",
      cateName: "Kiểm tra",
      img: BrowseHome1,
      path: "/service/testing"
    },
    {
      type: "Ô tô",
      cateName: "Bảo trì",
      img: BrowseHome2,
      path: "/service/maintain"
    },
    {
      type: "Ô tô",
      cateName: "Vệ sinh",
      img: BrowseHome3,
      path: "/service/cleaning"
    },
    {
      type: "Ô tô",
      cateName: "Nâng cấp",
      img: BrowseHome4,
      path: "/service/upgrade"
    },
    {
      type: "Ô tô",
      cateName: "Hỗ trợ",
      img: BrowseHome5,
      path: "/service/support"
    },
  ];

  const listCard = cateCard.map((il) => (
    <div className="flex justify-center lg:w-full max-w-xs" key={il.cateName}>
      <Link to={il.path}>
        <div className="w-full  rounded-xl relative text-white hover:text-white bg-cover shadow-lg overflow-hidden">
          <img
            src={il.img}
            alt={il.cateName}
            className="w-full h-[270px] sm:h-[296px] object-fit ease-in-out hover:scale-105 hover:brightness-50 transition-transform duration-300 rounded-xl"
          />
          <div className="absolute top-0 left-0 p-4">
            <div className="text-lg font-semibold uppercase tracking-wider">{il.type}</div>
            <div className="text-2xl font-bold">{il.cateName}</div>
          </div>
        </div>
      </Link>
    </div>
  ));
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {listCard}
    </div>
  );
}

export default CardTypeService;