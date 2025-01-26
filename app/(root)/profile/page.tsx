'use client';

import React, { useEffect, useState } from "react";

interface User {
     avatar?: string;
     name: string;
     email: string;
     username?: string;
     phone?: string;
     address?: string;
}

const ProfilePage: React.FC = () => {
     const [user, setUser] = useState<User | null>(null);

     useEffect(() => {
          const storedUser = localStorage.getItem("user-info");
          if (storedUser) {
               setUser(JSON.parse(storedUser));
          } else {
               window.location.href = "/signin";
          }
     }, []);

     if (!user) {
          return <div>Loading...</div>;
     }

     return (
          <div className="min-h-screen flex flex-col items-center py-10">
               <div className=" shadow-lg rounded-lg w-full max-w-md p-6">
                    <div className="flex flex-col items-center">
                         <img
                              src={user.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVva9csN-zOiY2wG9CXNuAI1VRsFunaiD3nQ&s"}
                              alt="User Avatar"
                              className="w-24 h-24 rounded-full border-2 object-cover border-gray-300 mb-4"
                         />
                         <h2 className="text-2xl font-semibold">{user.name}</h2>
                         <p className="text-gray-500">{user.email}</p>
                    </div>
                    <div className="mt-6">
                         <h3 className="text-lg font-semibold mb-2">Profile Details</h3>
                         <ul className="space-y-2">
                              <li>
                                   <strong>Username:</strong> {user.username || "N/A"}
                              </li>
                              <li>
                                   <strong>Phone:</strong> {user.phone || "N/A"}
                              </li>
                              <li>
                                   <strong>Address:</strong> {user.address || "N/A"}
                              </li>
                         </ul>
                    </div>
                    <div className="mt-6">
                         <button
                              onClick={() => {
                                   localStorage.clear();
                                   window.location.href = "/signin";
                              }}
                              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                         >
                              Log Out
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default ProfilePage;
