import { createReducer } from "@reduxjs/toolkit";

import {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroDelete,
    addHero
} from '../actions'

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

const heroesReducer = createReducer(initialState, {
    [heroesFetching] : state => {state.heroesLoadingStatus = 'loading'},
    [heroesFetched] : (state, action) => {
                    state.heroesLoadingStatus = 'idle';
                    state.heroes = action.payload;
                },
    [heroesFetchingError] : state => {state.heroesLoadingStatus = 'error'},
    [addHero] : (state, action) => {state.heroes.push(action.payload)},
    [heroDelete] : (state, action) => {state.heroes = state.heroes.filter(item => item.id !== action.payload)}
            },
    [],
    state => state
);

// const heroesReducer = createReducer(initialState, (builder) => {
//     builder
//         .addCase(heroesFetching, (state) => {
//             state.heroesLoadingStatus = 'loading';
//         })
//         .addCase(heroesFetched, (state, action) => {
//             state.heroesLoadingStatus = 'idle';
//             state.heroes = action.payload;
//         })
//         .addCase(heroesFetchingError, (state) => {
//             state.heroesLoadingStatus = 'error';
//         })
//         .addCase(addHero, (state, action) => {
//             state.heroes.push(action.payload);
//         })
//         .addCase(heroDelete, (state, action) => {
//             state.heroes = state.heroes.filter(item => item.id !== action.payload);
//         })
//         .addDefaultCase(() => {});
// });

// const heroesReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle'
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'HERO_DELETE':
//             return {
//                 ...state,
//                 heroes: [...state.heroes.filter((item) => {
//                     if (item.id !== action.payload) return item
//                 })]  
//             }
//         case 'HERO_ADD':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload]
//             }
//         default: return state
//     }
// }

export default heroesReducer;