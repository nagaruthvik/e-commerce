import React from "react";
import NavBar from "./navbar/NavBar";
import Category from "./Main/Category";
import Carousel from "./Main/Carousel";
import TopProducts from "./Main/TopProducts";
import Footer from "./Footer";
import TopSection from "./Main/TopSection";

export default function HomePage() {
  return (
    <div className="flex flex-col  bg-[#fff0e6]">
      <main className="flex-1 flex flex-col gap-8 p-5 mt-4">
        <div className="bg-[#ffe1cc] p-2 rounded-md shadow-sm">
          <Category />
        </div>
        <div className="bg-[#ffe1cc] p-4 rounded-md shadow-md">
          <Carousel />
        </div>
        <div className="bg-[#ffe1cc] p-4 rounded-md shadow-sm">
          <TopProducts />
        </div>
        <div className="bg-[#ffe1cc] p-4 rounded-md shadow-sm">
          <TopSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
