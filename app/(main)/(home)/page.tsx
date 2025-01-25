'use client';
import React, { useEffect, useState } from 'react';
import Slider from '@/components/shared/slider';
import { products } from '@/constants';
import { Product } from '@/types';
import { useRouter } from 'next/navigation';

const MainPage: React.FC = () => {
     const [currentPage, setCurrentPage] = useState<number>(0);
     const productsPerPage: number = 8;
     const totalPages: number = Math.ceil(products.length / productsPerPage);
     const router = useRouter()

     const getProductsForPage = (page: number): Product[] =>
          products.slice(page * productsPerPage, (page + 1) * productsPerPage);

     useEffect(() => {
          const interval = setInterval(() => {
               setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
          }, 10000);

          const getProducts = async () => {
               // API CALL
          }


          getProducts()
          return () => clearInterval(interval);
     }, [totalPages]);

     return (
          <div className="p-6">
               <Slider />
               <div className="mt-10 font-mono">
                    <h2 className="text-2xl font-bold mb-6">For Sale</h2>
                    <div className="slider-container">
                         <div
                              className="slider-content"
                              style={{
                                   transform: `translateX(-${currentPage * 100}%)`,
                                   width: `${totalPages * 100}%`,
                              }}
                         >
                              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                                   <div
                                        key={pageIndex}
                                        className="grid grid-cols-4 gap-6 w-full"
                                        style={{ flex: '0 0 100%' }}
                                   >
                                        {getProductsForPage(pageIndex).map((product) => (
                                             <div
                                                  key={product.id}
                                                  className="bg-white shadow rounded-lg p-4 text-center"
                                             >
                                                  <img
                                                       src={
                                                            'https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg'
                                                       }
                                                       alt={product.name}
                                                       onClick={() => {
                                                            router.push(`/products/${product.id}`)
                                                       }}
                                                       className="w-full h-40 object-cover rounded-lg mb-4"
                                                  />
                                                  <p className="font-semibold">{product.name}</p>
                                                  <p className="text-gray-600">{product.price}</p>
                                                  <button className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg" onClick={() => {
                                                       console.log("Helo", product.id)
                                                  }}>
                                                       Add to Cart
                                                  </button>
                                             </div>
                                        ))}
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default MainPage;
