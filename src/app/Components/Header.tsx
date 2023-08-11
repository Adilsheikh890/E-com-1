"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Wrapper from './Wrapper'
import { AlignCenter, X } from 'lucide-react';


export default function Header() {
    const [toggle, setToggle]= useState(true)
    return (
      
        <div className="  flex py-3 md:mt-5 md:pl-20 pl-10 sticky top-0 backdrop-blur-lg bg-gradient-to-tr from-white via-[#ffffffde] to-opacityDownColor z-20">
  
                     <div className="  ">
                      <Link href="/">
                             <Image src="/logo.webp" alt='logo' width={150} height={150} ></Image>
                             </Link>
                      </div>
  
                      <div className="md:flex hidden ">
                          <ul className=" flex md:gap-10 md:pl-60">
                              <li className='hover:text-orange-500 hover:underline text-lg font-serif'>
                              <Link href="/Man">Man</Link>
                              </li>
                              <li className='hover:text-orange-500 hover:underline text-lg font-serif '>
                              <Link href="/Women">Women</Link>
                              </li>
                              <li className='hover:text-orange-500  hover:underline text-lg font-serif'>
                              <Link href="/Kids">Kids</Link>
                              </li>
                              <li className='hover:text-orange-500 hover:underline text-lg font-serif'>
                              <Link href="/Product">All Product</Link>
                              </li>
                          </ul>

                          <div>
                    
                          </div>
                      
                    
                      <div className="flex pl-80 pb-8">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item bg-orange-300">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-300 shadow ">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
                      
                      
                      {/* hmburger */}
                      <div>
                      <div className=" pl-20 pr-4 md:hidden   gap-10 " onClick={()=>{setToggle(!toggle);}} >
  
                        {toggle ?
                            <AlignCenter size={25}/> : <X size={25} /> }
                            
                            </div>
  
                        {/* over lay */}
                        
                        {!toggle && (
                        <div className="fixed   top-0 left-0 bg-gray-200  max-w-md w-[200px]  h-[700px] margin-auto  flex  text-center">
                        
                          <ul className=" pt-5 m-8 text-black ">
                              <li className="mx-5 my-2  text-xl border-b-2 hover:text-orange-500 hover:underline font-serif">
                              <Link href="/Man">Man</Link>
                              </li>
                              <li className="mx-5 my-2 pt-4 text-xl border-b-2 hover:text-orange-500 hover:underline font-serif" >
                              <Link href="/Women">Women</Link>
                              </li>
                              <li className="mx-5 my-2  pt-4 text-xl border-b-2 hover:text-orange-500 hover:underline font-serif">
                              <Link href="/Kids">Kids</Link>
                              </li>
                              <li className="mx-5 my-2 pt-4 text-xl border-b-2 hover:text-orange-500 hover:underline font-serif">
                              <Link href="/Product">All Product</Link>
                              </li>
                              <div className=" items-center">
    <div className="dropdown dropdown-end pl-20 ">
      <label tabIndex={0} className="btn btn-ghost btn-circle ">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8  "fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-62  bg-base-100 shadow">
        <div className="card-body items-center">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    
                          </ul>
                         
                      </div >
                       )}
                       

   </div>






</div>
    )
  }
  