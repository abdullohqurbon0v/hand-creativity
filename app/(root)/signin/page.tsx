'use client';

import authstore from '@/store/auth-store';
import userStore from '@/store/user-store';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useEffect } from 'react';

const SignInPage = observer(() => {
     const router = useRouter();

     useEffect(() => {
          const token = localStorage.getItem('access_token');
          if (token) {
               router.push('/');
          }
     }, [router]);

     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const isTrue = await authstore.signin();
          if (isTrue) {
               const user = localStorage.getItem('user-info')
               userStore.setUser(user)
               router.push('/');
          }
     };



     return (
          <div className="flex items-center justify-center min-h-screen dark:bg-gray-900">
               <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg dark:bg-gray-800 dark:text-gray-200">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                         <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
                              Sign In to Nand Creative
                         </h1>
                         <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                              Welcome back! Please enter your details below.
                         </p>
                         {authstore.error && (
                              <p className='text-red-600 font-bold'>{authstore.error}</p>
                         )}
                         <div>
                              <label
                                   htmlFor="email"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                              >
                                   Email
                              </label>
                              <input
                                   type="email"
                                   name="email"
                                   id="email"
                                   value={authstore.email}
                                   onChange={(e) => authstore.handleChangeInput(e)}
                                   placeholder="Enter your email"
                                   className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-blue-400"
                              />
                         </div>

                         <div>
                              <label
                                   htmlFor="password"
                                   className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                              >
                                   Password
                              </label>
                              <input
                                   type="password"
                                   name="password"
                                   id="password"
                                   value={authstore.password}
                                   onChange={(e) => authstore.handleChangeInput(e)}
                                   placeholder="Enter your password"
                                   className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-blue-400"
                              />
                         </div>
                         <div>
                              <button
                                   type="submit"
                                   className="w-full flex justify-center px-4 py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                                   disabled={authstore.loading}
                              >
                                   {authstore.loading ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white border-opacity-50"></div>
                                   ) : (
                                        "Sign In"
                                   )}
                              </button>
                         </div>

                         <div className="text-sm text-center text-gray-600 dark:text-gray-400">
                              Don’t have an account?{' '}
                              <Link href="/signup" className="text-blue-600 hover:underline dark:text-blue-400">
                                   Sign up
                              </Link>
                         </div>
                    </form>
               </div>
          </div>
     );
});

export default SignInPage;
