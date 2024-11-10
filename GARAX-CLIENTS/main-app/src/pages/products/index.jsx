import { useState } from "react";
// import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { cardProducts } from "../../data/index";
import ProductsCard from "../../components/card";
import Products from "./components/products";
import Recommend from "./components/price";

function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  /**
   *
   * @param {*} e
   * @returns products filtered when click buttons
   */
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };
  function filteredData(pro, selected) {
    let filtered = pro;

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
    return filtered.map(
      ({
        image,
        title,
        description,
        // descriptionDetail1,
        // descriptionDetail2,
        range,
        transmission,
        fuel_type,
        year,
        cost,
      }) => (
        <ProductsCard
          key={Math.random()}
          image={image}
          title={title}
          description={description}
          // descriptionDetail1={descriptionDetail1}
          // descriptionDetail2={descriptionDetail2}
          range={range}
          transmission={transmission}
          fuel_type={fuel_type}
          year={year}
          cost={cost}
        />
      )
    );
  }

  const result = filteredData(cardProducts, selectedCategory);

  return (
    <div className="flex flex-col bg-white justify-center">
      <div className="mb-6">
        <div className="flex flex-col md:w-full bg-white h-auto md:px-24 px-3 mb-6">
          <Recommend handleClick={handleClick} />
        </div>
        <div className="md:w-full bg-white h-auto px-24">
          <Products result={result} />
        </div>

        <div className="flex justify-center items-center mt-6">
          <Stack spacing={2}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
