import CircleProgress from 'components/common/circleprogress'
import CircleProgressSecond from 'components/common/circleprogress/second'
import React from 'react'
import Button from '../button'

//todo refactor components to smaller chunks

const Topbar = () => {
  return (
    <>
      <div className='topbar bg-[#161616] shadow-lg h-[9rem]'>
        <div className='md:flex-1 flex md:pl-[8rem]'>
          <ProfileBanner />

        </div>

        <LoadAndRecovery value={72} />
        <div className='md:px-[3rem]'></div>

        <div className='pr-[1rem] md:pr-[5rem]'>
          <StanceRatio />

        </div>


      </div>
    </>
  )
}


const LoadAndRecovery = ({ value }) => {
  return (
    <>
      <div className='topbar-icons'>
        <CircleProgress value={value} color={'#1DA5C0'} />
        <div className='px-4'></div>
        <CircleProgressSecond value={'68'} color={'#73EC0F'} />
      </div>
    </>
  )
}


const tabs = [
  {
    title: "max",
    value: "15.2",
  },
  {
    title: "min",
    value: "13.2",
  },
  {
    title: "max",
    value: "17.1",
  },
];
const StanceRatio = ({ data }) => {
  return (
    <>
      <div className='flex flex-col'>
        <div className='text-xs md:text-2xl px-2 whitespace-nowrap	 justify-center text-white bebas'>Gait - Swing Stance Ratio</div>

        <div className='flex flex-row'>
          {
            tabs.map((item) => {
              return (
                <div className='flex bebas flex-col uppercase px-[0.70rem] md:px-4 text-white'>

                  <div className='text-xs font-bold'>
                    {item.title}
                  </div>
                  <div className='text-xs md:text-base text-center'>
                    {item.value}
                  </div>
                </div>
              )
            })
          }
        </div>







      </div>

    </>
  )
}

const ProfileBanner = () => {
  return (
    <>
      <div className=' flex flex-row'>

        <div className='px-4'>
          <div className="avatar online placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
              <span className="text-xl">PF</span>
            </div>
          </div>

        </div>

        <div className='flex flex-col items-center'>
          <div className='text-xl hidden md:inline-flex text-white bebas'>
            Patrick Fearon
          </div>

          <div className='hidden md:inline-flex'>
            <Button action={'Edit Profile'} />
          </div>
        </div>

      </div>
    </>
  )
}


export default Topbar