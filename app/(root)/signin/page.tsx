'use client'

import authstore from '@/store/auth-store'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const SignInPage = () => {
     const router = useRouter()

     useEffect(() => {
          const token = localStorage.getItem('token')
          // if (!token) {
          //      router.push('/')
          // }
     }, [])


     return (
          <div className='flex items-center justify-center mt-24'>
               <form className='flex flex-col space-y-5'>
                    <h1 className='text-4xl font-monospace'>Sign In ro Nand Creative</h1>
                    <div className=''>
                         <input type="text" placeholder='Enter a username' name="username" id="username" className='w-full border px-4 py-2 rounded-lg' onChange={(e) => authstore.handleChangeInput(e)} />
                    </div>
                    <div className=''>
                         <input type="text" placeholder='Enter a username' name="username" id="username" className='w-full border px-4 py-2 rounded-lg' />
                    </div>
                    <div className=''>
                         <input type="text" placeholder='Enter a username' name="username" id="username" className='w-full border px-4 py-2 rounded-lg' />
                    </div>
               </form>
          </div>
     )
}

export default SignInPage