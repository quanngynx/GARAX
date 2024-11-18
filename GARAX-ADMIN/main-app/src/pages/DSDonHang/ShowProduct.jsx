import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ShowProduct(){
    return(

        <div>
            <div>Sản phẩm</div> 
            <div className="space-x-2 h-12 w-[100%] flex justify-between items-center">
                <Link to="">
                    <MenuButton
                        label="Tất cả phụ tùng"
                        link=""
                    />
                </Link>
                <Link to="">
                    <MenuButton
                        label="Phụ tùng điện"
                        link=""
                    />
                </Link>
                <Link to="">
                    <MenuButton
                        label="Phụ tùng động cơ"
                        link=""
                    />
                </Link>
                <Link to="">
                    <MenuButton
                        label="Phụ tùng nội thất"
                        link=""
                    />
                </Link>
                <Link to="">
                    <MenuButton
                        label="Phụ tùng ngoại thất"
                        link=""
                    />
                </Link>
            </div>
            <div>

            </div>
        </div>
    );
}
function MenuButton({ label, link }) {
    const location = useLocation();
    const path = location.pathname;
    return (
      <button
        className={`rounded-2xl border-2 group w-full flex items-center p-2 mt-2 transition duration-300 ${
          path === link
            ? "bg-black text-white "
            : "hover:bg-gray-200 hover:text-black"
        }`}
      >
        <p className="text-sm font-semibold">{label}</p>
      </button>
    );
  }
export default ShowProduct;