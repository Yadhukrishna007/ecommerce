import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { getCategories } from "../utils/api";
import { Link } from "react-router-dom";
const CategoryBrowse = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data, loading, error } = useFetch(getCategories);

  const itemsPerPage = 8; // Update the number of items per page
  const totalPages = data?.length ? Math.ceil(data.length / itemsPerPage) : 0;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalPages - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const startIndex = currentIndex * itemsPerPage;
  const currentData = data?.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center">
        <div className="bg-red-400 w-6 h-10 mr-2 rounded-sm"></div>
        <h1>Category</h1>
      </div>
      <div className="items-center justify-between flex w-full">
        <div className="text-4xl flex font-semibold">Browse By Category</div>
        <div className="flex gap-2 w-20">
          <button onClick={handlePrevious} disabled={currentIndex === 0}>
            <img src="../../assets/left_arrow.svg" alt="left_arrow" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= totalPages - 1}
          >
            <img src="../../assets/right_arrow.svg" alt="right_arrow" />
          </button>
        </div>
      </div>
      <div className="flex overflow-x-auto gap-4 mb-4">
        {loading ? (
          [...Array(itemsPerPage)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col w-[170px] items-center rounded-md relative border border-gray-300 bg-gray-200 animate-pulse h-40"
            >
              <div className="w-full mb-2 overflow-hidden h-[90%] bg-gray-300"></div>
              <div className="w-3/4 h-4 bg-gray-300 mb-2"></div>
            </div>
          ))
        ) : error ? (
          <p>Error loading data</p>
        ) : currentData && currentData.length > 0 ? (
          currentData.map((item, index) => (
            <Link
              to="#"
              key={index}
              className="flex flex-col w-[170px] cursor-pointer items-center rounded-md relative border-[1px] border-gray-400 h-40"
            >
              <div className="w-full mb-2 overflow-hidden h-[90%]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full object-cover mb-2"
                />
              </div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
            </Link>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
      <div className="bg-gray-400 w-full h-[1px] mt-10 "></div>
    </div>
  );
};

export default CategoryBrowse;
