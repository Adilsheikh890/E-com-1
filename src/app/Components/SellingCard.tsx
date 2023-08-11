import { Heart, ShoppingCart } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button"



const SellingCard=({
  src,
  alt,
  tittle,
  description,
  price,


} :{ 
  src:string;
  alt:string;
  tittle:string;
  description:string;
  price:number

}

  
    
   
)=> {
  return (
    
    <div>
          <div className="card glass md:w-[350px] p-4 shadow-md rounded-xl  md:h-[28rem]">
       <img src={src} alt="imag" width={400} height={400} className='rounded-xl' />
       <div className="card-body ">
       <h2 className="card-title pr-6">{tittle}</h2>
       <p>{description}</p>
       <p className="mb-4">${`number`}</p>
       <Button className="  hover:bg-transparent text-black
         scroll-m-20 tracking-tight font-semibold rounded-xl absolute bottom-4 right-4" >
        <ShoppingCart className="text-orange-500 duration-300 mr-1" />Add to Card</Button>

        <Button className=" group bg-black hover:bg-transparent text-white
        hover:text-black scroll-m-20 tracking-tight font-semibold rounded-xl absolute bottom-4 left-4" >
        <Heart className="group-hover:text-orange-500 duration-300 mr-1" />Buy Now</Button>
       </div>
       </div>
    </div>
  )
}

export default SellingCard