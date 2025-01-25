import { ChildProps } from '@/types'
import React from 'react'

const Layout = ({ children }: ChildProps) => {
     return (
          <div className='max-w-[1200px] mx-auto dark:bg-black'>
               {children}
          </div>
     )
}

export default Layout