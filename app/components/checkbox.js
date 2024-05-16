import React, { useState } from 'react'
import { useFiltersDispatch } from '../lib/filters-context'

export default function Checkbox({ label, tableColumn, children }) {
    const [isTicked, setIsTicked] = useState(false)

    const dispatch = useFiltersDispatch()

    const handleChange = () => {
        setIsTicked(prevIsTicked => !prevIsTicked)
        dispatch({
            type: isTicked ? 'remove-box' : 'add-box', // Use the current value of isTicked
            payload: {
                [tableColumn]: label
            }
        });
    }


    return (
        <div className='p-1'>
            <label>
                <input className='mr-2' onChange={handleChange} value={isTicked} type='checkbox' />
                {label}
            </label>
            {children}
        </div>
    )
}
