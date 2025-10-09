import React from "react";

export default function ProductsPage() {
  return (
    <div className="flex gap-4 p-3 h-screen">
      <section className="bg-white flex-[8] flex flex-col">
        <div className="flex gap-4 mt-10   p-2">
          <p className="font-bold text-md font-inter">Sort By</p>
          <a href="" className="text-sm font-inter text-gray-800">
            Price High to Low
          </a>
          <a href="" className="text-sm font-inter text-gray-800">
            Popularity
          </a>
          <a href="" className="text-sm font-inter text-gray-800">
            Price Low to High
          </a>
          <a href="" className="text-sm font-inter text-gray-800">
            Relevence
          </a>
          <a href="" className="text-sm font-inter text-gray-800">
            Newest First
          </a>
        </div>
        <hr className="border border-[#f1f3f5]" />

        <section className="flex flex-col">
          <div className="flex">
            <div className="flex-[1]">
              <img
                src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/f/r/h/-original-imahft6chdhxfwhj.jpeg?q=70"
                alt=""
              />
            </div>
            <div className="flex-[1]"></div>
            <div className="flex-[1]"></div>
          </div>
        </section>
      </section>

      <section className="bg-white flex-[2]"></section>
    </div>
  );
}
