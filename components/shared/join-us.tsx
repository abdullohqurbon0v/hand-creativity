'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const JoinUs = () => {
     const router = useRouter()
     const onNavigateTelegramChannel = () => {
          router.push('https://t.me/only_manuaLabor')
     }
     return (
          <div className='bg-slate-950 h-screen text-white flex flex-col justify-center items-center '>
               <h1 className='font-monospace font-thin text-5xl'>Join to us telegram channel</h1>
               <p className='text-slate-500 mt-2 '>To always on top of the news</p>
               <button className='mt-10 border px-16 py-3 rounded-lg hover:bg-slate-900 transition-all hover:border-slate-400' onClick={onNavigateTelegramChannel}>Join</button>
          </div>
     )
}

export default JoinUs