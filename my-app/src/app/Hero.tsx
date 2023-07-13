import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import Wrapper from './Components/Wrapper';
import { CalendarPlus, CircleDollarSign, Heart, Monitor, ShoppingCart, Truck, Users2 } from 'lucide-react';



export default function Hero() {
    return (
  <Wrapper>
      <div>
        <div className="flex md:flex-row flex-col md:gap-40 ">
          <div className="md:w-4/6 pt-20"> 
            <button className="bg-slate-200 font-bold rounded-full py-2  px-6 font-sans text-blue-800">Sale 70%</button>
            <h2 className="pt-10 font-serif  md:text-7xl text-3xl text-extrabold">An Industrial <br/>Take on <br/> Streetwear</h2>
            <p className="pt-10 text-lg text-gray-600">Anyone can beat you but no one can beat <br/> your outfit as long as you wear Dine outfits.</p>
            <div className="pt-8 mb-5">
              <Link href="/Shopping">
            <button className="bg-black text-white rounded-full  py-2  p-1 md:px-3 flex gap-2">  <ShoppingCart  size={25}/>Start Shopping</button>
            </Link>
            </div>
           
          </div>
  
          {/* image */}
          <div className="flex md:w-3/4 md:mt-10">

            <Image src="/kopk.PNG" alt="logo" width={800} height={300} className="  rounded-full object-center  "></Image>
          </div>
        </div>
        

        <div className="flex md:flex-row flex-col  gap-20 md:mt-40 md:pl-40">

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
          <div className="text-center font-serif text-2xl md:mt-20">
            <h3>Our Promotions Events</h3>
          </div>

          
          
          
  
          <div className="flex md:flex-row flex-col md:gap-2 ">
          {/* first */}
         <div className="md:pl-40 md:pt-20 mt-3 ">
          
        
          <Image src="/pu.webp" alt="image" width={300} height={250}  className="max-h-[250px]  h-250 rounded-md">
         
          </Image>
        
          </div>
        
         
         {/* second */}
         <div className=" md:pt-20 mt-3 rounded-full ">
          <Image src="/cap.webp" alt="image" width={300} height={300} className=" h-300 max-h-[300px] "></Image>
         </div>
         {/* third */}
         <div className=" md:pt-20 mt-3  " >
          <Image src="/white.webp" alt="image" width={300} height={300} className="max-h-[300%] h-300 rounded-md" ></Image>
         </div>
         </div>
  
         </div>
         
  
  
  
         {/* secomnd 3 images */}
  
         <div className="flex md:flex-row flex-col md:gap-2 ">
          {/* first */}
         <div className="md:pl-40 md:pt-10 mt-3  ">
          <Image src="/yello.jpg" alt="image" width={300} height={300} className=" max-h-[300px] h-300 rounded-lg  "></Image>
          
         </div>
         {/* second */}
         <div className=" md:pt-10 mt-3 ">
          <Image src="/gh.webp" alt="image" width={300} height={250} className=' max-h-[250px] h-250 rounded-md '></Image>
         </div>
         {/* third */}
         <div className=" md:pt-10 mt-3  " >
          <Image src="/t.jpg" alt="image" width={300} height={250} className="max-h-[250px] h-250 rounded-md" ></Image>
         </div>
         </div>
  
         {/* new page  */}
         <div className=" bg-gray-100   ">
  
          <div className='flex mdflex-row gap-2 md:pl-10 md:w-1/2 mt-20 '>
            <div>
            <h3 className="text-black  font-bold mt-10">Using Good Quality <br/> Materials</h3>
            <p className="font-sans text-gray-600">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
  
            <div>
            <h3 className="text-black  font-bold mt-10">100% Handmade <br/> Products</h3>
            <p className="font-sans text-gray-600">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            </div>
  
            <div className='flex mdflex-row gap-2 md:pl-10 md:w-1/2 mt-5 '>
            <div>
            <h3 className="text-black  font-bold mt-10">Modern Fashion <br/> Design</h3>
            <p className="font-sans text-gray-600">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
  
            <div>
            <h3 className="text-black  font-bold mt-10">Discount for Bulk  <br/> Orders</h3>
            <p className="font-sans text-gray-600">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </div>
            </div>
            
  
            {/* right side */}
            <div className='flex mdflex-row gap-2 md:pl-10  mt-5 '>
            <span>
            <h3 className="text-black  font-bold mt-10">Modern Fashion <br/> Design</h3>
            <p className="font-sans text-gray-600">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
            </span>
            </div>
        </div>
  
        {/* last page */}
        <div className="">
        <span className="absolute text-gray-200 font-extrabold md:mb-20  md:pl-60 text-[170px]  md:text-9xl md:text-center -z-10 ">NewsLetter</span>
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
                className="mx-auto block px-5 py-2  rounded-md  bg-gradient-to-b from-gray-300 text-black to-gray-600"
              >
                Get started
              </button>
              </div>
            </form>
           
            </div>
            </div>
            
            </div>
            </Wrapper>
    )
  }
  
