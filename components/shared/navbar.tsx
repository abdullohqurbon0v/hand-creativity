'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import ModeToggle from './mode-toggle'

const Navbar = () => {
     const [query, setQuery] = useState('')
     return (
          <div className="bg-[rgb(137,62,249)]">
               <div className="max-w-[1200px] mx-auto flex items-center justify-between py-1">
                    <div className="flex items-center space-x-12 w-1/2">
                         <Link href="/">
                              <img src="./logo.png" alt="Logo" className='cursor-pointer' />
                         </Link>
                         <form className="flex items-center py-3 px-2  space-x-2 bg-white rounded-lg w-full">
                              <button type="submit">
                                   <CiSearch size={20} />
                              </button>
                              <input
                                   type="text"
                                   placeholder="Search"
                                   name="search"
                                   id="search"
                                   value={query}
                                   onChange={(e) => setQuery(e.target.value)}
                                   className="w-full border-none outline-none"
                              />
                         </form>
                    </div>
                    <div className="flex items-center space-x-5">
                         <button
                              className="bg-white text-[rgb(137,62,249)] px-10 py-2 rounded-lg font-semibold"
                         >
                              For sellers
                         </button>
                         <div className="flex items-center space-x-5">
                              <ModeToggle />
                              <Link href="likes" className="text-white cursor-pointer">
                                   <FaRegHeart size={22} />
                              </Link>
                              <Link href="cart" className="text-white cursor-pointer">
                                   <FiShoppingCart size={22} />
                              </Link>
                              <p className="text-white cursor-pointer" >
                                   <FaRegUser size={22} />
                              </p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Navbar