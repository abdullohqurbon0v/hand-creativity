'use client'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import ModeToggle from './mode-toggle'
import { useRouter } from 'next/navigation'
import SaylerModal from '../modal/sayler-modal'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
     const [isOpen, setIsOpen] = useState<boolean>(false)
     const [query, setQuery] = useState<string>('')
     const router = useRouter()

     const handleSearch = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          router.push(`/search?query=${query}`);
     }

     const onClose = () => {
          setIsOpen(false)
     }

     const openModal = () => {
          setIsOpen(true)
     }

     return (
          <div className="bg-[rgb(137,62,249)]">
               <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 xl:px-0 py-1">
                    <div className="flex items-center space-x-12 w-1/2">
                         <Link href="/">
                              <img src="./logo.png" alt="Logo" className='cursor-pointer' />
                         </Link>
                         <form className="flex items-center py-3 px-2  space-x-2 bg-white rounded-lg w-full" onSubmit={handleSearch}>
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
                              onClick={openModal}
                         >
                              For sellers
                         </button>
                         <div className="hidden xl:flex items-center space-x-5">
                              <ModeToggle />
                              <Link href="likes" className="text-white cursor-pointer">
                                   <FaRegHeart size={22} />
                              </Link>
                              <Link href="cart" className="text-white cursor-pointer">
                                   <FiShoppingCart size={22} />
                              </Link>
                              <Link href="/signin" className="text-white cursor-pointer" >
                                   <FaRegUser size={22} />
                              </Link>
                         </div>
                         <div className='block xl:hidden'>
                              <GiHamburgerMenu size={25} className='text-white cursor-pointer' />
                         </div>
                    </div>
               </div>
               <SaylerModal isOpen={isOpen} onClose={onClose} />
          </div>
     )
}

export default Navbar;
