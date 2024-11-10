import { Link } from "react-router-dom";
import BrowseHome1 from "../../../assets/images/browse-home-1.png";
import BrowseHome2 from "../../../assets/images/browse-home-2.png";
import BrowseHome3 from "../../../assets/images/browse-home-3.png";
import BrowseHome4 from "../../../assets/images/browse-home-4.png";
import BrowseHome5 from "../../../assets/images/browse-home-5.png";

function cardTypeService() {
  const cateCard = [
    {
      type: "oto",
      cateName: "Kiểm tra ",
      img: BrowseHome1,
      path: "/service/testing"
    },
    {
      type: "oto",
      cateName: "Bảo trì",
      img: BrowseHome2,
      path: "/service/maintain"
    },
    {
      type: "oto",
      cateName: "Vệ sinh",
      img: BrowseHome3,
      path: "/service/cleaning"
    },
    {
      type: "oto",
      cateName: "Nâng cấp",
      img: BrowseHome4,
      path: "/service/upgrade"
    },
    {
      type: "oto",
      cateName: "Hỗ trợ",
      img: BrowseHome5,
      path: "/service/support"
    },
  ];

  const listCard = cateCard.map((il) => (
    <div className="" key={il}>
      <Link to={il.path}>
        <div className="w-[256px] h-[296px] rounded-xl relative text-black hover:text-white bg-cover">
          <div className="">
            <img
              src={il.img}
              className=" hover:brightness-50 transition duration-300 rounded-xl"
            ></img>
          </div>
          <div className="absolute top-0 left-0 p-4">
            <div>{il.type}</div>
            <div>{il.cateName}</div>
          </div>
        </div>
      </Link>
    </div>
  ));
  return <div className="flex flex-row gap-2">{listCard}</div>;
}

export default cardTypeService;
