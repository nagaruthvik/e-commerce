import React from 'react'
import {ChevronDown} from "lucide-react"

export default function Category() {
    const category = [
        {
            id: 1,
            name : "Mobiles",
            img : "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/5f2ee7f883cdb774.png?q=100",
            nav :""
        },
        {
            id: 2,
            name : "Fashion",
            img : "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/ff559cb9d803d424.png?q=100",
            nav :""
        },{
            id: 3,
            name : "Laptops",
            img : "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/af646c36d74c4be9.png?q=100",
            nav :""
        },
        {
            id: 4,
            name : "Furniture",
            img : "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/1788f177649e6991.png?q=100",
            nav :""
        },
        {
            id: 5,
            name : "Electronics",
            img : "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/e90944802d996756.jpg?q=100",
            nav :""
        }
    ]
  return (
    <div className='flex items-center justify-around px-0 md:px-20 py-2'>
        {category.map((item,index)=>(
            <div className='bg-white p-1 md:p-2 flex  items-end justify-center border border-[#FF9899] rounded-xl' key={index}>

               
                <h6 className='text-xs md:text-sm font-semibold'>{item.name}</h6>
                <ChevronDown className='h-4'/>
            </div>
            
        ))}
    </div>
  )
}
