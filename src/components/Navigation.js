import React, { useState } from "react";
import { Link } from "react-router-dom";

const arr = ["Home", "Contact", "About", "Sign Up"];
export const Navigation = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className="bg-white flex items-center justify-between h-20 my-4 ">
      <h1 className="text-2xl font-bold cursor-pointer">Royal Class</h1>
      <ul className="flex gap-20 ">
        {arr.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer ${
              activeIndex === index ? "underline" : ""
            }`}
            onMouseOver={() => setActiveIndex(index)}
          >
            <Link to="#">{item}</Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-8 ">
        <div className="item-center justify-between flex space-y-2 gap-6 bg-[#F5F5F5] px-4">
          <input
            placeholder="What are you looking for?"
            className="bg-[#F5F5F5] outline-none"
          ></input>
          <span>
            <img
              src="../../assets/Vector.svg"
              alt="search"
              className="cursor-pointer"
            />
          </span>
        </div>
        <img
          src="../../assets/Wishlist.svg"
          alt="wishlist"
          className="cursor-pointer"
        />
        <img
          src="../../assets/Cart.svg"
          alt="cart"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};
