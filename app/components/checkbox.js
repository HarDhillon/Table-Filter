import React, { useState } from 'react'

export default function Checkbox({ label, children }) {
    const [val, setVal] = useState(false)
    const handleClick = () => {
        setVal(!val)
    }


    return (
        <div className='p-1'>
            <label>
                <input className='mr-2' onChange={handleClick} value={val} type='checkbox' />
                {label}
            </label>
            {children}
        </div>
    )
}
