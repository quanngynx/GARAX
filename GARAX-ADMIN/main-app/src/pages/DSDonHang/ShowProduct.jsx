import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductsCard from '../DSDonHang/components/ProductsCard';
// import Recommend from "./components/price";
import axios from 'axios';

function ShowProduct() {
  const [selectedCategory, setSelectedCategory] = useState(null); // Lọc danh mục
  const [products, setProducts] = useState([]); // State lưu trữ sản phẩm
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu
  const [error, setError] = useState(null); // Lỗi nếu có

  // Gọi API khi component được render
  useEffect(() => {
    axios.get('http://localhost:3306/api/v1/products') // API endpoint
      .then((response) => {
        setProducts(response.data); // Lưu dữ liệu vào state
        setLoading(false); // Kết thúc tải
      })
      .catch((error) => {
        console.error('Error fetching products:', error.message);
        setError(error.message); // Lưu lỗi
        setLoading(false); // Kết thúc tải
      });
  }, []);

  /**
   * Lọc dữ liệu theo danh mục
   */
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected) {
    if (!products) return [];
    let filtered = products;

    if (selected) {
      filtered = filtered.filter(
        ({ cost, range, transmission, fuel_type, title }) =>
          cost === selected ||
          range === selected ||
          transmission === selected ||
          fuel_type === selected ||
          title === selected
      );
    }
    return filtered;
  }

  const result = filteredData(products, selectedCategory);

  if (loading) return <div>Loading...</div>; // Hiển thị khi đang tải dữ liệu
  if (error) return <div>Error: {error}</div>; // Hiển thị lỗi

  return (
    <div>
      <div>Sản phẩm</div> 
      <div className="space-x-2 h-12 w-[100%] flex justify-between items-center">
        <Link to="">
          <MenuButton label="Tất cả phụ tùng" link="" />
        </Link>
        <Link to="">
          <MenuButton label="Phụ tùng điện" link="" />
        </Link>
        <Link to="">
          <MenuButton label="Phụ tùng động cơ" link="" />
        </Link>
        <Link to="">
          <MenuButton label="Phụ tùng nội thất" link="" />
        </Link>
        <Link to="">
          <MenuButton label="Phụ tùng ngoại thất" link="" />
        </Link>
      </div>
      <div className="flex flex-col md:w-full bg-white h-auto md:px-24 px-3 mb-6">
        <Recommend handleClick={handleClick} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {result.map((product) => (
          <ProductsCard key={product.id} {...product} />
        ))}
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
