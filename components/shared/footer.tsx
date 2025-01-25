import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
     return (
          <div className="bg-[rgb(137,62,249)] text-white py-10 px-6">
               <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                         <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 flex items-center justify-center rounded-lg">
                                   <img src="logo.png" alt="Logo" />
                              </div>
                              <h2 className="text-xl font-bold">Hand Creativity</h2>
                         </div>
                         <p className="mt-4">
                              We are a residential interior design firm located in Portland. Our
                              boutique-studio offers more than
                         </p>
                         <div className="flex items-center mt-6 space-x-4">
                              <Link href="#" className="text-white text-xl">
                                   <FaInstagram />
                              </Link>
                              <Link href="#" className="text-white text-xl">
                                   <FaTelegram />
                              </Link>
                              <Link href="#" className="text-white text-xl">
                                   <FaLinkedin />
                              </Link>
                              <Link href="#" className="text-white text-xl">
                                   <i className="fab fa-instagram"></i>
                              </Link>
                         </div>
                    </div>
                    <div>
                         <h3 className="text-lg font-bold mb-4">Services</h3>
                         <ul className="space-y-2">
                              <li>Bonus program</li>
                              <li>Gift cards</li>
                              <li>Credit and payment</li>
                              <li>Service contracts</li>
                              <li>Non-cash account</li>
                              <li>Payment</li>
                         </ul>
                    </div>
                    <div>
                         <h3 className="text-lg font-bold mb-4">Assistance to the buyer</h3>
                         <ul className="space-y-2">
                              <li>Find an order</li>
                              <li>Terms of delivery</li>
                              <li>Exchange and return of goods</li>
                              <li>Guarantee</li>
                              <li>Frequently asked questions</li>
                              <li>Terms of use of the site</li>
                         </ul>
                    </div>
                    <div>
                         <h3 className="text-lg font-bold mb-4">Contacts</h3>
                         <ul className="space-y-2">
                              <li>+998 91 600 83 00</li>
                              <li>+998 91 600 83 00</li>
                              <li>+998 91 600 83 00</li>
                         </ul>
                    </div>
               </div>
          </div>
     );
};

export default Footer;
