import React from "react";
import NavBar from "./navbar/NavBar";
import Category from "./Main/Category";
import Carousel from "./Main/Carousel";
import TopProducts from "./Main/TopProducts";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <section className="flex flex-col h-screen">
      <section className="flex-[1]">
        <NavBar />
      </section>
      <section className="flex-[8] flex flex-col gap-5 justify-around h-full p-3">
        <section className="shadow-md flex-2 ">
          <Category />
        </section>
        <section className="shadow-md flex-4 ">
          <Carousel />
        </section>
        <section className="shadow-md flex-4">
          <section>
            <TopProducts />
          </section>
          <section></section>
        </section>
       
      </section>
       <Footer />
    </section>
  );
}
