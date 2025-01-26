'use client';

import React, { useState } from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
     const [priceRange, setPriceRange] = useState([0, 2000]); // Example price range
     const [selectedBrands, setSelectedBrands] = useState([]);

     const handleBrandSelection = (brand) => {
          setSelectedBrands((prev) =>
               prev.includes(brand)
                    ? prev.filter((b) => b !== brand)
                    : [...prev, brand]
          );
     };

     const handleApplyFilters = () => {
          setFilters({ priceRange, selectedBrands });
     };

     return (
          <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md">
               <h2 className="text-lg font-semibold mb-4">Filters</h2>

               {/* Price Range */}
               <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">Price</h3>
                    <div className="flex items-center gap-2">
                         <input
                              type="number"
                              className="border border-gray-300 rounded p-2 w-full"
                              placeholder="From"
                              value={priceRange[0]}
                              onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                         />
                         <input
                              type="number"
                              className="border border-gray-300 rounded p-2 w-full"
                              placeholder="To"
                              value={priceRange[1]}
                              onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                         />
                    </div>
               </div>

               {/* Brand Selection */}
               <div className="mb-6">
                    <h3 className="text-sm font-medium mb-2">Brand</h3>
                    <div className="flex flex-col gap-2">
                         {['Apple', 'Samsung', 'Xiaomi', 'Poco', 'OPPO'].map((brand) => (
                              <label key={brand} className="flex items-center gap-2">
                                   <input
                                        type="checkbox"
                                        className="form-checkbox"
                                        checked={selectedBrands.includes(brand)}
                                        onChange={() => handleBrandSelection(brand)}
                                   />
                                   {brand}
                              </label>
                         ))}
                    </div>
               </div>

               {/* Apply Filters Button */}
               <button
                    className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition"
                    onClick={handleApplyFilters}
               >
                    Apply Filters
               </button>
          </aside>
     );
};

export default FilterSidebar;
