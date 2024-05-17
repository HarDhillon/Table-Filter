"use client"
import React, { useState } from 'react'
import { useFiltersDispatch } from '../lib/filters-context'

export default function Search() {
    const [input, setInput] = useState('')
    const dispatch = useFiltersDispatch()

    const handleChange = (value) => {
        setInput(value)

        dispatch({
            type: 'search',
            payload: value
        });
    }
    return (
        <div className='border-b-2 border-[#0E2F53] mb-8 flex items-center	'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
                <path id="Icon_ionic-md-search" data-name="Icon ionic-md-search" d="M18.745,17.071h-.912l-.342-.286a7.564,7.564,0,0,0,1.767-4.857,7.379,7.379,0,1,0-7.351,7.429,7.637,7.637,0,0,0,4.843-1.771l.342.286v.914l5.7,5.714L24.5,22.786Zm-6.838,0a5.143,5.143,0,1,1,5.128-5.143A5.114,5.114,0,0,1,11.908,17.071Z" transform="translate(-4.5 -4.5)" fill="#d0043c" />
            </svg>

            <p className='flex ml-3 items-center text-xl font-semibold text-[#002F56]'>SEARCH</p>
            <input className='w-full p-3 ml-10 bg-[#F8F9FA] focus:outline-none focus:border-b-0 border-2 border-b-0 border-transparent focus:border-[#335776] rounded-t' placeholder='Enter fund name' type='text' onChange={e => handleChange(e.target.value)} value={input} />
        </div>
    )
}
