import React, { useState, useEffect } from "react";
import { getProducts } from "../utils/api";
import { Link } from "react-router-dom";
const ExploreProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(getProducts)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setData(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const itemsPerPage = 12;
  const itemsPerRow = 6;
  const totalPages = data.length ? Math.ceil(data.length / itemsPerPage) : 0;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalPages - 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const startIndex = currentIndex * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const rows = [];
  for (let i = 0; i < currentData.length; i += itemsPerRow) {
    rows.push(currentData.slice(i, i + itemsPerRow));
  }

  return (
    <div className="flex flex-col gap-4 mb-20">
      <div className="flex items-center">
        <div className="bg-red-400 w-6 h-10 mr-2 rounded-sm"></div>
        <h1 className="title_text">Our Products</h1>
      </div>
      <div className="items-center justify-between flex w-full">
        <div className="text-4xl flex font-semibold">Explore Our Products</div>
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
      <div className="flex flex-col gap-4 mb-4">
        {loading ? (
          [...Array(2)].map((_, rowIndex) => (
            <div key={rowIndex} className="flex gap-4">
              {[...Array(itemsPerRow)].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center border rounded-md shadow-md bg-gray-200 animate-pulse"
                  style={{ width: "200px", height: "300px" }}
                >
                  <div className="w-full h-2/3 bg-gray-300 mb-2"></div>
                  <div className="w-3/4 h-4 bg-gray-300 mb-2"></div>
                  <div className="w-1/2 h-4 bg-gray-300"></div>
                </div>
              ))}
            </div>
          ))
        ) : rows.length > 0 ? (
          rows.map((row, rowIndex) => (
            <Link to="#" key={rowIndex} className="flex gap-4">
              {row.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center border rounded-md shadow-md  relative cursor-pointer"
                  style={{ width: "200px", height: "300px" }}
                >
                  <div className="flex flex-col absolute right-2 top-2 gap-4 z-10">
                    <div className="rounded">
                      <img src="../../assets/eye_fill.svg" alt="eye_fill" />
                    </div>
                    <div className="rounded-full bg-white flex items-center justify-center">
                      <img src="../../assets/Wishlist.svg" alt="wishlist" />
                    </div>
                  </div>
                  <div className="w-full h-[80%]">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full object-cover mb-2"
                    />
                  </div>

                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm gap-2 flex items-center  -space-y-[4px]">
                    <span className="title_text">$120</span>
                    <div className="flex space-x-1 mt-2 ">
                      {[...Array(5)].map((_, i) => (
                        <img key={i} src="../../assets/star.svg" alt="star" />
                      ))}
                      <span className="text-sm text-gray-400">(100)</span>
                    </div>
                  </p>
                </div>
              ))}
            </Link>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
      <div className="flex items-center justify-center mt-10">
        <button to="/products" className="title rounded-sm p-2 px-8 text-white">
          View all products
        </button>
      </div>
    </div>
  );
};

export default ExploreProducts;
