import React from "react";
import NavBar from "./navbar/NavBar";
import Category from "./Main/Category";
import Carousel from "./Main/Carousel";
import TopProducts from "./Main/TopProducts";
import Footer from "./Footer";

import { MoveUp } from "lucide-react";
import TopSection from "./Main/TopSection";

export default function HomePage() {
  return (
    <section className="flex flex-col h-screen">
     <div className="fixed top-0 left-0 w-full z-50">
        <NavBar />
      </div>

      

      <section className="flex-[8]  flex flex-col gap-10 justify-around h-full pt-34 md:pt-20 p-5">
        <section className="flex-2 ">
          <Category />
        </section>
        <section className="shadow-md flex-4 ">
          <Carousel />
        </section>
        <section className="flex-4">
          <section>
            <TopProducts />
          </section>
          <section>
             <TopSection/>
          </section>
        </section>
        
      </section>
      <Footer />
    </section>
  );
}
