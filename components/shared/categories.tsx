'use client'

import React, { useState } from 'react';

const Categories = () => {
     const [categories, setCategories] = useState([
          { id: 1, name: 'Bags', icon: 'icon' },
          { id: 2, name: 'Some Text', icon: 'icon' },
          { id: 3, name: 'Some Text', icon: 'icon' },
          { id: 4, name: 'Some Text', icon: 'icon' },
          { id: 5, name: 'Some Text', icon: 'icon' },
     ]);

     return (
          <div className="max-w-[1200px] mx-auto flex justify-between items-center py-3 font-monospace">
               {categories.map((category, idx) => (
                    <div
                         key={category.id}
                         className="flex items-center text-center cursor-pointer"
                    >
                         <div className="text-xl">{category.icon}</div>
                         <div className="text-lg text-white ">{category.name}</div><span className='ml-10 text-white'>{category.id == 5 ? "" : "|"}</span>
                    </div>
               ))}
          </div>
     );
};

export default Categories;
