import modeStore from '@/store/mode-store'
import { ChildProps } from '@/types'
import { observer } from 'mobx-react-lite'
import React from 'react'

const MainLayout = observer(({ children }: ChildProps) => {
     return (
          <div className={`${modeStore.status === 'dark' ? 'dark' : null} `}>
               {children}
          </div>
     )
})

export default MainLayout