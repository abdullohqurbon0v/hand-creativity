'use client'

import { sliders } from "@/constants";
import React, { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Slider = () => {
     const [currentIndex, setCurrentIndex] = useState(0);

     useEffect(() => {
          const interval = setInterval(() => {
               setCurrentIndex((prevIndex) =>
                    prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
               );
          }, 3000);

          return () => clearInterval(interval);
     }, []);

     const onChangeIndex = (idx: number) => {
          setCurrentIndex(idx)
     }

     console.log(sliders)

     return (
          <>
               <div className="relative w-full overflow-hidden  dark:bg-black">
                    <h1 className="text-xl font-semibold">Some text</h1>
                    <div
                         className="flex w-[100%] space-x-5 mt-3 transition-transform translate-x-[] duration-1000 ease-in-out"
                         style={{
                              transform: `translateX(-${currentIndex * 101.7}%)`,
                         }}
                    >
                         {sliders.map((item) => (
                              <div
                                   key={item.id}
                                   className="max-w-[100%] lg:min-w-full h-[400px] flex-shrink-0"
                              >
                                   <img
                                        src={item.image.src}
                                        alt="Slider image"
                                        className="w-full h-full object-cover rounded-3xl"
                                   />
                                   <button className="z-50 text-5xl">Buy Now</button>
                              </div>
                         ))}
                    </div>

                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
                         {sliders.map((_, index) => (
                              <div
                                   key={index}
                                   className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"} transition-all duration-300`} onClick={() => onChangeIndex(index)}
                              ></div>
                         ))}
                    </div>
                    <div className="absolute z-10 flex items-center space-x-5">
                         <button><FaAngleLeft size={30} /></button>
                         <button><FaAngleRight size={30} /></button>
                    </div>
               </div>
          </>
     );
};

export default Slider;
