import { createContext, useContext, useReducer } from 'react';

// Create a context for dispatching filter
// And one for reading current filters
const FiltersDispatchContext = createContext();
const FiltersContext = createContext();


const initialFilters = {}

function filtersReducer(filters, action) {
    switch (action.type) {
        case 'add': {
            const obj = action.payload
            const key = Object.keys(obj)[0]
            const value = obj[key]

            // If filter key already exists, add to the array
            if (filters[key]) {
                return {
                    ...filters,
                    [key]: [...filters[key], value]
                }
            } else {
                return { ...filters, [key]: [value] }
            }

        }

        case 'remove': {
            const obj = action.payload
            const key = Object.keys(obj)[0]
            const value = obj[key]

            if (filters[key]) {
                const updatedArray = filters[key].filter(item => item !== value);

                if (updatedArray.length !== filters[key].length) {
                    // If item was removed, update the state
                    const newState = {
                        ...filters,
                        [key]: updatedArray
                    };
                    // Check if the array length becomes 0, remove the key from the state
                    if (updatedArray.length === 0) {
                        delete newState[key];
                    }
                    return newState;
                }
            }
        }

        default: {
            return filters
        }
    }
}

export function FiltersProvider({ children }) {
    const [filters, dispatch] = useReducer(
        filtersReducer,
        initialFilters
    );

    return (
        <FiltersContext.Provider value={filters}>
            <FiltersDispatchContext.Provider
                value={dispatch}
            >
                {children}
            </FiltersDispatchContext.Provider>
        </FiltersContext.Provider>
    );
}



// Helper function to get filters context
export function useFilters() {
    return useContext(FiltersContext);
}

// Helper function to get filters dispatch context
export function useFiltersDispatch() {
    return useContext(FiltersDispatchContext);
}