
import JoinUs from '@/components/shared/join-us'
import { ChildProps } from '@/types'
import React from 'react'

const MainLayout = ({ children }: ChildProps) => {
     return (
          <div>
               <main className='max-w-[1200px] dark:bg-black mx-auto'>
                    {children}
               </main>
               <JoinUs />

          </div >
     )
}

export default MainLayout