import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from 'redux-thunk'
import { authReducer } from './AuthReducer/auth.reducer';
import { reducer } from './reducer';

const rootReducer = combineReducers({
    app: reducer,
    auth: authReducer
})


export const store =legacy_createStore (rootReducer, applyMiddleware(thunk))