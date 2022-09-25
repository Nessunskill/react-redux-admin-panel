const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }

        case 'FILTERS_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }

        case 'FILTERS_FETCHED':
                return {
                    ...state,
                    filters: action.payload,
                    filtersLoadingStatus: 'idle'
                }
        
        case 'FILTERS_FETCHING_ERROR':
                return {
                    ...state,
                    filtersLoadingStatus: 'error'
                }
        
        case 'SET_ACTIVE_FILTER':
                return {
                    ...state,
                    activeFilter: action.payload
                }

        case 'HERO_DELETE':
            return {
                ...state,
                // eslint-disable-next-line
                heroes: [...state.heroes.filter((item) => {
                    if (item.id !== action.payload) return item
                })]
                
            }

        case 'HERO_ADD':
            return {
                ...state,
                heroes: [...state.heroes, action.payload]
            }
        default: return state
    }
}

export default reducer;