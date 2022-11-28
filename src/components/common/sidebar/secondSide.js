import React from 'react'
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs'
import { BsTextParagraph } from 'react-icons/bs'
import { SlGraph } from 'react-icons/sl'
import { CiSettings } from 'react-icons/ci'
import useWindowSize from 'hooks/useWindowSize';
import { Link, useLocation } from 'react-router-dom';


const items = [{ icon: <AiOutlineHome size="25" />, text: 'Home', slug: '/Home' }, { icon: <BsPerson size="25" />, text: 'Athlete', slug: '/Athlete' }, { icon: <BsTextParagraph size="25" />, text: 'Reports', slug: '/' }, { icon: <SlGraph size="25" />, text: 'Graph', slug: '/' }, { icon: <CiSettings size="25" />, text: 'Settings', slug: '/' }]

const SecondSideBar = () => {


    const screenWidth = useWindowSize()
    console.log(screenWidth)
    return (
        <>
            <div className='sidebar-container'>
                <div className='bebas hidden md:inline-flex sidebar-heading'>
                    danu
                </div>
                
                
                {
                    items.map((item,i)=> {return(
                        <SideBarIcon key={i} item={item}/>

                    )})
                }



            </div>
        </>
    )
}


const SideBarIcon = ({ item }) => {
    const location = useLocation();
    return (    
        <>
            <Link to={item.slug}>
                <div className={`sidebar-icon group ${location.pathname.substring(1) === item.text ? "bg-[#1da5c2] text-white" : ""}`}>
                    {item.icon}
                    <span className="sidebar-tooltip group-hover:scale-100">{item.text}</span>

                </div>
            </Link>

        </>

    )

};

export default SecondSideBar