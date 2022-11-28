import React from 'react'
import { IconContext } from "react-icons";
import { AiOutlineHome } from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs'
import {BsTextParagraph} from 'react-icons/bs'
import {SlGraph} from 'react-icons/sl'
import {CiSettings} from 'react-icons/ci'



const menu = [
    {
        name: 'Home',
        slug: <AiOutlineHome />,
    },
    {
        name: 'Atheletes',
        slug: <BsPerson  />,

    },
    {
        name: 'Reports',
        slug: <BsTextParagraph />,

    },
    {
        name: 'Graphs',
        slug: <SlGraph />,

    },
    {
        name: 'Settings',
        slug: <CiSettings  />,
    },


]

const Sidebar = () => {
    return (
        <>
            <div className='fixed top-0 left-0 shadow-lg p-2 w-[5rem] bg-[#161616] h-screen'>
                <div className='bebas py-12 flex justify-center font-bold text-5xl uppercase text-white'>
                    danu
                </div>

                <div className='flex flex-col'>
                    {menu.map( item => { 
                        return <div className='flex py-4 flex-col'>
                                <IconContext.Provider
      value={{ color: '#1FBAD6', size: '40px' }}
    >
                            <div className='text-white justify-center flex'>
                                {item.slug}
                            </div>
                            </IconContext.Provider>
                            <div className='text-white text-center text-xs'>
                                {item.name}
                            </div>
                        </div>
                    })}
                </div>


            </div>
        </>
    )
}




export default Sidebar