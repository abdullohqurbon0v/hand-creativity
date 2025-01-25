'use client'
import { joinusimagesslide } from '@/constants';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
const JoinUs = () => {
     const router = useRouter()
     const onNavigateTelegramChannel = () => {
          router.push('https://t.me/only_manuaLabor')
     }
     return (
          <div className=''>
               <div className='bg-slate-950 h-screen text-white flex flex-col justify-center items-center '>
                    <motion.h1 initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className='font-monospace font-thin text-2xl sm:text-5xl'>Join to us telegram channel</motion.h1>
                    <motion.p initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1.5 }} className='text-slate-500 mt-2 '>To always on top of the news</motion.p>
                    <motion.button initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className='mt-10 border px-16 py-3 rounded-lg hover:bg-slate-900 transition-all hover:border-slate-400' onClick={onNavigateTelegramChannel}>Join</motion.button>
               </div>
          </div>
     )
}

export default JoinUs