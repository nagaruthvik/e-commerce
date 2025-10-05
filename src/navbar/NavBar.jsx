import React, { useState } from "react";

import { ShoppingCart, CircleUser, EllipsisVertical } from "lucide-react";

export default function NavBar() {
  const [accountTab,openAccountTab] = useState(false)
  const [dotTab,openDotTab] = useState(false)

  const [isHover,setHoverd] = useState(false)

  const handleAccountTab = ()=>{
    openAccountTab(!accountTab)
    if(dotTab){
      openDotTab(false)
    }
  }

  
  const handleDotTab = ()=>{
    openDotTab(!dotTab)
    if(accountTab){
      openAccountTab(false)
    }
  }
  return (
    <div className="flex flex-col md:flex-row p-3  justify-around items-center bg-gradient-to-r from-[#FFCBA5] to-[#FF9899] h-[100%]">
      <section>
        <h2 className="font-poppins md:text-4xl text-2xl  font-extrabold text-[#8B5E3C]">
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
          <ShoppingCart  className="text-white cursor-pointer hover:drop-shadow-[0_0_10px_white]"  />
        </section>
        <section>
          <CircleUser onClick={handleAccountTab}   className="text-white cursor-pointer hover:drop-shadow-[0_0_10px_white]" />
          {
            accountTab && (
              <div className="absolute  p-4 shadow-md bg-white item-center justify-center flex flex-col md:gap-5 gap-2">

                <p>settings</p>
                <p>Wishlist</p>
                <p>Orders</p>
                
              </div>
            )
          }
        </section>
        <section>
          <EllipsisVertical  onClick={handleDotTab}   className="text-white cursor-pointer hover:drop-shadow-[0_0_10px_white]"  />
          {
            dotTab && (
              <div className="absolute p-4 shadow-md bg-white item-center justify-center flex flex-col md:gap-5 gap-2 ">

              
                <p>Logout</p>
                
              </div>
            )
          }
        </section>
      </section>
    </div>
  );
}
