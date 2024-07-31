import React from "react";
import useFetch from "../hooks/useFetch";
import { getCategories } from "../utils/api";

const Category = () => {
  const { data: products, loading, error } = useFetch(getCategories);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="hidden sm:block w-[20%] h-full mb-40">
      <ul className="flex flex-col gap-[12px]">
        {products &&
          products.slice(0, 10).map((item) => (
            <li
              key={item.id}
              className="w-[217px] flex h-full items-center justify-between group cursor-pointer"
            >
              <span>{item.name}</span>
              <img
                src="../../assets/arrow.svg"
                alt="arrow"
                className="hidden group-hover:block"
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Category;
