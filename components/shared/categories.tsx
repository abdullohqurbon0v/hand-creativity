'use client'

import React, { useState } from 'react';
import { BiAlarm } from "react-icons/bi";

const Categories = () => {
     const [categories, setCategories] = useState([
          { id: 1, name: 'Bags', icon: BiAlarm },
          { id: 2, name: 'Some Text', icon: BiAlarm },
          { id: 3, name: 'Some Text', icon: BiAlarm },
          { id: 4, name: 'Some Text', icon: BiAlarm },
          { id: 5, name: 'Some Text', icon: BiAlarm },
     ]);

     return (
          <div className="max-w-[1200px] mx-auto py-3 font-monospace">
               <div className="flex overflow-scroll justify-center sm:justify-between gap-5 items-center">
                    {categories.map((category, idx) => (
                         <div
                              key={category.id}
                              className="flex w-full items-center gap-2 text-center cursor-pointer"
                         >
                              <div className="text-2xl text-white">
                                   <category.icon />
                              </div>
                              <div className="text-lg text-white">{category.name}</div>
                              {/* {category.id !== 5 && (
                                   <span className="hidden sm:block text-white">|</span>
                              )} */}
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default Categories;
