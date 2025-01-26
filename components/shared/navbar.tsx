'use client';

import Link from 'next/link';
import React, { FormEvent, useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import ModeToggle from './mode-toggle';
import userStore from '@/store/user-store';

const Navbar = () => {
     const [token, setToken] = useState<boolean | null>(null)
     const [query, setQuery] = useState<string>('');
     const [menuOpen, setMenuOpen] = useState<boolean>(false);
     const router = useRouter();

     const handleSearch = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (query.trim()) {
               router.push(`/search?query=${query}`);
          }
     };

     useEffect(() => {

     }, [])

     return (
          <nav className="bg-[rgb(137,62,249)] sticky top-0 z-50 shadow-md">
               <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 xl:px-0 py-3">
                    <div className="flex items-center space-x-6 w-full xl:w-1/2">
                         <Link href="/">
                              <img
                                   src="./logo2.png"
                                   alt="Logo"
                                   className="cursor-pointer"
                                   width={150}
                              />
                         </Link>
                         <form
                              className="hidden xl:flex items-center bg-white rounded-lg px-3 py-2 w-full shadow-md"
                              onSubmit={handleSearch}
                         >
                              <button type="submit" aria-label="Search">
                                   <CiSearch size={20} />
                              </button>
                              <input
                                   type="text"
                                   placeholder="Search"
                                   value={query}
                                   onChange={(e) => setQuery(e.target.value)}
                                   className="w-full border-none outline-none px-2 text-gray-700"
                              />
                         </form>
                    </div>

                    <div className="flex items-center space-x-5 xl:space-x-8">
                         <div className="hidden xl:flex items-center space-x-5">
                              <ModeToggle />
                              <Link href="/likes" className="text-white hover:text-gray-200 transition">
                                   <FaRegHeart size={22} aria-label="Likes" />
                              </Link>
                              <Link href="/cart" className="text-white hover:text-gray-200 transition">
                                   <FiShoppingCart size={22} aria-label="Cart" />
                              </Link>
                              <button
                                   onClick={() => {
                                        const token = localStorage.getItem('access_token');
                                        router.push(token ? '/profile' : '/signin');
                                   }}
                                   className="text-white hover:text-gray-200 transition flex items-center space-x-2"
                                   aria-label="Profile"
                              >
                                   <FaRegUser size={22} />
                                   {userStore.user && <span>Profile</span>}
                              </button>
                         </div>

                         <button
                              onClick={() => setMenuOpen(!menuOpen)}
                              className="block xl:hidden text-white transition-transform duration-300"
                              aria-label="Menu"
                         >
                              {menuOpen ? <IoClose size={25} /> : <GiHamburgerMenu size={25} />}
                         </button>
                    </div>
               </div>
               <div
                    className={`fixed top-0 right-0 h-screen w-[300px] bg-[rgb(137,62,249)] shadow-lg z-50 transform transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                         }`}
               >
                    <button
                         onClick={() => setMenuOpen(false)}
                         className="absolute top-5 right-5 text-white"
                         aria-label="Close Menu"
                    >
                         <IoClose size={25} />
                    </button>
                    <div className="px-5 py-10 mt-4 flex flex-col space-y-5">
                         <form
                              className="flex items-center bg-white rounded-lg px-3 py-2 shadow-md"
                              onSubmit={handleSearch}
                         >
                              <button type="submit" aria-label="Search">
                                   <CiSearch size={20} />
                              </button>
                              <input
                                   type="text"
                                   placeholder="Search"
                                   value={query}
                                   onChange={(e) => setQuery(e.target.value)}
                                   className="w-full border-none outline-none px-2 text-gray-700"
                              />
                         </form>
                         <Link href="/likes" className="text-white flex items-center space-x-2">
                              <FaRegHeart size={22} />
                              <span>Likes</span>
                         </Link>
                         <Link href="/cart" className="text-white flex items-center space-x-2">
                              <FiShoppingCart size={22} />
                              <span>Cart</span>
                         </Link>
                         <button
                              onClick={() => {
                                   const token = localStorage.getItem('access_token');
                                   router.push(token ? '/profile' : '/signin');
                              }}
                              className="text-white hover:text-gray-200 transition flex items-center space-x-2"
                              aria-label="Profile"
                         >
                              <FaRegUser size={22} />
                              {localStorage.getItem('access_token') && <span>Profile</span>}
                         </button>
                         <div>
                              <ModeToggle />
                         </div>
                    </div>
               </div>
          </nav>
     );
};

export default Navbar;
