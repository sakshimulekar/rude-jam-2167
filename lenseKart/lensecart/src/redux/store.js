import {legacy_createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { reducer as authReducer } from './authReducer.js/reducer';
import { reducer as productReducer } from './productReducer.js/reducer';

const rootReducer = combineReducers({
    authReducer,
    productReducer
})
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))