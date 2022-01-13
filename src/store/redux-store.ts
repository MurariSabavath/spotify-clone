import { createStore } from 'redux';
import trackReducer from '../reducers/set_track';

const store = createStore(trackReducer);

export default store;
