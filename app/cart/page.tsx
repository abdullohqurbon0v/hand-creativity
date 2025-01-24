import React from "react";

const Page = () => {
     return (
          <div className="min-h-screen py-10 px-6">
               <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                         <h2 className="text-2xl font-bold mb-6">Checkout</h2>
                         <div className="space-y-6">
                              <div className=" shadow p-4 rounded-lg flex items-center">
                                   <img
                                        src="https://cdn.prod.website-files.com/64022de562115a8189fe542a/6616718fe4a871d7278a2037_Product-Concept-What-Is-It-And-How-Can-You-Best-Use-It.jpg"
                                        alt="Product"
                                        className="w-20 h-20 object-cover rounded"
                                   />
                                   <div className="ml-4 flex-1">
                                        <h3 className="font-bold">Apple iPhone 14 Pro Max 128Gb Deep Purple</h3>
                                        <p className="text-gray-500 text-sm">#25139526913894</p>
                                   </div>
                                   <div className="flex items-center space-x-4">
                                        <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                                        <span>1</span>
                                        <button className="px-2 py-1 bg-gray-200 rounded">+</button>
                                   </div>
                                   <p className="ml-4 font-bold">$1399</p>
                                   <button className="ml-4 text-gray-500 hover:text-red-500">X</button>
                              </div>
                              <div className="bg-white p-4 rounded-lg shadow flex items-center">
                                   <img
                                        src="https://cdn.prod.website-files.com/64022de562115a8189fe542a/6616718fe4a871d7278a2037_Product-Concept-What-Is-It-And-How-Can-You-Best-Use-It.jpg"
                                        alt="Product"
                                        className="w-20 h-20 object-cover rounded"
                                   />
                                   <div className="ml-4 flex-1">
                                        <h3 className="font-bold">AirPods Max Silver</h3>
                                        <p className="text-gray-500 text-sm">#53459358345</p>
                                   </div>
                                   <div className="flex items-center space-x-4">
                                        <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                                        <span>1</span>
                                        <button className="px-2 py-1 bg-gray-200 rounded">+</button>
                                   </div>
                                   <p className="ml-4 font-bold">$549</p>
                                   <button className="ml-4 text-gray-500 hover:text-red-500">X</button>
                              </div>
                              <div className="bg-white p-4 rounded-lg shadow flex items-center">
                                   <img
                                        src="https://cdn.prod.website-files.com/64022de562115a8189fe542a/6616718fe4a871d7278a2037_Product-Concept-What-Is-It-And-How-Can-You-Best-Use-It.jpg"
                                        alt="Product"
                                        className="w-20 h-20 object-cover rounded"
                                   />
                                   <div className="ml-4 flex-1">
                                        <h3 className="font-bold">Apple Watch Series 9 GPS 41mm Starlight Aluminium</h3>
                                        <p className="text-gray-500 text-sm">#63632324</p>
                                   </div>
                                   <div className="flex items-center space-x-4">
                                        <button className="px-2 py-1 bg-gray-200 rounded">-</button>
                                        <span>1</span>
                                        <button className="px-2 py-1 bg-gray-200 rounded">+</button>
                                   </div>
                                   <p className="ml-4 font-bold">$399</p>
                                   <button className="ml-4 text-gray-500 hover:text-red-500">X</button>
                              </div>
                         </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg">
                         <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                         <div className="space-y-4">
                              <div>
                                   <label className="block text-gray-600 mb-1">Discount code / Promo code</label>
                                   <input
                                        type="text"
                                        placeholder="Code"
                                        className="w-full px-4 py-2 border rounded-lg"
                                   />
                              </div>
                              <div>
                                   <label className="block text-gray-600 mb-1">Your bonus card number</label>
                                   <input
                                        type="text"
                                        placeholder="Enter Card Number"
                                        className="w-full px-4 py-2 border rounded-lg"
                                   />
                              </div>
                              <button className="w-full bg-gray-200 text-black py-2 rounded-lg">
                                   Apply
                              </button>
                         </div>
                         <div className="mt-6 space-y-2">
                              <div className="flex justify-between">
                                   <p>Subtotal</p>
                                   <p>$2347</p>
                              </div>
                              <div className="flex justify-between">
                                   <p>Estimated Tax</p>
                                   <p>$50</p>
                              </div>
                              <div className="flex justify-between">
                                   <p>Estimated shipping & Handling</p>
                                   <p>$29</p>
                              </div>
                              <div className="flex justify-between font-bold text-lg">
                                   <p>Total</p>
                                   <p>$2426</p>
                              </div>
                         </div>
                         <button className="w-full mt-4 bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600">
                              Boy
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default Page;
