import React from "react";

export default function TopProducts() {
  let topProducts = [
    {
      id: 1,
      img: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/r/4/p/-original-imahf47e6gzt3ggw.jpeg?q=60",
      price: "₹13,499",
      nav: "/product/1",
    },
    {
      id: 2,
      img: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/h/q/k/-original-imahfw4vamrf5xhf.jpeg?q=60",
      price: "₹21,999",
      nav: "/product/2",
    },
    {
      id: 3,
      img: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/l/x/1/-original-imahdv5ttyhhyhg9.jpeg?q=60",
      price: "₹2,899",
      nav: "/product/3",
    },
    {
      id: 4,
      img: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/j/n/1/-original-imah9gtmya9qhqse.jpeg?q=60",
      price: "₹27,499",
      nav: "/product/4",
    },
    {
      id: 5,
      img: "https://rukminim2.flixcart.com/image/240/240/xif0q/mobile/q/b/o/-original-imahfghxxmadhjm4.jpeg?q=60",
      price: "₹24,299",
      nav: "/product/5",
    },
  ];

  return (
    <div className="">
      <h1 className="text-xl font-bold p-3">Top Products</h1>
      <div className="flex items-center justify-around p-3">
        {topProducts.map((item, index) => (
          <div key={index} className="flex flex-col items-center  p-3">
            <img className="h-25 w-25 md:h-35 md:w-30" src={item.img} alt="" />
            <p className="font-semibold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
