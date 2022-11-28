import Calendar from 'components/common/calendar'
import Select from 'components/common/select'
import React from 'react'

const Pickers = () => {
    return (
        <>
            <div className='picker-container items-center'>

                <div className='items-center mx-4'>
                    <div className='text-base px-1 py-4'> Exercise Type</div>
                    <Select />
                    <button className='btn btn-ghost md:mx-[3rem] my-4'>Select All Sessions</button>
                </div>
            
                <div className='mx-4'>
                <div className='text-base px-1 py-4'> Filters</div>
                    <Select/>
                    <button className='btn btn-ghost md:mx-[3rem] my-4'>Remove All Filters</button>
                </div>

                <div className='col-end-2 px-[2.5rem] md:col-end-4'>
                    <Calendar />

                </div>


            </div>


        </>
    )
}

export default Pickers