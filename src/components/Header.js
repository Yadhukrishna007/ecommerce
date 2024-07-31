import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" hidden sm:flex w-full h-[48px] items-center justify-center text-white bg-black">
      <h1>
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </h1>
      <Link className="font-bold underline ml-4">Shop now</Link>
    </div>
  );
};

export default Header;
