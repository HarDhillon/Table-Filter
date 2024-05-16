"use client"

import React from 'react'
import { FiltersProvider } from '../lib/filters-context'

export default function FilterTable({ children }) {


    return (
        <FiltersProvider>
            {children}
        </FiltersProvider>
    )
}
