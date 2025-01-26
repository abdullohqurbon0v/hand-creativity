'use client';

import authstore from '@/store/auth-store';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useEffect } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';

const SignUpPage = observer(() => {
     const router = useRouter();

     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          const isTrue = await authstore.signup()
          if (isTrue) {
               router.push('/')
          }
     }

     return (
          <div className="flex items-center justify-center min-h-[90vh] dark:bg-gray-900">
               <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg dark:bg-gray-800 dark:text-gray-200">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                         <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
                              Sign Up to Hand Creative
                         </h1>
                         <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                              Create your account by filling in the details below.
                         </p>
                         {authstore.error ? (
                              <p className='text-red-600 font-bold'>{authstore.error}</p>
                         ) : null}

                         <div>
                              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                   Username
                              </label>
                              <input
                                   type="text"
                                   name="username"
                                   id="username"
                                   placeholder="Enter your username"
                                   className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-blue-400"
                                   onChange={(e) => authstore.handleChangeInput(e)}

                              />
                         </div>

                         <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                   Email
                              </label>
                              <input
                                   type="email"
                                   name="email"
                                   id="email"
                                   placeholder="Enter your email"
                                   className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-blue-400"
                                   value={authstore.email}
                                   onChange={(e) => authstore.handleChangeInput(e)}
                              />
                         </div>

                         <div>
                              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                   Password
                              </label>
                              <input
                                   type="password"
                                   name="password"
                                   id="password"
                                   placeholder="Enter your password"
                                   value={authstore.password}
                                   className="w-full mt-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-blue-400"
                                   onChange={(e) => authstore.handleChangeInput(e)}
                              />
                         </div>

                         <div>
                              <button
                                   type="submit"
                                   className="w-full px-4 flex justify-center py-2 text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                              >
                                   {authstore.loading ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white border-opacity-50"></div>

                                   ) : "Sign Up"}
                              </button>
                         </div>

                         <div className="text-sm text-center  text-gray-600 dark:text-gray-400">
                              Already have an account?{' '}
                              <Link href="/signin" className="text-blue-600 hover:underline dark:text-blue-400">
                                   Sign In
                              </Link>
                         </div>
                    </form>
               </div>
          </div>
     );
})

export default SignUpPage;
