import React from 'react'

const options = [
    { value: 'SJ', name: 'Squat Jumps' },
    { value: 'Burpees', name: 'BP' }            
];

const Select = ({ props }) => {
    return (
        <>
            <select className="select select-bordered w-full max-w-xs">
            {options.map((e, key) => {
        return <option key={e.value} value={e.value}>{e.name}</option>;
    })}
            </select>
        </>
    )
}

export default Select