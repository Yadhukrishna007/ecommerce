import React from "react";
import AdvTimer from "../utils/advTrimer";

const Advertisement = () => {
  return (
    <div className="h-96 bg-black flex  px-16 py-12 mb-20">
      <div className="flex flex-col gap-6 w-1/2">
        <h2 className="text-green-400 font-semibold">Categories</h2>
        <h1 className="text-white text-5xl">
          Enhance Your
          <br />
          Music Experience
        </h1>

        <AdvTimer targetDate="2024-08-31T00:00:00" />
        <button className="bg-green-400 p-2 text-center text-white w-32 ">
          Buy now!
        </button>
      </div>
      <div
        className="w-1/2 h-full  flex items-center justify-center
      
     "
      >
        <img src="../../assets/jbl.png" alt="jbl" />
      </div>
    </div>
  );
};

export default Advertisement;
