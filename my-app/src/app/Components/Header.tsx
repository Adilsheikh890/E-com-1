"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Wrapper from './Wrapper'
import { AlignCenter, X } from 'lucide-react';


export default function Header() {
    const [toggle, setToggle]= useState(true)
    return (
      
      <div className="flex   sticky top-0 mt-4  z-10 md:mt-5 md:pl-20 pl-10 bg-white py-3 ">
  
                     <div className="  ">
                      <Link href="/">
                             <Image src="/logo.webp" alt='logo' width={150} height={150} ></Image>
                             </Link>
                      </div>
  
                      <div className=" md:flex hidden">
                          <ul className=" flex md:gap-10 md:pl-60">
                              <li>
                              <Link href="/Man">Man</Link>
                              </li>
                              <li>
                              <Link href="/Women">Women</Link>
                              </li>
                              <li>
                              <Link href="/Kids">Kids</Link>
                              </li>
                              <li>
                              <Link href="/All Product">All Product</Link>
                              </li>
                          </ul>
                      </div >
                      
                      
                      {/* hmburger */}
                      <div className=" pl-20 pr-4 md:hidden   gap-10 " onClick={()=>{setToggle(!toggle);}} >
  
                        {toggle ?
                            <AlignCenter size={25}/> : <X size={25} /> }
                            
                        </div>
  
                        {/* over lay */}
                        
                        {!toggle && (
                        <div className="fixed  md:pt-10 top-0 left-0 bg-gray-200  max-w-md w-[200px] h-full margin-auto  flex  text-center">
                        
                          <ul className=" pt-5 m-8 text-black ">
                              <li className="mx-5 my-2  text-xl border-b-2">
                              <Link href="/Man">Man</Link>
                              </li>
                              <li className="mx-5 my-2 pt-4 text-xl border-b-2">
                              <Link href="/Women">Women</Link>
                              </li>
                              <li className="mx-5 my-2  pt-4 text-xl border-b-2">
                              <Link href="/Kids">Kids</Link>
                              </li>
                              <li className="mx-5 my-2 pt-4 text-xl border-b-2">
                              <Link href="/All Product">All Product</Link>
                              </li>
                          </ul>
                      </div >
                       )}
                        
                      
                      
                      
                      
                  
                        </div>
                      
                     
                        
    )
  }
  