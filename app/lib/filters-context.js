import { createContext, useContext, useReducer } from 'react';

// Create a context for dispatching filter
// And one for reading current filters
const FiltersDispatchContext = createContext()
const FiltersContext = createContext()


const initialFilters = {
    searchFilter: '',
    boxFilter: {

    }
}

function filtersReducer(filters, action) {
    switch (action.type) {
        case 'add-box': {
            const obj = action.payload
            const key = Object.keys(obj)[0]
            const value = obj[key]

            return {
                ...filters,
                boxFilter: {
                    ...filters.boxFilter,
                    [key]: [...(filters.boxFilter[key] || []), value]
                }
            }
        }

        case 'remove-box': {
            const obj = action.payload
            const key = Object.keys(obj)[0]
            const value = obj[key]

            if (!filters.boxFilter[key]) return filters;

            const updatedArray = filters.boxFilter[key].filter(item => item !== value)
            const newState = {
                ...filters,
                boxFilter: {
                    ...filters.boxFilter,
                    [key]: updatedArray
                }
            };

            if (updatedArray.length === 0) {
                delete newState.boxFilter[key]
            }

            return newState
        }

        case 'search': {
            return {
                ...filters,
                searchFilter: action.payload.toString() // Ensure payload is always a string
            }
        }

        default: {
            return filters;
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