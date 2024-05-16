import { createContext, useContext, useReducer } from 'react';

// Create a context for dispatching filter
// And one for reading current filters
const FiltersDispatchContext = createContext();
const FiltersContext = createContext();


const initialFilters = {}

function filtersReducer(filters, action) {
    switch (action.type) {
        case '': {
            return { ...filters }
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