import React, { useState } from "react";

export default function TopProducts() {
  const [topProducts, setTopProducts] = useState([
    {
      id: 1,
      name: "Redmi Note 13 5G",
      img: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/r/4/p/-original-imahf47e6gzt3ggw.jpeg?q=60",
      price: "₹13,499",
      nav: "/product/1",
      active: false,
    },
    {
      id: 2,
      name: "iQOO Z9 5G",
      img: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/h/q/k/-original-imahfw4vamrf5xhf.jpeg?q=60",
      price: "₹21,999",
      nav: "/product/2",
      active: false,
    },
    {
      id: 3,
      name: "Lava Blaze 5G",
      img: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/l/x/1/-original-imahdv5ttyhhyhg9.jpeg?q=60",
      price: "₹2,899",
      nav: "/product/3",
      active: false,
    },
    {
      id: 4,
      name: "Samsung Galaxy M14",
      img: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/j/n/1/-original-imah9gtmya9qhqse.jpeg?q=60",
      price: "₹27,499",
      nav: "/product/4",
      active: false,
    },
    {
      id: 5,
      name: "Realme Narzo 70 Pro",
      img: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/q/b/o/-original-imahfghxxmadhjm4.jpeg?q=60",
      price: "₹24,299",
      nav: "/product/5",
      active: false,
    },
    {
      id: 6,
      name: "Samsung Galaxy M14",
      img: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/j/n/1/-original-imah9gtmya9qhqse.jpeg?q=60",
      price: "₹27,499",
      nav: "/product/4",
      active: false,
    },
    {
      id: 7,
      name: "Realme Narzo 70 Pro",
      img: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/q/b/o/-original-imahfghxxmadhjm4.jpeg?q=60",
      price: "₹24,299",
      nav: "/product/5",
      active: false,
    },
  ]);

  const handleActive = (id) => {
    const updated = topProducts.map((item) =>
      item.id === id ? { ...item, active: true } : { ...item, active: false }
    );
    setTopProducts(updated);
  };

  return (
    <div className="">
      
      <div className="p-3 flex items-center justify-between">
        <h1 className="text-xl font-bold  ">Top Products</h1>
        <p className="text-sm ">View all</p>
      </div>
      <div className="px-3">
        <hr className="border border-[#D3D3D3]" />
      </div>
      
      <br />
      <div className="flex flex-wrap items-center justify-around p-3">
        {topProducts.map((item, index) => (
          <div
            key={index}
            className={`flex border ${
              item.active == true ? "border-[#FF9899]" : "border-none"
            } flex-col items-center shadow-md rounded-md p-3 md:p-4`}
            onMouseEnter={() => handleActive(item.id)}
          >
            <img className=" h-25 w-25 md:h-35 md:w-30" src={item.img} alt="" />
            <div className="flex flex-col items-start">
              <p className="text-xs md:text-sm">{item.name}</p>
              <p className="text-xs md:text-sm font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
