import {createStore , combineReducers , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {basketCountReducer,userLoginDataReducer} from './reducers';

const reducers=combineReducers({basketCountReducer,userLoginDataReducer});

export const Store=createStore(reducers,applyMiddleware(thunk))