"use client";

import { backend } from "@/http/api";
import React, { useEffect, useState } from "react";

const Page = () => {
     const [userCartProducts, setUserCartProducts] = useState([]);

     useEffect(() => {
          const getCartData = async () => {
               const response = await backend.get("/user-cart");
               setUserCartProducts(response.data.products);
          };

          getCartData();
     }, []);

     const removeFromCart = async (id) => {
          try {
               const res = await backend.delete(`/remove-from-cart/${id}`);
               if (res.status === 200) {
                    setUserCartProducts((prevProducts) =>
                         prevProducts.filter((product) => product._id !== id)
                    );
               }
          } catch (error) {
               console.error("Error removing product from cart:", error);
          }
     };

     console.log(userCartProducts)

     return (
          <div className="min-h-screen py-12 px-6">
               <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2">
                         <h2 className="text-3xl font-semibold text-gray-800 mb-8">Checkout</h2>
                         <div className="space-y-6">
                              {userCartProducts.length > 0 ? (
                                   userCartProducts.map((product) => (
                                        <div
                                             key={product._id}
                                             className="bg-white shadow-sm p-6 rounded-lg flex items-center gap-6"
                                        >
                                             <img
                                                  src={`http://localhost:5000/${product.images[0]}`}
                                                  alt={product.name}
                                                  className="w-24 h-24 object-cover rounded-lg"
                                             />
                                             <div className="flex-1">
                                                  <h3 className="text-lg font-semibold text-gray-800">
                                                       {product.name}
                                                  </h3>
                                                  <p className="text-sm text-gray-500">#{product.sku}</p>
                                             </div>
                                             <div className="flex items-center space-x-4">
                                                  <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
                                                       -
                                                  </button>
                                                  <span className="text-lg font-medium">{product.quantity}</span>
                                                  <button className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300">
                                                       +
                                                  </button>
                                             </div>
                                             <p className="ml-6 font-semibold text-gray-800">${product.price}</p>
                                             <button
                                                  className="ml-6 text-gray-400 hover:text-red-500 transition"
                                                  onClick={() => removeFromCart(product._id)}
                                             >
                                                  X
                                             </button>
                                        </div>
                                   ))
                              ) : (
                                   <p className="text-gray-600 text-center text-lg">Your cart is empty.</p>
                              )}
                         </div>
                    </div>
                    <div className="bg-white shadow-sm p-8 rounded-lg">
                         <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>
                         <div className="space-y-6">
                              <div>
                                   <label className="block text-gray-600 mb-2">Discount Code / Promo Code</label>
                                   <input
                                        type="text"
                                        placeholder="Enter Code"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                   />
                              </div>
                              <div>
                                   <label className="block text-gray-600 mb-2">Your Bonus Card Number</label>
                                   <input
                                        type="text"
                                        placeholder="Enter Card Number"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                   />
                              </div>
                              <button className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition">
                                   Apply
                              </button>
                         </div>

                         <div className="mt-8 space-y-4">
                              <div className="flex justify-between text-gray-600">
                                   <p>Subtotal</p>
                                   <p>$2347</p>
                              </div>
                              <div className="flex justify-between text-gray-600">
                                   <p>Estimated Tax</p>
                                   <p>$50</p>
                              </div>
                              <div className="flex justify-between text-gray-600">
                                   <p>Estimated Shipping & Handling</p>
                                   <p>$29</p>
                              </div>
                              <div className="flex justify-between font-bold text-lg text-gray-800">
                                   <p>Total</p>
                                   <p>$2426</p>
                              </div>
                         </div>

                         <button className="w-full mt-6 bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition">
                              Buy Now
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default Page;
