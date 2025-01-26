'use client';

import React, { useEffect, useState } from 'react';
import Slider from '@/components/shared/slider';
import { Product } from '@/types';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import userStore from '@/store/user-store';
import { backend } from '@/http/api';

const MainPage: React.FC = () => {
     const [products, setProducts] = useState<Product[]>([]);
     const [likedProducts, setLikedProducts] = useState<number[]>(() => JSON.parse(localStorage.getItem('likedProducts') || '[]'));
     const [currentPage, setCurrentPage] = useState<number>(0);
     const router = useRouter();

     const productsPerPage: number = 8;
     const totalPages: number = Math.ceil(products.length / productsPerPage);

     const toggleLike = (productId: number) => {
          setLikedProducts((prevLikes) => {
               const updatedLikes = prevLikes.includes(productId)
                    ? prevLikes.filter((id) => id !== productId)
                    : [...prevLikes, productId];
               localStorage.setItem('likedProducts', JSON.stringify(updatedLikes));
               return updatedLikes;
          });
     };

     const getProductsForPage = (page: number): Product[] =>
          products.slice(page * productsPerPage, (page + 1) * productsPerPage);

     useEffect(() => {
          const interval = setInterval(() => {
               setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
          }, 10000);

          const fetchProducts = async () => {
               try {
                    const response = await backend.get('/all-products');
                    setProducts(response.data.products);
               } catch (error) {
                    console.error("Error fetching products:", error);
               }
          };

          fetchProducts();
          return () => clearInterval(interval);
     }, [totalPages]);

     const onNextProduct = () => {
          setCurrentPage((prev) => (prev + 1) % totalPages);
     };

     const onPrevProduct = () => {
          setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
     };

     const handleAddToCart = async (productId) => {
          try {
               const response = await backend.post(`/add-to-cart/${productId}`)
               console.log(response)
          } catch (error) {

          }
     }

     useEffect(() => {
          localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
     }, [likedProducts]);

     useEffect(() => {
          const user = localStorage.getItem('access_token');
          if (user) {
               userStore.setUser(user);
          }
     }, []);

     return (
          <div className="p-6">
               <Slider />

               <div className="mt-10 font-mono">
                    <h2 className="text-2xl font-bold mb-6">For Sale</h2>

                    <div className="slider-container overflow-hidden relative">
                         <div
                              className="slider-content flex transition-transform duration-500"
                              style={{
                                   transform: `translateX(-${currentPage * 100}%)`,
                                   width: `${totalPages * 100}%`,
                              }}
                         >
                              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                                   <div
                                        key={pageIndex}
                                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
                                        style={{ flex: '0 0 100%' }}
                                   >
                                        {getProductsForPage(pageIndex).map((product) => (
                                             <div
                                                  key={product._id}
                                                  className="bg-white shadow-lg rounded-lg p-4 relative group hover:scale-105 transform transition duration-300 h-[320px]"
                                             >
                                                  <div className="relative">
                                                       <Image
                                                            src={`http://localhost:5000/${product.images[0]}`}
                                                            width={100}
                                                            height={200}
                                                            alt={product.title}
                                                            onClick={() => router.push(`/products/${product._id}`)}
                                                            className="w-full h-40 object-cover rounded-lg mb-4 cursor-pointer"
                                                       />
                                                       <button
                                                            className={`absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 ${likedProducts.includes(product._id)
                                                                 ? 'text-red-500'
                                                                 : 'text-gray-500'
                                                                 }`}
                                                            onClick={() => toggleLike(product._id)}
                                                       >
                                                            {likedProducts.includes(product._id) ? '❤️' : '🤍'}
                                                       </button>
                                                  </div>
                                                  <p className="font-semibold text-lg truncate">{product.title}</p>
                                                  <p className="text-gray-600 text-sm">{`$${product.price}`}</p>
                                                  <button
                                                       className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
                                                       onClick={() => handleAddToCart(product._id)}
                                                  >
                                                       Add to Cart
                                                  </button>
                                             </div>
                                        ))}
                                   </div>
                              ))}
                         </div>
                    </div>

                    <div className="flex space-x-5 items-center justify-end mt-5">
                         <FaChevronLeft
                              size={40}
                              className="cursor-pointer hover:text-purple-500"
                              onClick={onPrevProduct}
                         />
                         <FaChevronRight
                              size={40}
                              className="cursor-pointer hover:text-purple-500"
                              onClick={onNextProduct}
                         />
                    </div>
               </div>
          </div>
     );
};

export default MainPage;
