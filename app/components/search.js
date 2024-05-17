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
        <div className='border-b-2 border-[#0E2F53] mb-8'>
            <input className='w-full p-3' placeholder='Enter fund name' type='text' onChange={e => handleChange(e.target.value)} value={input} />
        </div>
    )
}
