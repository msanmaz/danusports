import useWindowSize from 'hooks/useWindowSize'
import React from 'react'

const CircleProgress = ({value,color}) => {
  const width = useWindowSize()
  return (
    <>
<div className={`radial-progress`} style={{ "--value": "60", "--size":`${width.width >= 450 ? '4rem' : '3rem'}`, "--thickness": "4px" }}>{value}%</div>
    </>
  )
}



export default CircleProgress