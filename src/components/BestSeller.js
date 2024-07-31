import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { getProducts } from "../utils/api";
import { Link } from "react-router-dom";
const BestSeller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, loading, error } = useFetch(getProducts);

  const itemsPerPage = 6;
  const totalPages = data?.length ? Math.ceil(data.length / itemsPerPage) : 0;

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalPages - 1));
  // };

  // const handlePrevious = () => {
  //   setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  // };

  const startIndex = currentIndex * itemsPerPage;
  const currentData = data?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col mb-20 gap-4 mt-20">
      <div className="flex items-center">
        <div className="bg-red-400 w-6 h-10 mr-2 rounded-sm"></div>
        <h1 className="title_text">This Month</h1>
      </div>
      <div className="items-center justify-between flex w-full">
        <div className="text-4xl flex font-semibold">Best Selling Products</div>
        <button className="bg-red-400 py-2 text-white px-8"> View All </button>
      </div>
      <div className="flex  gap-8 mb-4 overflow-y-hidden mt-10">
        {loading ? (
          [...Array(itemsPerPage)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center border rounded-md shadow-md bg-gray-200 animate-pulse"
              style={{ width: "200px", height: "300px" }}
            >
              <div className="w-full h-2/3 bg-gray-300 mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-300 mb-2"></div>
              <div className="w-1/2 h-4 bg-gray-300"></div>
            </div>
          ))
        ) : error ? (
          <p>Error loading data</p>
        ) : currentData && currentData.length > 0 ? (
          currentData.map((item) => (
            <Link
              to="#"
              key={item.id}
              className="flex flex-col items-center  justify-start rounded-md  relative cursor-pointer"
              style={{ width: "200px", height: "300px" }}
            >
              <div className="flex flex-col absolute right-2 top-2 gap-4 z-10">
                <div className="rounded-full bg-white flex items-center justify-center">
                  <img src="../../assets/Wishlist.svg" alt="Add to Wishlist" />
                </div>
                <div className="rounded">
                  <img src="../../assets/eye_fill.svg" alt="View Details" />
                </div>
              </div>
              <div className="w-full h-[80%]">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full object-cover mb-2"
                />
              </div>

              <h2 className="text-lg ">{item.title}</h2>
              <p className="text-sm text-left title_text flex items-left w-full">
                $120
                <span className="line-through text-gray-400 ml-2">$160</span>
              </p>
              <div className="flex space-x-1   mt-2 items-start   w-full">
                {[...Array(5)].map((_, i) => (
                  <img src="../../assets/star.svg" alt="Rating" key={i} />
                ))}
                <span className="text-sm text-gray-400">(100)</span>
              </div>
            </Link>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
