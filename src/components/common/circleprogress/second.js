import useWindowSize from 'hooks/useWindowSize'
import React from 'react'

const CircleProgressSecond = ({value}) => {
 const width = useWindowSize()
  return (
    <>
<div className={`radial-progress !text-[#73EC0F]`} style={{ "--value": "60", "--size":`${width.width >= 450 ? '4rem' : '3rem'}`, "--thickness": "4px" }}>{value}%</div>
    </>
  )
}



export default CircleProgressSecond