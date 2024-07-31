import React from "react";
import Header from "../components/Header";
import { Navigation } from "../components/Navigation";
import Category from "../components/Category";

import SwiperSlide from "../components/SwiperSlide";

import FlashSale from "../components/FlashSale";
import CategoryBrowse from "../components/CategoryBrowse";
import BestSeller from "../components/BestSeller";
import Advertisement from "../components/Advertisement";
import ExploreProducts from "../components/ExploreProducts";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="w-screen ">
      <Header />
      <div className="px-20">
        <Navigation />
        <div className=" w-full">
          <div className="flex  w-full gap-20">
            <Category />
            <SwiperSlide />
          </div>

          <FlashSale />
          <CategoryBrowse />
          <BestSeller />
          <Advertisement />
          <ExploreProducts />
          <Services />
        </div>
      </div>
    </div>
  );
};

export default Home;
