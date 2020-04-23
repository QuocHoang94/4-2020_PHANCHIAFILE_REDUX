import {createStore} from 'redux';
import{myvalue} from './../actions/index';
import myReducer from './../reducers/index'

const store = createStore(myReducer);
export default store;