'use client'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { products } from '@/constants';
import Image from 'next/image';

const LikesPage: React.FC = () => {
     const [likedProducts, setLikedProducts] = useState<number[]>([]);
     const router = useRouter();
     const toggleLike = (productId: number) => {
          setLikedProducts((prevLikes) => {
               const updatedLikes = prevLikes.includes(productId)
                    ? prevLikes.filter((id) => id !== productId)
                    : [...prevLikes, productId];
               localStorage.setItem('likedProducts', JSON.stringify(updatedLikes));
               return updatedLikes;
          });
     };


     useEffect(() => {
          const storedLikes = JSON.parse(localStorage.getItem('likedProducts') || '[]');
          setLikedProducts(storedLikes);
     }, []);

     const likedProductList = products.filter((product) =>
          likedProducts.includes(product.id)
     );

     return (
          <div className="p-6 h-[56vh]">
               <h2 className="text-2xl font-bold mb-6">Liked Products</h2>
               {likedProductList.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                         {likedProductList.map((product) => (
                              <div
                                   key={product.id}
                                   className="bg-white shadow-lg rounded-lg p-4 relative group hover:scale-105 transform transition duration-300"
                              >
                                   <div className="relative">
                                        <Image
                                             src={product.image}
                                             width={100}
                                             height={200}
                                             alt={product.name}
                                             onClick={() => router.push(`/products/${product.id}`)}
                                             className="w-full h-40 object-cover rounded-lg mb-4 cursor-pointer"
                                        />
                                        <button
                                             className={`absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 ${likedProducts.includes(product.id)
                                                  ? 'text-red-500'
                                                  : 'text-gray-500'
                                                  }`}
                                             onClick={() => toggleLike(product.id)}
                                        >
                                             {likedProducts.includes(product.id) ? '❤️' : '🤍'}
                                        </button>
                                   </div>
                                   <p className="font-semibold text-lg truncate">{product.name}</p>
                                   <p className="text-gray-600 text-sm">{product.price}</p>
                                   <button
                                        className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
                                        onClick={() => console.log('Added to Cart:', product.id)}
                                   >
                                        Add to Cart
                                   </button>
                              </div>
                         ))}
                    </div>
               ) : (
                    <p className="text-gray-600">No liked products yet.</p>
               )}
          </div>
     );
};

export default LikesPage;
