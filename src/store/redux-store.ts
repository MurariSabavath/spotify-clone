import { combineReducers, createStore } from 'redux';
import messageReducer from '../reducers/messsages';
import trackReducer from '../reducers/set_track';

const reducers = combineReducers({ trackReducer, messageReducer });

const store = createStore(reducers);

export default store;
