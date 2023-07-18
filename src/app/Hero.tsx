import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Wrapper from './Components/Wrapper';
import { CalendarPlus, CircleDollarSign, Heart, HeartCrack, HeartIcon, Monitor, ShoppingBag, ShoppingCart, Truck, Users2 } from 'lucide-react';



export default function Hero() {
    return (
      
  <Wrapper>
      <div className='px-5'>
        <div className="flex md:flex-row flex-col md:gap-40  ">
          <div className="md:w-4/6 pt-20"> 
            <button className="bg-slate-200 font-bold rounded-full py-2  px-6 font-sans text-blue-800">Sale 70%</button>
            <h2 className="pt-10 font-serif  md:text-7xl text-3xl text-extrabold">An Industrial <br/>Take on <br/> Streetwear</h2>
            <p className="pt-10 text-lg text-gray-600">Anyone can beat you but no one can beat <br/> your outfit as long as you wear Dine outfits.</p>
            <div className="pt-8 mb-5">
              <Link href="/Product">
            <button className="bg-black text-white rounded-full  py-2  p-1 md:px-3 flex gap-2">  <ShoppingCart  size={25}/>Start Shopping</button>
            </Link>
            </div>
           
          </div>
  
          {/* image */}
          <div className="flex md:w-3/4 md:mt-10 pt-8  px-5 mb-5">

            <Image src="/My project.png" alt="logo" width={800} height={300} className="  rounded-l-full  bg-yellow-200"></Image>
          </div>
        </div>
        

        <div className="flex md:flex-row flex-col  md:gap-20 gap-8 md:mt-40 md:pl-[10%] ">

        <div className='flex  gap-5'>
          <Truck size={30} className='mt-1'/>
          <h2 className='font-medium'>Free Shipping  <br />on all orders over $200</h2>
        </div>

        <div className='flex  gap-5'>
          < Users2 size={30} className='mt-1'/>
          <h2 className='font-medium'>Dedicated Support  <br />Quick Response 24/7</h2>
        </div>

        <div className='flex  gap-5'>
          <CircleDollarSign size={30} className='mt-1'/>
          <h2 className='font-medium'>MoneyBack Gurrantee <br />Worry-free shopping</h2>
        </div>
        </div>
  
        {/* second part */}
       <div>
          <div className="text-center font-serif font-bold text-2xl md:mt-20 pr-[6%] mt-10">
            <h3>Our Promotions Events</h3>
          </div>
          <div className="flex md:flex-row flex-col md:gap-2 ">

          {/* first */}
         <div className="md:pl-20 px-35 pr-3  md:pt-20 mt-3 relative ">
          <Image src="/pu.webp" alt="image" width={300} height={250}  className="max-h-[250px]  h-250 rounded-xl ">
          </Image>
          <h3 className="absolute bottom-0 pl-4 text-white font-extrabold text-lg">Headphone</h3>
          <HeartIcon size={10} className='absolute bottom-0 pl-10'/>
          </div>
        
         
         {/* second */}
         <div className=" md:pt-20 mt-3  relative  ">
          <Image src="/cap.webp" alt="image" width={300} height={300} className=" h-300 max-h-[300px] rounded-xl "></Image>
          <h3 className="absolute bottom-4 pl-4 text-white font-extrabold text-lg">9FORTY Cap</h3>
         </div>
         {/* third */}
         <div className=" md:pt-20 mt-3  relative " >
          <Image src="/white.webp" alt="image" width={300} height={300} className="max-h-[300%] h-300 rounded-xl" ></Image>
          <h3 className="absolute bottom-0 pl-4 text-white font-extrabold text-lg"> RAISE White Shoes</h3>
         </div>
         </div>
         </div>
         
  
  
  
         {/* secomnd 3 images */}
  
          {/* first */}
         <div className="flex md:flex-row flex-col md:gap-2  ">

         <div className="md:pl-20 px-35 pr-3 md:pt-10 mt-3 relative ">
          <Image src="/yello.jpg" alt="image" width={300} height={300} className="  h-300 rounded-xl"></Image>
          <h3 className="absolute bottom-3 pl-4 text-white font-extrabold text-lg">Sweat Shirt</h3>
         </div>
         {/* second */}
         <div className=" md:pt-10 mt-3 relative ">
          <Image src="/lp.webp" alt="image" width={300} height={300} className= ' h-300 rounded-xl '></Image>
          <h3 className="absolute bottom-3 pl-4 text-white font-extrabold text-lg">Laptop Bag</h3>
         </div>
         {/* third */}
         <div className=" md:pt-10 md:mt-4  relative" >
          <Image src="/shoes.webp" alt="image" width={310} height={300} className=" h-300  max-h-300 bg-pink-300 rounded-xl" ></Image>
          <h3 className="absolute bottom-3 pl-4 text-white font-extrabold text-lg">Running Shoes</h3>
         </div>
         </div>
  
         {/* new page  */}
         <div className="  mt-10 bg-slate-800 flex md:flex-row md:gap-20 flex-col rounded-xl">
          <div className='rounded-xl'>
            
            <Image src="/hy.jpg" alt='image' width={800} height={200} />

          </div>
          <div className=' pl-8'>
            <h1 className='mt-20 font-bold text-white pb-8 text-xl  '>T-Shirt Occasion</h1>
            <h4 className='font-serif text-yellow-400'>Simply put t-shirts are amazing for everyday wear. They are super comfy 
              and come in a seemingly unlimited number 
              of colors and styles From their humble beginnings as an under garment
               t-shirts have now become one of the most popular apparel items. </h4>
               <h4 className='font-serif text-yellow-400'>Simply put t-shirts are amazing for everyday wear. They are super comfy 
              and come in a seemingly unlimited number 
              of colors and styles From their humble beginnings as an under garment
               t-shirts have now become one of the most popular apparel items. </h4>
               
               <div className="pt-8 mb-5">
              <Link href="/Product">
            <button className=" bg-orange-500 text-white rounded-full  font-bold md:py-2  p-2 md:px-4 flex gap-2">  <ShoppingBag  size={25}/>Shop Now</button>
            </Link>
            </div>

               
          </div>
          
            
        </div>




        </div>

  
        {/* last page */}
        <div className="">
        <span className="absolute text-gray-200 font-bold md:mb-20  md:pl-60  md:text-[120px] pl-[15%]  md:text-center -z-10 ">NewsLetter</span>
          <div className=" text-center  mt-40">
          
            <h1 className="font-extrabold text-black md:text-4xl">Subscribe Our Newsletter</h1>
            
            <p className="mt-3 font-sans text-gray-400">Get the latest information and promo offers directly</p>
            
           
            </div> 
           
            <div>
            
           
            
            <form action="https://formspree.io/f/mbjeaqpn" method="POST" className=" md:p-5  text-center pt-5">
              
              <div className="my-5 text-center">
                <input
                  required
                  className="md:p-2 md:w-80 bg-transparent border-2 rounded-md focus:outline-none text-white"
                  placeholder="Your E-Mail"
                  type="email"
                  name="email"
                />
              </div>
              
             <div className="mb-40">
             <button
                type="submit"
                className="mx-auto block px-5 py-2  rounded-full  bg-gradient-to-b from-gray-300 text-black to-gray-600"
              >
                Get started
              </button>
              </div>
            </form>
           
            </div>
            </div>
            
            
            </Wrapper>
            
    )
  }
  
