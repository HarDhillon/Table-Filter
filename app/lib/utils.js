import Checkbox from '../components/checkbox'

export const buildCheckBoxes = (filterValues) => {
    // If just an array we can simply return
    if (Array.isArray(filterValues)) {
        return filterValues.map((filterName, index) => {
            return (
                <Checkbox label={filterName} key={index}></Checkbox>
            )
        })
        // Otherwise we need to build titles and sub-boxes 
    } else {
        return Object.entries(filterValues).map(([key, value]) => {
            // If value at top level is array
            if (Array.isArray(value)) {
                const items = value.map((item, index) => <Checkbox label={item} key={index}></Checkbox>)
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
                            <Checkbox label={key} key={key}>{childCheckBoxes}</Checkbox>
                        )
                    } else {
                        return <Checkbox label={key} key={key}></Checkbox>
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
    return data
}