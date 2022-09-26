const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

const heroesReducer = (state = initialState, action) => {
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

export default heroesReducer;