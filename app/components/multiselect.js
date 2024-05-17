"use client"
import React, { useState } from 'react'
import { buildCheckBoxes } from '../lib/utils'
import { FaAngleDown } from "react-icons/fa6";

export default function MultiSelect({ filterValues, tableColumn, children }) {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    // Check Boxes are built based on the values in our filterData object
    const renderedCheckBoxes = buildCheckBoxes(filterValues, tableColumn)

    return (
        <div className='inline-block relative bg-white'>
            <button className='border-solid py-2 px-5 border border-[#DDDDDD] min-w-[200px] text-left rounded' onClick={handleClick}>
                <div className='flex justify-between'>
                    <p className='whitespace-nowrap text-sm'>{children}</p>
                    <div className='flex items-center'>
                        <FaAngleDown className={`text-[#D0043C] transition-transform duration-200 ${isOpen ? '-scale-y-100 text-[#ED6B1F]' : ''}`} />
                    </div>

                </div>
            </button>
            <div className={`absolute bg-white p-3 shadow-[0px_5px_15px_rgba(0,0,0,0.35)_;] rounded top-[43px] min-w-[200px] transition-all duration-200 ${isOpen ? 'visible opacity-100' : 'opacity-0 invisible'} `}>{renderedCheckBoxes}</div>
        </div>
    )
}
