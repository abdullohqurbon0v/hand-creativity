'use client';

import { backend } from '@/http/api';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const SearchPage = () => {
     const [searchedProducts, setSearchedProducts] = useState([]);
     const [loading, setLoading] = useState(true);
     const searchParams = useSearchParams();
     const query = searchParams.get('query');

     useEffect(() => {
          const getProductSearch = async () => {
               try {
                    setLoading(true);
                    const response = await backend.get(`/search/${query}`);
                    console.log(response)
                    setSearchedProducts(response.data.data || []);
               } catch (error) {
                    console.error('Error fetching products:', error);
               } finally {
                    setLoading(false);
               }
          };

          if (query) {
               getProductSearch();
          }
     }, [query]);

     return (
          <div className="min-h-screen bg-gray-50 p-6">
               <h1 className="text-2xl font-bold text-gray-800 mb-6">
                    Search Results for: <span className="text-purple-600">{query}</span>
               </h1>

               {loading ? (
                    <p className="text-center text-gray-600">Loading...</p>
               ) : searchedProducts.length === 0 ? (
                    <p className="text-center text-gray-600">No results found for "{query}".</p>
               ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                         {searchedProducts.map((product) => (
                              <div
                                   key={product._id}
                                   className="bg-white shadow-lg rounded-lg p-4 relative group hover:scale-105 transform transition duration-300"
                              >
                                   <div className="relative">
                                        <Image
                                             src={`http://localhost:5000/${product.images[0]}` || '/placeholder.png'}
                                             width={100}
                                             height={200}
                                             alt={product.title}
                                             className="w-full h-40 object-cover rounded-lg mb-4 cursor-pointer"
                                             onClick={() => console.log(`Navigate to product: ${product._id}`)}
                                        />
                                   </div>
                                   <p className="font-semibold text-lg truncate">{product.title}</p>
                                   <p className="text-gray-600 text-sm">{product.price ? `$${product.price}` : 'Price not available'}</p>
                                   <button
                                        className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"
                                        onClick={() => console.log('Added to Cart:', product.id)}
                                   >
                                        Add to Cart
                                   </button>
                              </div>
                         ))}
                    </div>
               )}
          </div>
     );
};

export default SearchPage;
