import React from 'react'
import SecondSideBar from '../sidebar/secondSide'
import Topbar from '../topbar'
const Layout = ({children}) => {
  return (
    <>
        <SecondSideBar/>
        <Topbar/>
        <main className='flex w-full md:pl-[6rem] md:pr-[1.1rem] pt-[11rem]'>
            {children}
        </main>
    </>

  )
}

export default Layout