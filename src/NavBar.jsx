import React from "react";

import { ShoppingCart, CircleUser, EllipsisVertical } from "lucide-react";

export default function NavBar() {
  return (
    <div className="flex flex-col md:flex-row  justify-around items-center bg-gradient-to-r from-[#FFCBA5] to-[#FF9899] h-[100%]">
      <section>
        <h2 class="font-poppins md:text-4xl text-2xl  font-extrabold text-[#8B5E3C]">
          Squirrel
        </h2>
      </section>

      <section className="">
        <input
          className="bg-white w-full md:w-90 h-10 p-3 rounded-lg  border-none shadow-lg"
          type="text"
          name=""
          id=""
          placeholder="Search for products, brands and more"
        />
      </section>
      <section className="flex gap-10">
        <section>
          <ShoppingCart color="white" />
        </section>
        <section>
          <CircleUser color="white" />
        </section>
        <section>
          <EllipsisVertical color="white" />
        </section>
      </section>
    </div>
  );
}
