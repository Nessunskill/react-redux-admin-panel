import { createAction } from "@reduxjs/toolkit";

export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

export const fetchFilters = (request) => (dispatch) => {
    dispatch(filtersFetching());
    request('http://localhost:3001/filters')
        .then(filters => dispatch(filtersFetched(filters)))
        .catch(() => dispatch(filtersFetchingError()))
}

export const heroesFetching = createAction('HEROES_FETCHING');

export const heroesFetched = createAction('HEROES_FETCHED');

export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');

export const heroDelete = createAction('HERO_DELETE');

export const addHero = createAction('HERO_ADD');

// FILTERS

export const filtersFetching = createAction('FILTERS_FETCHING');

export const filtersFetched = createAction('FILTERS_FETCHED');

export const filtersFetchingError = createAction('FILTERS_FETCHING_ERROR');

export const setActiveFilter = createAction('SET_ACTIVE_FILTER');


// export const filtersFetched = (filters) => {
//     return {
//         type: 'FILTERS_FETCHED',
//         payload: filters
//     }
// }


// export const setActiveFilter = (filter) => {
//     return {
//         type: 'SET_ACTIVE_FILTER',
//         payload: filter
//     }
// }

// export const heroDelete = (id) => {
//     return {
//         type: 'HERO_DELETE',
//         payload: id
//     }
// }

// export const addHero = (newHero) => {
//     return {
//         type: 'HERO_ADD',
//         payload: newHero
//     }
// }