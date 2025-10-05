import React from 'react'

export default function Category() {
    const category = [
        {
            id: 1,
            name : "Mobiles and Tablets",
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
    <div className='flex items-center justify-around px-0 md:px-20 '>
        {category.map((item,index)=>(
            <div className='bg-white p-2 flex flex-col items-center justify-center' key={index}>

                <img src={item.img} className='h-15 w-15 md:h-20 md:w-20' alt="404" />
                <h6 className='text-sm font-semibold'>{item.name}</h6>
            </div>
            
        ))}
    </div>
  )
}
