import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { cardProducts } from "@/__mock__";
import ProductsCard from "@/components/card/card";
import Products from "./components/products";
import Recommend from "./components/price";
import { Breadcrumb } from "@/components/breadcrumb";

export function ProductPage() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = cardProducts.slice(startIndex, endIndex);

  // const totalPages = Math.ceil(cardProducts.length / itemsPerPage);

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  /**
   *
   * @param {*} e
   * @returns products filtered when click buttons
   */
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };
  function filteredData(pro, selected, currentItems) {
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
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = filtered.slice(startIndex, endIndex);
    return paginatedItems.map(
      ({
        id,
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
          key={id}
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
          descriptionDetail1={""} 
          descriptionDetail2={""}
          />
      )
    );
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePageChange2 = (event, value) => {

    setCurrentPage(value);
  };

  const totalPages = Math.ceil(
    (selectedCategory
      ? cardProducts.filter(
        ({ cost, range, transmission, fuel_type, title }) =>
          cost === selectedCategory ||
          range === selectedCategory ||
          transmission === selectedCategory ||
          fuel_type === selectedCategory ||
          title === selectedCategory
      )
      : cardProducts
    ).length / itemsPerPage
  );

  const result = filteredData(cardProducts, selectedCategory, currentPage);

  return (
    <div className="flex flex-col bg-white justify-center mt-24 w-[1222px]">
      <div className="mb-6">
        <div className="md:w-full flex flex-col bg-white h-auto px-3">
          <Breadcrumb
            homeElement={"Trang chủ"}
            separator={
              <span className="py-1 font-semibold text-black">/</span>
            }
            activeClasses="text-[#2c5282]"
            parentClasses="flex"
            childClasses="hover:bg-slate-200 text-black mx-2 font-semibold px-1 py-1 rounded-lg"
            capitalizeLinks
          />

          <div className="text-black font-semibold text-2xl uppercase px-3 my-4">
          Sản phẩm
          </div>

          <div className="w-full h-[0.5px] bg-slate-200">d</div>
        </div>
        <div className="flex flex-col md:w-full bg-white h-auto px-3 mb-6">
          <Recommend handleClick={handleClick} />
        </div>
        <div className="md:w-full bg-white h-auto">
          <Products result={result} />
        </div>

        <div className="flex justify-center items-center mt-6">
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange2}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </div>

        {/* <div className="flex justify-center mt-[20px]">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`text-black py-[10px] px-[15px] mx-[5px] border-1 border-red-200 cursor-pointer ${currentPage === index + 1 ? "active" : ""}`}
            >
              {index + 1}
            </button>
          ))}
        </div> */}
      </div>
    </div>
  );
}
