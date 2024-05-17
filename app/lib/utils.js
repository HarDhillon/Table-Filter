import Checkbox from '../components/checkbox'

export const buildCheckBoxes = (filterValues, tableColumn) => {
    // If just an array we can simply return
    if (tableColumn === "Market & Region") {
        tableColumn = "Region"
    }
    if (Array.isArray(filterValues)) {
        return filterValues.map((filterName, index) => {
            return (
                <Checkbox tableColumn={tableColumn} label={filterName} key={index}></Checkbox>
            )
        })
        // Otherwise we need to build titles and sub-boxes 
    } else {
        return Object.entries(filterValues).map(([key, value]) => {
            // If value at top level is array
            if (Array.isArray(value)) {
                const items = value.map((item, index) => <Checkbox tableColumn={tableColumn} label={item} key={index}></Checkbox>)
                return (
                    <div className='mb-4 last:mb-0' key={key}>
                        <h2 className='text-[#003057] font-bold'>{key}</h2>
                        {items}
                    </div>
                )
                // Otherwise map through the object in the value
            } else {
                // Within, check if there child tick boxes
                const items = Object.entries(value).map(([key, value]) => {
                    if (value.length > 0) {
                        const childCheckBoxes = value.map(childLabel => {
                            return (
                                <div key={childLabel} className='p-1'>
                                    <label>
                                        <input className='mr-2' type='checkbox' />
                                        {childLabel}
                                    </label>
                                </div>
                            )
                        })
                        return (
                            <Checkbox tableColumn={tableColumn} label={key} key={key}>{childCheckBoxes}</Checkbox>
                        )
                    } else {
                        return <Checkbox tableColumn={tableColumn} label={key} key={key}></Checkbox>
                    }
                })
                return (
                    <div className='mb-4 last:mb-0' key={key}>
                        <h2 className='text-[#003057] font-bold'>{key}</h2>
                        {items}
                    </div>
                )
            }
        })
    }
}

export const filterData = (data, filters) => {

    const searchParams = filters.searchFilter.toLowerCase()

    // Filter through our search first
    const searchFilteredData = data.filter(item => {
        const fundName = item["Fund Name"].toLowerCase()
        if (fundName.indexOf(searchParams) > -1) {
            return true
        }
    })

    // Then filter check boxes
    const filteredData = searchFilteredData.filter(item => {
        // Iterate through each key in the filter
        for (let key in filters.boxFilter) {
            // Check if the key exists in the item and if the value is not in the filter array
            if (item[key] && !filters.boxFilter[key].includes(item[key])) {
                // Exclude the item if any criteria fail
                return false;
            }
        }
        // Include the item if all criteria pass
        return true;
    });

    return filteredData
}