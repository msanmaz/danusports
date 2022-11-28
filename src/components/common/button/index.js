import React from 'react'

const Button = ({action}) => {
  return (
<a href="#_" className="relative inline-flex items-center justify-center p-2 px-6 py-1s overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#1FBAD6] rounded-full shadow-md group">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#1FBAD6] group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="absolute flex items-center justify-center text-sm w-full h-full text-[#1FBAD6] transition-all duration-300 transform group-hover:translate-x-full ease">{action}</span>
<span className="relative invisible">Button Text</span>
</a>
    )
}

export default Button


