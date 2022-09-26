import { configureStore } from '@reduxjs/toolkit';
import heroesReducer from '../reducers/heroesReducer';
import filtersReducer from '../reducers/filtersReducer';

const stringMiddleWare = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer: {heroesReducer, filtersReducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleWare),
    devTools: process.env.NODE_ENV !== 'production',
});



// const store = createStore(
//     combineReducers({heroesReducer, filtersReducer}),
//     compose(
//         applyMiddleware(ReduxThunk, stringMiddleWare),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     ));

export default store;