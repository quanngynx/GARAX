import { useState } from "react";

import { cardProducts } from "../../data/index";
import ProductsCard from "../home/components/cardProduct";
import Category from "./components/category";
import Price from "./components/price";

/** 
 * @example
 * import {useNavigate} from 'react-router-dom
 * 
 * const directTo = useNavigate()
 * directTo('path')
 */

function ProductPage() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredItems = cardProducts.filter(
        (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  return (
    <div className="flex flex-col bg-white justify-center">
      <div className="mb-6">
        <div className="flex flex-col md:w-full bg-white h-auto px-24 mb-6">
          <Category />
          <Price />
        </div>
        <div className="md:w-full bg-white h-auto px-24">
          <div className="grid grid-cols-4 gap-2">
            {cardProducts.map((card, index) => (
              <ProductsCard card={card} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
