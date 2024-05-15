"use client"

import React, { useState } from 'react'

export default function Table({ data }) {
    const [sortedRows, setRows] = useState(data)
    const keys = Object.keys(data[0])
    const firstKeys = keys.slice(0, 4);
    const remainingKeys = keys.slice(4);

    return (
        <table>
            <thead>
                <tr className='text-left'>
                    {/* Get an array of our keys and map over them */}
                    {firstKeys.map((entry, index) => (
                        <th className='text-white bg-hugu-light-blue p-3 font-normal' key={index}>{entry}</th>
                    ))}

                    {/* Get an array of our keys and map over them */}
                    {remainingKeys.map((entry, index) => (
                        <th className='text-white bg-hugu-dark-blue p-3 font-normal' key={index}>{entry}</th>
                    ))}

                </tr>
            </thead>
            <tbody>
                {sortedRows.map((row, index) => (
                    <tr key={index}>
                        {/* Get an array of our values and map over them */}
                        {Object.values(row).map((entry, columnIndex) => (
                            <td className={`p-3 border-solid border-b border-[#E3E2E2] ${columnIndex === 0 ? 'text-[#003057]' : ''} ${columnIndex === 3 ? 'border-solid border-e' : ''}`} key={columnIndex}>{entry}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
