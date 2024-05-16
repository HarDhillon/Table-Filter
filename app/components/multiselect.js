"use client"
import React, { useState } from 'react'
import { buildCheckBoxes } from '../lib/utils'

export default function MultiSelect({ filterValues, children }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    // Check Boxes are built based on the values in our filterData object
    const renderedBoxes = buildCheckBoxes(filterValues)

    return (
        <div className='inline-block relative'>
            <button className='border-solid py-2 px-5 border border-[#DDDDDD] w-[170px] text-left rounded' onClick={handleClick}>{children}</button>
            <div className={`absolute bg-white p-2 shadow-[0px_5px_15px_rgba(0,0,0,0.35)_;] rounded top-[43px] w-[170px] transition-all duration-200 ${isOpen ? 'visible opacity-100' : 'opacity-0 invisible'} `}>{renderedBoxes}</div>
        </div>
    )
}
