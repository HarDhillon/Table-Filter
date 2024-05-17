import { createContext, useContext, useReducer } from 'react';

// Create a context for dispatching filter
// And one for reading current filters
const FiltersDispatchContext = createContext();
const FiltersContext = createContext();


// todo change our initialFilters to use below objects
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

            // If filter key already exists, add to the array
            if (filters.boxFilter[key]) {
                return {
                    ...filters,
                    boxFilter: {
                        ...filters.boxFilter,
                        [key]: [...filters.boxFilter[key], value]
                    }
                }
            } else {
                return {
                    ...filters,
                    boxFilter: {
                        [key]: [value]

                    }
                }
            }

        }

        case 'remove-box': {
            const obj = action.payload
            const key = Object.keys(obj)[0]
            const value = obj[key]

            if (filters.boxFilter[key]) {
                const updatedArray = filters.boxFilter[key].filter(item => item !== value);

                if (updatedArray.length !== filters.boxFilter[key].length) {
                    // If item was removed, update the state
                    const newState = {
                        ...filters,
                        boxFilter: {
                            [key]: updatedArray

                        }
                    };
                    // Check if the array length becomes 0, remove the key from the state
                    if (updatedArray.length === 0) {
                        delete newState.boxFilter[key];
                    }
                    return newState;
                }
            }
        }

        case 'search': {
            return {
                ...filters,
                searchFilter: action.payload
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