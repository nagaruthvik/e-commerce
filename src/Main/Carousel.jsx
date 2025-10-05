import React, { useEffect, useState } from "react";

import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Carousel() {
    const [carouselNo, setcarouselNo] = useState(0);



    useEffect(()=>{

        
        const auto = setInterval(()=>{
            handleCarousel(+1)
        },2500)

        

        return ()=>clearInterval(auto)
    })


    const handleCarousel = (value)=>{
        let next = value + carouselNo

        if(next >= carouselItem.length){
            next = 0
        }

        if(next <0){
            next = carouselItem.length - 1
        }
        setcarouselNo(next)
    }


  const carouselItem = [
    {
      id: 1,
      img: "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/5b309e98775e22e4.jpg?q=60",
      nav: "",
    },
    {
      id: 2,
      img: "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/1f9c9ad24c2bc37b.jpg?q=60",
      nav: "",
    },
    {
      id: 3,
      img: "https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/dc9e8c0cb9f3c1de.jpg?q=60",
      nav: "",
    },
  ];
  return (
    <div  className="flex ">
      <button className="">
        <ChevronLeft  onClick={()=>handleCarousel(-1)} />
      </button>

      <div >
        <img src={carouselItem[carouselNo].img} alt="" />
      </div>

      <button className="">
        <ChevronRight onClick={()=>handleCarousel(-1)} />
      </button>
    </div>
  );
}
